// var PxLoaderImage = require('./PxLoaderImage');
// var AnalyticsCommon = require('analytics/analyticsCommon');
/*
 * PixelLab Resource Loader
 * Loads resources while providing progress updates.
 *
 *
 * @example:
 *  var _load = new GImgLoader()
    _load.loadCjs(lib_load,images,function (per) {
        console.log('loading=',per);
     },function () {
        console.log('loaded');
     });
 *
 */


function GImgLoader(){
    /*
     *加载flash生成后的文件
     * @Param
     *    _lib(需要加载的图片文件数组)，_images（createjs Object），
     *    _loading（正在加载中回调函数），_loaded（加载完成回调函数）
     */
    this.loadCjs = function(_lib,_images,_loading,_loaded){
        var main_load = new PxLoader();
        main_load.addProgressListener(loading);
        main_load.addCompletionListener(handleComplete);
        function loading(evt) {
            var _t = ((evt.completedCount / evt.totalCount) * 100 >> 0);
            if(_loading){
                _loading(_t);
            }
            //var _t = (evt.loaded*100>>0)+"%";
            //console.log(_t);
            //$(".loadTxt").html(_t);
            _images[evt.resource.id] = evt.resource.img;
        }
        function handleComplete(evt) {
            if(_loaded){_loaded();}
        }

        main_load.addImgArray(_lib);
        main_load.start();

        return main_load;
    }
}

