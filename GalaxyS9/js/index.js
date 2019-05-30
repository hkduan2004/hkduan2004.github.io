var SAM = {
	musicFlag: true,
	videoIndex: 0,
	videoFlag: 0,
	videoFlag1: 0,
	isSAfari: false,
	f_header: 0,
	swingTime: 0,
	swingIndex: 2,
	swingFlag: true,
	swingTimer: null,
	isSmall: false,
	audioIndex: 0,
	isF: true,
	bixTimer: null,
	bixTimer2: null,
	kvNumber: 0,
	vFlag: true,
	videoFlag2: 0,
	slowIndex: 0, //slow当前切换位置
	wheel: true,
	peopleNum: 1,
	buyBoxTimer: null,
	musicTimer: null,
	buyBoxTimer1: null,
	closeTimer: null,
	closeTimer2: null,
	vTimer: null,
	vTimer1: null,
	isIE:false,
};

function myBrowser() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1;
	if(isOpera) {
		return "Opera"
	}; //判断是否Opera浏览器
	if(userAgent.indexOf("Firefox") > -1) {
		return "FF";
	} //判断是否Firefox浏览器
	if(userAgent.indexOf("Chrome") > -1) {
		return "Chrome";
	}
	if(userAgent.indexOf("Safari") > -1) {
		return "Safari";

	} //判断是否Safari浏览器
	if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		return "IE";
	}; //判断是否IE浏览器
}
//以下是调用上面的函数
var mb = myBrowser();
if("IE" == mb) {
	//		    alert("我是 IE");
//	SAM.isIE = true;
}
if("FF" == mb) {
	//		    alert("我是 Firefox");
}
if("Chrome" == mb) {
	//		    alert("我是 Chrome");
}
if("Opera" == mb) {
	//		    alert("我是 Opera");
}
if("Safari" == mb) {
	//		    alert("我是 Safari");
	SAM.isSAfari = true;
}

function isIE() { //ie?
 if (!!window.ActiveXObject || "ActiveXObject" in window)
  return true;
  else
  return false;
 }

var prg = 0;
var timer = 0;
var $loading_div = $(".load_div");
progress(80, 100);

function progress(dist, delay, callback) {
	window.clearInterval(timer);
	timer = window.setInterval(function() {
		if(prg >= dist) {
			window.clearInterval(timer);
			prg = dist;
			callback && callback();
		} else {
			prg++;
		}
		$(".load_icon").eq(Math.floor(prg / 4)).addClass("show").siblings().removeClass("show");
	}, delay);
}
var myAudioS = document.getElementById("audioS");
var myAudioB = document.getElementById("audioB");

//居中计算
var windowNum = 1920 / 1080;
var isWindow = $(window).width() / $(window).height();
var myH = $(window).height();
if(myH < 600) {
	myH = 600
};

function setPhone () {
	var addPhone = 3.25/6.88;

	var windowH = $(window).height();
	
	if (windowH < 600) {
		windowH = 600;
	}
	
	var phoneH = windowH * 0.93;
	
	var phoneW = phoneH * addPhone;
	
	var handW = phoneW * 1.54;
	
	document.querySelector('.add_phone_video').style.height = phoneH + 'px';
	
	document.querySelector('.add_phone_video').style.width = phoneW + 'px';
	
	
	
//	document.querySelector('.add_hand').style.width = handW + 'px';
};

setPhone();

SAM.f_header = myH - 527;
$(".f_header").css("height", SAM.f_header + 'px');
if(isWindow > windowNum) {
	$(".smCenter").removeClass("center_X").addClass("center_Y");
} else {
	$(".smCenter").removeClass("center_Y").addClass("center_X");
};
if($(window).width() / $(window).height() > 1.8) {
	$(".kv1_w1").addClass("kv1_w1_s");
	$(".kv1_w2").addClass("kv1_w2_s");
	$(".kv_phone2").addClass("kv_phone2_s");
	$(".kv_w1").addClass("kv_w1_s");
	$(".kv_w2").addClass("kv_w2_s");
	$(".kv_phone1").addClass("kv_phone1_s");
	$(".m_phone_box").addClass("phone_box_s");
	$(".crirle_box").addClass("crirle_box_s");
	$('.kv_btn_new').addClass('kv_btn_news');
	$('.add_607_p1').addClass('add_607_p1_s');
	$('.add_607_btn').addClass('add_607_btn_s')
} else {
	$(".kv1_w1").removeClass("kv1_w1_s");
	$(".kv1_w2").removeClass("kv1_w2_s");
	$(".kv_phone2").removeClass("kv_phone2_s");
	$(".kv_w1").removeClass("kv_w1_s");
	$(".kv_w2").removeClass("kv_w2_s");
	$(".kv_phone1").removeClass("kv_phone1_s");
	$(".m_phone_box").removeClass("phone_box_s");
	$(".crirle_box").removeClass("crirle_box_s");
	$('.kv_btn_new').removeClass('kv_btn_news');
	$('.add_607_p1').removeClass('add_607_p1_s');
	$('.add_607_btn').removeClass('add_607_btn_s')
};
$(window).resize(function() // 绑定到窗口的这个事件中
	{
		
		setPhone();
		var myH = $(window).height();
		if(myH < 600) {
			myH = 600
		};
		console.log($(window).width() / $(window).height())
		SAM.f_header = myH - 527;
		$(".f_header").css("height", SAM.f_header + 'px');
		if($(window).width() / $(window).height() > 1.8) {
			$(".kv1_w1").addClass("kv1_w1_s");
			$(".kv1_w2").addClass("kv1_w2_s");
			$(".kv_phone2").addClass("kv_phone2_s");
			$(".kv_w1").addClass("kv_w1_s");
			$(".kv_w2").addClass("kv_w2_s");
			$(".kv_phone1").addClass("kv_phone1_s");
			$(".m_phone_box").addClass("phone_box_s")
			$(".crirle_box").addClass("crirle_box_s");
			$('.kv_btn_new').addClass('kv_btn_news');
			$('.add_607_p1').addClass('add_607_p1_s');
			$('.add_607_btn').addClass('add_607_btn_s')
		}else {
			$(".kv1_w1").removeClass("kv1_w1_s");
			$(".kv1_w2").removeClass("kv1_w2_s");
			$(".kv_phone2").removeClass("kv_phone2_s");
			$(".kv_w1").removeClass("kv_w1_s");
			$(".kv_w2").removeClass("kv_w2_s");
			$(".kv_phone1").removeClass("kv_phone1_s");
			$(".m_phone_box").removeClass("phone_box_s");
			$(".crirle_box").removeClass("crirle_box_s");
			$('.kv_btn_new').removeClass('kv_btn_news');
			$('.add_607_p1').removeClass('add_607_p1_s');
			$('.add_607_btn').removeClass('add_607_btn_s')
			
		};

		var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
		var wH = window.innerHeight; // 当前窗口的高度

		var wW = window.innerWidth; // 当前窗口的宽度
		if(wW < 1000) {
			wW = 1000
		}
		var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
		$('html').css('font-size', rem + "px");

		//居中计算
		var windowNum = 1920 / 1080;
		var isWindow = $(window).width() / $(window).height();
		if(isWindow > windowNum) {
			$(".smCenter").removeClass("center_X").addClass("center_Y");
			$(".center").removeClass("c_x").addClass("c_y");
		} else {
			$(".smCenter").removeClass("center_Y").addClass("center_X");
			$(".center").removeClass("c_y").addClass("c_x");
		};

	});
