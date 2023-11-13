!function(){"use strict";var t,n={483:function(t,n,e){var o,i=e(311);function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}!function(t){t.SYMBOL_9="9",t.SYMBOL_10="10",t.SYMBOL_J="J",t.SYMBOL_Q="Q",t.SYMBOL_K="K",t.SYMBOL_A="A",t.SYMBOL_H1="H1",t.SYMBOL_H2="H2"}(o||(o={}));var a={SYMBOL_9:[0,0,5,20,100],SYMBOL_10:[0,0,5,20,100],SYMBOL_J:[0,0,10,40,200],SYMBOL_Q:[0,0,10,40,200],SYMBOL_K:[0,0,20,80,400],SYMBOL_A:[0,0,20,80,400],SYMBOL_H1:[0,0,50,200,1e3],SYMBOL_H2:[0,0,100,800,5e3]},s={SYMBOL_9:8,SYMBOL_10:8,SYMBOL_J:4,SYMBOL_Q:4,SYMBOL_K:3,SYMBOL_A:3,SYMBOL_H1:2,SYMBOL_H2:1},u=[];function l(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.keys(s).forEach((function(t,n){var e,o,i=s[t];(e=u).push.apply(e,function(t){if(Array.isArray(t))return r(t)}(o=Array(i).fill(t))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}));var c=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=new i.Container,this._slotImage=new i.Graphics,this._bounds=new i.Rectangle(0,0,0,0),this._maskImage=new i.Graphics}var n,e,o=t.prototype;return o.createMaskImage=function(){this._maskImage.beginFill(0),this._maskImage.drawRect(0,0,1e3,600),this._maskImage.endFill(),this._maskImage.alpha=1,this._container.addChild(this._maskImage)},o.createSlotImage=function(){this._slotImage.beginFill(5333112),this._slotImage.lineStyle(16,16777215,1,1),this._slotImage.drawRect(0,0,1e3,600),this._slotImage.endFill(),this._slotImage.alpha=1,this._container.addChild(this._slotImage)},o.calculateBounds=function(){this._container.calculateBounds(),this._bounds=this._container.getBounds()},o.getMaskImage=function(){return this._maskImage},o.resize=function(t,n){var e=Math.min(.85*t/this._bounds.width,.7*n/this._bounds.height);this._container.scale.set(e),this._container.pivot.x=this._bounds.width/2,this._container.pivot.y=this._bounds.height/2,this._container.x=t/2,this._container.y=n/2},n=t,(e=[{key:"container",get:function(){return this._container}}])&&l(n.prototype,e),t}();function f(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var h=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._reelCount=0,this._symbolCount=0,this._reels=[],this._isSpinning=!1}var n,e;return t.prototype.addReel=function(t){this._reels.push(t)},n=t,(e=[{key:"reelCount",get:function(){return this._reelCount},set:function(t){this._reelCount=t}},{key:"symbolCount",get:function(){return this._symbolCount},set:function(t){this._symbolCount=t}},{key:"reels",get:function(){return this._reels}},{key:"isSpinning",get:function(){return this._isSpinning},set:function(t){this._isSpinning=t}}])&&f(n.prototype,e),t}();function d(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._rowIndex=0,this._symbolCount=0,this._symbolData=[],this._symbols=[]}var n,e;return t.prototype.addSymbol=function(t){this._symbols.push(t)},n=t,(e=[{key:"symbolData",get:function(){return this._symbolData},set:function(t){this._symbolData=t}},{key:"rowIndex",get:function(){return this._rowIndex},set:function(t){this._rowIndex=t}},{key:"symbolCount",get:function(){return this._symbolCount},set:function(t){this._symbolCount=t}},{key:"symbols",get:function(){return this._symbols}}])&&d(n.prototype,e),t}();function p(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=new i.Container,this.background=new i.Graphics,this._symbols=[],this._container.sortableChildren=!0,n.addChild(this._container),this.background.beginFill(0,0),this.background.drawRect(0,0,200,600),this.background.endFill(),this._container.addChild(this.background)}var n,e,o=t.prototype;return o.getYPosition=function(t){return 200*t},o.getMaxSymbolPosition=function(){return 600},o.adjustPosition=function(t,n){this._container.x=t,this._container.y=n},n=t,(e=[{key:"symbols",get:function(){return this._symbols}},{key:"container",get:function(){return this._container}}])&&p(n.prototype,e),t}();function b(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var _=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._columnIndex=0}var n,e;return n=t,(e=[{key:"columnIndex",get:function(){return this._columnIndex},set:function(t){this._columnIndex=t}}])&&b(n.prototype,e),t}(),g=e(358);function v(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var w=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=new i.Container,this._symbolImage=new i.Sprite,this._symbolImageConnect=new i.Sprite,this._animationTween=null,this.createSymbolImage()}var n,e,r=t.prototype;return r.createSymbolImage=function(){var t=this.getRandomSymbol();this._symbolImage.texture=i.Texture.from(t),this._symbolImage.anchor.set(.5),this._symbolImageConnect.texture=i.Texture.from(t+"_connect"),this._symbolImageConnect.anchor.set(.5),this._symbolImageConnect.visible=!1,this._container.addChild(this._symbolImage),this._container.addChild(this._symbolImageConnect)},r.changeToSymbol=function(t){this._symbolImage.texture=i.Texture.from(t),this._symbolImageConnect.texture=i.Texture.from(t+"_connect")},r.getRandomSymbol=function(){var t=Object.values(o);return t[Math.floor(Math.random()*t.length)]},r.symbolDrop=function(t){var n=this;return new Promise((function(e){g.p8.to(n.container,{duration:.4,delay:.025*(3-t),pixi:{y:n.container.y+600},ease:"sine.inOut",onComplete:function(){e()}})}))},r.symbolFall=function(t){var n=this;return new Promise((function(e){g.p8.fromTo(n.container,{duration:.4,pixi:{y:n.container.y-1200},ease:"sine.inOut"},{duration:.5,delay:.025*(3-t),pixi:{y:n.container.y-600},ease:"sine.inOut",onComplete:function(){e()}})}))},r.animateSymbol=function(){var t=this;this._animationTween=g.p8.to({k:0},{duration:.2,k:1,repeat:-1,onRepeat:function(){t._symbolImageConnect.visible=!t._symbolImageConnect.visible}})},r.removeAnimation=function(){this._animationTween&&(this._animationTween.kill(),this._animationTween=null),this._symbolImageConnect.visible=!1},r.adjustPosition=function(t,n){this._symbolImage.x=t+this._symbolImage.width/2,this._symbolImage.y=n+this._symbolImage.height/2,this._symbolImageConnect.x=t+this._symbolImage.width/2,this._symbolImageConnect.y=n+this._symbolImage.height/2},r.getPosition=function(){return new i.Point(this._symbolImage.x,this._symbolImage.y)},n=t,(e=[{key:"container",get:function(){return this._container}}])&&v(n.prototype,e),t}(),S=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._view=new w,this._model=new _,this._model.columnIndex=n}var n=t.prototype;return n.changeToSymbol=function(t){this._view.changeToSymbol(t)},n.adjustPosition=function(t,n){this._view.adjustPosition(t,n)},n.updateColumnIndex=function(t){this._model.columnIndex=t},n.drop=function(){return this._view.symbolDrop(this._model.columnIndex)},n.fall=function(){return this._view.symbolFall(this._model.columnIndex)},n.animateSymbolView=function(){this._view.animateSymbol()},n.removeAnimation=function(){this._view.removeAnimation()},n.getViewContainer=function(){return this._view.container},t}();function C(t,n,e,o,i,r,a){try{var s=t[r](a),u=s.value}catch(t){return void e(t)}s.done?n(u):Promise.resolve(u).then(o,i)}function k(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var r=t.apply(n,e);function a(t){C(r,o,i,a,s,"next",t)}function s(t){C(r,o,i,a,s,"throw",t)}a(void 0)}))}}var x=function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},I=function(){function t(n,e,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._model=new m,this._view=new y(n),this._model.rowIndex=e,this._model.symbolCount=o,this.createSymbols(this._model.symbolCount)}var n=t.prototype;return n.adjustPosition=function(t,n){this._view.adjustPosition(t,n)},n.getViewContainer=function(){return this._view.container},n.setMask=function(t){this.getViewContainer().mask=t},n.createSymbols=function(t){for(var n=0;n<t;n++){var e=new S(n);e.adjustPosition(0,this._view.getYPosition(n)),this.getViewContainer().addChild(e.getViewContainer()),this._model.addSymbol(e)}},n.setSymbolData=function(t){this._model.symbolData=t,this._model.symbols.forEach((function(n,e){n.changeToSymbol(o[t[e]])}))},n.getSymbolItem=function(t){return this._model.symbols[t]},n.getAllSymbolItems=function(){return this._model.symbols},n.startSpinning=function(){var t=this;return k((function(){var n;return x(this,(function(e){switch(e.label){case 0:return n=t._model.symbols.map((function(t){return t.drop()})),[4,Promise.all(n).then((function(){return Promise.resolve()}))];case 1:return e.sent(),[2]}}))}))()},n.stopSpinning=function(){var t=this;return k((function(){var n;return x(this,(function(e){switch(e.label){case 0:return n=t._model.symbols.map((function(t){return t.fall()})),[4,Promise.all(n).then((function(){return Promise.resolve()}))];case 1:return e.sent(),[2]}}))}))()},t}();function B(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function O(t,n,e,o,i,r,a){try{var s=t[r](a),u=s.value}catch(t){return void e(t)}s.done?n(u):Promise.resolve(u).then(o,i)}function P(t){return function(t){if(Array.isArray(t))return B(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return B(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?B(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=function(){function t(n,e,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._spinData=[],this.app=n,this._model=new h,this._view=new c,this._model.reelCount=e,this._model.symbolCount=o,this._spinData=new Array(e).fill(0).map((function(){return new Array(o).fill("")})),this._view.createMaskImage(),this._view.createSlotImage(),this.createReels(this._model.reelCount,this._model.symbolCount),this._view.calculateBounds()}var n=t.prototype;return n.assignUiController=function(t){this._uiController=t},n.getViewContainer=function(){return this._view.container},n.createReels=function(t,n){for(var e=this.getViewContainer(),o=0;o<t;o++){var i=new I(e,o,n);i.adjustPosition(200*o,0),e.addChild(i.getViewContainer()),i.setMask(this._view.getMaskImage()),this._model.addReel(i)}},n.preSpinCallback=function(){this._model.isSpinning=!0,this.stopWinAnimation()},n.postSpinCallback=function(){this._model.isSpinning=!1},n.spin=function(){var t,n=this;return(t=function(){var t,e,o,i;return function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(r){switch(r.label){case 0:return n._model.isSpinning?[2,Promise.reject("Already spinning")]:(n.preSpinCallback(),t=n._model.reels.map((function(t,n){return new Promise((function(e){g.ZP.delayedCall(.1*n,(function(){t.startSpinning().then((function(){return e()}))}))}))})),[4,Promise.all(t)]);case 1:return r.sent(),[4,n.getReelsData()];case 2:return e=r.sent(),n.fillReelsData(e),o=n._model.reels.map((function(t,n){return new Promise((function(e){g.ZP.delayedCall(.1*n,(function(){t.stopSpinning().then((function(){return e()}))}))}))})),[4,Promise.all(o)];case 3:return r.sent(),(i=n.checkWin(e)).totalPay>0&&(n.showPayment(i.totalPay),n.startWinAnimation(i.ways)),n.postSpinCallback(),[2]}}))},function(){var n=this,e=arguments;return new Promise((function(o,i){var r=t.apply(n,e);function a(t){O(r,o,i,a,s,"next",t)}function s(t){O(r,o,i,a,s,"throw",t)}a(void 0)}))})()},n.getRandomSymbol=function(){return u[Math.floor(Math.random()*u.length)]},n.getReelsData=function(){var t=this;return new Promise((function(n){for(var e=0;e<t._model.reelCount;e++)for(var o=0;o<t._model.symbolCount;o++)t._spinData[e][o]=t.getRandomSymbol();n(t._spinData)}))},n.fillReelsData=function(t){for(var n=0;n<this._model.reelCount;n++)for(var e=0;e<this._model.symbolCount;e++)this._model.reels[n].setSymbolData(t[n])},n.checkWin=function(t){for(var n=[],e=this._model.symbolCount,o=this._model.reelCount,i=function(r,a){for(var s=t[a],u=!0,l=0;l<e;l++)if(s[l]===r.symbol){u=!1;var c={symbol:r.symbol,length:r.length+1,reelIndexes:P(r.reelIndexes).concat([l])};a<o-1?i(c,a+1):n.push(c)}u&&r.length>2&&n.push(r)},r=0;r<e;r++){var a=t[0][r];i({symbol:a,length:1,reelIndexes:[r]},1)}console.table(n);var s=this.calculatePay(n);return{ways:n,totalPay:s}},n.calculatePay=function(t){var n=0;return t.forEach((function(t){n+=a[t.symbol][t.length-1]})),n},n.startWinAnimation=function(t){var n=this,e=new Set;t.forEach((function(t,o){t.reelIndexes.forEach((function(t,o){var i=n.getSymbolItem(o,t);e.add(i)}))})),e.forEach((function(t){t.animateSymbolView()}))},n.stopWinAnimation=function(){this.getAllSymbolItems().forEach((function(t){t.removeAnimation()}))},n.showPayment=function(t){},n.getSymbolItem=function(t,n){return this._model.reels[t].getSymbolItem(n)},n.getAllSymbolItems=function(){var t=[];return this._model.reels.forEach((function(n){var e;(e=t).push.apply(e,P(n.getAllSymbolItems()))})),t},n.resize=function(t,n){this._view.resize(t,n)},t}(),M=e(607);function j(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function E(t,n){return!n||"object"!==Y(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function R(t,n){return R=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},R(t,n)}var Y=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var L=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&R(t,n)}(r,t);var n,e,o=(n=r,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=A(n);if(e){var i=A(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return E(this,t)});function r(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(t=o.call(this))._spinButtonBackground=new i.Graphics,t._spinButtonText=new i.Text,t._clickEventName="pointerdown",t._isActivated=!0,t._origBounds=new i.Rectangle(0,0,0,0),t._spinButtonBackground.beginFill(6448734),t._spinButtonBackground.lineStyle(3,0),t._spinButtonBackground.drawRect(-50,-25,100,50),t._spinButtonBackground.endFill(),t._spinButtonText.text="SPIN",t._spinButtonText.style=new i.TextStyle({align:"center",dropShadow:!0,dropShadowAngle:1.57,dropShadowDistance:4,fill:["#05ff8a","#0bd060"],fontFamily:"Arial Black",fontSize:64,strokeThickness:5}),t._spinButtonText.anchor.set(.5),t._spinButtonText.scale.set(.5),t._spinButtonBackground.addChild(t._spinButtonText),t.addChild(t._spinButtonBackground),t.calculateBounds(),t._origBounds=t.getBounds(),t.interactive=!0,t.buttonMode=!0,t.on(t._clickEventName,(function(){t.pulse()})),t}var a,s,u=r.prototype;return u.pulse=function(){g.ZP.fromTo(this._spinButtonBackground,{pixi:{scale:1}},{duration:.1,pixi:{scale:.9},ease:"sine.inOut",yoyo:!0,repeat:1})},u.disable=function(){this._spinButtonText.tint=11184810,this._isActivated=!1,this.interactive=!1,this.buttonMode=!1},u.enable=function(){this._spinButtonText.tint=16777215,this._isActivated=!0,this.interactive=!0,this.buttonMode=!0},u.resize=function(t,n){var e=Math.min(.1*t/this._origBounds.width,.1*n/this._origBounds.height);this.scale.set(e),this.position.set(.85*t,.9*n)},a=r,(s=[{key:"clickEventName",get:function(){return this._clickEventName}},{key:"isActivated",get:function(){return this._isActivated}}])&&j(a.prototype,s),r}(i.Container);function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}function z(t,n){return!n||"object"!==V(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function F(t,n){return F=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},F(t,n)}var V=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var W=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&F(t,n)}(r,t);var n,e,o=(n=r,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=D(n);if(e){var i=D(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return z(this,t)});function r(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(t=o.call(this))._winText=new i.Text,t._origBounds=new i.Rectangle(0,0,0,0),t._winText.text="YOU WON\n100$",t._winText.style=new i.TextStyle({align:"center",dropShadow:!0,dropShadowAngle:1.57,dropShadowDistance:8,fill:["#e65452","#e77f7b"],fontFamily:"Arial Black",fontSize:128,strokeThickness:12}),t._winText.anchor.set(.5),t.addChild(t._winText),t.calculateBounds(),t._origBounds=t.getBounds(),t.visible=!1,t}var a=r.prototype;return a.show=function(t){var n=this;this._winText.text="YOU WON\n".concat(t,"$"),g.ZP.fromTo(this._winText,{pixi:{scale:0,y:100}},{duration:.3,pixi:{scale:1,y:0},ease:"back.out",onStart:function(){n._winText.alpha=1,n.visible=!0}})},a.hide=function(){var t=this;this.visible&&g.ZP.to(this._winText,{duration:.3,pixi:{alpha:0},onComplete:function(){t.visible=!1,t._winText.alpha=1}})},a.resize=function(t,n){var e=Math.min(.5*t/this._origBounds.width,.33*n/this._origBounds.height);this.scale.set(e),this.position.set(t/2,n/2)},r}(i.Container),H=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._viewContainer=new i.Container,this._background=new i.Sprite,this._spinButton=new L,this._winMessage=new W,this.app=n,this._viewContainer.zIndex=100,this._background.texture=i.Texture.from("background"),this.app.stage.addChild(this._background),this._viewContainer.addChild(this._spinButton),this._viewContainer.addChild(this._winMessage),this.createSpinButtonEvent()}var n=t.prototype;return n.getViewContainer=function(){return this._viewContainer},n.assignSlotMachineController=function(t){this._slotMachineController=t},n.createSpinButtonEvent=function(){var t=this;this._spinButton.on(this._spinButton.clickEventName,(function(){t._spinButton.disable()}))},n.showWinMessage=function(t){this._winMessage.show(t)},n.hideWinMessage=function(){this._winMessage.hide()},n.resize=function(t,n){var e=Math.max(t/this._background.texture.orig.width,n/this._background.texture.orig.height);this._background.scale.set(e),this._winMessage.resize(t,n),this._spinButton.resize(t,n)},t}();function N(t,n,e,o,i,r,a){try{var s=t[r](a),u=s.value}catch(t){return void e(t)}s.done?n(u):Promise.resolve(u).then(o,i)}function Z(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var r=t.apply(n,e);function a(t){N(r,o,i,a,s,"next",t)}function s(t){N(r,o,i,a,s,"throw",t)}a(void 0)}))}}var G=function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},U=new i.Application({backgroundColor:1700773,backgroundAlpha:0,width:800,height:800});function J(){return K.apply(this,arguments)}function K(){return(K=Z((function(){return G(this,(function(t){return[2,new Promise((function(t,n){var e=i.Loader.shared;e.add("atlas","./assets/atlas.json"),e.onComplete.once((function(){t()})),e.onError.once((function(){n()})),e.load()}))]}))}))).apply(this,arguments)}M.Z.registerPIXI(i),g.ZP.registerPlugin(M.Z),window.onload=Z((function(){var t,n,e;return G(this,(function(o){switch(o.label){case 0:return[4,J()];case 1:return o.sent(),document.body.appendChild(U.view),U.stage.sortableChildren=!0,t=new H(U),U.stage.addChild(t.getViewContainer()),n=new T(U,5,3),U.stage.addChild(n.getViewContainer()),t.assignSlotMachineController(n),n.assignUiController(t),(e=function(){var e=document.body.clientWidth,o=document.body.clientHeight;U.renderer.resize(e,o),n.resize(e,o),t.resize(e,o)})(),setTimeout(e,10),window.addEventListener("resize",e),U.stage.interactive=!0,[2]}}))}))}},e={};function o(t){var i=e[t];if(void 0!==i)return i.exports;var r=e[t]={id:t,loaded:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=n,t=[],o.O=function(n,e,i,r){if(!e){var a=1/0;for(c=0;c<t.length;c++){e=t[c][0],i=t[c][1],r=t[c][2];for(var s=!0,u=0;u<e.length;u++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](e[u])}))?e.splice(u--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var l=i();void 0!==l&&(n=l)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[e,i,r]},o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={179:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,r,a=e[0],s=e[1],u=e[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(u)var c=u(o)}for(n&&n(e);l<a.length;l++)r=a[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},e=self.webpackChunkpixi_typescript_boilerplate=self.webpackChunkpixi_typescript_boilerplate||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var i=o.O(void 0,[372],(function(){return o(483)}));i=o.O(i)}();