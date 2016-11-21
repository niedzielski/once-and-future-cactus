!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):b(a.src=a.src||{})}(this,function(a){"use strict";var b=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},c=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),d=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b},e=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},f=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;if(void 0!==g)return g.call(d)},g=function(a){function g(a,c){b(this,g);var e=d(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,a));return e._game=a,e._scene=c,e}return e(g,a),c(g,[{key:"preload",value:function(a){var b=this;f(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"preload",this).call(this,a),a.time.advancedTiming=!0,this._scene.preload(a),Phaser.Canvas.setImageRenderingCrisp(a.canvas),window.addEventListener("resize",function(){return b.onWindowResize()}),this.onWindowResize()}},{key:"create",value:function(a){f(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"create",this).call(this,a),this._scene.create(a)}},{key:"update",value:function(a){f(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"update",this).call(this,a),this._scene.update(a)}},{key:"render",value:function(a){f(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"render",this).call(this,a);var b=0,c=15;a.debug.text(a.time.fps,b,c,"#00ff00")}},{key:"onWindowResize",value:function(){console.log("onWindowResize"),this._scaleWorldToSceneHeight(),this._game.scale.setGameSize(window.innerWidth,window.innerHeight),this._resizeCameraBounds()}},{key:"_scaleWorldToSceneHeight",value:function(){var a=window.innerHeight/this._scene.height();this._game.world.scale.set(a)}},{key:"_resizeCameraBounds",value:function(){this._game.camera.bounds=new Phaser.Rectangle(0,0,this._scene.width(),this._scene.height())}}]),g}(Phaser.State),h=function(){function a(){b(this,a),this._width=128,this._height=32}return c(a,[{key:"height",value:function(){return this._height}},{key:"width",value:function(){return this._width}},{key:"preload",value:function(a){a.load.image("bg","/asset/bg.png"),a.load.image("player","/asset/player.png")}},{key:"create",value:function(a){this._bg=a.add.sprite(0,0,"bg"),this._player=a.add.sprite(this.width()/2,this.height()/2,"player"),a.physics.arcade.enable(this._player),a.camera.follow(this._player)}},{key:"update",value:function(a){this._player.body.velocity.x=0,a.input.keyboard.isDown(Phaser.Keyboard.LEFT)&&(this._player.body.velocity.x-=75),a.input.keyboard.isDown(Phaser.Keyboard.RIGHT)&&(this._player.body.velocity.x+=75)}}]),a}(),i=function(a){function f(){b(this,f);var a=d(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,{width:"100%",height:"100%",transparent:!1,antialias:!1,renderer:Phaser.CANVAS}));return a._gameState=new g(a,new h),a}return e(f,a),c(f,[{key:"init",value:function(){this.state.add("GameState",this._gameState,!0)}}]),f}(Phaser.Game);(new i).init(),Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map