(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Shadow Selves_atlas_1", frames: [[1082,1082,1024,815],[0,0,1080,1080],[0,1082,1080,1080],[0,2164,1080,1080],[1082,0,1080,1080],[1082,1899,361,601],[1082,2502,361,601],[1282,3105,361,601],[0,3246,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.black_dragon_eye_by_kaysa_art_dbv7bckfullview = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Knife1 = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Knife2 = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Knife3 = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Knife4 = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.peridotss_0 = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.peridotss_1 = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.peridotsss = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.spookyspace = function() {
	this.initialize(ss["Shadow Selves_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Knife4();
	this.instance.setTransform(491.9,0,0.4832,0.4832,70.4905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,666.2,666.2), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Knife2();
	this.instance.setTransform(0,201.95,0.4942,0.4942,-22.2334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,696,696), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Knife3();
	this.instance.setTransform(100.9,604.25,0.4753,0.4753,-101.3377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,604.3,604.3), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Knife1();
	this.instance.setTransform(508.95,353.25,0.3574,0.3574,156.2166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,509,509), null);


(lib.Scene_1_Fade_to_White = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fade_to_White
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBdVAAAUAAAAmqgbVAbWUgbWAbVgmqAAAUgmpAAAgbWgbVUgbVgbWAAAgmqUAAAgmpAbVgbWUAbWgbVAmpAAAUAmqAAAAbWAbVUAbVAbWAAAAmpg");
	this.shape.setTransform(612.325,3276.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(161,161,161,0)").s().p("EhB/BCAUgbVgbWAAAgmqUAAAgmpAbVgbWUAbWgbVAmpAAAUAmqAAAAbWAbVUAbVAbWAAAAmpUAAAAmqgbVAbWUgbWAbVgmqAAAUgmpAAAgbWgbVg");
	this.shape_1.setTransform(612.325,3276.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#010101").ss(1,1,1).p("EhdSAAAUAAAgmoAbVgbUUAbVgbVAmoAAAUAmpAAAAbVAbVUAbVAbUAAAAmoUAAAAmqgbVAbUUgbVAbVgmpAAAUgmoAAAgbVgbVUgbVgbUAAAgmqg");
	this.shape_2.setTransform(612.15,3276.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(162,162,162,0.016)").s().p("EhB9BB+UgbVgbUAAAgmqUAAAgmoAbVgbUUAbVgbWAmoAAAUAmpAAAAbVAbWUAbUAbUAAAAmoUAAAAmqgbUAbUUgbVAbUgmpAAAUgmoAAAgbVgbUg");
	this.shape_3.setTransform(612.15,3276.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#010101").ss(1,1,1).p("EhdPAAAUAAAgmnAbUgbUUAbUgbUAmnAAAUAmoAAAAbUAbUUAbUAbUAAAAmnUAAAAmogbUAbUUgbUAbUgmoAAAUgmnAAAgbUgbUUgbUgbUAAAgmog");
	this.shape_4.setTransform(611.975,3276.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(164,164,164,0.027)").s().p("EhB7BB8UgbUgbUAAAgmoUAAAgmnAbUgbUUAbUgbUAmnAAAUAmoAAAAbUAbUUAbUAbUAAAAmnUAAAAmogbUAbUUgbUAbUgmoAAAUgmnAAAgbUgbUg");
	this.shape_5.setTransform(611.975,3276.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#020202").ss(1,1,1).p("EhdMAAAUAAAgmlAbTgbUUAbTgbTAmmAAAUAmnAAAAbTAbTUAbTAbUAAAAmlUAAAAmngbTAbTUgbTAbTgmnAAAUgmmAAAgbTgbTUgbTgbTAAAgmng");
	this.shape_6.setTransform(611.8,3276.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(165,165,165,0.043)").s().p("EhB5BB6UgbTgbTAAAgmnUAAAgmmAbTgbTUAbTgbTAmmAAAUAmmAAAAbUAbTUAbTAbTAAAAmmUAAAAmngbTAbTUgbUAbTgmmAAAUgmmAAAgbTgbTg");
	this.shape_7.setTransform(611.8,3276.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#030303").ss(1,1,1).p("EhdJAAAUAAAgmlAbSgbSUAbTgbSAmkAAAUAmmAAAAbSAbSUAbTAbSAAAAmlUAAAAmmgbTAbSUgbSAbSgmmAAAUgmkAAAgbTgbSUgbSgbSAAAgmmg");
	this.shape_8.setTransform(611.6,3276.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(166,166,166,0.059)").s().p("EhB3BB4UgbTgbSAAAgmmUAAAgmlAbTgbSUAbSgbSAmlAAAUAmlAAAAbTAbSUAbSAbSAAAAmlUAAAAmmgbSAbSUgbTAbSgmlAAAUgmlAAAgbSgbSg");
	this.shape_9.setTransform(611.6,3276.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#040404").ss(1,1,1).p("EhdGAAAUAAAgmjAbRgbSUAbSgbRAmjAAAUAmlAAAAbRAbRUAbRAbSAAAAmjUAAAAmkgbRAbSUgbRAbRgmlAAAUgmjAAAgbSgbRUgbRgbSAAAgmkg");
	this.shape_10.setTransform(611.4,3276.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(168,168,168,0.071)").s().p("EhB1BB2UgbRgbSgABgmkUAABgmjAbRgbSUAbRgbRAmkAAAUAmkAAAAbSAbRUAbRAbSAAAAmjUAAAAmlgbRAbRUgbSAbRgmkAAAUgmkAAAgbRgbRg");
	this.shape_11.setTransform(611.4,3276.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#040404").ss(1,1,1).p("EhdEAAAUAAAgmjAbRgbQUAbRgbRAmiAAAUAmkAAAAbQAbRUAbRAbQAAAAmjUAAAAmkgbRAbQUgbQAbRgmkAAAUgmiAAAgbRgbRUgbRgbQAAAgmkg");
	this.shape_12.setTransform(611.225,3276.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(169,169,169,0.086)").s().p("EhBzBB0UgbRgbRAAAgmjUAAAgmjAbRgbQUAbRgbRAmiAAAUAmkAAAAbQAbRUAbRAbQAAAAmjUAAAAmjgbRAbRUgbQAbRgmkAAAUgmiAAAgbRgbRg");
	this.shape_13.setTransform(611.225,3276.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#050505").ss(1,1,1).p("EhdBAAAUAAAgmiAbQgbQUAbPgbPAmiAAAUAmjAAAAbPAbPUAbQAbQAAAAmiUAAAAmigbQAbQUgbPAbQgmjAAAUgmiAAAgbPgbQUgbQgbQAAAgmig");
	this.shape_14.setTransform(611.05,3276.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(171,171,171,0.102)").s().p("EhBxBByUgbQgbQAAAgmiUAAAgmiAbQgbPUAbQgbQAmhAAAUAmjAAAAbPAbQUAbQAbPAAAAmiUAAAAmigbQAbQUgbPAbQgmjAAAUgmhAAAgbQgbQg");
	this.shape_15.setTransform(611.05,3276.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#060606").ss(1,1,1).p("Ehc+AAAUAAAgmgAbPgbPUAbPgbPAmgAAAUAmhAAAAbPAbPUAbPAbPAAAAmgUAAAAmhgbPAbPUgbPAbPgmhAAAUgmgAAAgbPgbPUgbPgbPAAAgmhg");
	this.shape_16.setTransform(610.875,3276.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(172,172,172,0.118)").s().p("EhBvBBwUgbPgbPAAAgmhUAAAgmgAbPgbPUAbPgbPAmgAAAUAmhAAAAbPAbPUAbPAbPAAAAmgUAAAAmhgbPAbPUgbPAbPgmhAAAUgmgAAAgbPgbPg");
	this.shape_17.setTransform(610.875,3276.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#070707").ss(1,1,1).p("Ehc7AAAUAAAgmfAbOgbOUAbOgbPAmfAAAUAmgAAAAbOAbPUAbPAbOAAAAmfUAAAAmggbPAbOUgbOAbPgmgAAAUgmfAAAgbOgbPUgbOgbOAAAgmgg");
	this.shape_18.setTransform(610.7,3276.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(173,173,173,0.129)").s().p("EhBuBBuUgbNgbOgABgmgUAABgmfAbNgbOUAbPgbPAmfAAAUAmgAAAAbOAbPUAbPAbOAAAAmfUAAAAmggbPAbOUgbOAbPgmgAAAUgmfAAAgbPgbPg");
	this.shape_19.setTransform(610.7,3276.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#070707").ss(1,1,1).p("Ehc5AAAUAAAgmeAbNgbNUAbOgbOAmeAAAUAmfAAAAbOAbOUAbNAbNAAAAmeUAAAAmfgbNAbNUgbOAbOgmfAAAUgmeAAAgbOgbOUgbNgbNAAAgmfg");
	this.shape_20.setTransform(610.5,3276.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(175,175,175,0.145)").s().p("EhBrBBsUgbOgbNAAAgmfUAAAgmeAbOgbNUAbNgbOAmeAAAUAmfAAAAbNAbOUAbOAbNAAAAmeUAAAAmfgbOAbNUgbNAbOgmfAAAUgmeAAAgbNgbOg");
	this.shape_21.setTransform(610.5,3276.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#080808").ss(1,1,1).p("Ehc2AAAUAAAgmdAbNgbNUAbMgbMAmdAAAUAmeAAAAbMAbMUAbNAbNAAAAmdUAAAAmegbNAbMUgbMAbNgmeAAAUgmdAAAgbMgbNUgbNgbMAAAgmeg");
	this.shape_22.setTransform(610.325,3276.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(176,176,176,0.161)").s().p("EhBpBBqUgbNgbMAAAgmeUAAAgmdAbNgbNUAbMgbMAmdAAAUAmeAAAAbMAbMUAbNAbNAAAAmdUAAAAmegbNAbMUgbMAbNgmeAAAUgmdAAAgbMgbNg");
	this.shape_23.setTransform(610.325,3276.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#090909").ss(1,1,1).p("Ehc0AAAUAAAgmcAbMgbMUAbNgbLAmbAAAUAmdAAAAbMAbLUAbMAbMAAAAmcUAAAAmdgbMAbLUgbMAbMgmdAAAUgmbAAAgbNgbMUgbMgbLAAAgmdg");
	this.shape_24.setTransform(610.15,3276.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(177,177,177,0.173)").s().p("EhBoBBoUgbMgbLAAAgmdUAAAgmcAbMgbMUAbMgbLAmcAAAUAmcAAAAbMAbLUAbMAbMAAAAmcUAAAAmdgbMAbLUgbMAbMgmcAAAUgmcAAAgbMgbMg");
	this.shape_25.setTransform(610.15,3276.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#090909").ss(1,1,1).p("EhcxAAAUAAAgmbAbLgbLUAbLgbLAmbAAAUAmbAAAAbLAbLUAbMAbLAAAAmbUAAAAmbgbMAbLUgbLAbMgmbAAAUgmbAAAgbLgbMUgbLgbLAAAgmbg");
	this.shape_26.setTransform(609.95,3276.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(179,179,179,0.188)").s().p("EhBmBBmUgbKgbLgABgmbUAABgmbAbKgbLUAbLgbLAmbAAAUAmcAAAAbLAbLUAbKAbLAABAmbUgABAmbgbKAbLUgbLAbMgmcAAAUgmbAAAgbLgbMg");
	this.shape_27.setTransform(609.95,3276.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0A0A0A").ss(1,1,1).p("EhcuAAAUAAAgmZAbKgbLUAbLgbKAmZAAAUAmaAAAAbLAbKUAbKAbLAAAAmZUAAAAmagbKAbLUgbLAbKgmaAAAUgmZAAAgbLgbKUgbKgbLAAAgmag");
	this.shape_28.setTransform(609.775,3276);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(180,180,180,0.204)").s().p("EhBkBBlUgbKgbLAAAgmaUAAAgmZAbKgbLUAbLgbKAmZAAAUAmaAAAAbLAbKUAbKAbLAAAAmZUAAAAmagbKAbLUgbLAbKgmaAAAUgmZAAAgbLgbKg");
	this.shape_29.setTransform(609.775,3276);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0B0B0B").ss(1,1,1).p("EhcrAAAUAAAgmYAbJgbKUAbKgbJAmYAAAUAmZAAAAbJAbJUAbKAbKAAAAmYUAAAAmZgbKAbJUgbJAbKgmZAAAUgmYAAAgbKgbKUgbJgbJAAAgmZg");
	this.shape_30.setTransform(609.6,3275.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(181,181,181,0.216)").s().p("EhBiBBiUgbJgbJAAAgmZUAAAgmYAbJgbKUAbKgbJAmYAAAUAmZAAAAbKAbJUAbJAbKAAAAmYUAAAAmZgbJAbJUgbKAbKgmZAAAUgmYAAAgbKgbKg");
	this.shape_31.setTransform(609.6,3275.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0C0C0C").ss(1,1,1).p("EhcoAAAUAAAgmXAbIgbJUAbJgbIAmXAAAUAmYAAAAbJAbIUAbIAbJAAAAmXUAAAAmYgbIAbJUgbJAbJgmYAAAUgmXAAAgbJgbJUgbIgbJAAAgmYg");
	this.shape_32.setTransform(609.4,3275.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(183,183,183,0.231)").s().p("EhBgBBgUgbJgbIAAAgmYUAAAgmXAbJgbJUAbJgbIAmXgABUAmYAABAbJAbIUAbIAbJAAAAmXUAAAAmYgbIAbIUgbJAbJgmYAAAUgmXAAAgbJgbJg");
	this.shape_33.setTransform(609.4,3275.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0C0C0C").ss(1,1,1).p("EhcmAAAUAAAgmWAbIgbIUAbIgbIAmWAAAUAmXAAAAbIAbIUAbIAbIAAAAmWUAAAAmXgbIAbIUgbIAbIgmXAAAUgmWAAAgbIgbIUgbIgbIAAAgmXg");
	this.shape_34.setTransform(609.225,3275.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(184,184,184,0.247)").s().p("EhBeBBfUgbIgbIAAAgmXUAAAgmWAbIgbIUAbIgbIAmWAAAUAmXAAAAbIAbIUAbIAbIAAAAmWUAAAAmXgbIAbIUgbIAbIgmXAAAUgmWAAAgbIgbIg");
	this.shape_35.setTransform(609.225,3275.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0D0D0D").ss(1,1,1).p("EhcjAAAUAAAgmVAbHgbHUAbHgbHAmVAAAUAmWAAAAbHAbHUAbHAbHAAAAmVUAAAAmVgbHAbIUgbHAbHgmWAAAUgmVAAAgbHgbHUgbHgbIAAAgmVg");
	this.shape_36.setTransform(609.05,3275.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(186,186,186,0.263)").s().p("EhBcBBdUgbHgbIAAAgmVUAAAgmVAbHgbHUAbHgbHAmVAAAUAmWAAAAbHAbHUAbHAbHAAAAmVUAAAAmVgbHAbIUgbHAbHgmWAAAUgmVAAAgbHgbHg");
	this.shape_37.setTransform(609.05,3275.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0E0E0E").ss(1,1,1).p("EhcgAAAUAAAgmUAbGgbGUAbGgbGAmUAAAUAmVAAAAbGAbGUAbGAbGAAAAmUUAAAAmVgbGAbGUgbGAbGgmVAAAUgmUAAAgbGgbGUgbGgbGAAAgmVg");
	this.shape_38.setTransform(608.875,3275.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(187,187,187,0.275)").s().p("EhBaBBbUgbGgbGAAAgmVUAAAgmUAbGgbGUAbGgbGAmUAAAUAmVAAAAbGAbGUAbGAbGAAAAmUUAAAAmVgbGAbGUgbGAbGgmVAAAUgmUAAAgbGgbGg");
	this.shape_39.setTransform(608.875,3275.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0E0E0E").ss(1,1,1).p("EhcdAAAUAAAgmTAbFgbFUAbGgbFAmSAAAUAmUAAAAbFAbFUAbGAbFAAAAmTUAAAAmUgbGAbFUgbFAbGgmUAAAUgmSAAAgbGgbGUgbFgbFAAAgmUg");
	this.shape_40.setTransform(608.7,3275.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(188,188,188,0.29)").s().p("EhBYBBZUgbFgbFAAAgmUUAAAgmTAbFgbGUAbGgbEAmSgABUAmUAABAbFAbEUAbFAbGAAAAmTUAAAAmUgbFAbFUgbFAbFgmUAAAUgmSAAAgbGgbFg");
	this.shape_41.setTransform(608.7,3275.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0F0F0F").ss(1,1,1).p("EhcbAAAUAAAgmRAbFgbFUAbEgbFAmSAAAUAmSAAAAbFAbFUAbFAbFAAAAmRUAAAAmSgbFAbFUgbFAbFgmSAAAUgmSAAAgbEgbFUgbFgbFAAAgmSg");
	this.shape_42.setTransform(608.525,3275.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(190,190,190,0.306)").s().p("EhBWBBXUgbFgbFAAAgmSUAAAgmRAbFgbFUAbEgbFAmSAAAUAmSAAAAbFAbFUAbFAbFAAAAmRUAAAAmSgbFAbFUgbFAbFgmSAAAUgmSAAAgbEgbFg");
	this.shape_43.setTransform(608.525,3275.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#101010").ss(1,1,1).p("EhcYAAAUAAAgmQAbEgbEUAbEgbEAmQAAAUAmSAAAAbEAbEUAbDAbEAAAAmQUAAAAmRgbDAbEUgbEAbEgmSAAAUgmQAAAgbEgbEUgbEgbEAAAgmRg");
	this.shape_44.setTransform(608.3,3275.575);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(191,191,191,0.318)").s().p("EhBUBBVUgbEgbEAAAgmRUAAAgmQAbEgbEUAbEgbEAmQAAAUAmRAAAAbFAbEUAbDAbEAAAAmQUAAAAmRgbDAbEUgbFAbEgmRAAAUgmQAAAgbEgbEg");
	this.shape_45.setTransform(608.3,3275.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#111111").ss(1,1,1).p("EhcVAAAUAAAgmPAbDgbDUAbDgbDAmPAAAUAmQAAAAbDAbDUAbDAbDAAAAmPUAAAAmQgbDAbDUgbDAbDgmQAAAUgmPAAAgbDgbDUgbDgbDAAAgmQg");
	this.shape_46.setTransform(608.125,3275.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(192,192,192,0.333)").s().p("EhBSBBTUgbDgbDAAAgmQUAAAgmPAbDgbDUAbDgbDAmPAAAUAmQAAAAbDAbDUAbDAbDAAAAmPUAAAAmQgbDAbDUgbDAbDgmQAAAUgmPAAAgbDgbDg");
	this.shape_47.setTransform(608.125,3275.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#111111").ss(1,1,1).p("EhcTAAAUAAAgmOAbDgbDUAbCgbCAmOAAAUAmPAAAAbCAbCUAbDAbDAAAAmOUAAAAmPgbDAbDUgbCAbCgmPAAAUgmOAAAgbCgbCUgbDgbDAAAgmPg");
	this.shape_48.setTransform(607.95,3275.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(194,194,194,0.349)").s().p("EhBQBBRUgbDgbCAABgmPUgABgmOAbDgbDUAbCgbCAmOAAAUAmPAAAAbCAbCUAbCAbDAAAAmOUAAAAmPgbCAbCUgbCAbCgmPAAAUgmOAAAgbCgbCg");
	this.shape_49.setTransform(607.95,3275.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#121212").ss(1,1,1).p("EhcQAAAUAAAgmNAbCgbCUAbBgbBAmNAAAUAmOAAAAbBAbBUAbCAbCAAAAmNUAAAAmOgbCAbBUgbBAbCgmOAAAUgmNAAAgbBgbCUgbCgbBAAAgmOg");
	this.shape_50.setTransform(607.775,3275.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(195,195,195,0.361)").s().p("EhBOBBPUgbCgbBAAAgmOUAAAgmNAbCgbCUAbBgbBAmNAAAUAmOAAAAbBAbBUAbCAbCAAAAmNUAAAAmOgbCAbBUgbBAbCgmOAAAUgmNAAAgbBgbCg");
	this.shape_51.setTransform(607.775,3275.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#131313").ss(1,1,1).p("EhcNAAAUAAAgmMAbAgbBUAbBgbAAmMAAAUAmMAAAAbBAbAUAbBAbBAAAAmMUAAAAmNgbBAbAUgbBAbBgmMAAAUgmMAAAgbBgbBUgbAgbAAAAgmNg");
	this.shape_52.setTransform(607.6,3275.35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(196,196,196,0.376)").s().p("EhBMBBNUgbBgbAAAAgmNUAAAgmMAbBgbBUAbBgbAAmLAAAUAmMAAAAbBAbAUAbBAbBAAAAmMUAAAAmNgbBAbAUgbBAbBgmMAAAUgmLAAAgbBgbBg");
	this.shape_53.setTransform(607.6,3275.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#141414").ss(1,1,1).p("EhcKAAAUAAAgmLAa/gbAUAbAgbAAmLAAAUAmLAAAAbAAbAUAbAAbAAAAAmLUAAAAmLgbAAbAUgbAAbAgmLAAAUgmLAAAgbAgbAUga/gbAAAAgmLg");
	this.shape_54.setTransform(607.425,3275.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(198,198,198,0.392)").s().p("EhBLBBMUga/gbAAAAgmMUAAAgmKAa/gbBUAbAgbAAmLAABUAmLgABAbAAbAUAbAAbBAAAAmKUAAAAmMgbAAbAUgbAAa/gmLAABUgmLgABgbAga/g");
	this.shape_55.setTransform(607.425,3275.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#141414").ss(1,1,1).p("EhcIAAAUAAAgmKAa/ga+UAa/gbAAmKAAAUAmKAAAAa/AbAUAbAAa+AAAAmKUAAAAmLgbAAa+Uga/AbAgmKAAAUgmKAAAga/gbAUga/ga+AAAgmLg");
	this.shape_56.setTransform(607.25,3275.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(199,199,199,0.404)").s().p("EhBJBBKUga/gbAAAAgmKUAAAgmKAa/ga+UAa/gbAAmKAAAUAmKAAAAa/AbAUAa/Aa+AAAAmKUAAAAmKga/AbAUga/Aa+gmKAABUgmKgABga/ga+g");
	this.shape_57.setTransform(607.25,3275.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#151515").ss(1,1,1).p("EhcFAAAUAAAgmIAa+ga/UAa+ga+AmJAAAUAmKAAAAa9Aa+UAa/Aa/AAAAmIUAAAAmJga/Aa/Uga9Aa+gmKAAAUgmJAAAga+ga+Uga+ga/AAAgmJg");
	this.shape_58.setTransform(607.05,3275.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(201,201,201,0.42)").s().p("EhBHBBIUga+ga/AAAgmJUAAAgmJAa+ga+UAa/ga+AmIAAAUAmJAAAAa/Aa+UAa+Aa+AAAAmJUAAAAmJga+Aa/Uga/Aa+gmJAAAUgmIAAAga/ga+g");
	this.shape_59.setTransform(607.05,3275.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#161616").ss(1,1,1).p("EhcCAAAUAAAgmHAa9ga+UAa+ga9AmHAAAUAmIAAAAa9Aa9UAa+Aa+AAAAmHUAAAAmIga+Aa+Uga9Aa9gmIAAAUgmHAAAga+ga9Uga9ga+AAAgmIg");
	this.shape_60.setTransform(606.875,3275.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(202,202,202,0.435)").s().p("EhBFBBGUga9ga+AAAgmIUAAAgmHAa9ga+UAa+ga9AmHAAAUAmIAAAAa9Aa9UAa+Aa+AAAAmHUAAAAmIga+Aa+Uga9Aa9gmIAAAUgmHAAAga+ga9g");
	this.shape_61.setTransform(606.875,3275.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#161616").ss(1,1,1).p("Ehb/AAAUAAAgmGAa8ga9UAa9ga8AmGAAAUAmHAAAAa9Aa8UAa8Aa9AAAAmGUAAAAmHga8Aa9Uga9Aa8gmHAAAUgmGAAAga9ga8Uga8ga9AAAgmHg");
	this.shape_62.setTransform(606.675,3275.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(203,203,203,0.451)").s().p("EhBDBBEUga8ga9AAAgmHUAAAgmGAa8ga9UAa9ga8AmGAAAUAmHAAAAa9Aa8UAa8Aa9AAAAmGUAAAAmHga8Aa9Uga9Aa8gmHAAAUgmGAAAga9ga8g");
	this.shape_63.setTransform(606.675,3275.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#171717").ss(1,1,1).p("Ehb9AAAUAAAgmFAa8ga8UAa8ga8AmFAAAUAmGAAAAa8Aa8UAa8Aa8AAAAmFUAAAAmGga8Aa8Uga8Aa8gmGAAAUgmFAAAga8ga8Uga8ga8AAAgmGg");
	this.shape_64.setTransform(606.5,3275.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(205,205,205,0.463)").s().p("EhBBBBCUga8ga8AAAgmGUAAAgmFAa8ga8UAa8ga8AmFAAAUAmGAAAAa7Aa8UAa8Aa8AABAmFUgABAmGga8Aa8Uga7Aa8gmGAAAUgmFAAAga8ga8g");
	this.shape_65.setTransform(606.5,3275.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#181818").ss(1,1,1).p("Ehb6AAAUAAAgmDAa7ga8UAa7ga7AmEAAAUAmFAAAAa7Aa7UAa7Aa8AAAAmDUAAAAmFga7Aa7Uga7Aa7gmFAAAUgmEAAAga7ga7Uga7ga7AAAgmFg");
	this.shape_66.setTransform(606.325,3274.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(206,206,206,0.478)").s().p("EhA/BBAUga7ga7AAAgmFUAAAgmEAa7ga7UAa7ga7AmEAAAUAmFAAAAa7Aa7UAa7Aa7AAAAmEUAAAAmFga7Aa7Uga7Aa7gmFAAAUgmEAAAga7ga7g");
	this.shape_67.setTransform(606.325,3274.95);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#191919").ss(1,1,1).p("Ehb3AAAUAAAgmDAa6ga6UAa6ga6AmDAAAUAmDAAAAa6Aa6UAa7Aa6AAAAmDUAAAAmEga7Aa6Uga6Aa6gmDAAAUgmDAAAga6ga6Uga6ga6AAAgmEg");
	this.shape_68.setTransform(606.15,3274.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(207,207,207,0.494)").s().p("EhA9BA+Uga6ga6AAAgmEUAAAgmDAa6ga6UAa6ga6AmDAAAUAmDAAAAa7Aa6UAa6Aa6AAAAmDUAAAAmEga6Aa6Uga7Aa6gmDAAAUgmDAAAga6ga6g");
	this.shape_69.setTransform(606.15,3274.925);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#191919").ss(1,1,1).p("Ehb1AAAUAAAgmBAa6ga6UAa5ga6AmCAAAUAmCAAAAa6Aa6UAa6Aa6AAAAmBUAAAAmDga6Aa5Uga6Aa6gmCAAAUgmCAAAga5ga6Uga6ga5AAAgmDg");
	this.shape_70.setTransform(605.95,3274.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(209,209,209,0.506)").s().p("EhA7BA8Uga6ga6AABgmCUgABgmBAa6ga6UAa5ga6AmCAAAUAmDAAAAa5Aa6UAa5Aa6AAAAmBUAAAAmCga5Aa6Uga5Aa5gmDAAAUgmCAAAga5ga5g");
	this.shape_71.setTransform(605.95,3274.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#1A1A1A").ss(1,1,1).p("EhbyAAAUAAAgmBAa5ga4UAa5ga5AmAAAAUAmBAAAAa5Aa5UAa5Aa4AAAAmBUAAAAmBga5Aa5Uga5Aa5gmBAAAUgmAAAAga5ga5Uga5ga5AAAgmBg");
	this.shape_72.setTransform(605.775,3274.825);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(210,210,210,0.522)").s().p("EhA5BA6Uga5ga5AAAgmBUAAAgmBAa5ga4UAa5ga5AmAAAAUAmBAAAAa5Aa5UAa5Aa4AAAAmBUAAAAmBga5Aa5Uga5Aa5gmBAAAUgmAAAAga5ga5g");
	this.shape_73.setTransform(605.775,3274.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#1B1B1B").ss(1,1,1).p("EhbvAAAUAAAgmAAa4ga4UAa4ga3Al/AAAUAmAAAAAa4Aa3UAa4Aa4AAAAmAUAAAAmBga4Aa3Uga4Aa4gmAAAAUgl/AAAga4ga4Uga4ga3AAAgmBg");
	this.shape_74.setTransform(605.6,3274.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(211,211,211,0.537)").s().p("EhA3BA4Uga4ga4AAAgmAUAAAgmAAa4ga4UAa4ga3Al/AAAUAmAAAAAa4Aa3UAa4Aa4AAAAmAUAAAAmAga4Aa4Uga4Aa4gmAAAAUgl/AAAga4ga4g");
	this.shape_75.setTransform(605.6,3274.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#1C1C1C").ss(1,1,1).p("EhbsAAAUAAAgl+Aa3ga3UAa3ga3Al+AAAUAl/AAAAa3Aa3UAa3Aa3AAAAl+UAAAAl/ga3Aa3Uga3Aa4gl/AAAUgl+AAAga3ga4Uga3ga3AAAgl/g");
	this.shape_76.setTransform(605.425,3274.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(213,213,213,0.549)").s().p("EhA1BA2Uga3ga3AAAgl/UAAAgl+Aa3ga4UAa3ga2Al+AAAUAl/AAAAa3Aa2UAa3Aa4AAAAl+UAAAAl/ga3Aa3Uga3Aa3gl/AAAUgl+AAAga3ga3g");
	this.shape_77.setTransform(605.425,3274.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#1C1C1C").ss(1,1,1).p("EhbpAAAUAAAgl9Aa2ga2UAa2ga3Al9AAAUAl+AAAAa2Aa3UAa2Aa2AAAAl9UAAAAl+ga2Aa2Uga2Aa3gl+AAAUgl9AAAga2ga3Uga2ga2AAAgl+g");
	this.shape_78.setTransform(605.225,3274.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(214,214,214,0.565)").s().p("EhAzBA0Uga2ga2AAAgl+UAAAgl9Aa2ga3UAa2ga2Al9AAAUAl+AAAAa2Aa2UAa2Aa3AAAAl9UAAAAl+ga2Aa2Uga2Aa2gl+AAAUgl9AAAga2ga2g");
	this.shape_79.setTransform(605.225,3274.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#1D1D1D").ss(1,1,1).p("EhbnAAAUAAAgl8Aa1ga1UAa2ga2Al8AAAUAl8AAAAa2Aa2UAa2Aa1AAAAl8UAAAAl9ga2Aa1Uga2Aa2gl8AAAUgl8AAAga2ga2Uga1ga1AAAgl9g");
	this.shape_80.setTransform(605.05,3274.575);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(215,215,215,0.58)").s().p("EhAyBAyUga0ga1AAAgl9UAAAgl8Aa0ga1UAa3ga2Al7AAAUAl9AAAAa1Aa2UAa1Aa1AABAl8UgABAl9ga1Aa1Uga1Aa2gl9AAAUgl7AAAga3ga2g");
	this.shape_81.setTransform(605.05,3274.575);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#1E1E1E").ss(1,1,1).p("EhbkAAAUAAAgl7Aa1ga1UAa0ga0Al7AAAUAl8AAAAa0Aa0UAa1Aa1AAAAl7UAAAAl8ga1Aa0Uga0Aa1gl8AAAUgl7AAAga0ga1Uga1ga0AAAgl8g");
	this.shape_82.setTransform(604.85,3274.525);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(217,217,217,0.596)").s().p("EhAvBAwUga1ga0AAAgl8UAAAgl7Aa1ga1UAa1ga0Al6AAAUAl8AAAAa0Aa0UAa1Aa1AAAAl7UAAAAl8ga1Aa0Uga0Aa1gl8AAAUgl6AAAga1ga1g");
	this.shape_83.setTransform(604.85,3274.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#1E1E1E").ss(1,1,1).p("EhbhAAAUAAAgl6Aa0ga0UAa0gazAl5AAAUAl7AAAAazAazUAa0Aa0AAAAl6UAAAAl7ga0AazUgazAa0gl7AAAUgl5AAAga0ga0Uga0gazAAAgl7g");
	this.shape_84.setTransform(604.675,3274.475);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(218,218,218,0.608)").s().p("EhAtBAuUga0gazAAAgl7UAAAgl6Aa0ga0UAa0gazAl5AAAUAl7AAAAazAazUAa0Aa0AAAAl6UAAAAl7ga0AazUgazAa0gl7AAAUgl5AAAga0ga0g");
	this.shape_85.setTransform(604.675,3274.475);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#1F1F1F").ss(1,1,1).p("EhbfAAAUAAAgl5AazgazUAazgazAl5AAAUAl5AAAAa0AazUAazAazAAAAl5UAAAAl5gazAazUga0Aa0gl5AAAUgl5AAAgazga0UgazgazAAAgl5g");
	this.shape_86.setTransform(604.5,3274.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(220,220,220,0.624)").s().p("EhAsBAsUgazgazAABgl5UgABgl5AazgazUAa0gazAl4AAAUAl6AAAAayAazUAa0AazAAAAl5UAAAAl5ga0AazUgayAa0gl6AAAUgl4AAAga0ga0g");
	this.shape_87.setTransform(604.5,3274.425);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#202020").ss(1,1,1).p("EhbcAAAUAAAgl3AaygazUAazgayAl3AAAUAl4AAAAayAayUAazAazAAAAl3UAAAAl4gazAayUgayAazgl4AAAUgl3AAAgazgazUgaygayAAAgl4g");
	this.shape_88.setTransform(604.325,3274.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(221,221,221,0.639)").s().p("EhAqBAqUgaygayAAAgl4UAAAgl3AaygazUAazgayAl3AAAUAl4AAAAayAayUAazAazAAAAl3UAAAAl4gazAayUgayAazgl4AAAUgl3AAAgazgazg");
	this.shape_89.setTransform(604.325,3274.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#212121").ss(1,1,1).p("EhbZAAAUAAAgl2AaxgayUAaygaxAl2AAAUAl3AAAAaxAaxUAayAayAAAAl2UAAAAl3gayAaxUgaxAaygl3AAAUgl2AAAgaygayUgaxgaxAAAgl3g");
	this.shape_90.setTransform(604.15,3274.325);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(222,222,222,0.651)").s().p("EhAoBAoUgaxgaxAAAgl3UAAAgl2AaxgayUAaygaxAl2AAAUAl3AAAAayAaxUAaxAayAAAAl2UAAAAl3gaxAaxUgayAaygl3AAAUgl2AAAgaygayg");
	this.shape_91.setTransform(604.15,3274.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#212121").ss(1,1,1).p("EhbWAAAUAAAgl1AawgaxUAaxgaxAl1AAAUAl2AAAAawAaxUAaxAaxAAAAl1UAAAAl2gaxAawUgawAaygl2AAAUgl1AAAgaxgayUgawgawAAAgl2g");
	this.shape_92.setTransform(603.975,3274.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(224,224,224,0.667)").s().p("EhAmBAnUgawgaxAAAgl2UAAAgl1AawgaxUAaxgaxAl1AAAUAl2AAAAawAaxUAaxAaxAAAAl1UAAAAl2gaxAaxUgawAawgl2AABUgl1gABgaxgawg");
	this.shape_93.setTransform(603.975,3274.25);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#222222").ss(1,1,1).p("EhbTAAAUAAAgl0AavgawUAawgavAl0AAAUAl1AAAAavAavUAaxAawAAAAl0UAAAAl1gaxAawUgavAawgl1AAAUgl0AAAgawgawUgavgawAAAgl1g");
	this.shape_94.setTransform(603.8,3274.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(225,225,225,0.682)").s().p("EhAkBAkUgavgavAAAgl1UAAAgl0AavgawUAawgavAl0AAAUAl1AAAAavAavUAawAawAABAl0UgABAl1gawAavUgavAaxgl1gABUgl0AABgawgaxg");
	this.shape_95.setTransform(603.8,3274.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#232323").ss(1,1,1).p("EhbRAAAUAAAglzAavgavUAawgavAlyAAAUAl0AAAAavAavUAavAavAAAAlzUAAAAl0gavAavUgavAavgl0AAAUglyAAAgawgavUgavgavAAAgl0g");
	this.shape_96.setTransform(603.575,3274.15);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(226,226,226,0.694)").s().p("EhAiBAiUgavgauAAAgl0UAAAglzAavgavUAawgavAlyAAAUAl0AAAAavAavUAavAavAAAAlzUAAAAl0gavAauUgavAawgl0AAAUglyAAAgawgawg");
	this.shape_97.setTransform(603.575,3274.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#242424").ss(1,1,1).p("EhbOAAAUAAAglxAaugavUAavgauAlxAAAUAlzAAAAauAauUAauAavAAAAlxUAAAAlzgauAauUgauAauglzAAAUglxAAAgavgauUgaugauAAAglzg");
	this.shape_98.setTransform(603.4,3274.075);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(228,228,228,0.71)").s().p("EhAgBAhUgaugauAAAglzUAAAglxAaugavUAavgauAlxAAAUAlyAAAAavAauUAauAavAAAAlxUAAAAlzgauAauUgavAauglyAAAUglxAAAgavgaug");
	this.shape_99.setTransform(603.4,3274.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#242424").ss(1,1,1).p("EhbLAAAUAAAglxAatgauUAaugatAlwAAAUAlxAAAAauAatUAatAauAAAAlxUAAAAlygatAasUgauAauglxAAAUglwAAAgaugauUgatgasAAAglyg");
	this.shape_100.setTransform(603.225,3274.05);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(229,229,229,0.725)").s().p("EhAeBAeUgatgasAAAglyUAAAglxAatgatUAaugauAlwAAAUAlxAAAAauAauUAatAatAAAAlxUAAAAlygatAasUgauAauglxAAAUglwAAAgaugaug");
	this.shape_101.setTransform(603.225,3274.05);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#252525").ss(1,1,1).p("EhbJAAAUAAAglvAatgatUAatgatAlvAAAUAlwAAAAasAatUAauAatAAAAlvUAAAAlxgauAasUgasAatglwAAAUglvAAAgatgatUgatgasAAAglxg");
	this.shape_102.setTransform(603.05,3273.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(230,230,230,0.737)").s().p("EhAcBAdUgatgasAABglxUgABglvAatgatUAatgatAlvAAAUAlwAAAAasAatUAauAatgABAlvUAABAlxgauAasUgasAatglwAAAUglvAAAgatgatg");
	this.shape_103.setTransform(603.05,3273.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#262626").ss(1,1,1).p("EhbGAAAUAAAgluAasgasUAasgasAluAAAUAlvAAAAasAasUAasAasAAAAluUAAAAlvgasAasUgasAasglvAAAUgluAAAgasgasUgasgasAAAglvg");
	this.shape_104.setTransform(602.875,3273.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(232,232,232,0.753)").s().p("EhAaBAbUgasgasAAAglvUAAAglvAasgarUAasgasAluAAAUAlvAAAAasAasUAasAasAAAAluUAAAAlvgasAasUgasAasglvAAAUgluAAAgasgasg");
	this.shape_105.setTransform(602.875,3273.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#262626").ss(1,1,1).p("EhbDAAAUAAAgltAaqgarUAasgarAltAAAUAluAAAAarAarUAarAarAAAAltUAAAAlugarAarUgarAargluAAAUgltAAAgasgarUgaqgarAAAglug");
	this.shape_106.setTransform(602.7,3273.875);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(233,233,233,0.769)").s().p("EhAYBAZUgargarAAAgluUAAAgltAargarUAargarAltAAAUAluAAAAarAarUAarAarAAAAltUAAAAlugarAarUgarAargluAAAUgltAAAgargarg");
	this.shape_107.setTransform(602.7,3273.875);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#272727").ss(1,1,1).p("EhbBAAAUAAAglsAargarUAaqgaqAlsAAAUAltAAAAaqAaqUAarAarAAAAlsUAAAAltgarAaqUgaqAaqgltAAAUglsAAAgaqgaqUgargaqAAAgltg");
	this.shape_108.setTransform(602.5,3273.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(235,235,235,0.784)").s().p("EhAWBAXUgargaqAAAgltUAAAglsAargaqUAaqgarAlsAABUAltgABAaqAarUAaqAaqAAAAlsUAAAAltgaqAaqUgaqAargltgABUglsAABgaqgarg");
	this.shape_109.setTransform(602.5,3273.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#282828").ss(1,1,1).p("Eha+AAAUAAAglrAaqgaqUAapgapAlrAAAUAlsAAAAapAapUAaqAaqAAAAlrUAAAAlsgaqAapUgapAaqglsAAAUglrAAAgapgaqUgaqgapAAAglsg");
	this.shape_110.setTransform(602.325,3273.775);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(236,236,236,0.796)").s().p("EhAUBAVUgaqgapAAAglsUAAAglrAaqgaqUAapgapAlrAAAUAlsAAAAapAapUAaqAaqAAAAlrUAAAAlsgaqAapUgapAaqglsAAAUglrAAAgapgaqg");
	this.shape_111.setTransform(602.325,3273.775);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#292929").ss(1,1,1).p("Eha7AAAUAAAglpAaogapUAapgapAlqAAAUAlqAAAAapAapUAapAapAAAAlpUAAAAlrgapAapUgapAaoglqAAAUglqAAAgapgaoUgaogapAAAglrg");
	this.shape_112.setTransform(602.15,3273.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(237,237,237,0.812)").s().p("EhATBAUUgaogapAAAglrUAAAglpAaogaqUAaqgaoAlpAAAUAlqAAAAapAaoUAapAaqAAAAlpUAAAAlrgapAapUgapAaoglqAAAUglpAAAgaqgaog");
	this.shape_113.setTransform(602.15,3273.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(1,1,1).p("Eha4AAAUAAAglpAanganUAaogapAlpAAAUAlpAAAAaoAapUAaoAanAAAAlpUAAAAlpgaoAaoUgaoAapglpAAAUglpAAAgaogapUgangaoAAAglpg");
	this.shape_114.setTransform(601.95,3273.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(239,239,239,0.827)").s().p("EhAQBASUgaogapAAAglpUAAAglpAaoganUAangapAlpAABUAlpgABAaoAapUAaoAanAAAAlpUAAAAlpgaoAapUgaoAanglpAAAUglpAAAgangang");
	this.shape_115.setTransform(601.95,3273.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#2A2A2A").ss(1,1,1).p("Eha1AAAUAAAgloAamganUAaoganAlnAAAUAloAAAAanAanUAanAanAAAAloUAAAAloganAanUganAangloAAAUglnAAAgaoganUgamganAAAglog");
	this.shape_116.setTransform(601.775,3273.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(240,240,240,0.839)").s().p("EhAPBAPUgamgamAAAglpUAAAglnAamgaoUAaogamAlnAAAUAloAAAAanAamUAanAaoAAAAlnUAAAAlpganAamUganAaogloAAAUglnAAAgaogaog");
	this.shape_117.setTransform(601.775,3273.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#2B2B2B").ss(1,1,1).p("EhazAAAUAAAglnAamgamUAangamAlmAAAUAlnAAAAamAamUAanAamAAAAlnUAAAAloganAalUgamAanglnAAAUglmAAAganganUgamgalAAAglog");
	this.shape_118.setTransform(601.6,3273.55);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(241,241,241,0.855)").s().p("EhAMBAOUganganAABglnUgABglnAangamUAamgamAlmAAAUAlnAAAAamAamUAamAamAABAlnUgABAlngamAanUgamAamglnAAAUglmAAAgamgamg");
	this.shape_119.setTransform(601.6,3273.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#2B2B2B").ss(1,1,1).p("EhawAAAUAAAglmAalgalUAamgalAlmAAAUAllAAAAamAalUAalAalAAAAlmUAAAAlmgalAamUgamAalgllAAAUglmAAAgamgalUgalgamAAAglmg");
	this.shape_120.setTransform(601.4,3273.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(243,243,243,0.871)").s().p("EhALBAMUgalgamAAAglmUAAAglmAalgalUAamgalAlmAAAUAllAAAAamAalUAalAalAAAAlmUAAAAlmgalAamUgamAalgllAAAUglmAAAgamgalg");
	this.shape_121.setTransform(601.4,3273.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#2C2C2C").ss(1,1,1).p("EhatAAAUAAAglkAakgalUAalgakAlkAAAUAllAAAAakAakUAalAalAAAAlkUAAAAllgalAalUgakAalgllAAAUglkAAAgalgalUgakgalAAAgllg");
	this.shape_122.setTransform(601.225,3273.45);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(244,244,244,0.882)").s().p("EhAJBAJUgakgakAAAgllUAAAglkAakgalUAalgakAlkAAAUAllAAAAakAakUAalAalAAAAlkUAAAAllgalAakUgakAamgllAAAUglkAAAgalgamg");
	this.shape_123.setTransform(601.225,3273.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#2D2D2D").ss(1,1,1).p("EharAAAUAAAgljAakgakUAakgakAljAAAUAljAAAAakAakUAalAakAAAAljUAAAAlkgalAakUgakAakgljAAAUgljAAAgakgakUgakgakAAAglkg");
	this.shape_124.setTransform(601.05,3273.375);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(245,245,245,0.898)").s().p("EhAHBAIUgakgakAABglkUgABgljAakgakUAalgakAliAAAUAljAAAAalAakUAakAakgABAljUAABAlkgakAakUgalAakgljAAAUgliAAAgalgakg");
	this.shape_125.setTransform(601.05,3273.375);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#2E2E2E").ss(1,1,1).p("EhaoAAAUAAAgliAajgajUAajgajAliAAAUAliAAAAajAajUAakAajAAAAliUAAAAljgakAajUgajAajgliAAAUgliAAAgajgajUgajgajAAAgljg");
	this.shape_126.setTransform(600.875,3273.325);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(247,247,247,0.914)").s().p("EhAFBAGUgajgajAAAgljUAAAgliAajgajUAajgajAliAAAUAliAAAAajAajUAakAajAAAAliUAAAAljgakAajUgajAajgliAAAUgliAAAgajgajg");
	this.shape_127.setTransform(600.875,3273.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#2E2E2E").ss(1,1,1).p("EhalAAAUAAAglhAaigaiUAaigaiAlhAAAUAliAAAAahAaiUAajAaiAAAAlhUAAAAligajAaiUgahAaigliAAAUglhAAAgaigaiUgaigaiAAAglig");
	this.shape_128.setTransform(600.7,3273.275);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(248,248,248,0.929)").s().p("EhADBAEUgaigaiAAAgliUAAAglhAaigaiUAaigaiAlhAAAUAlhAAAAaiAaiUAajAaiAAAAlhUAAAAligajAaiUgaiAaiglhAAAUglhAAAgaigaig");
	this.shape_129.setTransform(600.7,3273.275);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#2F2F2F").ss(1,1,1).p("EhaiAAAUAAAglfAahgaiUAahgahAlgAAAUAlgAAAAaiAahUAahAaiAAAAlfUAAAAlhgahAahUgaiAaiglgAAAUglgAAAgahgaiUgahgahAAAglhg");
	this.shape_130.setTransform(600.5,3273.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(250,250,250,0.941)").s().p("EhABBACUgahgahAAAglhUAAAglfAahgaiUAahgaiAlgAAAUAlgAAAAaiAaiUAahAaiAAAAlfUAAAAlhgahAahUgaiAaiglgAAAUglgAAAgahgaig");
	this.shape_131.setTransform(600.5,3273.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#303030").ss(1,1,1).p("EhagAAAUAAAglfAahgagUAahgahAlfAAAUAlfAAAAagAahUAahAagAAAAlfUAAAAlfgahAahUgagAahglfAAAUglfAAAgahgahUgahgahAAAglfg");
	this.shape_132.setTransform(600.3,3273.175);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(251,251,251,0.957)").s().p("Eg//BAAUgaggahgABglfUAABglfAaggagUAahgahAlfAAAUAlfAAAAagAahUAagAagAAAAlfUAAAAlfgagAahUgagAahglfAAAUglfAAAgahgahg");
	this.shape_133.setTransform(600.3,3273.175);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#313131").ss(1,1,1).p("EhadAAAUAAAgldAaggagUAaggagAldAAAUAleAAAAagAagUAagAagAAAAldUAAAAlegagAagUgagAaggleAAAUgldAAAgaggagUgaggagAAAgleg");
	this.shape_134.setTransform(600.125,3273.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(252,252,252,0.973)").s().p("Eg/9A/+UgaggagAAAgleUAAAgldAaggahUAaggafAldAAAUAleAAAAagAafUAagAahAAAAldUAAAAlegagAagUgagAaggleAAAUgldAAAgaggagg");
	this.shape_135.setTransform(600.125,3273.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#313131").ss(1,1,1).p("EhaaAAAUAAAglcAafgagUAafgaeAlcAAAUAldAAAAafAaeUAafAagAAAAlcUAAAAldgafAafUgafAafgldAAAUglcAAAgafgafUgafgafAAAgldg");
	this.shape_136.setTransform(599.95,3273.075);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(254,254,254,0.984)").s().p("Eg/7A/8UgafgafAAAgldUAAAglcAafgagUAafgaeAlcAAAUAldAAAAafAaeUAafAagAAAAlcUAAAAldgafAafUgafAafgldAAAUglcAAAgafgafg");
	this.shape_137.setTransform(599.95,3273.075);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#323232").ss(1,1,1).p("EBaYAAAUAAAAlcgaeAaeUgaeAaeglcAAAUglbAAAgaegaeUgaegaeAAAglcUAAAglbAaegafUAaegadAlbAAAUAlcAAAAaeAadUAaeAafAAAAlbg");
	this.shape_138.setTransform(599.775,3273);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("Eg/5A/6UgaegaeAAAglcUAAAglbAaegafUAaegadAlbAAAUAlcAAAAaeAadUAaeAafAAAAlbUAAAAlcgaeAaeUgaeAaeglcAAAUglbAAAgaegaeg");
	this.shape_139.setTransform(599.775,3273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},694).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_big_dad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// big_dad
	this.instance = new lib.black_dragon_eye_by_kaysa_art_dbv7bckfullview();
	this.instance.setTransform(99,1791,0.9999,0.9999);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(505).to({_off:false},0).to({_off:true},112).wait(38).to({_off:false,x:100,y:2963},0).wait(1345));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Back
	this.instance = new lib.spookyspace();
	this.instance.setTransform(-12,0);

	this.instance_1 = new lib.spookyspace();
	this.instance_1.setTransform(-18,0);

	this.instance_2 = new lib.spookyspace();
	this.instance_2.setTransform(-12,124);

	this.instance_3 = new lib.spookyspace();
	this.instance_3.setTransform(-2,189);

	this.instance_4 = new lib.spookyspace();
	this.instance_4.setTransform(19,249);

	this.instance_5 = new lib.spookyspace();
	this.instance_5.setTransform(39,315,0.9998,0.9998);

	this.instance_6 = new lib.spookyspace();
	this.instance_6.setTransform(39,378,0.9996,0.9996);

	this.instance_7 = new lib.spookyspace();
	this.instance_7.setTransform(29,444,0.9998,0.9998);

	this.instance_8 = new lib.spookyspace();
	this.instance_8.setTransform(29,507,0.9996,0.9996);

	this.instance_9 = new lib.spookyspace();
	this.instance_9.setTransform(29,573,0.9998,0.9998);

	this.instance_10 = new lib.spookyspace();
	this.instance_10.setTransform(29,636,0.9996,0.9996);

	this.instance_11 = new lib.spookyspace();
	this.instance_11.setTransform(19,702,0.9998,0.9998);

	this.instance_12 = new lib.spookyspace();
	this.instance_12.setTransform(19,765,0.9997,0.9997);

	this.instance_13 = new lib.spookyspace();
	this.instance_13.setTransform(19,830,0.9998,0.9998);

	this.instance_14 = new lib.spookyspace();
	this.instance_14.setTransform(19,893,0.9996,0.9996);

	this.instance_15 = new lib.spookyspace();
	this.instance_15.setTransform(9,959,0.9999,0.9999);

	this.instance_16 = new lib.spookyspace();
	this.instance_16.setTransform(9,1022,0.9997,0.9997);

	this.instance_17 = new lib.spookyspace();
	this.instance_17.setTransform(9,1088,0.9999,0.9999);

	this.instance_18 = new lib.spookyspace();
	this.instance_18.setTransform(9,1151,0.9997,0.9997);

	this.instance_19 = new lib.spookyspace();
	this.instance_19.setTransform(-1,1217,0.9999,0.9999);

	this.instance_20 = new lib.spookyspace();
	this.instance_20.setTransform(-1,1280,0.9997,0.9997);

	this.instance_21 = new lib.spookyspace();
	this.instance_21.setTransform(8,1346,0.9999,0.9999);

	this.instance_22 = new lib.spookyspace();
	this.instance_22.setTransform(8,1409,0.9997,0.9997);

	this.instance_23 = new lib.spookyspace();
	this.instance_23.setTransform(-2,1475,0.9999,0.9999);

	this.instance_24 = new lib.spookyspace();
	this.instance_24.setTransform(-2,1538,0.9997,0.9997);

	this.instance_25 = new lib.spookyspace();
	this.instance_25.setTransform(-2,1604,0.9999,0.9999);

	this.instance_26 = new lib.spookyspace();
	this.instance_26.setTransform(-2,1667,0.9997,0.9997);

	this.instance_27 = new lib.spookyspace();
	this.instance_27.setTransform(-12,1733,0.9999,0.9999);

	this.instance_28 = new lib.spookyspace();
	this.instance_28.setTransform(-12,1796,0.9997,0.9997);

	this.instance_29 = new lib.spookyspace();
	this.instance_29.setTransform(-35.7,2357.9,0.9994,0.9994);

	this.instance_30 = new lib.spookyspace();
	this.instance_30.setTransform(-35.7,2423.9,0.9997,0.9997);

	this.instance_31 = new lib.spookyspace();
	this.instance_31.setTransform(-35.7,2486.6,0.9994,0.9994);

	this.instance_32 = new lib.spookyspace();
	this.instance_32.setTransform(-44.95,2552.6,0.9997,0.9997);

	this.instance_33 = new lib.spookyspace();
	this.instance_33.setTransform(-44.95,2615.6,0.9994,0.9994);

	this.instance_34 = new lib.spookyspace();
	this.instance_34.setTransform(-36.7,2681.6,0.9997,0.9997);

	this.instance_35 = new lib.spookyspace();
	this.instance_35.setTransform(-36.7,2744.9,0.9994,0.9994);

	this.instance_36 = new lib.spookyspace();
	this.instance_36.setTransform(-45.95,2810.9,0.9998,0.9998);

	this.instance_37 = new lib.spookyspace();
	this.instance_37.setTransform(-45.95,2873.9,0.9995,0.9995);

	this.instance_38 = new lib.spookyspace();
	this.instance_38.setTransform(-45.95,2939.9,0.9998,0.9998);

	this.instance_39 = new lib.spookyspace();
	this.instance_39.setTransform(-45.95,3002.55,0.9995,0.9995);

	this.instance_40 = new lib.spookyspace();
	this.instance_40.setTransform(-55.95,3068.55,0.9998,0.9998);

	this.instance_41 = new lib.spookyspace();
	this.instance_41.setTransform(-55.95,3131.5,0.9995,0.9995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-18,y:0,scaleX:1,scaleY:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-12,y:0}}]}).to({state:[{t:this.instance_28,p:{x:-12,y:1796}},{t:this.instance_27,p:{scaleX:0.9999,scaleY:0.9999,x:-12,y:1733}},{t:this.instance_26,p:{x:-2,y:1667}},{t:this.instance_25,p:{scaleX:0.9999,scaleY:0.9999,x:-2,y:1604}},{t:this.instance_24,p:{x:-2,y:1538}},{t:this.instance_23,p:{scaleX:0.9999,scaleY:0.9999,x:-2,y:1475}},{t:this.instance_22,p:{x:8,y:1409}},{t:this.instance_21,p:{scaleX:0.9999,scaleY:0.9999,x:8,y:1346}},{t:this.instance_20,p:{x:-1,y:1280}},{t:this.instance_19,p:{x:-1,y:1217}},{t:this.instance_18,p:{x:9,y:1151}},{t:this.instance_17,p:{x:9,y:1088}},{t:this.instance_16,p:{x:9,y:1022}},{t:this.instance_15,p:{x:9,y:959}},{t:this.instance_14,p:{scaleX:0.9996,scaleY:0.9996,x:19,y:893}},{t:this.instance_13,p:{scaleX:0.9998,scaleY:0.9998,x:19,y:830}},{t:this.instance_12,p:{x:19,y:765}},{t:this.instance_11,p:{scaleX:0.9998,scaleY:0.9998,x:19,y:702}},{t:this.instance_10,p:{scaleX:0.9996,scaleY:0.9996,x:29,y:636}},{t:this.instance_9,p:{scaleX:0.9998,scaleY:0.9998,x:29,y:573}},{t:this.instance_8,p:{scaleX:0.9996,scaleY:0.9996,x:29,y:507}},{t:this.instance_7,p:{scaleX:0.9998,scaleY:0.9998,x:29,y:444}},{t:this.instance_6,p:{x:39,y:378}},{t:this.instance_5,p:{x:39,y:315}},{t:this.instance_4,p:{scaleX:1,scaleY:1,y:249}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:-2,y:189}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:-12,y:124}},{t:this.instance_1,p:{x:19,y:59,scaleX:1,scaleY:1}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-12,y:0}}]},426).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28,p:{x:-35.7,y:2294.9}},{t:this.instance_27,p:{scaleX:0.9994,scaleY:0.9994,x:-25.7,y:2228.9}},{t:this.instance_26,p:{x:-25.7,y:2165.6}},{t:this.instance_25,p:{scaleX:0.9994,scaleY:0.9994,x:-25.7,y:2100.6}},{t:this.instance_24,p:{x:-25.7,y:2037.6}},{t:this.instance_23,p:{scaleX:0.9994,scaleY:0.9994,x:-15.7,y:1971.65}},{t:this.instance_22,p:{x:-15.7,y:1908.65}},{t:this.instance_21,p:{scaleX:0.9994,scaleY:0.9994,x:-15.7,y:1842.95}},{t:this.instance_20,p:{x:-12,y:1796}},{t:this.instance_19,p:{x:-12,y:1733}},{t:this.instance_18,p:{x:-2,y:1667}},{t:this.instance_17,p:{x:-2,y:1604}},{t:this.instance_16,p:{x:-2,y:1538}},{t:this.instance_15,p:{x:-2,y:1475}},{t:this.instance_14,p:{scaleX:0.9997,scaleY:0.9997,x:8,y:1409}},{t:this.instance_13,p:{scaleX:0.9999,scaleY:0.9999,x:8,y:1346}},{t:this.instance_12,p:{x:-1,y:1280}},{t:this.instance_11,p:{scaleX:0.9999,scaleY:0.9999,x:-1,y:1217}},{t:this.instance_10,p:{scaleX:0.9997,scaleY:0.9997,x:9,y:1151}},{t:this.instance_9,p:{scaleX:0.9999,scaleY:0.9999,x:9,y:1088}},{t:this.instance_8,p:{scaleX:0.9997,scaleY:0.9997,x:9,y:1022}},{t:this.instance_7,p:{scaleX:0.9999,scaleY:0.9999,x:9,y:959}},{t:this.instance_6,p:{x:19,y:893}},{t:this.instance_5,p:{x:19,y:830}},{t:this.instance_4,p:{scaleX:0.9997,scaleY:0.9997,y:765}},{t:this.instance_3,p:{scaleX:0.9998,scaleY:0.9998,x:19,y:702}},{t:this.instance_2,p:{scaleX:0.9996,scaleY:0.9996,x:29,y:636}},{t:this.instance_1,p:{x:29,y:573,scaleX:0.9998,scaleY:0.9998}},{t:this.instance,p:{scaleX:0.9996,scaleY:0.9996,x:29,y:507}}]},19).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28,p:{x:-35.7,y:2294.9}},{t:this.instance_27,p:{scaleX:0.9994,scaleY:0.9994,x:-25.7,y:2228.9}},{t:this.instance_26,p:{x:-25.7,y:2165.6}},{t:this.instance_25,p:{scaleX:0.9994,scaleY:0.9994,x:-25.7,y:2100.6}},{t:this.instance_24,p:{x:-25.7,y:2037.6}},{t:this.instance_23,p:{scaleX:0.9994,scaleY:0.9994,x:-15.7,y:1971.65}},{t:this.instance_22,p:{x:-15.7,y:1908.65}},{t:this.instance_21,p:{scaleX:0.9994,scaleY:0.9994,x:-15.7,y:1842.95}},{t:this.instance_20,p:{x:-12,y:1796}},{t:this.instance_19,p:{x:-12,y:1733}},{t:this.instance_18,p:{x:-2,y:1667}},{t:this.instance_17,p:{x:-2,y:1604}},{t:this.instance_16,p:{x:-2,y:1538}},{t:this.instance_15,p:{x:-2,y:1475}},{t:this.instance_14,p:{scaleX:0.9997,scaleY:0.9997,x:8,y:1409}},{t:this.instance_13,p:{scaleX:0.9999,scaleY:0.9999,x:8,y:1346}},{t:this.instance_12,p:{x:-1,y:1280}},{t:this.instance_11,p:{scaleX:0.9999,scaleY:0.9999,x:-1,y:1217}},{t:this.instance_10,p:{scaleX:0.9997,scaleY:0.9997,x:9,y:1151}},{t:this.instance_9,p:{scaleX:0.9999,scaleY:0.9999,x:9,y:1088}},{t:this.instance_8,p:{scaleX:0.9997,scaleY:0.9997,x:9,y:1022}},{t:this.instance_7,p:{scaleX:0.9999,scaleY:0.9999,x:9,y:959}},{t:this.instance_6,p:{x:19,y:893}},{t:this.instance_5,p:{x:19,y:830}},{t:this.instance_4,p:{scaleX:0.9997,scaleY:0.9997,y:765}},{t:this.instance_3,p:{scaleX:0.9998,scaleY:0.9998,x:19,y:702}},{t:this.instance_2,p:{scaleX:0.9996,scaleY:0.9996,x:29,y:636}},{t:this.instance_1,p:{x:29,y:573,scaleX:0.9998,scaleY:0.9998}},{t:this.instance,p:{scaleX:0.9996,scaleY:0.9996,x:29,y:507}}]},140).wait(1415));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.peridotss_gif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.peridotss_0();

	this.instance_1 = new lib.peridotss_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361,601);


(lib.peridotASDASDHSDKJFHSK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.peridotsss();
	this.instance.setTransform(-183,-257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.peridotASDASDHSDKJFHSK, new cjs.Rectangle(-183,-257,361,601), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Peridotreal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Peridotreal
	this.instance = new lib.peridotss_gif();
	this.instance.setTransform(940.05,815.8,0.6285,0.6285,0,0,0,180.8,300.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(834).to({_off:false},0).wait(1166));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Peridotk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Peridotk
	this.instance = new lib.Knife3();
	this.instance.setTransform(102.15,678.2,0.4753,0.4753,-101.3391);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(514.9,880.6,1,1,0,0,0,460.6,302.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},426).to({state:[{t:this.instance_1}]},159).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(585).to({_off:false},0).wait(1).to({regX:302.1,rotation:14.3941,x:333.85,y:837.15},0).wait(1).to({rotation:28.7883,x:320.95,y:796.2},0).wait(1).to({rotation:43.1824,x:316.85,y:760.1},0).wait(1).to({rotation:57.5766,x:319.95,y:730.7},0).wait(1).to({rotation:71.9707,x:328.4,y:709.75},0).wait(1).to({rotation:86.3649,x:339.9,y:698.3},0).wait(1).to({rotation:100.759,x:352.05,y:696.7},0).wait(1).to({y:694.85},0).wait(1).to({y:693},0).wait(1).to({y:691.15},0).wait(1).to({y:689.35},0).wait(1).to({y:687.5},0).wait(1).to({y:685.65},0).wait(1).to({y:683.8},0).wait(1).to({y:681.95},0).wait(1).to({y:680.1},0).wait(1).to({y:678.25},0).wait(1).to({y:676.4},0).wait(1).to({y:674.55},0).wait(1).to({y:672.7},0).wait(1).to({y:670.85},0).wait(1).to({y:669},0).wait(1).to({y:667.15},0).wait(1).to({y:665.3},0).wait(1).to({y:663.45},0).wait(1).to({y:661.6},0).wait(1).to({y:659.75},0).wait(1).to({y:657.9},0).wait(1).to({y:1101.3},0).wait(1).to({x:325.25,y:1864.25},0).wait(1).to({x:298.45,y:2627.2},0).wait(1).to({x:271.65,y:3390.1},0).wait(25).to({regX:459.9,regY:301.8,x:378.15,y:1524.5},0).wait(1).to({regX:302.1,regY:302.1,x:407.3,y:1555.25},0).wait(1).to({y:1741.1},0).wait(1).to({y:1926.95},0).wait(1).to({y:2112.8},0).wait(1).to({y:2298.65},0).wait(1).to({y:2484.45},0).wait(1).to({y:2670.3},0).wait(1).to({y:2856.15},0).wait(1).to({y:3042},0).wait(1).to({y:3227.85},0).wait(1).to({y:3413.7},0).wait(1).to({y:3599.5},0).wait(1).to({regX:459.9,regY:301.8,x:378.15,y:1524.5},0).wait(1).to({regX:302.1,regY:302.1,x:404,y:1536.8},0).wait(1).to({x:400.75,y:1704.15},0).wait(1).to({x:397.5,y:1871.5},0).wait(1).to({x:394.2,y:2038.85},0).wait(1).to({x:390.95,y:2206.25},0).wait(1).to({x:387.65,y:2373.6},0).wait(1).to({x:384.4,y:2540.95},0).wait(1).to({x:381.15,y:2708.35},0).wait(1).to({x:377.85,y:2875.7},0).wait(1).to({x:374.6,y:3043.05},0).wait(1).to({x:371.35,y:3210.4},0).wait(1).to({rotation:70.7601,x:329.1,y:3225.25},0).wait(1).to({rotation:40.7613,x:300.75,y:3280},0).wait(1).to({rotation:10.7624,x:304.6,y:3362.25},0).wait(1).to({rotation:-19.2364,x:350.05,y:3452.35},0).wait(1).to({rotation:-49.2353,x:435.2,y:3528.4},0).wait(1).to({regX:414.8,regY:287.2,rotation:-79.242,x:557.5,y:3396.5},0).wait(1).to({regX:415.8,regY:285.1,rotation:-116.6448,x:623.75,y:3407.2},0).wait(1).to({regX:302.1,regY:302.1,rotation:-142.944,x:782.4,y:3445.75},0).wait(1).to({rotation:-169.243,x:918.2,y:3313.7},0).wait(1).to({rotation:-207.55,x:836,y:3184.25},0).wait(1).to({rotation:-233.3965,x:727,y:3081},0).wait(1).to({rotation:-259.243,x:607.15,y:3008.45},0).wait(1).to({rotation:-306.8743,x:409.3,y:3111.7},0).wait(1).to({rotation:-328.0585,x:358.65,y:3163.5},0).wait(1).to({rotation:-349.2427,x:302.7,y:3257.95},0).wait(1).to({regX:414.8,regY:287.2,rotation:-439.242,x:557.5,y:3396.55},0).wait(1).to({regX:302.1,regY:302.1,rotation:-476.645,x:687.6,y:3501.25},0).wait(1).to({rotation:-502.944,x:780.35,y:3446.85},0).wait(1).to({rotation:-529.243,x:916.85,y:3315.55},0).wait(1).to({rotation:-567.55,x:836.1,y:3186.5},0).wait(1).to({rotation:-593.3965,x:728.05,y:3083},0).wait(1).to({rotation:-619.243,x:609,y:3009.8},0).wait(1).to({rotation:-666.8743,x:411.5,y:3111.2},0).wait(1).to({rotation:-688.0585,x:360.5,y:3162.25},0).wait(1).to({rotation:-709.2427,x:304,y:3256.15},0).wait(1).to({rotation:-737.0218,x:327.55,y:3388.9},0).wait(1).to({rotation:-764.8009,x:435.35,y:3492.15},0).wait(1).to({regX:414.9,regY:287.2,rotation:-799.242,x:557.5,y:3396.5},0).wait(1).to({regX:302.1,regY:302.1,rotation:-836.645,x:687.6,y:3501.3},0).wait(1).to({rotation:-862.944,x:780.4,y:3446.85},0).wait(1).to({rotation:-889.243,x:916.95,y:3315.55},0).wait(1).to({rotation:-927.55,x:836.15,y:3186.5},0).wait(1).to({rotation:-953.3965,x:728.1,y:3083},0).wait(1).to({rotation:-979.243,x:609,y:3009.75},0).wait(1).to({rotation:-1026.8743,x:411.45,y:3111.2},0).wait(1).to({rotation:-1048.0585,x:360.5,y:3162.25},0).wait(1).to({rotation:-1069.2427,x:303.95,y:3256.15},0).wait(1).to({rotation:-1097.0218,x:327.5,y:3388.9},0).wait(1).to({rotation:-1124.8009,x:435.35,y:3492.2},0).wait(1).to({regX:414.8,regY:287.2,rotation:-1159.242,x:557.5,y:3396.55},0).wait(1).to({regX:302.1,regY:302.1,rotation:-1196.645,x:687.6,y:3501.25},0).wait(1).to({rotation:-1222.944,x:780.35,y:3446.85},0).wait(1).to({rotation:-1249.243,x:916.85,y:3315.55},0).wait(1).to({rotation:-1287.55,x:836.1,y:3186.5},0).wait(1).to({rotation:-1313.3965,x:728.05,y:3083},0).wait(1).to({rotation:-1339.243,x:609,y:3009.8},0).wait(1).to({rotation:-1386.8743,x:411.5,y:3111.2},0).wait(1).to({rotation:-1408.0585,x:360.5,y:3162.25},0).wait(1).to({rotation:-1429.2427,x:304,y:3256.15},0).wait(1).to({rotation:-1457.0218,x:327.55,y:3388.9},0).wait(1).to({rotation:-1484.8009,x:435.35,y:3492.15},0).wait(1).to({regX:414.8,regY:287.2,rotation:-1519.242,x:557.5,y:3396.55},0).wait(1).to({regX:302.1,regY:302.1,rotation:-1556.645,x:687.6,y:3501.25},0).wait(1).to({rotation:-1582.944,x:780.35,y:3446.85},0).wait(1).to({rotation:-1609.243,x:916.85,y:3315.55},0).wait(1).to({rotation:-1647.55,x:836.1,y:3186.5},0).wait(1).to({rotation:-1673.3965,x:728.05,y:3083},0).wait(1).to({rotation:-1699.243,x:609,y:3009.8},0).wait(1).to({rotation:-1746.8743,x:411.5,y:3111.2},0).wait(1).to({rotation:-1768.0585,x:360.5,y:3162.25},0).wait(1).to({rotation:-1789.2427,x:304,y:3256.15},0).wait(1).to({rotation:-1817.0218,x:327.55,y:3388.9},0).wait(1).to({rotation:-1844.8009,x:435.35,y:3492.15},0).wait(1).to({regX:414.8,regY:287.2,rotation:-1879.242,x:557.5,y:3396.55},0).wait(1).to({regX:302.1,regY:302.1,rotation:-1916.645,x:687.6,y:3501.25},0).wait(1).to({rotation:-1942.944,x:780.35,y:3446.85},0).wait(1).to({rotation:-1969.243,x:916.85,y:3315.55},0).wait(1).to({rotation:-2007.55,x:836.1,y:3186.5},0).wait(1).to({rotation:-2033.3965,x:728.05,y:3083},0).wait(1).to({rotation:-2059.243,x:609,y:3009.8},0).wait(1).to({rotation:-2106.8743,x:411.5,y:3111.2},0).wait(1).to({rotation:-2128.0585,x:360.5,y:3162.25},0).wait(1).to({rotation:-2149.2427,x:304,y:3256.15},0).wait(1).to({rotation:-2177.0218,x:327.55,y:3388.9},0).wait(1).to({rotation:-2204.8009,x:435.35,y:3492.15},0).wait(1).to({regX:414.8,regY:287.2,rotation:-2239.242,x:557.5,y:3396.55},0).wait(1).to({regX:302.1,regY:302.1,rotation:-2276.645,x:687.6,y:3501.25},0).wait(1).to({rotation:-2302.944,x:780.35,y:3446.85},0).wait(1).to({rotation:-2329.243,x:916.85,y:3315.55},0).wait(1).to({rotation:-2367.55,x:836.1,y:3186.5},0).wait(1).to({rotation:-2393.3965,x:728.05,y:3083},0).wait(1).to({rotation:-2419.243,x:609,y:3009.8},0).wait(1).to({rotation:-2466.8743,x:411.5,y:3111.2},0).wait(1).to({rotation:-2488.0585,x:360.5,y:3162.25},0).wait(1).to({rotation:-2509.2427,x:304,y:3256.15},0).wait(1).to({rotation:-2537.0218,x:327.55,y:3388.9},0).wait(1).to({rotation:-2564.8009,x:435.35,y:3492.15},0).wait(1).to({regX:414.8,regY:287.1,rotation:-2599.242,x:557.4,y:3396.55},0).wait(1).to({regX:302.1,regY:302.1,rotation:-2636.645,x:687.6,y:3501.25},0).wait(1).to({rotation:-2662.944,x:780.35,y:3446.8},0).wait(1).to({rotation:-2689.243,x:916.85,y:3315.5},0).wait(1).to({rotation:-2727.55,x:836.05,y:3186.45},0).wait(1).to({rotation:-2753.3965,x:728,y:3083},0).wait(1).to({rotation:-2779.243,x:608.9,y:3009.8},0).wait(1).to({rotation:-2826.8743,x:411.4,y:3111.25},0).wait(1).to({rotation:-2848.0585,x:360.45,y:3162.3},0).wait(1).to({rotation:-2869.2427,x:303.95,y:3256.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Peridot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Peridot
	this.instance = new lib.peridotASDASDHSDKJFHSK();
	this.instance.setTransform(940.65,842.2,0.7166,0.0885,0,0,0,-1.4,42.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(764).to({_off:false},0).wait(1).to({regX:-2.5,regY:43.5,scaleX:0.7181,scaleY:0.0931,x:939.85,y:842.3},0).wait(1).to({scaleX:0.7195,scaleY:0.0977},0).wait(1).to({scaleX:0.7209,scaleY:0.1024},0).wait(1).to({scaleX:0.7224,scaleY:0.107},0).wait(1).to({scaleX:0.7238,scaleY:0.1116},0).wait(1).to({scaleX:0.7252,scaleY:0.1162},0).wait(1).to({scaleX:0.7267,scaleY:0.1209},0).wait(1).to({scaleX:0.7281,scaleY:0.1255},0).wait(1).to({scaleX:0.7295,scaleY:0.1301},0).wait(1).to({scaleX:0.731,scaleY:0.1348,x:939.8},0).wait(1).to({scaleX:0.7324,scaleY:0.1394},0).wait(1).to({scaleX:0.7339,scaleY:0.144},0).wait(1).to({scaleX:0.7353,scaleY:0.1486},0).wait(1).to({scaleX:0.7367,scaleY:0.1533,y:842.35},0).wait(1).to({scaleX:0.7382,scaleY:0.1579},0).wait(1).to({scaleX:0.7396,scaleY:0.1625},0).wait(1).to({scaleX:0.741,scaleY:0.1672},0).wait(1).to({scaleX:0.7425,scaleY:0.1718},0).wait(1).to({scaleX:0.7439,scaleY:0.1764},0).wait(1).to({scaleX:0.7453,scaleY:0.181,y:842.4},0).wait(1).to({scaleX:0.7468,scaleY:0.1857},0).wait(1).to({scaleX:0.7482,scaleY:0.1903},0).wait(1).to({scaleX:0.7496,scaleY:0.1949},0).wait(1).to({scaleX:0.7511,scaleY:0.1996,x:939.75},0).wait(1).to({scaleX:0.7525,scaleY:0.2042},0).wait(1).to({scaleX:0.7539,scaleY:0.2088,x:939.8},0).wait(1).to({scaleX:0.7554,scaleY:0.2135,y:842.45},0).wait(1).to({scaleX:0.7568,scaleY:0.2181},0).wait(1).to({scaleX:0.7583,scaleY:0.2227},0).wait(1).to({scaleX:0.7597,scaleY:0.2273},0).wait(1).to({scaleX:0.7611,scaleY:0.232},0).wait(1).to({scaleX:0.7626,scaleY:0.2366},0).wait(1).to({scaleX:0.764,scaleY:0.2412},0).wait(1).to({scaleX:0.7654,scaleY:0.2459},0).wait(1).to({scaleX:0.7669,scaleY:0.2505},0).wait(1).to({scaleX:0.7683,scaleY:0.2551},0).wait(1).to({scaleX:0.7697,scaleY:0.2597},0).wait(1).to({scaleX:0.7712,scaleY:0.2644,x:939.75},0).wait(1).to({scaleX:0.7726,scaleY:0.269},0).wait(1).to({scaleX:0.774,scaleY:0.2736},0).wait(1).to({scaleX:0.7755,scaleY:0.2783,y:842.5},0).wait(1).to({scaleX:0.7769,scaleY:0.2829},0).wait(1).to({scaleX:0.7783,scaleY:0.2875},0).wait(1).to({scaleX:0.7798,scaleY:0.2921},0).wait(1).to({scaleX:0.7812,scaleY:0.2968},0).wait(1).to({scaleX:0.7826,scaleY:0.3014},0).wait(1).to({scaleX:0.7841,scaleY:0.306},0).wait(1).to({scaleX:0.7855,scaleY:0.3107},0).wait(1).to({scaleX:0.787,scaleY:0.3153},0).wait(1).to({scaleX:0.7884,scaleY:0.3199},0).wait(1).to({scaleX:0.7898,scaleY:0.3245},0).wait(1).to({scaleX:0.7913,scaleY:0.3292},0).wait(1).to({scaleX:0.7927,scaleY:0.3338},0).wait(1).to({scaleX:0.7941,scaleY:0.3384,y:842.55},0).wait(1).to({scaleX:0.7956,scaleY:0.3431},0).wait(1).to({scaleX:0.797,scaleY:0.3477},0).wait(1).to({scaleX:0.7984,scaleY:0.3523,y:842.6},0).wait(1).to({scaleX:0.7999,scaleY:0.3569},0).wait(1).to({scaleX:0.8013,scaleY:0.3616},0).wait(1).to({scaleX:0.8027,scaleY:0.3662},0).wait(1).to({scaleX:0.8042,scaleY:0.3708},0).wait(1).to({scaleX:0.8056,scaleY:0.3755},0).wait(1).to({scaleX:0.807,scaleY:0.3801},0).wait(1).to({scaleX:0.8085,scaleY:0.3847},0).wait(1).to({scaleX:0.8099,scaleY:0.3894},0).wait(1).to({scaleX:0.8114,scaleY:0.394,x:939.7},0).wait(1).to({scaleX:0.8128,scaleY:0.3986,y:842.65},0).wait(1).to({scaleX:0.8142,scaleY:0.4032},0).wait(1).to({scaleX:0.8157,scaleY:0.4079},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Iterationk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Iterationk
	this.instance = new lib.Knife4();
	this.instance.setTransform(1068.4,0,0.4832,0.4832,70.4877);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(815.05,857.8,1,1,0,0,0,185.5,353.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},426).to({state:[{t:this.instance_1}]},159).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(585).to({_off:false},0).wait(1).to({regX:333.1,regY:333.1,rotation:-10.3162,x:993.05,y:807.95},0).wait(1).to({rotation:-20.6325,x:1018.9,y:779.75},0).wait(1).to({rotation:-30.9487,x:1040.5,y:753.75},0).wait(1).to({rotation:-41.265,x:1058.4,y:730.9},0).wait(1).to({rotation:-51.5812,x:1073.05,y:711.6},0).wait(1).to({rotation:-61.8975,x:1085.3,y:696.4},0).wait(1).to({rotation:-72.2137,x:1095.85,y:685.8},0).wait(1).to({y:684.5},0).wait(1).to({y:683.2},0).wait(1).to({y:681.9},0).wait(1).to({y:680.6},0).wait(1).to({y:679.35},0).wait(1).to({y:678.05},0).wait(1).to({y:676.75},0).wait(1).to({y:675.45},0).wait(1).to({y:674.15},0).wait(1).to({y:672.85},0).wait(1).to({y:671.55},0).wait(1).to({y:670.25},0).wait(1).to({y:668.95},0).wait(1).to({y:667.65},0).wait(1).to({y:666.4},0).wait(1).to({y:665.1},0).wait(1).to({y:663.8},0).wait(1).to({y:662.5},0).wait(1).to({y:661.2},0).wait(1).to({y:659.9},0).wait(1).to({y:658.6},0).wait(1).to({y:1108.4},0).wait(1).to({x:999.25,y:1869.8},0).wait(1).to({x:902.6,y:2631.15},0).wait(1).to({x:805.95,y:3392.55},0).wait(25).to({regX:184.3,regY:353.4,x:911.35,y:1499.85},0).wait(1).to({regX:333.1,regY:333.1,x:937.45,y:1537.7},0).wait(1).to({y:1723.5},0).wait(1).to({y:1909.3},0).wait(1).to({y:2095.05},0).wait(1).to({y:2280.85},0).wait(1).to({y:2466.65},0).wait(1).to({y:2652.4},0).wait(1).to({y:2838.2},0).wait(1).to({y:3024},0).wait(1).to({y:3209.75},0).wait(1).to({y:3395.55},0).wait(1).to({y:3581.35},0).wait(1).to({regX:183.1,regY:353.6,x:911.4,y:1499.8},0).wait(1).to({regX:333.1,regY:333.1,x:934.4,y:1517.95},0).wait(1).to({x:931.15,y:1685.25},0).wait(1).to({x:927.85,y:1852.55},0).wait(1).to({x:924.6,y:2019.85},0).wait(1).to({x:921.3,y:2187.15},0).wait(1).to({x:918.05,y:2354.45},0).wait(1).to({x:914.75,y:2521.75},0).wait(1).to({x:911.5,y:2689.05},0).wait(1).to({x:908.2,y:2856.35},0).wait(1).to({x:904.95,y:3023.65},0).wait(1).to({x:901.65,y:3190.95},0).wait(1).to({rotation:-59.3252,x:916.45,y:3193.85},0).wait(1).to({rotation:-46.4368,x:928.2,y:3203.75},0).wait(1).to({rotation:-33.5483,x:935.6,y:3219.8},0).wait(1).to({rotation:-20.6599,x:937.2,y:3241},0).wait(1).to({rotation:-7.7714,x:932.15,y:3265.7},0).wait(1).to({regX:134.3,regY:342.2,rotation:17.7855,x:741.75,y:3263.55},0).wait(1).to({regX:134.7,regY:342.1,rotation:-16.6769,x:644.8,y:3195.05},0).wait(1).to({regX:333.1,regY:333.1,rotation:-44.4461,x:740.2,y:3040.65},0).wait(1).to({rotation:-72.2153,x:617.05,y:2985.3},0).wait(1).to({rotation:-101.3646,x:475.7,y:3025.75},0).wait(1).to({rotation:-130.514,x:343.1,y:3106.85},0).wait(1).to({rotation:-162.215,x:255.1,y:3258.1},0).wait(1).to({rotation:-204.003,x:301.4,y:3489.85},0).wait(1).to({rotation:-228.109,x:413.85,y:3555.75},0).wait(1).to({rotation:-252.215,x:548.15,y:3594.85},0).wait(1).to({regX:134.8,regY:342.1,rotation:-342.2145,x:741.8,y:3263.6},0).wait(1).to({regX:333.1,regY:333.1,rotation:-376.6769,x:832.15,y:3129.45},0).wait(1).to({rotation:-404.4461,x:740.1,y:3040.7},0).wait(1).to({rotation:-432.2153,x:617,y:2985.35},0).wait(1).to({rotation:-461.3646,x:475.7,y:3025.85},0).wait(1).to({rotation:-490.514,x:343.1,y:3106.9},0).wait(1).to({rotation:-522.215,x:255.15,y:3258.1},0).wait(1).to({rotation:-564.003,x:301.45,y:3489.8},0).wait(1).to({rotation:-588.109,x:413.9,y:3555.65},0).wait(1).to({rotation:-612.215,x:548.15,y:3594.7},0).wait(1).to({rotation:-640.4818,x:714.8,y:3569.15},0).wait(1).to({rotation:-668.7487,x:825.7,y:3497.5},0).wait(1).to({regX:134.8,regY:342.1,rotation:-702.2145,x:741.75,y:3263.6},0).wait(1).to({regX:333.1,regY:333.1,rotation:-736.6769,x:832.1,y:3129.5},0).wait(1).to({rotation:-764.4461,x:740.1,y:3040.75},0).wait(1).to({rotation:-792.2153,x:616.95,y:2985.4},0).wait(1).to({rotation:-821.3646,x:475.7,y:3025.9},0).wait(1).to({rotation:-850.514,x:343.15,y:3106.95},0).wait(1).to({rotation:-882.215,x:255.2,y:3258.1},0).wait(1).to({rotation:-924.003,x:301.5,y:3489.8},0).wait(1).to({rotation:-948.109,x:413.9,y:3555.6},0).wait(1).to({rotation:-972.215,x:548.15,y:3594.7},0).wait(1).to({rotation:-1000.4818,x:714.8,y:3569.15},0).wait(1).to({rotation:-1028.7487,x:825.7,y:3497.5},0).wait(1).to({regX:134.8,regY:342.1,rotation:-1062.2145,x:741.8,y:3263.6},0).wait(1).to({regX:333.1,regY:333.1,rotation:-1096.6769,x:832.15,y:3129.45},0).wait(1).to({rotation:-1124.4461,x:740.1,y:3040.7},0).wait(1).to({rotation:-1152.2153,x:617,y:2985.35},0).wait(1).to({rotation:-1181.3646,x:475.7,y:3025.85},0).wait(1).to({rotation:-1210.514,x:343.1,y:3106.9},0).wait(1).to({rotation:-1242.215,x:255.15,y:3258.1},0).wait(1).to({rotation:-1284.003,x:301.45,y:3489.8},0).wait(1).to({rotation:-1308.109,x:413.9,y:3555.65},0).wait(1).to({rotation:-1332.215,x:548.15,y:3594.7},0).wait(1).to({rotation:-1360.4818,x:714.8,y:3569.15},0).wait(1).to({rotation:-1388.7487,x:825.7,y:3497.5},0).wait(1).to({regX:134.8,regY:342.1,rotation:-1422.2145,x:741.8,y:3263.6},0).wait(1).to({regX:333.1,regY:333.1,rotation:-1456.6769,x:832.15,y:3129.45},0).wait(1).to({rotation:-1484.4461,x:740.1,y:3040.7},0).wait(1).to({rotation:-1512.2153,x:617,y:2985.35},0).wait(1).to({rotation:-1541.3646,x:475.7,y:3025.85},0).wait(1).to({rotation:-1570.514,x:343.1,y:3106.9},0).wait(1).to({rotation:-1602.215,x:255.15,y:3258.1},0).wait(1).to({rotation:-1644.003,x:301.45,y:3489.8},0).wait(1).to({rotation:-1668.109,x:413.9,y:3555.65},0).wait(1).to({rotation:-1692.215,x:548.15,y:3594.7},0).wait(1).to({rotation:-1720.4818,x:714.8,y:3569.15},0).wait(1).to({rotation:-1748.7487,x:825.7,y:3497.5},0).wait(1).to({regX:134.8,regY:342.1,rotation:-1782.2145,x:741.8,y:3263.6},0).wait(1).to({regX:333.1,regY:333.1,rotation:-1816.6769,x:832.15,y:3129.45},0).wait(1).to({rotation:-1844.4461,x:740.1,y:3040.7},0).wait(1).to({rotation:-1872.2153,x:617,y:2985.35},0).wait(1).to({rotation:-1901.3646,x:475.7,y:3025.85},0).wait(1).to({rotation:-1930.514,x:343.1,y:3106.9},0).wait(1).to({rotation:-1962.215,x:255.15,y:3258.1},0).wait(1).to({rotation:-2004.003,x:301.45,y:3489.8},0).wait(1).to({rotation:-2028.109,x:413.9,y:3555.65},0).wait(1).to({rotation:-2052.215,x:548.15,y:3594.7},0).wait(1).to({rotation:-2080.4818,x:714.8,y:3569.15},0).wait(1).to({rotation:-2108.7487,x:825.7,y:3497.5},0).wait(1).to({regX:134.8,regY:342.1,rotation:-2142.2145,x:741.8,y:3263.6},0).wait(1).to({regX:333.1,regY:333.1,rotation:-2176.6769,x:832.15,y:3129.45},0).wait(1).to({rotation:-2204.4461,x:740.1,y:3040.7},0).wait(1).to({rotation:-2232.2153,x:617,y:2985.35},0).wait(1).to({rotation:-2261.3646,x:475.7,y:3025.85},0).wait(1).to({rotation:-2290.514,x:343.1,y:3106.9},0).wait(1).to({rotation:-2322.215,x:255.15,y:3258.1},0).wait(1).to({rotation:-2364.003,x:301.45,y:3489.8},0).wait(1).to({rotation:-2388.109,x:413.9,y:3555.65},0).wait(1).to({rotation:-2412.215,x:548.15,y:3594.7},0).wait(1).to({rotation:-2440.4818,x:714.8,y:3569.15},0).wait(1).to({rotation:-2468.7487,x:825.7,y:3497.5},0).wait(1).to({regX:134.7,regY:342.2,rotation:-2502.2145,x:741.75,y:3263.7},0).wait(1).to({regX:333.1,regY:333.1,rotation:-2536.6769,x:832.2,y:3129.4},0).wait(1).to({rotation:-2564.4461,x:740.15,y:3040.6},0).wait(1).to({rotation:-2592.2153,x:616.95,y:2985.25},0).wait(1).to({rotation:-2621.3646,x:475.6,y:3025.75},0).wait(1).to({rotation:-2650.514,x:343,y:3106.9},0).wait(1).to({rotation:-2682.215,x:255.05,y:3258.1},0).wait(1).to({rotation:-2724.003,x:301.4,y:3489.9},0).wait(1).to({rotation:-2748.109,x:413.85,y:3555.75},0).wait(1).to({rotation:-2772.215,x:548.15,y:3594.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Elrenk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Elrenk
	this.instance = new lib.Knife1();
	this.instance.setTransform(912.6,651.75,0.3575,0.3575,156.2141);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(690.3,932.35,1,1,0,0,0,233.6,129.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},426).to({state:[{t:this.instance_1}]},159).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(585).to({_off:false},0).wait(1).to({regX:254.5,regY:254.5,rotation:-22.5043,x:782.95,y:1035.75},0).wait(1).to({rotation:-45.0086,x:844.6,y:997.55},0).wait(1).to({rotation:-67.5129,x:890.45,y:948.15},0).wait(1).to({rotation:-90.0171,x:917.45,y:894.4},0).wait(1).to({rotation:-112.5214,x:925.35,y:843.8},0).wait(1).to({rotation:-135.0257,x:916.9,y:803.5},0).wait(1).to({rotation:-157.53,x:897.2,y:778.95},0).wait(1).to({y:773.75},0).wait(1).to({y:768.5},0).wait(1).to({y:763.3},0).wait(1).to({y:758.05},0).wait(1).to({y:752.8},0).wait(1).to({y:747.6},0).wait(1).to({y:742.35},0).wait(1).to({y:737.1},0).wait(1).to({y:731.9},0).wait(1).to({y:726.65},0).wait(1).to({y:721.45},0).wait(1).to({y:716.2},0).wait(1).to({y:710.95},0).wait(1).to({y:705.75},0).wait(1).to({y:700.5},0).wait(1).to({y:695.3},0).wait(1).to({y:690.05},0).wait(1).to({y:684.8},0).wait(1).to({y:679.6},0).wait(1).to({y:674.35},0).wait(1).to({y:669.1},0).wait(1).to({y:1122.1},0).wait(1).to({x:816,y:1877.95},0).wait(1).to({x:734.8,y:2633.8},0).wait(1).to({x:653.65,y:3389.65},0).wait(25).to({regX:232.5,regY:128.3,rotation:-157.5305,x:735.6,y:1498.55},0).wait(1).to({regX:254.5,regY:254.5,rotation:-157.53,x:763.45,y:1557.2},0).wait(1).to({y:1740.95},0).wait(1).to({y:1924.7},0).wait(1).to({y:2108.45},0).wait(1).to({y:2292.2},0).wait(1).to({y:2475.95},0).wait(1).to({y:2659.7},0).wait(1).to({y:2843.45},0).wait(1).to({y:3027.2},0).wait(1).to({y:3210.95},0).wait(1).to({y:3394.7},0).wait(1).to({y:3578.45},0).wait(1).to({regX:231.8,regY:127.2,rotation:-157.5305,x:735.65,y:1498.5},0).wait(1).to({regX:254.5,regY:254.5,rotation:-157.53,x:760,y:1537.25},0).wait(1).to({x:756.75,y:1702.35},0).wait(1).to({x:753.45,y:1867.4},0).wait(1).to({x:750.2,y:2032.5},0).wait(1).to({x:746.95,y:2197.55},0).wait(1).to({x:743.65,y:2362.65},0).wait(1).to({x:740.4,y:2527.7},0).wait(1).to({x:737.15,y:2692.8},0).wait(1).to({x:733.85,y:2857.85},0).wait(1).to({x:730.6,y:3022.95},0).wait(1).to({x:727.35,y:3188.05},0).wait(1).to({x:710.45,y:3173.85},0).wait(1).to({x:693.6,y:3159.65},0).wait(1).to({x:676.75,y:3145.45},0).wait(1).to({x:659.9,y:3131.3},0).wait(1).to({x:643.05,y:3117.1},0).wait(1).to({regX:141.6,regY:64.7,rotation:-157.5305,x:639.9,y:3269.65},0).wait(1).to({regX:138.1,regY:60.1,rotation:172.4696,x:595.85,y:3232.45},0).wait(1).to({regX:254.5,regY:254.5,scaleX:0.9999,scaleY:0.9999,rotation:142.469,x:323.75,y:3155.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:112.469,x:270.75,y:3265.3},0).wait(1).to({rotation:82.4689,x:359.15,y:3454.8},0).wait(1).to({rotation:52.4688,x:455.45,y:3514.75},0).wait(1).to({rotation:22.4687,x:552.35,y:3563.35},0).wait(1).to({rotation:-29.2228,x:769.8,y:3478.9},0).wait(1).to({rotation:-42.1417,x:844.25,y:3434.1},0).wait(1).to({rotation:-67.5313,x:905.9,y:3333.75},0).wait(1).to({regX:141.6,regY:64.7,rotation:-157.5305,x:639.9,y:3269.65},0).wait(1).to({regX:254.5,regY:254.5,rotation:-187.531,x:459,y:3059},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-217.531,x:329.3,y:3156.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-247.531,x:276.25,y:3263.8},0).wait(1).to({rotation:-277.5311,x:363.15,y:3450.7},0).wait(1).to({rotation:-307.5312,x:456.9,y:3509.2},0).wait(1).to({rotation:-337.5313,x:550.85,y:3557.8},0).wait(1).to({rotation:-389.2228,x:764.5,y:3476.6},0).wait(1).to({rotation:-402.1417,x:838.6,y:3433.05},0).wait(1).to({rotation:-427.5313,x:900.35,y:3335.25},0).wait(1).to({rotation:-463.235,x:851.35,y:3144.25},0).wait(1).to({rotation:-483.826,x:744.35,y:3100.15},0).wait(1).to({regX:141.6,regY:64.7,rotation:-517.5305,x:639.9,y:3269.65},0).wait(1).to({regX:254.5,regY:254.5,rotation:-547.531,x:459,y:3059},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-577.531,x:329.3,y:3156.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-607.531,x:276.25,y:3263.8},0).wait(1).to({rotation:-637.5311,x:363.15,y:3450.7},0).wait(1).to({rotation:-667.5312,x:456.9,y:3509.2},0).wait(1).to({rotation:-697.5313,x:550.85,y:3557.8},0).wait(1).to({rotation:-749.2228,x:764.5,y:3476.6},0).wait(1).to({rotation:-762.1417,x:838.6,y:3433.05},0).wait(1).to({rotation:-787.5313,x:900.35,y:3335.25},0).wait(1).to({rotation:-823.235,x:851.35,y:3144.25},0).wait(1).to({rotation:-843.826,x:744.35,y:3100.15},0).wait(1).to({regX:141.6,regY:64.7,rotation:-877.5305,x:639.9,y:3269.65},0).wait(1).to({regX:254.5,regY:254.5,rotation:-907.531,x:459,y:3059},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-937.531,x:329.3,y:3156.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-967.531,x:276.25,y:3263.8},0).wait(1).to({rotation:-997.5311,x:363.15,y:3450.7},0).wait(1).to({rotation:-1027.5312,x:456.9,y:3509.2},0).wait(1).to({rotation:-1057.5313,x:550.85,y:3557.8},0).wait(1).to({rotation:-1109.2228,x:764.5,y:3476.6},0).wait(1).to({rotation:-1122.1417,x:838.6,y:3433.05},0).wait(1).to({rotation:-1147.5313,x:900.35,y:3335.25},0).wait(1).to({rotation:-1183.235,x:851.35,y:3144.25},0).wait(1).to({rotation:-1203.826,x:744.35,y:3100.15},0).wait(1).to({regX:141.6,regY:64.7,rotation:-1237.5305,x:639.9,y:3269.65},0).wait(1).to({regX:254.5,regY:254.5,rotation:-1267.531,x:459,y:3059},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1297.531,x:329.3,y:3156.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1327.531,x:276.25,y:3263.8},0).wait(1).to({rotation:-1357.5311,x:363.15,y:3450.7},0).wait(1).to({rotation:-1387.5312,x:456.9,y:3509.2},0).wait(1).to({rotation:-1417.5313,x:550.85,y:3557.8},0).wait(1).to({rotation:-1469.2228,x:764.5,y:3476.6},0).wait(1).to({rotation:-1482.1417,x:838.6,y:3433.05},0).wait(1).to({rotation:-1507.5313,x:900.35,y:3335.25},0).wait(1).to({rotation:-1543.235,x:851.35,y:3144.25},0).wait(1).to({rotation:-1563.826,x:744.35,y:3100.15},0).wait(1).to({regX:141.6,regY:64.7,rotation:-1597.5305,x:639.9,y:3269.65},0).wait(1).to({regX:254.5,regY:254.5,rotation:-1627.531,x:459,y:3059},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1657.531,x:329.3,y:3156.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1687.531,x:276.25,y:3263.8},0).wait(1).to({rotation:-1717.5311,x:363.15,y:3450.7},0).wait(1).to({rotation:-1747.5312,x:456.9,y:3509.2},0).wait(1).to({rotation:-1777.5313,x:550.85,y:3557.8},0).wait(1).to({rotation:-1829.2228,x:764.5,y:3476.6},0).wait(1).to({rotation:-1842.1417,x:838.6,y:3433.05},0).wait(1).to({rotation:-1867.5313,x:900.35,y:3335.25},0).wait(1).to({rotation:-1903.235,x:851.35,y:3144.25},0).wait(1).to({rotation:-1923.826,x:744.35,y:3100.15},0).wait(1).to({regX:141.6,regY:64.7,rotation:-1957.5305,x:639.9,y:3269.65},0).wait(1).to({regX:254.5,regY:254.5,rotation:-1987.531,x:459,y:3059},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-2017.531,x:329.3,y:3156.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2047.531,x:276.25,y:3263.8},0).wait(1).to({rotation:-2077.5311,x:363.15,y:3450.7},0).wait(1).to({rotation:-2107.5312,x:456.9,y:3509.2},0).wait(1).to({rotation:-2137.5313,x:550.85,y:3557.8},0).wait(1).to({rotation:-2189.2228,x:764.5,y:3476.6},0).wait(1).to({rotation:-2202.1417,x:838.6,y:3433.05},0).wait(1).to({rotation:-2227.5313,x:900.35,y:3335.25},0).wait(1).to({rotation:-2263.235,x:851.35,y:3144.25},0).wait(1).to({rotation:-2283.826,x:744.35,y:3100.15},0).wait(1).to({regX:141.6,regY:64.7,rotation:-2317.5305,x:639.9,y:3269.65},0).wait(1).to({regX:254.5,regY:254.5,rotation:-2347.531,x:459,y:3059},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-2377.531,x:329.3,y:3156.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2407.531,x:276.25,y:3263.8},0).wait(1).to({rotation:-2437.5311,x:363.15,y:3450.7},0).wait(1).to({rotation:-2467.5312,x:456.9,y:3509.2},0).wait(1).to({rotation:-2497.5313,x:550.85,y:3557.8},0).wait(1).to({rotation:-2549.2228,x:764.5,y:3476.6},0).wait(1).to({rotation:-2562.1417,x:838.6,y:3433.05},0).wait(1).to({rotation:-2587.5313,x:900.35,y:3335.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Caink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Caink
	this.instance = new lib.Knife2();
	this.instance.setTransform(205.6,-26.3,0.4942,0.4942,-22.2353);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(638.85,813.85,1,1,0,0,0,380.2,537.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},426).to({state:[{t:this.instance_1}]},159).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(585).to({_off:false},0).wait(1).to({regX:348,regY:348,rotation:3.2129,x:604.65,y:642},0).wait(1).to({rotation:6.4258,x:602.7,y:660.25},0).wait(1).to({rotation:9.6387,x:600.85,y:679.1},0).wait(1).to({rotation:12.8517,x:598.95,y:698.6},0).wait(1).to({rotation:16.0646,x:597,y:718.65},0).wait(1).to({rotation:19.2775,x:595.05,y:739.35},0).wait(1).to({rotation:22.4904,x:593,y:760.6},0).wait(1).to({y:755.7},0).wait(1).to({y:750.8},0).wait(1).to({y:745.9},0).wait(1).to({y:741},0).wait(1).to({y:736.05},0).wait(1).to({y:731.15},0).wait(1).to({y:726.25},0).wait(1).to({y:721.35},0).wait(1).to({y:716.45},0).wait(1).to({y:711.5},0).wait(1).to({y:706.6},0).wait(1).to({y:701.7},0).wait(1).to({y:696.8},0).wait(1).to({y:691.9},0).wait(1).to({y:686.95},0).wait(1).to({y:682.05},0).wait(1).to({y:677.15},0).wait(1).to({y:672.25},0).wait(1).to({y:667.35},0).wait(1).to({y:662.4},0).wait(1).to({y:657.5},0).wait(1).to({y:1102.3},0).wait(1).to({x:554.4,y:1867.05},0).wait(1).to({x:515.85,y:2631.75},0).wait(1).to({x:477.3,y:3396.5},0).wait(25).to({regX:380.1,regY:537.4,rotation:22.4903,x:551.85,y:1551.25},0).wait(1).to({regX:348,regY:348,rotation:22.4904,x:594.6,y:1548.2},0).wait(1).to({y:1732.45},0).wait(1).to({y:1916.7},0).wait(1).to({y:2100.95},0).wait(1).to({y:2285.2},0).wait(1).to({y:2469.45},0).wait(1).to({y:2653.7},0).wait(1).to({y:2837.95},0).wait(1).to({y:3022.2},0).wait(1).to({y:3206.45},0).wait(1).to({y:3390.65},0).wait(1).to({y:3574.9},0).wait(1).to({regX:380.1,regY:537.4,rotation:22.4903,x:551.9,y:1551.25},0).wait(1).to({regX:348,regY:348,rotation:22.4904,x:591.4,y:1529.6},0).wait(1).to({x:588.15,y:1695.2},0).wait(1).to({x:584.85,y:1860.85},0).wait(1).to({x:581.6,y:2026.45},0).wait(1).to({x:578.35,y:2192.1},0).wait(1).to({x:575.05,y:2357.7},0).wait(1).to({x:571.8,y:2523.35},0).wait(1).to({x:568.55,y:2688.95},0).wait(1).to({x:565.25,y:2854.55},0).wait(1).to({x:562,y:3020.2},0).wait(1).to({x:558.7,y:3185.8},0).wait(1).to({rotation:9.6022,x:509.2,y:3169.45},0).wait(1).to({rotation:-3.2861,x:459.8,y:3162.8},0).wait(1).to({rotation:-16.1743,x:412.55,y:3165.5},0).wait(1).to({rotation:-29.0626,x:369.5,y:3177},0).wait(1).to({rotation:-41.9508,x:332.45,y:3196},0).wait(1).to({regX:376.6,regY:520.6,rotation:-67.5097,x:428.4,y:3280.4},0).wait(1).to({regX:375.5,regY:519.1,rotation:-97.5097,x:490.75,y:3317.35},0).wait(1).to({regX:348,regY:348,rotation:-127.5101,x:417.3,y:3486.15},0).wait(1).to({rotation:-157.51,x:541.65,y:3571.6},0).wait(1).to({rotation:-193.293,x:748.45,y:3601.75},0).wait(1).to({rotation:-220.4015,x:851.65,y:3462.15},0).wait(1).to({rotation:-247.51,x:900.25,y:3323.3},0).wait(1).to({rotation:-288.4835,x:842.35,y:3129.95},0).wait(1).to({rotation:-312.9969,x:742.55,y:3068.4},0).wait(1).to({rotation:-337.5104,x:623.55,y:3031.55},0).wait(1).to({regX:376.6,regY:521,rotation:-427.5097,x:428.35,y:3280.45},0).wait(1).to({regX:348,regY:348,rotation:-457.5103,x:322.85,y:3368.3},0).wait(1).to({rotation:-487.5101,x:416.4,y:3488.25},0).wait(1).to({rotation:-517.51,x:541.95,y:3573.85},0).wait(1).to({rotation:-553.293,x:749.95,y:3603.4},0).wait(1).to({rotation:-580.4015,x:853.75,y:3462.95},0).wait(1).to({rotation:-607.51,x:902.5,y:3323.05},0).wait(1).to({rotation:-648.4835,x:843.85,y:3128.3},0).wait(1).to({rotation:-672.9969,x:743.2,y:3066.25},0).wait(1).to({rotation:-697.5104,x:623.3,y:3029.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-727.5104,x:483.05,y:3024.25},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-757.5104,x:358.4,y:3134.8},0).wait(1).to({regX:376.6,regY:521.1,scaleX:1,scaleY:1,rotation:-787.5097,x:428.4,y:3280.4},0).wait(1).to({regX:348,regY:348,rotation:-817.5103,x:322.8,y:3368.3},0).wait(1).to({rotation:-847.5101,x:416.35,y:3488.25},0).wait(1).to({rotation:-877.51,x:541.9,y:3573.9},0).wait(1).to({rotation:-913.293,x:749.95,y:3603.4},0).wait(1).to({rotation:-940.4015,x:853.8,y:3462.95},0).wait(1).to({rotation:-967.51,x:902.5,y:3323.05},0).wait(1).to({rotation:-1008.4835,x:843.9,y:3128.25},0).wait(1).to({rotation:-1032.9969,x:743.25,y:3066.2},0).wait(1).to({rotation:-1057.5104,x:623.3,y:3029.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1087.5104,x:483,y:3024.15},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-1117.5104,x:358.35,y:3134.75},0).wait(1).to({regX:376.6,regY:521,scaleX:1,scaleY:1,rotation:-1147.5097,x:428.35,y:3280.45},0).wait(1).to({regX:348,regY:348,rotation:-1177.5103,x:322.85,y:3368.3},0).wait(1).to({rotation:-1207.5101,x:416.4,y:3488.25},0).wait(1).to({rotation:-1237.51,x:541.95,y:3573.85},0).wait(1).to({rotation:-1273.293,x:749.95,y:3603.4},0).wait(1).to({rotation:-1300.4015,x:853.75,y:3462.95},0).wait(1).to({rotation:-1327.51,x:902.5,y:3323.05},0).wait(1).to({rotation:-1368.4835,x:843.85,y:3128.3},0).wait(1).to({rotation:-1392.9969,x:743.2,y:3066.25},0).wait(1).to({rotation:-1417.5104,x:623.3,y:3029.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1447.5104,x:483.05,y:3024.25},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-1477.5104,x:358.4,y:3134.8},0).wait(1).to({regX:376.6,regY:521,scaleX:1,scaleY:1,rotation:-1507.5097,x:428.35,y:3280.45},0).wait(1).to({regX:348,regY:348,rotation:-1537.5103,x:322.85,y:3368.3},0).wait(1).to({rotation:-1567.5101,x:416.4,y:3488.25},0).wait(1).to({rotation:-1597.51,x:541.95,y:3573.85},0).wait(1).to({rotation:-1633.293,x:749.95,y:3603.4},0).wait(1).to({rotation:-1660.4015,x:853.75,y:3462.95},0).wait(1).to({rotation:-1687.51,x:902.5,y:3323.05},0).wait(1).to({rotation:-1728.4835,x:843.85,y:3128.3},0).wait(1).to({rotation:-1752.9969,x:743.2,y:3066.25},0).wait(1).to({rotation:-1777.5104,x:623.3,y:3029.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1807.5104,x:483.05,y:3024.25},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-1837.5104,x:358.4,y:3134.8},0).wait(1).to({regX:376.6,regY:521,scaleX:1,scaleY:1,rotation:-1867.5097,x:428.35,y:3280.45},0).wait(1).to({regX:348,regY:348,rotation:-1897.5103,x:322.85,y:3368.3},0).wait(1).to({rotation:-1927.5101,x:416.4,y:3488.25},0).wait(1).to({rotation:-1957.51,x:541.95,y:3573.85},0).wait(1).to({rotation:-1993.293,x:749.95,y:3603.4},0).wait(1).to({rotation:-2020.4015,x:853.75,y:3462.95},0).wait(1).to({rotation:-2047.51,x:902.5,y:3323.05},0).wait(1).to({rotation:-2088.4835,x:843.85,y:3128.3},0).wait(1).to({rotation:-2112.9969,x:743.2,y:3066.25},0).wait(1).to({rotation:-2137.5104,x:623.3,y:3029.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-2167.5104,x:483.05,y:3024.25},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-2197.5104,x:358.4,y:3134.8},0).wait(1).to({regX:376.6,regY:521,scaleX:1,scaleY:1,rotation:-2227.5097,x:428.35,y:3280.45},0).wait(1).to({regX:348,regY:348,rotation:-2257.5103,x:322.85,y:3368.3},0).wait(1).to({rotation:-2287.5101,x:416.4,y:3488.25},0).wait(1).to({rotation:-2317.51,x:541.95,y:3573.85},0).wait(1).to({rotation:-2353.293,x:749.95,y:3603.4},0).wait(1).to({rotation:-2380.4015,x:853.75,y:3462.95},0).wait(1).to({rotation:-2407.51,x:902.5,y:3323.05},0).wait(1).to({rotation:-2448.4835,x:843.85,y:3128.3},0).wait(1).to({rotation:-2472.9969,x:743.2,y:3066.25},0).wait(1).to({rotation:-2497.5104,x:623.3,y:3029.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-2527.5104,x:483.05,y:3024.25},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:-2557.5104,x:358.4,y:3134.8},0).wait(1).to({regX:376.6,regY:521,scaleX:1,scaleY:1,rotation:-2587.5097,x:428.4,y:3280.45},0).wait(1).to({regX:348,regY:348,rotation:-2617.5103,x:322.9,y:3368.3},0).wait(1).to({rotation:-2647.5101,x:416.45,y:3488.2},0).wait(1).to({rotation:-2677.51,x:541.95,y:3573.8},0).wait(1).to({rotation:-2713.293,x:749.95,y:3603.35},0).wait(1).to({rotation:-2740.4015,x:853.7,y:3462.9},0).wait(1).to({rotation:-2767.51,x:902.45,y:3323},0).wait(1).to({rotation:-2808.4835,x:843.8,y:3128.3},0).wait(1).to({rotation:-2832.9969,x:743.2,y:3066.3},0).wait(1).to({rotation:-2857.5104,x:623.3,y:3029.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.ShadowSelves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1999];
	this.streamSoundSymbolsList[0] = [{id:"BlackMod",startFrame:0,endFrame:2000,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("BlackMod",0);
		this.InsertIntoSoundStreamData(soundInstance,0,2000,1);
	}
	this.frame_1999 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1999).call(this.frame_1999).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(728.55,351.1,0.058,0.058,0,0,0,0.8,1.7);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	
	var _tweenStr_0 = cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0,regY:0,scaleX:0.0579,scaleY:0.0579,x:730.0223,y:350.5672},0).wait(1).to({scaleX:0.0577,scaleY:0.0577,x:731.5446,y:350.1345},0).wait(1).to({scaleX:0.0576,scaleY:0.0576,x:733.0669,y:349.7018},0).wait(1).to({scaleX:0.0574,scaleY:0.0574,x:734.5892,y:349.269},0).wait(1).to({scaleX:0.0573,scaleY:0.0573,x:736.1114,y:348.8363},0).wait(1).to({scaleX:0.0571,scaleY:0.0571,x:737.6337,y:348.4036},0).wait(1).to({scaleX:0.057,scaleY:0.057,x:739.156,y:347.9708},0).wait(1).to({scaleX:0.0569,scaleY:0.0569,x:740.6783,y:347.5381},0).wait(1).to({scaleX:0.0567,scaleY:0.0567,x:742.2006,y:347.1054},0).wait(1).to({scaleX:0.0566,scaleY:0.0566,x:743.7229,y:346.6726},0).wait(1).to({scaleX:0.0564,scaleY:0.0564,x:745.2452,y:346.2399},0).wait(1).to({scaleX:0.0563,scaleY:0.0563,x:746.7675,y:345.8071},0).wait(1).to({scaleX:0.0561,scaleY:0.0561,x:748.2898,y:345.3744},0).wait(1).to({scaleX:0.056,scaleY:0.056,x:749.8121,y:344.9417},0).wait(1).to({scaleX:0.0558,scaleY:0.0558,x:751.3344,y:344.5089},0).wait(1).to({scaleX:0.0557,scaleY:0.0557,x:752.8567,y:344.0762},0).wait(1).to({scaleX:0.0555,scaleY:0.0555,x:754.3789,y:343.6435},0).wait(1).to({scaleX:0.0554,scaleY:0.0554,x:755.9012,y:343.2107},0).wait(1).to({scaleX:0.0552,scaleY:0.0552,x:757.4235,y:342.778},0).wait(1).to({scaleX:0.0551,scaleY:0.0551,x:758.9458,y:342.3453},0).wait(1).to({scaleX:0.0549,scaleY:0.0549,x:760.4681,y:341.9125},0).wait(1).to({scaleX:0.0548,scaleY:0.0548,x:761.9904,y:341.4798},0).wait(1).to({scaleX:0.0546,scaleY:0.0546,x:763.5127,y:341.047},0).wait(1).to({scaleX:0.0545,scaleY:0.0545,x:765.035,y:340.6143},0).wait(1).to({scaleX:0.0543,scaleY:0.0543,x:766.5573,y:340.1816},0).wait(1).to({scaleX:0.0542,scaleY:0.0542,x:768.0796,y:339.7488},0).wait(1).to({scaleX:0.054,scaleY:0.054,x:769.6019,y:339.3161},0).wait(1).to({scaleX:0.0539,scaleY:0.0539,x:771.1242,y:338.8834},0).wait(1).to({scaleX:0.0537,scaleY:0.0537,x:772.6465,y:338.4506},0).wait(1).to({scaleX:0.0536,scaleY:0.0536,x:774.1687,y:338.0179},0).wait(1).to({scaleX:0.0534,scaleY:0.0534,x:775.691,y:337.5852},0).wait(1).to({scaleX:0.0533,scaleY:0.0533,x:777.2133,y:337.1524},0).wait(1).to({scaleX:0.0531,scaleY:0.0531,x:778.7356,y:336.7197},0).wait(1).to({scaleX:0.053,scaleY:0.053,x:780.2579,y:336.287},0).wait(1).to({scaleX:0.0528,scaleY:0.0528,x:781.7802,y:335.8542},0).wait(1).to({scaleX:0.0527,scaleY:0.0527,x:783.3025,y:335.4215},0).wait(1).to({scaleX:0.0525,scaleY:0.0525,x:784.8248,y:334.9887},0).wait(1).to({scaleX:0.0524,scaleY:0.0524,x:786.3471,y:334.556},0).wait(1).to({scaleX:0.0522,scaleY:0.0522,x:787.8694,y:334.1233},0).wait(1).to({scaleX:0.0521,scaleY:0.0521,x:789.3917,y:333.6905},0).wait(1).to({scaleX:0.0519,scaleY:0.0519,x:790.914,y:333.2578},0).wait(1).to({scaleX:0.0518,scaleY:0.0518,x:792.4362,y:332.8251},0).wait(1).to({scaleX:0.0516,scaleY:0.0516,x:793.9585,y:332.3923},0).wait(1).to({scaleX:0.0515,scaleY:0.0515,x:795.4808,y:331.9596},0).wait(1).to({scaleX:0.0513,scaleY:0.0513,x:797.0031,y:331.5269},0).wait(1).to({scaleX:0.0512,scaleY:0.0512,x:798.5254,y:331.0941},0).wait(1).to({scaleX:0.051,scaleY:0.051,x:800.0477,y:330.6614},0).wait(1).to({scaleX:0.0509,scaleY:0.0509,x:801.57,y:330.2287},0).wait(1).to({scaleX:0.0507,scaleY:0.0507,x:803.0923,y:329.7959},0).wait(1).to({scaleX:0.0506,scaleY:0.0506,x:804.6146,y:329.3632},0).wait(1).to({scaleX:0.0504,scaleY:0.0504,x:806.1369,y:328.9304},0).wait(1).to({scaleX:0.0503,scaleY:0.0503,x:807.6592,y:328.4977},0).wait(1).to({scaleX:0.0501,scaleY:0.0501,x:809.1815,y:328.065},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:810.7037,y:327.6322},0).wait(1).to({scaleX:0.0498,scaleY:0.0498,x:812.226,y:327.1995},0).wait(1).to({scaleX:0.0497,scaleY:0.0497,x:813.7483,y:326.7668},0).wait(1).to({scaleX:0.0495,scaleY:0.0495,x:815.2706,y:326.334},0).wait(1).to({scaleX:0.0494,scaleY:0.0494,x:816.7929,y:325.9013},0).wait(1).to({scaleX:0.0492,scaleY:0.0492,x:818.3152,y:325.4686},0).wait(1).to({scaleX:0.0491,scaleY:0.0491,x:819.8375,y:325.0358},0).wait(1).to({scaleX:0.0489,scaleY:0.0489,x:821.3598,y:324.6031},0).wait(1).to({scaleX:0.0488,scaleY:0.0488,x:822.8821,y:324.1703},0).wait(1).to({scaleX:0.0486,scaleY:0.0486,x:824.4044,y:323.7376},0).wait(1).to({scaleX:0.0485,scaleY:0.0485,x:825.9267,y:323.3049},0).wait(1).to({scaleX:0.0483,scaleY:0.0483,x:827.449,y:322.8721},0).wait(1).to({scaleX:0.0482,scaleY:0.0482,x:828.9712,y:322.4394},0).wait(1).to({scaleX:0.048,scaleY:0.048,x:830.4935,y:322.0067},0).wait(1).to({scaleX:0.0479,scaleY:0.0479,x:832.0158,y:321.5739},0).wait(1).to({scaleX:0.0477,scaleY:0.0477,x:833.5381,y:321.1412},0).wait(1).to({scaleX:0.0476,scaleY:0.0476,x:835.0604,y:320.7085},0).wait(1).to({scaleX:0.0474,scaleY:0.0474,x:836.5827,y:320.2757},0).wait(1).to({scaleX:0.0473,scaleY:0.0473,x:838.105,y:319.843},0).wait(1).to({scaleX:0.0471,scaleY:0.0471,x:839.6273,y:319.4103},0).wait(1).to({scaleX:0.047,scaleY:0.047,x:841.1496,y:318.9775},0).wait(1).to({scaleX:0.0468,scaleY:0.0468,x:842.6719,y:318.5448},0).wait(1).to({scaleX:0.0467,scaleY:0.0467,x:844.1942,y:318.112},0).wait(1).to({scaleX:0.0465,scaleY:0.0465,x:845.7165,y:317.6793},0).wait(1).to({scaleX:0.0464,scaleY:0.0464,x:847.2388,y:317.2466},0).wait(1).to({scaleX:0.0463,scaleY:0.0463,x:848.761,y:316.8138},0).wait(1).to({scaleX:0.0461,scaleY:0.0461,x:850.2833,y:316.3811},0).wait(1).to({scaleX:0.046,scaleY:0.046,x:851.8056,y:315.9484},0).wait(1).to({scaleX:0.0458,scaleY:0.0458,x:853.3279,y:315.5156},0).wait(1).to({scaleX:0.0457,scaleY:0.0457,x:854.8502,y:315.0829},0).wait(1).to({scaleX:0.0455,scaleY:0.0455,x:856.3725,y:314.6502},0).wait(1).to({scaleX:0.0454,scaleY:0.0454,x:857.8948,y:314.2174},0).wait(1).to({scaleX:0.0452,scaleY:0.0452,x:859.4171,y:313.7847},0).wait(1).to({scaleX:0.0451,scaleY:0.0451,x:860.9394,y:313.352},0).wait(1).to({scaleX:0.0449,scaleY:0.0449,x:862.4617,y:312.9192},0).wait(1).to({scaleX:0.0448,scaleY:0.0448,x:863.984,y:312.4865},0).wait(1).to({scaleX:0.0446,scaleY:0.0446,x:865.5063,y:312.0537},0).wait(1).to({scaleX:0.0445,scaleY:0.0445,x:867.0285,y:311.621},0).wait(1).to({scaleX:0.0443,scaleY:0.0443,x:868.5508,y:311.1883},0).wait(1).to({scaleX:0.0442,scaleY:0.0442,x:870.0731,y:310.7555},0).wait(1).to({scaleX:0.044,scaleY:0.044,x:871.5954,y:310.3228},0).wait(1).to({scaleX:0.0439,scaleY:0.0439,x:873.1177,y:309.8901},0).wait(1).to({scaleX:0.0437,scaleY:0.0437,x:874.64,y:309.4573},0).wait(1).to({scaleX:0.0436,scaleY:0.0436,x:876.1623,y:309.0246},0).wait(1).to({regX:0.8,regY:1.7,scaleX:0.058,scaleY:0.058,x:635.05,y:430.5},0).wait(1).to({regX:0,regY:0,scaleX:0.0579,scaleY:0.0579,x:635.3814,y:431.5164},0).wait(1).to({scaleX:0.0577,scaleY:0.0577,x:635.7627,y:432.6328},0).wait(1).to({scaleX:0.0576,scaleY:0.0576,x:636.1441,y:433.7492},0).wait(1).to({scaleX:0.0574,scaleY:0.0574,x:636.5255,y:434.8656},0).wait(1).to({scaleX:0.0573,scaleY:0.0573,x:636.9069,y:435.982},0).wait(1).to({scaleX:0.0571,scaleY:0.0571,x:637.2883,y:437.0984},0).wait(1).to({scaleX:0.057,scaleY:0.057,x:637.6696,y:438.2148},0).wait(1).to({scaleX:0.0568,scaleY:0.0568,x:638.051,y:439.3312},0).wait(1).to({scaleX:0.0567,scaleY:0.0567,x:638.4324,y:440.4476},0).wait(1).to({scaleX:0.0565,scaleY:0.0565,x:638.8138,y:441.564},0).wait(1).to({scaleX:0.0564,scaleY:0.0564,x:639.1951,y:442.6804},0).wait(1).to({scaleX:0.0562,scaleY:0.0562,x:639.5765,y:443.7968},0).wait(1).to({scaleX:0.0561,scaleY:0.0561,x:639.9579,y:444.9132},0).wait(1).to({scaleX:0.0559,scaleY:0.0559,x:640.3393,y:446.0296},0).wait(1).to({scaleX:0.0558,scaleY:0.0558,x:640.7207,y:447.146},0).wait(1).to({scaleX:0.0556,scaleY:0.0556,x:641.102,y:448.2624},0).wait(1).to({scaleX:0.0555,scaleY:0.0555,x:641.4834,y:449.3788},0).wait(1).to({scaleX:0.0553,scaleY:0.0553,x:641.8648,y:450.4952},0).wait(1).to({scaleX:0.0552,scaleY:0.0552,x:642.2462,y:451.6116},0).wait(1).to({scaleX:0.055,scaleY:0.055,x:642.6276,y:452.728},0).wait(1).to({scaleX:0.0549,scaleY:0.0549,x:643.0089,y:453.8444},0).wait(1).to({scaleX:0.0547,scaleY:0.0547,x:643.3903,y:454.9608},0).wait(1).to({scaleX:0.0546,scaleY:0.0546,x:643.7717,y:456.0772},0).wait(1).to({scaleX:0.0544,scaleY:0.0544,x:644.1531,y:457.1936},0).wait(1).to({scaleX:0.0543,scaleY:0.0543,x:644.5344,y:458.31},0).wait(1).to({scaleX:0.0541,scaleY:0.0541,x:644.9158,y:459.4264},0).wait(1).to({scaleX:0.054,scaleY:0.054,x:645.2972,y:460.5428},0).wait(1).to({scaleX:0.0538,scaleY:0.0538,x:645.6786,y:461.6592},0).wait(1).to({scaleX:0.0537,scaleY:0.0537,x:646.06,y:462.7756},0).wait(1).to({scaleX:0.0535,scaleY:0.0535,x:646.4413,y:463.892},0).wait(1).to({scaleX:0.0534,scaleY:0.0534,x:646.8227,y:465.0084},0).wait(1).to({scaleX:0.0532,scaleY:0.0532,x:647.2041,y:466.1248},0).wait(1).to({scaleX:0.0531,scaleY:0.0531,x:647.5855,y:467.2412},0).wait(1).to({scaleX:0.0529,scaleY:0.0529,x:647.9668,y:468.3577},0).wait(1).to({scaleX:0.0528,scaleY:0.0528,x:648.3482,y:469.4741},0).wait(1).to({scaleX:0.0526,scaleY:0.0526,x:648.7296,y:470.5905},0).wait(1).to({scaleX:0.0525,scaleY:0.0525,x:649.111,y:471.7069},0).wait(1).to({scaleX:0.0523,scaleY:0.0523,x:649.4924,y:472.8233},0).wait(1).to({scaleX:0.0522,scaleY:0.0522,x:649.8737,y:473.9397},0).wait(1).to({scaleX:0.052,scaleY:0.052,x:650.2551,y:475.0561},0).wait(1).to({scaleX:0.0519,scaleY:0.0519,x:650.6365,y:476.1725},0).wait(1).to({scaleX:0.0517,scaleY:0.0517,x:651.0179,y:477.2889},0).wait(1).to({scaleX:0.0516,scaleY:0.0516,x:651.3993,y:478.4053},0).wait(1).to({scaleX:0.0514,scaleY:0.0514,x:651.7806,y:479.5217},0).wait(1).to({scaleX:0.0513,scaleY:0.0513,x:652.162,y:480.6381},0).wait(1).to({scaleX:0.0511,scaleY:0.0511,x:652.5434,y:481.7545},0).wait(1).to({scaleX:0.051,scaleY:0.051,x:652.9248,y:482.8709},0).wait(1).to({scaleX:0.0508,scaleY:0.0508,x:653.3061,y:483.9873},0).wait(1).to({scaleX:0.0507,scaleY:0.0507,x:653.6875,y:485.1037},0).wait(1).to({scaleX:0.0505,scaleY:0.0505,x:654.0689,y:486.2201},0).wait(1).to({scaleX:0.0504,scaleY:0.0504,x:654.4503,y:487.3365},0).wait(1).to({scaleX:0.0502,scaleY:0.0502,x:654.8317,y:488.4529},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:655.213,y:489.5693},0).wait(1).to({scaleX:0.0499,scaleY:0.0499,x:655.5944,y:490.6857},0).wait(1).to({scaleX:0.0497,scaleY:0.0497,x:655.9758,y:491.8021},0).wait(1).to({scaleX:0.0496,scaleY:0.0496,x:656.3572,y:492.9185},0).wait(1).to({scaleX:0.0494,scaleY:0.0494,x:656.7385,y:494.0349},0).wait(1).to({scaleX:0.0493,scaleY:0.0493,x:657.1199,y:495.1513},0).wait(1).to({scaleX:0.0491,scaleY:0.0491,x:657.5013,y:496.2677},0).wait(1).to({scaleX:0.049,scaleY:0.049,x:657.8827,y:497.3841},0).wait(1).to({scaleX:0.0488,scaleY:0.0488,x:658.2641,y:498.5005},0).wait(1).to({scaleX:0.0487,scaleY:0.0487,x:658.6454,y:499.6169},0).wait(1).to({scaleX:0.0485,scaleY:0.0485,x:659.0268,y:500.7333},0).wait(1).to({scaleX:0.0484,scaleY:0.0484,x:659.4082,y:501.8497},0).wait(1).to({scaleX:0.0482,scaleY:0.0482,x:659.7896,y:502.9661},0).wait(1).to({scaleX:0.0481,scaleY:0.0481,x:660.1709,y:504.0825},0).wait(1).to({scaleX:0.0479,scaleY:0.0479,x:660.5523,y:505.1989},0).wait(1).to({scaleX:0.0478,scaleY:0.0478,x:660.9337,y:506.3153},0).wait(1).to({scaleX:0.0476,scaleY:0.0476,x:661.3151,y:507.4317},0).wait(1).to({scaleX:0.0475,scaleY:0.0475,x:661.6965,y:508.5481},0).wait(1).to({scaleX:0.0473,scaleY:0.0473,x:662.0778,y:509.6645},0).wait(1).to({scaleX:0.0472,scaleY:0.0472,x:662.4592,y:510.7809},0).wait(1).to({scaleX:0.047,scaleY:0.047,x:662.8406,y:511.8973},0).wait(1).to({scaleX:0.0469,scaleY:0.0469,x:663.222,y:513.0137},0).wait(1).to({scaleX:0.0467,scaleY:0.0467,x:663.6034,y:514.1301},0).wait(1).to({scaleX:0.0466,scaleY:0.0466,x:663.9847,y:515.2465},0).wait(1).to({scaleX:0.0464,scaleY:0.0464,x:664.3661,y:516.3629},0).wait(1).to({scaleX:0.0463,scaleY:0.0463,x:664.7475,y:517.4794},0).wait(1).to({scaleX:0.0461,scaleY:0.0461,x:665.1289,y:518.5958},0).wait(1).to({scaleX:0.046,scaleY:0.046,x:665.5102,y:519.7122},0).wait(1).to({scaleX:0.0458,scaleY:0.0458,x:665.8916,y:520.8286},0).wait(1).to({scaleX:0.0457,scaleY:0.0457,x:666.273,y:521.945},0).wait(1).to({scaleX:0.0455,scaleY:0.0455,x:666.6544,y:523.0614},0).wait(1).to({scaleX:0.0454,scaleY:0.0454,x:667.0358,y:524.1778},0).wait(1).to({scaleX:0.0452,scaleY:0.0452,x:667.4171,y:525.2942},0).wait(1).to({scaleX:0.0451,scaleY:0.0451,x:667.7985,y:526.4106},0).wait(1).to({scaleX:0.0449,scaleY:0.0449,x:668.1799,y:527.527},0).wait(1).to({scaleX:0.0448,scaleY:0.0448,x:668.5613,y:528.6434},0).wait(1).to({scaleX:0.0446,scaleY:0.0446,x:668.9426,y:529.7598},0).wait(1).to({scaleX:0.0445,scaleY:0.0445,x:669.324,y:530.8762},0).wait(1).to({scaleX:0.0443,scaleY:0.0443,x:669.7054,y:531.9926},0).wait(1).to({scaleX:0.0442,scaleY:0.0442,x:670.0868,y:533.109},0).wait(1).to({scaleX:0.044,scaleY:0.044,x:670.4682,y:534.2254},0).wait(1).to({scaleX:0.0439,scaleY:0.0439,x:670.8495,y:535.3418},0).wait(1).to({scaleX:0.0437,scaleY:0.0437,x:671.2309,y:536.4582},0).wait(1).to({scaleX:0.0436,scaleY:0.0436,x:671.6123,y:537.5746},0).wait(1).to({regX:0.8,regY:1.7,scaleX:0.058,scaleY:0.058,x:448.15,y:383.45},0).wait(1).to({regX:0,regY:0,scaleX:0.0579,scaleY:0.0579,x:446.8049,y:383.5297},0).wait(1).to({scaleX:0.0577,scaleY:0.0577,x:445.5097,y:383.7094},0).wait(1).to({scaleX:0.0576,scaleY:0.0576,x:444.2146,y:383.8892},0).wait(1).to({scaleX:0.0574,scaleY:0.0574,x:442.9195,y:384.0689},0).wait(1).to({scaleX:0.0573,scaleY:0.0573,x:441.6243,y:384.2486},0).wait(1).to({scaleX:0.0571,scaleY:0.0571,x:440.3292,y:384.4284},0).wait(1).to({scaleX:0.057,scaleY:0.057,x:439.0341,y:384.6081},0).wait(1).to({scaleX:0.0568,scaleY:0.0568,x:437.7389,y:384.7878},0).wait(1).to({scaleX:0.0567,scaleY:0.0567,x:436.4438,y:384.9676},0).wait(1).to({scaleX:0.0565,scaleY:0.0565,x:435.1487,y:385.1473},0).wait(1).to({scaleX:0.0564,scaleY:0.0564,x:433.8535,y:385.327},0).wait(1).to({scaleX:0.0562,scaleY:0.0562,x:432.5584,y:385.5068},0).wait(1).to({scaleX:0.0561,scaleY:0.0561,x:431.2633,y:385.6865},0).wait(1).to({scaleX:0.0559,scaleY:0.0559,x:429.9681,y:385.8662},0).wait(1).to({scaleX:0.0558,scaleY:0.0558,x:428.673,y:386.046},0).wait(1).to({scaleX:0.0556,scaleY:0.0556,x:427.3778,y:386.2257},0).wait(1).to({scaleX:0.0555,scaleY:0.0555,x:426.0827,y:386.4054},0).wait(1).to({scaleX:0.0553,scaleY:0.0553,x:424.7876,y:386.5852},0).wait(1).to({scaleX:0.0551,scaleY:0.0551,x:423.4924,y:386.7649},0).wait(1).to({scaleX:0.055,scaleY:0.055,x:422.1973,y:386.9446},0).wait(1).to({scaleX:0.0548,scaleY:0.0548,x:420.9022,y:387.1244},0).wait(1).to({scaleX:0.0547,scaleY:0.0547,x:419.607,y:387.3041},0).wait(1).to({scaleX:0.0545,scaleY:0.0545,x:418.3119,y:387.4838},0).wait(1).to({scaleX:0.0544,scaleY:0.0544,x:417.0168,y:387.6636},0).wait(1).to({scaleX:0.0542,scaleY:0.0542,x:415.7216,y:387.8433},0).wait(1).to({scaleX:0.0541,scaleY:0.0541,x:414.4265,y:388.023},0).wait(1).to({scaleX:0.0539,scaleY:0.0539,x:413.1314,y:388.2028},0).wait(1).to({scaleX:0.0538,scaleY:0.0538,x:411.8362,y:388.3825},0).wait(1).to({scaleX:0.0536,scaleY:0.0536,x:410.5411,y:388.5622},0).wait(1).to({scaleX:0.0535,scaleY:0.0535,x:409.246,y:388.742},0).wait(1).to({scaleX:0.0533,scaleY:0.0533,x:407.9508,y:388.9217},0).wait(1).to({scaleX:0.0532,scaleY:0.0532,x:406.6557,y:389.1014},0).wait(1).to({scaleX:0.053,scaleY:0.053,x:405.3606,y:389.2812},0).wait(1).to({scaleX:0.0529,scaleY:0.0529,x:404.0654,y:389.4609},0).wait(1).to({scaleX:0.0527,scaleY:0.0527,x:402.7703,y:389.6406},0).wait(1).to({scaleX:0.0526,scaleY:0.0526,x:401.4752,y:389.8204},0).wait(1).to({scaleX:0.0524,scaleY:0.0524,x:400.18,y:390.0001},0).wait(1).to({scaleX:0.0523,scaleY:0.0523,x:398.8849,y:390.1798},0).wait(1).to({scaleX:0.0521,scaleY:0.0521,x:397.5898,y:390.3596},0).wait(1).to({scaleX:0.0519,scaleY:0.0519,x:396.2946,y:390.5393},0).wait(1).to({scaleX:0.0518,scaleY:0.0518,x:394.9995,y:390.719},0).wait(1).to({scaleX:0.0516,scaleY:0.0516,x:393.7044,y:390.8988},0).wait(1).to({scaleX:0.0515,scaleY:0.0515,x:392.4092,y:391.0785},0).wait(1).to({scaleX:0.0513,scaleY:0.0513,x:391.1141,y:391.2582},0).wait(1).to({scaleX:0.0512,scaleY:0.0512,x:389.819,y:391.438},0).wait(1).to({scaleX:0.051,scaleY:0.051,x:388.5238,y:391.6177},0).wait(1).to({scaleX:0.0509,scaleY:0.0509,x:387.2287,y:391.7974},0).wait(1).to({scaleX:0.0507,scaleY:0.0507,x:385.9336,y:391.9771},0).wait(1).to({scaleX:0.0506,scaleY:0.0506,x:384.6384,y:392.1569},0).wait(1).to({scaleX:0.0504,scaleY:0.0504,x:383.3433,y:392.3366},0).wait(1).to({scaleX:0.0503,scaleY:0.0503,x:382.0482,y:392.5163},0).wait(1).to({scaleX:0.0501,scaleY:0.0501,x:380.753,y:392.6961},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:379.4579,y:392.8758},0).wait(1).to({scaleX:0.0498,scaleY:0.0498,x:378.1628,y:393.0555},0).wait(1).to({scaleX:0.0497,scaleY:0.0497,x:376.8676,y:393.2353},0).wait(1).to({scaleX:0.0495,scaleY:0.0495,x:375.5725,y:393.415},0).wait(1).to({scaleX:0.0494,scaleY:0.0494,x:374.2774,y:393.5947},0).wait(1).to({scaleX:0.0492,scaleY:0.0492,x:372.9822,y:393.7745},0).wait(1).to({scaleX:0.0491,scaleY:0.0491,x:371.6871,y:393.9542},0).wait(1).to({scaleX:0.0489,scaleY:0.0489,x:370.392,y:394.1339},0).wait(1).to({scaleX:0.0487,scaleY:0.0487,x:369.0968,y:394.3137},0).wait(1).to({scaleX:0.0486,scaleY:0.0486,x:367.8017,y:394.4934},0).wait(1).to({scaleX:0.0484,scaleY:0.0484,x:366.5066,y:394.6731},0).wait(1).to({scaleX:0.0483,scaleY:0.0483,x:365.2114,y:394.8529},0).wait(1).to({scaleX:0.0481,scaleY:0.0481,x:363.9163,y:395.0326},0).wait(1).to({scaleX:0.048,scaleY:0.048,x:362.6212,y:395.2123},0).wait(1).to({scaleX:0.0478,scaleY:0.0478,x:361.326,y:395.3921},0).wait(1).to({scaleX:0.0477,scaleY:0.0477,x:360.0309,y:395.5718},0).wait(1).to({scaleX:0.0475,scaleY:0.0475,x:358.7358,y:395.7515},0).wait(1).to({scaleX:0.0474,scaleY:0.0474,x:357.4406,y:395.9313},0).wait(1).to({scaleX:0.0472,scaleY:0.0472,x:356.1455,y:396.111},0).wait(1).to({scaleX:0.0471,scaleY:0.0471,x:354.8504,y:396.2907},0).wait(1).to({scaleX:0.0469,scaleY:0.0469,x:353.5552,y:396.4705},0).wait(1).to({scaleX:0.0468,scaleY:0.0468,x:352.2601,y:396.6502},0).wait(1).to({scaleX:0.0466,scaleY:0.0466,x:350.965,y:396.8299},0).wait(1).to({scaleX:0.0465,scaleY:0.0465,x:349.6698,y:397.0097},0).wait(1).to({scaleX:0.0463,scaleY:0.0463,x:348.3747,y:397.1894},0).wait(1).to({scaleX:0.0462,scaleY:0.0462,x:347.0796,y:397.3691},0).wait(1).to({scaleX:0.046,scaleY:0.046,x:345.7844,y:397.5489},0).wait(1).to({scaleX:0.0459,scaleY:0.0459,x:344.4893,y:397.7286},0).wait(1).to({scaleX:0.0457,scaleY:0.0457,x:343.1942,y:397.9083},0).wait(1).to({scaleX:0.0455,scaleY:0.0455,x:341.899,y:398.0881},0).wait(1).to({scaleX:0.0454,scaleY:0.0454,x:340.6039,y:398.2678},0).wait(1).to({scaleX:0.0452,scaleY:0.0452,x:339.3088,y:398.4475},0).wait(1).to({scaleX:0.0451,scaleY:0.0451,x:338.0136,y:398.6273},0).wait(1).to({scaleX:0.0449,scaleY:0.0449,x:336.7185,y:398.807},0).wait(1).to({scaleX:0.0448,scaleY:0.0448,x:335.4234,y:398.9867},0).wait(1).to({scaleX:0.0446,scaleY:0.0446,x:334.1282,y:399.1665},0).wait(1).to({scaleX:0.0445,scaleY:0.0445,x:332.8331,y:399.3462},0).wait(1).to({scaleX:0.0443,scaleY:0.0443,x:331.538,y:399.5259},0).wait(1).to({scaleX:0.0442,scaleY:0.0442,x:330.2428,y:399.7057},0).wait(1).to({scaleX:0.044,scaleY:0.044,x:328.9477,y:399.8854},0).wait(1).to({scaleX:0.0439,scaleY:0.0439,x:327.6526,y:400.0651},0).wait(1).to({scaleX:0.0437,scaleY:0.0437,x:326.3574,y:400.2449},0).wait(1).to({scaleX:0.0436,scaleY:0.0436,x:325.0623,y:400.4246},0).wait(1).to({regY:1.7,scaleX:0.058,scaleY:0.058,x:572.05,y:266.7},0).wait(1).to({regY:0,scaleX:0.0579,scaleY:0.0579,x:571.6809,y:265.4474},0).wait(1).to({scaleX:0.0578,scaleY:0.0578,x:571.3118,y:264.2949},0).wait(1).to({scaleX:0.0576,scaleY:0.0576,x:570.9428,y:263.1424},0).wait(1).to({scaleX:0.0575,scaleY:0.0575,x:570.5737,y:261.9898},0).wait(1).to({scaleX:0.0573,scaleY:0.0573,x:570.2046,y:260.8373},0).wait(1).to({scaleX:0.0572,scaleY:0.0572,x:569.8355,y:259.6847},0).wait(1).to({scaleX:0.0571,scaleY:0.0571,x:569.4664,y:258.5322},0).wait(1).to({scaleX:0.0569,scaleY:0.0569,x:569.0973,y:257.3797},0).wait(1).to({scaleX:0.0568,scaleY:0.0568,x:568.7283,y:256.2271},0).wait(1).to({scaleX:0.0566,scaleY:0.0566,x:568.3592,y:255.0746},0).wait(1).to({scaleX:0.0565,scaleY:0.0565,x:567.9901,y:253.922},0).wait(1).to({scaleX:0.0564,scaleY:0.0564,x:567.621,y:252.7695},0).wait(1).to({scaleX:0.0562,scaleY:0.0562,x:567.2519,y:251.617},0).wait(1).to({scaleX:0.0561,scaleY:0.0561,x:566.8829,y:250.4644},0).wait(1).to({scaleX:0.0559,scaleY:0.0559,x:566.5138,y:249.3119},0).wait(1).to({scaleX:0.0558,scaleY:0.0558,x:566.1447,y:248.1593},0).wait(1).to({scaleX:0.0557,scaleY:0.0557,x:565.7756,y:247.0068},0).wait(1).to({scaleX:0.0555,scaleY:0.0555,x:565.4065,y:245.8543},0).wait(1).to({scaleX:0.0554,scaleY:0.0554,x:565.0374,y:244.7017},0).wait(1).to({scaleX:0.0552,scaleY:0.0552,x:564.6684,y:243.5492},0).wait(1).to({scaleX:0.0551,scaleY:0.0551,x:564.2993,y:242.3966},0).wait(1).to({scaleX:0.055,scaleY:0.055,x:563.9302,y:241.2441},0).wait(1).to({scaleX:0.0548,scaleY:0.0548,x:563.5611,y:240.0916},0).wait(1).to({scaleX:0.0547,scaleY:0.0547,x:563.192,y:238.939},0).wait(1).to({scaleX:0.0545,scaleY:0.0545,x:562.823,y:237.7865},0).wait(1).to({scaleX:0.0544,scaleY:0.0544,x:562.4539,y:236.634},0).wait(1).to({scaleX:0.0543,scaleY:0.0543,x:562.0848,y:235.4814},0).wait(1).to({scaleX:0.0541,scaleY:0.0541,x:561.7157,y:234.3289},0).wait(1).to({scaleX:0.054,scaleY:0.054,x:561.3466,y:233.1763},0).wait(1).to({scaleX:0.0538,scaleY:0.0538,x:560.9775,y:232.0238},0).wait(1).to({scaleX:0.0537,scaleY:0.0537,x:560.6085,y:230.8713},0).wait(1).to({scaleX:0.0536,scaleY:0.0536,x:560.2394,y:229.7187},0).wait(1).to({scaleX:0.0534,scaleY:0.0534,x:559.8703,y:228.5662},0).wait(1).to({scaleX:0.0533,scaleY:0.0533,x:559.5012,y:227.4136},0).wait(1).to({scaleX:0.0531,scaleY:0.0531,x:559.1321,y:226.2611},0).wait(1).to({scaleX:0.053,scaleY:0.053,x:558.7631,y:225.1086},0).wait(1).to({scaleX:0.0529,scaleY:0.0529,x:558.394,y:223.956},0).wait(1).to({scaleX:0.0527,scaleY:0.0527,x:558.0249,y:222.8035},0).wait(1).to({scaleX:0.0526,scaleY:0.0526,x:557.6558,y:221.6509},0).wait(1).to({scaleX:0.0524,scaleY:0.0524,x:557.2867,y:220.4984},0).wait(1).to({scaleX:0.0523,scaleY:0.0523,x:556.9176,y:219.3459},0).wait(1).to({scaleX:0.0522,scaleY:0.0522,x:556.5486,y:218.1933},0).wait(1).to({scaleX:0.052,scaleY:0.052,x:556.1795,y:217.0408},0).wait(1).to({scaleX:0.0519,scaleY:0.0519,x:555.8104,y:215.8882},0).wait(1).to({scaleX:0.0517,scaleY:0.0517,x:555.4413,y:214.7357},0).wait(1).to({scaleX:0.0516,scaleY:0.0516,x:555.0722,y:213.5832},0).wait(1).to({scaleX:0.0515,scaleY:0.0515,x:554.7031,y:212.4306},0).wait(1).to({scaleX:0.0513,scaleY:0.0513,x:554.3341,y:211.2781},0).wait(1).to({scaleX:0.0512,scaleY:0.0512,x:553.965,y:210.1255},0).wait(1).to({scaleX:0.051,scaleY:0.051,x:553.5959,y:208.973},0).wait(1).to({scaleX:0.0509,scaleY:0.0509,x:553.2268,y:207.8205},0).wait(1).to({scaleX:0.0508,scaleY:0.0508,x:552.8577,y:206.6679},0).wait(1).to({scaleX:0.0506,scaleY:0.0506,x:552.4887,y:205.5154},0).wait(1).to({scaleX:0.0505,scaleY:0.0505,x:552.1196,y:204.3629},0).wait(1).to({scaleX:0.0503,scaleY:0.0503,x:551.7505,y:203.2103},0).wait(1).to({scaleX:0.0502,scaleY:0.0502,x:551.3814,y:202.0578},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:551.0123,y:200.9052},0).wait(1).to({scaleX:0.0499,scaleY:0.0499,x:550.6432,y:199.7527},0).wait(1).to({scaleX:0.0498,scaleY:0.0498,x:550.2742,y:198.6002},0).wait(1).to({scaleX:0.0496,scaleY:0.0496,x:549.9051,y:197.4476},0).wait(1).to({scaleX:0.0495,scaleY:0.0495,x:549.536,y:196.2951},0).wait(1).to({scaleX:0.0493,scaleY:0.0493,x:549.1669,y:195.1425},0).wait(1).to({scaleX:0.0492,scaleY:0.0492,x:548.7978,y:193.99},0).wait(1).to({scaleX:0.0491,scaleY:0.0491,x:548.4288,y:192.8375},0).wait(1).to({scaleX:0.0489,scaleY:0.0489,x:548.0597,y:191.6849},0).wait(1).to({scaleX:0.0488,scaleY:0.0488,x:547.6906,y:190.5324},0).wait(1).to({scaleX:0.0486,scaleY:0.0486,x:547.3215,y:189.3798},0).wait(1).to({scaleX:0.0485,scaleY:0.0485,x:546.9524,y:188.2273},0).wait(1).to({scaleX:0.0484,scaleY:0.0484,x:546.5833,y:187.0748},0).wait(1).to({scaleX:0.0482,scaleY:0.0482,x:546.2143,y:185.9222},0).wait(1).to({scaleX:0.0481,scaleY:0.0481,x:545.8452,y:184.7697},0).wait(1).to({scaleX:0.0479,scaleY:0.0479,x:545.4761,y:183.6171},0).wait(1).to({scaleX:0.108,scaleY:0.108,x:551.2494,y:194.8734},0).wait(1).to({scaleX:0.1681,scaleY:0.1681,x:557.0227,y:206.1296},0).wait(1).to({scaleX:0.2281,scaleY:0.2281,x:562.7961,y:217.3859},0).wait(1).to({scaleX:0.2882,scaleY:0.2882,x:568.5694,y:228.6421},0).wait(1).to({scaleX:0.3482,scaleY:0.3482,x:574.3427,y:239.8983},0).wait(1).to({scaleX:0.4083,scaleY:0.4083,x:580.116,y:251.1546},0).wait(1).to({scaleX:0.4683,scaleY:0.4683,x:585.8893,y:262.4108},0).wait(1).to({scaleX:0.5284,scaleY:0.5284,x:591.6626,y:273.6671},0).wait(1).to({scaleX:0.5884,scaleY:0.5884,x:597.436,y:284.9233},0).wait(1).to({scaleX:0.6485,scaleY:0.6485,x:603.2093,y:296.1795},0).wait(1).to({scaleX:0.7085,scaleY:0.7085,x:608.9826,y:307.4358},0).wait(1).to({scaleX:0.7686,scaleY:0.7686,x:614.7559,y:318.692},0).wait(1).to({scaleX:0.7693,scaleY:0.7693,x:614.6872,y:318.8486},0).wait(1).to({scaleX:0.7701,scaleY:0.7701,x:614.6184,y:319.0052},0).wait(1).to({scaleX:0.7708,scaleY:0.7708,x:614.5497,y:319.1618},0).wait(1).to({scaleX:0.7716,scaleY:0.7716,x:614.4809,y:319.3184},0).wait(1).to({scaleX:0.7723,scaleY:0.7723,x:614.4122,y:319.4749},0).wait(1).to({scaleX:0.7731,scaleY:0.7731,x:614.3434,y:319.6315},0).wait(1).to({scaleX:0.7738,scaleY:0.7738,x:614.2747,y:319.7881},0).wait(1).to({scaleX:0.7745,scaleY:0.7745,x:614.206,y:319.9447},0).wait(1).to({scaleX:0.7753,scaleY:0.7753,x:614.1372,y:320.1013},0).wait(1).to({scaleX:0.776,scaleY:0.776,x:614.0685,y:320.2578},0).wait(1).to({scaleX:0.7768,scaleY:0.7768,x:613.9997,y:320.4144},0).wait(1).to({scaleX:0.7775,scaleY:0.7775,x:613.931,y:320.571},0).wait(1).to({scaleX:0.7783,scaleY:0.7783,x:613.8622,y:320.7276},0).wait(1).to({scaleX:0.779,scaleY:0.779,x:613.7935,y:320.8842},0).wait(1).to({scaleX:0.7797,scaleY:0.7797,x:613.7248,y:321.0407},0).wait(1).to({scaleX:0.7805,scaleY:0.7805,x:613.656,y:321.1973},0).wait(1).to({scaleX:0.7812,scaleY:0.7812,x:613.5873,y:321.3539},0).wait(1).to({scaleX:0.782,scaleY:0.782,x:613.5185,y:321.5105},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,x:613.4498,y:321.6671},0).wait(1).to({scaleX:0.7835,scaleY:0.7835,x:613.381,y:321.8236},0).wait(1).to({scaleX:0.7842,scaleY:0.7842,x:613.3123,y:321.9802},0).wait(1).to({scaleX:0.7849,scaleY:0.7849,x:613.2436,y:322.1368},0).wait(1).to({scaleX:0.7857,scaleY:0.7857,x:613.1748,y:322.2934},0).wait(1);
	this.timeline.addTween(_tweenStr_0.to({scaleX:0.7864,scaleY:0.7864,x:613.1061,y:322.45},0).wait(1).to({scaleX:0.7872,scaleY:0.7872,x:613.0373,y:322.6065},0).wait(1).to({scaleX:0.7879,scaleY:0.7879,x:612.9686,y:322.7631},0).wait(1).to({scaleX:0.7887,scaleY:0.7887,x:612.8998,y:322.9197},0).wait(1).to({scaleX:0.7894,scaleY:0.7894,x:612.8311,y:323.0763},0).wait(1).to({scaleX:0.7901,scaleY:0.7901,x:612.7623,y:323.2329},0).wait(1).to({scaleX:0.7909,scaleY:0.7909,x:612.6936,y:323.3894},0).wait(1).to({scaleX:0.7916,scaleY:0.7916,x:612.6249,y:323.546},0).wait(1).to({scaleX:0.7924,scaleY:0.7924,x:612.5561,y:323.7026},0).wait(1).to({scaleX:0.7931,scaleY:0.7931,x:612.4874,y:323.8592},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:612.4186,y:324.0158},0).wait(1).to({scaleX:0.7946,scaleY:0.7946,x:612.3499,y:324.1723},0).wait(1).to({scaleX:0.7953,scaleY:0.7953,x:612.2811,y:324.3289},0).wait(1).to({scaleX:0.7961,scaleY:0.7961,x:612.2124,y:324.4855},0).wait(1).to({scaleX:0.7968,scaleY:0.7968,x:612.1437,y:324.6421},0).wait(1).to({scaleX:0.7976,scaleY:0.7976,x:612.0749,y:324.7987},0).wait(1).to({scaleX:0.7983,scaleY:0.7983,x:612.0062,y:324.9552},0).wait(1).to({scaleX:0.7991,scaleY:0.7991,x:611.9374,y:325.1118},0).wait(1).to({scaleX:0.7998,scaleY:0.7998,x:611.8687,y:325.2684},0).wait(1).to({scaleX:0.8005,scaleY:0.8005,x:611.7999,y:325.425},0).wait(1).to({scaleX:0.8013,scaleY:0.8013,x:611.7312,y:325.5816},0).wait(1).to({scaleX:0.802,scaleY:0.802,x:611.6625,y:325.7381},0).wait(1).to({scaleX:0.8028,scaleY:0.8028,x:611.5937,y:325.8947},0).wait(1).to({scaleX:0.8035,scaleY:0.8035,x:611.525,y:326.0513},0).wait(1).to({scaleX:0.8043,scaleY:0.8043,x:611.4562,y:326.2079},0).wait(1).to({scaleX:0.805,scaleY:0.805,x:611.3875,y:326.3645},0).wait(1).to({scaleX:0.8057,scaleY:0.8057,x:611.3187,y:326.521},0).wait(1).to({scaleX:0.8065,scaleY:0.8065,x:611.25,y:326.6776},0).wait(1).to({scaleX:0.7972,scaleY:0.7972,x:611.9081,y:383.0079},0).wait(1).to({scaleX:0.7879,scaleY:0.7879,x:612.5661,y:439.3382},0).wait(1).to({scaleX:0.7785,scaleY:0.7785,x:613.2242,y:495.6685},0).wait(1).to({scaleX:0.7692,scaleY:0.7692,x:613.8823,y:551.9988},0).wait(1).to({scaleX:0.7599,scaleY:0.7599,x:614.5403,y:608.329},0).wait(1).to({scaleX:0.7506,scaleY:0.7506,x:615.1984,y:664.6593},0).wait(1).to({scaleX:0.7413,scaleY:0.7413,x:615.8565,y:720.9896},0).wait(1).to({scaleX:0.7319,scaleY:0.7319,x:616.5145,y:777.3199},0).wait(1).to({scaleX:0.7226,scaleY:0.7226,x:617.1726,y:833.6502},0).wait(1).to({scaleX:0.7133,scaleY:0.7133,x:617.8307,y:889.9805},0).wait(1).to({scaleX:0.704,scaleY:0.704,x:618.4887,y:946.3108},0).wait(1).to({scaleX:0.6947,scaleY:0.6947,x:619.1468,y:1002.641},0).wait(1).to({scaleX:0.6854,scaleY:0.6854,x:619.8049,y:1058.9713},0).wait(1).to({scaleX:0.676,scaleY:0.676,x:620.4629,y:1115.3016},0).wait(1).to({scaleX:0.6667,scaleY:0.6667,x:621.121,y:1171.6319},0).wait(1).to({scaleX:0.6574,scaleY:0.6574,x:621.7791,y:1227.9622},0).wait(1).to({scaleX:0.6481,scaleY:0.6481,x:622.4371,y:1284.2925},0).wait(1).to({scaleX:0.6388,scaleY:0.6388,x:623.0952,y:1340.6227},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6295,scaleY:0.6295,x:622.6622,y:1580.9891},0).wait(1).to({x:621.5745,y:1765.0783},0).wait(1).to({x:620.4867,y:1949.1675},0).wait(1).to({x:619.3989,y:2133.2566},0).wait(1).to({x:618.3112,y:2317.3458},0).wait(1).to({x:617.2234,y:2501.435},0).wait(1).to({x:616.1356,y:2685.5241},0).wait(1).to({x:615.0479,y:2869.6133},0).wait(1).to({x:613.9601,y:3053.7025},0).wait(1).to({x:612.8723,y:3237.7916},0).wait(1).to({x:611.7846,y:3421.8808},0).wait(1).to({x:610.6968,y:3605.97},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6295,scaleY:0.6295,x:622.6622,y:1580.9891},0).wait(1).to({x:621.5745,y:1765.0783},0).wait(1).to({x:620.4867,y:1949.1675},0).wait(1).to({x:619.3989,y:2133.2566},0).wait(1).to({x:618.3112,y:2317.3458},0).wait(1).to({x:617.2234,y:2501.435},0).wait(1).to({x:616.1356,y:2685.5241},0).wait(1).to({x:615.0479,y:2869.6133},0).wait(1).to({x:613.9601,y:3053.7025},0).wait(1).to({x:612.8723,y:3237.7916},0).wait(1).to({x:611.7846,y:3421.8808},0).wait(1).to({x:610.6968,y:3605.97},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6295,scaleY:0.6295,x:622.6622,y:1580.9891},0).wait(1).to({x:621.5745,y:1765.0783},0).wait(1).to({x:620.4867,y:1949.1675},0).wait(1).to({x:619.3989,y:2133.2566},0).wait(1).to({x:618.3112,y:2317.3458},0).wait(1).to({x:617.2234,y:2501.435},0).wait(1).to({x:616.1356,y:2685.5241},0).wait(1).to({x:615.0479,y:2869.6133},0).wait(1).to({x:613.9601,y:3053.7025},0).wait(1).to({x:612.8723,y:3237.7916},0).wait(1).to({x:611.7846,y:3421.8808},0).wait(1).to({x:610.6968,y:3605.97},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6295,scaleY:0.6295,x:622.6622,y:1580.9891},0).wait(1).to({x:621.5745,y:1765.0783},0).wait(1).to({x:620.4867,y:1949.1675},0).wait(1).to({x:619.3989,y:2133.2566},0).wait(1).to({x:618.3112,y:2317.3458},0).wait(1).to({x:617.2234,y:2501.435},0).wait(1).to({x:616.1356,y:2685.5241},0).wait(1).to({x:615.0479,y:2869.6133},0).wait(1).to({x:613.9601,y:3053.7025},0).wait(1).to({x:612.8723,y:3237.7916},0).wait(1).to({x:611.7846,y:3421.8808},0).wait(1).to({x:610.6968,y:3605.97},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6295,scaleY:0.6295,x:621.8853,y:1712.4814},0).wait(1).to({x:620.0205,y:2028.0628},0).wait(1).to({x:618.1558,y:2343.6443},0).wait(1).to({x:616.291,y:2659.2257},0).wait(1).to({x:614.4263,y:2974.8071},0).wait(1).to({x:612.5615,y:3290.3886},0).wait(1).to({x:610.6968,y:3605.97},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6277,scaleY:0.6277,x:621.0354,y:1472.2314},0).wait(1).to({scaleX:0.626,scaleY:0.626,x:618.3209,y:1547.5628},0).wait(1).to({scaleX:0.6243,scaleY:0.6243,x:615.6063,y:1622.8942},0).wait(1).to({scaleX:0.6226,scaleY:0.6226,x:612.8918,y:1698.2256},0).wait(1).to({scaleX:0.6209,scaleY:0.6209,x:610.1772,y:1773.557},0).wait(1).to({scaleX:0.6192,scaleY:0.6192,x:607.4627,y:1848.8884},0).wait(1).to({scaleX:0.6175,scaleY:0.6175,x:604.7481,y:1924.2198},0).wait(1).to({scaleX:0.6158,scaleY:0.6158,x:603.5178,y:1964.397},0).wait(1).to({scaleX:0.6141,scaleY:0.6141,x:602.2876,y:2004.5742},0).wait(1).to({scaleX:0.6124,scaleY:0.6124,x:601.0573,y:2044.7514},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:599.8271,y:2084.9286},0).wait(1).to({scaleX:0.609,scaleY:0.609,x:598.5968,y:2125.1058},0).wait(1).to({scaleX:0.6073,scaleY:0.6073,x:599.0269,y:2129.5957},0).wait(1).to({scaleX:0.6056,scaleY:0.6056,x:599.457,y:2134.0857},0).wait(1).to({scaleX:0.6039,scaleY:0.6039,x:599.8872,y:2138.5757},0).wait(1).to({scaleX:0.6022,scaleY:0.6022,x:600.3173,y:2143.0657},0).wait(1).to({scaleX:0.6005,scaleY:0.6005,x:600.7474,y:2147.5557},0).wait(1).to({scaleX:0.5988,scaleY:0.5988,x:601.1775,y:2152.0456},0).wait(1).to({scaleX:0.5971,scaleY:0.5971,x:601.6076,y:2156.5356},0).wait(1).to({scaleX:0.5954,scaleY:0.5954,x:602.0377,y:2161.0256},0).wait(1).to({scaleX:0.5937,scaleY:0.5937,x:602.4679,y:2165.5156},0).wait(1).to({scaleX:0.592,scaleY:0.592,x:602.898,y:2170.0056},0).wait(1).to({scaleX:0.5903,scaleY:0.5903,x:603.3281,y:2174.4955},0).wait(1).to({scaleX:0.5886,scaleY:0.5886,x:603.49,y:2173.6582},0).wait(1).to({scaleX:0.5869,scaleY:0.5869,x:603.652,y:2172.8209},0).wait(1).to({scaleX:0.5852,scaleY:0.5852,x:603.8139,y:2171.9836},0).wait(1).to({scaleX:0.5835,scaleY:0.5835,x:603.9759,y:2171.1463},0).wait(1).to({scaleX:0.5818,scaleY:0.5818,x:604.1378,y:2170.3089},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:604.2997,y:2169.4716},0).wait(1).to({scaleX:0.5783,scaleY:0.5783,x:604.4617,y:2168.6343},0).wait(1).to({scaleX:0.5766,scaleY:0.5766,x:604.6236,y:2167.797},0).wait(1).to({scaleX:0.5749,scaleY:0.5749,x:604.7856,y:2166.9596},0).wait(1).to({scaleX:0.5732,scaleY:0.5732,x:604.9475,y:2166.1223},0).wait(1).to({scaleX:0.5715,scaleY:0.5715,x:605.1095,y:2165.285},0).wait(1).to({scaleX:0.5698,scaleY:0.5698,x:605.2714,y:2164.4477},0).wait(1).to({scaleX:0.5681,scaleY:0.5681,x:605.4333,y:2163.6104},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:605.5953,y:2162.773},0).wait(1).to({scaleX:0.5647,scaleY:0.5647,x:605.7572,y:2161.9357},0).wait(1).to({scaleX:0.563,scaleY:0.563,x:605.9192,y:2161.0984},0).wait(1).to({scaleX:0.5613,scaleY:0.5613,x:606.0811,y:2160.2611},0).wait(1).to({scaleX:0.5596,scaleY:0.5596,x:606.243,y:2159.4237},0).wait(1).to({scaleX:0.5579,scaleY:0.5579,x:606.405,y:2158.5864},0).wait(1).to({scaleX:0.5562,scaleY:0.5562,x:606.5669,y:2157.7491},0).wait(1).to({scaleX:0.5545,scaleY:0.5545,x:606.7289,y:2156.9118},0).wait(1).to({scaleX:0.5528,scaleY:0.5528,x:606.8908,y:2156.0745},0).wait(1).to({scaleX:0.5511,scaleY:0.5511,x:607.0527,y:2155.2371},0).wait(1).to({scaleX:0.5494,scaleY:0.5494,x:607.2147,y:2154.3998},0).wait(1).to({scaleX:0.5477,scaleY:0.5477,x:607.3766,y:2153.5625},0).wait(1).to({scaleX:0.546,scaleY:0.546,x:607.5386,y:2152.7252},0).wait(1).to({scaleX:0.5443,scaleY:0.5443,x:607.7005,y:2151.8878},0).wait(1).to({scaleX:0.5426,scaleY:0.5426,x:607.8625,y:2151.0505},0).wait(1).to({scaleX:0.5409,scaleY:0.5409,x:608.0244,y:2150.2132},0).wait(1).to({scaleX:0.5392,scaleY:0.5392,x:608.1863,y:2149.3759},0).wait(1).to({scaleX:0.5375,scaleY:0.5375,x:608.3483,y:2148.5386},0).wait(1).to({scaleX:0.5358,scaleY:0.5358,x:608.5102,y:2147.7012},0).wait(1).to({scaleX:0.5341,scaleY:0.5341,x:608.6722,y:2146.8639},0).wait(1).to({scaleX:0.5324,scaleY:0.5324,x:608.8341,y:2146.0266},0).wait(1).to({scaleX:0.5306,scaleY:0.5306,x:608.996,y:2145.1893},0).wait(1).to({scaleX:0.5289,scaleY:0.5289,x:609.158,y:2144.3519},0).wait(1).to({scaleX:0.5272,scaleY:0.5272,x:609.3199,y:2143.5146},0).wait(1).to({scaleX:0.5255,scaleY:0.5255,x:609.4819,y:2142.6773},0).wait(1).to({scaleX:0.5238,scaleY:0.5238,x:609.6438,y:2141.84},0).wait(1).to({scaleX:0.5221,scaleY:0.5221,x:609.8057,y:2141.0027},0).wait(1).to({scaleX:0.5204,scaleY:0.5204,x:609.9677,y:2140.1653},0).wait(1).to({scaleX:0.5187,scaleY:0.5187,x:610.1296,y:2139.328},0).wait(1).to({scaleX:0.517,scaleY:0.517,x:610.2916,y:2138.4907},0).wait(1).to({scaleX:0.5153,scaleY:0.5153,x:610.4535,y:2137.6534},0).wait(1).to({scaleX:0.5136,scaleY:0.5136,x:610.6154,y:2136.816},0).wait(1).to({scaleX:0.5119,scaleY:0.5119,x:610.7774,y:2135.9787},0).wait(1).to({scaleX:0.5102,scaleY:0.5102,x:610.9393,y:2135.1414},0).wait(1).to({scaleX:0.5085,scaleY:0.5085,x:611.1013,y:2134.3041},0).wait(1).to({scaleX:0.5068,scaleY:0.5068,x:611.2632,y:2133.4667},0).wait(1).to({scaleX:0.5051,scaleY:0.5051,x:611.4252,y:2132.6294},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:611.5871,y:2131.7921},0).wait(1).to({scaleX:0.5017,scaleY:0.5017,x:611.749,y:2130.9548},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:611.911,y:2130.1175},0).wait(1).to({scaleX:0.4983,scaleY:0.4983,x:612.0729,y:2129.2801},0).wait(1).to({scaleX:0.4966,scaleY:0.4966,x:612.2349,y:2128.4428},0).wait(1).to({scaleX:0.4949,scaleY:0.4949,x:612.3968,y:2127.6055},0).wait(1).to({scaleX:0.8949,scaleY:0.8949,x:672.8968,y:832.9554},0).wait(1).to({scaleX:0.8868,scaleY:0.8868,x:671.4754,y:833.784},0).wait(1).to({scaleX:0.8786,scaleY:0.8786,x:670.0539,y:834.6126},0).wait(1).to({scaleX:0.8704,scaleY:0.8704,x:668.6325,y:835.4411},0).wait(1).to({scaleX:0.8623,scaleY:0.8623,x:667.2111,y:836.2697},0).wait(1).to({scaleX:0.8541,scaleY:0.8541,x:665.7897,y:837.0982},0).wait(1).to({scaleX:0.846,scaleY:0.846,x:664.3682,y:837.9268},0).wait(1).to({scaleX:0.8378,scaleY:0.8378,x:662.9468,y:838.7554},0).wait(32).to({scaleX:0.8237,scaleY:0.8237,x:655.9801,y:981.0189},0).wait(1).to({scaleX:0.8096,scaleY:0.8096,x:649.0135,y:1123.2825},0).wait(1).to({scaleX:0.7955,scaleY:0.7955,x:642.0468,y:1265.5461},0).wait(1).to({scaleX:0.7814,scaleY:0.7814,x:635.0801,y:1407.8097},0).wait(1).to({scaleX:0.7673,scaleY:0.7673,x:628.1135,y:1550.0733},0).wait(1).to({scaleX:0.7532,scaleY:0.7532,x:621.1468,y:1692.3368},0).wait(1).to({scaleX:0.739,scaleY:0.739,x:614.1801,y:1834.6004},0).wait(1).to({scaleX:0.7249,scaleY:0.7249,x:607.2135,y:1976.864},0).wait(1).to({scaleX:0.7108,scaleY:0.7108,x:600.2468,y:2119.1276},0).wait(1).to({scaleX:0.6967,scaleY:0.6967,x:593.2801,y:2261.3911},0).wait(1).to({scaleX:0.6826,scaleY:0.6826,x:586.3135,y:2403.6547},0).wait(1).to({scaleX:0.6685,scaleY:0.6685,x:579.3468,y:2545.9183},0).wait(1).to({scaleX:0.6544,scaleY:0.6544,x:572.3801,y:2688.1819},0).wait(1).to({scaleX:0.6403,scaleY:0.6403,x:565.4135,y:2830.4455},0).wait(1).to({scaleX:0.6262,scaleY:0.6262,x:558.4468,y:2972.709},0).wait(1).to({scaleX:0.6121,scaleY:0.6121,x:551.4801,y:3114.9726},0).wait(1).to({scaleX:0.598,scaleY:0.598,x:544.5135,y:3257.2362},0).wait(1).to({scaleX:0.5839,scaleY:0.5839,x:537.5468,y:3399.4998},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6295,scaleY:0.6295,x:622.6622,y:1580.9891},0).wait(1).to({x:621.5745,y:1765.0783},0).wait(1).to({x:620.4867,y:1949.1675},0).wait(1).to({x:619.3989,y:2133.2566},0).wait(1).to({x:618.3112,y:2317.3458},0).wait(1).to({x:617.2234,y:2501.435},0).wait(1).to({x:616.1356,y:2685.5241},0).wait(1).to({x:615.0479,y:2869.6133},0).wait(1).to({x:613.9601,y:3053.7025},0).wait(1).to({x:612.8723,y:3237.7916},0).wait(1).to({x:611.7846,y:3421.8808},0).wait(1).to({x:610.6968,y:3605.97},0).wait(1).to({regY:1.8,scaleX:0.6294,scaleY:0.6294,x:623.75,y:1398.05},0).wait(1).to({regY:0,scaleX:0.6408,scaleY:0.6408,x:622.3622,y:1552.9442},0).wait(1).to({scaleX:0.6522,scaleY:0.6522,x:620.9745,y:1708.9885},0).wait(1).to({scaleX:0.6636,scaleY:0.6636,x:619.5867,y:1865.0327},0).wait(1).to({scaleX:0.675,scaleY:0.675,x:618.1989,y:2021.077},0).wait(1).to({scaleX:0.6864,scaleY:0.6864,x:616.8112,y:2177.1212},0).wait(1).to({scaleX:0.6977,scaleY:0.6977,x:615.4234,y:2333.1655},0).wait(1).to({scaleX:0.7091,scaleY:0.7091,x:614.0356,y:2489.2097},0).wait(1).to({scaleX:0.7205,scaleY:0.7205,x:612.6479,y:2645.254},0).wait(1).to({scaleX:0.7319,scaleY:0.7319,x:611.2601,y:2801.2982},0).wait(1).to({scaleX:0.7433,scaleY:0.7433,x:609.8723,y:2957.3425},0).wait(1).to({scaleX:0.7546,scaleY:0.7546,x:608.4846,y:3113.3867},0).wait(1).to({scaleX:0.766,scaleY:0.766,x:607.0968,y:3269.431},0).wait(95).to({scaleX:0.7602,scaleY:0.7602,x:666.2468,y:831.8412},0).wait(1).to({scaleX:0.5733,scaleY:0.5733,x:800.2469,y:835.9683},0).wait(1).to({scaleX:0.3864,scaleY:0.3864,x:934.247,y:840.0954},0).wait(1).to({scaleX:0.3877,scaleY:0.3877,x:934.4456,y:839.6112},0).wait(1).to({scaleX:0.389,scaleY:0.389,x:934.6441,y:839.1271},0).wait(1).to({scaleX:0.3903,scaleY:0.3903,x:934.8427,y:838.6429},0).wait(1).to({scaleX:0.3915,scaleY:0.3915,x:935.0412,y:838.1588},0).wait(1).to({scaleX:0.3928,scaleY:0.3928,x:935.2398,y:837.6746},0).wait(1).to({scaleX:0.3941,scaleY:0.3941,x:935.4383,y:837.1905},0).wait(1).to({scaleX:0.3954,scaleY:0.3954,x:935.6369,y:836.7064},0).wait(1).to({scaleX:0.3967,scaleY:0.3967,x:935.8354,y:836.2222},0).wait(1).to({scaleX:0.398,scaleY:0.398,x:936.034,y:835.7381},0).wait(1).to({scaleX:0.3993,scaleY:0.3993,x:936.2325,y:835.2539},0).wait(1).to({scaleX:0.4006,scaleY:0.4006,x:936.4311,y:834.7698},0).wait(1).to({scaleX:0.4019,scaleY:0.4019,x:936.6296,y:834.2856},0).wait(1).to({scaleX:0.4032,scaleY:0.4032,x:936.8282,y:833.8015},0).wait(1).to({scaleX:0.4045,scaleY:0.4045,x:937.0267,y:833.3174},0).wait(1).to({scaleX:0.4057,scaleY:0.4057,x:937.2253,y:832.8332},0).wait(1).to({scaleX:0.407,scaleY:0.407,x:937.4238,y:832.3491},0).wait(1).to({scaleX:0.4083,scaleY:0.4083,x:937.6224,y:831.8649},0).wait(1).to({scaleX:0.4096,scaleY:0.4096,x:937.8209,y:831.3808},0).wait(1).to({scaleX:0.4109,scaleY:0.4109,x:938.0195,y:830.8966},0).wait(1).to({scaleX:0.4122,scaleY:0.4122,x:938.218,y:830.4125},0).wait(1).to({scaleX:0.4135,scaleY:0.4135,x:938.4166,y:829.9284},0).wait(1).to({scaleX:0.4148,scaleY:0.4148,x:938.6151,y:829.4442},0).wait(1).to({scaleX:0.4161,scaleY:0.4161,x:938.8137,y:828.9601},0).wait(1).to({scaleX:0.4174,scaleY:0.4174,x:939.0122,y:828.4759},0).wait(1).to({scaleX:0.4186,scaleY:0.4186,x:939.2108,y:827.9918},0).wait(1).to({scaleX:0.4199,scaleY:0.4199,x:939.4093,y:827.5076},0).wait(1).to({scaleX:0.4212,scaleY:0.4212,x:939.6079,y:827.0235},0).wait(1).to({scaleX:0.4225,scaleY:0.4225,x:939.8064,y:826.5394},0).wait(1).to({scaleX:0.4238,scaleY:0.4238,x:940.005,y:826.0552},0).wait(1).to({scaleX:0.4251,scaleY:0.4251,x:940.2035,y:825.5711},0).wait(1).to({scaleX:0.4264,scaleY:0.4264,x:940.4021,y:825.0869},0).wait(1).to({scaleX:0.4277,scaleY:0.4277,x:940.6006,y:824.6028},0).wait(1).to({scaleX:0.429,scaleY:0.429,x:940.7992,y:824.1186},0).wait(1).to({scaleX:0.4303,scaleY:0.4303,x:940.9977,y:823.6345},0).wait(1).to({scaleX:0.4316,scaleY:0.4316,x:941.1963,y:823.1504},0).wait(1).to({scaleX:0.4328,scaleY:0.4328,x:941.3948,y:822.6662},0).wait(1).to({scaleX:0.4341,scaleY:0.4341,x:941.5934,y:822.1821},0).wait(1).to({scaleX:0.4354,scaleY:0.4354,x:941.7919,y:821.6979},0).wait(1).to({scaleX:0.4367,scaleY:0.4367,x:941.9905,y:821.2138},0).wait(1).to({scaleX:0.438,scaleY:0.438,x:942.189,y:820.7296},0).wait(1).to({scaleX:0.4393,scaleY:0.4393,x:942.3876,y:820.2455},0).wait(1).to({scaleX:0.4406,scaleY:0.4406,x:942.5861,y:819.7614},0).wait(1).to({scaleX:0.4419,scaleY:0.4419,x:942.7847,y:819.2772},0).wait(1).to({scaleX:0.4432,scaleY:0.4432,x:942.9832,y:818.7931},0).wait(1).to({scaleX:0.4445,scaleY:0.4445,x:943.1818,y:818.3089},0).wait(1).to({scaleX:0.4457,scaleY:0.4457,x:943.3803,y:817.8248},0).wait(1).to({scaleX:0.447,scaleY:0.447,x:943.5789,y:817.3406},0).wait(1).to({scaleX:0.4483,scaleY:0.4483,x:943.7774,y:816.8565},0).wait(1).to({scaleX:0.4496,scaleY:0.4496,x:943.976,y:816.3724},0).wait(1).to({scaleX:0.4509,scaleY:0.4509,x:944.1745,y:815.8882},0).wait(1).to({scaleX:0.4522,scaleY:0.4522,x:944.3731,y:815.4041},0).wait(1).to({scaleX:0.4535,scaleY:0.4535,x:944.5716,y:814.9199},0).wait(1).to({scaleX:0.4548,scaleY:0.4548,x:944.7702,y:814.4358},0).wait(1).to({scaleX:0.4561,scaleY:0.4561,x:944.9687,y:813.9517},0).wait(1).to({scaleX:0.4574,scaleY:0.4574,x:945.1673,y:813.4675},0).wait(1).to({scaleX:0.4587,scaleY:0.4587,x:945.3658,y:812.9834},0).wait(1).to({scaleX:0.4599,scaleY:0.4599,x:945.5644,y:812.4992},0).wait(1).to({scaleX:0.4612,scaleY:0.4612,x:945.7629,y:812.0151},0).wait(1).to({scaleX:0.4625,scaleY:0.4625,x:945.9615,y:811.5309},0).wait(1).to({scaleX:0.4638,scaleY:0.4638,x:946.16,y:811.0468},0).wait(1).to({scaleX:0.4651,scaleY:0.4651,x:946.3586,y:810.5627},0).wait(1).to({scaleX:0.4664,scaleY:0.4664,x:946.5571,y:810.0785},0).wait(1).to({scaleX:0.4677,scaleY:0.4677,x:946.7557,y:809.5944},0).wait(1).to({scaleX:0.469,scaleY:0.469,x:946.9542,y:809.1102},0).wait(1).to({scaleX:0.4703,scaleY:0.4703,x:947.1528,y:808.6261},0).wait(1).to({scaleX:0.4716,scaleY:0.4716,x:947.3513,y:808.1419},0).wait(1).to({scaleX:0.4729,scaleY:0.4729,x:947.5499,y:807.6578},0).wait(1).to({scaleX:0.4741,scaleY:0.4741,x:947.7484,y:807.1737},0).wait(1).to({scaleX:0.4754,scaleY:0.4754,x:947.947,y:806.6895},0).to({_off:true},1).wait(1166));

	// Peridotreal_obj_
	this.Peridotreal = new lib.Scene_1_Peridotreal();
	this.Peridotreal.name = "Peridotreal";
	this.Peridotreal.setTransform(0.9,0,17.2327,17.2327,0,0,0,691.4,330.1);
	this.Peridotreal.depth = 0;
	this.Peridotreal.isAttachedToCamera = 0
	this.Peridotreal.isAttachedToMask = 0
	this.Peridotreal.layerDepth = 0
	this.Peridotreal.layerIndex = 0
	this.Peridotreal.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Peridotreal).wait(834).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},0).wait(1166));

	// Peridot_obj_
	this.Peridot = new lib.Scene_1_Peridot();
	this.Peridot.name = "Peridot";
	this.Peridot.setTransform(0.9,0,17.2327,17.2327,0,0,0,691.4,330.1);
	this.Peridot.depth = 0;
	this.Peridot.isAttachedToCamera = 0
	this.Peridot.isAttachedToMask = 0
	this.Peridot.layerDepth = 0
	this.Peridot.layerIndex = 1
	this.Peridot.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Peridot).wait(764).to({regX:686.9,regY:701,scaleX:2.5883,scaleY:2.5883,x:0},0).wait(1).to({regX:939.7,regY:842.6,scaleX:1,scaleY:1,x:252.85,y:141.65},0).wait(68).to({_off:true},1).wait(1166));

	// Fade_to_White_obj_
	this.Fade_to_White = new lib.Scene_1_Fade_to_White();
	this.Fade_to_White.name = "Fade_to_White";
	this.Fade_to_White.setTransform(0.9,0,17.2327,17.2327,0,0,0,691.4,330.1);
	this.Fade_to_White.depth = 0;
	this.Fade_to_White.isAttachedToCamera = 0
	this.Fade_to_White.isAttachedToMask = 0
	this.Fade_to_White.layerDepth = 0
	this.Fade_to_White.layerIndex = 2
	this.Fade_to_White.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Fade_to_White).wait(694).to({regX:116.8,regY:2993.7,scaleX:1.3055,scaleY:1.3055,x:0,y:0.05},0).wait(68).to({regX:179.7,regY:558.2,scaleX:1.3155,scaleY:1.3155,x:0.05,y:0},0).wait(1).to({regX:433.3,regY:629.6,scaleX:1.7444,scaleY:1.7444,x:0,y:-0.1},0).to({_off:true},1).wait(1236));

	// Elrenk_obj_
	this.Elrenk = new lib.Scene_1_Elrenk();
	this.Elrenk.name = "Elrenk";
	this.Elrenk.setTransform(659.2,553.2,17.2327,17.2327,0,0,0,729.6,362.2);
	this.Elrenk.depth = 0;
	this.Elrenk.isAttachedToCamera = 0
	this.Elrenk.isAttachedToMask = 0
	this.Elrenk.layerDepth = 0
	this.Elrenk.layerIndex = 3
	this.Elrenk.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Elrenk).wait(426).to({regX:625.6,regY:482.1,scaleX:1.24,scaleY:1.24,x:658.05,y:552.95},0).wait(159).to({regX:689.1,regY:1005.6,scaleX:1.1174,scaleY:1.1174,x:658.15,y:552.9},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:576.7,y:1652.05},0).wait(56).to({regX:635.1,regY:1518.4,scaleX:1.5887,scaleY:1.5887,x:658.05,y:553},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:630.55,y:1139.35},0).wait(12).to({regX:635.1,regY:1518.4,scaleX:1.5887,scaleY:1.5887,x:658.05,y:553},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:630.55,y:1139.35},0).wait(16).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(2).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(8).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(11).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(11).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(11).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(11).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(11).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(11).to({regX:621,regY:3417.2,scaleX:1.3055,scaleY:1.3055,x:658.2,y:552.95},0).wait(1).to({regX:607.6,regY:2104.7,scaleX:1,scaleY:1,x:644.75,y:-759.55},0).wait(8).to({_off:true},1).wait(1236));

	// Caink_obj_
	this.Caink = new lib.Scene_1_Caink();
	this.Caink.name = "Caink";
	this.Caink.setTransform(554.05,120.65,17.2327,17.2327,0,0,0,723.5,337.1);
	this.Caink.depth = 0;
	this.Caink.isAttachedToCamera = 0
	this.Caink.isAttachedToMask = 0
	this.Caink.layerDepth = 0
	this.Caink.layerIndex = 4
	this.Caink.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Caink).wait(426).to({regX:541.4,regY:132.8,scaleX:1.24,scaleY:1.24,x:553.6,y:119.8},0).wait(159).to({regX:595.5,regY:618,scaleX:1.1174,scaleY:1.1174,x:553.55},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:538.1,y:1402.55},0).wait(56).to({regX:569.4,regY:1245.7,scaleX:1.5887,scaleY:1.5887,x:553.7,y:119.75},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:564.3,y:774.8},0).wait(12).to({regX:569.4,regY:1245.7,scaleX:1.5887,scaleY:1.5887,x:553.7,y:119.75},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:564.3,y:774.8},0).wait(16).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(2).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(8).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(11).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(11).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(11).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(11).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(11).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(11).to({regX:540.9,regY:3085.3,scaleX:1.3055,scaleY:1.3055,x:553.65,y:119.65},0).wait(1).to({regX:580,regY:1900.7,scaleX:1,scaleY:1,x:592.7,y:-1064.9},0).wait(8).to({_off:true},1).wait(1236));

	// Peridotk_obj_
	this.Peridotk = new lib.Scene_1_Peridotk();
	this.Peridotk.name = "Peridotk";
	this.Peridotk.setTransform(304.2,375.7,17.2327,17.2327,0,0,0,709,351.9);
	this.Peridotk.depth = 0;
	this.Peridotk.isAttachedToCamera = 0
	this.Peridotk.isAttachedToMask = 0
	this.Peridotk.layerDepth = 0
	this.Peridotk.layerIndex = 5
	this.Peridotk.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Peridotk).wait(426).to({regX:339.6,regY:339.4,scaleX:1.24,scaleY:1.24,x:303.4,y:376},0).wait(159).to({regX:371.6,regY:847.3,scaleX:1.1174,scaleY:1.1174,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:504.9,y:1542.95},0).wait(56).to({regX:411.8,regY:1407,scaleX:1.5887,scaleY:1.5887,x:303.3,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:464.65,y:983.25},0).wait(12).to({regX:411.8,regY:1407,scaleX:1.5887,scaleY:1.5887,x:303.3,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:464.65,y:983.25},0).wait(16).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(2).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(8).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(11).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(11).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(11).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(11).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(11).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(11).to({regX:349.2,regY:3281.7,scaleX:1.3055,scaleY:1.3055,x:303.35,y:376.05},0).wait(1).to({regX:573.1,regY:2014.2,scaleX:1,scaleY:1,x:527.3,y:-891.45},0).wait(8).to({_off:true},1).wait(1236));

	// Iterationk_obj_
	this.Iterationk = new lib.Scene_1_Iterationk();
	this.Iterationk.name = "Iterationk";
	this.Iterationk.setTransform(909.05,332.6,17.2327,17.2327,0,0,0,744.1,349.4);
	this.Iterationk.depth = 0;
	this.Iterationk.isAttachedToCamera = 0
	this.Iterationk.isAttachedToMask = 0
	this.Iterationk.layerDepth = 0
	this.Iterationk.layerIndex = 6
	this.Iterationk.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Iterationk).wait(426).to({regX:828.5,regY:304.8,scaleX:1.24,scaleY:1.24,x:909.6,y:333.1},0).wait(159).to({regX:914.1,regY:808.9,scaleX:1.1174,scaleY:1.1174,y:333.15},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:684.1,y:1537.35},0).wait(56).to({regX:793.4,regY:1380,scaleX:1.5887,scaleY:1.5887,x:909.55,y:333.15},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:804.75,y:966.25},0).wait(12).to({regX:793.4,regY:1380,scaleX:1.5887,scaleY:1.5887,x:909.55,y:333.15},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:804.75,y:966.25},0).wait(16).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(2).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(8).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(11).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(11).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(11).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(11).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(11).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(11).to({regX:813.6,regY:3248.8,scaleX:1.3055,scaleY:1.3055,x:909.65,y:333.1},0).wait(1).to({regX:688.6,regY:2013.1,scaleX:1,scaleY:1,x:784.6,y:-902.6},0).wait(8).to({_off:true},1).wait(1236));

	// big_dad_obj_
	this.big_dad = new lib.Scene_1_big_dad();
	this.big_dad.name = "big_dad";
	this.big_dad.setTransform(0.9,0,17.2327,17.2327,0,0,0,691.4,330.1);
	this.big_dad.depth = 0;
	this.big_dad.isAttachedToCamera = 0
	this.big_dad.isAttachedToMask = 0
	this.big_dad.layerDepth = 0
	this.big_dad.layerIndex = 7
	this.big_dad.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.big_dad).wait(445).to({regX:220.8,regY:1170.3,scaleX:1.5887,scaleY:1.5887,x:-0.1},0).wait(172).to({regX:126.7,regY:537.1,scaleX:1.1936,scaleY:1.1936,x:0.05,y:-0.05},0).wait(24).to({regX:163.8,regY:3189.3,scaleX:1.7128,scaleY:1.7128,x:-0.05},0).wait(14).to({regX:220.8,regY:1170.3,scaleX:1.5887,scaleY:1.5887,x:-0.1,y:0},0).wait(1345));

	// Back_obj_
	this.Back = new lib.Scene_1_Back();
	this.Back.name = "Back";
	this.Back.setTransform(624.7,360.2,17.2327,17.2327,0,0,0,727.6,351);
	this.Back.depth = 0;
	this.Back.isAttachedToCamera = 0
	this.Back.isAttachedToMask = 0
	this.Back.layerDepth = 0
	this.Back.layerIndex = 8
	this.Back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Back).wait(426).to({regX:599,regY:326.5,scaleX:1.24,scaleY:1.24,x:625.05,y:360},0).wait(19).to({regX:614.3,regY:1396.9,scaleX:1.5887,scaleY:1.5887},0).wait(140).to({regX:659.4,regY:833,scaleX:1.1174,scaleY:1.1174,x:624.95,y:360.05},0).wait(1415));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(442.9,131.8,970.6,3843.8999999999996);
// library properties:
lib.properties = {
	id: '33DB72FBA321164492581B8A1F00B812',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Shadow Selves_atlas_1.png", id:"Shadow Selves_atlas_1"},
		{src:"sounds/BlackMod.mp3", id:"BlackMod"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['33DB72FBA321164492581B8A1F00B812'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;