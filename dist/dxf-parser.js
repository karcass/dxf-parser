!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DxfParser=t():e.DxfParser=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){var r,n;!function(o,i){"use strict";void 0===(n="function"==typeof(r=function(){var e=function(){},t="undefined",a=["trace","debug","info","warn","error"];function r(e,t){var a=e[t];if("function"==typeof a.bind)return a.bind(e);try{return Function.prototype.bind.call(a,e)}catch(t){return function(){return Function.prototype.apply.apply(a,[e,arguments])}}}function n(t,r){for(var n=0;n<a.length;n++){var o=a[n];this[o]=n<t?e:this.methodFactory(o,t,r)}this.log=this.debug}function o(a,o,i){return function(a){"debug"===a&&(a="log");return typeof console!==t&&(void 0!==console[a]?r(console,a):void 0!==console.log?r(console,"log"):e)}(a)||function(e,a,r){return function(){typeof console!==t&&(n.call(this,a,r),this[e].apply(this,arguments))}}.apply(this,arguments)}function i(e,r,i){var u,c=this,s="loglevel";function l(){var e;if(typeof window!==t){try{e=window.localStorage[s]}catch(e){}if(typeof e===t)try{var a=window.document.cookie,r=a.indexOf(encodeURIComponent(s)+"=");-1!==r&&(e=/^([^;]+)/.exec(a.slice(r))[1])}catch(e){}return void 0===c.levels[e]&&(e=void 0),e}}e&&(s+=":"+e),c.name=e,c.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},c.methodFactory=i||o,c.getLevel=function(){return u},c.setLevel=function(r,o){if("string"==typeof r&&void 0!==c.levels[r.toUpperCase()]&&(r=c.levels[r.toUpperCase()]),!("number"==typeof r&&r>=0&&r<=c.levels.SILENT))throw"log.setLevel() called with invalid level: "+r;if(u=r,!1!==o&&function(e){var r=(a[e]||"silent").toUpperCase();if(typeof window===t)return;try{return void(window.localStorage[s]=r)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"="+r+";"}catch(e){}}(r),n.call(c,r,e),typeof console===t&&r<c.levels.SILENT)return"No console available for logging"},c.setDefaultLevel=function(e){l()||c.setLevel(e,!1)},c.enableAll=function(e){c.setLevel(c.levels.TRACE,e)},c.disableAll=function(e){c.setLevel(c.levels.SILENT,e)};var v=l();null==v&&(v=null==r?"WARN":r),c.setLevel(v,!1)}var u=new i,c={};u.getLogger=function(e){if("string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new i(e,u.getLevel(),u.methodFactory)),t};var s=typeof window!==t?window.log:void 0;return u.noConflict=function(){return typeof window!==t&&window.log===u&&(window.log=s),u},u.getLoggers=function(){return c},u})?r.call(t,a,t,e):r)||(e.exports=n)}()},function(e,t,a){(function(t){const r=a(2);e.exports={entry:"./src/index.js",output:{filename:"dxf-parser.js",path:r.resolve(t,"dist"),library:"DxfParser",libraryTarget:"umd",libraryExport:"default",globalObject:"typeof self !== 'undefined' ? self : this"}}}).call(this,"/")},function(e,t,a){(function(e){function a(e,t){for(var a=0,r=e.length-1;r>=0;r--){var n=e[r];"."===n?e.splice(r,1):".."===n?(e.splice(r,1),a++):a&&(e.splice(r,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return r.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var a=[],r=0;r<e.length;r++)t(e[r],r,e)&&a.push(e[r]);return a}t.resolve=function(){for(var t="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var i=n>=0?arguments[n]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return(r?"/":"")+(t=a(o(t.split("/"),function(e){return!!e}),!r).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),n="/"===i(e,-1);return(e=a(o(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&n&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,a){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var a=e.length-1;a>=0&&""===e[a];a--);return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var n=r(e.split("/")),o=r(a.split("/")),i=Math.min(n.length,o.length),u=i,c=0;c<i;c++)if(n[c]!==o[c]){u=c;break}var s=[];for(c=u;c<n.length;c++)s.push("..");return(s=s.concat(o.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=n(e),a=t[0],r=t[1];return a||r?(r&&(r=r.substr(0,r.length-1)),a+r):"."},t.basename=function(e,t){var a=n(e)[2];return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){return n(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a(3))},function(e,t){var a,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(a===setTimeout)return setTimeout(e,0);if((a===o||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:o}catch(e){a=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,s=[],l=!1,v=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):v=-1,s.length&&f())}function f(){if(!l){var e=u(d);l=!0;for(var t=s.length;t;){for(c=s,s=[];++v<t;)c&&c[v].run();v=-1,t=s.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new b(e,t)),1!==s.length||l||u(f)},b.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(e,t,a){"use strict";function r(e){this._pointer=0,this._data=e,this._eof=!1}function n(e,t){return e<=9?t:e>=10&&e<=59?parseFloat(t):e>=60&&e<=99?parseInt(t):e>=100&&e<=109?t:e>=110&&e<=149?parseFloat(t):e>=160&&e<=179?parseInt(t):e>=210&&e<=239?parseFloat(t):e>=270&&e<=289?parseInt(t):e>=290&&e<=299?function(e){if("0"===e)return!1;if("1"===e)return!0;throw TypeError("String '"+e+"' cannot be cast to Boolean type")}(t):e>=300&&e<=369?t:e>=370&&e<=389?parseInt(t):e>=390&&e<=399?t:e>=400&&e<=409?parseInt(t):e>=410&&e<=419?t:e>=420&&e<=429?parseInt(t):e>=430&&e<=439?t:e>=440&&e<=459?parseInt(t):e>=460&&e<=469?parseFloat(t):e>=470&&e<=481?t:999===e?t:e>=1e3&&e<=1009?t:e>=1010&&e<=1059?parseFloat(t):e>=1060&&e<=1071?parseInt(t):(console.log("WARNING: Group code does not have a defined type: %j",{code:e,value:t}),t)}a.r(t),r.prototype.next=function(){var e;if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);return e={code:parseInt(this._data[this._pointer])},this._pointer++,e.value=n(e.code,this._data[this._pointer].trim()),this._pointer++,0===e.code&&"EOF"===e.value&&(this._eof=!0),this.lastReadGroup=e,e},r.prototype.peek=function(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);var e={code:parseInt(this._data[this._pointer])};return e.value=n(e.code,this._data[this._pointer+1].trim()),e},r.prototype.rewind=function(e){e=e||1,this._pointer=this._pointer-2*e},r.prototype.hasNext=function(){return!this._eof&&!(this._pointer>this._data.length-2)},r.prototype.isEOF=function(){return this._eof};var o=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function i(e){var t={};e.rewind();var a=e.next(),r=a.code;if(t.x=a.value,r+=10,(a=e.next()).code!=r)throw new Error("Expected code for point value to be "+r+" but got "+a.code+".");return t.y=a.value,r+=10,(a=e.next()).code!=r?(e.rewind(),t):(t.z=a.value,t)}function u(e,t){switch(t.code){case 0:e.type=t.value;break;case 5:e.handle=t.value;break;case 6:e.lineType=t.value;break;case 8:e.layer=t.value;break;case 48:e.lineTypeScale=t.value;break;case 60:e.visible=0===t.value;break;case 62:e.colorIndex=t.value,e.color=(a=Math.abs(t.value),o[a]);break;case 67:e.inPaperSpace=0!==t.value;break;case 100:break;case 330:e.ownerHandle=t.value;break;case 347:e.materialObjectHandle=t.value;break;case 370:e.lineweight=t.value;break;case 420:e.color=t.value;break;case 1e3:e.extendedData=e.extendedData||{},e.extendedData.customStrings=e.extendedData.customStrings||[],e.extendedData.customStrings.push(t.value);break;case 1001:e.extendedData=e.extendedData||{},e.extendedData.applicationName=t.value;break;default:return!1}var a;return!0}function c(){}function s(e,t){var a,r=[],n=!1,o=!1;for(a=0;a<=4;a++){for(var i={};"EOF"!==t&&0!==t.code&&!o;){switch(t.code){case 10:case 11:case 12:case 13:if(n){o=!0;continue}i.x=t.value,n=!0;break;case 20:case 21:case 22:case 23:i.y=t.value;break;case 30:case 31:case 32:case 33:i.z=t.value;break;default:return r}t=e.next()}r.push(i),n=!1,o=!1}return e.rewind(),r}function l(){}function v(){}function d(){}function f(){}function b(){}function p(){}function k(){}function h(){}function y(e,t){if(!e||e<=0)throw Error("n must be greater than 0 verticies");var a,r=[],n=!1,o=!1,i=t.lastReadGroup;for(a=0;a<e;a++){for(var u={};"EOF"!==i&&0!==i.code&&!o;){switch(i.code){case 10:if(n){o=!0;continue}u.x=i.value,n=!0;break;case 20:u.y=i.value;break;case 30:u.z=i.value;break;case 40:u.startWidth=i.value;break;case 41:u.endWidth=i.value;break;case 42:0!=i.value&&(u.bulge=i.value);break;default:return n&&r.push(u),t.rewind(),r}i=t.next()}r.push(u),n=!1,o=!1}return t.rewind(),r}c.ForEntityName="3DFACE",c.prototype.parseEntity=function(e,t){var a={type:t.value,vertices:[]};for(t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 70:a.shape=1==(1&t.value),a.hasContinuousLinetypePattern=128==(128&t.value);break;case 10:a.vertices=s(e,t),t=e.lastReadGroup;break;default:u(a,t)}t=e.next()}return a},l.ForEntityName="ARC",l.prototype.parseEntity=function(e,t){var a;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.center=i(e);break;case 40:a.radius=t.value;break;case 50:a.startAngle=Math.PI/180*t.value;break;case 51:a.endAngle=Math.PI/180*t.value,a.angleLength=a.endAngle-a.startAngle;break;default:u(a,t)}t=e.next()}return a},v.ForEntityName="ATTDEF",v.prototype.parseEntity=function(e,t){var a={type:t.value,scale:1,textStyle:"STANDARD"};for(t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 1:a.text=t.value;break;case 2:a.tag=t.value;break;case 3:a.prompt=t.value;break;case 7:a.textStyle=t.value;break;case 10:a.startPoint=i(e);break;case 11:a.endPoint=i(e);break;case 39:a.thickness=t.value;break;case 40:a.textHeight=t.value;break;case 41:a.scale=t.value;break;case 50:a.rotation=t.value;break;case 51:a.obliqueAngle=t.value;break;case 70:a.invisible=!!(1&t.value),a.constant=!!(2&t.value),a.verificationRequired=!!(4&t.value),a.preset=!!(8&t.value);break;case 71:a.backwards=!!(2&t.value),a.mirrored=!!(4&t.value);break;case 72:a.horizontalJustification=t.value;break;case 73:a.fieldLength=t.value;break;case 74:a.verticalJustification=t.value;break;case 100:break;case 210:a.extrusionDirectionX=t.value;break;case 220:a.extrusionDirectionY=t.value;break;case 230:a.extrusionDirectionZ=t.value;break;default:u(a,t)}t=e.next()}return a},d.ForEntityName="CIRCLE",d.prototype.parseEntity=function(e,t){var a,r;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.center=i(e);break;case 40:a.radius=t.value;break;case 50:a.startAngle=Math.PI/180*t.value;break;case 51:(r=Math.PI/180*t.value)<a.startAngle?a.angleLength=r+2*Math.PI-a.startAngle:a.angleLength=r-a.startAngle,a.endAngle=r;break;default:u(a,t)}t=e.next()}return a},f.ForEntityName="DIMENSION",f.prototype.parseEntity=function(e,t){var a;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 2:a.block=t.value;break;case 10:a.anchorPoint=i(e);break;case 11:a.middleOfText=i(e);break;case 12:a.insertionPoint=i(e);break;case 13:a.linearOrAngularPoint1=i(e);break;case 14:a.linearOrAngularPoint2=i(e);break;case 15:a.diameterOrRadiusPoint=i(e);break;case 16:a.arcPoint=i(e);break;case 70:a.dimensionType=t.value;break;case 71:a.attachmentPoint=t.value;break;case 42:a.actualMeasurement=t.value;break;case 1:a.text=t.value;break;case 50:a.angle=t.value;break;default:u(a,t)}t=e.next()}return a},b.ForEntityName="ELLIPSE",b.prototype.parseEntity=function(e,t){var a;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.center=i(e);break;case 11:a.majorAxisEndPoint=i(e);break;case 21:a.majorAxisEndPointY=t.value;break;case 31:a.majorAxisEndPointZ=t.value;break;case 40:a.axisRatio=t.value;break;case 41:a.startAngle=t.value;break;case 42:a.endAngle=t.value;break;case 210:a.extrusionDirectionX=t.value;break;case 220:a.extrusionDirectionY=t.value;break;case 230:a.extrusionDirectionZ=t.value;break;case 2:a.name=t.value;break;default:u(a,t)}t=e.next()}return a},p.ForEntityName="INSERT",p.prototype.parseEntity=function(e,t){var a;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 2:a.name=t.value;break;case 41:a.xScale=t.value;break;case 42:a.yScale=t.value;break;case 43:a.zScale=t.value;break;case 10:a.position=i(e);break;case 41:a.xScale=t.value;break;case 42:a.yScale=t.value;break;case 43:a.zScale=t.value;break;case 50:a.rotation=t.value;break;case 66:a.attributesFollow=t.value;break;case 70:a.columnCount=t.value;break;case 71:a.rowCount=t.value;break;case 44:a.columnSpacing=t.value;break;case 45:a.rowSpacing=t.value;break;case 210:a.extrusionDirection=i(e);break;default:u(a,t)}t=e.next()}return a},k.ForEntityName="LINE",k.prototype.parseEntity=function(e,t){var a={type:t.value,vertices:[]};for(t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.vertices.unshift(i(e));break;case 11:a.vertices.push(i(e));break;case 210:a.extrusionDirection=i(e);break;case 100:break;default:u(a,t)}t=e.next()}return a},h.ForEntityName="LWPOLYLINE",h.prototype.parseEntity=function(e,t){var a={type:t.value,vertices:[]},r=0;for(t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 38:a.elevation=t.value;break;case 39:a.depth=t.value;break;case 70:a.shape=1==(1&t.value),a.hasContinuousLinetypePattern=128==(128&t.value);break;case 90:r=t.value;break;case 10:a.vertices=y(r,e);break;case 43:0!==t.value&&(a.width=t.value);break;case 210:a.extrusionDirectionX=t.value;break;case 220:a.extrusionDirectionY=t.value;break;case 230:a.extrusionDirectionZ=t.value;break;default:u(a,t)}t=e.next()}return a};a(1);function x(){}function g(){}function E(){}function m(){}function w(e,t){var a={type:t.value};for(t=e.next();"EOF"!=t&&0!=t.code;)u(a,t),t=e.next();return a}function T(){}function F(){}function N(){}x.ForEntityName="MTEXT",x.prototype.parseEntity=function(e,t){var a={type:t.value};for(t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 3:case 1:a.text?a.text+=t.value:a.text=t.value;break;case 10:a.position=i(e);break;case 11:a.xVector=t.value;break;case 21:a.yVector=t.value;break;case 31:a.zVector=t.value;break;case 40:a.height=t.value;break;case 41:a.width=t.value;break;case 50:a.rotation=t.value;break;case 71:a.attachmentPoint=t.value;break;case 72:a.drawingDirection=t.value;break;case 7:a.styleName=t.value;break;case 90:a.backgroundFill=t.value;break;case 63:a.backgroundFillColor=t.value;break;default:u(a,t)}t=e.next()}return a},g.ForEntityName="POINT",g.prototype.parseEntity=function(e,t){var a;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.position=i(e);break;case 39:a.thickness=t.value;break;case 210:a.extrusionDirection=i(e);break;case 100:break;default:u(a,t)}t=e.next()}return a},E.ForEntityName="VERTEX",E.prototype.parseEntity=function(e,t){var a={type:t.value};for(t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.x=t.value;break;case 20:a.y=t.value;break;case 30:a.z=t.value;break;case 40:case 41:break;case 42:0!=t.value&&(a.bulge=t.value);break;case 70:a.curveFittingVertex=0!=(1&t.value),a.curveFitTangent=0!=(2&t.value),a.splineVertex=0!=(8&t.value),a.splineControlPoint=0!=(16&t.value),a.threeDPolylineVertex=0!=(32&t.value),a.threeDPolylineMesh=0!=(64&t.value),a.polyfaceMeshVertex=0!=(128&t.value);break;case 50:break;case 71:a.faceA=t.value;break;case 72:a.faceB=t.value;break;case 73:a.faceC=t.value;break;case 74:a.faceD=t.value;break;default:u(a,t)}t=e.next()}return a},m.ForEntityName="POLYLINE",m.prototype.parseEntity=function(e,t){var a={type:t.value,vertices:[]};for(t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:case 20:case 30:break;case 39:a.thickness=t.value;break;case 40:case 41:break;case 70:a.shape=0!=(1&t.value),a.includesCurveFitVertices=0!=(2&t.value),a.includesSplineFitVertices=0!=(4&t.value),a.is3dPolyline=0!=(8&t.value),a.is3dPolygonMesh=0!=(16&t.value),a.is3dPolygonMeshClosed=0!=(32&t.value),a.isPolyfaceMesh=0!=(64&t.value),a.hasContinuousLinetypePattern=0!=(128&t.value);break;case 71:case 72:case 73:case 74:case 75:break;case 210:a.extrusionDirection=i(e);break;default:u(a,t)}t=e.next()}return a.vertices=function(e,t){var a=new E,r=[];for(;!e.isEOF();)if(0===t.code)if("VERTEX"===t.value)r.push(a.parseEntity(e,t)),t=e.lastReadGroup;else if("SEQEND"===t.value){w(e,t);break}return r}(e,t),a},T.ForEntityName="SOLID",T.prototype.parseEntity=function(e,t){var a;for((a={type:t.value}).points=[],t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.points[0]=i(e);break;case 11:a.points[1]=i(e);break;case 12:a.points[2]=i(e);break;case 13:a.points[3]=i(e);break;case 210:a.extrusionDirection=i(e);break;default:u(a,t)}t=e.next()}return a},F.ForEntityName="SPLINE",F.prototype.parseEntity=function(e,t){var a;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.controlPoints||(a.controlPoints=[]),a.controlPoints.push(i(e));break;case 11:a.fitPoints||(a.fitPoints=[]),a.fitPoints.push(i(e));break;case 12:a.startTangent=i(e);break;case 13:a.endTangent=i(e);break;case 40:a.knotValues||(a.knotValues=[]),a.knotValues.push(t.value);break;case 70:0!=(1&t.value)&&(a.closed=!0),0!=(2&t.value)&&(a.periodic=!0),0!=(4&t.value)&&(a.rational=!0),0!=(8&t.value)&&(a.planar=!0),0!=(16&t.value)&&(a.planar=!0,a.linear=!0);break;case 71:a.degreeOfSplineCurve=t.value;break;case 72:a.numberOfKnots=t.value;break;case 73:a.numberOfControlPoints=t.value;break;case 74:a.numberOfFitPoints=t.value;break;case 210:a.normalVector=i(e);break;default:u(a,t)}t=e.next()}return a},N.ForEntityName="TEXT",N.prototype.parseEntity=function(e,t){var a;for(a={type:t.value},t=e.next();"EOF"!==t&&0!==t.code;){switch(t.code){case 10:a.startPoint=i(e);break;case 11:a.endPoint=i(e);break;case 40:a.textHeight=t.value;break;case 41:a.xScale=t.value;break;case 50:a.rotation=t.value;break;case 1:a.text=t.value;break;case 72:a.halign=t.value;break;case 73:a.valign=t.value;break;case 71:a.textGenFlags=t.value;break;case 39:a.thickness=t.value;break;case 7:a.styleName=t.value;break;default:u(a,t)}t=e.next()}return a};var P=a(0),O=a.n(P);function S(){var e;this._entityHandlers={},(e=this).registerEntityHandler(c),e.registerEntityHandler(l),e.registerEntityHandler(v),e.registerEntityHandler(d),e.registerEntityHandler(f),e.registerEntityHandler(b),e.registerEntityHandler(p),e.registerEntityHandler(k),e.registerEntityHandler(h),e.registerEntityHandler(x),e.registerEntityHandler(g),e.registerEntityHandler(m),e.registerEntityHandler(T),e.registerEntityHandler(F),e.registerEntityHandler(N)}function L(e){O.a.debug("unhandled group "+A(e))}function A(e){return e.code+":"+e.value}O.a.setLevel("error"),S.prototype.parse=function(e,t){throw new Error("read() not implemented. Use readSync()")},S.prototype.registerEntityHandler=function(e){var t=new e;this._entityHandlers[e.ForEntityName]=t},S.prototype.parseSync=function(e){return"string"==typeof e?this._parse(e):(console.error("Cannot read dxf source of type `"+typeof e),null)},S.prototype.parseStream=function(e,t){var a="",r=this;e.on("data",function(e){a+=e}),e.on("end",function(){try{var e=r._parse(a)}catch(e){return t(e)}t(null,e)}),e.on("error",function(e){t(e)})},S.prototype._parse=function(e){var t,a,n={},i=0,u=e.split(/\r\n|\r|\n/g);if(!(t=new r(u)).hasNext())throw Error("Empty file");var c=this,s=function(e,t){return a.code===e&&a.value===t},l=function(){var e=null,r=null,n={};for(a=t.next();;){if(s(0,"ENDSEC")){e&&(n[e]=r);break}9===a.code?(e&&(n[e]=r),e=a.value):10===a.code?r={x:a.value}:20===a.code?r.y=a.value:30===a.code?r.z=a.value:r=a.value,a=t.next()}return a=t.next(),n},v=function(){var e,r={};for(a=t.next();"EOF"!==a.value&&!s(0,"ENDSEC");)s(0,"BLOCK")?(O.a.debug("block {"),e=d(),O.a.debug("}"),y(e),e.name?r[e.name]=e:O.a.error('block with handle "'+e.handle+'" is missing a name.')):(L(a),a=t.next());return r},d=function(){var e={};for(a=t.next();"EOF"!==a.value;){switch(a.code){case 1:e.xrefPath=a.value,a=t.next();break;case 2:e.name=a.value,a=t.next();break;case 3:e.name2=a.value,a=t.next();break;case 5:e.handle=a.value,a=t.next();break;case 8:e.layer=a.value,a=t.next();break;case 10:e.position=h(),a=t.next();break;case 67:e.paperSpace=!(!a.value||1!=a.value),a=t.next();break;case 70:0!=a.value&&(e.type=a.value),a=t.next();break;case 100:a=t.next();break;case 330:e.ownerHandle=a.value,a=t.next();break;case 0:if("ENDBLK"==a.value)break;e.entities=k(!0);break;default:L(a),a=t.next()}if(s(0,"ENDBLK")){a=t.next();break}}return e},f=function(){var e={};for(a=t.next();"EOF"!==a.value&&!s(0,"ENDSEC");){s(0,"TABLE")?(a=t.next(),p[a.value]?(O.a.debug(a.value+" Table {"),e[p[a.value].tableName]=b(),O.a.debug("}")):O.a.debug("Unhandled Table "+a.value)):a=t.next()}return a=t.next(),e};var b=function(){var e,r=p[a.value],n={},o=0;for(a=t.next();!s(0,"ENDTAB");)switch(a.code){case 5:n.handle=a.value,a=t.next();break;case 330:n.ownerHandle=a.value,a=t.next();break;case 100:"AcDbSymbolTable"===a.value?a=t.next():(L(a),a=t.next());break;case 70:o=a.value,a=t.next();break;case 0:a.value===r.dxfSymbolName?n[r.tableRecordsProperty]=r.parseTableRecords():(L(a),a=t.next());break;default:L(a),a=t.next()}var i=n[r.tableRecordsProperty];return i&&(i.constructor===Array?e=i.length:"object"==typeof i&&(e=Object.keys(i).length),o!==e&&O.a.warn("Parsed "+e+" "+r.dxfSymbolName+"'s but expected "+o)),a=t.next(),n},p={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:function(){var e=[],r={};for(O.a.debug("ViewPort {"),a=t.next();!s(0,"ENDTAB");)switch(a.code){case 2:r.name=a.value,a=t.next();break;case 10:r.lowerLeftCorner=h(),a=t.next();break;case 11:r.upperRightCorner=h(),a=t.next();break;case 12:r.center=h(),a=t.next();break;case 13:r.snapBasePoint=h(),a=t.next();break;case 14:r.snapSpacing=h(),a=t.next();break;case 15:r.gridSpacing=h(),a=t.next();break;case 16:r.viewDirectionFromTarget=h(),a=t.next();break;case 17:r.viewTarget=h(),a=t.next();break;case 42:r.lensLength=a.value,a=t.next();break;case 43:r.frontClippingPlane=a.value,a=t.next();break;case 44:r.backClippingPlane=a.value,a=t.next();break;case 45:r.viewHeight=a.value,a=t.next();break;case 50:r.snapRotationAngle=a.value,a=t.next();break;case 51:r.viewTwistAngle=a.value,a=t.next();break;case 79:r.orthographicType=a.value,a=t.next();break;case 110:r.ucsOrigin=h(),a=t.next();break;case 111:r.ucsXAxis=h(),a=t.next();break;case 112:r.ucsYAxis=h(),a=t.next();break;case 110:r.ucsOrigin=h(),a=t.next();break;case 281:r.renderMode=a.value,a=t.next();break;case 281:r.defaultLightingType=a.value,a=t.next();break;case 292:r.defaultLightingOn=a.value,a=t.next();break;case 330:r.ownerHandle=a.value,a=t.next();break;case 63:case 421:case 431:r.ambientColor=a.value,a=t.next();break;case 0:"VPORT"===a.value&&(O.a.debug("}"),e.push(r),O.a.debug("ViewPort {"),r={},a=t.next());break;default:L(a),a=t.next()}return O.a.debug("}"),e.push(r),e}},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:function(){var e,r,n={},o={};for(O.a.debug("LType {"),a=t.next();!s(0,"ENDTAB");)switch(a.code){case 2:o.name=a.value,e=a.value,a=t.next();break;case 3:o.description=a.value,a=t.next();break;case 73:(r=a.value)>0&&(o.pattern=[]),a=t.next();break;case 40:o.patternLength=a.value,a=t.next();break;case 49:o.pattern.push(a.value),a=t.next();break;case 0:O.a.debug("}"),r>0&&r!==o.pattern.length&&O.a.warn("lengths do not match on LTYPE pattern"),n[e]=o,o={},O.a.debug("LType {"),a=t.next();break;default:a=t.next()}return O.a.debug("}"),n[e]=o,n}},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:function(){var e,r,n={},i={};for(O.a.debug("Layer {"),a=t.next();!s(0,"ENDTAB");)switch(a.code){case 2:i.name=a.value,e=a.value,a=t.next();break;case 6:i.lineType=a.value,a=t.next();break;case 62:i.visible=a.value>=0,i.colorIndex=Math.abs(a.value),i.color=(r=i.colorIndex,o[r]),a=t.next();break;case 70:i.frozen=0!=(1&a.value)||0!=(2&a.value),a=t.next();break;case 370:i.lineWeight=a.value,a=t.next();break;case 0:"LAYER"===a.value&&(O.a.debug("}"),n[e]=i,O.a.debug("Layer {"),i={},e=void 0,a=t.next());break;default:L(a),a=t.next()}return O.a.debug("}"),n[e]=i,n}},STYLE:{tableRecordsProperty:"styles",tableName:"style",dxfSymbolName:"STYLE",parseTableRecords:function(){var e,r={},n={};for(O.a.debug("Style {"),a=t.next();!s(0,"ENDTAB");)switch(a.code){case 2:n.name=a.value,e=a.value,a=t.next();break;case 40:n.fixedTextHeight=a.value,a=t.next();break;case 41:n.widthFactor=a.value,a=t.next();break;case 50:n.obliqueAngle=a.value,a=t.next();break;case 71:n.textGenerationFlags=a.value,a=t.next();break;case 3:n.primaryFontName=a.value,a=t.next();break;case 4:n.bigFontName=a.value,a=t.next();break;case 1071:n.fontDetails=a.value,a=t.next();break;case 0:"STYLE"===a.value&&(O.a.debug("}"),r[e]=n,O.a.debug("Style {"),n={},e=void 0,a=t.next());break;default:L(a),a=t.next()}return O.a.debug("}"),r[e]=n,r}}},k=function(e){var r=[],n=e?"ENDBLK":"ENDSEC";for(e||(a=t.next());;)if(0===a.code){if(a.value===n)break;var o,i=c._entityHandlers[a.value];if(null==i){O.a.warn("Unhandled entity "+a.value),a=t.next();continue}O.a.debug(a.value+" {"),o=i.parseEntity(t,a),a=t.lastReadGroup,O.a.debug("}"),y(o),r.push(o)}else a=t.next();return"ENDSEC"==n&&(a=t.next()),r},h=function(){var e={},r=a.code;if(e.x=a.value,r+=10,(a=t.next()).code!=r)throw new Error("Expected code for point value to be "+r+" but got "+a.code+".");return e.y=a.value,r+=10,(a=t.next()).code!=r?(t.rewind(),e):(e.z=a.value,e)},y=function(e){if(!e)throw new TypeError("entity cannot be undefined or null");e.handle||(e.handle=i++)};return function(){for(a=t.next();!t.isEOF();)if(0===a.code&&"SECTION"===a.value){if(2!==(a=t.next()).code){console.error("Unexpected code %s after 0:SECTION",A(a)),a=t.next();continue}"HEADER"===a.value?(O.a.debug("> HEADER"),n.header=l(),O.a.debug("<")):"BLOCKS"===a.value?(O.a.debug("> BLOCKS"),n.blocks=v(),O.a.debug("<")):"ENTITIES"===a.value?(O.a.debug("> ENTITIES"),n.entities=k(!1),O.a.debug("<")):"TABLES"===a.value?(O.a.debug("> TABLES"),n.tables=f(),O.a.debug("<")):"EOF"===a.value?O.a.debug("EOF"):O.a.warn("Skipping section '%s'",a.value)}else a=t.next()}(),n};t.default=S}]).default});