function PxLoader(settings) {

    // merge settings with defaults
    settings = settings || {};
    this.settings = settings;

    // how frequently we poll resources for progress
    if (settings.statusInterval == null) {
        settings.statusInterval = 5000; // every 5 seconds by default
    }

    // delay before logging since last progress change
    if (settings.loggingDelay == null) {
        settings.loggingDelay = 20 * 1000; // log stragglers after 20 secs
    }

    // stop waiting if no progress has been made in the moving time window
    if (settings.noProgressTimeout == null) {
        settings.noProgressTimeout = Infinity; // do not stop waiting by default
    }

    var entries = [],
    // holds resources to be loaded with their status
        progressListeners = [],
        timeStarted, progressChanged = Date.now();

    /**
     * The status of a resource
     * @enum {number}
     */
    var ResourceState = {
        QUEUED: 0,
        WAITING: 1,
        LOADED: 2,
        ERROR: 3,
        TIMEOUT: 4
    };

    var sendTime = function(){
        var time = Math.ceil((new Date().getTime() - timeStarted)/1000);
        if(time > 0){
            var category = '0-2s';
            if(time > 2 && time < 5){
                category = '2-5s';
            }else if(time > 5 && time < 10){
                category = '5-10s';
            }else if(time > 10 && time < 15){
                category = '10-15s';
            }else if(time > 15 && time < 30){
                category = '15-30s';
            }else if(time > 30 && time < 60){
                category = '30-60s';
            }else if(time > 60 && time < 120){
                category = '60-120s';
            }else if(time > 120 && time < 300){
                category = '120-300s';
            }else if(time > 300){
                category = '>300s';
            }

           // AnalyticsCommon.sendEvent(category, time, AnalyticsCommon.config.projectName + "Loading")
        }
    }

    // places non-array values into an array.
    var ensureArray = function (val) {
        if (val == null) {
            return [];
        }

        if (Array.isArray(val)) {
            return val;
        }

        return [val];
    };

    // add an entry to the list of resources to be loaded
    this.add = function (resource) {

        // TODO: would be better to create a base class for all resources and
        // initialize the PxLoaderTags there rather than overwritting tags here
        resource.tags = new PxLoaderTags(resource.tags);

        // ensure priority is set
        if (resource.priority == null) {
            resource.priority = Infinity;
        }

        entries.push({
            resource: resource,
            status: ResourceState.QUEUED
        });
    };

    this.addProgressListener = function (callback, tags) {
        progressListeners.push({
            callback: callback,
            tags: new PxLoaderTags(tags)
        });
    };

    this.addCompletionListener = function (callback, tags) {
        progressListeners.push({
            tags: new PxLoaderTags(tags),
            callback: function (e) {
                if (e.completedCount === e.totalCount) {
                    callback(e);
                    sendTime();
                }
            }
        });
    };

    // creates a comparison function for resources
    var getResourceSort = function (orderedTags) {

        // helper to get the top tag's order for a resource
        orderedTags = ensureArray(orderedTags);
        var getTagOrder = function (entry) {
            var resource = entry.resource,
                bestIndex = Infinity;
            for (var i = 0; i < resource.tags.length; i++) {
                for (var j = 0; j < Math.min(orderedTags.length, bestIndex); j++) {
                    if (resource.tags.all[i] === orderedTags[j] && j < bestIndex) {
                        bestIndex = j;
                        if (bestIndex === 0) {
                            break;
                        }
                    }
                    if (bestIndex === 0) {
                        break;
                    }
                }
            }
            return bestIndex;
        };
        return function (a, b) {
            // check tag order first
            var aOrder = getTagOrder(a),
                bOrder = getTagOrder(b);
            if (aOrder < bOrder) {
                return -1;
            }
            if (aOrder > bOrder) {
                return 1;
            }

            // now check priority
            if (a.priority < b.priority) {
                return -1;
            }
            if (a.priority > b.priority) {
                return 1;
            }
            return 0;
        };
    };

    this.start = function (orderedTags) {
        timeStarted = Date.now();
        console.log(timeStarted)

        // first order the resources
        var compareResources = getResourceSort(orderedTags);
        entries.sort(compareResources);

        // trigger requests for each resource
        for (var i = 0, len = entries.length; i < len; i++) {
            var entry = entries[i];
            entry.status = ResourceState.WAITING;
            entry.resource.start(this);
        }

        // do an initial status check soon since items may be loaded from the cache
        setTimeout(statusCheck, 100);
    };

    this.stop  =function () {
        //entries = [];
        console.log("entries===",entries[0].resource);
        var tmp;
        for(var i =0;i<entries.length;i++){
            tmp = entries[i].resource;
            tmp.destory();
        }
    }
    var statusCheck = function () {
        var checkAgain = false,
            noProgressTime = Date.now() - progressChanged,
            timedOut = (noProgressTime >= settings.noProgressTimeout),
            shouldLog = (noProgressTime >= settings.loggingDelay);

        for (var i = 0, len = entries.length; i < len; i++) {
            var entry = entries[i];
            if (entry.status !== ResourceState.WAITING) {
                continue;
            }

            // see if the resource has loaded
            if (entry.resource.checkStatus) {
                entry.resource.checkStatus();
            }

            // if still waiting, mark as timed out or make sure we check again
            if (entry.status === ResourceState.WAITING) {
                if (timedOut) {
                    entry.resource.onTimeout();
                } else {
                    checkAgain = true;
                }
            }
        }

        // log any resources that are still pending
        if (shouldLog && checkAgain) {
            log();
        }

        if (checkAgain) {
            setTimeout(statusCheck, settings.statusInterval);
        }
    };

    this.isBusy = function () {
        for (var i = 0, len = entries.length; i < len; i++) {
            if (entries[i].status === ResourceState.QUEUED || entries[i].status === ResourceState.WAITING) {
                return true;
            }
        }
        return false;
    };

    var onProgress = function (resource, statusType) {

        var entry = null,
            i, len, numResourceTags, listener, shouldCall;

        // find the entry for the resource
        for (i = 0, len = entries.length; i < len; i++) {
            if (entries[i].resource === resource) {
                entry = entries[i];
                break;
            }
        }

        // we have already updated the status of the resource
        if (entry == null || entry.status !== ResourceState.WAITING) {
            return;
        }
        entry.status = statusType;
        progressChanged = Date.now();

        numResourceTags = resource.tags.length;

        // fire callbacks for interested listeners
        for (i = 0, len = progressListeners.length; i < len; i++) {

            listener = progressListeners[i];
            if (listener.tags.length === 0) {
                // no tags specified so always tell the listener
                shouldCall = true;
            } else {
                // listener only wants to hear about certain tags
                shouldCall = resource.tags.intersects(listener.tags);
            }

            if (shouldCall) {
                sendProgress(entry, listener);
            }
        }
    };

    this.onLoad = function (resource) {
        onProgress(resource, ResourceState.LOADED);
    };
    this.onError = function (resource) {
        onProgress(resource, ResourceState.ERROR);
    };
    this.onTimeout = function (resource) {
        onProgress(resource, ResourceState.TIMEOUT);
    };

    // sends a progress report to a listener
    var sendProgress = function (updatedEntry, listener) {
        // find stats for all the resources the caller is interested in
        var completed = 0,
            total = 0,
            i, len, entry, includeResource;
        for (i = 0, len = entries.length; i < len; i++) {

            entry = entries[i];
            includeResource = false;

            if (listener.tags.length === 0) {
                // no tags specified so always tell the listener
                includeResource = true;
            } else {
                includeResource = entry.resource.tags.intersects(listener.tags);
            }

            if (includeResource) {
                total++;
                if (entry.status === ResourceState.LOADED ||
                    entry.status === ResourceState.ERROR ||
                    entry.status === ResourceState.TIMEOUT) {

                    completed++;
                }
            }
        }

        listener.callback({
            // info about the resource that changed
            resource: updatedEntry.resource,

            // should we expose StatusType instead?
            loaded: (updatedEntry.status === ResourceState.LOADED),
            error: (updatedEntry.status === ResourceState.ERROR),
            timeout: (updatedEntry.status === ResourceState.TIMEOUT),

            // updated stats for all resources
            completedCount: completed,
            totalCount: total
        });
    };

    // prints the status of each resource to the console
    var log = this.log = function (showAll) {
        if (!window.console) {
            return;
        }

        var elapsedSeconds = Math.round((Date.now() - timeStarted) / 1000);
        window.console.log('PxLoader elapsed: ' + elapsedSeconds + ' sec');

        for (var i = 0, len = entries.length; i < len; i++) {
            var entry = entries[i];
            if (!showAll && entry.status !== ResourceState.WAITING) {
                continue;
            }

            var message = 'PxLoader: #' + i + ' ' + entry.resource.getName();
            switch (entry.status) {
                case ResourceState.QUEUED:
                    message += ' (Not Started)';
                    break;
                case ResourceState.WAITING:
                    message += ' (Waiting)';
                    break;
                case ResourceState.LOADED:
                    message += ' (Loaded)';
                    break;
                case ResourceState.ERROR:
                    message += ' (Error)';
                    break;
                case ResourceState.TIMEOUT:
                    message += ' (Timeout)';
                    break;
            }

            if (entry.resource.tags.length > 0) {
                message += ' Tags: [' + entry.resource.tags.all.join(',') + ']';
            }

            window.console.log(message);
        }
    };
}


