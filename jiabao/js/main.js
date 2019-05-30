/**
 * Created by lg on 17/8/31.
 */

var _paynum=20,_payId=1;
$(".btn1").on("click",function () {
    _paynum = 20;
    _payId = 1;
    $(".btn_pic").addClass("alpha");
    $(".btn_pic1").removeClass("alpha");
})
$(".btn2").on("click",function () {
    _paynum = 50;_payId = 2;
    $(".btn_pic").addClass("alpha");
    $(".btn_pic2").removeClass("alpha");
})
$(".btn3").on("click",function () {
    _paynum = 100;_payId = 3;
    $(".btn_pic").addClass("alpha");
    $(".btn_pic3").removeClass("alpha");
})
$(".btn4").on("click",function () {
    _paynum = 500;_payId = 4;
    $(".btn_pic").addClass("alpha");
    $(".btn_pic4").removeClass("alpha");
})
$("#myInput").focusin(function () {
    _paynum = 0;_payId = 5;
    $(".btn_pic").addClass("alpha");
})

$(".subBtn").on("click",function () {
    if(!_istongyi){
        alert("请选择同意并接受腾讯公益网用户协议！");
        return;
    }
    if(_payId==5){
        _paynum = Number($("#myInput").val());
    }
    if(_paynum<=0){
        alert("请输入捐款金额！")
    }else{
        var _backUrl= encodeURIComponent('');
        window.location.href='http://ssl.gongyi.qq.com/m/weixin/gopay.html?bid=100000159&sign=d784a96f510c735e944639b8c3df8eda&ref_url='+_backUrl+'&bt=s&pid=30047&money='+_paynum;
    }
})


var _isniming=true,_istongyi=true;
$(".niming").on("click",function () {
    if(_isniming){
        _isniming = false;
        $(".niming_pic").removeClass("alpha");
    }else{
        _isniming = true;
        $(".niming_pic").addClass("alpha");
    }
})
$(".tongyi").on("click",function () {
    if(_istongyi){
        _istongyi = false;
        $(".tongyi_pic").addClass("alpha");
    }else{
        _istongyi = true;
        $(".tongyi_pic").removeClass("alpha");
    }
})

$(".xieyi").on("click",function () {
    window.location.href="http://gongyi.qq.com/m/html5/about_1.htm";
})

$(".closeBtn").on("click",function () {
    $(".payBox").addClass("hidden");
})



var canvas, stage,_loadUi;
var main,_isinit=false,_lock=true,_curStep=0,_cbeta=-1;
var snd1 = document.getElementById("snd1");
var snd2 = document.getElementById("snd2");
var domain = "http://www.chinesemir.com/jiaobao";

var _isISO = false,_isWeixin=false;


var _sndBtn;
//是否禁止音频
var _isNoSnd=false;
function addsndBtn(b) {
    if(!_sndBtn){
        _sndBtn = new lib.SndBtnMc();
        _sndBtn.x = _sndBtn.y = 30;
        _sndBtn.addEventListener("click",sndClick);
    }
    if(b){
        _sndBtn.visible = true;
    }else{
        _sndBtn.visible = false;
    }
    stage.addChild(_sndBtn);
}
function sndClick(e) {
    if(!_isNoSnd){
        _isNoSnd = true;
        _sndBtn.gotoAndStop(1);
    }else{
        _isNoSnd = false;
        _sndBtn.gotoAndStop(0);
    }
    playS();
}

var _bufferMc;
function addBufferMc(b) {
    if(!_bufferMc){
        _bufferMc = new lib.BuffMc();
    }
    if(b){
        _bufferMc.visible = true;
    }else{
        _bufferMc.visible = false;
    }
    stage.addChild(_bufferMc);
}


