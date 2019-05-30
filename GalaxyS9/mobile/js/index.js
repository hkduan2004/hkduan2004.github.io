var rem = 100;
var prg = 0;
var timer = 0;
var videoPlay=true;
progress(80,10);
function progress (dist, delay, callback) {
  window.clearInterval(timer);
  timer = window.setInterval(function(){
    if (prg >= dist) {
      window.clearInterval(timer);
      prg = dist;
      callback && callback();
    } else {
      prg++;
    }
    $(".load_img img").eq(Math.floor(prg/4)).show().siblings().hide();
  }, delay);
}
var s9_num=$(window).width()/$(window).height();
//console.log(s9_num)
if(s9_num<0.578&&s9_num>0.53)
{
    //长屏幕
    console.log("长屏幕")
    $(".kv_head").css("margin-top",".63rem");
    $(".kv1_text2").css({"width":"3.78rem"});
    $(".kv1_text1").css({"width":"4.7rem","margin":".5rem auto .15rem"});
    $(".kv1_mobile").css({"width":"3.9rem","left":"50%","margin-left":"-1.95rem"});
    /*$(".kv2_mobile").css({"width":"3.9rem","left":"50%","margin-left":"-1.95rem"});*/
    $(".kv2_text1").css({"width":"5.5rem","margin":".45rem auto .1rem"});
    $(".kv2_text2").css({"width":"5rem"});
    $(".kv3_text1").css({"margin":"1.5rem 0 0 .66rem"});
    $(".kv3_text2").css({"margin":".35rem 0 0.3rem .66rem"});
    $(".kv_mobile img").css({"width":"4.6rem"});
    $(".kv_yuding").css({"margin":"0.2rem auto 0.5rem"});
    $(".yuding_text2").css({"margin":".4rem 0 0 .9rem"});
    $(".kv_buytxt").css({"margin":"1.2rem 0 0.09rem .86rem"});
    $(".slow_man").css({"top":"4.56rem"});
    $(".slow_manL").css({"top":"5.09rem"});
    $(".slow_manR").css({"top":"5.62rem"});
    $(".shootbox").css({"top":"4.5rem"});
    $(".how_text").css({"margin":"1.2rem auto 0.5rem"});
    $(".first_xiaozi").css({"margin":".3rem auto 0"});
    $(".how_second").css({"margin":"2.2rem auto 0.5rem"});
    $(".second_xiaozi").css({"margin":".3rem auto 0"});
    $(".slow_music").css({"top":"8rem"});
    $(".change_music").css({"top":"8.8rem"});
    $(".how_third").css({"margin":"2.2rem auto 0.5rem"});
    $(".swiper_fangshi").css({"top":"4.3rem"});
    $(".music_prev").css({"top":"6.3rem"});
    $(".music_next").css({"top":"6.3rem"});
    $(".music_name").css({"top":"6.3rem"});
    $(".icon_AKG").css({"margin":"1.25rem auto 0.5rem"});
    $(".icon_Gear").css({"margin":"0.5rem auto 0"});
    $(".music_mobile").css({"margin-top":"1rem"});
    $(".mengpai_tit").css({"margin":"1rem auto 0"});
    $(".mengpai_text").css({"margin":"0.4rem auto"});
    $(".kv_summer_text1").css("margin","0.3rem auto 6.6rem");
}
if(s9_num<0.53)
{
    //iphoneX
    console.log("iphoneX")
    $(".kv_head").css("margin-top",".63rem");
    $(".kv1_text1").css({"margin":".5rem auto .15rem","width":"4.7rem"});
    $(".kv1_text2").css({"width":"3.78rem"});
    $(".kv1_mobile").css({"width":"4.6rem","left":"50%","margin-left":"-2.3rem"});
    //$(".kv2_mobile").css({"width":"4.6rem","left":"50%","margin-left":"-2.3rem"});
    $(".kv2_text1").css({"width":"5.5rem","margin":".45rem auto .1rem"});
    $(".kv2_text2").css({"width":"5rem"});
    $(".kv3_text1").css({"margin":"1.5rem 0 0 .66rem"});
    $(".kv3_text2").css({"margin":".35rem 0 0.3rem .66rem"});
    $(".kv_mobile img").css({"width":"4.8rem"});
    $(".kv_yuding").css({"margin":"0.2rem auto 0.5rem"});
    $(".yuding_text2").css({"margin":".4rem 0 0 .9rem"});
    $(".kv_buytxt").css({"margin":"1.2rem 0 0.09rem .86rem"});
    $(".slow_man").css({"top":"4.56rem"});
    $(".slow_manL").css({"top":"5.09rem"});
    $(".slow_manR").css({"top":"5.62rem"});
    $(".shootbox").css({"top":"4.5rem"});
    $(".how_text").css({"margin":"1.2rem auto 0.5rem"});
    $(".first_xiaozi").css({"margin":".3rem auto 0"});
    $(".how_second").css({"margin":"2.2rem auto 0.5rem"});
    $(".second_xiaozi").css({"margin":".3rem auto 0"});
    $(".slow_music").css({"top":"8rem"});
    $(".change_music").css({"top":"8.8rem"});
    $(".how_third").css({"margin":"2.2rem auto 0.5rem"});
    $(".swiper_fangshi").css({"top":"4.3rem"});
    $(".music_prev").css({"top":"6.3rem"});
    $(".music_next").css({"top":"6.3rem"});
    $(".music_name").css({"top":"6.3rem"});
    $(".icon_AKG").css({"margin":"1.25rem auto 0.5rem"});
    $(".icon_Gear").css({"margin":"0.5rem auto 0"});
    $(".music_mobile").css({"margin-top":"1rem"});
    $(".mengpai_tit").css({"margin":"1rem auto 0"});
    $(".mengpai_text").css({"margin":"0.45rem auto"});
    $(".kv_summer_text1").css("margin","0.3rem auto 6.9rem");
    $(".kv_summer_text3").css("margin","0.45rem auto 0.4rem");
}
if(s9_num>0.64)
{
    //aipang
    console.log("aipang")
    $(".icon_Gear").css({"margin":".1rem auto 0"});
    $(".kv1_text1").css({"width":"3.6rem","margin":"0 auto .05rem"});
    $(".kv1_text2").css({"width":"2.5rem","margin":"0 auto"});
    $(".kv1_mobile").css({"bottom":"-0.3rem"});
    $(".kv2_text1").css({"width":"4rem","margin":".06rem auto .04rem"});
    $(".kv2_text2").css({"width":"3.5rem","margin":"0 auto .05rem"});
    $(".kv2_mobile").css({"width":"3rem"});
    $(".kv_mobile").css({"bottom":"-0.39rem"});
    $(".kv_buytxt").css({"margin":"1rem 0 0.05rem .86rem"});
    $(".slow_music").css({"top":"6rem"});
    $(".change_music").css({"top":"6.5rem"});
    $(".shangxia_btn").css({"bottom":"1rem"});
    $(".fangshi_png").css({"top":"2.5rem"});
    $(".icon_AKG").css({"margin":"0.5rem auto 0.1rem"});
    $(".buy_btn").css({"margin":"0.4rem auto 0"});
    $(".Gear_big").css({"margin":".4rem auto"});
    $(".mengpai_tit").css("margin","0.3rem auto 0");
    $(".mengpai_text").css({"width":"4rem","margin":"0.2rem auto 0"});
    $(".mengpai_btn").css("width","3.52rem");
    $(".kvnew_text1").css("margin","0.1rem 0 0.05rem 1.49rem");
    $(".kv_summer_text1").css("margin","0.3rem auto 4.9rem");
    $(".kv_summer_text3").css("margin","0.2rem auto 0.2rem");
}