// Tag object to handle tag intersection; once created not meant to be changed
// Performance rationale: http://jsperf.com/lists-indexof-vs-in-operator/3

function PxLoaderTags(values) {

    this.all = [];
    this.first = null; // cache the first value
    this.length = 0;

    // holds values as keys for quick lookup
    this.lookup = {};

    if (values) {

        // first fill the array of all values
        if (Array.isArray(values)) {
            // copy the array of values, just to be safe
            this.all = values.slice(0);
        } else if (typeof values === 'object') {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this.all.push(key);
                }
            }
        } else {
            this.all.push(values);
        }

        // cache the length and the first value
        this.length = this.all.length;
        if (this.length > 0) {
            this.first = this.all[0];
        }

        // set values as object keys for quick lookup during intersection test
        for (var i = 0; i < this.length; i++) {
            this.lookup[this.all[i]] = true;
        }
    }
}

// compare this object with another; return true if they share at least one value
PxLoaderTags.prototype.intersects = function (other) {

    // handle empty values case
    if (this.length === 0 || other.length === 0) {
        return false;
    }

    // only a single value to compare?
    if (this.length === 1 && other.length === 1) {
        return this.first === other.first;
    }

    // better to loop through the smaller object
    if (other.length < this.length) {
        return other.intersects(this);
    }

    // loop through every key to see if there are any matches
    for (var key in this.lookup) {
        if (other.lookup[key]) {
            return true;
        }
    }

    return false;
};