$(window).on("resize",resized).resize();
var _w,_h,_scale;
function resized(e) {
    _w = $(window).width();
    _h = $(window).height();
    _scale = _w / 640;
    //_y = (_h-1334*_scale)/_scale;
    $('.holder').css({
        '-ms-transform': "scale(" + _scale + ',' + _scale + ")",
        '-moz-transform': "scale(" + _scale + ',' + _scale + ")",
        '-o-transform': "scale(" + _scale + ',' + _scale + ")",
        '-webkit-transform': "scale(" + _scale + ',' + _scale + ")",
        'transform': "scale(" + _scale + ',' + _scale + ")"
    })
    $('.holder').css({"height":_h/_scale});
    $('.payBox').css({"height":_h/_scale});
    //

    if(_curStep==1){
        if(_curPage.tipsMc){_curPage.tipsMc.y =  (_h-301*_scale)/_scale;}
    }
    if(_curStep==2){
        if(_curPage.b_mc){_curPage.b_mc.y = (_h-71*_scale)/_scale;}
    }
    if(_curStep==3){
        if(_curPage.ani01){
            _curPage.ani01.b_mc.y = (_h-71*_scale)/_scale;
            _curPage.ani02.b_mc.y = (_h-71*_scale)/_scale;
        }
    }
    if(_page05){
        _page05.b_mc.y = (_h-71*_scale)/_scale;
    }
}
function init() {
    _isISO = GSystemUtil.getPlatform().platform=="iphone"?true:false;
    _isWeixin = GSystemUtil.is_weixn();

    canvas = document.getElementById("canvas");
    images = images||{};
    ss = ss||{};
    resized();

    var _load = new GImgLoader();
    _load.loadCjs(lib_load,images,function(per) {
        //console.log("loading->",per);
    },function() {
        // console.log("===loaded===");
        _loadUi = new lib.loading();
        stage = new createjs.Stage(canvas);
        stage.addChild(_loadUi);
        if(_isISO && !_isWeixin){
            _loadUi.loadMc.load_mc02.loading_tipsmc.alpha=1;
        }
        createjs.Ticker.setFPS(24);
        createjs.Ticker.addEventListener("tick", stage);

        loadMain();
    })
    initDevice();
}
initDevice();


function initDevice() {
    Gyroscope.openDiviceLock();
    Gyroscope.changeFunc(changeFunc);
    Gyroscope.init();
}
var _deviceInfo ,_dir;
var _tmpbeta;
function changeFunc(e) {
    _deviceInfo = Gyroscope.getDeviceInfo();
    _dir = _deviceInfo.dir;
    //
    //console.log(_deviceInfo.beta,_deviceInfo.alpha,_deviceInfo.gamma);
    if(_dir==0){
        $(".devideTips_Boxs").addClass("hidden");
        if(!_lock){
            _tmpbeta = Math.abs(_deviceInfo.beta);
            if(_cbeta == 1){
                //当前处于正面
                if(_tmpbeta>=100){
                    _curStep = 2;
                    _cbeta = 0;//正面 变 反面
                    check();
                }
            }else{
                //当前处于反面
                if(_tmpbeta<50){
                    _curStep = 3;
                    _cbeta = 1;//反面 变 正面
                    check();
                }
            }
            if(_curStep>=3){
                _lock=true;
            }
        }

    }else{
        $(".devideTips_Boxs").removeClass("hidden");
    }

}

var m_loader;
function loadMain() {
    var s_per = 0,m_per=0,t_per=0;
    var s_load = new GSoundLoad(lib_music,function(per) {
        s_per = per;
        updateLoadingUi();
    },function() {
    });

    var m_load = new GImgLoader();
    m_loader = m_load.loadCjs(lib_main1,images,function(per) {
        m_per = per;
        updateLoadingUi();
    },function() {
    })


    function updateLoadingUi() {
        t_per = (s_per*.2+m_per*.8)>>0;
        _loadUi.loadMc.load_mc01.txt.text = t_per+"%";
        // console.log("t_per===",t_per);
        var _load_mc02 = _loadUi.loadMc.load_mc02;
        if(t_per>=100){
            // console.log("所有资源已经加载完成",_isISO,_isWeixin);
            _loadUi.loadMc.load_mc01.visible = false;
            GUtil.addFrameEvent(_load_mc02,30,function () {
                if(_isISO && !_isWeixin){
                    _load_mc02.stop();
                    document.addEventListener('touchstart', touched);
                }
            });
            function touched() {
                document.removeEventListener('touchstart', touched);
                snd1.volume = snd2.volume = 0;
                snd1.play();
                snd2.play();
                setTimeout(delayed,100);
                _load_mc02.gotoAndPlay(70);
            }
            function delayed() {
                snd1.volume = snd2.volume = 1;
                snd1.currentTime=snd2.currentTime=1;
                snd1.pause();
                snd2.pause();
            }

            GUtil.addFrameEvent(_load_mc02,_load_mc02.totalFrames-1,function () {
                removeLoadUi();
                createjs.Ticker.setFPS(8);
                initUI();
            })
            _load_mc02.gotoAndPlay(1);
            _loadId = 1;
            stepLoad();
        }
    }
    function removeLoadUi() {
        // console.log("===removeLoadUi===");
        GUtil.to(_loadUi,1.2,{alpha:0,onComplete:function () {
            stage.removeChild(_loadUi);
            _loadUi = null;
        }});
    }
}

var _curPage,_oldPage;
var _pageCon,_curSnd,_curFrame=0;

