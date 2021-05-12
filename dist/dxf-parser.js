!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.DxfParser=a():e.DxfParser=a()}("undefined"!=typeof self?self:this,(function(){return function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){var r,n;!function(o,i){"use strict";void 0===(n="function"==typeof(r=function(){var e=function(){},a="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),t=["trace","debug","info","warn","error"];function r(e,a){var t=e[a];if("function"==typeof t.bind)return t.bind(e);try{return Function.prototype.bind.call(t,e)}catch(a){return function(){return Function.prototype.apply.apply(t,[e,arguments])}}}function n(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function o(t){return"debug"===t&&(t="log"),"undefined"!=typeof console&&("trace"===t&&a?n:void 0!==console[t]?r(console,t):void 0!==console.log?r(console,"log"):e)}function i(a,r){for(var n=0;n<t.length;n++){var o=t[n];this[o]=n<a?e:this.methodFactory(o,a,r)}this.log=this.debug}function u(e,a,t){return function(){"undefined"!=typeof console&&(i.call(this,a,t),this[e].apply(this,arguments))}}function l(e,a,t){return o(e)||u.apply(this,arguments)}function s(e,a,r){var n,o=this,u="loglevel";function s(){var e;if("undefined"!=typeof window&&u){try{e=window.localStorage[u]}catch(e){}if(void 0===e)try{var a=window.document.cookie,t=a.indexOf(encodeURIComponent(u)+"=");-1!==t&&(e=/^([^;]+)/.exec(a.slice(t))[1])}catch(e){}return void 0===o.levels[e]&&(e=void 0),e}}"string"==typeof e?u+=":"+e:"symbol"==typeof e&&(u=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=r||l,o.getLevel=function(){return n},o.setLevel=function(a,r){if("string"==typeof a&&void 0!==o.levels[a.toUpperCase()]&&(a=o.levels[a.toUpperCase()]),!("number"==typeof a&&a>=0&&a<=o.levels.SILENT))throw"log.setLevel() called with invalid level: "+a;if(n=a,!1!==r&&function(e){var a=(t[e]||"silent").toUpperCase();if("undefined"!=typeof window&&u){try{return void(window.localStorage[u]=a)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"="+a+";"}catch(e){}}}(a),i.call(o,a,e),"undefined"==typeof console&&a<o.levels.SILENT)return"No console available for logging"},o.setDefaultLevel=function(e){s()||o.setLevel(e,!1)},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var c=s();null==c&&(c=null==a?"WARN":a),o.setLevel(c,!1)}var c=new s,v={};c.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var a=v[e];return a||(a=v[e]=new s(e,c.getLevel(),c.methodFactory)),a};var d="undefined"!=typeof window?window.log:void 0;return c.noConflict=function(){return"undefined"!=typeof window&&window.log===c&&(window.log=d),c},c.getLoggers=function(){return v},c.default=c,c})?r.call(a,t,a,e):r)||(e.exports=n)}()},function(e,a,t){(function(a){const r=t(2);e.exports={entry:"./src/index.js",output:{filename:"dxf-parser.js",path:r.resolve(a,"dist"),library:"DxfParser",libraryTarget:"umd",libraryExport:"default",globalObject:"typeof self !== 'undefined' ? self : this"}}}).call(this,"/")},function(e,a,t){(function(e){function t(e,a){for(var t=0,r=e.length-1;r>=0;r--){var n=e[r];"."===n?e.splice(r,1):".."===n?(e.splice(r,1),t++):t&&(e.splice(r,1),t--)}if(a)for(;t--;t)e.unshift("..");return e}function r(e,a){if(e.filter)return e.filter(a);for(var t=[],r=0;r<e.length;r++)a(e[r],r,e)&&t.push(e[r]);return t}a.resolve=function(){for(var a="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i=o>=0?arguments[o]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(a=i+"/"+a,n="/"===i.charAt(0))}return(n?"/":"")+(a=t(r(a.split("/"),(function(e){return!!e})),!n).join("/"))||"."},a.normalize=function(e){var o=a.isAbsolute(e),i="/"===n(e,-1);return(e=t(r(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},a.isAbsolute=function(e){return"/"===e.charAt(0)},a.join=function(){var e=Array.prototype.slice.call(arguments,0);return a.normalize(r(e,(function(e,a){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},a.relative=function(e,t){function r(e){for(var a=0;a<e.length&&""===e[a];a++);for(var t=e.length-1;t>=0&&""===e[t];t--);return a>t?[]:e.slice(a,t-a+1)}e=a.resolve(e).substr(1),t=a.resolve(t).substr(1);for(var n=r(e.split("/")),o=r(t.split("/")),i=Math.min(n.length,o.length),u=i,l=0;l<i;l++)if(n[l]!==o[l]){u=l;break}var s=[];for(l=u;l<n.length;l++)s.push("..");return(s=s.concat(o.slice(u))).join("/")},a.sep="/",a.delimiter=":",a.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var a=e.charCodeAt(0),t=47===a,r=-1,n=!0,o=e.length-1;o>=1;--o)if(47===(a=e.charCodeAt(o))){if(!n){r=o;break}}else n=!1;return-1===r?t?"/":".":t&&1===r?"/":e.slice(0,r)},a.basename=function(e,a){var t=function(e){"string"!=typeof e&&(e+="");var a,t=0,r=-1,n=!0;for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!n){t=a+1;break}}else-1===r&&(n=!1,r=a+1);return-1===r?"":e.slice(t,r)}(e);return a&&t.substr(-1*a.length)===a&&(t=t.substr(0,t.length-a.length)),t},a.extname=function(e){"string"!=typeof e&&(e+="");for(var a=-1,t=0,r=-1,n=!0,o=0,i=e.length-1;i>=0;--i){var u=e.charCodeAt(i);if(47!==u)-1===r&&(n=!1,r=i+1),46===u?-1===a?a=i:1!==o&&(o=1):-1!==a&&(o=-1);else if(!n){t=i+1;break}}return-1===a||-1===r||0===o||1===o&&a===r-1&&a===t+1?"":e.slice(a,r)};var n="b"==="ab".substr(-1)?function(e,a,t){return e.substr(a,t)}:function(e,a,t){return a<0&&(a=e.length+a),e.substr(a,t)}}).call(this,t(3))},function(e,a){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(a){try{return t.call(null,e,0)}catch(a){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,s=[],c=!1,v=-1;function d(){c&&l&&(c=!1,l.length?s=l.concat(s):v=-1,s.length&&f())}function f(){if(!c){var e=u(d);c=!0;for(var a=s.length;a;){for(l=s,s=[];++v<a;)l&&l[v].run();v=-1,a=s.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(a){try{return r.call(null,e)}catch(a){return r.call(this,e)}}}(e)}}function b(e,a){this.fun=e,this.array=a}function p(){}n.nextTick=function(e){var a=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)a[t-1]=arguments[t];s.push(new b(e,a)),1!==s.length||c||u(f)},b.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(e,a,t){"use strict";function r(e){this._pointer=0,this._data=e,this._eof=!1}function n(e,a){return e<=9?a:e>=10&&e<=59?parseFloat(a):e>=60&&e<=99?parseInt(a):e>=100&&e<=109?a:e>=110&&e<=149?parseFloat(a):e>=160&&e<=179?parseInt(a):e>=210&&e<=239?parseFloat(a):e>=270&&e<=289?parseInt(a):e>=290&&e<=299?function(e){if("0"===e)return!1;if("1"===e)return!0;throw TypeError("String '"+e+"' cannot be cast to Boolean type")}(a):e>=300&&e<=369?a:e>=370&&e<=389?parseInt(a):e>=390&&e<=399?a:e>=400&&e<=409?parseInt(a):e>=410&&e<=419?a:e>=420&&e<=429?parseInt(a):e>=430&&e<=439?a:e>=440&&e<=459?parseInt(a):e>=460&&e<=469?parseFloat(a):e>=470&&e<=481||999===e||e>=1e3&&e<=1009?a:e>=1010&&e<=1059?parseFloat(a):e>=1060&&e<=1071?parseInt(a):(console.log("WARNING: Group code does not have a defined type: %j",{code:e,value:a}),a)}t.r(a),r.prototype.next=function(){var e;if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);return e={code:parseInt(this._data[this._pointer])},this._pointer++,e.value=n(e.code,this._data[this._pointer].trim()),this._pointer++,0===e.code&&"EOF"===e.value&&(this._eof=!0),this.lastReadGroup=e,e},r.prototype.peek=function(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);var e={code:parseInt(this._data[this._pointer])};return e.value=n(e.code,this._data[this._pointer+1].trim()),e},r.prototype.rewind=function(e){e=e||1,this._pointer=this._pointer-2*e},r.prototype.hasNext=function(){return!this._eof&&!(this._pointer>this._data.length-2)},r.prototype.isEOF=function(){return this._eof};var o=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function i(e){var a={};e.rewind();var t=e.next(),r=t.code;if(a.x=t.value,r+=10,(t=e.next()).code!=r)throw new Error("Expected code for point value to be "+r+" but got "+t.code+".");return a.y=t.value,r+=10,(t=e.next()).code!=r?(e.rewind(),a):(a.z=t.value,a)}function u(e,a){switch(a.code){case 0:e.type=a.value;break;case 5:e.handle=a.value;break;case 6:e.lineType=a.value;break;case 8:e.layer=a.value;break;case 48:e.lineTypeScale=a.value;break;case 60:e.visible=0===a.value;break;case 62:e.colorIndex=a.value,e.color=(t=Math.abs(a.value),o[t]);break;case 67:e.inPaperSpace=0!==a.value;break;case 100:break;case 330:e.ownerHandle=a.value;break;case 347:e.materialObjectHandle=a.value;break;case 370:e.lineweight=a.value;break;case 420:e.color=a.value;break;case 440:e.transparencyValue=a.value;break;case 1e3:e.extendedData=e.extendedData||{},e.extendedData.customStrings=e.extendedData.customStrings||[],e.extendedData.customStrings.push(a.value);break;case 1001:e.extendedData=e.extendedData||{},e.extendedData.applicationName=a.value;break;default:return!1}var t;return!0}function l(){}function s(e,a){var t,r=[],n=!1,o=!1;for(t=0;t<=4;t++){for(var i={};"EOF"!==a&&0!==a.code&&!o;){switch(a.code){case 10:case 11:case 12:case 13:if(n){o=!0;continue}i.x=a.value,n=!0;break;case 20:case 21:case 22:case 23:i.y=a.value;break;case 30:case 31:case 32:case 33:i.z=a.value;break;default:return r}a=e.next()}r.push(i),n=!1,o=!1}return e.rewind(),r}function c(){}function v(){}function d(){}function f(){}function b(){}function p(){}l.ForEntityName="3DFACE",l.prototype.parseEntity=function(e,a){var t={type:a.value,vertices:[]};for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 70:t.shape=1==(1&a.value),t.hasContinuousLinetypePattern=128==(128&a.value);break;case 10:t.vertices=s(e,a),a=e.lastReadGroup;break;default:u(t,a)}a=e.next()}return t},c.ForEntityName="ARC",c.prototype.parseEntity=function(e,a){var t;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.center=i(e);break;case 40:t.radius=a.value;break;case 50:t.startAngle=Math.PI/180*a.value;break;case 51:t.endAngle=Math.PI/180*a.value,t.angleLength=t.endAngle-t.startAngle;break;default:u(t,a)}a=e.next()}return t},v.ForEntityName="ATTDEF",v.prototype.parseEntity=function(e,a){var t={type:a.value,scale:1,textStyle:"STANDARD"};for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 1:t.text=a.value;break;case 2:t.tag=a.value;break;case 3:t.prompt=a.value;break;case 7:t.textStyle=a.value;break;case 10:t.startPoint=i(e);break;case 11:t.endPoint=i(e);break;case 39:t.thickness=a.value;break;case 40:t.textHeight=a.value;break;case 41:t.scale=a.value;break;case 50:t.rotation=a.value;break;case 51:t.obliqueAngle=a.value;break;case 70:t.invisible=!!(1&a.value),t.constant=!!(2&a.value),t.verificationRequired=!!(4&a.value),t.preset=!!(8&a.value);break;case 71:t.backwards=!!(2&a.value),t.mirrored=!!(4&a.value);break;case 72:t.horizontalJustification=a.value;break;case 73:t.fieldLength=a.value;break;case 74:t.verticalJustification=a.value;break;case 100:break;case 210:t.extrusionDirectionX=a.value;break;case 220:t.extrusionDirectionY=a.value;break;case 230:t.extrusionDirectionZ=a.value;break;default:u(t,a)}a=e.next()}return t},d.ForEntityName="CIRCLE",d.prototype.parseEntity=function(e,a){var t,r;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.center=i(e);break;case 40:t.radius=a.value;break;case 50:t.startAngle=Math.PI/180*a.value;break;case 51:(r=Math.PI/180*a.value)<t.startAngle?t.angleLength=r+2*Math.PI-t.startAngle:t.angleLength=r-t.startAngle,t.endAngle=r;break;default:u(t,a)}a=e.next()}return t},f.ForEntityName="DIMENSION",f.prototype.parseEntity=function(e,a){var t;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 2:t.block=a.value;break;case 10:t.anchorPoint=i(e);break;case 11:t.middleOfText=i(e);break;case 12:t.insertionPoint=i(e);break;case 13:t.linearOrAngularPoint1=i(e);break;case 14:t.linearOrAngularPoint2=i(e);break;case 15:t.diameterOrRadiusPoint=i(e);break;case 16:t.arcPoint=i(e);break;case 70:t.dimensionType=a.value;break;case 71:t.attachmentPoint=a.value;break;case 42:t.actualMeasurement=a.value;break;case 1:t.text=a.value;break;case 50:t.angle=a.value;break;default:u(t,a)}a=e.next()}return t},b.ForEntityName="ELLIPSE",b.prototype.parseEntity=function(e,a){var t;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.center=i(e);break;case 11:t.majorAxisEndPoint=i(e);break;case 21:t.majorAxisEndPointY=a.value;break;case 31:t.majorAxisEndPointZ=a.value;break;case 40:t.axisRatio=a.value;break;case 41:t.startAngle=a.value;break;case 42:t.endAngle=a.value;break;case 210:t.extrusionDirectionX=a.value;break;case 220:t.extrusionDirectionY=a.value;break;case 230:t.extrusionDirectionZ=a.value;break;case 2:t.name=a.value;break;default:u(t,a)}a=e.next()}return t},p.ForEntityName="HATCH";var y={0:"default",1:"external",2:"polyline",4:"derived",8:"textbox",16:"outermost"},k={1:"line",2:"arc",3:"ellipse",4:"spline"};function h(e,a){if(!e.numPaths||0===e.numPaths)return!1;var t=e.boundaryPathData;if("polyline"===t.type)console.log("Handle polyline boundary data. Barf.");else switch(a.code){case 93:t.numEdges=a.value;break;case 72:t.edgeType=k[a.value];break;default:console.log("unahandled boundaryPath code "+a.code)}return t}function x(){}function g(){}function E(){}function m(e,a){if(!e||e<=0)throw Error("n must be greater than 0 verticies");var t,r=[],n=!1,o=!1,i=a.lastReadGroup;for(t=0;t<e;t++){for(var u={};"EOF"!==i&&0!==i.code&&!o;){switch(i.code){case 10:if(n){o=!0;continue}u.x=i.value,n=!0;break;case 20:u.y=i.value;break;case 30:u.z=i.value;break;case 40:u.startWidth=i.value;break;case 41:u.endWidth=i.value;break;case 42:0!=i.value&&(u.bulge=i.value);break;default:return n&&r.push(u),a.rewind(),r}i=a.next()}r.push(u),n=!1,o=!1}return a.rewind(),r}p.prototype.parseEntity=function(e,a){console.log("EntityParser.prototype.parseEntity HATCH");var t={type:a.value,elevationPoint:{x:null,y:null,z:null},extrusionDirection:{x:null,y:null,z:null}};for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 210:t.extrusionDirection.x=a.value;break;case 220:t.extrusionDirection.y=a.value;break;case 230:t.extrusionDirection.z=a.value;break;case 2:t.hatchPatternName=a.value;break;case 70:t.solidFillFlag=a.value;break;case 63:t.patternFillColor=a.value;break;case 71:t.associativityFlag=a.value;break;case 91:t.numPaths=a.value;break;default:u(t,a)||(92===a.code?(t.boundaryPathData={type:y[a.value]},a=e.next()):t.boundaryPathData=h(t,a))}a=e.next()}return console.log(t),t},x.ForEntityName="INSERT",x.prototype.parseEntity=function(e,a){var t;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 2:t.name=a.value;break;case 41:t.xScale=a.value;break;case 42:t.yScale=a.value;break;case 43:t.zScale=a.value;break;case 10:t.position=i(e);break;case 41:t.xScale=a.value;break;case 42:t.yScale=a.value;break;case 43:t.zScale=a.value;break;case 50:t.rotation=a.value;break;case 66:t.attributesFollow=a.value;break;case 70:t.columnCount=a.value;break;case 71:t.rowCount=a.value;break;case 44:t.columnSpacing=a.value;break;case 45:t.rowSpacing=a.value;break;case 210:t.extrusionDirection=i(e);break;default:u(t,a)}a=e.next()}return t},g.ForEntityName="LINE",g.prototype.parseEntity=function(e,a){var t={type:a.value,vertices:[]};for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.vertices.unshift(i(e));break;case 11:t.vertices.push(i(e));break;case 210:t.extrusionDirection=i(e);break;case 100:break;default:u(t,a)}a=e.next()}return t},E.ForEntityName="LWPOLYLINE",E.prototype.parseEntity=function(e,a){var t={type:a.value,vertices:[]},r=0;for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 38:t.elevation=a.value;break;case 39:t.depth=a.value;break;case 70:t.shape=1==(1&a.value),t.hasContinuousLinetypePattern=128==(128&a.value);break;case 90:r=a.value;break;case 10:t.vertices=m(r,e);break;case 43:0!==a.value&&(t.width=a.value);break;case 210:t.extrusionDirectionX=a.value;break;case 220:t.extrusionDirectionY=a.value;break;case 230:t.extrusionDirectionZ=a.value;break;default:u(t,a)}a=e.next()}return t};t(1);function w(){}function T(){}function F(){}function P(){}function N(e,a){var t={type:a.value};for(a=e.next();"EOF"!=a&&0!=a.code;)u(t,a),a=e.next();return t}function O(){}function S(){}function A(){}w.ForEntityName="MTEXT",w.prototype.parseEntity=function(e,a){var t={type:a.value};for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 3:case 1:t.text?t.text+=a.value:t.text=a.value;break;case 10:t.position=i(e);break;case 11:t.xVector=a.value;break;case 21:t.yVector=a.value;break;case 31:t.zVector=a.value;break;case 40:t.height=a.value;break;case 41:t.width=a.value;break;case 50:t.rotation=a.value;break;case 71:t.attachmentPoint=a.value;break;case 72:t.drawingDirection=a.value;break;case 7:t.styleName=a.value;break;case 90:t.backgroundFill=a.value;break;case 63:t.backgroundFillColor=a.value;break;default:u(t,a)}a=e.next()}return t},T.ForEntityName="POINT",T.prototype.parseEntity=function(e,a){var t;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.position=i(e);break;case 39:t.thickness=a.value;break;case 210:t.extrusionDirection=i(e);break;case 100:break;default:u(t,a)}a=e.next()}return t},F.ForEntityName="VERTEX",F.prototype.parseEntity=function(e,a){var t={type:a.value};for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.x=a.value;break;case 20:t.y=a.value;break;case 30:t.z=a.value;break;case 40:case 41:break;case 42:0!=a.value&&(t.bulge=a.value);break;case 70:t.curveFittingVertex=0!=(1&a.value),t.curveFitTangent=0!=(2&a.value),t.splineVertex=0!=(8&a.value),t.splineControlPoint=0!=(16&a.value),t.threeDPolylineVertex=0!=(32&a.value),t.threeDPolylineMesh=0!=(64&a.value),t.polyfaceMeshVertex=0!=(128&a.value);break;case 50:break;case 71:t.faceA=a.value;break;case 72:t.faceB=a.value;break;case 73:t.faceC=a.value;break;case 74:t.faceD=a.value;break;default:u(t,a)}a=e.next()}return t},P.ForEntityName="POLYLINE",P.prototype.parseEntity=function(e,a){var t={type:a.value,vertices:[]};for(a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:case 20:case 30:break;case 39:t.thickness=a.value;break;case 40:case 41:break;case 70:t.shape=0!=(1&a.value),t.includesCurveFitVertices=0!=(2&a.value),t.includesSplineFitVertices=0!=(4&a.value),t.is3dPolyline=0!=(8&a.value),t.is3dPolygonMesh=0!=(16&a.value),t.is3dPolygonMeshClosed=0!=(32&a.value),t.isPolyfaceMesh=0!=(64&a.value),t.hasContinuousLinetypePattern=0!=(128&a.value);break;case 71:case 72:case 73:case 74:case 75:break;case 210:t.extrusionDirection=i(e);break;default:u(t,a)}a=e.next()}return t.vertices=function(e,a){var t=new F,r=[];for(;!e.isEOF();)if(0===a.code)if("VERTEX"===a.value)r.push(t.parseEntity(e,a)),a=e.lastReadGroup;else if("SEQEND"===a.value){N(e,a);break}return r}(e,a),t},O.ForEntityName="SOLID",O.prototype.parseEntity=function(e,a){var t;for((t={type:a.value}).points=[],a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.points[0]=i(e);break;case 11:t.points[1]=i(e);break;case 12:t.points[2]=i(e);break;case 13:t.points[3]=i(e);break;case 210:t.extrusionDirection=i(e);break;default:u(t,a)}a=e.next()}return t},S.ForEntityName="SPLINE",S.prototype.parseEntity=function(e,a){var t;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.controlPoints||(t.controlPoints=[]),t.controlPoints.push(i(e));break;case 11:t.fitPoints||(t.fitPoints=[]),t.fitPoints.push(i(e));break;case 12:t.startTangent=i(e);break;case 13:t.endTangent=i(e);break;case 40:t.knotValues||(t.knotValues=[]),t.knotValues.push(a.value);break;case 70:0!=(1&a.value)&&(t.closed=!0),0!=(2&a.value)&&(t.periodic=!0),0!=(4&a.value)&&(t.rational=!0),0!=(8&a.value)&&(t.planar=!0),0!=(16&a.value)&&(t.planar=!0,t.linear=!0);break;case 71:t.degreeOfSplineCurve=a.value;break;case 72:t.numberOfKnots=a.value;break;case 73:t.numberOfControlPoints=a.value;break;case 74:t.numberOfFitPoints=a.value;break;case 210:t.normalVector=i(e);break;default:u(t,a)}a=e.next()}return t},A.ForEntityName="TEXT",A.prototype.parseEntity=function(e,a){var t;for(t={type:a.value},a=e.next();"EOF"!==a&&0!==a.code;){switch(a.code){case 10:t.startPoint=i(e);break;case 11:t.endPoint=i(e);break;case 40:t.textHeight=a.value;break;case 41:t.xScale=a.value;break;case 50:t.rotation=a.value;break;case 1:t.text=a.value;break;case 72:t.halign=a.value;break;case 73:t.valign=a.value;break;case 71:t.textGenFlags=a.value;break;case 39:t.thickness=a.value;break;case 7:t.styleName=a.value;break;default:u(t,a)}a=e.next()}return t};var L=t(0),D=t.n(L);function C(){var e;this._entityHandlers={},(e=this).registerEntityHandler(l),e.registerEntityHandler(c),e.registerEntityHandler(v),e.registerEntityHandler(d),e.registerEntityHandler(f),e.registerEntityHandler(b),e.registerEntityHandler(x),e.registerEntityHandler(g),e.registerEntityHandler(E),e.registerEntityHandler(w),e.registerEntityHandler(T),e.registerEntityHandler(P),e.registerEntityHandler(O),e.registerEntityHandler(S),e.registerEntityHandler(A),e.registerEntityHandler(p)}function R(e){D.a.debug("unhandled group "+I(e))}function I(e){return e.code+":"+e.value}D.a.setLevel("error"),C.prototype.parse=function(e,a){throw new Error("read() not implemented. Use readSync()")},C.prototype.registerEntityHandler=function(e){var a=new e;this._entityHandlers[e.ForEntityName]=a},C.prototype.parseSync=function(e){return"string"==typeof e?this._parse(e):(console.error("Cannot read dxf source of type `"+typeof e),null)},C.prototype.parseStream=function(e,a){var t="",r=this;e.on("data",(function(e){t+=e})),e.on("end",(function(){try{var e=r._parse(t)}catch(e){return a(e)}a(null,e)})),e.on("error",(function(e){a(e)}))},C.prototype._parse=function(e){var a,t,n={},i=0,u=e.split(/\r\n|\r|\n/g);if(!(a=new r(u)).hasNext())throw Error("Empty file");var l=this,s=function(e,a){return t.code===e&&t.value===a},c=function(){var e=null,r=null,n={};for(t=a.next();;){if(s(0,"ENDSEC")){e&&(n[e]=r);break}9===t.code?(e&&(n[e]=r),e=t.value):10===t.code?r={x:t.value}:20===t.code?r.y=t.value:30===t.code?r.z=t.value:r=t.value,t=a.next()}return t=a.next(),n},v=function(){var e,r={};for(t=a.next();"EOF"!==t.value&&!s(0,"ENDSEC");)s(0,"BLOCK")?(D.a.debug("block {"),e=d(),D.a.debug("}"),h(e),e.name?r[e.name]=e:D.a.error('block with handle "'+e.handle+'" is missing a name.')):(R(t),t=a.next());return r},d=function(){var e={};for(t=a.next();"EOF"!==t.value;){switch(t.code){case 1:e.xrefPath=t.value,t=a.next();break;case 2:e.name=t.value,t=a.next();break;case 3:e.name2=t.value,t=a.next();break;case 5:e.handle=t.value,t=a.next();break;case 8:e.layer=t.value,t=a.next();break;case 10:e.position=k(),t=a.next();break;case 67:e.paperSpace=!(!t.value||1!=t.value),t=a.next();break;case 70:0!=t.value&&(e.type=t.value),t=a.next();break;case 100:t=a.next();break;case 330:e.ownerHandle=t.value,t=a.next();break;case 0:if("ENDBLK"==t.value)break;e.entities=y(!0);break;default:R(t),t=a.next()}if(s(0,"ENDBLK")){t=a.next();break}}return e},f=function(){var e={};for(t=a.next();"EOF"!==t.value&&!s(0,"ENDSEC");){s(0,"TABLE")?(t=a.next(),p[t.value]?(D.a.debug(t.value+" Table {"),e[p[t.value].tableName]=b(),D.a.debug("}")):D.a.debug("Unhandled Table "+t.value)):t=a.next()}return t=a.next(),e};var b=function(){var e,r=p[t.value],n={},o=0;for(t=a.next();!s(0,"ENDTAB");)switch(t.code){case 5:n.handle=t.value,t=a.next();break;case 330:n.ownerHandle=t.value,t=a.next();break;case 100:"AcDbSymbolTable"===t.value||R(t),t=a.next();break;case 70:o=t.value,t=a.next();break;case 0:t.value===r.dxfSymbolName?n[r.tableRecordsProperty]=r.parseTableRecords():(R(t),t=a.next());break;default:R(t),t=a.next()}var i=n[r.tableRecordsProperty];return i&&(i.constructor===Array?e=i.length:"object"==typeof i&&(e=Object.keys(i).length),o!==e&&D.a.warn("Parsed "+e+" "+r.dxfSymbolName+"'s but expected "+o)),t=a.next(),n},p={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:function(){var e=[],r={};for(D.a.debug("ViewPort {"),t=a.next();!s(0,"ENDTAB");)switch(t.code){case 2:r.name=t.value,t=a.next();break;case 10:r.lowerLeftCorner=k(),t=a.next();break;case 11:r.upperRightCorner=k(),t=a.next();break;case 12:r.center=k(),t=a.next();break;case 13:r.snapBasePoint=k(),t=a.next();break;case 14:r.snapSpacing=k(),t=a.next();break;case 15:r.gridSpacing=k(),t=a.next();break;case 16:r.viewDirectionFromTarget=k(),t=a.next();break;case 17:r.viewTarget=k(),t=a.next();break;case 42:r.lensLength=t.value,t=a.next();break;case 43:r.frontClippingPlane=t.value,t=a.next();break;case 44:r.backClippingPlane=t.value,t=a.next();break;case 45:r.viewHeight=t.value,t=a.next();break;case 50:r.snapRotationAngle=t.value,t=a.next();break;case 51:r.viewTwistAngle=t.value,t=a.next();break;case 79:r.orthographicType=t.value,t=a.next();break;case 110:r.ucsOrigin=k(),t=a.next();break;case 111:r.ucsXAxis=k(),t=a.next();break;case 112:r.ucsYAxis=k(),t=a.next();break;case 110:r.ucsOrigin=k(),t=a.next();break;case 281:r.renderMode=t.value,t=a.next();break;case 281:r.defaultLightingType=t.value,t=a.next();break;case 292:r.defaultLightingOn=t.value,t=a.next();break;case 330:r.ownerHandle=t.value,t=a.next();break;case 63:case 421:case 431:r.ambientColor=t.value,t=a.next();break;case 0:"VPORT"===t.value&&(D.a.debug("}"),e.push(r),D.a.debug("ViewPort {"),r={},t=a.next());break;default:R(t),t=a.next()}return D.a.debug("}"),e.push(r),e}},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:function(){var e,r,n={},o={};for(D.a.debug("LType {"),t=a.next();!s(0,"ENDTAB");)switch(t.code){case 2:o.name=t.value,e=t.value,t=a.next();break;case 3:o.description=t.value,t=a.next();break;case 73:(r=t.value)>0&&(o.pattern=[]),t=a.next();break;case 40:o.patternLength=t.value,t=a.next();break;case 49:o.pattern.push(t.value),t=a.next();break;case 0:D.a.debug("}"),r>0&&r!==o.pattern.length&&D.a.warn("lengths do not match on LTYPE pattern"),n[e]=o,o={},D.a.debug("LType {"),t=a.next();break;default:t=a.next()}return D.a.debug("}"),n[e]=o,n}},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:function(){var e,r,n={},i={};for(D.a.debug("Layer {"),t=a.next();!s(0,"ENDTAB");)switch(t.code){case 2:i.name=t.value,e=t.value,t=a.next();break;case 6:i.lineType=t.value,t=a.next();break;case 62:i.visible=t.value>=0,i.colorIndex=Math.abs(t.value),i.color=(r=i.colorIndex,o[r]),t=a.next();break;case 70:i.frozen=0!=(1&t.value)||0!=(2&t.value),t=a.next();break;case 370:i.lineWeight=t.value,t=a.next();break;case 0:"LAYER"===t.value&&(D.a.debug("}"),n[e]=i,D.a.debug("Layer {"),i={},e=void 0,t=a.next());break;default:R(t),t=a.next()}return D.a.debug("}"),n[e]=i,n}},STYLE:{tableRecordsProperty:"styles",tableName:"style",dxfSymbolName:"STYLE",parseTableRecords:function(){var e,r={},n={};for(D.a.debug("Style {"),t=a.next();!s(0,"ENDTAB");)switch(t.code){case 2:n.name=t.value,e=t.value,t=a.next();break;case 40:n.fixedTextHeight=t.value,t=a.next();break;case 41:n.widthFactor=t.value,t=a.next();break;case 50:n.obliqueAngle=t.value,t=a.next();break;case 71:n.textGenerationFlags=t.value,t=a.next();break;case 3:n.primaryFontName=t.value,t=a.next();break;case 4:n.bigFontName=t.value,t=a.next();break;case 1071:n.fontDetails=t.value,t=a.next();break;case 0:"STYLE"===t.value&&(D.a.debug("}"),r[e]=n,D.a.debug("Style {"),n={},e=void 0,t=a.next());break;default:R(t),t=a.next()}return D.a.debug("}"),r[e]=n,r}}},y=function(e){var r=[],n=e?"ENDBLK":"ENDSEC";for(e||(t=a.next());;)if(0===t.code){if(t.value===n)break;var o,i=l._entityHandlers[t.value];if(null==i){D.a.warn("Unhandled entity "+t.value),t=a.next();continue}D.a.debug(t.value+" {"),o=i.parseEntity(a,t),t=a.lastReadGroup,D.a.debug("}"),h(o),r.push(o)}else t=a.next();return"ENDSEC"==n&&(t=a.next()),r},k=function(){var e={},r=t.code;if(e.x=t.value,r+=10,(t=a.next()).code!=r)throw new Error("Expected code for point value to be "+r+" but got "+t.code+".");return e.y=t.value,r+=10,(t=a.next()).code!=r?(a.rewind(),e):(e.z=t.value,e)},h=function(e){if(!e)throw new TypeError("entity cannot be undefined or null");e.handle||(e.handle=i++)};return function(){for(t=a.next();!a.isEOF();)if(0===t.code&&"SECTION"===t.value){if(2!==(t=a.next()).code){console.error("Unexpected code %s after 0:SECTION",I(t)),t=a.next();continue}"HEADER"===t.value?(D.a.debug("> HEADER"),n.header=c(),D.a.debug("<")):"BLOCKS"===t.value?(D.a.debug("> BLOCKS"),n.blocks=v(),D.a.debug("<")):"ENTITIES"===t.value?(D.a.debug("> ENTITIES"),n.entities=y(!1),D.a.debug("<")):"TABLES"===t.value?(D.a.debug("> TABLES"),n.tables=f(),D.a.debug("<")):"EOF"===t.value?D.a.debug("EOF"):D.a.warn("Skipping section '%s'",t.value)}else t=a.next()}(),n};a.default=C}]).default}));