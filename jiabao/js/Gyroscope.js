/**
 * Created by lg on 16/6/17.
 */
/*
    获取设备加速度信息
 */


var Gyroscope = (function(){
    var _dir = 0,gamma=0,alpha=0,beta= 0,_gamma= 0;
    var __changeFunc;
    //是否开启设备运动监听，默认是只开启横竖屏监听的
    var _isopenDiviceLock = false;
    //var _platform,_platDir = 1,_gravity_dir=1,gravity_tmpY=0,gravity_tmpX=0;
    var openDiviceLock = function() {
        _isopenDiviceLock = true;
    }
    var init = function(){
        if(_isopenDiviceLock){
            if (window.DeviceOrientationEvent) {
                window.addEventListener("deviceorientation", orientationHandler, false);
            }
            window.addEventListener('devicemotion',devicemotion );
        }

        window.addEventListener("orientationchange",orientationchange);
        orientationchange();
        _platform = getuaPlatform().platform;
        if(_platform == 'ipad' || _platform == 'iphone' || _platform == 'ipod' ){
            _platDir = 1;
        }else{
            _platDir = -1;
        }
        if(__changeFunc){
            __changeFunc();
        }
    }
    var orientationchange = function(e){
        _dir = window.orientation;
        if(__changeFunc){
            __changeFunc();
        }
    }
    var orientationHandler = function(e){
        _gamma = e.gamma >> 0;
        alpha = e.alpha >> 0;
        beta = e.beta >> 0;
        gamma = _gamma;
        if(__changeFunc){
            __changeFunc();
        }
    }
    var devicemotion = function(e){
        gravity_tmpX = Math.round(event.accelerationIncludingGravity.x * 10);
        gravity_tmpY = Math.round(event.accelerationIncludingGravity.y * 10);
    }
    var _deviceInfo = {};
    var getDeviceInfo = function(){
        _deviceInfo.dir = _dir;
        _deviceInfo.alpha = alpha;
        _deviceInfo.beta = beta;
        _deviceInfo.gamma = gamma;
        return _deviceInfo;
    }
    var addListenerFunc = function(func){
        __changeFunc = func;
    }
    var getuaPlatform = function(){
        var ua = navigator.userAgent.toLowerCase();

        // Useragent RegExp
        var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
        var rtablet = /(ipad|playbook)/;
        var randroid = /(android)/;
        var rmobile = /(mobile)/;

        var platform = rplatform.exec( ua ) || [];
        var tablet = rtablet.exec( ua ) ||
            !rmobile.exec( ua ) && randroid.exec( ua ) ||
            [];

        if(platform[1]) {
            platform[1] = platform[1].replace(/\s/g, "_"); // Change whitespace to underscore. Enables dot notation.
        }

        return { platform: platform[1] || "", tablet: tablet[1] || "" };
    }
    return {
        init:init,
        openDiviceLock:openDiviceLock,
        getuaPlatform:getuaPlatform,
        getDeviceInfo:getDeviceInfo,
        changeFunc:addListenerFunc
    }
})()