//分步加载
function stepLoad() {
    var _lib;
    if(_loadId==1){
        _lib = lib_main2;
        var _load2 = new GImgLoader();
        _load2.loadCjs(_lib,images,function (per) {
            
        },function () {
            _loadId=2;
            if(_curStep==1 || _curStep==2){
                _curPage.vidCon.reset();
                addFrameHandle();
            }
            if(_iswaiting){
                var fr = _curPage.vidCon.currentFrame+1;
                setTimeout(function () {
                    _iswaiting = false;
                    playS();
                    addBufferMc(false);
                    _curPage.vidCon.gotoAndPlay(fr);
                },100)
            }
            // console.log("_loadId==",_loadId);
            stepLoad();
        })
    }else if(_loadId==2){
        _lib = lib_main3;
        var _load3 = new GImgLoader();
        _load3.loadCjs(_lib,images,function (per) {
        },function () {
            _loadId=3;
            if(_curStep==1 || _curStep==2){
                _curPage.vidCon.reset();
                addFrameHandle();
            }
            if(_iswaiting) {
                var fr = _curPage.vidCon.currentFrame + 1;
                setTimeout(function () {
                    _iswaiting = false;
                    playS();
                    addBufferMc(false);
                    _curPage.vidCon.gotoAndPlay(fr);
                }, 100)
            }
            // console.log("_loadId==",_loadId);
        })
    }


}

//初始化所有界面
function initUI() {

    snd1.src = "./media/day.mp3";
    snd2.src = "./media/night.mp3";


    _pageCon = new createjs.MovieClip();
    _pageCon.x = _pageCon.y = 0;
    stage.addChildAt(_pageCon,0);
    stage.update();


    _pageCon.alpha = 0;
    GUtil.to(_pageCon,1.2,{alpha:1,onComplete:function () {
        addsndBtn(true);
    }});

    _isinit=true;
    //默认进入时 如果手机是反面

    if(Math.abs(_deviceInfo.beta)<100) {
        _cbeta = 1;
        _curStep = 1;
        _curSnd = snd1;
        addpage02();
    }else{
        _cbeta = 0;
        _curFrame = 1;
        _curStep = 2;
        _curSnd = snd2;
        addpage03();
    }
    _lock=false;
}



var _loadId=0,_iswaiting=false,_loadnum=3;
var _loadKey = [70,160,240];

function playS() {
    if(_isNoSnd){
        snd1.muted =snd2.muted = true;
        return;
    }else {
        if(_curStep==1){
            snd1.muted = false;
            snd2.muted = true;
        }else if(_curStep==2){
            snd1.muted = true;
            snd2.muted = false;
        }
    }
    snd1.play();
    snd2.play();
}
function pauseS() {
    snd1.pause();
    snd2.pause();
}

function addpage02() {
    _curSnd = snd1;
    _curPage = new lib.Page02();
    setTimeout(function () {
        playS();
        _curPage.vidCon.gotoAndPlay(1);
    },100)

    _curPage.tipsMc.y =  (_h-301*_scale)/_scale;
    _pageCon.addChild(_curPage);
    addFrameHandle();
    _oldPage = _curPage;
}

function addFrameHandle() {
    GUtil.addFrameEvent(_curPage.vidCon,60,function () {
        //console.log("addFrameHandle 60");
        if(_loadId<2){
            _iswaiting = true;
            addBufferMc(true);
            pauseS();
            _curPage.vidCon.stop();
        }else{
            _iswaiting = false;
        }
    });
    GUtil.addFrameEvent(_curPage.vidCon,110,function () {
        //console.log("addFrameHandle 110",_loadId);
        if(_loadId<3){
            _iswaiting = true;
            addBufferMc(true);
            pauseS();
            _curPage.vidCon.stop();
        }else{
            _iswaiting = false;
        }
    });
    GUtil.addFrameEvent(_curPage.vidCon,_curPage.vidCon.totalFrames-1,function () {
        _curSnd.currentTime=0;
        snd1.currentTime = snd1.currentTime = 0;
        playS();
        _curPage.vidCon.gotoAndPlay(1);
    });
}
function addpage03() {
    _curPage = new lib.Page03();
    _curPage.alpha=0;
    _curSnd = snd2;
    _curPage.vidCon.gotoAndStop(_curFrame);
    _pageCon.addChild(_curPage);

    stage.update();
    setTimeout(function () {
        playS();
        _curPage.alpha=1;
        _curPage.vidCon.gotoAndPlay(_curFrame);
        stage.update();
    },100);

    addFrameHandle();

    _curPage.b_mc.y = (_h-71*_scale)/_scale;
    _oldPage = _curPage;
}
var _page05;
function addpage04() {
    addsndBtn(false);
    _curPage = new lib.Page04();
    pauseS();
    setTimeout(function () {
        _curPage.ani01.gotoAndPlay(1);
    },100)
    _curPage.ani01.b_mc.y = (_h-71*_scale)/_scale;

    setTimeout(function () {
        GUtil.to(_curPage.ani01,1,{alpha:0});
        GUtil.to(_oldPage,1,{alpha:0});
        GUtil.to(_curPage.ani02,1,{delay:1.2,alpha:1,onComplete:showAni2});
    },4000);
    function showAni2() {
        _curPage.ani02.bg.gotoAndPlay(1);
        if(_oldPage){
            _pageCon.removeChild(_oldPage);
            _oldPage = null;
        }
        _oldPage = _curPage;
    }
    _curPage.ani02.b_mc.y = (_h-71*_scale)/_scale;
    _curPage.ani02.helpBtn.addEventListener("click",function () {
        // console.log("====_curPage.ani02.helpBtn======");
        _curPage.mouseChildren = false;
        _curPage.mouseEnabled = false;
        GUtil.to(_curPage.ani02,.5,{alpha:0,onComplete:function () {
            _curPage.ani02.bg.gotoAndStop(1);
            addpage05();
        }});
    });

    _curPage.ani02.payBtn.addEventListener("click",function () {
        $(".payBox").removeClass("hidden");
    })
    _curPage.ani02.backBtn.addEventListener("click",function () {
        // console.log("==backBtn== reset");
        _curPage.visible = false;
        _pageCon.removeChild(_curPage);
        reset();
    })
    _pageCon.addChild(_curPage);

}

