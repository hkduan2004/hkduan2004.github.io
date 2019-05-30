var baseURL = "../";

window.shareData = {
    'title': '倾听隐藏的真相',
    'description': '眼睛看见的不一定是事实，发现背后的真相',
    'url': "http://jiabao.cheilchina.com/",
    'picURL': 'http://jiabao.cheilchina.com/img/share.jpg'
};

this.setShare = function(){
    $.ajax({
        url: baseURL+'home/WeixinShare',
        type: "POST",
        dataType: 'jsonp',
        jsonp:"callbackparam",
        jsonpCallback:"jsonpCallback",
        data: {url: decodeURI(location.href)},
        success: function (json) {
            //客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数 
            wx.config({
                debug: false,
                appId: json.appId,//'<?php echo $signPackage["appId"];?>',
                timestamp: json.timestamp,//<?php echo $signPackage["timestamp"];?>,
                nonceStr: json.nonceStr,//'<?php echo $signPackage["nonceStr"];?>',
                signature: json.signature,//'<?php echo $signPackage["signature"];?>',
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ'
                ]
            });
            window.shareData = shareData;
        } });



    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: window.shareData.title, // 分享标题
            link: window.shareData.url, // 分享链接
            imgUrl: window.shareData.picURL, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                // setShareCount()
                $(".shareGuid").hide()
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        wx.onMenuShareAppMessage({
            title: window.shareData.title, // 分享标题
            desc: window.shareData.description, // 分享描述
            link: window.shareData.url, // 分享链接
            imgUrl: window.shareData.picURL, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                // setShareCount()
                $(".shareGuid").hide()
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        wx.onMenuShareQQ({
            title: window.shareData.title, // 分享标题
            desc: window.shareData.description, // 分享描述
            link: window.shareData.url, // 分享链接
            imgUrl: window.shareData.picURL, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                // setShareCount()
                $(".shareGuid").hide()
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    });
}
if(window.location.href.indexOf("http://109.254.1.52/")>-1){
}else{
    setShare();
}