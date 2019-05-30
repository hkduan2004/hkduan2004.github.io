<?php
header('Content-type: text/html; charset=utf-8'); 
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0¡ä, false');
require_once "jssdk.php";
$jssdk = new JSSDK("wx3a40cc6ec13cf19d", "1f0f8e66ed7589b73b81e1bf7248202c");
if(!isset($_GET['url'])){
	echo('url not find!');
	exit;
}
$signPackage = $jssdk->GetSignPackage($_GET['url']);
?>

!function (factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        factory('','','',wx);
    }
}(function (require, exports, module, wx) {
	
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        var wx = require('http://res.wx.qq.com/open/js/jweixin-1.0.0.js');
    }
	
   
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'

        ]
    });
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        module.exports = wx;
    }
});