window.onload = function(){
    progress(100,10,function(){
        $(".loading").hide();
        $(".swiper_summer").addClass("m_active"); 
    });
    var kv_Timer=null;
    //huawei
    var uwers=navigator.userAgent.toLowerCase();

        
    //audio
    var oAudio1=document.getElementById("audio1");//pt
    var oAudio2=document.getElementById("audio2");//s9
    $("body").one("click",function(){
        oAudio1.play();
        oAudio2.play();
        oAudio1.pause();
        oAudio2.pause();
        function audioAutoPlay() {
            oAudio1.play();
            oAudio2.play();
            oAudio1.pause();
            oAudio2.pause();
            document.addEventListener("WeixinJSBridgeReady", function () {
                oAudio1.play();
                oAudio2.play();
                oAudio1.pause();
                oAudio2.pause();
            }, false);
            audioAutoPlay();
        }
    });
    var audioArr=[
        {pt:"media/FirstLove_pt.mp3",s9:"media/FirstLove_s9.mp3",name:"images/music_love.png"},
        {pt:"media/Main_pt.mp3",s9:"media/Main_s9.mp3",name:"images/music_main.png"},
        {pt:"media/TheClassic_pt.mp3",s9:"media/TheClassic_s9.mp3",name:"images/music_classic.png"},
    ];

    $(".btn_off").click(function(){
        $(".btn_off").hide().siblings().show();
        $(".music_kaiguan img").attr("src","images/music_putong.png");
        oAudio1.play();
        oAudio2.play();
        oAudio1.muted = true;
        oAudio2.muted = false;
        oAudio2.currentTime=oAudio1.currentTime;
    });
    $(".btn_on").click(function(){
        $(".btn_on").hide().siblings().show();
        $(".music_kaiguan img").attr("src","images/music_s9.png");
        oAudio1.play();
        oAudio2.play();
        oAudio1.muted = false;
        oAudio2.muted = true;
        oAudio1.currentTime=oAudio2.currentTime;

    });
    var oGear=document.getElementById("Gear");
    $(".Gear_play").click(function(){
        $(".swiper_music").addClass("music_showarrow");
        oGear.currentTime=0;
        $(".Gear_box").fadeIn();
        oGear.play();        
    });
    oGear.onended=function(){
        $(".Gear_box").fadeOut();
        $(".swiper_music").removeClass("music_showarrow");
    };
       
    var nishiImg=new Image();
    nishiImg.src="images/super_man.png";
    var audio_index=0;
    $(".music_next").click(function(){
        audio_index++;
        if(audio_index==audioArr.length)
        {
            audio_index=0;
        }
        oAudio1.setAttribute("src",audioArr[audio_index].pt);
        oAudio2.setAttribute("src",audioArr[audio_index].s9);
        $(".music_name").addClass("namedown").removeClass("delay3s");
        setTimeout(function(){
            $(".music_name img").attr("src",audioArr[audio_index].name);
            setTimeout(function(){
                $(".music_name").removeClass("namedown");
            },500);
        },300);
        oAudio1.play();
        oAudio2.play();
    });
    $(".music_prev").click(function(){
        audio_index--;
        if(audio_index<0)
        {
            audio_index=audioArr.length-1;
        }
        oAudio1.setAttribute("src",audioArr[audio_index].pt);
        oAudio2.setAttribute("src",audioArr[audio_index].s9);
        $(".music_name").addClass("namedown").removeClass("delay3s");
        setTimeout(function(){
            $(".music_name img").attr("src",audioArr[audio_index].name);
            setTimeout(function(){
                $(".music_name").removeClass("namedown");
            },500);
        },300);

        oAudio1.play();
        oAudio2.play();
    });
    var left_fei=null;
    var left_num=0;
    var right_fei=null;
    var right_num=0;
    var swiper = new Swiper('.swiper_whole', {
        direction : 'vertical',
        nextButton:".next",
        lazyLoading : true,
        observer:true,
        observeParents:true,
        lazyLoadingInPrevNext : true,
        lazyLoadingInPrevNextAmount : 1,
        onTransitionEnd: function(swiper){
            //console.log(swiper.activeIndex+"xiahua")
            $(".slider").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active");
            $(".slider").eq(swiper.activeIndex).removeClass("removeAni").siblings().addClass("removeAni");
            if($(".bixby").hasClass("active"))
            {
                clearInterval(left_fei);
                clearInterval(right_fei);
                left_fei=setInterval(function(){
                    left_num++;
                    if(left_num==$(".bixby_left img").length-1)
                    {
                        left_num=0;
                    }
                    $(".bixby_left img").eq(left_num).show().siblings().hide();
                },60);
                
                right_fei=setInterval(function(){
                    right_num++;
                    if(right_num==$(".bixby_right img").length-1)
                    {
                        right_num=0;
                    }
                    $(".bixby_right img").eq(right_num).show().siblings().hide();
                },60);
            }
            else{
                clearInterval(left_fei);
                clearInterval(right_fei);
            }
            
            if(swiper.activeIndex==1){
                KV_swiper.slideTo(0,0,false);
                $(".swiper_kv .swiper-slide").removeClass("m_active");
            }
            else if(swiper.activeIndex==5){
                clearInterval(aniTimer);
                clearInterval(canvas2_Timer);
                clearInterval(canvas3_Timer);
                clearInterval(canvas4_Timer);
                $(".Bixby_phone").removeClass("ani");
                $(".Bixby_pangbai").removeClass("ani");
                $(".Bixby_close").removeClass("ani");
                $(".bixby").removeClass("show_arrow");
                BixbySwiper.unlockSwipeToNext();
                $(".bixby .transition").removeClass("cleardelay");
                $(".Bixby_animation").removeClass("ani");
                BixbySwiper.slideTo(0,0,false);
            }
            else if(swiper.activeIndex==6){
                oAudio1.play();
                oAudio2.play();
                oAudio1.muted = false;
                oAudio2.muted = true;
                oAudio1.currentTime=oAudio2.currentTime;
                $(".music_show").show();
                oMengPai.pause();
                oMengPai.currentTime=0;
                $(".mengpai_box").hide();
                $(".mengpai_video").show();
                $(".mengpai_hand").css("z-index",1);
                $(".mengpai_pic_box").css({"visibility":"hidden","z-index":2});
                $(".mengpai_phone").css("z-index",1);
                $(".mengpai_chat").css("visibility","hidden");
                $(".mengpai_light").hide();
                $(".mengpai").removeClass("mengpai_active face_active");
                $(".mengpai_face").addClass("transition").removeClass("cleardelay");
                $(".hand_box").removeClass("active");
                $(".mengpai_rotate").removeClass("active");
                $(".mengpai_pic_div").removeClass("active");
                $(".mengpai_pic2").removeClass("active");
                clearTimeout(oMengpaiT);
            }
            else if(swiper.activeIndex==7){
                oAudio1.pause();
                oAudio2.pause();
                $(".swiper_music .swiper-slide-active").addClass("m_active").siblings().removeClass("m_active");
            }
            else if(swiper.activeIndex==8){
                $(".swiper_music .swiper-slide").removeClass("m_active");
            }
            else if(swiper.activeIndex==4){
                $(".diyibu").removeClass("xiaani dierbu_show");
                $(".dierbu").removeClass("dierbu_show xiaani");
                $(".diyibu .transition").removeClass("cleardelay");
                $(".dierbu .transition").removeClass("cleardelay");
                $(".disanbu").removeClass("disanbu_show");
                $(".shangyibu").hide();
                $(".xiayibu").hide();
                $(".xiayibu_first").css("display","inline-block");
                fangshiswiper.slideTo(0,0,false);
            }
            else if(swiper.activeIndex==3){
                $(".swiper_video1").removeClass("videoforplay");
                $(".swiper_video2").removeClass("videoforplay");
                $(".swiper_video3").removeClass("videoforplay");
                videoSwiper.slideTo(0,0,false);
                $(".replay_box").fadeOut();
                $(".video_play").fadeIn();
                myVideo.pause();
                myVideo1.pause();
                myVideo2.pause();
                myVideo.currentTime=0;
                myVideo1.currentTime=0;
                myVideo2.currentTime=0;
                $(".video_pagination").fadeIn();
            }
        },
        onSlidePrevEnd: function(swiper){
            //console.log(swiper.activeIndex+"shanghua")
            if(swiper.activeIndex==6)
            {
                Gear.pause();
                oAudio1.play();
                oAudio2.play();
                $(".Gear_box").fadeOut();
                $(".swiper_music").removeClass("music_showarrow");
                $(".swiper_music .swiper-slide").removeClass("m_active");
            }
            
            if(swiper.activeIndex==7)
            {
                $(".swiper_music .swiper-slide-active").addClass("m_active").siblings().removeClass("m_active");
            }
            else if(swiper.activeIndex==0)
            {  
                $(".swiper_kv .swiper-slide").eq(0).addClass("m_active");
                videoSwiper.slideTo(0,0,false);
            }
            else if(swiper.activeIndex==1)
            {  
                $(".swiper_video1").removeClass("videoforplay");
                $(".swiper_video2").removeClass("videoforplay");
                $(".swiper_video3").removeClass("videoforplay");
                $(".replay_box").fadeOut();
                $(".video_play").fadeIn();
                myVideo.pause();
                myVideo1.pause();
                myVideo2.pause();
                myVideo.currentTime=0;
                myVideo1.currentTime=0;
                myVideo2.currentTime=0;
                $(".video_pagination").fadeIn();
            }
            else if(swiper.activeIndex==5)
            {
                $(".music_name").addClass("delay3s");
                oAudio1.pause();
                oAudio2.pause();
            }
            else if(swiper.activeIndex==4)
            {
                oMengPai.pause();
                oMengPai.currentTime=0;
                $(".mengpai_box").hide();
                $(".mengpai_video").show();
                $(".mengpai_hand").css("z-index",1);
                $(".mengpai_pic_box").css({"visibility":"hidden","z-index":2});
                $(".mengpai_phone").css("z-index",1);
                $(".mengpai_chat").css("visibility","hidden");
                $(".mengpai_light").hide();
                $(".mengpai").removeClass("mengpai_active face_active");
                $(".mengpai_face").addClass("transition").removeClass("cleardelay");
                $(".mengpai_pic_div").removeClass("active");
                $(".mengpai_pic2").removeClass("active");
                $(".hand_box").removeClass("active");
                $(".mengpai_rotate").removeClass("active");
                clearTimeout(oMengpaiT);
            }
            else if(swiper.activeIndex==3)
            {
                clearInterval(aniTimer);
                clearInterval(canvas2_Timer);
                clearInterval(canvas3_Timer);
                clearInterval(canvas4_Timer);
                $(".bixby").removeClass("show_arrow");
                BixbySwiper.unlockSwipeToNext();
                $(".Bixby_phone").removeClass("ani");
                $(".Bixby_pangbai").removeClass("ani");
                $(".Bixby_close").removeClass("ani");
                $(".bixby .transition").removeClass("cleardelay");
                $(".Bixby_animation").removeClass("ani");
                BixbySwiper.slideTo(0,0,false);
            }
            else if(swiper.activeIndex==2){
                $(".diyibu").removeClass("xiaani dierbu_show");
                $(".dierbu").removeClass("dierbu_show xiaani");
                $(".diyibu .transition").removeClass("cleardelay");
                $(".dierbu .transition").removeClass("cleardelay");
                $(".disanbu").removeClass("disanbu_show");
                $(".shangyibu").hide();
                $(".xiayibu").hide();
                $(".xiayibu_first").css("display","inline-block");
                fangshiswiper.slideTo(0,0,false);
            }
            
        }
    });
    var KV_swiper = new Swiper('.swiper_kv', {
        noSwiping : true,
        observer:true,
        observeParents:true,
        pagination:'.kv_pagination',
        paginationClickable :true,
        loop:true,
        autoplay : 5000,
        autoplayDisableOnInteraction : false,
        onInit: function(KV_swiper){
            $(".swiper_summer").removeClass("m_active"); 
        },
        onTransitionEnd:function(KV_swiper){
            $(".swiper_kv .swiper-slide").eq(KV_swiper.activeIndex).addClass("m_active").siblings().removeClass("m_active");
            //console.log(KV_swiper.activeIndex);
            if(KV_swiper.activeIndex==5)
            {
                $(".swiper_kv .swiper-slide").eq(1).addClass("m_active")
                KV_swiper.startAutoplay();
            }
            if(KV_swiper.activeIndex==4)
            {
                KV_swiper.startAutoplay();
            }
        },
        onSlidePrevEnd: function(KV_swiper){
            //console.log(KV_swiper.activeIndex)
            if(KV_swiper.activeIndex==0)
            {
                $(".swiper_kv .swiper-slide").eq(5).addClass("m_active");
            }
            if(KV_swiper.activeIndex==3)
            {
                KV_swiper.startAutoplay();
            }
            if(KV_swiper.activeIndex==2)
            {
                KV_swiper.startAutoplay();
            }
        },
    }); 
  

    var videoSwiper = new Swiper('.swiper_video',{
        noSwiping : true,
        observer:true,
        observeParents:true,
        pagination : '.video_pagination',
        paginationClickable :true,
        onInit: function(videoSwiper){
            if(videoSwiper.activeIndex==0)
            {
                videoSwiper.lockSwipeToPrev();
                videoSwiper.unlockSwipeToNext();
            }
        },
        onTransitionEnd: function(videoSwiper){
            //$(".replay_box").fadeOut();
            $(".swiper_video1").removeClass("videoforplay");
            $(".swiper_video2").removeClass("videoforplay");
            $(".swiper_video3").removeClass("videoforplay");
            myVideo.pause();
            myVideo1.pause();
            myVideo2.pause();
            myVideo.currentTime=0;
            myVideo1.currentTime=0;
            myVideo2.currentTime=0;
            $(".video_pagination").fadeIn();
            $(".replay_box").fadeOut();
            $(".play_text").fadeIn();
            if(videoSwiper.activeIndex==0)
            {
                videoSwiper.lockSwipeToPrev();
                videoSwiper.unlockSwipeToNext();
            }
            else if(videoSwiper.activeIndex==videoSwiper.slides.length-1)
            {
                videoSwiper.lockSwipeToNext();
                videoSwiper.unlockSwipeToPrev();
            }
            else
            {
                videoSwiper.unlockSwipeToPrev();
                videoSwiper.unlockSwipeToNext();
            }
        },
        onTransitionStart: function(videoSwiper){
            $(".video_play").fadeIn();
        },

    });

    var canvas_img2=188;
    var canvas2_Timer=null;
    var canvas_img3=308;
    var canvas3_Timer=null;
    var canvas_img4=429;
    var canvas4_Timer=null;
    var BixbySwiper = new Swiper('.swiper_canvas',{
        observer:true,
        observeParents:true,
        prevButton:".bixby_prev",
        nextButton:".bixby_next",
        onTransitionEnd: function(BixbySwiper){
            $(".Bixby_pangbai").removeClass("ani");
            $(".Bixby_close").removeClass("ani");
            $(".Bixby_pangbai").eq(BixbySwiper.activeIndex).addClass("ani");
            $(".Bixby_close").eq(BixbySwiper.activeIndex).addClass("ani");
            //console.log(BixbySwiper.activeIndex);
            clearInterval(aniTimer);
            clearInterval(canvas2_Timer);
            clearInterval(canvas3_Timer);
            clearInterval(canvas4_Timer);
            if(BixbySwiper.activeIndex==0)
            {
                BixbySwiper.lockSwipeToPrev();
                BixbySwiper.unlockSwipeToNext();
                aniTimer=setInterval(function(){
                    cxt.clearRect(0, 0, oCanvas.width, oCanvas.height);
                    images++;
                    if(images>=180)
                    {
                        images=0;
                    }
                    cxt.drawImage(imgArr[images], 0, 0, oCanvas.width, oCanvas.height);
                },120);
            }
            if(BixbySwiper.activeIndex==1)
            {
                BixbySwiper.unlockSwipeToPrev();
                BixbySwiper.unlockSwipeToNext();
                canvas2_Timer=setInterval(function(){
                    cxt2.clearRect(0, 0, oCanvas2.width, oCanvas2.height);
                    canvas_img2++;//90
                    if(canvas_img2>=308)
                    {
                        canvas_img2=189;
                    }
                    cxt2.drawImage(imgArr[canvas_img2], 0, 0, oCanvas2.width, oCanvas2.height);
                },100);
            }
            if(BixbySwiper.activeIndex==2)
            {
                BixbySwiper.unlockSwipeToPrev();
                BixbySwiper.unlockSwipeToNext();
                canvas3_Timer=setInterval(function(){
                    cxt3.clearRect(0, 0, oCanvas3.width, oCanvas3.height);
                    canvas_img3++;//309
                    if(canvas_img3>=429)
                    {
                        canvas_img3=309;
                    }
                    cxt3.drawImage(imgArr[canvas_img3], 0, 0, oCanvas3.width, oCanvas3.height);
                },100);
            }
            if(BixbySwiper.activeIndex==3)
            {
                BixbySwiper.unlockSwipeToPrev();
                BixbySwiper.lockSwipeToNext();
                canvas4_Timer=setInterval(function(){
                    cxt4.clearRect(0, 0, oCanvas4.width, oCanvas4.height);
                    canvas_img4++;//309
                    if(canvas_img4>=669)
                    {
                        canvas_img4=430;
                    }
                    cxt4.drawImage(imgArr[canvas_img4], 0, 0, oCanvas4.width, oCanvas4.height);
                },100);
            }
        },
    });
    var has = window.location.hash;
    if(has.indexOf('#1')!=-1){
         swiper.slideTo(2, 1000,true);
    }
    if(has.indexOf('#2')!=-1){
         swiper.slideTo(4, 1000,true);
    }
    if(has.indexOf('#3')!=-1){
         swiper.slideTo(5, 1000,true);
    }
    $(".xiayibu_first").click(function(){
        $(".diyibu .transition").addClass("cleardelay");
        $(".diyibu").addClass("xiaani");
        $(".dierbu").addClass("dierbu_show");
        $(".dierbu").removeClass("xiaani");
        $(".xiayibu_first").hide();
        $(".xiayibu_second").css("display","inline-block");
        $(".shangyibu_first").css("display","inline-block");
        $(".slow_manM").removeClass("xiayibu_ani_B")
    });
    $(".shangyibu_first").click(function(){
        $(".diyibu").removeClass("xiaani");
        $(".diyibu").addClass("diyibu_show");
        $(".dierbu .transition").addClass("cleardelay");
        $(".dierbu").addClass("xiaani");
        $(".shangyibu_first").hide();
        $(".xiayibu_second").hide();
        $(".xiayibu_first").css("display","inline-block");
        $(".slow_bottom").addClass("xiayibu_ani_B");
    });
    var faTimer=null;
    var oFangshiC=document.getElementById("fangshi_man");
    var fac = oFangshiC.getContext("2d");
    var swing_i=0
    var oFangshi1=[];
    var swing = [];
    for(var i = 0; i < 311; i++) {
       var src = 'images/img1/' + i + '.jpg';
       var img = document.createElement("img");
       img.setAttribute("src", 'images/img1/' + i + '.jpg');
       swing.push(img);
       oFangshi1.push(src);
    }
    $(".xiayibu_second").click(function(){
        $(".dierbu .transition").addClass("cleardelay");
        $(".dierbu").addClass("xiaani");
        $(".disanbu").addClass("disanbu_show");
        $(".disanbu").removeClass("xiaani");
        $(".xiayibu_second").hide();
        $(".slow_manM").addClass("xiayibu_ani_B");
        $(".shangyibu_first").hide();
        $(".slow_bottom").removeClass("xiayibu_ani_B");
        $(".shangyibu_second").css("display","inline-block");
        clearInterval(faTimer);
        swing_i=0;
        faTimer=setInterval(function(){
            fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
            swing_i++;//90
            if(swing_i>=90)
            {
                swing_i=0;
            }
            fac.drawImage(swing[swing_i], 0, 0, oFangshiC.width, oFangshiC.height);
        },70);
    });
    $(".shangyibu_second").click(function(){
        clearInterval(faTimer);
        $(".dierbu").removeClass("xiaani");
        $(".dierbu").addClass("dierbu_show");
        $(".disanbu .transition").addClass("cleardelay");
        $(".disanbu").addClass("xiaani");
        $(".slow_manM").removeClass("xiayibu_ani_B");
        $(".shangyibu_second").hide();
        $(".xiayibu_second").css("display","inline-block");
        $(".shangyibu_first").css("display","inline-block");
    });
    var loopTimer=null;
    var daoTimer=null;
    var fangshiswiper = new Swiper('.swiper_fangshi', {
        noSwiping : true,
        prevButton:".arrowL",
        nextButton:".arrowR",
        observer:true,
        observeParents:true,
        onTransitionEnd:function(fangshiswiper){
            if(fangshiswiper.activeIndex==1)
            {
                //fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
                clearInterval(faTimer);
                clearInterval(loopTimer);
                swing_i=90;
                loopTimer=setInterval(function(){
                    fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
                    swing_i++;//90
                    if(swing_i>=200)
                    {
                        swing_i=90;
                    }
                    fac.drawImage(swing[swing_i], 0, 0, oFangshiC.width, oFangshiC.height);
                },70);
            }
            if(fangshiswiper.activeIndex==2)
            {
                clearInterval(daoTimer);
                clearInterval(loopTimer);
                swing_i=200;
                daoTimer=setInterval(function(){
                    fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
                    swing_i++;//90
                    if(swing_i>=311)
                    {
                        swing_i=201;
                    }
                    fac.drawImage(swing[swing_i], 0, 0, oFangshiC.width, oFangshiC.height);
                },70);

            }
            
        },
        onSlidePrevEnd:function(){
            if(fangshiswiper.activeIndex==1)
            {
                clearInterval(loopTimer);
                clearInterval(daoTimer);
                //fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
                swing_i=90;
                loopTimer=setInterval(function(){
                    fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
                    swing_i++;//90
                    if(swing_i>=200)
                    {
                        swing_i=90;
                    }
                    fac.drawImage(swing[swing_i], 0, 0, oFangshiC.width, oFangshiC.height);
                },70);
            }
            if(fangshiswiper.activeIndex==0)
            {
                clearInterval(loopTimer);
                clearInterval(daoTimer);
                //fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
                swing_i=0;
                loopTimer=setInterval(function(){
                    fac.clearRect(0, 0, oFangshiC.width, oFangshiC.height);
                    swing_i++;
                    if(swing_i>=90)
                    {
                        swing_i=0;
                    }
                    fac.drawImage(swing[swing_i], 0, 0, oFangshiC.width, oFangshiC.height);
                },70);
            }
        },
    }); 
    var musicswiper = new Swiper('.swiper_music', {
        noSwiping : true,
        prevButton:".icon_prev",
        nextButton:".icon_next",
        observer:true,
        observeParents:true,
        onTransitionEnd: function(musicswiper){
            $(".swiper_music .swiper-slide").eq(musicswiper.activeIndex).addClass("m_active").siblings().removeClass("m_active");
        },
         onInit: function(musicswiper){
            $(".swiper_music .swiper-slide").removeClass("m_active");
        },
        onSlidePrevEnd: function(musicswiper){
            //console.log(musicswiper.activeIndex)
            if(musicswiper.activeIndex==1)
            {
                Gear.pause();
                $(".Gear_box").fadeOut();
                $(".swiper_music").removeClass("music_showarrow");
            }
        },
    });     
    $(".nav_1").click(function(){
        swiper.slideTo(2,1000,true);
    });
    $(".nav_2").click(function(){
        swiper.slideTo(4,1000,true);
        clearInterval(left_fei);
        clearInterval(right_fei);
        left_fei=setInterval(function(){
            left_num++;
            if(left_num==$(".bixby_left img").length-1)
            {
                left_num=0;
            }
            $(".bixby_left img").eq(left_num).show().siblings().hide();
        },60);
        
        right_fei=setInterval(function(){
            right_num++;
            if(right_num==$(".bixby_right img").length-1)
            {
                right_num=0;
            }
            $(".bixby_right img").eq(right_num).show().siblings().hide();
        },60);
    });
    $(".nav_3").click(function(){
        swiper.slideTo(6,1000,true);
    });
    $(".super_how").click(function(){
        swiper.slideTo(3,1000,true);
    });
    $(".icon_AKG").click(function(){
        oAudio1.pause();
        oAudio2.pause();
        $(".music_show").show();
        setTimeout(function(){
            swiper.slideTo(6,1000,true);
            musicswiper.slideTo(0,0,false);
            $(".music_show").removeClass("removeAni");
            setTimeout(function(){
                $(".swiper_music .swiper-slide").eq(0).addClass("m_active").siblings().removeClass("m_active");
            },1000);
        },200);
    });
    $(".icon_ATMOS").click(function(){
        oAudio1.pause();
        oAudio2.pause();
        $(".music_show").show();
        setTimeout(function(){
            swiper.slideTo(6,1000,true);
            musicswiper.slideTo(1,0,false);
            $(".music_show").removeClass("removeAni");
            setTimeout(function(){
                $(".swiper_music .swiper-slide").eq(1).addClass("m_active").siblings().removeClass("m_active");
            },1000);
        },200);
    });
    $(".icon_Gear").click(function(){
        oAudio1.pause();
        oAudio2.pause();
        $(".music_show").show();
        setTimeout(function(){
            swiper.slideTo(6,1000,true);
            musicswiper.slideTo(2,0,false);
            $(".music_show").removeClass("removeAni");
            setTimeout(function(){
                $(".swiper_music .swiper-slide").eq(2).addClass("m_active").siblings().removeClass("m_active");
            },1000);
        },200);
    });
    
    //图片加载

    var images=0;
    var aniTimer=null;
    var canTimer=null;
    var scaleT=null;
    var oCanvas=document.getElementById("canvas");
    var cxt = oCanvas.getContext("2d");
    var oCanvas2=document.getElementById("canvas2");
    var cxt2 = oCanvas2.getContext("2d");
    var oCanvas3=document.getElementById("canvas3");
    var cxt3 = oCanvas3.getContext("2d");
    var oCanvas4=document.getElementById("canvas4");
    var cxt4 = oCanvas4.getContext("2d");
    $(".bixby_welcome").click(function(){
        clearInterval(canTimer);
        clearInterval(aniTimer);
        clearInterval(canvas2_Timer);
        clearInterval(canvas3_Timer);
        clearInterval(canvas4_Timer);
        $(".bixby").removeClass("active");
        $(".bixby .transition").addClass("cleardelay");
        setTimeout(function(){
            $(".Bixby_bg").show();
            $(".Bixby_notice").addClass("ani transition");
            $(".Bixby_animation").addClass("ani");
            $(".bixby").addClass("show_arrow");
            aniTimer=setInterval(function(){
                cxt.clearRect(0, 0, oCanvas.width, oCanvas.height);
                images++;
                if(images>=180)
                {
                    images=0;
                }
                cxt.drawImage(imgArr[images], 0, 0, oCanvas.width, oCanvas.height);
            },120);
            
            setTimeout(function(){    
                $(".Bixby_content").fadeOut(); 
                $(".Bixby_mask").css({"visibility":"visible"}); 
                $(".Bixby_bg").fadeOut(); 
                BixbySwiper.slideTo(0,0,false);
                //$(".swiper_canvas").css("visibility","visible");
                scaleT=setTimeout(function(){
                    $(".Bixby_mask").addClass("scale");
                    $(".Bixby_notice").removeClass("ani transition");
                    setTimeout(function(){
                        $(".Bixby_pangbai").eq(0).addClass("ani");
                        $(".Bixby_close").eq(0).addClass("ani");
                        $(".Bixby_mask").removeClass("scale");
                        $(".Bixby_mask").css({"visibility":"hidden"});
                        $(".Bixby_content").fadeIn();
                    },1000);
                },1000);
            },800);

        },800);
        
        
    });
    $(".Bixby_close").click(function(){
        clearInterval(aniTimer);
        clearInterval(canvas2_Timer);
        clearInterval(canvas3_Timer);
        clearInterval(canvas4_Timer);
        BixbySwiper.unlockSwipeToNext();
        $(".Bixby_pangbai").removeClass("ani");
        $(".Bixby_close").removeClass("ani");
        $(".bixby").removeClass("show_arrow");
        $(".bixby").addClass("active");
        $(".bixby .transition").removeClass("cleardelay");
        $(".Bixby_animation").removeClass("ani");
    });

  var pictureArr = [];
  var imgArr = [];
  for(var i = 0; i < 669; i++) {
       var src = 'images/img/' + i + '.jpg';
       var img = document.createElement("img");
       img.setAttribute("src", 'images/img/' + i + '.jpg');
       imgArr.push(img);
       pictureArr.push(src);
  }
 
  ////序列帧预加载
    function preloadImg(srcArr) 
    {
        if(srcArr instanceof Array) 
        {
            for(var i = 1; i < srcArr.length; i++) 
            {
                var oImg = new Image();
                oImg.src = srcArr[i];
            }
            oImg.onload = function() {
                cxt.clearRect(0, 0, oCanvas.width, oCanvas.height);
                canTimer=setInterval(function(){
                    images++;
                    if(images==imgArr.length-1)
                    {
                        images=0;
                        clearInterval(canTimer);
                    }
                    cxt.drawImage(imgArr[images], 0, 0, oCanvas.width, oCanvas.height);
                },120);
            }
        }
    }
    preloadImg(oFangshi1);
    preloadImg(pictureArr);
    
    
    //video
    
    var myVideo = document.getElementById("mvideo");
    var myVideo1 = document.getElementById("mvideo1");
    var myVideo2 = document.getElementById("mvideo2");
    $(".video1_play").click(function(){
        $(".swiper_video1").addClass("videoforplay");
        myVideo.play();
        $(".play_text").fadeOut();
        $(".replay_box").fadeOut();
        $(".video_pagination").fadeOut();
    });
    $(".replay_button1").click(function(){
        $(".video1_play").click();     
    });
    $(".next_video1").click(function(){
        videoSwiper.slideTo(1,100,false);
        $(".swiper_video2").addClass("videoforplay");
        myVideo1.play();
        $(".replay_box").fadeOut();
        $(".play_text").fadeOut();
        $(".video_pagination").fadeOut();
    });
    $(".video2_play").click(function(){
        $(".next_video1").click();
    });
    $(".replay_button2").click(function(){
        $(".next_video1").click();
    });
    $(".video3_play").click(function(){
        $(".next_video2").click();
    });
    $(".next_video2").click(function(){  
        videoSwiper.slideTo(2,100,false);
        $(".swiper_video3").addClass("videoforplay");
        myVideo2.play();
        $(".replay_box").fadeOut();
        $(".play_text").fadeOut();
        $(".video_pagination").fadeOut();
    });
    $(".replay_button3").click(function(){        
        $(".next_video2").click();
    });
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    /*if (browser.versions.android) {
        !(function(doc) {

            var Mycanvas = doc.getElementById("Mycanvas"),
                cont = Mycanvas.getContext("2d"),
                Myvideo = doc.getElementById("mvideo");
            cw = window.innerWidth;
            ch = window.innerHeight;
            Mycanvas.width = cw;
            Mycanvas.height = ch;
            Myvideo.addEventListener("canplay", function() {
                var cont2 = cerateCanvas(cw, ch).getContext("2d");
                draw(this, cont, cont2, cw, ch);
            }, false)

            function cerateCanvas(w, h) {
                var cr = doc.createElement("canvas");
                cr.width = w;
                cr.height = h;
                return cr;
            }
            function draw(v, c, c2, w, h) {
                if(v.paused || v.ended) {
                    cancelAnimationFrame(stop);
                    return false;
                }
                c2.drawImage(v, 0, 0, w, h);
                var idata = c2.getImageData(0, 0, w, h),
                    data = idata.data;
                for(var i = 0; i < data.length; i += 4) {
                    var r = data[i],
                        g = data[i + 1],
                        b = data[i + 2];
                    brightness = (3 * r + 4 * g + b) >>> 3;
                    data[i] = brightness;
                    data[i + 1] = brightness;
                    data[i + 2] = brightness;
                };
                idata.data = data;
                c.putImageData(idata, 0, 0);
                var stop = requestAnimationFrame(function() {
                    draw(v, c, c2, w, h);
                });
            }
        })(document);
    };*/
    
    myVideo.onended=function(){
        $(".swiper_video1").removeClass("videoforplay");
        $(".video_play").hide();
        $(".replay_box1").fadeIn();
        $(".play_text").fadeIn();
        $(".video_pagination").fadeIn();
    };
    myVideo1.onended=function(){
        $(".swiper_video2").removeClass("videoforplay");
        $(".video_play").hide();
        $(".replay_box2").fadeIn();
        $(".play_text").fadeIn();
        $(".video_pagination").fadeIn();
    };
    myVideo2.onended=function(){
        $(".swiper_video3").removeClass("videoforplay");
        $(".video_play").hide();
        $(".replay_box3").fadeIn();
        $(".play_text").fadeIn();
        $(".video_pagination").fadeIn();
    };

    //萌拍
    var oMengPai=document.getElementById("paiVideo");
    $(".mengpai_play").click(function(){
        $(".mengpai_box").fadeIn();
        
        oMengPai.play();
    });
    var oMengpaiT=null;
    /*oMengPai.onclick=function(){
        oMengPai.pause();
    };*/
    oMengPai.onended=function(){
        oMengPai.pause();
        $(".mengpai_video").hide();
        $(".mengpai_box").fadeOut();
        $(".mengpai_pic_box").css({"visibility":"visible","z-index":4});
        setTimeout(function(){
            $(".mengpai_rotate").addClass("active");
            setTimeout(function(){
                $(".hand_box").addClass("active");
                $(".mengpai").addClass("mengpai_active face_active");
                $(".mengpai_light").fadeIn();
                setTimeout(function(){
                    $(".mengpai_pic_div").addClass("active");
                    $(".mengpai_pic2").addClass("active");
                    oMengpaiT=setTimeout(function(){
                        $(".mengpai_pic_box").css("display","none");
                        $(".mengpai").removeClass("face_active");
                        $(".mengpai_face").removeClass("transition").addClass("cleardelay");
                        $(".mengpai_chat").css("visibility","visible");
                        setTimeout(function(){
                            $(".mengpai_pic_box").css({"visibility":"hidden","display":"block"});
                            $(".chat_box").addClass("opa_active");
                        },1000);
                    },5000);
                },500);
            },1000);
        },1000);
    };
    
    
    //横屏提示
    ;(function(){
        var os=window.os||{};
        init();
        function init(){
            window_resize_orientation();//一进入页面判断是否横屏
            if(os.ios) $(window).on('resize',window_resize_orientation);
            else $(window).on('resize',window_orientation);
        }
        //横屏提示
        function window_resize_orientation(e){
            if($(window).width()>$(window).height()) orientationHandler('landscape');
            else orientationHandler('portrait');
        }
        
        function window_orientation(e) {
            if (window.orientation == 90 || window.orientation == -90) orientationHandler('landscape');
            else if (window.orientation == 0 || window.orientation == 180) orientationHandler('portrait');
        }
        function orientationHandler(orientation){
            //翻转提示浮层
            var turnBox=$('#turnBox');
            if (orientation=='landscape') {
                os.orientation = 'landscape';       
                if(turnBox.length==0) turnBox=$('<aside class="turnBox" id="turnBox"><img src="images/turn.png" class="turn"><p>请锁定竖屏体验</p></aside>').appendTo($('body'));
            }
            else if (orientation=='portrait'){
                os.orientation='portrait';
                if(turnBox.length>0) turnBox.remove();
            }
        }
    })();   
    shareimg+="images/share.jpg";
    var shareData = {
        title: '三星盖乐世S9 | S9+ 新品发布',
        desc: '三星盖乐世S9|S9+ 发布',
        link: location.href,
        imgUrl: shareimg,
        success: function () {
        }
    };
    //分享
    var loc=location.href.split("/"); //字符分割 
    var shareimg="";
    for(var m=0;m<loc.length-1;m++)
    {
        shareimg+=loc[m]+"/";
    }
    shareimg+="images/share.jpg";
    var shareData = {
        title: '三星盖乐世S9 | S9+ 新品发布',
        desc: '1秒定格960个瞬间',
        link: location.href,
        imgUrl: shareimg,
        success: function () {
        }
    };
    var shareData1 = {
        title: '三星盖乐世S9 | S9+ 新品发布',
        desc: '1秒定格960个瞬间',
        link: location.href,
        imgUrl: shareimg,
        success: function () {
        }
    };


    $.ajax({
    url: 'http://support-cn.samsung.com/campaign/ssd/960/Api_Share.aspx',
    type: "GET",
    dataType: 'jsonp',
    jsonp:"callbackparam",
    jsonpCallback:"jsonpCallback",
    data: {url:location.href},
    success: function (json) {
        //客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数 
        // var _data = data.replace("(","").replace(")","");
        // var json = JSON.parse(_data);
        wx.config({
            debug: false,
            appId: json.appId,
            timestamp: json.timestamp,
            nonceStr: json.nonceStr,
            signature: json.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ'
            ]
        });

        window.shareData = shareData;
        wx.ready(function(){
            wx.onMenuShareAppMessage(shareData1);
            wx.onMenuShareTimeline(shareData1);
            wx.onMenuShareQQ(shareData1);
            wx.onMenuShareWeibo(shareData1);
        });
    } });
};






