// AMD module support
if (typeof define === 'function' && define.amd) {
    define('PxLoader', [], function () {
        return PxLoader;
    });
}

// add a convenience method to PxLoader for adding an image
PxLoader.prototype.addImage = function (url, tags, priority, origin) {
    var imageLoader = new PxLoaderImage(url, tags, priority, origin);
    this.add(imageLoader);

    return imageLoader.img;
};

PxLoader.prototype.addImgArray = function (_listArr) {
    if(!_listArr || _listArr.length<=0) return;

    var imageLoader;
    for(var i=0,len=_listArr.length;i<len;i++){
        imageLoader = new PxLoaderImage(_listArr[i].src);
        imageLoader.id = _listArr[i].id;
        this.add(imageLoader);
    }

}




// PxLoader plugin to load images
function PxLoaderImage(url, tags, priority, origin) {
    var self = this,
        loader = null;


    this.id  = '';
    this.img = new Image();
    if (origin !== undefined) {
        this.img.crossOrigin = origin;
    }
    this.tags = tags;
    this.priority = priority;
    //if(url && url!=""){
        //this.id =
    //}

    var onReadyStateChange = function () {
        if (self.img.readyState === 'complete') {
            removeEventHandlers();
            loader.onLoad(self);
        }
    };

    var onLoad = function () {
        removeEventHandlers();
        loader.onLoad(self);
    };

    var onError = function () {
        removeEventHandlers();
        loader.onError(self);
    };

    var removeEventHandlers = function () {
        self.unbind('load', onLoad);
        self.unbind('readystatechange', onReadyStateChange);
        self.unbind('error', onError);
    };

    this.start = function (pxLoader) {
        // we need the loader ref so we can notify upon completion
        loader = pxLoader;

        // NOTE: Must add event listeners before the src is set. We
        // also need to use the readystatechange because sometimes
        // load doesn't fire when an image is in the cache.
        self.bind('load', onLoad);
        self.bind('readystatechange', onReadyStateChange);
        self.bind('error', onError);

        self.img.src = url;
    };

    // called by PxLoader to check status of image (fallback in case
    // the event listeners are not triggered).
    this.checkStatus = function () {
        if (self.img.complete) {
            removeEventHandlers();
            loader.onLoad(self);
        }
    };

    // called by PxLoader when it is no longer waiting
    this.onTimeout = function () {
        removeEventHandlers();
        if (self.img.complete) {
            loader.onLoad(self);
        } else {
            loader.onTimeout(self);
        }
    };

    // returns a name for the resource that can be used in logging
    this.getName = function () {
        return url;
    };
    
    
    this.destory = function () {
        removeEventHandlers();
        this.img.src = '';
        console.log("==destory==")
    }
    // this.getId = function () {
    //     var _id = url.slice(url.lastIndexOf("/")+1).split(".")[0] || Date.now();
    //     return _id;
    // };
    // cross-browser event binding
    this.bind = function (eventName, eventHandler) {
        if (self.img.addEventListener) {
            self.img.addEventListener(eventName, eventHandler, false);
        } else if (self.img.attachEvent) {
            self.img.attachEvent('on' + eventName, eventHandler);
        }
    };

    // cross-browser event un-binding
    this.unbind = function (eventName, eventHandler) {
        if (self.img.removeEventListener) {
            self.img.removeEventListener(eventName, eventHandler, false);
        } else if (self.img.detachEvent) {
            self.img.detachEvent('on' + eventName, eventHandler);
        }
    };

}

// module.exports = PxLoader;