function reset() {
    //默认进入时 如果手机是反面
    _curFrame=0;
    snd1.currentTime=snd2.currentTime=0;
    snd1.volume=snd2.volume=1;
    _sndBtn.gotoAndStop(0);
    _isNoSnd = fals;
    addsndBtn(true);
    //snd1.volume = snd2.volume = 0;
    if(Math.abs(_deviceInfo.beta)<100) {
        _cbeta = 1;
        _curStep = 1;
        addpage02();
    }else{
        _cbeta = 0;
        _curStep = 2;
        addpage03();
    }
    _lock=false;
}

function addpage05(){
    if(!_page05){
        _page05 = new lib.Page05();
        _page05.alpha=0;
        _page05.b_mc.y = (_h-71*_scale)/_scale;
        _page05.callBtn.addEventListener("click",function () {
            window.location.href = "tel:12338";
        });
        _page05.closeBtn.addEventListener("click",function () {
            GUtil.to(_page05,.5,{alpha:0,onComplete:function () {
                _page05.visible = false;
                _page05.bg.gotoAndStop(0);
                GUtil.to(_curPage.ani02,.5,{alpha:1,onComplete:function () {
                    _curPage.mouseEnabled = true;
                    _curPage.mouseChildren = true;
                    _curPage.ani02.bg.gotoAndPlay(1);
                }})
            }});
        });
    }
    setTimeout(function () {
        _page05.bg.gotoAndPlay(1);
    },100);
    _page05.alpha=0;
    _page05.visible = true;
    GUtil.to(_page05,1,{alpha:1});
    stage.addChild(_page05);

}
// var _ctime;
function check() {
    if(!_isinit) return;
    if(_lock) return;
    // console.log("_curStep===",_curStep);
    if(_curStep==1){

    }else if(_curStep==2){
        pauseS();
        _curFrame = _curPage.vidCon.currentFrame;
        if(_oldPage){
            _pageCon.removeChild(_oldPage);
            _oldPage = null;
        }
        addpage03();
    }else{
        pauseS();
        _curPage.vidCon.stop();
        addpage04();
    }
}


//声音加载类
var GSoundLoad = function(_lib,loading,loaded) {
    var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
    // loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", handleFileLoadimg);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(_lib);
    var _per=0;
    function handleFileLoadimg(e) {
        _per = e.progress * 100 >> 0;
        if(loading){
            loading(_per);
        }
    }
    function handleComplete(e) {
        if(loaded){
            loaded();
        }
    }
}
// 微信音频Hack方案
; void function (win, doc, undefined) {
    // 原理：调用链中的某个事件被标识为用户事件而非系统事件
    // 进而导致浏览器以为是用户触发播放而允许播放
    Audio.prototype._play = Audio.prototype.play;
    HTMLAudioElement.prototype._play = HTMLAudioElement.prototype.play;
    function wxPlayAudio(audio) {
        /// <summary>
        /// 微信播放Hack
        /// </summary>
        /// <param name="audio" type="Audio">音频对象</param>
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            audio._play();
        });
    }
    function play() {
        var self = this;
        self._play();
        var evtFns = [];
        try {
            wxPlayAudio(self);
            return;
        } catch (ex) {
            evtFns.push("WeixinJSBridgeReady", function evt() {
                wxPlayAudio(self);
                for (var i = 0; i < evtFns.length; i += 2) document.removeEventListener(evtFns[i], evtFns[i + 1], false);
            });
            document.addEventListener("WeixinJSBridgeReady", evtFns[evtFns.length - 1], false);
        }
    }
    Audio.prototype.play = play;
    HTMLAudioElement.prototype.play = play;
}(window, document);