window.onload = function() {
	
	
	
	
	if (isIE()) {
		SAM.isIE = true;
	};
	
	
	
	
	var $container = $("#container");
	var a = $('<audio src="audio/2-1.mp3" preload="auto"></audio>');
	$container.append(a);
	var b = $('<audio src="audio/2.mp3" preload="auto"></audio>');
	$container.append(b);
	var c = $('<audio src="audio/3-1.mp3" preload="auto"></audio>');
	$container.append(c);
	var d = $('<audio src="audio/3.mp3" preload="auto"></audio>');
	$container.append(d);
	
	
	
	var add1_video = document.getElementById('add1_video');

	if(SAM.isSAfari) {
		$(".play_icon").show();
	};

	progress(100, 1, function() {
		$(".load_div").hide();
		$(".kv_slide_add4").eq(0).addClass("kv_active").siblings().removeClass("kv_active");
	})

	var myVideo = document.getElementById("myVideo");
	var myVideo1 = document.getElementById("myVideo_1");
	var myVideo2 = document.getElementById("myVideo_2");

	$("body").on("mousewheel", function() {
		//		alert(11)
		if(SAM.wheel) {

		} else {
			return false;

		}
	})
	var planeTimer = 0;
	var planeTimer = setInterval(function() {
		$(".left_plane_icon").eq(planeTimer).addClass("show").siblings().removeClass("show");
		$(".right_plane_icon").eq(planeTimer).addClass("show").siblings().removeClass("show");
		planeTimer++;
		if(planeTimer == 8) {
			planeTimer = 1;
		}
	}, 100);
//	setTimeout(function() {
//		
//	}, 1500);
	$("#mySwiper>.swiper-wrapper>.swiper-slide").eq(0).addClass("active");
	console.log($("#mySwiper>.swiper-wrapper>.swiper-slide"))

	//如何拍摄
	var swVideo = document.getElementById("swingVideo");
	var swVideo1 = document.getElementById("swingVideo1");
	var swVideo2 = document.getElementById("swingVideo2");
	var s1 = $("#swingVideo");
	var s2 = $("#swingVideo1");
	var s3 = $("#swingVideo2");
	var ss1 = $(".swing_img1");
	var ss2 = $(".swing_img2");
	var ss3 = $(".swing_img3");
	//页面主轮播图
	var mySwiper = new Swiper('#mySwiper', {
		mode: 'vertical',
//		initialSlide :4,
		//		keyboardControl : true,
		noSwiping: true,
		speed: 1000,
		slidesPreView: 1,
		mousewheelControl: true,
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
		onInit: function(swiper) { //初始化后执行
		},
		onSlideChangeEnd: function(swiper) { //slider切换结束时执行。 
			SAM.slowIndex = 0;
			SAM.swingTime = 0;
			SAM.swingIndex = 2;
			myVideo.pause();
			myVideo1.pause();
			myVideo2.pause();
			if (!SAM.isIE) {
				myVideo.currentTime = 0;
				myVideo1.currentTime = 0;
				myVideo2.currentTime = 0;
			}else{
				myVideo.onloadedmetadata = function () {
					myVideo.currentTime = 0;
				}
				myVideo1.onloadedmetadata = function () {
					myVideo1.currentTime = 0;
				}
				myVideo2.onloadedmetadata = function () {
					myVideo2.currentTime = 0;
				}
			}
			clearTimeout(SAM.vTimer);
			clearTimeout(SAM.vTimer1);
			clearTimeout(SAM.musicTimer);
			clearTimeout(SAM.bixTimer);
			clearTimeout(SAM.bixTimer2);
			$(".bix_ani").removeClass("bix_toBig")
			$(".video-box").removeClass("video_show");
			$(".bix").show();
			$(".slide4").removeClass("removeani2").addClass("active");
			$("#video_swiper>.swiper-wrapper>.swiper-slide").eq(0).removeClass("v_active");
			$("#mySwiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).removeClass("removeani").siblings().addClass("removeani");
			$("#mySwiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active");
			if ($(".play_icon").eq(0).is(":hidden")) {
				
			}else{
				$(".play_icon").css("display","block");
			}
			if(swiper.activeIndex != 0) {
				$("#kv_swiper>.swiper-wrapper>.swiper-slide").addClass("removeani");
				$("#kv_swiper>.swiper-wrapper>.swiper-slide").removeClass("kv_active");
				SAM.isF = false;
			} else {
				SAM.isF = true;
				$("#kv_swiper>.swiper-wrapper>.swiper-slide").eq(SAM.kvNumber).removeClass("removeani").siblings().addClass("removeani");
				$("#kv_swiper>.swiper-wrapper>.swiper-slide").eq(SAM.kvNumber).addClass("kv_active").siblings().removeClass("kv_active");
			}
			if(swiper.activeIndex != 2) {
				$(".how_box").css("visibility", "hidden");
				$(".how_box").css("z-index", "-1");
				clearInterval(SAM.swingTimer);
				$(".touch_box").hide();
				myVideo.pause();
				myVideo1.pause();
				myVideo2.pause();
				myVideo.volume = 0;
				myVideo1.volume = 0;
				myVideo2.volume = 0;
				$(".title-24").removeClass("title_all");
				$(".title-96").removeClass("title_all");
				$(".video_p1").removeClass("title_all");

				SAM.videoFlag = 0;
				SAM.videoFlag1 = 0;
				SAM.videoFlag2 = 0;

				$(".how_box").removeClass("how3_active").removeClass("how2_active").removeClass("how1_active");
				swVideo1.pause();
				ss2.hide();
				s1.show();
				ss1.show();
				s2.hide();
				swVideo2.pause();
				ss3.hide();
				s3.hide();
				$(".slide2_content").css("opacity", "0");
				$(".slide2_content").css("visibility", "hidden");
				videoSwiper.swipeTo(0);
				SAM.vFlag = true;
			};
			if(swiper.activeIndex != 3) {
				$(".slide4_box").show();
				$('#canvas_swiper>.swiper-wrapper>.swiper-slide-active').removeClass('can_active');
			};
			if(swiper.activeIndex == 2) {
				myVideo.volume = 1;
				myVideo1.volume = 1;
				myVideo2.volume = 1;
				SAM.vTimer = setTimeout(function() {
					$(".arrow-left_1").css("visibility", "hidden");
					$(".arrow-right_1").css("visibility", "visible");
					$("#video_swiper>.swiper-wrapper>.swiper-slide").eq(0).addClass("v_active");
					$(".slide2_content").css("visibility", "visible");
					$(".slide2_content").css("opacity", "1");
				}, 2000);
				SAM.vTimer1 = setTimeout(function() {
					//					$(".play_icon_1").hide();
					//					$(".poster_img_1").hide();
					//					document.getElementById("myVideo").currentTime = 0;
					document.getElementById("myVideo").play();
				}, 2500);
			};
			if(swiper.activeIndex != 4) {
				add1Init();
			}
			if(swiper.activeIndex == 5) {
				$(".music_on").hide();
				$(".music_close").show();
				SAM.musicTimer = setTimeout(function() {
					$(".circle").css("visibility", "visible");
					$(".circle_r").css("visibility", "visible");

					if (!SAM.isIE) {
						myAudioS.currentTime = 0;
						myAudioB.currentTime = 0;
					}else{
//						myAudioS.load();
//						myAudioB.load();
					}
					myAudioS.play();
					myAudioB.volume = 0;
					myAudioB.play();
				}, 500);
			};
			if(swiper.activeIndex != 5) {
				if (!SAM.isIE) {
					myAudioS.currentTime = 0;
					myAudioB.currentTime = 0;
				}else{
//					myAudioS.load();
//					myAudioB.load();
				}
				myAudioS.pause();
				myAudioB.volume = 0;
				myAudioB.pause();
				$(".detail_box").removeClass("detail_box_show");
				$(".circle").css("visibility", "hidden");
				$(".circle_r").css("visibility", "hidden");

			};

		},
	});

	//nav导航点击事件
	$(".nav_li").eq(0).on("click", function() {
		mySwiper.swipeTo(2);
	});
	$(".nav_li").eq(1).on("click", function() {
		mySwiper.swipeTo(3);
	});
	$(".nav_li").eq(2).on("click", function() {
		mySwiper.swipeTo(5);
	});

	//首页kv轮播图
	var kv_timer1 = null;
	var kv_timer2 = null;
	var kvSwiper = new Swiper('#kv_swiper', {
		autoplay: 8000,
		loop: true,
		speed: 800,
		noSwiping: true,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
		pagination: '.swiper-pagination_1',
		onSlideChangeEnd: function(swiper) {
			console.log(swiper.activeIndex)
			SAM.kvNumber = swiper.activeIndex;
			$("#kv_swiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).addClass("kv_active").siblings().removeClass("kv_active");
			$("#kv_swiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).removeClass("removeani").siblings().addClass("removeani");
		}
	});
	console.log(kvSwiper.activeIndex);

	//suppper-slow轮播图
	//	var slowSwiper = new Swiper("#slow_swiper",{
	//		observer: true, //修改swiper自己或子元素时，自动初始化swiper
	//	 	observeParents: true, //修改swiper的父元素时，自动初始化swiper
	//    	prevButton: '.swiper-button-prev_1',
	//  		nextButton: '.swiper-button-next_1',
	//    	pagination: '.pagination',
	//    	paginationClickable:true,
	//		onSlideChangeEnd:function (swiper) {
	//			$("#slow_swiper .swiper-slide").eq(swiper.activeIndex).removeClass("remove_delay").siblings().addClass("remove_delay");
	//			$("#slow_swiper .swiper-slide").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active");
	//
	//		},
	//
	//	});
	
	//canvas轮播图
	var canvasSwiper = new Swiper('#canvas_swiper',{
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
	 	observeParents: true, //修改swiper的父元素时，自动初始化swiper
	 	onSlideChangeEnd:function (swiper) {
	 		$('#canvas_swiper>.swiper-wrapper>.swiper-slide').eq(swiper.activeIndex).addClass('can_active').siblings().removeClass('can_active');
	 		if (swiper.activeIndex == 0) {
	 			document.getElementById('canvasVideo_1').pause();
	 			document.getElementById('canvasVideo_2').pause();
	 			document.getElementById('canvasVideo_3').pause();
	 			document.getElementById('canvasVideo').play();
	 			$('.arrow_left_icon1').css('visibility','hidden');
	 			$('.arrow_right_icon1').css('visibility','visible');
	 		}else if(swiper.activeIndex == 1){
	 			document.getElementById('canvasVideo_1').play();
	 			document.getElementById('canvasVideo').pause();
	 			document.getElementById('canvasVideo_3').pause();
	 			document.getElementById('canvasVideo_2').pause();
	 			$('.arrow_left_icon1').css('visibility','visible');
	 			$('.arrow_right_icon1').css('visibility','visible');
	 			
	 		}else if(swiper.activeIndex == 2){
	 			document.getElementById('canvasVideo_2').play();
	 			document.getElementById('canvasVideo_1').pause();
	 			document.getElementById('canvasVideo').pause();
	 			document.getElementById('canvasVideo_3').pause();
	 			$('.arrow_left_icon1').css('visibility','visible');
	 			$('.arrow_right_icon1').css('visibility','visible');
	 		}else if(swiper.activeIndex == 3){
	 			document.getElementById('canvasVideo_3').play();
	 			document.getElementById('canvasVideo_2').pause();
	 			document.getElementById('canvasVideo_1').pause();
	 			document.getElementById('canvasVideo').pause();
	 			$('.arrow_left_icon1').css('visibility','visible');
	 			$('.arrow_right_icon1').css('visibility','hidden');
	 		}
	 	}
	});
	$('.arrow-left_3').on('click', function(e) {
		e.preventDefault();
		canvasSwiper.swipePrev();
	})
	$('.arrow-right_3').on('click', function(e) {
		e.preventDefault();
		canvasSwiper.swipeNext();
	})
	
	$('.arrow-left').on('click', function(e) {
		if(SAM.slowIndex == 2) {
			$(".how_box").removeClass("how3_active").addClass("how2_active");
			$(".arrow-left").css("visibility", "visible");
			$(".arrow-right").css("visibility", "visible");
			//	 		$(".s_phone_div").css("overflow","visible");
			SAM.slowIndex = 1;
		} else if(SAM.slowIndex == 1) {
			$(".how_box").removeClass("how2_active").addClass("how1_active");
			$(".arrow-left").css("visibility", "hidden");
			//	 		$(".s_phone_div").css("overflow","hidden");
			SAM.slowIndex = 0;
		}
		console.log(SAM.slowIndex);
	})
	$('.arrow-right').on('click', function(e) {
		if(SAM.slowIndex == 0) {
			$(".how_box").removeClass("how1_active").addClass("how2_active");
			SAM.slowIndex = 1;
			$(".arrow-left").css("visibility", "visible");
			$(".arrow-right").css("visibility", "visible");
			//	 		$(".s_phone_div").css("overflow","visible");
		} else if(SAM.slowIndex == 1) {
			$(".how_box").removeClass("how2_active").addClass("how3_active");
			$(".arrow-right").css("visibility", "hidden");
			//	 		$(".s_phone_div").css("overflow","hidden");
			SAM.slowIndex = 2;
			if(SAM.vFlag) {
				//	 			swVideo.currentTime = 0;	 			
				swVideo.play();
				SAM.vFlag = false;
			}
			SAM.swingTimer = setInterval(function() {

				if(SAM.swingIndex == 0 && SAM.swingFlag == true) {
					s1.hide();
					ss1.hide();
					swVideo.pause();
					s2.hide();
					ss2.hide();
					swVideo1.pause();
					s3.show();
					ss3.show();
					//					swVideo2.currentTime = 0;
					swVideo2.play();
					SAM.swingFlag = false;
				} else if(SAM.swingIndex == 1 && SAM.swingFlag == true) {
					s1.hide();
					ss1.hide();
					swVideo.pause();
					s2.show();
					ss2.show();
					//					swVideo1.currentTime = 0;
					swVideo1.play();
					s3.hide();
					ss3.hide();
					swVideo2.pause();
					SAM.swingFlag = false;
				} else if(SAM.swingIndex == 2 && SAM.swingFlag == true) {
					s1.show();
					ss1.show();
					//					swVideo.currentTime = 0;
					swVideo.play();
					s2.hide();
					ss2.hide();
					swVideo1.pause();
					s3.hide();
					ss3.hide();
					swVideo2.pause();
					SAM.swingFlag = false;
				}
				SAM.swingTime++;
				if(SAM.swingTime == 8) {
					SAM.swingIndex++;
					SAM.swingTime = 0;
					SAM.swingFlag = true;
				}

				if(SAM.swingIndex == 3) {
					SAM.swingIndex = 0;
				}
				$(".control_item").eq(SAM.swingIndex).addClass("c_active").siblings().removeClass("c_active");
			}, 1000);
		}
		console.log(SAM.slowIndex)
	})

	//视频轮播
	var videoSwiper = new Swiper("#video_swiper", {
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
		//	 	effect : 'fade',
		noSwiping: true,
		speed: 600,
		prevButton: '.swiper-button-prev_2',
		nextButton: '.swiper-button-next_2',
		onSlideChangeEnd: function(swiper) {
			$("#video_swiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).removeClass("removeani").siblings().addClass("removeani");
			$("#video_swiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).addClass("v_active").siblings().removeClass("v_active");
			$(".touch_box").hide();
			$(".title-24").removeClass("title_all");
			$(".title-96").removeClass("title_all");
			$(".video_p1").removeClass("title_all")
			myVideo.pause();
			myVideo1.pause();
			myVideo2.pause();
			if (!SAM.isIE) {
				myVideo.currentTime = 0;
				myVideo1.currentTime = 0;
				myVideo2.currentTime = 0;
			}else{
//				myVideo.load();
//				myVideo1.load();
//				myVideo2.load();
			}
			SAM.videoFlag = 0;
			SAM.videoFlag1 = 0;
			SAM.videoFlag2 = 0;
			console.log(swiper.activeIndex)
//			$(".play_icon").show().eq(swiper.activeIndex).hide();
			$(".poster_img").show().eq(swiper.activeIndex).hide();
			console.log(swiper.activeIndex)
			if(swiper.activeIndex == 0) {
				//  				myVideo.currentTime = 0;
				myVideo.play();
				$(".arrow-left_1").css("visibility", "hidden");
				$(".yulan_img_r").eq(1).hide();
				$(".yulan_img_r").eq(0).show();
			} else if(swiper.activeIndex == 1) {
				//  				myVideo1.currentTime = 0;
				myVideo1.play();
				$(".arrow-left_1").css("visibility", "visible");
				$(".arrow-right_1").css("visibility", "visible");
				$(".yulan_img_r").eq(1).show();
				$(".yulan_img_r").eq(0).hide();
				$(".yulan_img_l").eq(0).show();
				$(".yulan_img_l").eq(1).hide();
			} else if(swiper.activeIndex == 2) {
				//  				myVideo2.currentTime = 0;
				myVideo2.play();
				$(".arrow-right_1").css("visibility", "hidden");
				$(".yulan_img_l").eq(0).hide();
				$(".yulan_img_l").eq(1).show();
			}
		},
	})
	$('.arrow-left_1').on('click', function(e) {
		e.preventDefault();
		videoSwiper.swipePrev();
	})
	$('.arrow-right_1').on('click', function(e) {
		e.preventDefault();
		videoSwiper.swipeNext();
	})
	
	
	//bixby轮播图
	
	
	
	//音乐弹窗轮播图
	var musicSwiper = new Swiper("#music_swiper", {
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
		onSlideChangeEnd: function(swiper) {
			$("#music_swiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).removeClass("removeani").siblings().addClass("removeani");
			$("#music_swiper>.swiper-wrapper>.swiper-slide").eq(swiper.activeIndex).addClass("m_active").siblings().removeClass("m_active");
			document.getElementById("earVideo").pause();
			$(".poster_ear").show();
			if(swiper.activeIndex == 0) {
				$(".arrow-left_2").css("visibility", "hidden");
				$(".music_1").animate({
					'opacity': '1'
				}, 500);
			} else if(swiper.activeIndex == 1) {
				$(".arrow-left_2").css("visibility", "visible");
				$(".arrow-right_2").css("visibility", "visible");
				$(".music_1").css("opacity", '0');
			} else if(swiper.activeIndex == 1) {
				$(".arrow-right_2").css("visibility", "hidden");
				$(".music_1").css("opacity", '0');
			}
		},
	});
	$('.arrow-left_2').on('click', function(e) {
		e.preventDefault();
		musicSwiper.swipePrev();
	})
	$('.arrow-right_2').on('click', function(e) {
		e.preventDefault();
		musicSwiper.swipeNext();
	})


	//新增动态萌拍页
	$('.play_icon_add').on('click',function () {
		$('.play_icon_add,.add1_poster').hide();
		add1_video.play();
		
	});
	
	var add_timer1;
	var add_timer2;
	add1_video.addEventListener('ended',function () {
		$('.add_phone_box').show();
		setTimeout(function () {
			$('.add_phone_video').addClass('add_phone_box1 add_phone_box11');
			add_timer2=setTimeout(function () {
				$('.add_phone_video,.video_add1_c').addClass('add1_active add1_active_1');
				$('.add_phone_video').addClass('add_phone_box11');
				
			},1000);
		},100);
//		
		$('.video_add1_c').fadeIn();
//		$('.add_right').addClass('add1_active');
		$('.video_add1').addClass('small_ani');
		
		add_timer1 = setTimeout(function () {
			document.getElementById('in_video').play();
		},1600);
		add_timer3 = setTimeout(function () {
//			$('.add_phone_video,.video_add1_c').removeClass('add1_active_1');
			
			$('.chat_window').addClass('chat_active');
			$('.video_add1').hide();
		},3300)
	});
	
	
	function add1Init () {
		console.log(111)
		add1_video.pause();
		if (!SAM.isIE) {
			add1_video.currentTime = 0;
		}else{
//			add1_video.load();
		}
		document.getElementById('in_video').pause();
		if (!SAM.isIE) {
			document.getElementById('in_video').currentTime = 0;
		}else{
//			document.getElementById('in_video').load();
		}
		$('.add_phone_box').hide();
		$('.add_phone_video').removeClass('add_phone_box1');
		$('.add_phone_video,.video_add1_c').removeClass('add1_active add1_active_1');
		$('.add_phone_video').removeClass('add_phone_box11');
//		$('.add_hand').removeClass('add_hand1');
		$('.video_add1_c').hide();
//		$('.add_right').addClass('add1_active');
		$('.video_add1').removeClass('small_ani');		
		$('.chat_window').removeClass('chat_active');
		$('.video_add1').show();
		clearTimeout(add_timer1);
		clearTimeout(add_timer2);
		$('.play_icon_add,.add1_poster').show();
		
		
		
	};
	
	$('.add_posS').on('click',function () {
		if (!SAM.isIE) {
			add1_video.currentTime = 0;
		}else{
//			add1_video.load();
		}
		$('.add_phone_box').hide();
		$('.add_phone_video').removeClass('add_phone_box1');
		$('.add_phone_video,.video_add1_c').removeClass('add1_active add1_active_1');
		$('.add_phone_video').removeClass('add_phone_box11');
//		$('.add_hand').removeClass('add_hand1');
		$('.video_add1_c').hide();
//		$('.add_right').addClass('add1_active');
		$('.video_add1').removeClass('small_ani');		
		$('.chat_window').removeClass('chat_active');
		$('.video_add1').show();
		clearTimeout(add_timer1);
		clearTimeout(add_timer2);
		$('.play_icon_add,.add1_poster').hide();
		add1_video.play();
	});
	
	//音频轮播图关闭按钮
	$(".close_2").on("click", function() {
		$(".detail_box").removeClass("detail_box_show");
		document.getElementById("earVideo").pause();
		$(".poster_ear").show();
		$("#music_swiper>.swiper-wrapper>.swiper-slide").removeClass("m_active");

	});

	$(".m_div").on("click", function() {
		var _this = this;

		$(".detail_box").addClass("detail_box_show");
		console.log($(_this).index());
		if($(_this).data('index') == 0) {
			//    		$(".music_1").animate({
			//    			'opacity':'1'
			//    		},500);
			$(".arrow-left_2").css("visibility", "hidden");
			$(".arrow-right_2").css("visibility", "visible");
		} else if($(_this).data('index') == 1) {
			$(".arrow-left_2").css("visibility", "visible");
			$(".arrow-right_2").css("visibility", "visible");
		} else if($(_this).data('index') == 2) {
			$(".arrow-left_2").css("visibility", "visible");
			$(".arrow-right_2").css("visibility", "hidden");
		}
		musicSwiper.swipeTo($(_this).data('index'));
		setTimeout(function() {
			$("#music_swiper>.swiper-wrapper>.swiper-slide").eq($(_this).data('index')).addClass("m_active");

		}, 500)
	});

	//视频播放按钮(1)
	//	$(".play_icon_1").on("click",function () {

	//		$(".poster_img_1").hide();
	//		$(".play_icon_1").hide();
	//		document.getElementById("myVideo").play();
	document.getElementById("myVideo").addEventListener('timeupdate', function() {
		var _this = this;
		
		//			console.log(_this.currentTime)
		if(_this.currentTime >= 0.1 && SAM.videoFlag == 0) {
			$(".title-24_1").addClass("title_all");
			$(".play_icon").hide();
			SAM.videoFlag = 1
		}
		if(_this.currentTime >= 4 && SAM.videoFlag == 1) {
			$(".title-24_1").removeClass("title_all");
			$(".title-96_1").addClass("title_all");
			SAM.videoFlag = 2;
		};
	});

	document.getElementById("myVideo").onended = function() {
		$(".touch_box_1").show();
		$(".title-96_1").removeClass("title_all");
		$(".video_p1_1").addClass("title_all");
	};
	//	});

	//视频播放（2）
	//	$(".play_icon_2").on("click",function () {

	//		$(".poster_img_2").hide();
	//		$(".play_icon_2").hide();
	//		document.getElementById("myVideo_1").play();
	document.getElementById("myVideo_1").addEventListener('timeupdate', function() {
		var _this = this;
		if(_this.currentTime >= 0.1 && SAM.videoFlag1 == 0) {
			$(".play_icon").hide();
			$(".title-24_2").addClass("title_all");
			SAM.videoFlag1 = 1
		}
		if(_this.currentTime >= 2 && SAM.videoFlag1 == 1) {
			$(".title-24_2").removeClass("title_all");
			$(".title-96_2").addClass("title_all");
			SAM.videoFlag1 = 2;
		};
	});
	document.getElementById("myVideo_1").onended = function() {
		$(".touch_box_2").show();
		$(".title-96_2").removeClass("title_all");
		$(".video_p1_2").addClass("title_all");
	};
	//	});

	//视频播放（3）
	//	$(".play_icon_3").on("click",function () {

	//		$(".poster_img_3").hide();
	//		$(".play_icon_3").hide();
	//		document.getElementById("myVideo_2").play();
	document.getElementById("myVideo_2").addEventListener('timeupdate', function() {
		var _this = this;
		if(_this.currentTime >= 0.1 && SAM.videoFlag2 == 0) {
			$(".play_icon").hide();
			$(".title-24_3").addClass("title_all");
			SAM.videoFlag2 = 1;
		}
		if(_this.currentTime >= 3 && SAM.videoFlag2 == 1) {
			$(".title-24_3").removeClass("title_all");
			$(".title-96_3").addClass("title_all");
			SAM.videoFlag2 = 2;
		};
	});
	document.getElementById("myVideo_2").onended = function() {
		$(".touch_box_3").show();
		$(".title-96_3").removeClass("title_all");
		$(".video_p1_3").addClass("title_all");
	};
	//	});

	//如何拍摄
	$(".how_img").on("click", function() {
		myVideo.pause();
		myVideo1.pause();
		myVideo2.pause();
		$(".how_box").css("visibility", "visible");
		$(".how_box").css("z-index", "10");
		$(".how_box").addClass("how1_active");
		$(".arrow-left").css("visibility", "hidden");
		$(".arrow-right").css("visibility", "visible");
		$(".slow_swiper .swiper-slide").eq(0).addClass("active");
		var slowSwiper = new Swiper("#slow_swiper", {
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper
			prevButton: '.swiper-button-prev_1',
			nextButton: '.swiper-button-next_1',
			pagination: '.swiper-pagination',
			paginationClickable: true,

		});
	});

	//如何拍摄第三屏

	$(".control_item").on("click", function() {
		var conIndex = $(this).index();
		SAM.swingIndex = conIndex;
		SAM.swingTime = 0;
		if (!SAM.isIE) {
			swVideo.currentTime = 0;
			swVideo1.currentTime = 0;
			swVideo2.currentTime = 0;
		}else{
//			swVideo.load();
//			swVideo1.load();
//			swVideo2.load();
		}
		$(".control_item").eq(conIndex).addClass("c_active").siblings().removeClass("c_active");
		if(conIndex == 0) {
			s1.hide();
			ss1.hide();
			swVideo.pause();
			s2.hide();
			ss2.hide();
			swVideo1.pause();
			s3.show();
			ss3.show();
			//			swVideo2.currentTime = 0;
			swVideo2.play();
		} else if(conIndex == 1) {
			s1.hide();
			ss1.hide();
			swVideo.pause();
			s2.show();
			ss2.show();
			//			swVideo1.currentTime = 0;
			swVideo1.play();
			s3.hide();
			ss3.hide();
			swVideo2.pause();
		} else {
			s1.show();
			ss1.show();
			//			swVideo.currentTime = 0;
			swVideo.play();
			s2.hide();
			ss2.hide();
			swVideo1.pause();
			s3.hide();
			ss3.hide();
			swVideo2.pause();

		}
	});

	//bixBy
	$(".bixby_btn").on("click", function() {
		document.getElementById("canvasVideo").play();
		//		$(".slide4_box").addClass("canvas_X");
		$('.play_icon').hide();
		$(".slide4").removeClass("active").addClass("removeani2");
		setTimeout(function() {
			$(".bix").hide();
			$(".bix_ani").addClass("bix_toBig");

		}, 500);
		setTimeout(function() {
//			$(".canvas_div").addClass("can_active");
			$('#canvas_swiper .swiper-slide-active').addClass("can_active");
			$(".slide4_box").hide()
		}, 1000);

	});
	$(".close_bixby").on("click", function() {
		$(".slide4_box").show();
		$('#canvas_swiper .swiper-slide-active').removeClass("can_active");
		SAM.bixTimer = setTimeout(function() {
			$(".bix_ani").removeClass("bix_toBig");
		}, 100)

		SAM.bixTimer2 = setTimeout(function() {
			$(".bix").show();
			$(".slide4").removeClass("removeani2").addClass("active");
		}, 1000)
		document.getElementById("canvasVideo").pause();

	});

	//音频切换
	$(".music_btn").on("click", function() {

		if(SAM.musicFlag) {
			$(".music_on").show();
			$(".music_close").hide();
			myAudioB.volume = 1;
			myAudioS.volume = 0;

		} else {
			$(".music_on").hide();
			$(".music_close").show();
			myAudioB.volume = 0;
			myAudioS.volume = 1;
		};
		SAM.musicFlag = !SAM.musicFlag;
	});

	var audioSrc = [{
			"audios": "http://wx.hnqxs.com/wwx/audio/1-1.mp3",
			"audiob": "http://wx.hnqxs.com/wwx/audio/1.mp3",
			"name": "The classic"

		},
		{
			"audios": "http://wx.hnqxs.com/wwx/audio/2-1.mp3",
			"audiob": "http://wx.hnqxs.com/wwx/audio/2.mp3",
			"name": "First love"
		},
		{
			"audios": "http://wx.hnqxs.com/wwx/audio/3-1.mp3",
			"audiob": "http://wx.hnqxs.com/wwx/audio/3.mp3",
			'name': "Main"
		}
	];

	//上一首
	$(".up_icon_box").on("click", function() {
		myAudioS.pause();
		myAudioB.pause();
		SAM.audioIndex--;
		if(SAM.audioIndex == -1) {
			SAM.audioIndex = 2;
		}
		$(".music_name").html(audioSrc[SAM.audioIndex].name);
		myAudioS.src = audioSrc[SAM.audioIndex].audios;
		myAudioB.src = audioSrc[SAM.audioIndex].audiob;
		myAudioS.play();
		myAudioB.play();
		if (!SAM.isIE) {
			myAudioB.currentTime = 0;
			myAudioS.currentTime = 0;
		}else{
//			myAudioB.load();
//			myAudioS.load();
		}
	});
	//下一首
	$(".down_icon_box").on("click", function() {
		myAudioS.pause();
		myAudioB.pause();
		SAM.audioIndex++;
		if(SAM.audioIndex == 3) {
			SAM.audioIndex = 0;
		}
		$(".music_name").html(audioSrc[SAM.audioIndex].name);
		myAudioS.src = audioSrc[SAM.audioIndex].audios;
		myAudioB.src = audioSrc[SAM.audioIndex].audiob;
		myAudioS.play();
		myAudioB.play();
		if (!SAM.isIE) {
			myAudioB.currentTime = 0;
			myAudioS.currentTime = 0;
		}else{
//			myAudioB.load();
//			myAudioS.load();
		}
	});

	//耳机视频
	$(".poster_ear").on("click", function() {
		document.getElementById("earVideo").play();
		$(".poster_ear").hide();
		$(".play_icon").hide();
	});
	document.getElementById("earVideo").onended = function() {
		$(".poster_ear").show();
	};

	//canvas
	var pictureNum = 142;
	var pictureNum1 = 145;
	var pictureNum2 = 139;

	var pictureArr = [];
	var pictureArr1 = [];
	var pictureArr2 = [];
	var imgArr = [];
	var imgArr1 = [];
	var imgArr2 = [];

	for(var i = 0; i < 158; i++) {
		var src = 'images/4/' + i + '.jpg';
		var img = document.createElement("img");
		img.setAttribute("src", 'images/4/' + i + '.jpg');
		imgArr.push(img);
		//		console.log(img)
		pictureArr.push(src);
	};
	for(var i = 0; i < 125; i++) {
		var src = 'images/5/' + i + '.jpg';
		var img = document.createElement("img");
		img.setAttribute("src", 'images/5/' + i + '.jpg');

		imgArr1.push(img);
		pictureArr1.push(src);
	};
	for(var i = 0; i < 131; i++) {
		var src = 'images/6/' + i + '.jpg';
		var img = document.createElement("img");
		img.setAttribute("src", 'images/6/' + i + '.jpg');

		imgArr2.push(img);
		pictureArr2.push(src);
	};
	////序列帧预加载
	function preloadImg(srcArr, p_num, imgArr, ele1, ele2, ele3) {
		if(srcArr instanceof Array) {
			for(var i = 0; i < srcArr.length; i++) {
				//				console.log(srcArr[i])
				var oImg = new Image();
				oImg.src = srcArr[i];

			}
			oImg.onload = function() {
				console.log("success")

				dragAni(p_num, imgArr, ele1, ele2, ele3);
			}
		}
	}

	preloadImg(pictureArr, 157, imgArr, "myCanvas", "scroll", "bar");
	preloadImg(pictureArr1, 124, imgArr1, "myCanvas_1", "scroll_1", "bar_1");
	preloadImg(pictureArr2, 130, imgArr2, "myCanvas_2", "scroll_2", "bar_2");

	function dragAni(p_num, imgArr, ele1, ele2, ele3) {
		var myCanvas = document.getElementById(ele1);
		var cxt = myCanvas.getContext("2d");
		var scroll = document.getElementById(ele2);
		var bar = document.getElementById(ele3);
		var ptxt;
		var barleft = 0;
		cxt.drawImage(imgArr[0], 0, 0, myCanvas.width, myCanvas.height);
		bar.onmousedown = function(event) {
			var event = event || window.event;
			var leftVal = event.clientX - this.offsetLeft;
			var that = this;
			// 拖动一定写到 down 里面才可以
			document.onmousemove = function(event) {
				$("#mySwiper .slide2").addClass("swiper-no-swiping");
				var event = event || window.event;
				barleft = event.clientX - leftVal;
				if(barleft < 0)
					barleft = 0;
				else if(barleft > scroll.offsetWidth - bar.offsetWidth)
					barleft = scroll.offsetWidth - bar.offsetWidth;
				that.style.left = barleft + "px";
				ptxt = barleft / (scroll.offsetWidth - bar.offsetWidth)

				var numIndex = Math.floor(p_num * ptxt);
				//防止选择内容--当拖动鼠标过快时候，弹起鼠标，bar也会移动，修复bug
				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				cxt.clearRect(0, 0, myCanvas.width, myCanvas.height);
				cxt.drawImage(imgArr[numIndex], 0, 0, myCanvas.width, myCanvas.height);
			}

		}
		document.onmouseup = function() {
			$("#mySwiper .slide2").removeClass("swiper-no-swiping");
			document.onmousemove = null; //弹起鼠标不做任何操作
		}
	}

	//视频无法自动播放情况
	var play_icon = document.querySelectorAll(".play_icon");
	var SX_video = document.querySelectorAll(".SX_video");
	$(".play_icon_v1").on("click", function() {
		$(".play_icon_v1").hide();
		alert(111)
		document.getElementById("myVideo").play();
	});
	$(".play_icon_v2").on("click", function() {
		$(".play_icon_v2").hide();
		document.getElementById("myVideo_1").play();
	});
	$(".play_icon_v3").on("click", function() {
		$(".play_icon_v3").hide();
		document.getElementById("myVideo_2").play();
	});

}