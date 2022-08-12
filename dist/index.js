(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('trtc-js-sdk')) :
	typeof define === 'function' && define.amd ? define(['exports', 'trtc-js-sdk'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["rtc-device-detector"] = {}, global.TRTC));
})(this, (function (exports, TRTC) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var TRTC__default = /*#__PURE__*/_interopDefaultLegacy(TRTC);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var rtcDetect = {exports: {}};

	(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var r=function(e){return e&&e.Math==Math&&e},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")(),o=function(e){try{return !!e()}catch(t){return !0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,c={f:u&&!a.call({1:2},1)?function(e){var t=u(this,e);return !!t&&t.enumerable}:a},s=function(e,t){return {enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},f={}.toString,l=function(e){return f.call(e).slice(8,-1)},p="".split,d=o((function(){return !Object("z").propertyIsEnumerable(0)}))?function(e){return "String"==l(e)?p.call(e,""):Object(e)}:Object,h=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return d(h(e))},y=function(e){return "object"==typeof e?null!==e:"function"==typeof e},g=function(e,t){if(!y(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!y(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!y(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!y(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,b=function(e,t){return m.call(e,t)},w=n.document,S=y(w)&&y(w.createElement),x=function(e){return S?w.createElement(e):{}},E=!i&&!o((function(){return 7!=Object.defineProperty(x("div"),"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,k={f:i?O:function(e,t){if(e=v(e),t=g(t,!0),E)try{return O(e,t)}catch(r){}if(b(e,t))return s(!c.f.call(e,t),e[t])}},R=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},T=Object.defineProperty,C={f:i?T:function(e,t,r){if(R(e),t=g(t,!0),R(r),E)try{return T(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return "value"in r&&(e[t]=r.value),e}},I=i?function(e,t,r){return C.f(e,t,s(1,r))}:function(e,t,r){return e[t]=r,e},j=function(e,t){try{I(n,e,t);}catch(r){n[e]=t;}return t},P=n["__core-js_shared__"]||j("__core-js_shared__",{}),A=Function.toString;"function"!=typeof P.inspectSource&&(P.inspectSource=function(e){return A.call(e)});var L,M,D,_=P.inspectSource,F=n.WeakMap,B="function"==typeof F&&/native code/.test(_(F)),N=t((function(e){(e.exports=function(e,t){return P[e]||(P[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});})),V=0,W=Math.random(),Q=function(e){return "Symbol("+String(void 0===e?"":e)+")_"+(++V+W).toString(36)},H=N("keys"),G=function(e){return H[e]||(H[e]=Q(e))},U={},z=n.WeakMap;if(B){var K=P.state||(P.state=new z),$=K.get,X=K.has,Y=K.set;L=function(e,t){return t.facade=e,Y.call(K,e,t),t},M=function(e){return $.call(K,e)||{}},D=function(e){return X.call(K,e)};}else {var q=G("state");U[q]=!0,L=function(e,t){return t.facade=e,I(e,q,t),t},M=function(e){return b(e,q)?e[q]:{}},D=function(e){return b(e,q)};}var J,Z,ee={set:L,get:M,has:D,enforce:function(e){return D(e)?M(e):L(e,{})},getterFor:function(e){return function(t){var r;if(!y(t)||(r=M(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}},te=t((function(e){var t=ee.get,r=ee.enforce,o=String(String).split("String");(e.exports=function(e,t,i,a){var u,c=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof t||b(i,"name")||I(i,"name",t),(u=r(i)).source||(u.source=o.join("string"==typeof t?t:""))),e!==n?(c?!f&&e[t]&&(s=!0):delete e[t],s?e[t]=i:I(e,t,i)):s?e[t]=i:j(t,i);})(Function.prototype,"toString",(function(){return "function"==typeof this&&t(this).source||_(this)}));})),re=n,ne=function(e){return "function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?ne(re[e])||ne(n[e]):re[e]&&re[e][t]||n[e]&&n[e][t]},ie=Math.ceil,ae=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?ae:ie)(e)},ce=Math.min,se=function(e){return e>0?ce(ue(e),9007199254740991):0},fe=Math.max,le=Math.min,pe=function(e){return function(t,r,n){var o,i=v(t),a=se(i.length),u=function(e,t){var r=ue(e);return r<0?fe(r+t,0):le(r,t)}(n,a);if(e&&r!=r){for(;a>u;)if((o=i[u++])!=o)return !0}else for(;a>u;u++)if((e||u in i)&&i[u]===r)return e||u||0;return !e&&-1}},de={includes:pe(!0),indexOf:pe(!1)},he=de.indexOf,ve=function(e,t){var r,n=v(e),o=0,i=[];for(r in n)!b(U,r)&&b(n,r)&&i.push(r);for(;t.length>o;)b(n,r=t[o++])&&(~he(i,r)||i.push(r));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ge=ye.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return ve(e,ge)}},be={f:Object.getOwnPropertySymbols},we=oe("Reflect","ownKeys")||function(e){var t=me.f(R(e)),r=be.f;return r?t.concat(r(e)):t},Se=function(e,t){for(var r=we(t),n=C.f,o=k.f,i=0;i<r.length;i++){var a=r[i];b(e,a)||n(e,a,o(t,a));}},xe=/#|\.prototype\./,Ee=function(e,t){var r=ke[Oe(e)];return r==Te||r!=Re&&("function"==typeof t?o(t):!!t)},Oe=Ee.normalize=function(e){return String(e).replace(xe,".").toLowerCase()},ke=Ee.data={},Re=Ee.NATIVE="N",Te=Ee.POLYFILL="P",Ce=Ee,Ie=k.f,je=function(e,t){var r,o,i,a,u,c=e.target,s=e.global,f=e.stat;if(r=s?n:f?n[c]||j(c,{}):(n[c]||{}).prototype)for(o in t){if(a=t[o],i=e.noTargetGet?(u=Ie(r,o))&&u.value:r[o],!Ce(s?o:c+(f?".":"#")+o,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;Se(a,i);}(e.sham||i&&i.sham)&&I(a,"sham",!0),te(r,o,a,e);}},Pe=Array.isArray||function(e){return "Array"==l(e)},Ae=function(e){return Object(h(e))},Le=function(e,t,r){var n=g(t);n in e?C.f(e,n,s(0,r)):e[n]=r;},Me=!!Object.getOwnPropertySymbols&&!o((function(){return !String(Symbol())})),De=Me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,_e=N("wks"),Fe=n.Symbol,Be=De?Fe:Fe&&Fe.withoutSetter||Q,Ne=function(e){return b(_e,e)||(Me&&b(Fe,e)?_e[e]=Fe[e]:_e[e]=Be("Symbol."+e)),_e[e]},Ve=Ne("species"),We=function(e,t){var r;return Pe(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!Pe(r.prototype)?y(r)&&null===(r=r[Ve])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)},Qe=oe("navigator","userAgent")||"",He=n.process,Ge=He&&He.versions,Ue=Ge&&Ge.v8;Ue?Z=(J=Ue.split("."))[0]+J[1]:Qe&&(!(J=Qe.match(/Edge\/(\d+)/))||J[1]>=74)&&(J=Qe.match(/Chrome\/(\d+)/))&&(Z=J[1]);var ze=Z&&+Z,Ke=Ne("species"),$e=function(e){return ze>=51||!o((function(){var t=[];return (t.constructor={})[Ke]=function(){return {foo:1}},1!==t[e](Boolean).foo}))},Xe=Ne("isConcatSpreadable"),Ye=ze>=51||!o((function(){var e=[];return e[Xe]=!1,e.concat()[0]!==e})),qe=$e("concat"),Je=function(e){if(!y(e))return !1;var t=e[Xe];return void 0!==t?!!t:Pe(e)};je({target:"Array",proto:!0,forced:!Ye||!qe},{concat:function(e){var t,r,n,o,i,a=Ae(this),u=We(a,0),c=0;for(t=-1,n=arguments.length;t<n;t++)if(Je(i=-1===t?a:arguments[t])){if(c+(o=se(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,c++)r in i&&Le(u,c,i[r]);}else {if(c>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Le(u,c++,i);}return u.length=c,u}});t((function(e){var t=function(e){var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"");}catch(R){u=function(e,t,r){return e[t]=r};}function c(e,t,r,n){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=w(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg);}else "return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return {value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg);}}}(e,r,a),i}function s(e,t,r){try{return {type:"normal",arg:e.call(t,r)}}catch(R){return {type:"throw",arg:R}}}e.wrap=c;var f={};function l(){}function p(){}function d(){}var h={};h[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&r.call(y,o)&&(h=y);var g=d.prototype=l.prototype=Object.create(h);function m(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}));}));}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,u);}),(function(e){n("throw",e,a,u);})):t.resolve(l).then((function(e){f.value=e,a(f);}),(function(e){return n("throw",e,a,u)}))}u(c.arg);}(o,i,n,a);}))}return n=n?n.then(a,a):a()};}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method");}return f}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t);}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t;}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0);}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return {next:k}}function k(){return {value:void 0,done:!0}}return p.prototype=g.constructor=d,d.constructor=p,p.displayName=u(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return !!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,a,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return {__await:e}},m(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},m(g),u(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return "[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0);},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else {if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return "break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r);}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=t;}catch(r){Function("r","regeneratorRuntime = r")(t);}}));function Ze(e){return (Ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function et(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value;}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o);}function tt(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){et(i,n,o,a,u,"next",e);}function u(e){et(i,n,o,a,u,"throw",e);}a(void 0);}))}}function rt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function nt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n);}return r}function it(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(r),!0).forEach((function(t){nt(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ot(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}function at(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c;}finally{try{n||null==u.return||u.return();}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ut(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ut(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ut(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ct,st=Object.keys||function(e){return ve(e,ye)},ft=i?Object.defineProperties:function(e,t){R(e);for(var r,n=st(t),o=n.length,i=0;o>i;)C.f(e,r=n[i++],t[r]);return e},lt=oe("document","documentElement"),pt=G("IE_PROTO"),dt=function(){},ht=function(e){return "<script>"+e+"<\/script>"},vt=function(){try{ct=document.domain&&new ActiveXObject("htmlfile");}catch(n){}var e,t;vt=ct?function(e){e.write(ht("")),e.close();var t=e.parentWindow.Object;return e=null,t}(ct):((t=x("iframe")).style.display="none",lt.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(ht("document.F=Object")),e.close(),e.F);for(var r=ye.length;r--;)delete vt.prototype[ye[r]];return vt()};U[pt]=!0;var yt=Object.create||function(e,t){var r;return null!==e?(dt.prototype=R(e),r=new dt,dt.prototype=null,r[pt]=e):r=vt(),void 0===t?r:ft(r,t)},gt=Ne("unscopables"),mt=Array.prototype;null==mt[gt]&&C.f(mt,gt,{configurable:!0,value:yt(null)});var bt,wt,St,xt=function(e){mt[gt][e]=!0;},Et={},Ot=!o((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),kt=G("IE_PROTO"),Rt=Object.prototype,Tt=Ot?Object.getPrototypeOf:function(e){return e=Ae(e),b(e,kt)?e[kt]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Rt:null},Ct=Ne("iterator"),It=!1;[].keys&&("next"in(St=[].keys())?(wt=Tt(Tt(St)))!==Object.prototype&&(bt=wt):It=!0),null==bt&&(bt={}),b(bt,Ct)||I(bt,Ct,(function(){return this}));var jt={IteratorPrototype:bt,BUGGY_SAFARI_ITERATORS:It},Pt=C.f,At=Ne("toStringTag"),Lt=function(e,t,r){e&&!b(e=r?e:e.prototype,At)&&Pt(e,At,{configurable:!0,value:t});},Mt=jt.IteratorPrototype,Dt=function(){return this},_t=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array;}catch(n){}return function(r,n){return R(r),function(e){if(!y(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(n),t?e.call(r,n):r.__proto__=n,r}}():void 0),Ft=jt.IteratorPrototype,Bt=jt.BUGGY_SAFARI_ITERATORS,Nt=Ne("iterator"),Vt=function(){return this},Wt=function(e,t,r,n,o,i,a){!function(e,t,r){var n=t+" Iterator";e.prototype=yt(Mt,{next:s(1,r)}),Lt(e,n,!1),Et[n]=Dt;}(r,t,n);var u,c,f,l=function(e){if(e===o&&y)return y;if(!Bt&&e in h)return h[e];switch(e){case"keys":case"values":case"entries":return function(){return new r(this,e)}}return function(){return new r(this)}},p=t+" Iterator",d=!1,h=e.prototype,v=h[Nt]||h["@@iterator"]||o&&h[o],y=!Bt&&v||l(o),g="Array"==t&&h.entries||v;if(g&&(u=Tt(g.call(new e)),Ft!==Object.prototype&&u.next&&(Tt(u)!==Ft&&(_t?_t(u,Ft):"function"!=typeof u[Nt]&&I(u,Nt,Vt)),Lt(u,p,!0))),"values"==o&&v&&"values"!==v.name&&(d=!0,y=function(){return v.call(this)}),h[Nt]!==y&&I(h,Nt,y),Et[t]=y,o)if(c={values:l("values"),keys:i?y:l("keys"),entries:l("entries")},a)for(f in c)(Bt||d||!(f in h))&&te(h,f,c[f]);else je({target:t,proto:!0,forced:Bt||d},c);return c},Qt=ee.set,Ht=ee.getterFor("Array Iterator"),Gt=Wt(Array,"Array",(function(e,t){Qt(this,{type:"Array Iterator",target:v(e),index:0,kind:t});}),(function(){var e=Ht(this),t=e.target,r=e.kind,n=e.index++;return !t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values");Et.Arguments=Et.Array,xt("keys"),xt("values"),xt("entries");var Ut=!o((function(){return Object.isExtensible(Object.preventExtensions({}))})),zt=t((function(e){var t=C.f,r=Q("meta"),n=0,o=Object.isExtensible||function(){return !0},i=function(e){t(e,r,{value:{objectID:"O"+ ++n,weakData:{}}});},a=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!y(e))return "symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!b(e,r)){if(!o(e))return "F";if(!t)return "E";i(e);}return e[r].objectID},getWeakData:function(e,t){if(!b(e,r)){if(!o(e))return !0;if(!t)return !1;i(e);}return e[r].weakData},onFreeze:function(e){return Ut&&a.REQUIRED&&o(e)&&!b(e,r)&&i(e),e}};U[r]=!0;})),Kt=(zt.REQUIRED,zt.fastKey,zt.getWeakData,zt.onFreeze,Ne("iterator")),$t=Array.prototype,Xt=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},Yt=function(e,t,r){if(Xt(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}},qt={};qt[Ne("toStringTag")]="z";var Jt="[object z]"===String(qt),Zt=Ne("toStringTag"),er="Arguments"==l(function(){return arguments}()),tr=Jt?l:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),Zt))?r:er?l(t):"Object"==(n=l(t))&&"function"==typeof t.callee?"Arguments":n},rr=Ne("iterator"),nr=function(e){var t=e.return;if(void 0!==t)return R(t.call(e)).value},or=function(e,t){this.stopped=e,this.result=t;},ir=function(e,t,r){var n,o,i,a,u,c,s,f,l=r&&r.that,p=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),v=Yt(t,l,1+p+h),y=function(e){return n&&nr(n),new or(!0,e)},g=function(e){return p?(R(e),h?v(e[0],e[1],y):v(e[0],e[1])):h?v(e,y):v(e)};if(d)n=e;else {if("function"!=typeof(o=function(e){if(null!=e)return e[rr]||e["@@iterator"]||Et[tr(e)]}(e)))throw TypeError("Target is not iterable");if(void 0!==(f=o)&&(Et.Array===f||$t[Kt]===f)){for(i=0,a=se(e.length);a>i;i++)if((u=g(e[i]))&&u instanceof or)return u;return new or(!1)}n=o.call(e);}for(c=n.next;!(s=c.call(n)).done;){try{u=g(s.value);}catch(m){throw nr(n),m}if("object"==typeof u&&u&&u instanceof or)return u}return new or(!1)},ar=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e},ur=Ne("iterator"),cr=!1;try{var sr=0,fr={next:function(){return {done:!!sr++}},return:function(){cr=!0;}};fr[ur]=function(){return this},Array.from(fr,(function(){throw 2}));}catch(Da){}var lr=function(e,t){if(!t&&!cr)return !1;var r=!1;try{var n={};n[ur]=function(){return {next:function(){return {done:r=!0}}}},e(n);}catch(Da){}return r},pr=function(e,t,r){for(var n in t)te(e,n,t[n],r);return e},dr=Ne("species"),hr=function(e){var t=oe(e),r=C.f;i&&t&&!t[dr]&&r(t,dr,{configurable:!0,get:function(){return this}});},vr=C.f,yr=zt.fastKey,gr=ee.set,mr=ee.getterFor,br=(function(e,t,r){var i=-1!==e.indexOf("Map"),a=-1!==e.indexOf("Weak"),u=i?"set":"add",c=n[e],s=c&&c.prototype,f=c,l={},p=function(e){var t=s[e];te(s,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return !(a&&!y(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return a&&!y(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return !(a&&!y(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this});};if(Ce(e,"function"!=typeof c||!(a||s.forEach&&!o((function(){(new c).entries().next();})))))f=r.getConstructor(t,e,i,u),zt.REQUIRED=!0;else if(Ce(e,!0)){var d=new f,h=d[u](a?{}:-0,1)!=d,v=o((function(){d.has(1);})),g=lr((function(e){new c(e);})),m=!a&&o((function(){for(var e=new c,t=5;t--;)e[u](t,t);return !e.has(-0)}));g||((f=t((function(t,r){ar(t,f,e);var n=function(e,t,r){var n,o;return _t&&"function"==typeof(n=t.constructor)&&n!==r&&y(o=n.prototype)&&o!==r.prototype&&_t(e,o),e}(new c,t,f);return null!=r&&ir(r,n[u],{that:n,AS_ENTRIES:i}),n}))).prototype=s,s.constructor=f),(v||m)&&(p("delete"),p("has"),i&&p("get")),(m||h)&&p(u),a&&s.clear&&delete s.clear;}l[e]=f,je({global:!0,forced:f!=c},l),Lt(f,e),a||r.setStrong(f,e,i);}("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),{getConstructor:function(e,t,r,n){var o=e((function(e,a){ar(e,o,t),gr(e,{type:t,index:yt(null),first:void 0,last:void 0,size:0}),i||(e.size=0),null!=a&&ir(a,e[n],{that:e,AS_ENTRIES:r});})),a=mr(t),u=function(e,t,r){var n,o,u=a(e),s=c(e,t);return s?s.value=r:(u.last=s={index:o=yr(t,!0),key:t,value:r,previous:n=u.last,next:void 0,removed:!1},u.first||(u.first=s),n&&(n.next=s),i?u.size++:e.size++,"F"!==o&&(u.index[o]=s)),e},c=function(e,t){var r,n=a(e),o=yr(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return pr(o.prototype,{clear:function(){for(var e=a(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next;e.first=e.last=void 0,i?e.size=0:this.size=0;},delete:function(e){var t=a(this),r=c(this,e);if(r){var n=r.next,o=r.previous;delete t.index[r.index],r.removed=!0,o&&(o.next=n),n&&(n.previous=o),t.first==r&&(t.first=n),t.last==r&&(t.last=o),i?t.size--:this.size--;}return !!r},forEach:function(e){for(var t,r=a(this),n=Yt(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous;},has:function(e){return !!c(this,e)}}),pr(o.prototype,r?{get:function(e){var t=c(this,e);return t&&t.value},set:function(e,t){return u(this,0===e?0:e,t)}}:{add:function(e){return u(this,e=0===e?0:e,e)}}),i&&vr(o.prototype,"size",{get:function(){return a(this).size}}),o},setStrong:function(e,t,r){var n=t+" Iterator",o=mr(t),i=mr(n);Wt(e,t,(function(e,t){gr(this,{type:n,target:e,state:o(e),kind:t,last:void 0});}),(function(){for(var e=i(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),hr(t);}}),Jt?{}.toString:function(){return "[object "+tr(this)+"]"});Jt||te(Object.prototype,"toString",br,{unsafe:!0});var wr=function(e){return function(t,r){var n,o,i=String(h(t)),a=ue(r),u=i.length;return a<0||a>=u?e?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===u||(o=i.charCodeAt(a+1))<56320||o>57343?e?i.charAt(a):n:e?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},Sr={codeAt:wr(!1),charAt:wr(!0)},xr=Sr.charAt,Er=ee.set,Or=ee.getterFor("String Iterator");Wt(String,"String",(function(e){Er(this,{type:"String Iterator",string:String(e),index:0});}),(function(){var e,t=Or(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=xr(r,n),t.index+=e.length,{value:e,done:!1})}));var kr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Rr=Ne("iterator"),Tr=Ne("toStringTag"),Cr=Gt.values;for(var Ir in kr){var jr=n[Ir],Pr=jr&&jr.prototype;if(Pr){if(Pr[Rr]!==Cr)try{I(Pr,Rr,Cr);}catch(Da){Pr[Rr]=Cr;}if(Pr[Tr]||I(Pr,Tr,Ir),kr[Ir])for(var Ar in Gt)if(Pr[Ar]!==Gt[Ar])try{I(Pr,Ar,Gt[Ar]);}catch(Da){Pr[Ar]=Gt[Ar];}}}var Lr="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Mr=RegExp("^"+Lr+Lr+"*"),Dr=RegExp(Lr+Lr+"*$"),_r=function(e){return function(t){var r=String(h(t));return 1&e&&(r=r.replace(Mr,"")),2&e&&(r=r.replace(Dr,"")),r}},Fr={start:_r(1),end:_r(2),trim:_r(3)}.trim,Br=n.parseFloat,Nr=1/Br("\t\n\v\f\r                　\u2028\u2029\ufeff-0")!=-Infinity?function(e){var t=Fr(String(e)),r=Br(t);return 0===r&&"-"==t.charAt(0)?-0:r}:Br;je({global:!0,forced:parseFloat!=Nr},{parseFloat:Nr});var Vr=function(){var e=R(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function Wr(e,t){return RegExp(e,t)}var Qr,Hr,Gr={UNSUPPORTED_Y:o((function(){var e=Wr("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:o((function(){var e=Wr("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},Ur=RegExp.prototype.exec,zr=String.prototype.replace,Kr=Ur,$r=(Qr=/a/,Hr=/b*/g,Ur.call(Qr,"a"),Ur.call(Hr,"a"),0!==Qr.lastIndex||0!==Hr.lastIndex),Xr=Gr.UNSUPPORTED_Y||Gr.BROKEN_CARET,Yr=void 0!==/()??/.exec("")[1];($r||Yr||Xr)&&(Kr=function(e){var t,r,n,o,i=this,a=Xr&&i.sticky,u=Vr.call(i),c=i.source,s=0,f=e;return a&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),f=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(c="(?: "+c+")",f=" "+f,s++),r=new RegExp("^(?:"+c+")",u)),Yr&&(r=new RegExp("^"+c+"$(?!\\s)",u)),$r&&(t=i.lastIndex),n=Ur.call(a?r:i,f),a?n?(n.input=n.input.slice(s),n[0]=n[0].slice(s),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:$r&&n&&(i.lastIndex=i.global?n.index+n[0].length:t),Yr&&n&&n.length>1&&zr.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0);})),n});var qr=Kr;je({target:"RegExp",proto:!0,forced:/./.exec!==qr},{exec:qr});var Jr=Ne("species"),Zr=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),en="$0"==="a".replace(/./,"$0"),tn=Ne("replace"),rn=!!/./[tn]&&""===/./[tn]("a","$0"),nn=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),on=Sr.charAt,an=function(e,t,r){return t+(r?on(e,t).length:1)},un=function(e,t){var r=e.exec;if("function"==typeof r){var n=r.call(e,t);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==l(e))throw TypeError("RegExp#exec called on incompatible receiver");return qr.call(e,t)};!function(e,t,r,n){var i=Ne(e),a=!o((function(){var t={};return t[i]=function(){return 7},7!=""[e](t)})),u=a&&!o((function(){var t=!1,r=/a/;return "split"===e&&((r={}).constructor={},r.constructor[Jr]=function(){return r},r.flags="",r[i]=/./[i]),r.exec=function(){return t=!0,null},r[i](""),!t}));if(!a||!u||"replace"===e&&(!Zr||!en||rn)||"split"===e&&!nn){var c=/./[i],s=r(i,""[e],(function(e,t,r,n,o){return t.exec===qr?a&&!o?{done:!0,value:c.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:en,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:rn}),f=s[0],l=s[1];te(String.prototype,e,f),te(RegExp.prototype,i,2==t?function(e,t){return l.call(e,this,t)}:function(e){return l.call(e,this)});}n&&I(RegExp.prototype[i],"sham",!0);}("match",1,(function(e,t,r){return [function(t){var r=h(this),n=null==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](String(r))},function(e){var n=r(t,e,this);if(n.done)return n.value;var o=R(e),i=String(this);if(!o.global)return un(o,i);var a=o.unicode;o.lastIndex=0;for(var u,c=[],s=0;null!==(u=un(o,i));){var f=String(u[0]);c[s]=f,""===f&&(o.lastIndex=an(i,se(o.lastIndex),a)),s++;}return 0===s?null:c}]}));var cn=window.navigator&&window.navigator.userAgent||"",sn=/AppleWebKit\/([\d.]+)/i.exec(cn),fn=(sn&&parseFloat(sn.pop()),/iPad/i.test(cn)),ln=/iPhone/i.test(cn)&&!fn,pn=/iPod/i.test(cn),dn=ln||fn||pn,hn=(dn&&function(){var e=cn.match(/OS (\d+)_/i);e&&e[1]&&e[1];}(),/Android/i.test(cn));hn&&function(){var e=cn.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!e)return null;var t=e[1]&&parseFloat(e[1]),r=e[2]&&parseFloat(e[2]);return t&&r?parseFloat("".concat(e[1],".").concat(e[2])):t||null}();var yn=(hn&&/webkit/i.test(cn),/Firefox/i.test(cn)),gn=yn&&function(){var e=cn.match(/Firefox\/(\d+)/);return e&&e[1]?parseFloat(e[1]):null}(),mn=/Edge\//i.test(cn),bn=mn&&function(){var e=cn.match(/Edge\/(\d+)/i);if(e&&e[1])return e[1]}(),wn=/Edg\//i.test(cn),Sn=wn&&function(){var e=cn.match(/Edg\/(\d+)/);return e&&e[1]?parseFloat(e[1]):null}(),xn=/SogouMobileBrowser\//i.test(cn),En=xn&&function(){var e=cn.match(/SogouMobileBrowser\/(\d+)/);return e&&e[1]?parseFloat(e[1]):null}(),On=/MetaSr\s/i.test(cn),kn=On&&function(){var e=cn.match(/MetaSr(\s\d+(\.\d+)+)/);return e&&e[1]?parseFloat(e[1]):null}(),Rn=/TBS\/\d+/i.test(cn),Tn=Rn&&function(){var e=cn.match(/TBS\/(\d+)/i);if(e&&e[1])return e[1]}(),Cn=/XWEB\/\d+/i.test(cn),In=Cn&&function(){var e=cn.match(/XWEB\/(\d+)/i);if(e&&e[1])return e[1]}(),jn=(/MSIE\s8\.0/.test(cn),/MSIE\/\d+/i.test(cn)&&function(){var e=/MSIE\s(\d+)\.\d/.exec(cn),t=e&&parseFloat(e[1]);!t&&/Trident\/7.0/i.test(cn)&&/rv:11.0/.test(cn)&&(t=11);}(),/windowswechat/i.test(cn),/(micromessenger|webbrowser)/i.test(cn)),Pn=jn&&function(){var e=cn.match(/MicroMessenger\/(\d+)/i);if(e&&e[1])return e[1]}(),An=!Rn&&/MQQBrowser\/\d+/i.test(cn)&&/COVC\/\d+/i.test(cn),Ln=!Rn&&/MQQBrowser\/\d+/i.test(cn)&&!/COVC\/\d+/i.test(cn),Mn=(Ln||An)&&function(){var e=cn.match(/ MQQBrowser\/([\d.]+)/);return e&&e[1]?e[1]:null}(),Dn=!Rn&&/ QQBrowser\/\d+/i.test(cn),_n=Dn&&function(){var e=cn.match(/ QQBrowser\/([\d.]+)/);return e&&e[1]?e[1]:null}(),Fn=!Rn&&/QQBrowserLite\/\d+/i.test(cn),Bn=Fn&&function(){var e=cn.match(/QQBrowserLite\/([\d.]+)/);return e&&e[1]?e[1]:null}(),Nn=!Rn&&/MQBHD\/\d+/i.test(cn),Vn=Nn&&function(){var e=cn.match(/MQBHD\/([\d.]+)/);return e&&e[1]?e[1]:null}(),Wn=/Windows/i.test(cn),Qn=!dn&&/MAC OS X/i.test(cn),Hn=!hn&&/Linux/i.test(cn),Gn=(/MicroMessenger/i.test(cn),/UCBrowser/i.test(cn)),Un=(/Electron/i.test(cn),/MiuiBrowser/i.test(cn)),zn=Un&&function(){var e=cn.match(/MiuiBrowser\/([\d.]+)/);return e&&e[1]?e[1]:null}(),Kn=/HuaweiBrowser/i.test(cn),$n=Kn&&function(){var e=cn.match(/HuaweiBrowser\/([\d.]+)/);return e&&e[1]?e[1]:null}(),Xn=/SamsungBrowser/i.test(cn),Yn=Xn&&function(){var e=cn.match(/SamsungBrowser\/([\d.]+)/);return e&&e[1]?e[1]:null}(),qn=/HeyTapBrowser/i.test(cn),Jn=qn&&function(){var e=cn.match(/HeyTapBrowser\/([\d.]+)/);return e&&e[1]?e[1]:null}(),Zn=/VivoBrowser/i.test(cn),eo=Zn&&function(){var e=cn.match(/VivoBrowser\/([\d.]+)/);return e&&e[1]?e[1]:null}(),to=/Chrome/i.test(cn),ro=!mn&&!On&&!xn&&!Rn&&!Cn&&!wn&&!Dn&&!Un&&!Kn&&!Xn&&!qn&&!Zn&&/Chrome/i.test(cn),no=(ro&&function(){var e=cn.match(/Chrome\/(\d+)/);e&&e[1]&&parseFloat(e[1]);}(),ro&&function(){var e=cn.match(/Chrome\/([\d.]+)/);return e&&e[1]?e[1]:null}()),oo=!to&&!Ln&&!An&&!Fn&&!Nn&&/Safari/i.test(cn),io=oo&&function(){var e=cn.match(/Version\/([\d.]+)/);return e&&e[1]?e[1]:null}(),ao="file:"===location.protocol||"localhost"===location.hostname||/^\d+\.\d+\.\d+\.\d+$/.test(location.hostname),uo=new Map([[hn,"Android"],[dn,"iOS"],[Wn,"Windows"],[Qn,"MacOS"],[Hn,"Linux"]]),co=new Map([[yn,["Firefox",gn]],[wn,["Edg",Sn]],[ro,["Chrome",no]],[oo,["Safari",io]],[Rn,["TBS",Tn]],[Cn,["XWEB",In]],[jn&&ln,["WeChat",Pn]],[Dn,["QQ(Win)",_n]],[Ln,["QQ(Mobile)",Mn]],[An,["QQ(Mobile X5)",Mn]],[Fn,["QQ(Mac)",Bn]],[Nn,["QQ(iPad)",Vn]],[Un,["MI",zn]],[Kn,["HW",$n]],[Xn,["Samsung",Yn]],[qn,["OPPO",Jn]],[Zn,["VIVO",eo]],[mn,["EDGE",bn]],[xn,["SogouMobile",En]],[On,["Sogou",kn]]]),so=function(){var e="unknown",t="unknown";if(co.get(!0)){var r=at(co.get(!0),2);e=r[0],t=r[1];}return {name:e,version:t}},fo=navigator.userAgent,lo=function(){var e=void 0;screen.width&&(e={width:screen.width?screen.width*window.devicePixelRatio:"",height:screen.height?screen.height*window.devicePixelRatio:""});return e},po=[].push,ho=function(e){var t=1==e,r=2==e,n=3==e,o=4==e,i=6==e,a=7==e,u=5==e||i;return function(c,s,f,l){for(var p,h,v=Ae(c),y=d(v),g=Yt(s,f,3),m=se(y.length),b=0,w=l||We,S=t?w(c,m):r||a?w(c,0):void 0;m>b;b++)if((u||b in y)&&(h=g(p=y[b],b,v),e))if(t)S[b]=h;else if(h)switch(e){case 3:return !0;case 5:return p;case 6:return b;case 2:po.call(S,p);}else switch(e){case 4:return !1;case 7:po.call(S,p);}return i?-1:n||o?o:S}},vo={forEach:ho(0),map:ho(1),filter:ho(2),some:ho(3),every:ho(4),find:ho(5),findIndex:ho(6),filterOut:ho(7)},yo=Object.defineProperty,go={},mo=function(e){throw e},bo=function(e,t){if(b(go,e))return go[e];t||(t={});var r=[][e],n=!!b(t,"ACCESSORS")&&t.ACCESSORS,a=b(t,0)?t[0]:mo,u=b(t,1)?t[1]:void 0;return go[e]=!!r&&!o((function(){if(n&&!i)return !0;var e={length:-1};n?yo(e,1,{enumerable:!0,get:mo}):e[1]=1,r.call(e,a,u);}))},wo=vo.filter,So=$e("filter"),xo=bo("filter");je({target:"Array",proto:!0,forced:!So||!xo},{filter:function(e){return wo(this,e,arguments.length>1?arguments[1]:void 0)}});var Eo=function(e,t){var r=[][e];return !!r&&o((function(){r.call(null,t||function(){throw 1},1);}))},Oo=vo.forEach,ko=Eo("forEach"),Ro=bo("forEach"),To=ko&&Ro?[].forEach:function(e){return Oo(this,e,arguments.length>1?arguments[1]:void 0)};je({target:"Array",proto:!0,forced:[].forEach!=To},{forEach:To});var Co=function(){for(var e={isSupported:!1},t=["AudioContext","webkitAudioContext","mozAudioContext","msAudioContext"],r=0;r<t.length;r++)if(t[r]in window){e.isSupported=!0;break}return e.isSupported},Io=function(){var e=!1;return yn&&void 0!==window.mozRTCPeerConnection?"getSenders"in window.mozRTCPeerConnection.prototype&&(e=!0):ro&&void 0!==window.webkitRTCPeerConnection&&"getSenders"in window.webkitRTCPeerConnection.prototype&&(e=!0),e},jo=de.indexOf,Po=[].indexOf,Ao=!!Po&&1/[1].indexOf(1,-0)<0,Lo=Eo("indexOf"),Mo=bo("indexOf",{ACCESSORS:!0,1:0});je({target:"Array",proto:!0,forced:Ao||!Lo||!Mo},{indexOf:function(e){return Ao?Po.apply(this,arguments)||0:jo(this,e,arguments.length>1?arguments[1]:void 0)}});var Do=vo.map,_o=$e("map"),Fo=bo("map");for(var Bo in je({target:"Array",proto:!0,forced:!_o||!Fo},{map:function(e){return Do(this,e,arguments.length>1?arguments[1]:void 0)}}),kr){var No=n[Bo],Vo=No&&No.prototype;if(Vo&&Vo.forEach!==To)try{I(Vo,"forEach",To);}catch(Da){Vo.forEach=To;}}je({target:"Array",stat:!0},{isArray:Pe});var Wo=Date.prototype,Qo=Wo.toString,Ho=Wo.getTime;new Date(NaN)+""!="Invalid Date"&&te(Wo,"toString",(function(){var e=Ho.call(this);return e==e?Qo.call(this):"Invalid Date"}));var Go=o((function(){Tt(1);}));je({target:"Object",stat:!0,forced:Go,sham:!Ot},{getPrototypeOf:function(e){return Tt(Ae(e))}});var Uo=RegExp.prototype,zo=Uo.toString,Ko=o((function(){return "/a/b"!=zo.call({source:"a",flags:"b"})})),$o="toString"!=zo.name;(Ko||$o)&&te(RegExp.prototype,"toString",(function(){var e=R(this),t=String(e.source),r=e.flags;return "/"+t+"/"+String(void 0===r&&e instanceof RegExp&&!("flags"in Uo)?Vr.call(e):r)}),{unsafe:!0});var Xo=Object.prototype.hasOwnProperty;function Yo(e){if(null==e)return !0;if("boolean"==typeof e)return !1;if("number"==typeof e)return 0===e;if("string"==typeof e)return 0===e.length;if("function"==typeof e)return 0===e.length;if(Array.isArray(e))return 0===e.length;if(e instanceof Error)return ""===e.message;if(function(e){if(!e||"object"!==Ze(e)||"[object Object]"!=Object.prototype.toString.call(e))return !1;var t=Object.getPrototypeOf(e);if(null===t)return !0;var r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return "function"==typeof r&&r instanceof r&&Function.prototype.toString.call(r)===Function.prototype.toString.call(Object)}(e))switch(Object.prototype.toString.call(e)){case"[object File]":case"[object Map]":case"[object Set]":return 0===e.size;case"[object Object]":for(var t in e)if(Xo.call(e,t))return !1;return !0}return !1}var qo=function(e){return void 0===e},Jo=function(){var e=tt(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ri()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Zo(t);case 4:if(!(r=e.sent).audio){e.next=11;break}return e.next=8,ui();case 8:if(0!==e.sent.length){e.next=11;break}throw new Error({message:"no microphone detected, but you are trying to get audio stream, please check your microphone and the configuration on TRTC.createStream."});case 11:if(!r.video){e.next=17;break}return e.next=14,ai();case 14:if(0!==e.sent.length){e.next=17;break}throw new Error({message:"no camera detected, but you are trying to get video stream, please check your camera and the configuration on TRTC.createStream."});case 17:return e.next=19,navigator.mediaDevices.getUserMedia(r);case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Zo(e){return ei.apply(this,arguments)}function ei(){return (ei=tt(regeneratorRuntime.mark((function e(t){var r,n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={echoCancellation:t.echoCancellation,autoGainControl:t.autoGainControl,noiseSuppression:t.noiseSuppression},t.audio){e.next=5;break}r=!1,e.next=15;break;case 5:if(Yo(t.microphoneId)){e.next=9;break}r=it({deviceId:{exact:t.microphoneId},sampleRate:t.sampleRate,channelCount:t.channelCount},r),e.next=15;break;case 9:return r=it({sampleRate:t.sampleRate,channelCount:t.channelCount},r),e.next=12,ui();case 12:n=e.sent,(o=n.filter((function(e){var t=e.deviceId;return t.length>0&&"default"!==t}))).length>0&&(r.deviceId={exact:o[0].deviceId});case 15:return i={},i=!qo(t.facingMode)&&t.video?{facingMode:t.facingMode,width:t.width,height:t.height,frameRate:t.frameRate}:!Yo(t.cameraId)&&t.video?{deviceId:{exact:t.cameraId},width:t.width,height:t.height,frameRate:t.frameRate}:!!t.video&&(!!qo(t.width)||{width:t.width,height:t.height,frameRate:t.frameRate}),e.abrupt("return",{audio:r,video:i});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ti=function(){var e=tt(regeneratorRuntime.mark((function e(t){var r,n,o,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[7680,4320],o={},e.prev=2,e.next=5,Jo({cameraId:t,video:!0,width:n[0],height:n[1]});case 5:r=e.sent,i=r.getTracks(),a=i[0].getSettings(),o={maxWidth:a.width,maxHeight:a.height},i[0].stop(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:return e.abrupt("return",o);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),ri=function(){return !!qo(navigator.mediaDevices)&&(console.error("navigator.mediaDevices is not supported on your browser"),!0)},ni=function(){return "http:"===location.protocol&&!ao&&(console.error("you should use https"),!0)},oi=function(){if(!navigator.mediaDevices)return !1;var e=["getUserMedia","enumerateDevices"];return e.filter((function(e){return e in navigator.mediaDevices})).length===e.length},ii=function(){var e=tt(regeneratorRuntime.mark((function e(){var t,r,n,o,i,a,u,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ni()&&!ri()){e.next=2;break}return e.abrupt("return",[]);case 2:return t=!1,r=!1,n=[],o=[],i=[],a={},e.next=13,navigator.mediaDevices.enumerateDevices();case 13:e.sent.forEach((function(e){var u={};for(var c in e)try{"function"!=typeof e[c]&&(u[c]=e[c]);}catch(s){}a[u.deviceId+u.label+u.kind]||("audio"===u.kind&&(u.kind="audioinput"),"video"===u.kind&&(u.kind="videoinput"),u.deviceId||(u.deviceId=u.id),u.label?("videoinput"!==u.kind||t||(t=!0),"audioinput"!==u.kind||r||(r=!0)):"videoinput"===u.kind?u.label="Camera ".concat(i.length+1):"audioinput"===u.kind?u.label="Microphone ".concat(n.length+1):"audiooutput"===u.kind?u.label="Speaker ".concat(o.length+1):u.label="Please invoke getUserMedia once.","audioinput"===u.kind&&-1===n.indexOf(u)&&n.push(u),"audiooutput"===u.kind&&-1===o.indexOf(u)&&o.push(u),"videoinput"===u.kind&&-1===i.indexOf(u)&&i.push(u),a[u.deviceId+u.label+u.kind]=u);})),u=0;case 16:if(!(u<i.length)){e.next=25;break}return c=i[u],e.next=20,ti(c.deviceId);case 20:s=e.sent,c.resolution=s;case 22:u++,e.next=16;break;case 25:return e.abrupt("return",{hasWebCamPermission:t,hasMicrophonePermission:r,cameras:i,speakers:o,microphones:n});case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ai=function(){var e=tt(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ni()&&!ri()){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,navigator.mediaDevices.enumerateDevices();case 4:return t=e.sent,e.abrupt("return",t.filter((function(e){return "videoinput"===e.kind})).map((function(e,t){var r=e.label;e.label||(r="camera_".concat(t));var n={label:r,deviceId:e.deviceId,kind:e.kind};return e.groupId&&(n.groupId=e.groupId),n})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ui=function(){var e=tt(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ni()&&!ri()){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,navigator.mediaDevices.enumerateDevices();case 4:return t=e.sent,e.abrupt("return",t.filter((function(e){return "audioinput"===e.kind})).map((function(e,t){var r=e.label;e.label||(r="microphone_".concat(t));var n={label:r,deviceId:e.deviceId,kind:e.kind};return e.groupId&&(n.groupId=e.groupId),n})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ci=function(){var e=tt(regeneratorRuntime.mark((function e(){var t,r,n,o,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",r=!1,n=!1,e.prev=3,o=new RTCPeerConnection,(i=document.createElement("canvas")).getContext("2d"),a=i.captureStream(0),o.addTrack(a.getVideoTracks()[0],a),e.next=11,o.createOffer();case 11:return -1!==(t=e.sent).sdp.toLowerCase().indexOf("h264")&&(r=!0),-1!==t.sdp.toLowerCase().indexOf("vp8")&&(n=!0),o.close(),e.abrupt("return",{isH264EncodeSupported:r,isVp8EncodeSupported:n});case 18:return e.prev=18,e.t0=e.catch(3),e.abrupt("return",{isH264EncodeSupported:!1,isVp8EncodeSupported:!1});case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(){return e.apply(this,arguments)}}(),si=function(){var e=tt(regeneratorRuntime.mark((function e(){var t,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",r=!1,n=!1,e.prev=3,o=new RTCPeerConnection,e.next=7,o.createOffer({offerToReceiveAudio:1,offerToReceiveVideo:1});case 7:return -1!==(t=e.sent).sdp.toLowerCase().indexOf("h264")&&(r=!0),-1!==t.sdp.toLowerCase().indexOf("vp8")&&(n=!0),o.close(),e.abrupt("return",{isH264DecodeSupported:r,isVp8DecodeSupported:n});case 14:return e.prev=14,e.t0=e.catch(3),e.abrupt("return",{isH264DecodeSupported:!1,isVp8DecodeSupported:!1});case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),fi=vo.find,li=!0,pi=bo("find");"find"in[]&&Array(1).find((function(){li=!1;})),je({target:"Array",proto:!0,forced:li||!pi},{find:function(e){return fi(this,e,arguments.length>1?arguments[1]:void 0)}}),xt("find");var di,hi,vi,yi=n.Promise,gi=Ne("species"),mi=/(iphone|ipod|ipad).*applewebkit/i.test(Qe),bi="process"==l(n.process),wi=n.location,Si=n.setImmediate,xi=n.clearImmediate,Ei=n.process,Oi=n.MessageChannel,ki=n.Dispatch,Ri=0,Ti={},Ci=function(e){if(Ti.hasOwnProperty(e)){var t=Ti[e];delete Ti[e],t();}},Ii=function(e){return function(){Ci(e);}},ji=function(e){Ci(e.data);},Pi=function(e){n.postMessage(e+"",wi.protocol+"//"+wi.host);};Si&&xi||(Si=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return Ti[++Ri]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t);},di(Ri),Ri},xi=function(e){delete Ti[e];},bi?di=function(e){Ei.nextTick(Ii(e));}:ki&&ki.now?di=function(e){ki.now(Ii(e));}:Oi&&!mi?(vi=(hi=new Oi).port2,hi.port1.onmessage=ji,di=Yt(vi.postMessage,vi,1)):n.addEventListener&&"function"==typeof postMessage&&!n.importScripts&&wi&&"file:"!==wi.protocol&&!o(Pi)?(di=Pi,n.addEventListener("message",ji,!1)):di="onreadystatechange"in x("script")?function(e){lt.appendChild(x("script")).onreadystatechange=function(){lt.removeChild(this),Ci(e);};}:function(e){setTimeout(Ii(e),0);});var Ai,Li,Mi,Di,_i,Fi,Bi,Ni,Vi={set:Si,clear:xi},Wi=k.f,Qi=Vi.set,Hi=n.MutationObserver||n.WebKitMutationObserver,Gi=n.document,Ui=n.process,zi=n.Promise,Ki=Wi(n,"queueMicrotask"),$i=Ki&&Ki.value;$i||(Ai=function(){var e,t;for(bi&&(e=Ui.domain)&&e.exit();Li;){t=Li.fn,Li=Li.next;try{t();}catch(Da){throw Li?Di():Mi=void 0,Da}}Mi=void 0,e&&e.enter();},!mi&&!bi&&Hi&&Gi?(_i=!0,Fi=Gi.createTextNode(""),new Hi(Ai).observe(Fi,{characterData:!0}),Di=function(){Fi.data=_i=!_i;}):zi&&zi.resolve?(Bi=zi.resolve(void 0),Ni=Bi.then,Di=function(){Ni.call(Bi,Ai);}):Di=bi?function(){Ui.nextTick(Ai);}:function(){Qi.call(n,Ai);});var Xi,Yi,qi,Ji,Zi=$i||function(e){var t={fn:e,next:void 0};Mi&&(Mi.next=t),Li||(Li=t,Di()),Mi=t;},ea=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n;})),this.resolve=Xt(t),this.reject=Xt(r);},ta={f:function(e){return new ea(e)}},ra=function(e,t){if(R(e),y(t)&&t.constructor===e)return t;var r=ta.f(e);return (0, r.resolve)(t),r.promise},na=function(e){try{return {error:!1,value:e()}}catch(Da){return {error:!0,value:Da}}},oa=Vi.set,ia=Ne("species"),aa="Promise",ua=ee.get,ca=ee.set,sa=ee.getterFor(aa),fa=yi,la=n.TypeError,pa=n.document,da=n.process,ha=oe("fetch"),va=ta.f,ya=va,ga=!!(pa&&pa.createEvent&&n.dispatchEvent),ma="function"==typeof PromiseRejectionEvent,ba=Ce(aa,(function(){if(!(_(fa)!==String(fa))){if(66===ze)return !0;if(!bi&&!ma)return !0}if(ze>=51&&/native code/.test(fa))return !1;var e=fa.resolve(1),t=function(e){e((function(){}),(function(){}));};return (e.constructor={})[ia]=t,!(e.then((function(){}))instanceof t)})),wa=ba||!lr((function(e){fa.all(e).catch((function(){}));})),Sa=function(e){var t;return !(!y(e)||"function"!=typeof(t=e.then))&&t},xa=function(e,t){if(!e.notified){e.notified=!0;var r=e.reactions;Zi((function(){for(var n=e.value,o=1==e.state,i=0;r.length>i;){var a,u,c,s=r[i++],f=o?s.ok:s.fail,l=s.resolve,p=s.reject,d=s.domain;try{f?(o||(2===e.rejection&&Ra(e),e.rejection=1),!0===f?a=n:(d&&d.enter(),a=f(n),d&&(d.exit(),c=!0)),a===s.promise?p(la("Promise-chain cycle")):(u=Sa(a))?u.call(a,l,p):l(a)):p(n);}catch(Da){d&&!c&&d.exit(),p(Da);}}e.reactions=[],e.notified=!1,t&&!e.rejection&&Oa(e);}));}},Ea=function(e,t,r){var o,i;ga?((o=pa.createEvent("Event")).promise=t,o.reason=r,o.initEvent(e,!1,!0),n.dispatchEvent(o)):o={promise:t,reason:r},!ma&&(i=n["on"+e])?i(o):"unhandledrejection"===e&&function(e,t){var r=n.console;r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t));}("Unhandled promise rejection",r);},Oa=function(e){oa.call(n,(function(){var t,r=e.facade,n=e.value;if(ka(e)&&(t=na((function(){bi?da.emit("unhandledRejection",n,r):Ea("unhandledrejection",r,n);})),e.rejection=bi||ka(e)?2:1,t.error))throw t.value}));},ka=function(e){return 1!==e.rejection&&!e.parent},Ra=function(e){oa.call(n,(function(){var t=e.facade;bi?da.emit("rejectionHandled",t):Ea("rejectionhandled",t,e.value);}));},Ta=function(e,t,r){return function(n){e(t,n,r);}},Ca=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,xa(e,!0));},Ia=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw la("Promise can't be resolved itself");var n=Sa(t);n?Zi((function(){var r={done:!1};try{n.call(t,Ta(Ia,r,e),Ta(Ca,r,e));}catch(Da){Ca(r,Da,e);}})):(e.value=t,e.state=1,xa(e,!1));}catch(Da){Ca({done:!1},Da,e);}}};ba&&(fa=function(e){ar(this,fa,aa),Xt(e),Xi.call(this);var t=ua(this);try{e(Ta(Ia,t),Ta(Ca,t));}catch(Da){Ca(t,Da);}},(Xi=function(e){ca(this,{type:aa,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0});}).prototype=pr(fa.prototype,{then:function(e,t){var r,n,o,i=sa(this),a=va((r=fa,void 0===(o=R(this).constructor)||null==(n=R(o)[gi])?r:Xt(n)));return a.ok="function"!=typeof e||e,a.fail="function"==typeof t&&t,a.domain=bi?da.domain:void 0,i.parent=!0,i.reactions.push(a),0!=i.state&&xa(i,!1),a.promise},catch:function(e){return this.then(void 0,e)}}),Yi=function(){var e=new Xi,t=ua(e);this.promise=e,this.resolve=Ta(Ia,t),this.reject=Ta(Ca,t);},ta.f=va=function(e){return e===fa||e===qi?new Yi(e):ya(e)},"function"==typeof yi&&(Ji=yi.prototype.then,te(yi.prototype,"then",(function(e,t){var r=this;return new fa((function(e,t){Ji.call(r,e,t);})).then(e,t)}),{unsafe:!0}),"function"==typeof ha&&je({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return ra(fa,ha.apply(n,arguments))}}))),je({global:!0,wrap:!0,forced:ba},{Promise:fa}),Lt(fa,aa,!1),hr(aa),qi=oe(aa),je({target:aa,stat:!0,forced:ba},{reject:function(e){var t=va(this);return t.reject.call(void 0,e),t.promise}}),je({target:aa,stat:!0,forced:ba},{resolve:function(e){return ra(this,e)}}),je({target:aa,stat:!0,forced:wa},{all:function(e){var t=this,r=va(t),n=r.resolve,o=r.reject,i=na((function(){var r=Xt(t.resolve),i=[],a=0,u=1;ir(e,(function(e){var c=a++,s=!1;i.push(void 0),u++,r.call(t,e).then((function(e){s||(s=!0,i[c]=e,--u||n(i));}),o);})),--u||n(i);}));return i.error&&o(i.value),r.promise},race:function(e){var t=this,r=va(t),n=r.reject,o=na((function(){var o=Xt(t.resolve);ir(e,(function(e){o.call(t,e).then(r.resolve,n);}));}));return o.error&&n(o.value),r.promise}});var ja=[].slice,Pa=/MSIE .\./.test(Qe),Aa=function(e){return function(t,r){var n=arguments.length>2,o=n?ja.call(arguments,2):void 0;return e(n?function(){("function"==typeof t?t:Function(t)).apply(this,o);}:t,r)}};function La(){return Ma.apply(this,arguments)}function Ma(){return (Ma=tt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=tt(regeneratorRuntime.mark((function e(t,r){var n,o,i,a,u,c,s,f,l,p,d,h,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=function(){clearInterval(v),clearInterval(a),clearTimeout(y),c.close(),s.close(),u.getTracks().forEach((function(e){return e.stop()}));},o=document.createElement("canvas"),i=o.getContext("2d"),o.width=640,o.height=480,a=setInterval((function(){i.fillText("test",0,0);}),33),u=o.captureStream(15),c=new RTCPeerConnection({}),s=new RTCPeerConnection({}),c.addEventListener("icecandidate",(function(e){s.addIceCandidate(e.candidate);})),s.addEventListener("icecandidate",(function(e){c.addIceCandidate(e.candidate);})),f=RTCRtpSender.getCapabilities("video"),l=f.codecs,p=l.find((function(e){return "video/H264"===e.mimeType})),c.addTransceiver(u.getVideoTracks()[0],{direction:"sendonly",streams:[u],sendEncodings:[{maxBitrate:5e5}]}),s.addTransceiver("video",{direction:"recvonly"}),c.getTransceivers()[0].setCodecPreferences([p]),e.next=19,c.createOffer();case 19:return d=e.sent,e.next=22,c.setLocalDescription(d);case 22:return e.next=24,s.setRemoteDescription(d);case 24:return e.next=26,s.createAnswer();case 26:return h=e.sent,e.next=29,s.setLocalDescription(h);case 29:return e.next=31,c.setRemoteDescription(h);case 31:v=-1,y=-1,y=setTimeout((function(){n(),t(!1);}),3e4),v=setInterval(tt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getStats();case 2:e.sent.forEach((function(e){"outbound-rtp"===e.type&&"video"===e.mediaType&&(void 0===e.encoderImplementation&&(n(),r(new Error("your browser does not support to detect HW acceleration enabled."))),"ExternalEncoder"===e.encoderImplementation&&(n(),t(!0)));}));case 4:case"end":return e.stop()}}),e)}))),500),e.next=40;break;case 37:e.prev=37,e.t0=e.catch(0),r(e.t0);case 40:case"end":return e.stop()}}),e,null,[[0,37]])})));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return je({global:!0,bind:!0,forced:Pa},{setTimeout:Aa(n.setTimeout),setInterval:Aa(n.setInterval)}),function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.system=null,this.APISupported=null,this.devices=null,this.codecsSupported=null,this.report=null;}var t,r,o,i,a,u,c;return t=e,(r=[{key:"isTRTCSupported",value:(c=tt(regeneratorRuntime.mark((function e(){var t,r,n,o,i,a,u,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getReportAsync();case 2:if(t=this.APISupported,r=t.isWebRTCSupported,n=t.isUserMediaSupported,o=t.isWebSocketSupported,r){e.next=5;break}return e.abrupt("return",{result:!1,reason:"you browser does not support WebRTC."});case 5:if(o){e.next=7;break}return e.abrupt("return",{result:!1,reason:"you browser does not support WebSocket."});case 7:if(n){e.next=9;break}return e.abrupt("return",{result:!1,reason:"you browser does not support getUserMedia."});case 9:if(i=this.codecsSupported,a=i.isH264EncodeSupported,u=i.isVp8EncodeSupported,c=i.isH264DecodeSupported,s=i.isVp8DecodeSupported,a||u){e.next=12;break}return e.abrupt("return",{result:!1,reason:"isH264EncodeSupported: ".concat(a," isVp8EncodeSupported: ").concat(u," ")});case 12:if(c||s){e.next=14;break}return e.abrupt("return",{result:!1,reason:"isH264DecodeSupported: ".concat(c," isVp8DecodeSupported: ").concat(s," ")});case 14:if(!(Gn||mn||wn&&Sn<80||yn&&gn<56)){e.next=16;break}return e.abrupt("return",{result:!1,reason:"your browser does not qualify, it is recommended to use Chrome and firefox."});case 16:return e.abrupt("return",{result:!0});case 17:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"getReportAsync",value:(u=tt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getSystem(),this.getAPISupported(),e.next=4,this.getCodecAsync();case 4:return e.next=6,this.getDevicesAsync();case 6:return this.report={system:this.system,APISupported:this.APISupported,codecsSupported:this.codecsSupported,devices:this.devices},e.abrupt("return",this.report);case 8:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"getCodecAsync",value:(a=tt(regeneratorRuntime.mark((function e(){var t,r,n,o,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ci();case 2:return t=e.sent,r=t.isH264EncodeSupported,n=t.isVp8EncodeSupported,e.next=7,si();case 7:return o=e.sent,i=o.isH264DecodeSupported,a=o.isVp8DecodeSupported,this.codecsSupported={isH264EncodeSupported:r,isVp8EncodeSupported:n,isH264DecodeSupported:i,isVp8DecodeSupported:a},e.abrupt("return",this.codecsSupported);case 12:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"getDevicesAsync",value:(i=tt(regeneratorRuntime.mark((function e(){var t,r,n,o,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ii();case 2:return t=e.sent,r=t.hasWebCamPermission,n=t.hasMicrophonePermission,o=t.cameras,i=t.microphones,a=t.speakers,this.devices={cameras:o,microphones:i,speakers:a,hasCameraPermission:r,hasMicrophonePermission:n},e.abrupt("return",this.devices);case 10:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"getSystem",value:function(){var e,t;return this.system={UA:fo,OS:(t="unknown",uo.get(!0)&&(t=uo.get(!0)),t),browser:so(),displayResolution:lo(),hardwareConcurrency:null===(e=window.navigator)||void 0===e?void 0:e.hardwareConcurrency},this.system}},{key:"getAPISupported",value:function(){var e,t,r;return this.APISupported={isUserMediaSupported:oi(),isWebRTCSupported:["RTCPeerConnection","webkitRTCPeerConnection","RTCIceGatherer"].filter((function(e){return e in window})).length>0,isWebSocketSupported:"WebSocket"in window&&2===window.WebSocket.CLOSING,isWebAudioSupported:Co(),isScreenCaptureAPISupported:!(null===(r=navigator.mediaDevices)||void 0===r||!r.getDisplayMedia),isCanvasCapturingSupported:(t=!1,["captureStream","mozCaptureStream","webkitCaptureStream"].forEach((function(e){"undefined"!=typeof document&&"function"==typeof document.createElement&&!t&&e in document.createElement("canvas")&&(t=!0);})),t),isVideoCapturingSupported:(e=!1,["captureStream","mozCaptureStream","webkitCaptureStream"].forEach((function(t){"undefined"!=typeof document&&"function"==typeof document.createElement&&!e&&t in document.createElement("video")&&(e=!0);})),e),isRTPSenderReplaceTracksSupported:Io(),isApplyConstraintsSupported:"undefined"!=typeof MediaStreamTrack&&"applyConstraints"in MediaStreamTrack.prototype},this.APISupported}},{key:"isHardWareAccelerationEnabled",value:(o=tt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,La();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})}])&&rt(t.prototype,r),e}()}));
	}(rtcDetect));

	var RTCDetect = rtcDetect.exports;

	//
	//
	//
	//
	//
	//

	var script$8 = {
	  name: 'Button',
	  props: {
	    type: String,
	    onClick: {
	      type: Function,
	      default: () => {},
	    },
	    className: String,
	  },
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    const options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    let hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            const originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            const existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	/* script */
	const __vue_script__$8 = script$8;
	/* template */
	var __vue_render__$8 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "button",
	    {
	      class: ["button", _vm.type, _vm.className],
	      attrs: { type: "button" },
	      on: { click: _vm.onClick },
	    },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$8 = [];
	__vue_render__$8._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$8 = undefined;
	  /* scoped */
	  const __vue_scope_id__$8 = "data-v-44646fc7";
	  /* module identifier */
	  const __vue_module_identifier__$8 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$8 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
	    __vue_inject_styles__$8,
	    __vue_script__$8,
	    __vue_scope_id__$8,
	    __vue_is_functional_template__$8,
	    __vue_module_identifier__$8,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	/**
	 * 判断设备是否连接网络
	 */
	function isOnline() {
	  const url = 'https://web.sdk.qcloud.com/trtc/webrtc/assets/trtc-logo.png';
	  return new Promise(resolve => {
	    try {
	      const xhr = new XMLHttpRequest();

	      xhr.onload = function () {
	        resolve(true);
	      };

	      xhr.onerror = function () {
	        resolve(false);
	      };

	      xhr.open('GET', url, true);
	      xhr.send();
	    } catch (err) {// console.log(err);
	    }
	  });
	}
	const NETWORK_QUALITY = {
	  0: '未知',
	  1: '极佳',
	  2: '较好',
	  3: '一般',
	  4: '差',
	  5: '极差',
	  6: '断开'
	};
	const handleGetUserMediaError = error => {
	  console.error('getUserMedia error', error);

	  switch (error.name) {
	    case 'NotReadableError':
	      // 当系统或浏览器异常的时候，可能会出现此错误，您可能需要引导用户重启电脑/浏览器来尝试恢复。
	      console.error('暂时无法访问摄像头/麦克风，请确保系统授予当前浏览器摄像头/麦克风权限，并且没有其他应用占用摄像头/麦克风');
	      return;

	    case 'NotAllowedError':
	      console.error('用户/系统已拒绝授权访问摄像头或麦克风');
	      return;

	    case 'NotFoundError':
	      // 找不到摄像头或麦克风设备
	      console.error('找不到摄像头或麦克风设备');
	      return;

	    case 'OverConstrainedError':
	      console.error('采集属性设置错误，如果您指定了 cameraId/microphoneId，请确保它们是一个有效的非空字符串');
	      return;

	    default:
	      console.error('初始化本地流时遇到未知错误, 请重试');
	      return;
	  }
	}; // 图标
	// export const CameraIcon = <svg t="1626142712993" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="28" height="28"><path d="M520.896 815.296c197.952 0 358.976-166.08 358.976-370.112s-161.088-370.112-358.976-370.112-358.848 166.016-358.848 370.112 160.96 370.112 358.848 370.112z m0-676.224c162.688 0 294.976 137.344 294.976 306.112 0 168.832-132.288 306.112-294.976 306.112-162.624 0-294.848-137.344-294.848-306.112-0.064-168.768 132.224-306.112 294.848-306.112z" p-id="3297"></path><path d="M824.256 746.112a32.128 32.128 0 0 0-29.888 56.64c21.888 11.584 27.264 20.736 27.52 22.528-1.92 20.864-106.688 69.824-300.992 69.824-191.488 0-299.072-49.536-300.864-69.824 0.128-1.664 5.056-10.432 26.176-21.888a32 32 0 0 0-30.464-56.256c-49.344 26.688-59.712 57.216-59.712 78.144 0 91.968 189.12 133.824 364.864 133.824 175.808 0 364.992-41.856 364.992-133.824 0-21.248-10.688-52.224-61.632-79.168zM520.96 618.816a173.632 173.632 0 1 0 0.128-347.264 173.632 173.632 0 0 0-0.128 347.264z m-59.968-315.648a70.976 70.976 0 1 1 0 141.952 70.976 70.976 0 0 1 0-141.952z" p-id="3298"></path></svg>;
	// export const MicIcon = <svg t="1626144633308" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3443" width="28" height="28"><path d="M801.728 364.8a32 32 0 0 0-32 32v91.392c0 129.28-115.648 234.432-257.728 234.432S254.272 617.408 254.272 488.192V393.216a32 32 0 0 0-64 0v94.976c0 157.888 133.248 286.208 300.672 296.448v99.392H357.632c-16.128 0-29.184 14.336-29.184 32.064 0 17.664 13.056 31.936 29.184 31.936h319.04c16.064 0 29.184-14.272 29.184-31.936 0-17.728-13.12-32.064-29.184-32.064H554.944v-101.376c156.992-19.776 278.784-143.488 278.784-294.464V396.8c0-17.728-14.272-32-32-32z" p-id="3444"></path><path d="M517.12 678.656a199.104 199.104 0 0 0 198.912-198.848V268.736A199.168 199.168 0 0 0 517.12 69.888a199.04 199.04 0 0 0-198.784 198.848v211.072a199.04 199.04 0 0 0 198.784 198.848z m85.056-126.784a49.856 49.856 0 1 1 0-99.648 49.856 49.856 0 0 1 0 99.648zM382.336 268.736c0-74.368 60.48-134.848 134.784-134.848a135.04 135.04 0 0 1 134.912 134.848v28.48H382.336v-28.48z" p-id="3445"></path></svg>;
	// export const SpeakerIcon = <svg t="1626144666665" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3590" width="28" height="28"><path d="M784 371.2c-16-25.6-35.2-44.8-44.8-54.4-9.6-9.6-28.8-9.6-38.4 3.2-9.6 9.6-9.6 28.8 3.2 38.4 3.2 3.2 6.4 6.4 9.6 9.6 9.6 9.6 19.2 22.4 25.6 35.2 57.6 86.4 57.6 179.2-38.4 278.4-9.6 9.6-9.6 28.8 0 38.4 9.6 9.6 28.8 9.6 38.4 0C851.2 598.4 851.2 476.8 784 371.2z" p-id="3591"></path><path d="M896 246.4c-16-25.6-35.2-48-54.4-70.4-9.6-12.8-19.2-19.2-25.6-25.6-9.6-9.6-28.8-9.6-38.4 3.2-9.6 9.6-9.6 28.8 3.2 38.4 3.2 3.2 12.8 9.6 22.4 22.4 16 19.2 32 38.4 48 64 105.6 160 105.6 336-70.4 518.4-9.6 9.6-9.6 28.8 0 38.4 9.6 9.6 28.8 9.6 38.4 0C1014.4 630.4 1014.4 425.6 896 246.4z" p-id="3592"></path><path d="M483.2 86.4l-217.6 185.6-108.8 0c-57.6 0-108.8 48-108.8 108.8l0 272c0 60.8 48 108.8 108.8 108.8l96 0 230.4 182.4c54.4 41.6 105.6 16 105.6-51.2l0-755.2C588.8 67.2 534.4 41.6 483.2 86.4zM534.4 889.6c0 22.4-3.2 22.4-19.2 9.6l-236.8-185.6c-3.2-3.2-9.6-6.4-16-6.4l-105.6 0c-28.8 0-54.4-25.6-54.4-54.4l0-272c0-28.8 25.6-54.4 54.4-54.4l118.4 0c6.4 0 12.8-3.2 16-6.4l224-192c16-12.8 16-12.8 16 6.4L531.2 889.6z" p-id="3593"></path></svg>;
	// export const NetworkIcon = <svg t="1626144678606" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3738" width="28" height="28"><path d="M955.392 514.56c0-242.688-196.608-439.296-439.296-439.296C273.408 75.264 76.8 271.872 76.8 514.56c0 242.688 196.608 439.296 439.296 439.296 116.224 0 221.696-45.056 300.032-118.784 5.12-1.536 9.728-4.096 13.312-8.704 3.072-3.072 5.12-6.656 6.656-10.752C909.824 736.768 955.392 631.296 955.392 514.56zM481.792 893.952c-0.512-1.024-1.536-1.536-2.56-2.56-47.104-40.96-85.504-89.6-114.176-143.36 38.4-15.872 79.36-25.6 121.856-28.672l0 174.592C485.376 893.952 483.328 893.952 481.792 893.952zM136.192 542.72l113.152 0c3.072 61.44 16.384 121.344 38.912 177.664-21.504 12.288-41.472 26.112-60.928 41.984C175.616 702.464 142.336 626.176 136.192 542.72zM230.4 262.656c18.944 15.36 38.912 28.672 59.392 40.96-23.552 56.832-37.376 118.272-40.448 180.736L136.704 484.352C143.36 399.872 177.664 323.072 230.4 262.656zM549.376 135.168c1.024 1.024 1.536 2.048 3.072 3.072 45.568 39.424 83.456 86.528 111.616 138.24-37.888 15.36-77.824 24.576-118.784 27.648l0-168.96C546.816 135.168 548.352 135.168 549.376 135.168zM895.488 484.352l-113.152 0c-3.584-62.464-17.408-123.392-40.96-180.736 20.992-11.776 40.96-25.6 59.904-40.96C854.528 323.072 888.832 399.872 895.488 484.352zM486.912 484.352 308.224 484.352c3.072-53.76 15.36-105.984 34.816-155.136 45.568 18.944 94.208 30.208 143.872 33.28L486.912 484.352zM486.912 542.72l0 117.76c-50.688 3.072-99.84 14.848-145.92 33.792-18.432-48.128-29.696-99.328-32.768-151.552L486.912 542.72zM545.28 542.72l178.176 0c-3.072 52.736-14.336 103.936-32.768 152.064-46.08-19.456-95.232-30.72-145.408-34.304L545.28 542.72zM545.28 484.352 545.28 362.496c49.664-3.072 98.304-14.336 143.36-32.768 19.456 49.152 31.232 101.376 34.816 154.624L545.28 484.352zM716.8 250.368c-17.408-31.744-37.376-61.952-60.928-90.112 37.888 14.848 72.704 35.84 103.424 61.44C745.472 232.448 731.136 242.176 716.8 250.368zM486.912 134.656l0 168.96c-40.96-3.072-81.408-12.288-118.784-27.648 28.16-51.712 65.536-98.304 111.104-137.728 1.024-1.024 2.56-2.56 3.584-3.584C483.84 135.168 485.376 135.168 486.912 134.656zM315.392 250.368c-14.848-8.704-28.672-18.432-42.496-28.672 30.72-25.6 65.536-46.08 102.912-60.928C352.768 188.416 332.288 218.624 315.392 250.368zM312.832 774.144c17.408 33.28 38.4 65.024 62.464 94.208-38.912-15.36-74.752-37.376-106.496-64C283.136 793.088 297.984 783.36 312.832 774.144zM545.28 894.464l0-174.592c41.984 3.072 82.944 12.8 121.344 28.672-28.672 53.76-67.072 102.4-114.176 143.36-1.024 1.024-1.536 1.536-2.56 2.56C548.352 893.952 546.816 893.952 545.28 894.464zM718.848 774.656c14.848 9.216 29.696 18.944 43.52 30.208-31.232 26.624-67.072 48.128-105.984 63.488C680.448 839.68 701.44 807.936 718.848 774.656zM743.936 720.896c22.528-56.32 35.84-116.736 38.912-178.176L896 542.72c-6.144 83.968-39.936 160.256-91.648 220.672C784.896 747.52 764.928 733.184 743.936 720.896z" p-id="3739"></path></svg>;
	// export const ErrorIcon = <svg t="1626151898274" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3223" width="28" height="28"><path d="M1024 518.314667C1024 794.794667 794.737778 1024 505.685333 1024 229.205333 1024 0 794.737778 0 518.314667 0 229.262222 229.262222 0 505.685333 0 794.737778 0 1024 229.262222 1024 518.314667zM512 256a48.128 48.128 0 0 0-48.753778 51.370667L477.866667 614.4h68.266666l14.620445-307.029333A48.355556 48.355556 0 0 0 512 256z m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z" fill="#FF0000" p-id="3224"></path></svg>;

	//

	const deviceFailAttention = '1. 若浏览器弹出提示，请选择“允许”<br>'
	  + '2. 若杀毒软件弹出提示，请选择“允许”<br>'
	  + '3. 检查系统设置，允许浏览器访问摄像头及麦克风<br>'
	  + '4. 检查浏览器设置，允许网页访问摄像头及麦克风<br>'
	  + '5. 检查摄像头/麦克风是否正确连接并开启<br>'
	  + '6. 尝试重新连接摄像头/麦克风<br>'
	  + '7. 尝试重启设备后重新检测';
	const networkFailAttention = '1. 请检查设备是否联网<br>'
	  + '2. 请刷新网页后再次检测<br>'
	  + '3. 请尝试更换网络后再次检测';

	var script$7 = {
	  name: 'deviceConnect',
	  components: {
	    Button: __vue_component__$8,
	  },
	  props: {
	    stepNameList: {
	      type: Array,
	      default: () => [],
	    },
	    startDeviceDetect: Function,
	  },
	  data() {
	    return {
	      progress: 0,
	      deviceState: {},
	      connectResult: {},
	      showConnectResult: false,
	      progressInterval: null,
	      showRemind: true,
	    };
	  },
	  computed: {
	    prepareInfo() {
	      return '设备检测前请确认设备连接了'
	        + `${this.hasCameraDetect ? '摄像头' : ''}`
	        + `${this.hasMicrophoneDetect ? '、麦克风' : ''}`
	        + `${this.hasSpeakerDetect ? '、扬声器' : ''}`
	        + `${this.hasNetworkDetect ? '和网络' : ''}`;
	    },
	    hasCameraDetect() {
	      return this.stepNameList.indexOf('camera') >= 0;
	    },
	    hasMicrophoneDetect() {
	      return this.stepNameList.indexOf('microphone') >= 0;
	    },
	    hasSpeakerDetect() {
	      return this.stepNameList.indexOf('speaker') >= 0;
	    },
	    hasNetworkDetect() {
	      return this.stepNameList.indexOf('network') >= 0;
	    },
	    showReconnectButton() {
	      const { deviceState } = this;
	      return this.showConnectResult
	        && !(deviceState.hasCameraConnect
	        && deviceState.hasMicrophoneConnect
	        && deviceState.hasSpeakerConnect
	        && deviceState.hasNetworkConnect);
	    },
	    showStartDetectButton() {
	      const { deviceState } = this;
	      return this.showConnectResult
	        && (deviceState.hasCameraConnect
	        && deviceState.hasMicrophoneConnect
	        && deviceState.hasSpeakerConnect
	        && deviceState.hasNetworkConnect);
	    },
	  },
	  watch: {
	    showConnectResult: {
	      immediate: true,
	      handler(val) {
	        if (!val) {
	          this.progressInterval = setInterval(() => {
	            this.progress += 10;
	            if (this.progress === 100) {
	              clearInterval(this.progressInterval);
	              this.showConnectResult = true;
	            }
	          }, 200);
	        }
	      },
	    },
	  },
	  methods: {
	    setShowRemind(val) {
	      this.showRemind = val;
	    },
	    handleReset() {
	      this.progress = 0;
	      this.connectResult = {};
	      this.showConnectResult = false;
	    },
	    async getDeviceConnectResult() {
	      let cameraList = [];
	      let micList = [];
	      let speakerList = [];
	      try {
	        cameraList = await TRTC__default["default"].getCameras();
	        micList = await TRTC__default["default"].getMicrophones();
	        speakerList = await TRTC__default["default"].getSpeakers();
	      } catch (error) {
	        console.log('rtc-device-detector getDeviceList error', error);
	      }
	      const hasCameraDevice = cameraList.length > 0;
	      const hasMicrophoneDevice = micList.length > 0;
	      const hasSpeakerDevice = this.hasSpeakerDetect ? speakerList.length > 0 : true;
	      const hasNetworkConnect = this.hasNetworkDetect ? await isOnline() : true;
	      let deviceStateObj = {
	        hasCameraDevice,
	        hasMicrophoneDevice,
	        hasSpeakerDevice,
	        hasNetworkConnect,
	        hasCameraConnect: false,
	        hasMicrophoneConnect: false,
	        hasSpeakerConnect: hasSpeakerDevice,
	      };
	      this.deviceState = deviceStateObj;
	      this.connectResult = this.getDeviceConnectInfo(deviceStateObj);

	      if (hasCameraDevice) {
	        navigator.mediaDevices
	          .getUserMedia({ video: true, audio: false })
	          .then((stream) => {
	            deviceStateObj = {
	              ...deviceStateObj,
	              hasCameraConnect: true,
	            };
	            this.deviceState = deviceStateObj;
	            // 显示设备连接信息
	            this.connectResult = this.getDeviceConnectInfo(deviceStateObj);
	            // 释放摄像头设备
	            stream.getTracks()[0].stop();
	          })
	          .catch((error) => {
	            handleGetUserMediaError(error);
	          });
	      }

	      if (hasMicrophoneDevice) {
	        navigator.mediaDevices
	          .getUserMedia({ video: false, audio: hasMicrophoneDevice })
	          .then((stream) => {
	            deviceStateObj = {
	              ...deviceStateObj,
	              hasMicrophoneConnect: hasMicrophoneDevice,
	            };
	            this.deviceState = deviceStateObj;

	            // 显示设备连接信息
	            this.connectResult = this.getDeviceConnectInfo(deviceStateObj);
	            // 释放麦克风设备
	            stream.getTracks()[0].stop();
	          })
	          .catch((error) => {
	            handleGetUserMediaError(error);
	          });
	      }
	    },
	    getDeviceConnectInfo(deviceState) {
	      let connectInfo = '连接出错，请重试';
	      if (deviceState.hasCameraConnect
	        && deviceState.hasMicrophoneConnect
	        && deviceState.hasSpeakerConnect
	        && deviceState.hasNetworkConnect) {
	        connectInfo = this.hasNetworkDetect ? '设备及网络连接成功，请开始设备检测' : '设备连接成功，请开始设备检测';
	        return {
	          info: connectInfo,
	          success: true,
	        };
	      }
	      // 第一步：浏览器未检测到摄像头/麦克风/扬声器设备的提示
	      if (!(deviceState.hasCameraDevice && deviceState.hasMicrophoneDevice && deviceState.hasSpeakerDevice)) {
	        connectInfo = `未检测到${deviceState.hasCameraDevice ? '' : '【摄像头】'}${deviceState.hasMicrophoneDevice ? '' : '【麦克风】'}${deviceState.hasSpeakerDevice ? '' : '【扬声器】'}设备，请检查设备连接`;
	        return {
	          info: connectInfo,
	          success: false,
	        };
	      }
	      // 第二步：浏览器未拿到摄像头/麦克风权限的提示
	      if (!(deviceState.hasCameraConnect && deviceState.hasMicrophoneConnect)) {
	        connectInfo = deviceState.hasNetworkConnect
	          ? '请允许浏览器及网页访问摄像头/麦克风设备'
	          : '请允许浏览器及网页访问摄像头/麦克风设备，并检查网络连接';
	        return {
	          info: connectInfo,
	          success: false,
	          remind: deviceFailAttention,
	        };
	      }
	      // 第三步：浏览器检测未连接网络的提示
	      if (!deviceState.hasNetworkConnect) {
	        connectInfo = '网络连接失败，请检查网络连接';
	        return {
	          info: connectInfo,
	          success: false,
	          remind: networkFailAttention,
	        };
	      }
	      return {
	        info: connectInfo,
	        success: false,
	      };
	    },
	  },
	  mounted() {
	    this.getDeviceConnectResult();
	  },
	};

	/* script */
	const __vue_script__$7 = script$7;
	/* template */
	var __vue_render__$7 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "device-connect" }, [
	    _c("div", { staticClass: "testing-title" }, [_vm._v("设备连接")]),
	    _vm._v(" "),
	    _c("div", { staticClass: "testing-prepare-info" }, [
	      _vm._v("\n    " + _vm._s(_vm.prepareInfo) + "\n  "),
	    ]),
	    _vm._v(" "),
	    _c(
	      "div",
	      { staticClass: "device-display" },
	      [
	        _vm._l(_vm.stepNameList, function (stepName, index) {
	          return _c("div", { key: index }, [
	            stepName === "camera"
	              ? _c(
	                  "div",
	                  {
	                    class:
	                      _vm.showConnectResult &&
	                      (_vm.deviceState.hasCameraConnect
	                        ? "connect-success"
	                        : "connect-fail"),
	                  },
	                  [
	                    _c("span", { staticClass: "device" }, [
	                      _c(
	                        "svg",
	                        {
	                          staticClass: "icon",
	                          attrs: {
	                            t: "1630397874793",
	                            viewBox: "0 0 1024 1024",
	                            version: "1.1",
	                            xmlns: "http://www.w3.org/2000/svg",
	                            "p-id": "958",
	                            width: "24",
	                            height: "24",
	                          },
	                        },
	                        [
	                          _c("path", {
	                            attrs: {
	                              d: "M489.244444 0a460.8 460.8 0 1 1 0 921.6A460.8 460.8 0 0 1 489.244444 0z m0 204.8a256 256 0 1 0 0 512 256 256 0 0 0 0-512z",
	                              opacity: ".8",
	                              "p-id": "959",
	                            },
	                          }),
	                          _c("path", {
	                            attrs: {
	                              d: "M489.244444 460.8m-153.6 0a153.6 153.6 0 1 0 307.2 0 153.6 153.6 0 1 0-307.2 0Z",
	                              opacity: ".8",
	                              "p-id": "960",
	                            },
	                          }),
	                          _c("path", {
	                            attrs: {
	                              d: "M120.604444 952.32a368.64 61.44 0 1 0 737.28 0 368.64 61.44 0 1 0-737.28 0Z",
	                              opacity: ".8",
	                              "p-id": "961",
	                            },
	                          }),
	                        ]
	                      ),
	                    ]),
	                  ]
	                )
	              : _vm._e(),
	            _vm._v(" "),
	            stepName === "microphone"
	              ? _c(
	                  "div",
	                  {
	                    class:
	                      _vm.showConnectResult &&
	                      (_vm.deviceState.hasMicrophoneConnect
	                        ? "connect-success"
	                        : "connect-fail"),
	                  },
	                  [
	                    _c("span", { staticClass: "device" }, [
	                      _c(
	                        "svg",
	                        {
	                          staticClass: "icon",
	                          attrs: {
	                            t: "1630397938861",
	                            viewBox: "0 0 1024 1024",
	                            version: "1.1",
	                            xmlns: "http://www.w3.org/2000/svg",
	                            "p-id": "1205",
	                            width: "24",
	                            height: "24",
	                          },
	                        },
	                        [
	                          _c("path", {
	                            attrs: {
	                              d: "M841.551448 434.423172A41.666207 41.666207 0 0 1 882.758621 476.548414c0 194.701241-144.454621 355.469241-329.551449 376.514207v86.722207h164.758069a41.666207 41.666207 0 0 1 41.207173 42.089931A41.666207 41.666207 0 0 1 717.965241 1024H306.034759A41.666207 41.666207 0 0 1 264.827586 981.874759a41.666207 41.666207 0 0 1 41.207173-42.089931h164.758069v-86.722207C285.696 832.052966 141.241379 671.249655 141.241379 476.548414a41.666207 41.666207 0 0 1 41.207173-42.125242 41.666207 41.666207 0 0 1 41.171862 42.125242c0 162.78069 129.129931 294.770759 288.379586 294.770758l8.827586-0.141241c155.153655-4.766897 279.552-134.850207 279.552-294.629517a41.666207 41.666207 0 0 1 41.171862-42.125242zM512 0c119.419586 0 216.275862 88.770207 216.275862 198.232276v317.228138c0 106.990345-92.513103 194.206897-208.154483 198.091034l-8.121379 0.141242c-119.419586 0-216.275862-88.770207-216.275862-198.232276V198.232276c0-106.990345 92.513103-194.206897 208.154483-198.091035L512 0z",
	                              opacity: ".8",
	                              "p-id": "1206",
	                            },
	                          }),
	                        ]
	                      ),
	                    ]),
	                  ]
	                )
	              : _vm._e(),
	            _vm._v(" "),
	            stepName === "speaker"
	              ? _c(
	                  "div",
	                  {
	                    class:
	                      _vm.showConnectResult &&
	                      (_vm.deviceState.hasSpeakerConnect
	                        ? "connect-success"
	                        : "connect-fail"),
	                  },
	                  [
	                    _c("span", { staticClass: "device" }, [
	                      _c(
	                        "svg",
	                        {
	                          staticClass: "icon",
	                          attrs: {
	                            t: "1629186923749",
	                            viewBox: "0 0 1024 1024",
	                            version: "1.1",
	                            xmlns: "http://www.w3.org/2000/svg",
	                            "p-id": "2923",
	                            width: "24",
	                            height: "24",
	                          },
	                        },
	                        [
	                          _c("path", {
	                            attrs: {
	                              d: "M640 181.333333c0-46.037333-54.357333-70.4-88.746667-39.850666L359.552 311.850667a32 32 0 0 1-21.248 8.106666H181.333333A96 96 0 0 0 85.333333 415.957333v191.872a96 96 0 0 0 96 96h157.013334a32 32 0 0 1 21.248 8.106667l191.616 170.410667c34.389333 30.549333 88.789333 6.144 88.789333-39.850667V181.333333z m170.325333 70.272a32 32 0 0 1 44.757334 6.698667A424.917333 424.917333 0 0 1 938.666667 512a424.96 424.96 0 0 1-83.626667 253.696 32 32 0 0 1-51.413333-38.058667A360.917333 360.917333 0 0 0 874.666667 512a360.917333 360.917333 0 0 0-71.04-215.637333 32 32 0 0 1 6.698666-44.757334zM731.434667 357.12a32 32 0 0 1 43.392 12.928c22.869333 42.24 35.84 90.666667 35.84 141.994667a297.514667 297.514667 0 0 1-35.84 141.994666 32 32 0 0 1-56.32-30.464c17.92-33.152 28.16-71.082667 28.16-111.530666s-10.24-78.378667-28.16-111.530667a32 32 0 0 1 12.928-43.392z",
	                              opacity: ".8",
	                              "p-id": "2924",
	                            },
	                          }),
	                        ]
	                      ),
	                    ]),
	                  ]
	                )
	              : _vm._e(),
	            _vm._v(" "),
	            stepName === "network"
	              ? _c(
	                  "div",
	                  {
	                    class:
	                      _vm.showConnectResult &&
	                      (_vm.deviceState.hasNetworkConnect
	                        ? "connect-success"
	                        : "connect-fail"),
	                  },
	                  [
	                    _c("span", { staticClass: "device" }, [
	                      _c(
	                        "svg",
	                        {
	                          staticClass: "icon",
	                          attrs: {
	                            t: "1630400570252",
	                            viewBox: "0 0 1291 1024",
	                            version: "1.1",
	                            xmlns: "http://www.w3.org/2000/svg",
	                            "p-id": "1640",
	                            width: "24",
	                            height: "24",
	                          },
	                        },
	                        [
	                          _c("path", {
	                            attrs: {
	                              d: "M992.211478 583.68A449.758609 449.758609 0 0 0 650.017391 426.295652c-136.904348 0-259.561739 61.039304-342.194087 157.384348a90.156522 90.156522 0 0 0 136.859826 117.359304 269.846261 269.846261 0 0 1 205.334261-94.430608c82.142609 0 155.737043 36.641391 205.334261 94.386087a90.156522 90.156522 0 1 0 136.859826-117.359305zM559.86087 922.134261a90.156522 90.156522 0 1 0 180.313043 0 90.156522 90.156522 0 0 0-180.313043 0z",
	                              opacity: ".8",
	                              "p-id": "1641",
	                            },
	                          }),
	                          _c("path", {
	                            attrs: {
	                              d: "M1253.064348 289.124174A809.316174 809.316174 0 0 0 650.017391 20.613565a809.316174 809.316174 0 0 0-603.046956 268.466087 90.156522 90.156522 0 1 0 127.777391 127.065044l0.311652 0.26713A629.581913 629.581913 0 0 1 650.017391 200.926609c189.395478 0 359.290435 83.389217 474.957913 215.485217l0.267131-0.26713a90.156522 90.156522 0 1 0 127.777391-127.065044z",
	                              opacity: ".8",
	                              "p-id": "1642",
	                            },
	                          }),
	                        ]
	                      ),
	                    ]),
	                  ]
	                )
	              : _vm._e(),
	          ])
	        }),
	        _vm._v(" "),
	        !_vm.showConnectResult
	          ? _c("div", { staticClass: "outer-progress" }, [
	              _c("div", {
	                staticClass: "inner-progress",
	                style: {
	                  transform: "translateX(" + (_vm.progress - 100) + "%)",
	                },
	              }),
	            ])
	          : _vm._e(),
	      ],
	      2
	    ),
	    _vm._v(" "),
	    !_vm.showConnectResult
	      ? _c("div", { staticClass: "text gray-text" }, [
	          _vm._v("设备正在连接中，请稍后"),
	        ])
	      : _vm._e(),
	    _vm._v(" "),
	    _vm.showConnectResult
	      ? _c(
	          "div",
	          {
	            class: [
	              "text",
	              "" + (_vm.connectResult.success ? "green-text" : "red-text"),
	            ],
	          },
	          [
	            _c("span", [_vm._v(_vm._s(_vm.connectResult.info))]),
	            _vm._v(" "),
	            _vm.connectResult.remind
	              ? _c(
	                  "div",
	                  {
	                    staticClass: "error-connect",
	                    on: {
	                      touchstart: function () {
	                        return _vm.setShowRemind(true)
	                      },
	                      mouseenter: function () {
	                        return _vm.setShowRemind(true)
	                      },
	                      touchend: function () {
	                        return _vm.setShowRemind(false)
	                      },
	                      mouseleave: function () {
	                        return _vm.setShowRemind(false)
	                      },
	                    },
	                  },
	                  [
	                    _c("span", { staticClass: "error-icon" }, [
	                      _c(
	                        "svg",
	                        {
	                          attrs: {
	                            t: "1626151898274",
	                            className: "icon",
	                            viewBox: "0 0 1024 1024",
	                            version: "1.1",
	                            xmlns: "http://www.w3.org/2000/svg",
	                            "p-id": "3223",
	                            width: "28",
	                            height: "28",
	                          },
	                        },
	                        [
	                          _c("path", {
	                            attrs: {
	                              d: "M1024 518.314667C1024 794.794667 794.737778 1024 505.685333 1024 229.205333 1024 0 794.737778 0 518.314667 0 229.262222 229.262222 0 505.685333 0 794.737778 0 1024 229.262222 1024 518.314667zM512 256a48.128 48.128 0 0 0-48.753778 51.370667L477.866667 614.4h68.266666l14.620445-307.029333A48.355556 48.355556 0 0 0 512 256z m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z",
	                              fill: "#FF0000",
	                              "p-id": "3224",
	                            },
	                          }),
	                        ]
	                      ),
	                    ]),
	                    _vm._v(" "),
	                    _vm.showRemind
	                      ? _c("div", {
	                          staticClass: "connect-attention-info",
	                          domProps: {
	                            innerHTML: _vm._s(_vm.connectResult.remind),
	                          },
	                        })
	                      : _vm._e(),
	                  ]
	                )
	              : _vm._e(),
	          ]
	        )
	      : _vm._e(),
	    _vm._v(" "),
	    _c(
	      "div",
	      { staticClass: "button-container" },
	      [
	        !_vm.showConnectResult
	          ? _c("Button", { attrs: { type: "disabled" } }, [_vm._v("开始检测")])
	          : _vm._e(),
	        _vm._v(" "),
	        _vm.showReconnectButton
	          ? _c(
	              "Button",
	              { attrs: { type: "contained", onClick: _vm.handleReset } },
	              [_vm._v("重新连接")]
	            )
	          : _vm._e(),
	        _vm._v(" "),
	        _vm.showStartDetectButton
	          ? _c(
	              "Button",
	              { attrs: { type: "contained", onClick: _vm.startDeviceDetect } },
	              [_vm._v("开始检测")]
	            )
	          : _vm._e(),
	      ],
	      1
	    ),
	  ])
	};
	var __vue_staticRenderFns__$7 = [];
	__vue_render__$7._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$7 = undefined;
	  /* scoped */
	  const __vue_scope_id__$7 = "data-v-2ebd7e36";
	  /* module identifier */
	  const __vue_module_identifier__$7 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$7 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
	    __vue_inject_styles__$7,
	    __vue_script__$7,
	    __vue_scope_id__$7,
	    __vue_is_functional_template__$7,
	    __vue_module_identifier__$7,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//
	const getDeviceList = async (deviceType) => {
	  let deviceList = [];
	  switch (deviceType) {
	    case 'camera':
	      deviceList = await TRTC__default["default"].getCameras();
	      break;
	    case 'microphone':
	      deviceList = await TRTC__default["default"].getMicrophones();
	      break;
	    case 'speaker':
	      deviceList = await TRTC__default["default"].getSpeakers();
	      break;
	  }
	  return deviceList;
	};
	var script$6 = {
	  name: 'DeviceSelect',
	  props: {
	    deviceType: String,
	    onChange: Function,
	    choseDevice: Object,
	  },
	  data() {
	    return {
	      deviceList: [],
	      activeDevice: {},
	      activeDeviceId: '',
	    };
	  },
	  watch: {
	    activeDevice: {
	      deep: true,
	      handler(val) {
	        if (val && JSON.stringify(val) !== '{}') {
	          this.onChange && this.onChange(val);
	        }
	      },
	    },
	  },
	  methods: {
	    async getDeviceListData() {
	      const list = await getDeviceList(this.deviceType);
	      const deviceIdList = list.map(item => item.deviceId);
	      this.deviceList = list;
	      if (this.choseDevice && deviceIdList.indexOf(this.choseDevice.deviceId) >= 0) {
	        [this.activeDevice] = list.filter(item => item.deviceId === this.choseDevice.deviceId);
	        this.activeDeviceId = this.choseDevice.deviceId;
	      } else {
	        [this.activeDevice] = list;
	        this.activeDeviceId = list[0].deviceId;
	      }
	    },
	    handleChange(event) {
	      const deviceID = event.target.value;
	      const activeDevice = this.deviceList.find(item => item.deviceId === deviceID);
	      this.activeDevice = activeDevice;
	      this.activeDeviceId = deviceID;
	    },
	  },
	  mounted() {
	    navigator.mediaDevices.addEventListener('devicechange', async () => {
	      const newList = await getDeviceList(this.deviceType);
	      this.deviceList = newList;
	    });
	    this.getDeviceListData();
	  },
	};

	/* script */
	const __vue_script__$6 = script$6;
	/* template */
	var __vue_render__$6 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", [
	    _c(
	      "select",
	      {
	        staticClass: "device-select",
	        domProps: { value: _vm.activeDeviceId },
	        on: { change: _vm.handleChange },
	      },
	      _vm._l(_vm.deviceList, function (item, index) {
	        return _c(
	          "option",
	          { key: index, domProps: { value: item.deviceId } },
	          [_vm._v(_vm._s(item.label))]
	        )
	      }),
	      0
	    ),
	  ])
	};
	var __vue_staticRenderFns__$6 = [];
	__vue_render__$6._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$6 = undefined;
	  /* scoped */
	  const __vue_scope_id__$6 = "data-v-053a474c";
	  /* module identifier */
	  const __vue_module_identifier__$6 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$6 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
	    __vue_inject_styles__$6,
	    __vue_script__$6,
	    __vue_scope_id__$6,
	    __vue_is_functional_template__$6,
	    __vue_module_identifier__$6,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//
	var script$5 = {
	  name: 'cameraDetector',
	  props: {
	    activeDetector: String,
	    handleCompleted: Function,
	  },
	  components: {
	    Button: __vue_component__$8,
	    DeviceSelect: __vue_component__$6,
	  },
	  data() {
	    return {
	      currentDetector: 'camera',
	      localStream: null,
	      cameraLabel: '',
	      cameraID: '',
	      choseDevice: null,
	    };
	  },
	  watch: {
	    activeDetector(val, oldVal) {
	      if (val === this.currentDetector && !this.localStream && this.cameraID) {
	        this.initStream(this.cameraID);
	      }
	      if (oldVal === this.currentDetector) {
	        this.localStream && this.localStream.close();
	        this.localStream = null;
	      }
	    },
	  },
	  methods: {
	    async initStream(cameraID) {
	      this.localStream = TRTC__default["default"].createStream({
	        video: true,
	        audio: false,
	        cameraId: cameraID,
	      });
	      await this.localStream.initialize();
	      this.localStream.play('camera-video');
	    },


	    async handleCameraChange(cameraDevice) {
	      console.log('lixin-debug camera', cameraDevice);
	      this.choseDevice = cameraDevice;
	      const { deviceId, label } = cameraDevice;
	      if (this.localStream) {
	        this.localStream.switchDevice('video', deviceId);
	      } else {
	        this.initStream(deviceId);
	      }
	      this.cameraID = deviceId;
	      this.cameraLabel = label;
	    },

	    handleError() {
	      this.handleCompleted('error', this.cameraLabel);
	    },

	    handleSuccess() {
	      this.handleCompleted('success', this.cameraLabel);
	    },
	  },
	};

	/* script */
	const __vue_script__$5 = script$5;
	/* template */
	var __vue_render__$5 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _vm.activeDetector === _vm.currentDetector
	    ? _c("div", { staticClass: "testing-body" }, [
	        _c(
	          "div",
	          { staticClass: "device-list" },
	          [
	            _c("span", { staticClass: "device-list-title" }, [
	              _vm._v("摄像头选择"),
	            ]),
	            _vm._v(" "),
	            _c("DeviceSelect", {
	              attrs: {
	                deviceType: "camera",
	                choseDevice: _vm.choseDevice,
	                onChange: _vm.handleCameraChange,
	              },
	            }),
	          ],
	          1
	        ),
	        _vm._v(" "),
	        _c("div", {
	          staticClass: "camera-video",
	          attrs: { id: "camera-video" },
	        }),
	        _vm._v(" "),
	        _c("div", { staticClass: "testing-info-container" }, [
	          _c("div", { staticClass: "testing-info" }, [
	            _vm._v("是否可以清楚的看到自己？"),
	          ]),
	          _vm._v(" "),
	          _c(
	            "div",
	            { staticClass: "button-list" },
	            [
	              _c(
	                "Button",
	                { attrs: { type: "outlined", onClick: _vm.handleError } },
	                [_vm._v("看不到")]
	              ),
	              _vm._v(" "),
	              _c(
	                "Button",
	                { attrs: { type: "contained", onClick: _vm.handleSuccess } },
	                [_vm._v("看的到")]
	              ),
	            ],
	            1
	          ),
	        ]),
	      ])
	    : _vm._e()
	};
	var __vue_staticRenderFns__$5 = [];
	__vue_render__$5._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$5 = undefined;
	  /* scoped */
	  const __vue_scope_id__$5 = "data-v-7fd73d37";
	  /* module identifier */
	  const __vue_module_identifier__$5 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$5 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
	    __vue_inject_styles__$5,
	    __vue_script__$5,
	    __vue_scope_id__$5,
	    __vue_is_functional_template__$5,
	    __vue_module_identifier__$5,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//
	var script$4 = {
	  name: 'micDetector',
	  props: {
	    activeDetector: String,
	    handleCompleted: Function,
	  },
	  components: {
	    Button: __vue_component__$8,
	    DeviceSelect: __vue_component__$6,
	  },
	  data() {
	    return {
	      currentDetector: 'microphone',
	      localStream: null,
	      microphoneID: '',
	      microphoneLabel: '',
	      volumeNum: 0,
	      choseDevice: null,
	      timer: null,
	    };
	  },
	  watch: {
	    activeDetector(val, oldVal) {
	      if (val === this.currentDetector && !this.localStream && this.microphoneID) {
	        this.initStream(this.microphoneID);
	      }
	      if (oldVal === this.currentDetector) {
	        this.localStream && this.localStream.close();
	        this.localStream = null;
	        clearInterval(this.timer);
	        this.volumeNum = 0;
	      }
	    },
	  },
	  methods: {
	    async initStream(microphoneID) {
	      console.log('microphoneID', microphoneID);
	      this.localStream = TRTC__default["default"].createStream({
	        video: false,
	        audio: true,
	        microphoneId: microphoneID,
	      });
	      await this.localStream.initialize();
	      this.localStream.play('audio-container');
	      this.timer = setInterval(() => {
	        const volume = this.localStream.getAudioLevel();
	        this.volumeNum = Math.ceil(28 * volume);
	      }, 100);
	    },

	    async handleMicrophoneChange(microphoneDevice) {
	      this.choseDevice = microphoneDevice;
	      const { deviceId, label } = microphoneDevice;
	      if (this.localStream) {
	        this.localStream.switchDevice('audio', deviceId);
	      } else {
	        this.initStream(deviceId);
	      }
	      this.microphoneID = deviceId;
	      this.microphoneLabel = label;
	    },
	  },
	};

	/* script */
	const __vue_script__$4 = script$4;
	/* template */
	var __vue_render__$4 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _vm.activeDetector === _vm.currentDetector
	    ? _c("div", { staticClass: "testing-body" }, [
	        _c(
	          "div",
	          { staticClass: "device-list" },
	          [
	            _c("span", { staticClass: "device-list-title" }, [
	              _vm._v("麦克风选择"),
	            ]),
	            _vm._v(" "),
	            _c("DeviceSelect", {
	              attrs: {
	                deviceType: "microphone",
	                choseDevice: _vm.choseDevice,
	                onChange: _vm.handleMicrophoneChange,
	              },
	            }),
	          ],
	          1
	        ),
	        _vm._v(" "),
	        _c("div", { staticClass: "mic-testing-container" }, [
	          _c("div", { staticClass: "mic-testing-info" }, [
	            _vm._v('对着麦克风说"哈喽"试试～'),
	          ]),
	          _vm._v(" "),
	          _c(
	            "div",
	            { staticClass: "mic-bar-container" },
	            _vm._l(new Array(28).fill(""), function (item, index) {
	              return _c("div", {
	                key: index,
	                class: ["mic-bar " + (_vm.volumeNum > index && "active")],
	              })
	            }),
	            0
	          ),
	          _vm._v(" "),
	          _c("div", { attrs: { id: "audio-container" } }),
	        ]),
	        _vm._v(" "),
	        _c("div", { staticClass: "testing-info-container" }, [
	          _c("div", { staticClass: "testing-info" }, [
	            _vm._v("是否可以看到音量图标跳动？"),
	          ]),
	          _vm._v(" "),
	          _c(
	            "div",
	            { staticClass: "button-list" },
	            [
	              _c(
	                "Button",
	                {
	                  attrs: {
	                    type: "outlined",
	                    onClick: function () {
	                      return _vm.handleCompleted("error", _vm.microphoneLabel)
	                    },
	                  },
	                },
	                [_vm._v("看不到")]
	              ),
	              _vm._v(" "),
	              _c(
	                "Button",
	                {
	                  attrs: {
	                    type: "contained",
	                    onClick: function () {
	                      return _vm.handleCompleted("success", _vm.microphoneLabel)
	                    },
	                  },
	                },
	                [_vm._v("看的到")]
	              ),
	            ],
	            1
	          ),
	        ]),
	      ])
	    : _vm._e()
	};
	var __vue_staticRenderFns__$4 = [];
	__vue_render__$4._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$4 = undefined;
	  /* scoped */
	  const __vue_scope_id__$4 = "data-v-fdd569e8";
	  /* module identifier */
	  const __vue_module_identifier__$4 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$4 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
	    __vue_inject_styles__$4,
	    __vue_script__$4,
	    __vue_scope_id__$4,
	    __vue_is_functional_template__$4,
	    __vue_module_identifier__$4,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//
	var script$3 = {
	  name: 'speakerDetector',
	  props: {
	    audioUrl: {
	      type: String,
	      default: 'https://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/45f1edea3701925920950247965/v.f1010.mp3',
	    },
	    activeDetector: String,
	    handleCompleted: Function,
	  },
	  components: {
	    DeviceSelect: __vue_component__$6,
	    Button: __vue_component__$8,
	  },
	  data() {
	    return {
	      audioPlayer: null,
	      currentDetector: 'speaker',
	      speakerLabel: '',
	      url: '',
	      choseDevice: null,
	    };
	  },
	  watch: {
	    activeDetector(val, oldVal) {
	      if (val === this.currentDetector) {
	        this.audioPlayer = document.getElementById('audio-player');
	      }
	      if (oldVal === this.currentDetector) {
	        if (this.audioPlayer && !this.audioPlayer.paused) {
	          this.audioPlayer.pause();
	        }
	        if (this.audioPlayer) {
	          this.audioPlayer.currentTime = 0;
	        }
	      }
	    },
	  },
	  methods: {
	    async handleSpeakerChange(speakerDevice) {
	      this.choseDevice = speakerDevice;
	      const { deviceId, label } = speakerDevice;
	      this.audioPlayer && (await this.audioPlayer.setSinkId(deviceId));
	      this.speakerLabel = label;
	    },
	  },
	};

	/* script */
	const __vue_script__$3 = script$3;
	/* template */
	var __vue_render__$3 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _vm.activeDetector === _vm.currentDetector
	    ? _c("div", { staticClass: "testing-body" }, [
	        _c(
	          "div",
	          { staticClass: "device-list" },
	          [
	            _c("span", { staticClass: "device-list-title" }, [
	              _vm._v("扬声器选择"),
	            ]),
	            _vm._v(" "),
	            _c("DeviceSelect", {
	              attrs: {
	                deviceType: "speaker",
	                choseDevice: _vm.choseDevice,
	                onChange: _vm.handleSpeakerChange,
	              },
	            }),
	          ],
	          1
	        ),
	        _vm._v(" "),
	        _c("div", { staticClass: "audio-player-container" }, [
	          _c("div", { staticClass: "audio-player-info" }, [
	            _vm._v("请调高设备音量，点击播放下面的音频试试～"),
	          ]),
	          _vm._v(" "),
	          _c("audio", {
	            attrs: { id: "audio-player", src: _vm.audioUrl, controls: "" },
	          }),
	        ]),
	        _vm._v(" "),
	        _c("div", { staticClass: "testing-info-container" }, [
	          _c("div", { staticClass: "testing-info" }, [
	            _vm._v("是否可以听到声音？"),
	          ]),
	          _vm._v(" "),
	          _c(
	            "div",
	            { staticClass: "button-list" },
	            [
	              _c(
	                "Button",
	                {
	                  attrs: {
	                    type: "outlined",
	                    onClick: function () {
	                      return _vm.handleCompleted("error", _vm.speakerLabel)
	                    },
	                  },
	                },
	                [_vm._v("听不到")]
	              ),
	              _vm._v(" "),
	              _c(
	                "Button",
	                {
	                  attrs: {
	                    type: "contained",
	                    onClick: function () {
	                      return _vm.handleCompleted("success", _vm.speakerLabel)
	                    },
	                  },
	                },
	                [_vm._v("听的到")]
	              ),
	            ],
	            1
	          ),
	        ]),
	      ])
	    : _vm._e()
	};
	var __vue_staticRenderFns__$3 = [];
	__vue_render__$3._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$3 = undefined;
	  /* scoped */
	  const __vue_scope_id__$3 = "data-v-ea1e493c";
	  /* module identifier */
	  const __vue_module_identifier__$3 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$3 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
	    __vue_inject_styles__$3,
	    __vue_script__$3,
	    __vue_scope_id__$3,
	    __vue_is_functional_template__$3,
	    __vue_module_identifier__$3,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//
	var script$2 = {
	  name: 'networkDetector',
	  components: {
	    Button: __vue_component__$8,
	  },
	  props: {
	    activeDetector: String,
	    networkDetectInfo: Object,
	    handleCompleted: Function,
	    generateReport: Function,
	  },
	  data() {
	    return {
	      NETWORK_QUALITY,
	      currentDetector: 'network',
	      detectorInfo: {},
	      count: 15,
	      timer: null,
	      uplinkClient: null,
	      uplinkStream: null,
	      downlinkClient: null,
	      networkTestingResult: {
	        uplinkNetworkQualities: [],
	        downlinkNetworkQualities: [],
	        rttList: [],
	      },
	    };
	  },
	  computed: {
	  },
	  watch: {
	    activeDetector(val, oldVal) {
	      if (val === this.currentDetector && this.count !== 0) {
	        this.count = 15;
	        this.getDetectorInfo();
	      }
	      if (oldVal === this.currentDetector) {
	        clearInterval(this.timer);
	        this.uplinkStream && this.uplinkStream.close();
	        this.uplinkClient && this.uplinkClient.leave();
	        this.downlinkClient && this.downlinkClient.leave();
	      }
	    },
	    count(val) {
	      if (val === 0) {
	        this.getAverageInfo(this.detectorInfo);
	        this.uplinkStream && this.uplinkStream.close();
	        this.uplinkClient && this.uplinkClient.leave();
	        this.downlinkClient && this.downlinkClient.leave();
	      }
	    },
	  },
	  methods: {
	    // 获取上行网络质量和RTT
	    async testUplinkNetworkQuality() {
	      const { sdkAppId, roomId } = this.networkDetectInfo;
	      const { uplinkUserId, uplinkUserSig } = this.networkDetectInfo.uplinkUserInfo;
	      this.uplinkClient = TRTC__default["default"].createClient({
	        sdkAppId,
	        userId: uplinkUserId,
	        userSig: uplinkUserSig,
	        mode: 'rtc',
	        useStringRoomId: typeof(roomId) === 'string',
	      });

	      this.uplinkStream = TRTC__default["default"].createStream({ audio: true, video: true });
	      await this.uplinkStream.initialize();

	      this.uplinkClient.on('network-quality', async (event) => {
	        const { uplinkNetworkQuality } = event;
	        this.networkTestingResult.uplinkNetworkQualities.push(uplinkNetworkQuality);
	        this.detectorInfo.uplinkQuality = uplinkNetworkQuality;
	        const { rtt } = await this.uplinkClient.getTransportStats();
	        this.detectorInfo.rtt = rtt;
	        this.networkTestingResult.rttList.push(rtt);
	      });

	      await this.uplinkClient.join({ roomId }); // 加入用于测试的房间
	      await this.uplinkClient.publish(this.uplinkStream);
	    },
	    // 获取下行网络质量
	    async testDownlinkNetworkQuality() {
	      const { sdkAppId, roomId } = this.networkDetectInfo;
	      const { downlinkUserId, downlinkUserSig } = this.networkDetectInfo.downlinkUserInfo;
	      this.downlinkClient = TRTC__default["default"].createClient({
	        sdkAppId,
	        userId: downlinkUserId,
	        userSig: downlinkUserSig,
	        mode: 'rtc',
	        useStringRoomId: typeof(roomId) === 'string',
	      });

	      this.downlinkClient.on('stream-added', async (event) => {
	        await this.downlinkClient.subscribe(event.stream, { audio: true, video: true });
	        this.downlinkClient.on('network-quality', (event) => {
	          const { downlinkNetworkQuality } = event;
	          this.networkTestingResult.downlinkNetworkQualities.push(downlinkNetworkQuality);
	          this.detectorInfo.downlinkQuality = downlinkNetworkQuality;
	        });
	      });

	      await this.downlinkClient.join({ roomId }); // 加入用于测试的房间
	    },
	    // 获取15秒检测平均值
	    getAverageInfo(detectorInfo) {
	      const uplinkAverageQuality = Math.ceil(this.networkTestingResult.uplinkNetworkQualities
	        .reduce((value, current) => value + current, 0) / this.networkTestingResult.uplinkNetworkQualities.length);
	      const downlinkAverageQuality = Math.ceil(this.networkTestingResult.downlinkNetworkQualities
	        .reduce((value, current) => value + current, 0) / this.networkTestingResult.downlinkNetworkQualities.length);
	      const rttAverageQuality = Math.ceil(this.networkTestingResult.rttList
	        .reduce((value, current) => value + current, 0) / this.networkTestingResult.rttList.length);
	      const detectorResultInfo = {
	        ...detectorInfo,
	        uplinkQuality: uplinkAverageQuality,
	        downlinkQuality: downlinkAverageQuality,
	        rtt: rttAverageQuality,
	      };
	      this.handleCompleted('success', detectorResultInfo);
	      this.detectorInfo = detectorResultInfo;
	    },
	    async getDetectorInfo() {
	      const detect = new RTCDetect();
	      const systemResult = detect.getSystem();
	      const webRTCSupportResult = await detect.isTRTCSupported();
	      const APISupportResult = detect.getAPISupported();

	      this.detectorInfo = {
	        system: systemResult.OS,
	        browser: `${systemResult.browser.name} ${systemResult.browser.version}`,
	        TRTCSupport: webRTCSupportResult.result ? '支持' : '不支持',
	        screenMediaSupport: APISupportResult.isScreenCaptureAPISupported ? '支持' : '不支持',
	      };

	      this.timer = setInterval(() => {
	        this.count = this.count - 1;
	        if (this.count === 0) {
	          clearInterval(this.timer);
	        }
	      }, 1000);

	      this.testUplinkNetworkQuality();
	      this.testDownlinkNetworkQuality();
	    },
	  },
	};

	/* script */
	const __vue_script__$2 = script$2;
	/* template */
	var __vue_render__$2 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _vm.activeDetector === _vm.currentDetector
	    ? _c(
	        "div",
	        { staticClass: "testing-body" },
	        [
	          _c("div", { staticClass: "testing-list" }, [
	            _c("div", { staticClass: "testing-item-container" }, [
	              _c("div", [_vm._v("操作系统")]),
	              _vm._v(" "),
	              _c(
	                "div",
	                { class: !_vm.detectorInfo.system ? "network-loading" : "" },
	                [
	                  _vm._v(
	                    "\n        " + _vm._s(_vm.detectorInfo.system) + "\n      "
	                  ),
	                ]
	              ),
	            ]),
	            _vm._v(" "),
	            _c("div", { staticClass: "testing-item-container" }, [
	              _c("div", [_vm._v("浏览器")]),
	              _vm._v(" "),
	              _c(
	                "div",
	                { class: !_vm.detectorInfo.browser ? "network-loading" : "" },
	                [
	                  _vm._v(
	                    "\n        " + _vm._s(_vm.detectorInfo.browser) + "\n      "
	                  ),
	                ]
	              ),
	            ]),
	            _vm._v(" "),
	            _c("div", { staticClass: "testing-item-container" }, [
	              _c("div", [_vm._v("是否支持TRTC")]),
	              _vm._v(" "),
	              _c(
	                "div",
	                {
	                  class: !_vm.detectorInfo.TRTCSupport ? "network-loading" : "",
	                },
	                [
	                  _vm._v(
	                    "\n        " +
	                      _vm._s(_vm.detectorInfo.TRTCSupport) +
	                      "\n      "
	                  ),
	                ]
	              ),
	            ]),
	            _vm._v(" "),
	            _c("div", { staticClass: "testing-item-container" }, [
	              _c("div", [_vm._v("是否支持屏幕分享")]),
	              _vm._v(" "),
	              _c(
	                "div",
	                {
	                  class: !_vm.detectorInfo.screenMediaSupport
	                    ? "network-loading"
	                    : "",
	                },
	                [
	                  _vm._v(
	                    "\n        " +
	                      _vm._s(_vm.detectorInfo.screenMediaSupport) +
	                      "\n      "
	                  ),
	                ]
	              ),
	            ]),
	            _vm._v(" "),
	            _c("div", { staticClass: "testing-item-container" }, [
	              _c("div", [_vm._v("网络延时")]),
	              _vm._v(" "),
	              _c(
	                "div",
	                { class: !_vm.detectorInfo.rtt ? "network-loading" : "" },
	                [
	                  _vm._v(
	                    "\n        " +
	                      _vm._s(
	                        _vm.detectorInfo.rtt ? _vm.detectorInfo.rtt + "ms" : ""
	                      ) +
	                      "\n      "
	                  ),
	                ]
	              ),
	            ]),
	            _vm._v(" "),
	            _c("div", { staticClass: "testing-item-container" }, [
	              _c("div", [_vm._v("上行网络质量")]),
	              _vm._v(" "),
	              _c(
	                "div",
	                {
	                  class: !_vm.NETWORK_QUALITY[_vm.detectorInfo.uplinkQuality]
	                    ? "network-loading"
	                    : "",
	                },
	                [
	                  _vm._v(
	                    "\n        " +
	                      _vm._s(
	                        _vm.NETWORK_QUALITY[_vm.detectorInfo.uplinkQuality] ||
	                          ""
	                      ) +
	                      "\n      "
	                  ),
	                ]
	              ),
	            ]),
	            _vm._v(" "),
	            _c("div", { staticClass: "testing-item-container" }, [
	              _c("div", [_vm._v("下行网络质量")]),
	              _vm._v(" "),
	              _c(
	                "div",
	                {
	                  class: !_vm.NETWORK_QUALITY[_vm.detectorInfo.downlinkQuality]
	                    ? "network-loading"
	                    : "",
	                },
	                [
	                  _vm._v(
	                    "\n        " +
	                      _vm._s(
	                        _vm.NETWORK_QUALITY[_vm.detectorInfo.downlinkQuality] ||
	                          ""
	                      ) +
	                      "\n      "
	                  ),
	                ]
	              ),
	            ]),
	          ]),
	          _vm._v(" "),
	          _vm.count > 0
	            ? _c(
	                "Button",
	                { staticClass: "gray-button", attrs: { type: "disabled" } },
	                [_vm._v(_vm._s("剩余检测时间（" + _vm.count + "）s"))]
	              )
	            : _c(
	                "Button",
	                {
	                  staticClass: "report-button",
	                  attrs: { type: "contained", onClick: _vm.generateReport },
	                },
	                [_vm._v("查看检测报告")]
	              ),
	        ],
	        1
	      )
	    : _vm._e()
	};
	var __vue_staticRenderFns__$2 = [];
	__vue_render__$2._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$2 = undefined;
	  /* scoped */
	  const __vue_scope_id__$2 = "data-v-3619c57e";
	  /* module identifier */
	  const __vue_module_identifier__$2 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$2 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
	    __vue_inject_styles__$2,
	    __vue_script__$2,
	    __vue_scope_id__$2,
	    __vue_is_functional_template__$2,
	    __vue_module_identifier__$2,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//
	var script$1 = {
	  name: 'detectorReport',
	  props: {
	    reportData: Object,
	    handleReset: Function,
	    handleClose: Function,
	  },
	  components: {
	    Button: __vue_component__$8,
	  },
	  data() {
	    return {
	      NETWORK_QUALITY,
	    };
	  },
	  computed: {
	    goodUplinkQuality() {
	      return this.reportData.network.result.uplinkQuality > 0 && this.reportData.network.result.uplinkQuality < 4;
	    },
	    goodDownlinkQuality() {
	      return this.reportData.network.result.downlinkQuality > 0 && this.reportData.network.result.downlinkQuality < 4;
	    },
	  },
	  methods: {

	  },
	};

	/* script */
	const __vue_script__$1 = script$1;
	/* template */
	var __vue_render__$1 = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "device-testing-report" }, [
	    _c("div", { staticClass: "testing-title" }, [_vm._v("检测报告")]),
	    _vm._v(" "),
	    _c("div", { staticClass: "device-report-list" }, [
	      _c("div", { staticClass: "device-report" }, [
	        _c("div", { staticClass: "device-info" }, [
	          _c("span", { staticClass: "report-icon" }, [
	            _c(
	              "svg",
	              {
	                staticClass: "icon",
	                attrs: {
	                  t: "1630397874793",
	                  viewBox: "0 0 1024 1024",
	                  version: "1.1",
	                  xmlns: "http://www.w3.org/2000/svg",
	                  "p-id": "958",
	                  width: "24",
	                  height: "24",
	                },
	              },
	              [
	                _c("path", {
	                  attrs: {
	                    d: "M489.244444 0a460.8 460.8 0 1 1 0 921.6A460.8 460.8 0 0 1 489.244444 0z m0 204.8a256 256 0 1 0 0 512 256 256 0 0 0 0-512z",
	                    fill: "#47494D",
	                    opacity: ".8",
	                    "p-id": "959",
	                  },
	                }),
	                _c("path", {
	                  attrs: {
	                    d: "M489.244444 460.8m-153.6 0a153.6 153.6 0 1 0 307.2 0 153.6 153.6 0 1 0-307.2 0Z",
	                    fill: "#47494D",
	                    opacity: ".8",
	                    "p-id": "960",
	                  },
	                }),
	                _c("path", {
	                  attrs: {
	                    d: "M120.604444 952.32a368.64 61.44 0 1 0 737.28 0 368.64 61.44 0 1 0-737.28 0Z",
	                    fill: "#47494D",
	                    opacity: ".8",
	                    "p-id": "961",
	                  },
	                }),
	              ]
	            ),
	          ]),
	          _vm._v(" "),
	          _c("div", { staticClass: "device-name" }, [
	            _vm._v(_vm._s(_vm.reportData.camera.result)),
	          ]),
	        ]),
	        _vm._v(" "),
	        _c(
	          "div",
	          {
	            class: [_vm.reportData.camera.type === "success" ? "green" : "red"],
	          },
	          [
	            _vm._v(
	              "\n          " +
	                _vm._s(
	                  _vm.reportData.camera.type === "success" ? "正常" : "异常"
	                ) +
	                "\n        "
	            ),
	          ]
	        ),
	      ]),
	      _vm._v(" "),
	      _c("div", { staticClass: "device-report" }, [
	        _c("div", { staticClass: "device-info" }, [
	          _c("span", { staticClass: "report-icon" }, [
	            _c(
	              "svg",
	              {
	                staticClass: "icon",
	                attrs: {
	                  t: "1630397938861",
	                  viewBox: "0 0 1024 1024",
	                  version: "1.1",
	                  xmlns: "http://www.w3.org/2000/svg",
	                  "p-id": "1205",
	                  width: "24",
	                  height: "24",
	                },
	              },
	              [
	                _c("path", {
	                  attrs: {
	                    d: "M841.551448 434.423172A41.666207 41.666207 0 0 1 882.758621 476.548414c0 194.701241-144.454621 355.469241-329.551449 376.514207v86.722207h164.758069a41.666207 41.666207 0 0 1 41.207173 42.089931A41.666207 41.666207 0 0 1 717.965241 1024H306.034759A41.666207 41.666207 0 0 1 264.827586 981.874759a41.666207 41.666207 0 0 1 41.207173-42.089931h164.758069v-86.722207C285.696 832.052966 141.241379 671.249655 141.241379 476.548414a41.666207 41.666207 0 0 1 41.207173-42.125242 41.666207 41.666207 0 0 1 41.171862 42.125242c0 162.78069 129.129931 294.770759 288.379586 294.770758l8.827586-0.141241c155.153655-4.766897 279.552-134.850207 279.552-294.629517a41.666207 41.666207 0 0 1 41.171862-42.125242zM512 0c119.419586 0 216.275862 88.770207 216.275862 198.232276v317.228138c0 106.990345-92.513103 194.206897-208.154483 198.091034l-8.121379 0.141242c-119.419586 0-216.275862-88.770207-216.275862-198.232276V198.232276c0-106.990345 92.513103-194.206897 208.154483-198.091035L512 0z",
	                    fill: "#47494D",
	                    opacity: ".8",
	                    "p-id": "1206",
	                  },
	                }),
	              ]
	            ),
	          ]),
	          _vm._v(" "),
	          _c("div", { staticClass: "device-name" }, [
	            _vm._v(_vm._s(_vm.reportData.microphone.result)),
	          ]),
	        ]),
	        _vm._v(" "),
	        _c(
	          "div",
	          {
	            class: [
	              _vm.reportData.microphone.type === "success" ? "green" : "red",
	            ],
	          },
	          [
	            _vm._v(
	              "\n          " +
	                _vm._s(
	                  _vm.reportData.microphone.type === "success" ? "正常" : "异常"
	                ) +
	                "\n        "
	            ),
	          ]
	        ),
	      ]),
	      _vm._v(" "),
	      _vm.reportData.speaker
	        ? _c("div", { staticClass: "device-report" }, [
	            _c("div", { staticClass: "device-info" }, [
	              _c("span", { staticClass: "report-icon" }, [
	                _c(
	                  "svg",
	                  {
	                    staticClass: "icon",
	                    attrs: {
	                      t: "1629186923749",
	                      viewBox: "0 0 1024 1024",
	                      version: "1.1",
	                      xmlns: "http://www.w3.org/2000/svg",
	                      "p-id": "2923",
	                      width: "24",
	                      height: "24",
	                    },
	                  },
	                  [
	                    _c("path", {
	                      attrs: {
	                        d: "M640 181.333333c0-46.037333-54.357333-70.4-88.746667-39.850666L359.552 311.850667a32 32 0 0 1-21.248 8.106666H181.333333A96 96 0 0 0 85.333333 415.957333v191.872a96 96 0 0 0 96 96h157.013334a32 32 0 0 1 21.248 8.106667l191.616 170.410667c34.389333 30.549333 88.789333 6.144 88.789333-39.850667V181.333333z m170.325333 70.272a32 32 0 0 1 44.757334 6.698667A424.917333 424.917333 0 0 1 938.666667 512a424.96 424.96 0 0 1-83.626667 253.696 32 32 0 0 1-51.413333-38.058667A360.917333 360.917333 0 0 0 874.666667 512a360.917333 360.917333 0 0 0-71.04-215.637333 32 32 0 0 1 6.698666-44.757334zM731.434667 357.12a32 32 0 0 1 43.392 12.928c22.869333 42.24 35.84 90.666667 35.84 141.994667a297.514667 297.514667 0 0 1-35.84 141.994666 32 32 0 0 1-56.32-30.464c17.92-33.152 28.16-71.082667 28.16-111.530666s-10.24-78.378667-28.16-111.530667a32 32 0 0 1 12.928-43.392z",
	                        fill: "#47494D",
	                        opacity: ".8",
	                        "p-id": "2924",
	                      },
	                    }),
	                  ]
	                ),
	              ]),
	              _vm._v(" "),
	              _c("div", { staticClass: "device-name" }, [
	                _vm._v(_vm._s(_vm.reportData.speaker.result)),
	              ]),
	            ]),
	            _vm._v(" "),
	            _c(
	              "div",
	              {
	                class: [
	                  _vm.reportData.speaker.type === "success" ? "green" : "red",
	                ],
	              },
	              [
	                _vm._v(
	                  "\n          " +
	                    _vm._s(
	                      _vm.reportData.speaker.type === "success"
	                        ? "正常"
	                        : "异常"
	                    ) +
	                    "\n        "
	                ),
	              ]
	            ),
	          ])
	        : _vm._e(),
	      _vm._v(" "),
	      _vm.reportData.network
	        ? _c("div", { staticClass: "device-report" }, [
	            _c("div", { staticClass: "device-info" }, [
	              _c("span", { staticClass: "report-icon" }, [
	                _c(
	                  "svg",
	                  {
	                    staticClass: "icon",
	                    attrs: {
	                      t: "1630400570252",
	                      viewBox: "0 0 1291 1024",
	                      version: "1.1",
	                      xmlns: "http://www.w3.org/2000/svg",
	                      "p-id": "1640",
	                      width: "24",
	                      height: "24",
	                    },
	                  },
	                  [
	                    _c("path", {
	                      attrs: {
	                        d: "M992.211478 583.68A449.758609 449.758609 0 0 0 650.017391 426.295652c-136.904348 0-259.561739 61.039304-342.194087 157.384348a90.156522 90.156522 0 0 0 136.859826 117.359304 269.846261 269.846261 0 0 1 205.334261-94.430608c82.142609 0 155.737043 36.641391 205.334261 94.386087a90.156522 90.156522 0 1 0 136.859826-117.359305zM559.86087 922.134261a90.156522 90.156522 0 1 0 180.313043 0 90.156522 90.156522 0 0 0-180.313043 0z",
	                        fill: "#47494D",
	                        opacity: ".8",
	                        "p-id": "1641",
	                      },
	                    }),
	                    _c("path", {
	                      attrs: {
	                        d: "M1253.064348 289.124174A809.316174 809.316174 0 0 0 650.017391 20.613565a809.316174 809.316174 0 0 0-603.046956 268.466087 90.156522 90.156522 0 1 0 127.777391 127.065044l0.311652 0.26713A629.581913 629.581913 0 0 1 650.017391 200.926609c189.395478 0 359.290435 83.389217 474.957913 215.485217l0.267131-0.26713a90.156522 90.156522 0 1 0 127.777391-127.065044z",
	                        fill: "#47494D",
	                        opacity: ".8",
	                        "p-id": "1642",
	                      },
	                    }),
	                  ]
	                ),
	              ]),
	              _vm._v(" "),
	              _c("div", { staticClass: "device-name" }, [_vm._v("网络延时")]),
	            ]),
	            _vm._v(" "),
	            _c(
	              "div",
	              {
	                class: [
	                  _vm.reportData.network.result.rtt <= 200 ? "green" : "red",
	                ],
	              },
	              [
	                _vm._v(
	                  "\n          " +
	                    _vm._s(_vm.reportData.network.result.rtt + "ms") +
	                    "\n        "
	                ),
	              ]
	            ),
	          ])
	        : _vm._e(),
	      _vm._v(" "),
	      _vm.reportData.network
	        ? _c("div", { staticClass: "device-report" }, [
	            _c("div", { staticClass: "device-info" }, [
	              _c("span", { staticClass: "report-icon" }, [
	                _c(
	                  "svg",
	                  {
	                    staticClass: "icon",
	                    attrs: {
	                      t: "1630400570252",
	                      viewBox: "0 0 1291 1024",
	                      version: "1.1",
	                      xmlns: "http://www.w3.org/2000/svg",
	                      "p-id": "1640",
	                      width: "24",
	                      height: "24",
	                    },
	                  },
	                  [
	                    _c("path", {
	                      attrs: {
	                        d: "M992.211478 583.68A449.758609 449.758609 0 0 0 650.017391 426.295652c-136.904348 0-259.561739 61.039304-342.194087 157.384348a90.156522 90.156522 0 0 0 136.859826 117.359304 269.846261 269.846261 0 0 1 205.334261-94.430608c82.142609 0 155.737043 36.641391 205.334261 94.386087a90.156522 90.156522 0 1 0 136.859826-117.359305zM559.86087 922.134261a90.156522 90.156522 0 1 0 180.313043 0 90.156522 90.156522 0 0 0-180.313043 0z",
	                        fill: "#47494D",
	                        opacity: ".8",
	                        "p-id": "1641",
	                      },
	                    }),
	                    _c("path", {
	                      attrs: {
	                        d: "M1253.064348 289.124174A809.316174 809.316174 0 0 0 650.017391 20.613565a809.316174 809.316174 0 0 0-603.046956 268.466087 90.156522 90.156522 0 1 0 127.777391 127.065044l0.311652 0.26713A629.581913 629.581913 0 0 1 650.017391 200.926609c189.395478 0 359.290435 83.389217 474.957913 215.485217l0.267131-0.26713a90.156522 90.156522 0 1 0 127.777391-127.065044z",
	                        fill: "#47494D",
	                        opacity: ".8",
	                        "p-id": "1642",
	                      },
	                    }),
	                  ]
	                ),
	              ]),
	              _vm._v(" "),
	              _c("div", { staticClass: "device-name" }, [
	                _vm._v("上行网络质量"),
	              ]),
	            ]),
	            _vm._v(" "),
	            _c("div", { class: [_vm.goodUplinkQuality ? "green" : "red"] }, [
	              _vm._v(
	                "\n            " +
	                  _vm._s(
	                    _vm.NETWORK_QUALITY[
	                      _vm.reportData.network.result.uplinkQuality
	                    ]
	                  ) +
	                  "\n        "
	              ),
	            ]),
	          ])
	        : _vm._e(),
	      _vm._v(" "),
	      _vm.reportData.network
	        ? _c("div", { staticClass: "device-report" }, [
	            _c("div", { staticClass: "device-info" }, [
	              _c("span", { staticClass: "report-icon" }, [
	                _c(
	                  "svg",
	                  {
	                    staticClass: "icon",
	                    attrs: {
	                      t: "1630400570252",
	                      viewBox: "0 0 1291 1024",
	                      version: "1.1",
	                      xmlns: "http://www.w3.org/2000/svg",
	                      "p-id": "1640",
	                      width: "24",
	                      height: "24",
	                    },
	                  },
	                  [
	                    _c("path", {
	                      attrs: {
	                        d: "M992.211478 583.68A449.758609 449.758609 0 0 0 650.017391 426.295652c-136.904348 0-259.561739 61.039304-342.194087 157.384348a90.156522 90.156522 0 0 0 136.859826 117.359304 269.846261 269.846261 0 0 1 205.334261-94.430608c82.142609 0 155.737043 36.641391 205.334261 94.386087a90.156522 90.156522 0 1 0 136.859826-117.359305zM559.86087 922.134261a90.156522 90.156522 0 1 0 180.313043 0 90.156522 90.156522 0 0 0-180.313043 0z",
	                        fill: "#47494D",
	                        opacity: ".8",
	                        "p-id": "1641",
	                      },
	                    }),
	                    _c("path", {
	                      attrs: {
	                        d: "M1253.064348 289.124174A809.316174 809.316174 0 0 0 650.017391 20.613565a809.316174 809.316174 0 0 0-603.046956 268.466087 90.156522 90.156522 0 1 0 127.777391 127.065044l0.311652 0.26713A629.581913 629.581913 0 0 1 650.017391 200.926609c189.395478 0 359.290435 83.389217 474.957913 215.485217l0.267131-0.26713a90.156522 90.156522 0 1 0 127.777391-127.065044z",
	                        fill: "#47494D",
	                        opacity: ".8",
	                        "p-id": "1642",
	                      },
	                    }),
	                  ]
	                ),
	              ]),
	              _vm._v(" "),
	              _c("div", { staticClass: "device-name" }, [
	                _vm._v("下行网络质量"),
	              ]),
	            ]),
	            _vm._v(" "),
	            _c("div", { class: [_vm.goodDownlinkQuality ? "green" : "red"] }, [
	              _vm._v(
	                "\n          " +
	                  _vm._s(
	                    _vm.NETWORK_QUALITY[
	                      _vm.reportData.network.result.downlinkQuality
	                    ]
	                  ) +
	                  "\n        "
	              ),
	            ]),
	          ])
	        : _vm._e(),
	    ]),
	    _vm._v(" "),
	    _c(
	      "div",
	      { staticClass: "device-report-footer" },
	      [
	        _c(
	          "Button",
	          { attrs: { type: "outlined", onClick: _vm.handleReset } },
	          [_vm._v("重新检测")]
	        ),
	        _vm._v(" "),
	        _c(
	          "Button",
	          { attrs: { type: "contained", onClick: _vm.handleClose } },
	          [_vm._v("完成检测")]
	        ),
	      ],
	      1
	    ),
	  ])
	};
	var __vue_staticRenderFns__$1 = [];
	__vue_render__$1._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$1 = undefined;
	  /* scoped */
	  const __vue_scope_id__$1 = "data-v-32dc4422";
	  /* module identifier */
	  const __vue_module_identifier__$1 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$1 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
	    __vue_inject_styles__$1,
	    __vue_script__$1,
	    __vue_scope_id__$1,
	    __vue_is_functional_template__$1,
	    __vue_module_identifier__$1,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//
	var script = {
	  name: 'deviceDetector',
	  components: {
	    Button: __vue_component__$8,
	    DeviceConnect: __vue_component__$7,
	    CameraDetector: __vue_component__$5,
	    MicDetector: __vue_component__$4,
	    SpeakerDetector: __vue_component__$3,
	    NetworkDetector: __vue_component__$2,
	    DetectorReport: __vue_component__$1,
	  },
	  props: {
	    onClose: Function,
	    hasNetworkDetect: {
	      type: Boolean,
	      default: true,
	    },
	    networkDetectInfo: Object,
	    audioUrl: String,
	  },
	  data() {
	    return {
	      stepNameList: [],
	      detectStage: 0,
	      activeStep: 0,
	      isOpen: true,
	      completed: {},
	    };
	  },
	  methods: {
	    getLableClassName(index) {
	      const { completed, stepNameList } = this;
	      const success = completed[stepNameList[index]] && completed[stepNameList[index]].type === 'success';
	      const error = completed[stepNameList[index]] && completed[stepNameList[index]].type === 'error';
	      const active = this.activeStep === index;
	      let stateClassName = '';
	      if (active || success) {
	        stateClassName = 'active';
	      } else if (error) {
	        stateClassName = 'error';
	      }
	      return stateClassName;
	    },
	    handleStep(step) {
	      const { completed, stepNameList } = this;
	      if (completed[stepNameList[step]] && completed[stepNameList[step]].completed) {
	        this.activeStep = step;
	      }
	    },
	    // 处理step的完成事件
	    handleCompleted(type, result) {
	      this.completed[this.stepNameList[this.activeStep]] = {
	        completed: true,
	        type,
	        result,
	      };
	      if (this.activeStep < this.stepNameList.length - 1) {
	        this.activeStep = this.activeStep + 1;
	      }
	      if (this.stepNameList.indexOf('network') < 0 && this.activeStep === this.stepNameList.length - 1) {
	        this.detectStage = 2;
	      }
	    },
	    stopBubble(event) {
	      event.stopPropagation();
	    },
	    setDetectStage(value) {
	      this.detectStage = value;
	    },
	    // 重新检测
	    handleReset() {
	      this.completed = {};
	      this.detectStage = 0;
	      this.activeStep = 0;
	    },
	    // 结束检测
	    handleClose() {
	      this.isOpen = false;
	      this.handleReset();
	      this.onClose && this.onClose();
	    },
	  },
	  mounted() {
	    const detect = new RTCDetect();
	    const result = detect.getSystem();
	    const stepNameList = ['camera', 'microphone', 'speaker', 'network'];
	    // iOS系统和firefox浏览器，不包含扬声器检测
	    if (result.browser.name === 'Firefox' || result.OS === 'iOS') {
	      stepNameList.indexOf('speaker') >= 0 && stepNameList.splice(stepNameList.indexOf('speaker'), 1);
	    }
	    if (!this.hasNetworkDetect) {
	      stepNameList.indexOf('network') >= 0 && stepNameList.splice(stepNameList.indexOf('network'), 1);
	    }
	    this.stepNameList = stepNameList;
	  },
	};

	/* script */
	const __vue_script__ = script;
	/* template */
	var __vue_render__ = function () {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _vm.isOpen
	    ? _c("div", { staticClass: "device-detector-backdrop" }, [
	        _c(
	          "div",
	          { staticClass: "root", on: { click: _vm.stopBubble } },
	          [
	            _c(
	              "Button",
	              {
	                staticClass: "close",
	                attrs: { type: "outlined", onClick: _vm.handleClose },
	              },
	              [_vm._v("跳过检测")]
	            ),
	            _vm._v(" "),
	            _vm.detectStage === 0
	              ? _c("DeviceConnect", {
	                  attrs: {
	                    stepNameList: _vm.stepNameList,
	                    startDeviceDetect: function () {
	                      return _vm.setDetectStage(1)
	                    },
	                  },
	                })
	              : _vm._e(),
	            _vm._v(" "),
	            _vm.detectStage === 1
	              ? _c(
	                  "div",
	                  { staticClass: "step-container" },
	                  _vm._l(_vm.stepNameList, function (label, index) {
	                    return _c(
	                      "div",
	                      {
	                        key: index,
	                        class: ["step", _vm.getLableClassName(index)],
	                        on: {
	                          click: function ($event) {
	                            return _vm.handleStep.bind(this, index)
	                          },
	                        },
	                      },
	                      [
	                        _c("span", { staticClass: "step-icon" }, [
	                          label === "camera"
	                            ? _c(
	                                "svg",
	                                {
	                                  staticClass: "icon",
	                                  attrs: {
	                                    t: "1630397874793",
	                                    viewBox: "0 0 1024 1024",
	                                    version: "1.1",
	                                    xmlns: "http://www.w3.org/2000/svg",
	                                    "p-id": "958",
	                                    width: "24",
	                                    height: "24",
	                                  },
	                                },
	                                [
	                                  _c("path", {
	                                    attrs: {
	                                      d: "M489.244444 0a460.8 460.8 0 1 1 0 921.6A460.8 460.8 0 0 1 489.244444 0z m0 204.8a256 256 0 1 0 0 512 256 256 0 0 0 0-512z",
	                                      opacity: ".8",
	                                      "p-id": "959",
	                                    },
	                                  }),
	                                  _c("path", {
	                                    attrs: {
	                                      d: "M489.244444 460.8m-153.6 0a153.6 153.6 0 1 0 307.2 0 153.6 153.6 0 1 0-307.2 0Z",
	                                      opacity: ".8",
	                                      "p-id": "960",
	                                    },
	                                  }),
	                                  _c("path", {
	                                    attrs: {
	                                      d: "M120.604444 952.32a368.64 61.44 0 1 0 737.28 0 368.64 61.44 0 1 0-737.28 0Z",
	                                      opacity: ".8",
	                                      "p-id": "961",
	                                    },
	                                  }),
	                                ]
	                              )
	                            : _vm._e(),
	                          _vm._v(" "),
	                          label === "microphone"
	                            ? _c(
	                                "svg",
	                                {
	                                  staticClass: "icon",
	                                  attrs: {
	                                    t: "1630397938861",
	                                    viewBox: "0 0 1024 1024",
	                                    version: "1.1",
	                                    xmlns: "http://www.w3.org/2000/svg",
	                                    "p-id": "1205",
	                                    width: "24",
	                                    height: "24",
	                                  },
	                                },
	                                [
	                                  _c("path", {
	                                    attrs: {
	                                      d: "M841.551448 434.423172A41.666207 41.666207 0 0 1 882.758621 476.548414c0 194.701241-144.454621 355.469241-329.551449 376.514207v86.722207h164.758069a41.666207 41.666207 0 0 1 41.207173 42.089931A41.666207 41.666207 0 0 1 717.965241 1024H306.034759A41.666207 41.666207 0 0 1 264.827586 981.874759a41.666207 41.666207 0 0 1 41.207173-42.089931h164.758069v-86.722207C285.696 832.052966 141.241379 671.249655 141.241379 476.548414a41.666207 41.666207 0 0 1 41.207173-42.125242 41.666207 41.666207 0 0 1 41.171862 42.125242c0 162.78069 129.129931 294.770759 288.379586 294.770758l8.827586-0.141241c155.153655-4.766897 279.552-134.850207 279.552-294.629517a41.666207 41.666207 0 0 1 41.171862-42.125242zM512 0c119.419586 0 216.275862 88.770207 216.275862 198.232276v317.228138c0 106.990345-92.513103 194.206897-208.154483 198.091034l-8.121379 0.141242c-119.419586 0-216.275862-88.770207-216.275862-198.232276V198.232276c0-106.990345 92.513103-194.206897 208.154483-198.091035L512 0z",
	                                      opacity: ".8",
	                                      "p-id": "1206",
	                                    },
	                                  }),
	                                ]
	                              )
	                            : _vm._e(),
	                          _vm._v(" "),
	                          label === "speaker"
	                            ? _c(
	                                "svg",
	                                {
	                                  staticClass: "icon",
	                                  attrs: {
	                                    t: "1629186923749",
	                                    viewBox: "0 0 1024 1024",
	                                    version: "1.1",
	                                    xmlns: "http://www.w3.org/2000/svg",
	                                    "p-id": "2923",
	                                    width: "24",
	                                    height: "24",
	                                  },
	                                },
	                                [
	                                  _c("path", {
	                                    attrs: {
	                                      d: "M640 181.333333c0-46.037333-54.357333-70.4-88.746667-39.850666L359.552 311.850667a32 32 0 0 1-21.248 8.106666H181.333333A96 96 0 0 0 85.333333 415.957333v191.872a96 96 0 0 0 96 96h157.013334a32 32 0 0 1 21.248 8.106667l191.616 170.410667c34.389333 30.549333 88.789333 6.144 88.789333-39.850667V181.333333z m170.325333 70.272a32 32 0 0 1 44.757334 6.698667A424.917333 424.917333 0 0 1 938.666667 512a424.96 424.96 0 0 1-83.626667 253.696 32 32 0 0 1-51.413333-38.058667A360.917333 360.917333 0 0 0 874.666667 512a360.917333 360.917333 0 0 0-71.04-215.637333 32 32 0 0 1 6.698666-44.757334zM731.434667 357.12a32 32 0 0 1 43.392 12.928c22.869333 42.24 35.84 90.666667 35.84 141.994667a297.514667 297.514667 0 0 1-35.84 141.994666 32 32 0 0 1-56.32-30.464c17.92-33.152 28.16-71.082667 28.16-111.530666s-10.24-78.378667-28.16-111.530667a32 32 0 0 1 12.928-43.392z",
	                                      opacity: ".8",
	                                      "p-id": "2924",
	                                    },
	                                  }),
	                                ]
	                              )
	                            : _vm._e(),
	                          _vm._v(" "),
	                          label === "network"
	                            ? _c(
	                                "svg",
	                                {
	                                  staticClass: "icon",
	                                  attrs: {
	                                    t: "1630400570252",
	                                    viewBox: "0 0 1291 1024",
	                                    version: "1.1",
	                                    xmlns: "http://www.w3.org/2000/svg",
	                                    "p-id": "1640",
	                                    width: "24",
	                                    height: "24",
	                                  },
	                                },
	                                [
	                                  _c("path", {
	                                    attrs: {
	                                      d: "M992.211478 583.68A449.758609 449.758609 0 0 0 650.017391 426.295652c-136.904348 0-259.561739 61.039304-342.194087 157.384348a90.156522 90.156522 0 0 0 136.859826 117.359304 269.846261 269.846261 0 0 1 205.334261-94.430608c82.142609 0 155.737043 36.641391 205.334261 94.386087a90.156522 90.156522 0 1 0 136.859826-117.359305zM559.86087 922.134261a90.156522 90.156522 0 1 0 180.313043 0 90.156522 90.156522 0 0 0-180.313043 0z",
	                                      opacity: ".8",
	                                      "p-id": "1641",
	                                    },
	                                  }),
	                                  _c("path", {
	                                    attrs: {
	                                      d: "M1253.064348 289.124174A809.316174 809.316174 0 0 0 650.017391 20.613565a809.316174 809.316174 0 0 0-603.046956 268.466087 90.156522 90.156522 0 1 0 127.777391 127.065044l0.311652 0.26713A629.581913 629.581913 0 0 1 650.017391 200.926609c189.395478 0 359.290435 83.389217 474.957913 215.485217l0.267131-0.26713a90.156522 90.156522 0 1 0 127.777391-127.065044z",
	                                      opacity: ".8",
	                                      "p-id": "1642",
	                                    },
	                                  }),
	                                ]
	                              )
	                            : _vm._e(),
	                        ]),
	                        _vm._v(" "),
	                        _c("span", { staticClass: "step-label" }, [
	                          _vm._v(_vm._s(label.toUpperCase())),
	                        ]),
	                      ]
	                    )
	                  }),
	                  0
	                )
	              : _vm._e(),
	            _vm._v(" "),
	            _vm.detectStage === 1
	              ? _c(
	                  "div",
	                  { staticClass: "testing-container" },
	                  _vm._l(_vm.stepNameList, function (step, index) {
	                    return _c(
	                      "div",
	                      { key: index },
	                      [
	                        step === "camera"
	                          ? _c("CameraDetector", {
	                              key: index,
	                              attrs: {
	                                activeDetector:
	                                  _vm.stepNameList[_vm.activeStep],
	                                handleCompleted: _vm.handleCompleted,
	                              },
	                            })
	                          : _vm._e(),
	                        _vm._v(" "),
	                        step === "microphone"
	                          ? _c("MicDetector", {
	                              key: index,
	                              attrs: {
	                                activeDetector:
	                                  _vm.stepNameList[_vm.activeStep],
	                                handleCompleted: _vm.handleCompleted,
	                              },
	                            })
	                          : _vm._e(),
	                        _vm._v(" "),
	                        step === "speaker"
	                          ? _c("SpeakerDetector", {
	                              key: index,
	                              attrs: {
	                                activeDetector:
	                                  _vm.stepNameList[_vm.activeStep],
	                                handleCompleted: _vm.handleCompleted,
	                              },
	                            })
	                          : _vm._e(),
	                        _vm._v(" "),
	                        step === "network"
	                          ? _c("NetworkDetector", {
	                              key: index,
	                              attrs: {
	                                activeDetector:
	                                  _vm.stepNameList[_vm.activeStep],
	                                networkDetectInfo: _vm.networkDetectInfo,
	                                handleCompleted: _vm.handleCompleted,
	                                generateReport: function () {
	                                  return _vm.setDetectStage(2)
	                                },
	                              },
	                            })
	                          : _vm._e(),
	                      ],
	                      1
	                    )
	                  }),
	                  0
	                )
	              : _vm._e(),
	            _vm._v(" "),
	            _vm.detectStage === 2
	              ? _c("DetectorReport", {
	                  attrs: {
	                    reportData: _vm.completed,
	                    handleReset: _vm.handleReset,
	                    handleClose: _vm.handleClose,
	                  },
	                })
	              : _vm._e(),
	          ],
	          1
	        ),
	      ])
	    : _vm._e()
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  const __vue_inject_styles__ = undefined;
	  /* scoped */
	  const __vue_scope_id__ = "data-v-beb8115a";
	  /* module identifier */
	  const __vue_module_identifier__ = undefined;
	  /* functional template */
	  const __vue_is_functional_template__ = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__ = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	const components = [__vue_component__];

	const install = function (Vue) {
	  components.forEach(component => {
	    Vue.component(component.name, component);
	  });
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports["default"] = install;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
