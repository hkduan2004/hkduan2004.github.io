(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.load_bg = function() {
	this.initialize(img.load_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1033);


(lib.load_txt2 = function() {
	this.initialize(img.load_txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,24);


(lib.sos_00000 = function() {
	this.initialize(img.sos_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00001 = function() {
	this.initialize(img.sos_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00002 = function() {
	this.initialize(img.sos_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00003 = function() {
	this.initialize(img.sos_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00004 = function() {
	this.initialize(img.sos_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00005 = function() {
	this.initialize(img.sos_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00006 = function() {
	this.initialize(img.sos_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00007 = function() {
	this.initialize(img.sos_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00011 = function() {
	this.initialize(img.sos_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00012 = function() {
	this.initialize(img.sos_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00013 = function() {
	this.initialize(img.sos_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00014 = function() {
	this.initialize(img.sos_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00015 = function() {
	this.initialize(img.sos_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00016 = function() {
	this.initialize(img.sos_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00017 = function() {
	this.initialize(img.sos_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00018 = function() {
	this.initialize(img.sos_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.sos_00019 = function() {
	this.initialize(img.sos_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.tips_txt = function() {
	this.initialize(img.tips_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,20);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tipsmc_mc01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tips_txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tipsmc_mc01, new cjs.Rectangle(0,0,104,20), null);


(lib.load_mc02_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.load_txt2();
	this.instance.parent = this;
	this.instance.setTransform(-19,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.load_mc02_01, new cjs.Rectangle(-19,0,446,24), null);


(lib.load_mc01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txt = new cjs.Text("20%", "14px 'Microsoft YaHei'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(315,567.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(59));

	// Layer 2
	this.instance = new lib.sos_00000();
	this.instance.parent = this;
	this.instance.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_1 = new lib.sos_00001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_2 = new lib.sos_00002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_3 = new lib.sos_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_4 = new lib.sos_00004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_5 = new lib.sos_00005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_6 = new lib.sos_00006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_7 = new lib.sos_00007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_8 = new lib.sos_00013();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_9 = new lib.sos_00012();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_10 = new lib.sos_00011();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_11 = new lib.sos_00019();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_12 = new lib.sos_00014();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_13 = new lib.sos_00015();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_14 = new lib.sos_00016();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_15 = new lib.sos_00017();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-242.9,271.3,0.583,0.583);

	this.instance_16 = new lib.sos_00018();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-242.9,271.3,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},13).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance}]},2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.9,271.3,1119.9,629.9);


(lib.load_tipsmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.tipsmc_mc01();
	this.instance.parent = this;
	this.instance.setTransform(52,18,1,1,0,0,0,52,10);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10,alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8,104,20);


(lib.load_mc02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape.setTransform(194,115.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.047)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_1.setTransform(194,115.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.086)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_2.setTransform(194,115.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.129)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_3.setTransform(194,115.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.169)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_4.setTransform(194,115.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.212)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_5.setTransform(194,115.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.255)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_6.setTransform(194,115.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.294)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_7.setTransform(194,115.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.337)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_8.setTransform(194,115.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.376)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_9.setTransform(194,115.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.42)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_10.setTransform(194,115.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.459)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_11.setTransform(194,115.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.502)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_12.setTransform(194,115.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.545)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_13.setTransform(194,115.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.584)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_14.setTransform(194,115.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.627)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_15.setTransform(194,115.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.667)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_16.setTransform(194,115.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.71)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_17.setTransform(194,115.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.753)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_18.setTransform(194,115.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.792)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_19.setTransform(194,115.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.835)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_20.setTransform(194,115.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.875)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_21.setTransform(194,115.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.918)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_22.setTransform(194,115.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.957)").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_23.setTransform(194,115.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Eg0pBXgMAAAiu/MBpTAAAMAAACu/g");
	this.shape_24.setTransform(194,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},70).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	// tipsmc
	this.loading_tipsmc = new lib.load_tipsmc();
	this.loading_tipsmc.parent = this;
	this.loading_tipsmc.setTransform(198,48,1,1,0,0,0,52,10);
	this.loading_tipsmc.alpha = 0;
	this.loading_tipsmc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.loading_tipsmc).wait(23).to({_off:false},0).wait(67).to({_off:true},1).wait(4));

	// Layer 1
	this.instance = new lib.load_mc02_01();
	this.instance.parent = this;
	this.instance.setTransform(223,32,1,1,0,0,0,223,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:12,alpha:1},30).wait(60).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-444.1,674,1120);


(lib.LoadUI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// load_mc01
	this.load_mc01 = new lib.load_mc01();
	this.load_mc01.parent = this;
	this.load_mc01.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.load_mc01).wait(1));

	// load_mc02
	this.load_mc02 = new lib.load_mc02();
	this.load_mc02.parent = this;
	this.load_mc02.setTransform(351,452,1,1,0,0,0,223,12);

	this.timeline.addTween(cjs.Tween.get(this.load_mc02).wait(1));

	// Layer 1
	this.instance = new lib.load_bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1.064);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LoadUI, new cjs.Rectangle(-242.9,-4.1,1119.9,1120), null);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.loadMc = new lib.LoadUI();
	this.loadMc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.loadMc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.1,545.9,1119.9,1120);
// library properties:
lib.properties = {
	width: 640,
	height: 1100,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"img/load_bg.jpg?1505211505710", id:"load_bg"},
		{src:"img/load_txt2.png?1505211505710", id:"load_txt2"},
		{src:"img/sos_00000.png?1505211505710", id:"sos_00000"},
		{src:"img/sos_00001.png?1505211505710", id:"sos_00001"},
		{src:"img/sos_00002.png?1505211505710", id:"sos_00002"},
		{src:"img/sos_00003.png?1505211505710", id:"sos_00003"},
		{src:"img/sos_00004.png?1505211505710", id:"sos_00004"},
		{src:"img/sos_00005.png?1505211505710", id:"sos_00005"},
		{src:"img/sos_00006.png?1505211505710", id:"sos_00006"},
		{src:"img/sos_00007.png?1505211505710", id:"sos_00007"},
		{src:"img/sos_00011.png?1505211505710", id:"sos_00011"},
		{src:"img/sos_00012.png?1505211505710", id:"sos_00012"},
		{src:"img/sos_00013.png?1505211505710", id:"sos_00013"},
		{src:"img/sos_00014.png?1505211505710", id:"sos_00014"},
		{src:"img/sos_00015.png?1505211505710", id:"sos_00015"},
		{src:"img/sos_00016.png?1505211505710", id:"sos_00016"},
		{src:"img/sos_00017.png?1505211505710", id:"sos_00017"},
		{src:"img/sos_00018.png?1505211505710", id:"sos_00018"},
		{src:"img/sos_00019.png?1505211505710", id:"sos_00019"},
		{src:"img/tips_txt.png?1505211505710", id:"tips_txt"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;