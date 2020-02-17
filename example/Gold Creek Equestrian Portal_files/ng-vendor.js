/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.9/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():"__proto__"!==m&&(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.9"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.9",major:1,minor:7,dot:9,codeName:"pollution-eradication"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,
e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,l){'use strict';var c="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),m=function(a,e){if(-1!==e.indexOf(a[0].nodeName))return!0};l.module("ngAria",["ng"]).info({angularVersion:"1.7.9"}).provider("$aria",function(){function a(a,c,n,g){return function(d,f,b){if(!b.hasOwnProperty("ngAriaDisable")){var p=b.$normalize(c);!e[p]||m(f,n)||b[p]||d.$watch(b[a],function(b){b=g?!b:!!b;f.attr(c,b)})}}}var e={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,
ariaValue:!0,tabindex:!0,bindKeydown:!0,bindRoleForClick:!0};this.config=function(a){e=l.extend(e,a)};this.$get=function(){return{config:function(a){return e[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",c,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked",
"aria-checked",c,!1)}]).directive("ngReadonly",["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",c,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",c,!1)}]).directive("ngModel",["$aria",function(a){function e(e,g,d,f){return a.config(g)&&!d.attr(e)&&(f||!m(d,c))&&("hidden"!==d.attr("type")||"INPUT"!==d[0].nodeName)}function k(a,e){return!e.attr("role")&&e.attr("type")===a&&!m(e,c)}function h(a,e){var d=a.type,f=a.role;return"checkbox"===
(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(c,g){if(!g.hasOwnProperty("ngAriaDisable")){var d=h(g,c);return{post:function(f,b,c,g){function h(){return g.$modelValue}function m(a){b.attr("aria-checked",c.value==g.$viewValue)}function n(){b.attr("aria-checked",!g.$isEmpty(g.$viewValue))}var l=e("tabindex","tabindex",b,!1);switch(d){case "radio":case "checkbox":k(d,
b)&&b.attr("role",d);e("aria-checked","ariaChecked",b,!1)&&f.$watch(h,"radio"===d?m:n);l&&b.attr("tabindex",0);break;case "range":k(d,b)&&b.attr("role","slider");if(a.config("ariaValue")){var q=!b.attr("aria-valuemin")&&(c.hasOwnProperty("min")||c.hasOwnProperty("ngMin")),r=!b.attr("aria-valuemax")&&(c.hasOwnProperty("max")||c.hasOwnProperty("ngMax")),s=!b.attr("aria-valuenow");q&&c.$observe("min",function(a){b.attr("aria-valuemin",a)});r&&c.$observe("max",function(a){b.attr("aria-valuemax",a)});
s&&f.$watch(h,function(a){b.attr("aria-valuenow",a)})}l&&b.attr("tabindex",0)}!c.hasOwnProperty("ngRequired")&&g.$validators.required&&e("aria-required","ariaRequired",b,!1)&&c.$observe("required",function(){b.attr("aria-required",!!c.required)});e("aria-invalid","ariaInvalid",b,!0)&&f.$watch(function(){return g.$invalid},function(a){b.attr("aria-invalid",!!a)})}}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",c,!1)}]).directive("ngMessages",function(){return{restrict:"A",
require:"?ngMessages",link:function(a,c,k,h){k.hasOwnProperty("ngAriaDisable")||c.attr("aria-live")||c.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,e){return{restrict:"A",compile:function(k,h){if(!h.hasOwnProperty("ngAriaDisable")){var l=e(h.ngClick);return function(e,d,f){if(!m(d,c)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeydown")&&!f.ngKeydown&&!f.ngKeypress&&
!f.ngKeyup))d.on("keydown",function(a){function d(){l(e,{$event:a})}var f=a.which||a.keyCode;if(13===f||32===f)-1!==c.indexOf(a.target.nodeName)||a.target.isContentEditable||a.preventDefault(),e.$apply(d)})}}}}}]).directive("ngDblclick",["$aria",function(a){return function(e,k,h){h.hasOwnProperty("ngAriaDisable")||!a.config("tabindex")||k.attr("tabindex")||m(k,c)||k.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,a){'use strict';function M(m,f){f=f||{};a.forEach(f,function(a,d){delete f[d]});for(var d in m)!m.hasOwnProperty(d)||"$"===d.charAt(0)&&"$"===d.charAt(1)||(f[d]=m[d]);return f}var B=a.$$minErr("$resource"),H=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;a.module("ngResource",["ng"]).info({angularVersion:"1.7.9"}).provider("$resource",function(){var m=/^https?:\/\/\[[^\]]*][^/]*/,f=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",
isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(d,F,G,N){function C(a,d){this.template=a;this.defaults=n({},f.defaults,d);this.urlParams={}}var O=a.noop,r=a.forEach,n=a.extend,R=a.copy,P=a.isArray,D=a.isDefined,x=a.isFunction,I=a.isNumber,y=a.$$encodeUriQuery,S=a.$$encodeUriSegment;C.prototype={setUrlParams:function(a,d,f){var g=this,c=f||g.template,s,h,n="",b=g.urlParams=Object.create(null);r(c.split(/\W/),function(a){if("hasOwnProperty"===
a)throw B("badname");!/^\d+$/.test(a)&&a&&(new RegExp("(^|[^\\\\]):"+a+"(\\W|$)")).test(c)&&(b[a]={isQueryParamValue:(new RegExp("\\?.*=:"+a+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");c=c.replace(m,function(b){n=b;return""});d=d||{};r(g.urlParams,function(b,a){s=d.hasOwnProperty(a)?d[a]:g.defaults[a];D(s)&&null!==s?(h=b.isQueryParamValue?y(s,!0):S(s),c=c.replace(new RegExp(":"+a+"(\\W|$)","g"),function(b,a){return h+a})):c=c.replace(new RegExp("(/?):"+a+"(\\W|$)","g"),function(b,a,e){return"/"===
e.charAt(0)?e:a+e})});g.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");a.url=n+c.replace(/\/(\\|%5C)\./,"/.");r(d,function(b,c){g.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}};return function(m,y,z,g){function c(b,c){var d={};c=n({},y,c);r(c,function(c,f){x(c)&&(c=c(b));var e;if(c&&c.charAt&&"@"===c.charAt(0)){e=b;var k=c.substr(1);if(null==k||""===k||"hasOwnProperty"===k||!H.test("."+k))throw B("badmember",k);for(var k=k.split("."),h=0,
n=k.length;h<n&&a.isDefined(e);h++){var g=k[h];e=null!==e?e[g]:void 0}}else e=c;d[f]=e});return d}function s(b){return b.resource}function h(b){M(b||{},this)}var Q=new C(m,g);z=n({},f.defaults.actions,z);h.prototype.toJSON=function(){var b=n({},this);delete b.$promise;delete b.$resolved;delete b.$cancelRequest;return b};r(z,function(b,a){var f=!0===b.hasBody||!1!==b.hasBody&&/^(POST|PUT|PATCH)$/i.test(b.method),g=b.timeout,m=D(b.cancellable)?b.cancellable:Q.defaults.cancellable;g&&!I(g)&&(F.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete b.timeout,g=null);h[a]=function(e,k,J,y){function z(a){p.catch(O);null!==u&&u.resolve(a)}var K={},v,t,w;switch(arguments.length){case 4:w=y,t=J;case 3:case 2:if(x(k)){if(x(e)){t=e;w=k;break}t=k;w=J}else{K=e;v=k;t=J;break}case 1:x(e)?t=e:f?v=e:K=e;break;case 0:break;default:throw B("badargs",arguments.length);}var E=this instanceof h,l=E?v:b.isArray?[]:new h(v),q={},C=b.interceptor&&b.interceptor.request||void 0,D=b.interceptor&&b.interceptor.requestError||void 0,F=b.interceptor&&b.interceptor.response||
s,H=b.interceptor&&b.interceptor.responseError||G.reject,I=t?function(a){t(a,A.headers,A.status,A.statusText)}:void 0;w=w||void 0;var u,L,A;r(b,function(a,b){switch(b){default:q[b]=R(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!E&&m&&(u=G.defer(),q.timeout=u.promise,g&&(L=N(u.resolve,g)));f&&(q.data=v);Q.setUrlParams(q,n({},c(v,b.params||{}),K),b.url);var p=G.resolve(q).then(C).catch(D).then(d),p=p.then(function(c){var e=c.data;if(e){if(P(e)!==!!b.isArray)throw B("badcfg",
a,b.isArray?"array":"object",P(e)?"array":"object",q.method,q.url);if(b.isArray)l.length=0,r(e,function(a){"object"===typeof a?l.push(new h(a)):l.push(a)});else{var d=l.$promise;M(e,l);l.$promise=d}}c.resource=l;A=c;return F(c)},function(a){a.resource=l;A=a;return H(a)}),p=p["finally"](function(){l.$resolved=!0;!E&&m&&(l.$cancelRequest=O,N.cancel(L),u=L=q.timeout=null)});p.then(I,w);return E?p:(l.$promise=p,l.$resolved=!1,m&&(l.$cancelRequest=z),l)};h.prototype["$"+a]=function(b,c,d){x(b)&&(d=c,c=
b,b={});b=h[a].call(this,b,this,c,d);return b.$promise||b}});return h}}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles
 * @version v1.0.24
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("angular")):"function"==typeof define&&define.amd?define(["exports","angular"],e):e((t=t||self)["@uirouter/angularjs"]={},t.angular)}(this,function(d,t){"use strict";var e=angular,$=t&&t.module?t:e,n=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],a=0,u=o.length;a<u;a++,i++)n[i]=o[a];return n};function s(r){return function t(){if(arguments.length>=r.length)return r.apply(this,arguments);var e=Array.prototype.slice.call(arguments);return t.bind.apply(t,n([this],e))}}function r(){var r=arguments,n=r.length-1;return function(){for(var t=n,e=r[n].apply(this,arguments);t--;)e=r[t].call(this,e);return e}}function c(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(null,[].slice.call(arguments).reverse())}var m=function(e){return function(t){return t&&t[e]}},y=s(function(t,e,r){return r&&r[t]===e}),R=function(t){return c.apply(null,t.split(".").map(m))},l=function(r){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return!r.apply(null,t)}};function i(r,n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(null,t)&&n.apply(null,t)}}function o(r,n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(null,t)||n.apply(null,t)}}function a(e){return function(t){return e===t}}var u=function(r){return function(t){return t.reduce(function(t,e){return t&&!!r(e)},!0)}},f=function(r){return function(t){return t.reduce(function(t,e){return t||!!r(e)},!1)}},h=function(e){return function(t){return null!=t&&t.constructor===e||t instanceof e}},p=function(t){return function(){return t}};function v(e,r){return function(t){return t[e].apply(t,r)}}function g(r){return function(t){for(var e=0;e<r.length;e++)if(r[e][0](t))return r[e][1](t)}}function w(e){return function(t){return typeof t===e}}function _(t){return null===t}var S=Object.prototype.toString,b=w("undefined"),E=l(b),C=o(_,b),T=w("function"),P=w("number"),k=w("string"),O=function(t){return null!==t&&"object"==typeof t},x=Array.isArray,j=function(t){return"[object Date]"===S.call(t)},V=function(t){return"[object RegExp]"===S.call(t)};function H(t){if(x(t)&&t.length){var e=t.slice(0,-1),r=t.slice(-1);return!(e.filter(l(k)).length||r.filter(l(T)).length)}return T(t)}function I(r,t){return t.reduce(function(t,e){return t[e]=function(t){return function(){throw new Error("No implementation for "+t+". The framework specific code did not implement this method.")}}(r+"."+e+"()"),t},{})}var A=i(O,c(m("then"),T)),D={$q:void 0,$injector:void 0},q=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],a=0,u=o.length;a<u;a++,i++)n[i]=o[a];return n},U="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||void 0,F=U.angular||{},N=F.fromJson||JSON.parse.bind(JSON),L=F.toJson||JSON.stringify.bind(JSON),M=F.forEach||function(e,r,t){if(x(e))return e.forEach(r,t);Object.keys(e).forEach(function(t){return r(e[t],t)})},B=Object.assign||Ot,G=F.equals||xt;function z(t){return t}function W(){}function J(e,r,n,t,i){void 0===i&&(i=!1);function o(t){return e()[t].bind(n())}return(t=t||Object.keys(e())).reduce(function(t,e){return t[e]=i?function(t){return function(){return r[t]=o(t),r[t].apply(null,arguments)}}(e):o(e),t},r)}var Q=function(t,e){return B(Object.create(t),e)},K=s(Y);function Y(t,e){return-1!==t.indexOf(e)}var Z=s(X);function X(t,e){var r=t.indexOf(e);return 0<=r&&t.splice(r,1),t}var tt=s(et);function et(t,e){return t.push(e),e}function rt(e){return e.slice().forEach(function(t){"function"==typeof t&&t(),Z(e,t)})}function nt(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=B.apply(void 0,q([{}],e.reverse()));return B(n,at(t||{},Object.keys(n)))}function it(t,e){return B(t,e)}function ot(t,e){var r=[];for(var n in t.path){if(t.path[n]!==e.path[n])break;r.push(t.path[n])}return r}function at(t,e){var r={};for(var n in t)-1!==e.indexOf(n)&&(r[n]=t[n]);return r}function ut(r,t){return Object.keys(r).filter(l(K(t))).reduce(function(t,e){return t[e]=r[e],t},{})}function st(t,e){return ht(t,m(e))}function ct(t,r){var e=x(t),n=e?[]:{},i=e?function(t){return n.push(t)}:function(t,e){return n[e]=t};return M(t,function(t,e){r(t,e)&&i(t,e)}),n}function ft(t,r){var n;return M(t,function(t,e){n||r(t,e)&&(n=t)}),n}var lt=ht;function ht(t,r,n){return n=n||(x(t)?[]:{}),M(t,function(t,e){return n[e]=r(t,e)}),n}function pt(e){return Object.keys(e).map(function(t){return e[t]})}function vt(t,e){return t&&e}function dt(t,e){return t||e}var mt=function(t,e){return t.concat(e)},yt=function(t,e){return x(e)?t.concat(e.reduce(yt,[])):gt(t,e)};function gt(t,e){return t.push(e),t}function wt(t,e){return K(t,e)?t:gt(t,e)}function _t(t){return t.reduce(mt,[])}function St(t){return t.reduce(yt,[])}var bt=Rt,$t=Rt;function Rt(r,n){return void 0===n&&(n="assert failure"),function(t){var e=r(t);if(!e)throw new Error(T(n)?n(t):n);return e}}function Et(e){return Object.keys(e).map(function(t){return[t,e[t]]})}function Ct(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return[];for(var r=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991),n=[],i=function(e){switch(t.length){case 1:n.push([t[0][e]]);break;case 2:n.push([t[0][e],t[1][e]]);break;case 3:n.push([t[0][e],t[1][e],t[2][e]]);break;case 4:n.push([t[0][e],t[1][e],t[2][e],t[3][e]]);break;default:n.push(t.map(function(t){return t[e]}))}},o=0;o<r;o++)i(o);return n}function Tt(t,e){var r,n;if(x(e)&&(r=e[0],n=e[1]),!k(r))throw new Error("invalid parameters to applyPairs");return t[r]=n,t}function Pt(t){return t.length&&t[t.length-1]||void 0}function kt(t,e){return e&&Object.keys(e).forEach(function(t){return delete e[t]}),B(e=e||{},t)}function Ot(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n=Object.keys(r),i=0;i<n.length;i++)t[n[i]]=r[n[i]]}return t}function xt(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!=t&&e!=e)return!0;var r=typeof t;if(r!=typeof e||"object"!=r)return!1;var n=[t,e];if(u(x)(n))return function(t,e){return t.length===e.length&&Ct(t,e).reduce(function(t,e){return t&&xt(e[0],e[1])},!0)}(t,e);if(u(j)(n))return t.getTime()===e.getTime();if(u(V)(n))return t.toString()===e.toString();if(u(T)(n))return!0;if([T,x,j,V].map(f).reduce(function(t,e){return t||!!e(n)},!1))return!1;var i={};for(var o in t){if(!xt(t[o],e[o]))return!1;i[o]=!0}for(var o in e)if(!i[o])return!1;return!0}function jt(t){return t.catch(function(t){return 0})&&t}function Vt(t){return jt(D.$q.reject(t))}var Ht=(It.is=function(t){return!!/[!,*]+/.exec(t)},It.fromString=function(t){return It.is(t)?new It(t):null},It.prototype.matches=function(t){return this.regexp.test("."+t)},It);function It(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}var At,Dt=(qt.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&this.evict(),t},qt.prototype.evict=function(){var e=this._items.shift();return this._evictListeners.forEach(function(t){return t(e)}),e},qt.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},qt.prototype.clear=function(){var t=this._items;return this._items=[],t},qt.prototype.size=function(){return this._items.length},qt.prototype.remove=function(t){var e=this._items.indexOf(t);return-1<e&&this._items.splice(e,1)[0]},qt.prototype.peekTail=function(){return this._items[this._items.length-1]},qt.prototype.peekHead=function(){if(this.size())return this._items[0]},qt);function qt(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e,this._evictListeners=[],this.onEvict=tt(this._evictListeners)}(At=d.RejectType||(d.RejectType={}))[At.SUPERSEDED=2]="SUPERSEDED",At[At.ABORTED=3]="ABORTED",At[At.INVALID=4]="INVALID",At[At.IGNORED=5]="IGNORED",At[At.ERROR=6]="ERROR";var Ut=0,Ft=(Nt.isRejectionPromise=function(t){return t&&"function"==typeof t.then&&h(Nt)(t._transitionRejection)},Nt.superseded=function(t,e){var r=new Nt(d.RejectType.SUPERSEDED,"The transition has been superseded by a different transition",t);return e&&e.redirected&&(r.redirected=!0),r},Nt.redirected=function(t){return Nt.superseded(t,{redirected:!0})},Nt.invalid=function(t){return new Nt(d.RejectType.INVALID,"This transition is invalid",t)},Nt.ignored=function(t){return new Nt(d.RejectType.IGNORED,"The transition was ignored",t)},Nt.aborted=function(t){return new Nt(d.RejectType.ABORTED,"The transition has been aborted",t)},Nt.errored=function(t){return new Nt(d.RejectType.ERROR,"The transition errored",t)},Nt.normalize=function(t){return h(Nt)(t)?t:Nt.errored(t)},Nt.prototype.toString=function(){var t,e=(t=this.detail)&&t.toString!==Object.prototype.toString?t.toString():Qt(t);return"Transition Rejection($id: "+this.$id+" type: "+this.type+", message: "+this.message+", detail: "+e+")"},Nt.prototype.toPromise=function(){return B(Vt(this),{_transitionRejection:this})},Nt);function Nt(t,e,r){this.$id=Ut++,this.type=t,this.message=e,this.detail=r}function Lt(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function Mt(t,e){for(;e.length<t;)e+=" ";return e}function Bt(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function Gt(t){var e=zt(t),r=e.match(/^(function [^ ]+\([^)]*\))/),n=r?r[1]:e,i=t.name||"";return i&&n.match(/function \(/)?"function "+i+n.substr(9):n}function zt(t){var e=x(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}var Wt=Ft.isRejectionPromise,Jt=g([[b,p("undefined")],[_,p("null")],[A,p("[Promise]")],[Wt,function(t){return t._transitionRejection.toString()}],[function(t){return O(t)&&!x(t)&&t.constructor!==Object&&T(t.toString)},function(t){return t.toString()}],[H,Gt],[p(!0),z]]);function Qt(t){var e=[];function r(t){if(O(t)){if(-1!==e.indexOf(t))return"[circular ref]";e.push(t)}return Jt(t)}return b(t)?r(t):JSON.stringify(t,function(t,e){return r(e)}).replace(/\\"/g,'"')}function Kt(r){return function(t){if(!t)return["",""];var e=t.indexOf(r);return-1===e?[t,""]:[t.substr(0,e),t.substr(e+1)]}}function Yt(t){return t.replace(/\/[^/]*$/,"")}function Zt(t){return t?t.replace(/^#/,""):""}var Xt=new RegExp("^(?:[a-z]+:)?//[^/]+/"),te=Kt("#"),ee=Kt("?"),re=Kt("=");function ne(t){var e=new RegExp("("+t+")","g");return function(t){return t.split(e).filter(z)}}function ie(t,e){return k(Pt(t))&&k(e)?t.slice(0,-1).concat(Pt(t)+e):gt(t,e)}var oe={log:W,error:W,table:W};var ae,ue,se,ce=document&&document.documentMode&&9===document.documentMode?window&&window.console?(se=window.console,{log:fe(se.log),error:fe(se.log),table:fe(se.log)}):oe:console.table&&console.error?console:(ae=console,{log:ue=ae.log.bind(ae),error:ae.error?ae.error.bind(ae):ue,table:ae.table?ae.table.bind(ae):ue});function fe(t){return Function.prototype.bind.call(t,se)}function le(t){if(!t)return"ui-view (defunct)";var e=t.creationContext?t.creationContext.name||"(root)":"(none)";return"[ui-view#"+t.id+" "+t.$type+":"+t.fqn+" ("+t.name+"@"+e+")]"}var he;function pe(t){return P(t)?d.Category[t]:d.Category[d.Category[t]]}(he=d.Category||(d.Category={}))[he.RESOLVE=0]="RESOLVE",he[he.TRANSITION=1]="TRANSITION",he[he.HOOK=2]="HOOK",he[he.UIVIEW=3]="UIVIEW",he[he.VIEWCONFIG=4]="VIEWCONFIG";function ve(t){return"Transition #"+de(t)+"-"+me(t)}var de=R("$id"),me=R("router.$id"),ye=(ge.prototype._set=function(e,t){var r=this;t.length||(t=Object.keys(d.Category).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(t){return d.Category[t]})),t.map(pe).forEach(function(t){return r._enabled[t]=e})},ge.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!0,t)},ge.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!1,t)},ge.prototype.enabled=function(t){return!!this._enabled[pe(t)]},ge.prototype.traceTransitionStart=function(t){this.enabled(d.Category.TRANSITION)&&ce.log(ve(t)+": Started  -> "+Qt(t))},ge.prototype.traceTransitionIgnored=function(t){this.enabled(d.Category.TRANSITION)&&ce.log(ve(t)+": Ignored  <> "+Qt(t))},ge.prototype.traceHookInvocation=function(t,e,r){if(this.enabled(d.Category.HOOK)){var n=R("traceData.hookType")(r)||"internal",i=R("traceData.context.state.name")(r)||R("traceData.context")(r)||"unknown",o=Gt(t.registeredHook.callback);ce.log(ve(e)+":   Hook -> "+n+" context: "+i+", "+Lt(200,o))}},ge.prototype.traceHookResult=function(t,e,r){this.enabled(d.Category.HOOK)&&ce.log(ve(e)+":   <- Hook returned: "+Lt(200,Qt(t)))},ge.prototype.traceResolvePath=function(t,e,r){this.enabled(d.Category.RESOLVE)&&ce.log(ve(r)+":         Resolving "+t+" ("+e+")")},ge.prototype.traceResolvableResolved=function(t,e){this.enabled(d.Category.RESOLVE)&&ce.log(ve(e)+":               <- Resolved  "+t+" to: "+Lt(200,Qt(t.data)))},ge.prototype.traceError=function(t,e){this.enabled(d.Category.TRANSITION)&&ce.log(ve(e)+": <- Rejected "+Qt(e)+", reason: "+t)},ge.prototype.traceSuccess=function(t,e){this.enabled(d.Category.TRANSITION)&&ce.log(ve(e)+": <- Success  "+Qt(e)+", final state: "+t.name)},ge.prototype.traceUIViewEvent=function(t,e,r){void 0===r&&(r=""),this.enabled(d.Category.UIVIEW)&&ce.log("ui-view: "+Mt(30,t)+" "+le(e)+r)},ge.prototype.traceUIViewConfigUpdated=function(t,e){this.enabled(d.Category.UIVIEW)&&this.traceUIViewEvent("Updating",t," with ViewConfig from context='"+e+"'")},ge.prototype.traceUIViewFill=function(t,e){this.enabled(d.Category.UIVIEW)&&this.traceUIViewEvent("Fill",t," with: "+Lt(200,e))},ge.prototype.traceViewSync=function(t){if(this.enabled(d.Category.VIEWCONFIG)){var a="uiview component fqn",e=t.map(function(t){var e,r=t.uiView,n=t.viewConfig,i=r&&r.fqn,o=n&&n.viewDecl.$context.name+": ("+n.viewDecl.$name+")";return(e={})[a]=i,e["view config state (view name)"]=o,e}).sort(function(t,e){return(t[a]||"").localeCompare(e[a]||"")});ce.table(e)}},ge.prototype.traceViewServiceEvent=function(t,e){this.enabled(d.Category.VIEWCONFIG)&&ce.log("VIEWCONFIG: "+t+" "+function(t){var e=t.viewDecl,r=e.$context.name||"(root)";return"[View#"+t.$id+" from '"+r+"' state]: target ui-view: '"+e.$uiViewName+"@"+e.$uiViewContextAnchor+"'"}(e))},ge.prototype.traceViewServiceUIViewEvent=function(t,e){this.enabled(d.Category.VIEWCONFIG)&&ce.log("VIEWCONFIG: "+t+" "+le(e))},ge);function ge(){this._enabled={},this.approximateDigests=0}var we=new ye,_e=(Se.prototype.is=function(t,e){return!0},Se.prototype.encode=function(t,e){return t},Se.prototype.decode=function(t,e){return t},Se.prototype.equals=function(t,e){return t==e},Se.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},Se.prototype.toString=function(){return"{ParamType:"+this.name+"}"},Se.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},Se.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new be(this,t)},Se);function Se(t){this.pattern=/.*/,this.inherit=!0,B(this,t)}function be(n,i){var o=this;function a(t){return x(t)?t:E(t)?[t]:[]}function u(r,n){return function(t){if(x(t)&&0===t.length)return t;var e=ht(a(t),r);return!0===n?0===ct(e,function(t){return!t}).length:function(t){switch(t.length){case 0:return;case 1:return"auto"===i?t[0]:t;default:return t}}(e)}}function s(o){return function(t,e){var r=a(t),n=a(e);if(r.length!==n.length)return!1;for(var i=0;i<r.length;i++)if(!o(r[i],n[i]))return!1;return!0}}["encode","decode","equals","$normalize"].forEach(function(t){var e=n[t].bind(n),r="equals"===t?s:u;o[t]=r(e)}),B(this,{dynamic:n.dynamic,name:n.name,pattern:n.pattern,inherit:n.inherit,raw:n.raw,is:u(n.is.bind(n),!0),$arrayMode:i})}var $e,Re=Object.prototype.hasOwnProperty,Ee=function(t){return 0===["value","type","squash","array","dynamic"].filter(Re.bind(t||{})).length};function Ce(t,e,r){var n=!1===r.reloadOnSearch&&e===d.DefType.SEARCH||void 0,i=ft([r.dynamic,n],E),o=E(i)?{dynamic:i}:{},a=function(t){function e(){return t.value}t=Ee(t)?{value:t}:t,e.__cacheable=!0;var r=H(t.value)?t.value:e;return B(t,{$$fn:r})}(r&&r.params&&r.params[t]);return B(o,a)}($e=d.DefType||(d.DefType={}))[$e.PATH=0]="PATH",$e[$e.SEARCH=1]="SEARCH",$e[$e.CONFIG=2]="CONFIG";var Te=(Pe.values=function(t,e){void 0===e&&(e={});for(var r={},n=0,i=t;n<i.length;n++){var o=i[n];r[o.id]=o.value(e[o.id])}return r},Pe.changed=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),t.filter(function(t){return!t.type.equals(e[t.id],r[t.id])})},Pe.equals=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),0===Pe.changed(t,e,r).length},Pe.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(vt,!0)},Pe.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},Pe.prototype.value=function(t){var i=this;return t=function(t){for(var e=0,r=i.replace;e<r.length;e++){var n=r[e];if(n.from===t)return n.to}return t}(t),b(t)?function(){if(i._defaultValueCache)return i._defaultValueCache.defaultValue;if(!D.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=D.$injector.invoke(i.config.$$fn);if(null!=t&&!i.type.is(t))throw new Error("Default value ("+t+") for parameter '"+i.id+"' is not an instance of ParamType ("+i.type.name+")");return i.config.$$fn.__cacheable&&(i._defaultValueCache={defaultValue:t}),t}():this.type.$normalize(t)},Pe.prototype.isSearch=function(){return this.location===d.DefType.SEARCH},Pe.prototype.validates=function(t){if((b(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var r=this.type.encode(e);return!(k(r)&&!this.type.pattern.exec(r))},Pe.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},Pe);function Pe(t,e,r,n,i){var o=Ce(t,r,i);e=function(t,e,r,n,i){if(t.type&&e&&"string"!==e.name)throw new Error("Param '"+n+"' has two type configurations.");if(t.type&&e&&"string"===e.name&&i.type(t.type))return i.type(t.type);if(e)return e;if(t.type)return t.type instanceof _e?t.type:i.type(t.type);var o=r===d.DefType.CONFIG?"any":r===d.DefType.PATH?"path":r===d.DefType.SEARCH?"query":"string";return i.type(o)}(o,e,r,t,n.paramTypes);var a,u,s=(a={array:r===d.DefType.SEARCH&&"auto"},u=t.match(/\[\]$/)?{array:!0}:{},B(a,u,o).array);e=s?e.$asArray(s,r===d.DefType.SEARCH):e;var c=void 0!==o.value||r===d.DefType.SEARCH,f=E(o.dynamic)?!!o.dynamic:!!e.dynamic,l=E(o.raw)?!!o.raw:!!e.raw,h=function(t,e,r){var n=t.squash;if(!e||!1===n)return!1;if(!E(n)||null==n)return r;if(!0===n||k(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}(o,c,n.defaultSquashPolicy()),p=function(t,e,r,n){var i=[{from:"",to:r||e?void 0:""},{from:null,to:r||e?void 0:""}],o=x(t.replace)?t.replace:[];k(n)&&o.push({from:n,to:void 0});var a=ht(o,m("from"));return ct(i,function(t){return-1===a.indexOf(t.from)}).concat(o)}(o,s,c,h),v=E(o.inherit)?!!o.inherit:!!e.inherit;B(this,{id:t,type:e,location:r,isOptional:c,dynamic:f,raw:l,squash:h,replace:p,inherit:v,array:s,config:o})}var ke=(Oe.prototype.dispose=function(){this.types={}},Oe.prototype.type=function(t,e,r){if(!E(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new _e(B({name:t},e)),r&&(this.typeQueue.push({name:t,def:r}),this.enqueue||this._flushTypeQueue()),this},Oe.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");B(this.types[t.name],D.$injector.invoke(t.def))}},Oe);function Oe(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=at(Oe.prototype,["hash","string","query","path","int","bool","date","json","any"]);this.types=Q(ht(this.defaultTypes,function(t,e){return new _e(B({name:e},t))}),{})}function xe(t){function e(t){return null!=t?t.toString():t}var r={encode:e,decode:e,is:h(String),pattern:/.*/,equals:function(t,e){return t==e}};return B({},r,t)}B(ke.prototype,{string:xe({}),path:xe({pattern:/[^/]*/}),query:xe({}),hash:xe({inherit:!1}),int:xe({decode:function(t){return parseInt(t,10)},is:function(t){return!C(t)&&this.decode(t.toString())===t},pattern:/-?\d+/}),bool:xe({encode:function(t){return t?1:0},decode:function(t){return 0!==parseInt(t,10)},is:h(Boolean),pattern:/0|1/}),date:xe({encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(r,n){return["getFullYear","getMonth","getDate"].reduce(function(t,e){return t&&r[e]()===n[e]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:xe({encode:L,decode:N,is:h(Object),equals:G,pattern:/[^/]*/}),any:xe({encode:z,decode:z,is:function(){return!0},equals:G})});var je=(Ve.prototype.$inherit=function(t,e,r){var n,i=ot(e,r),o={},a=[];for(var u in i)if(i[u]&&i[u].params&&(n=Object.keys(i[u].params)).length)for(var s in n)0<=a.indexOf(n[s])||(a.push(n[s]),o[n[s]]=this[n[s]]);return B({},o,t)},Ve);function Ve(t){void 0===t&&(t={}),B(this,t)}var He=(Ie.prototype.clone=function(){return new Ie(this)},Ie.prototype.applyRawParams=function(r){return this.paramValues=this.paramSchema.reduce(function(t,e){return Tt(t,function(t){return[t.id,t.value(r[t.id])]}(e))},{}),this},Ie.prototype.parameter=function(t){return ft(this.paramSchema,y("id",t))},Ie.prototype.equals=function(t,e){var r=this.diff(t,e);return r&&0===r.length},Ie.prototype.diff=function(t,e){if(this.state!==t.state)return!1;var r=e?e(this):this.paramSchema;return Te.changed(r,this.paramValues,t.paramValues)},Ie.clone=function(t){return t.clone()},Ie);function Ie(t){if(t instanceof Ie){var e=t;this.state=e.state,this.paramSchema=e.paramSchema.slice(),this.paramValues=B({},e.paramValues),this.resolvables=e.resolvables.slice(),this.views=e.views&&e.views.slice()}else{var r=t;this.state=r,this.paramSchema=r.parameters({inherit:!1}),this.paramValues={},this.resolvables=r.resolvables.map(function(t){return t.clone()})}}var Ae=(De.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},De.prototype.identifier=function(){return this._identifier},De.prototype.params=function(){return this._params},De.prototype.$state=function(){return this._definition},De.prototype.state=function(){return this._definition&&this._definition.self},De.prototype.options=function(){return this._options},De.prototype.exists=function(){return!(!this._definition||!this._definition.self)},De.prototype.valid=function(){return!this.error()},De.prototype.error=function(){var t=this.options().relative;if(this._definition||!t)return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'";var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"},De.prototype.toString=function(){return"'"+this.name()+"'"+Qt(this.params())},De.prototype.withState=function(t){return new De(this._stateRegistry,t,this._params,this._options)},De.prototype.withParams=function(t,e){void 0===e&&(e=!1);var r=e?t:B({},this._params,t);return new De(this._stateRegistry,this._identifier,r,this._options)},De.prototype.withOptions=function(t,e){void 0===e&&(e=!1);var r=e?t:B({},this._options,t);return new De(this._stateRegistry,this._identifier,this._params,r)},De.isDef=function(t){return t&&t.state&&(k(t.state)||k(t.state.name))},De);function De(t,e,r,n){this._stateRegistry=t,this._identifier=e,this._identifier=e,this._params=B({},r||{}),this._options=B({},n||{}),this._definition=t.matcher.find(e,this._options.relative)}var qe=(Ue.makeTargetState=function(t,e){var r=Pt(e).state;return new Ae(t,r,e.map(m("paramValues")).reduce(it,{}),{})},Ue.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new He(t).applyRawParams(e)})},Ue.buildToPath=function(t,e){var r=Ue.buildPath(e);return e.options().inherit?Ue.inheritParams(t,r,Object.keys(e.params())):r},Ue.applyViewConfigs=function(i,o,e){o.filter(function(t){return K(e,t.state)}).forEach(function(e){var t=pt(e.state.views||{}),r=Ue.subPath(o,function(t){return t===e}),n=t.map(function(t){return i.createViewConfig(r,t)});e.views=n.reduce(mt,[])})},Ue.inheritParams=function(o,t,a){void 0===a&&(a=[]);var u=o.map(function(t){return t.paramSchema}).reduce(mt,[]).filter(function(t){return!t.inherit}).map(m("id"));return t.map(function(t){var e=B({},t&&t.paramValues),r=at(e,a);e=ut(e,a);var n=ut(function(t,e){var r=ft(t,y("state",e));return B({},r&&r.paramValues)}(o,t.state)||{},u),i=B(e,n,r);return new He(t.state).applyRawParams(i)})},Ue.treeChanges=function(t,n,e){for(var r,i,o,a,u,s,c=Math.min(t.length,n.length),f=0;f<c&&t[f].state!==e&&(r=t[f],i=n[f],r.equals(i,Ue.nonDynamicParams));)f++;a=(o=t).slice(0,f),u=o.slice(f);var l=a.map(function(t,e){var r=t.clone();return r.paramValues=n[e].paramValues,r});return s=n.slice(f),{from:o,to:l.concat(s),retained:a,retainedWithToParams:l,exiting:u,entering:s}},Ue.matching=function(t,e,i){var o=!1;return Ct(t,e).reduce(function(t,e){var r=e[0],n=e[1];return(o=o||!r.equals(n,i))?t:t.concat(r)},[])},Ue.equals=function(t,e,r){return t.length===e.length&&Ue.matching(t,e,r).length===t.length},Ue.subPath=function(t,e){var r=ft(t,e),n=t.indexOf(r);return-1===n?void 0:t.slice(0,n+1)},Ue.nonDynamicParams=function(t){return t.state.parameters({inherit:!1}).filter(function(t){return!t.dynamic})},Ue.paramValues=function(t){return t.reduce(function(t,e){return B(t,e.paramValues)},{})},Ue);function Ue(){}var Fe={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT"}},Ne={when:"LAZY",async:"WAIT"},Le=(Me.prototype.getPolicy=function(t){var e=this.policy||{},r=t&&t.resolvePolicy||{};return{when:e.when||r.when||Ne.when,async:e.async||r.async||Ne.async}},Me.prototype.resolve=function(e,r){var n=this,t=D.$q,i=e.findNode(this),o=i&&i.state,a=this.getPolicy(o).async,u=T(a)?a:z;return this.promise=t.when().then(function(){return t.all(e.getDependencies(n).map(function(t){return t.get(e,r)}))}).then(function(t){return n.resolveFn.apply(null,t)}).then(u).then(function(t){return n.data=t,n.resolved=!0,n.resolveFn=null,we.traceResolvableResolved(n,r),n.data})},Me.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},Me.prototype.toString=function(){return"Resolvable(token: "+Qt(this.token)+", requires: ["+this.deps.map(Qt)+"])"},Me.prototype.clone=function(){return new Me(this)},Me.fromData=function(t,e){return new Me(t,function(){return e},null,null,e)},Me);function Me(t,e,r,n,i){if(this.resolved=!1,this.promise=void 0,t instanceof Me)B(this,t);else if(T(e)){if(C(t))throw new Error("new Resolvable(): token argument is required");if(!T(e))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=t,this.policy=n,this.resolveFn=e,this.deps=r||[],this.data=i,this.resolved=void 0!==i,this.promise=this.resolved?D.$q.when(this.data):void 0}else if(O(t)&&t.token&&(t.hasOwnProperty("resolveFn")||t.hasOwnProperty("data"))){var o=t;return new Me(o.token,o.resolveFn,o.deps,o.policy,o.data)}}var Be=Fe.when,Ge=[Be.EAGER,Be.LAZY],ze=[Be.EAGER],We="Native Injector",Je=(Qe.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(wt,[])},Qe.prototype.getResolvable=function(e){return Pt(this._path.map(function(t){return t.resolvables}).reduce(mt,[]).filter(function(t){return t.token===e}))},Qe.prototype.getPolicy=function(t){var e=this.findNode(t);return t.getPolicy(e.state)},Qe.prototype.subContext=function(e){return new Qe(qe.subPath(this._path,function(t){return t.state===e}))},Qe.prototype.addResolvables=function(t,e){var r=ft(this._path,y("state",e)),n=t.map(function(t){return t.token});r.resolvables=r.resolvables.filter(function(t){return-1===n.indexOf(t.token)}).concat(t)},Qe.prototype.resolvePath=function(t,u){var s=this;void 0===t&&(t="LAZY");var c=(K(Ge,t)?t:"LAZY")===Fe.when.EAGER?ze:Ge;function f(e,r){return function(t){return K(e,s.getPolicy(t)[r])}}we.traceResolvePath(this._path,t,u);var e=this._path.reduce(function(t,e){function r(e){return e.get(a,u).then(function(t){return{token:e.token,value:t}})}var n=e.resolvables.filter(f(c,"when")),i=n.filter(f(["NOWAIT"],"async")),o=n.filter(l(f(["NOWAIT"],"async"))),a=s.subContext(e.state);return i.forEach(r),t.concat(o.map(r))},[]);return D.$q.all(e)},Qe.prototype.injector=function(){return this._injector||(this._injector=new Ke(this))},Qe.prototype.findNode=function(e){return ft(this._path,function(t){return K(t.resolvables,e)})},Qe.prototype.getDependencies=function(e){var n=this,r=this.findNode(e),i=(qe.subPath(this._path,function(t){return t===r})||this._path).reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(t){return t!==e});return e.deps.map(function(e){var t=i.filter(function(t){return t.token===e});if(t.length)return Pt(t);var r=n.injector().getNative(e);if(b(r))throw new Error("Could not find Dependency Injection token: "+Qt(e));return new Le(e,function(){return r},[],r)})},Qe);function Qe(t){this._path=t}var Ke=(Ye.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if("NOWAIT"===this.context.getPolicy(e).async)return e.get(this.context);if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+Qt(e.token));return e.data}return this.getNative(t)},Ye.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):D.$q.when(this.native.get(t))},Ye.prototype.getNative=function(t){return this.native&&this.native.get(t)},Ye);function Ye(t){this.context=t,this.native=this.get(We)||D.$injector}function Ze(t){return t.name}function Xe(t){return t.self.$$state=function(){return t},t.self}function tr(t){return t.parent&&t.parent.data&&(t.data=t.self.data=Q(t.parent.data,t.data)),t.data}function er(a,u){return function(t){var e=t.self;if(e&&e.url&&e.name&&e.name.match(/\.\*\*$/)){var r={};kt(e,r),r.url+="{remainder:any}",e=r}var n=t.parent,i=function(t){if(!k(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}}(e.url),o=i?a.compile(i.val,{state:e}):e.url;if(!o)return null;if(!a.isMatcher(o))throw new Error("Invalid url '"+o+"' in state '"+t+"'");return i&&i.root?o:(n&&n.navigable||u()).url.append(o)}}function rr(t){return t.parent?t.parent.path.concat(t):[t]}function nr(t){var e=t.parent?B({},t.parent.includes):{};return e[t.name]=!0,e}function ir(t){function e(t){return t.provide||t.token}var r,n,i=g([[m("resolveFn"),function(t){return new Le(e(t),t.resolveFn,t.deps,t.policy)}],[m("useFactory"),function(t){return new Le(e(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[m("useClass"),function(t){return new Le(e(t),function(){return new t.useClass},[],t.policy)}],[m("useValue"),function(t){return new Le(e(t),function(){return t.useValue},[],t.policy,t.useValue)}],[m("useExisting"),function(t){return new Le(e(t),z,[t.useExisting],t.policy)}]]),o=g([[c(m("val"),k),function(t){return new Le(t.token,z,[t.val],t.policy)}],[c(m("val"),x),function(t){return new Le(t.token,Pt(t.val),t.val.slice(0,-1),t.policy)}],[c(m("val"),T),function(t){return new Le(t.token,t.val,function(t){var e=D.$injector;return t.$inject||e&&e.annotate(t,e.strictDi)||"deferred"}(t.val),t.policy)}]]),a=g([[h(Le),function(t){return t}],[function(t){return!(!t.token||!t.resolveFn)},i],[function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},i],[function(t){return!!(t&&t.val&&(k(t.val)||x(t.val)||T(t.val)))},o],[p(!0),function(t){throw new Error("Invalid resolve value: "+Qt(t))}]]),u=t.resolve;return(x(u)?u:(r=u,n=t.resolvePolicy||{},Object.keys(r||{}).map(function(t){return{token:t,val:r[t],deps:void 0,policy:n[t]}}))).map(a)}var or=(ar.prototype.builder=function(t,e){var r=this.builders,n=r[t]||[];return k(t)&&!E(e)?1<n.length?n:n[0]:k(t)&&T(e)?(r[t]=n,r[t].push(e),function(){return r[t].splice(r[t].indexOf(e,1))&&null}):void 0},ar.prototype.build=function(t){var e=this.matcher,r=this.builders,n=this.parentName(t);if(n&&!e.find(n,void 0,!1))return null;for(var i in r)if(r.hasOwnProperty(i)){var o=r[i].reduce(function(e,r){return function(t){return r(t,e)}},W);t[i]=o(t)}return t},ar.prototype.parentName=function(t){var e=t.name||"",r=e.split(".");if("**"===r.pop()&&r.pop(),r.length){if(t.parent)throw new Error("States that specify the 'parent:' property should not have a '.' in their name ("+e+")");return r.join(".")}return t.parent?k(t.parent)?t.parent:t.parent.name:""},ar.prototype.name=function(t){var e=t.name;if(-1!==e.indexOf(".")||!t.parent)return e;var r=k(t.parent)?t.parent:t.parent.name;return r?r+"."+e:e},ar);function ar(e,t){this.matcher=e;function r(){return e.find("")}function n(t){return""===t.name}var i=this;this.builders={name:[Ze],self:[Xe],parent:[function(t){return n(t)?null:e.find(i.parentName(t))||r()}],data:[tr],url:[er(t,r)],navigable:[function(e){return function(t){return!e(t)&&t.url?t:t.parent?t.parent.navigable:null}}(n)],params:[function(n){return function(r){var t=r.url&&r.url.parameters({inherit:!1})||[],e=pt(lt(ut(r.params||{},t.map(m("id"))),function(t,e){return n.fromConfig(e,null,r.self)}));return t.concat(e).map(function(t){return[t.id,t]}).reduce(Tt,{})}}(t.paramFactory)],views:[],path:[rr],includes:[nr],resolvables:[ir]}}var ur=(sr.create=function(t){t=sr.isStateClass(t)?new t:t;var e=Q(Q(t,sr.prototype));return t.$$state=function(){return e},e.self=t,e.__stateObjectCache={nameGlob:Ht.fromString(e.name)},e},sr.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},sr.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},sr.prototype.root=function(){return this.parent&&this.parent.root()||this},sr.prototype.parameters=function(e){return((e=nt(e,{inherit:!0,matchingKeys:null})).inherit&&this.parent&&this.parent.parameters()||[]).concat(pt(this.params)).filter(function(t){return!e.matchingKeys||e.matchingKeys.hasOwnProperty(t.id)})},sr.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||ft(pt(this.params),y("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},sr.prototype.toString=function(){return this.fqn()},sr.isStateClass=function(t){return T(t)&&!0===t.__uiRouterState},sr.isState=function(t){return O(t.__stateObjectCache)},sr);function sr(t){return sr.create(t||{})}var cr=(fr.prototype.isRelative=function(t){return 0===(t=t||"").indexOf(".")||0===t.indexOf("^")},fr.prototype.find=function(t,e,r){if(void 0===r&&(r=!0),t||""===t){var n=k(t),i=n?t:t.name;this.isRelative(i)&&(i=this.resolvePath(i,e));var o=this._states[i];if(o&&(n||!(n||o!==t&&o.self!==t)))return o;if(n&&r){var a=pt(this._states).filter(function(t){return t.__stateObjectCache.nameGlob&&t.__stateObjectCache.nameGlob.matches(i)});return 1<a.length&&ce.error("stateMatcher.find: Found multiple matches for "+i+" using glob: ",a.map(function(t){return t.name})),a[0]}}},fr.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var r=this.find(e),n=t.split("."),i=n.length,o=0,a=r;o<i;o++)if(""!==n[o]||0!==o){if("^"!==n[o])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+r.name+"'");a=a.parent}else a=r;var u=n.slice(o).join(".");return a.name+(a.name&&u?".":"")+u},fr);function fr(t){this._states=t}var lr=(hr.prototype.dispose=function(){this.queue=[]},hr.prototype.register=function(t){var e=this.queue,r=ur.create(t),n=r.name;if(!k(n))throw new Error("State must have a valid name");if(this.states.hasOwnProperty(n)||K(e.map(m("name")),n))throw new Error("State '"+n+"' is already defined");return e.push(r),this.flush(),r},hr.prototype.flush=function(){for(var e=this,t=this.queue,r=this.states,n=this.builder,i=[],o=[],a={},u=function(t){return e.states.hasOwnProperty(t)&&e.states[t]},s=function(){i.length&&e.listeners.forEach(function(t){return t("registered",i.map(function(t){return t.self}))})};0<t.length;){var c=t.shift(),f=c.name,l=n.build(c),h=o.indexOf(c);if(l){var p=u(f);if(p&&p.name===f)throw new Error("State '"+f+"' is already defined");var v=u(f+".**");v&&this.router.stateRegistry.deregister(v),r[f]=c,this.attachRoute(c),0<=h&&o.splice(h,1),i.push(c)}else{var d=a[f];if(a[f]=t.length,0<=h&&d===t.length)return t.push(c),s(),r;h<0&&o.push(c),t.push(c)}}return s(),r},hr.prototype.attachRoute=function(t){if(!t.abstract&&t.url){var e=this.router.urlService.rules;e.rule(e.urlRuleFactory.create(t))}},hr);function hr(t,e,r,n){this.router=t,this.states=e,this.builder=r,this.listeners=n,this.queue=[]}var pr,vr,dr=(mr.prototype._registerRoot=function(){(this._root=this.stateQueue.register({name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},abstract:!0})).navigable=null},mr.prototype.dispose=function(){var e=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(t){return e.get(t)&&e.deregister(t)})},mr.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){Z(this.listeners)(t)}.bind(this)},mr.prototype.root=function(){return this._root},mr.prototype.register=function(t){return this.stateQueue.register(t)},mr.prototype._deregisterTree=function(t){var r=this,n=this.get().map(function(t){return t.$$state()}),i=function(e){var t=n.filter(function(t){return-1!==e.indexOf(t.parent)});return 0===t.length?t:t.concat(i(t))},e=i([t]),o=[t].concat(e).reverse();return o.forEach(function(t){var e=r.router.urlService.rules;e.rules().filter(y("state",t)).forEach(function(t){return e.removeRule(t)}),delete r.states[t.name]}),o},mr.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var r=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",r.map(function(t){return t.self}))}),r},mr.prototype.get=function(t,e){var r=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return r.states[t].self});var n=this.matcher.find(t,e);return n&&n.self||null},mr.prototype.decorator=function(t,e){return this.builder.builder(t,e)},mr);function mr(t){this.router=t,this.states={},this.listeners=[],this.matcher=new cr(this.states),this.builder=new or(this.matcher,t.urlMatcherFactory),this.stateQueue=new lr(t,this.states,this.builder,this.listeners),this._registerRoot()}(pr=d.TransitionHookPhase||(d.TransitionHookPhase={}))[pr.CREATE=0]="CREATE",pr[pr.BEFORE=1]="BEFORE",pr[pr.RUN=2]="RUN",pr[pr.SUCCESS=3]="SUCCESS",pr[pr.ERROR=4]="ERROR",(vr=d.TransitionHookScope||(d.TransitionHookScope={}))[vr.TRANSITION=0]="TRANSITION",vr[vr.STATE=1]="STATE";var yr={current:W,transition:null,traceData:{},bind:null},gr=(wr.chain=function(t,e){return t.reduce(function(t,e){return t.then(function(){return e.invokeHook()})},e||D.$q.when())},wr.invokeHooks=function(t,e){for(var r=0;r<t.length;r++){var n=t[r].invokeHook();if(A(n)){var i=t.slice(r+1);return wr.chain(i,n).then(e)}}return e()},wr.runAllHooks=function(t){t.forEach(function(t){return t.invokeHook()})},wr.prototype.logError=function(t){this.transition.router.stateService.defaultErrorHandler()(t)},wr.prototype.invokeHook=function(){var e=this,r=this.registeredHook;if(!r._deregistered){var t=this.getNotCurrentRejection();if(t)return t;var n=this.options;we.traceHookInvocation(this,this.transition,n);var i=function(t){return r.eventType.getErrorHandler(e)(t)},o=function(t){return r.eventType.getResultHandler(e)(t)};try{var a=r.callback.call(n.bind,e.transition,e.stateContext);return!this.type.synchronous&&A(a)?a.catch(function(t){return Ft.normalize(t).toPromise()}).then(o,i):o(a)}catch(t){return i(Ft.normalize(t))}finally{r.invokeLimit&&++r.invokeCount>=r.invokeLimit&&r.deregister()}}},wr.prototype.handleHookResult=function(t){var e=this,r=this.getNotCurrentRejection();return r||(A(t)?t.then(function(t){return e.handleHookResult(t)}):(we.traceHookResult(t,this.transition,this.options),!1===t?Ft.aborted("Hook aborted transition").toPromise():h(Ae)(t)?Ft.redirected(t).toPromise():void 0))},wr.prototype.getNotCurrentRejection=function(){var t=this.transition.router;return t._disposed?Ft.aborted("UIRouter instance #"+t.$id+" has been stopped (disposed)").toPromise():this.transition._aborted?Ft.aborted().toPromise():this.isSuperseded()?Ft.superseded(this.options.current()).toPromise():void 0},wr.prototype.toString=function(){var t=this.options,e=this.registeredHook;return(R("traceData.hookType")(t)||"internal")+" context: "+(R("traceData.context.state.name")(t)||R("traceData.context")(t)||"unknown")+", "+Lt(200,zt(e.callback))},wr.HANDLE_RESULT=function(e){return function(t){return e.handleHookResult(t)}},wr.LOG_REJECTED_RESULT=function(e){return function(t){A(t)&&t.catch(function(t){return e.logError(Ft.normalize(t))})}},wr.LOG_ERROR=function(e){return function(t){return e.logError(t)}},wr.REJECT_ERROR=function(t){return function(t){return Vt(t)}},wr.THROW_ERROR=function(t){return function(t){throw t}},wr);function wr(t,e,r,n){var i=this;this.transition=t,this.stateContext=e,this.registeredHook=r,this.options=n,this.isSuperseded=function(){return i.type.hookPhase===d.TransitionHookPhase.RUN&&!i.options.transition.isActive()},this.options=nt(n,yr),this.type=r.eventType}function _r(t,e,r){var i=k(e)?[e]:e;return!!(T(i)?i:function(t){for(var e=i,r=0;r<e.length;r++){var n=new Ht(e[r]);if(n&&n.matches(t.name)||!n&&e[r]===t.name)return!0}return!1})(t,r)}var Sr=(br.prototype._matchingNodes=function(t,e,r){if(!0===e)return t;var n=t.filter(function(t){return _r(t.state,e,r)});return n.length?n:null},br.prototype._getDefaultMatchCriteria=function(){return lt(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},br.prototype._getMatchingNodes=function(o,a){var u=this,s=B(this._getDefaultMatchCriteria(),this.matchCriteria);return pt(this.tranSvc._pluginapi._getPathTypes()).reduce(function(t,e){var r=e.scope===d.TransitionHookScope.STATE,n=o[e.name]||[],i=r?n:[Pt(n)];return t[e.name]=u._matchingNodes(i,s[e.name],a),t},{})},br.prototype.matches=function(t,e){var r=this._getMatchingNodes(t,e);return pt(r).every(z)?r:null},br.prototype.deregister=function(){this.removeHookFromRegistry(this),this._deregistered=!0},br);function br(t,e,r,n,i,o){void 0===o&&(o={}),this.tranSvc=t,this.eventType=e,this.callback=r,this.matchCriteria=n,this.removeHookFromRegistry=i,this.invokeCount=0,this._deregistered=!1,this.priority=o.priority||0,this.bind=o.bind||null,this.invokeLimit=o.invokeLimit}function $r(t,i,o){var a=(t._registeredHooks=t._registeredHooks||{})[o.name]=[],u=Z(a);function e(t,e,r){void 0===r&&(r={});var n=new Sr(i,o,e,t,u,r);return a.push(n),n.deregister.bind(n)}return t[o.name]=e}var Rr=(Er.prototype.buildHooksForPhase=function(t){var e=this;return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t){return e.buildHooks(t)}).reduce(mt,[]).filter(z)},Er.prototype.buildHooks=function(o){var a=this.transition,t=a.treeChanges(),e=this.getMatchingHooks(o,t,a);if(!e)return[];var u={transition:a,current:a.options().current};return e.map(function(i){return i.matches(t,a)[o.criteriaMatchPath.name].map(function(t){var e=B({bind:i.bind,traceData:{hookType:o.name,context:t}},u),r=o.criteriaMatchPath.scope===d.TransitionHookScope.STATE?t.state.self:null,n=new gr(a,r,i,e);return{hook:i,node:t,transitionHook:n}})}).reduce(mt,[]).sort(function(i){return void 0===i&&(i=!1),function(t,e){var r=i?-1:1,n=(t.node.state.path.length-e.node.state.path.length)*r;return 0!=n?n:e.hook.priority-t.hook.priority}}(o.reverseSort)).map(function(t){return t.transitionHook})},Er.prototype.getMatchingHooks=function(e,r,n){var t=e.hookPhase===d.TransitionHookPhase.CREATE,i=this.transition.router.transitionService;return(t?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(bt(x,"broken event named: "+e.name)).reduce(mt,[]).filter(function(t){return t.matches(r,n)})},Er);function Er(t){this.transition=t}var Cr=m("self"),Tr=(Pr.prototype.onBefore=function(t,e,r){},Pr.prototype.onStart=function(t,e,r){},Pr.prototype.onExit=function(t,e,r){},Pr.prototype.onRetain=function(t,e,r){},Pr.prototype.onEnter=function(t,e,r){},Pr.prototype.onFinish=function(t,e,r){},Pr.prototype.onSuccess=function(t,e,r){},Pr.prototype.onError=function(t,e,r){},Pr.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(t){return t.hookPhase!==d.TransitionHookPhase.CREATE}).forEach(function(t){return $r(e,e.router.transitionService,t)})},Pr.prototype.getHooks=function(t){return this._registeredHooks[t]},Pr.prototype.applyViewConfigs=function(t){var e=this._treeChanges.entering.map(function(t){return t.state});qe.applyViewConfigs(t.transitionService.$view,this._treeChanges.to,e)},Pr.prototype.$from=function(){return Pt(this._treeChanges.from).state},Pr.prototype.$to=function(){return Pt(this._treeChanges.to).state},Pr.prototype.from=function(){return this.$from().self},Pr.prototype.to=function(){return this.$to().self},Pr.prototype.targetState=function(){return this._targetState},Pr.prototype.is=function(t){return t instanceof Pr?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!_r(this.$to(),t.to,this)||t.from&&!_r(this.$from(),t.from,this))},Pr.prototype.params=function(t){return void 0===t&&(t="to"),Object.freeze(this._treeChanges[t].map(m("paramValues")).reduce(it,{}))},Pr.prototype.paramsChanged=function(){var t=this.params("from"),r=this.params("to"),e=[].concat(this._treeChanges.to).concat(this._treeChanges.from).map(function(t){return t.paramSchema}).reduce(yt,[]).reduce(wt,[]);return Te.changed(e,t,r).reduce(function(t,e){return t[e.id]=r[e.id],t},{})},Pr.prototype.injector=function(e,t){void 0===t&&(t="to");var r=this._treeChanges[t];return e&&(r=qe.subPath(r,function(t){return t.state===e||t.state.name===e})),new Je(r).injector()},Pr.prototype.getResolveTokens=function(t){return void 0===t&&(t="to"),new Je(this._treeChanges[t]).getTokens()},Pr.prototype.addResolvable=function(t,e){void 0===e&&(e=""),t=h(Le)(t)?t:new Le(t);var r="string"==typeof e?e:e.name,n=this._treeChanges.to,i=ft(n,function(t){return t.state.name===r});new Je(n).addResolvables([t],i.state)},Pr.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},Pr.prototype.originalTransition=function(){var t=this.redirectedFrom();return t&&t.originalTransition()||this},Pr.prototype.options=function(){return this._options},Pr.prototype.entering=function(){return ht(this._treeChanges.entering,m("state")).map(Cr)},Pr.prototype.exiting=function(){return ht(this._treeChanges.exiting,m("state")).map(Cr).reverse()},Pr.prototype.retained=function(){return ht(this._treeChanges.retained,m("state")).map(Cr)},Pr.prototype.views=function(t,e){void 0===t&&(t="entering");var r=this._treeChanges[t];return(r=e?r.filter(y("state",e)):r).map(m("views")).filter(z).reduce(mt,[])},Pr.prototype.treeChanges=function(t){return t?this._treeChanges[t]:this._treeChanges},Pr.prototype.redirect=function(t){for(var e=1,r=this;null!=(r=r.redirectedFrom());)if(20<++e)throw new Error("Too many consecutive Transition redirects (20+)");var n={redirectedFrom:this,source:"redirect"};"url"===this.options().source&&!1!==t.options().location&&(n.location="replace");var i=B({},this.options(),t.options(),n);t=t.withOptions(i,!0);var o,a=this.router.transitionService.create(this._treeChanges.from,t),u=this._treeChanges.entering,s=a._treeChanges.entering;return qe.matching(s,u,qe.nonDynamicParams).filter(l((o=t.options().reloadState,function(t){return o&&t.state.includes[o.name]}))).forEach(function(t,e){t.resolvables=u[e].resolvables}),a},Pr.prototype._changedParams=function(){var t=this._treeChanges;if(!(this._options.reload||t.exiting.length||t.entering.length||t.to.length!==t.from.length||Ct(t.to,t.from).map(function(t){return t[0].state!==t[1].state}).reduce(dt,!1))){var e=t.to.map(function(t){return t.paramSchema}),r=[t.to,t.from].map(function(t){return t.map(function(t){return t.paramValues})});return Ct(e,r[0],r[1]).map(function(t){var e=t[0],r=t[1],n=t[2];return Te.changed(e,r,n)}).reduce(mt,[])}},Pr.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(dt,!1)},Pr.prototype.ignored=function(){return!!this._ignoredReason()},Pr.prototype._ignoredReason=function(){function t(t,e){if(t.length!==e.length)return!1;var r=qe.matching(t,e);return t.length===r.filter(function(t){return!n||!t.state.includes[n.name]}).length}var e=this.router.globals.transition,n=this._options.reloadState,r=this.treeChanges(),i=e&&e.treeChanges();return i&&t(i.to,r.to)&&t(i.exiting,r.exiting)?"SameAsPending":0===r.exiting.length&&0===r.entering.length&&t(r.from,r.to)?"SameAsCurrent":void 0},Pr.prototype.run=function(){function e(t){return r._hookBuilder.buildHooksForPhase(t)}var r=this,n=gr.runAllHooks,t=e(d.TransitionHookPhase.BEFORE);return gr.invokeHooks(t,function(){var t=r.router.globals;return t.lastStartedTransitionId=r.$id,t.transition=r,t.transitionHistory.enqueue(r),we.traceTransitionStart(r),D.$q.when(void 0)}).then(function(){var t=e(d.TransitionHookPhase.RUN);return gr.invokeHooks(t,function(){return D.$q.when(void 0)})}).then(function(){we.traceSuccess(r.$to(),r),r.success=!0,r._deferred.resolve(r.to()),n(e(d.TransitionHookPhase.SUCCESS))},function(t){we.traceError(t,r),r.success=!1,r._deferred.reject(t),r._error=t,n(e(d.TransitionHookPhase.ERROR))}),this.promise},Pr.prototype.valid=function(){return!this.error()||void 0!==this.success},Pr.prototype.abort=function(){b(this.success)&&(this._aborted=!0)},Pr.prototype.error=function(){var t=this.$to();if(t.self.abstract)return Ft.invalid("Cannot transition to abstract state '"+t.name+"'");var e=t.parameters(),r=this.params(),n=e.filter(function(t){return!t.validates(r[t.id])});if(n.length){var i=n.map(function(t){return"["+t.id+":"+Qt(r[t.id])+"]"}).join(", "),o="The following parameter values are not valid for state '"+t.name+"': "+i;return Ft.invalid(o)}return!1===this.success?this._error:void 0},Pr.prototype.toString=function(){function t(t){return null!==t["#"]&&void 0!==t["#"]?t:ut(t,["#"])}var e=this.from(),r=this.to();return"Transition#"+this.$id+"( '"+(O(e)?e.name:e)+"'"+Qt(t(this._treeChanges.from.map(m("paramValues")).reduce(it,{})))+" -> "+(this.valid()?"":"(X) ")+"'"+(O(r)?r.name:r)+"'"+Qt(t(this.params()))+" )"},Pr.diToken=Pr);function Pr(t,e,r){var n=this;if(this._deferred=D.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new Rr(this),this.isActive=function(){return n.router.globals.transition===n},this.router=r,!(this._targetState=e).valid())throw new Error(e.error());this._options=B({current:p(this)},e.options()),this.$id=r.transitionService._transitionCount++;var i=qe.buildToPath(t,e);this._treeChanges=qe.treeChanges(t,i,this._options.reloadState),this.createTransitionHookRegFns();var o=this._hookBuilder.buildHooksForPhase(d.TransitionHookPhase.CREATE);gr.invokeHooks(o,function(){return null}),this.applyViewConfigs(r)}function kr(t,e){var r=["",""],n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;switch(e.squash){case!1:r=["(",")"+(e.isOptional?"?":"")];break;case!0:n=n.replace(/\/$/,""),r=["(?:/(",")|/)?"];break;default:r=["("+e.squash+"|",")?"]}return n+r[0]+e.type.pattern.source+r[1]}var Or=ne("/"),xr={state:{params:{}},strict:!0,caseInsensitive:!0},jr=(Vr.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},Vr.pathSegmentsAndParams=function(t){return Ct(t._segments,t._params.filter(function(t){return t.location===d.DefType.PATH}).concat(void 0)).reduce(mt,[]).filter(function(t){return""!==t&&E(t)})},Vr.queryParams=function(t){return t._params.filter(function(t){return t.location===d.DefType.SEARCH})},Vr.compare=function(t,e){function r(t){return t._cache.weights=t._cache.weights||function(t){return t._cache.segments=t._cache.segments||t._cache.path.map(Vr.pathSegmentsAndParams).reduce(mt,[]).reduce(ie,[]).map(function(t){return k(t)?Or(t):t}).reduce(mt,[])}(t).map(function(t){return"/"===t?1:k(t)?2:t instanceof Te?3:void 0})}var n=r(t),i=r(e);!function(t,e,r){for(var n=Math.max(t.length,e.length);t.length<n;)t.push(r);for(;e.length<n;)e.push(r)}(n,i,0);var o,a,u=Ct(n,i);for(a=0;a<u.length;a++)if(0!=(o=u[a][0]-u[a][1]))return o;return 0},Vr.prototype.append=function(t){return this._children.push(t),t._cache={path:this._cache.path.concat(t),parent:this,pattern:null},t},Vr.prototype.isRoot=function(){return this._cache.path[0]===this},Vr.prototype.toString=function(){return this.pattern},Vr.prototype.exec=function(t,n,e,r){var i=this;void 0===n&&(n={});var o=function(t,e,r){return t[e]=t[e]||r()}(this._cache,"pattern",function(){return new RegExp(["^",_t(i._cache.path.map(m("_compiled"))).join(""),!1===i.config.strict?"/?":"","$"].join(""),i.config.caseInsensitive?"i":void 0)}).exec(t);if(!o)return null;var a=this.parameters(),u=a.filter(function(t){return!t.isSearch()}),s=a.filter(function(t){return t.isSearch()}),c=this._cache.path.map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),f={};if(c!==o.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var l=0;l<c;l++){for(var h=u[l],p=o[l+1],v=0;v<h.replace.length;v++)h.replace[v].from===p&&(p=h.replace[v].to);p&&!0===h.array&&(p=ht(ht(d(p).split(/-(?!\\)/),d),function(t){return t.replace(/\\-/g,"-")}).reverse()),E(p)&&(p=h.type.decode(p)),f[h.id]=h.value(p)}function d(t){return t.split("").reverse().join("")}return s.forEach(function(t){for(var e=n[t.id],r=0;r<t.replace.length;r++)t.replace[r].from===e&&(e=t.replace[r].to);E(e)&&(e=t.type.decode(e)),f[t.id]=t.value(e)}),e&&(f["#"]=e),f},Vr.prototype.parameters=function(t){return void 0===t&&(t={}),!1===t.inherit?this._params:_t(this._cache.path.map(function(t){return t._params}))},Vr.prototype.parameter=function(n,t){var i=this;void 0===t&&(t={});var e=this._cache.parent;return function(){for(var t=0,e=i._params;t<e.length;t++){var r=e[t];if(r.id===n)return r}}()||!1!==t.inherit&&e&&e.parameter(n,t)||null},Vr.prototype.validates=function(e){return e=e||{},this.parameters().filter(function(t){return e.hasOwnProperty(t.id)}).map(function(t){return function(t,e){return!t||t.validates(e)}(t,e[t.id])}).reduce(vt,!0)},Vr.prototype.format=function(a){void 0===a&&(a={});var t=this._cache.path,e=t.map(Vr.pathSegmentsAndParams).reduce(mt,[]).map(function(t){return k(t)?t:n(t)}),r=t.map(Vr.queryParams).reduce(mt,[]).map(n);if(e.concat(r).filter(function(t){return!1===t.isValid}).length)return null;function n(t){var e=t.value(a[t.id]),r=t.validates(e),n=t.isDefaultValue(e),i=!!n&&t.squash,o=t.type.encode(e);return{param:t,value:e,isValid:r,isDefaultValue:n,squash:i,encoded:o}}var i=e.reduce(function(t,e){if(k(e))return t+e;var r=e.squash,n=e.encoded,i=e.param;return!0===r?t.match(/\/$/)?t.slice(0,-1):t:k(r)?t+r:!1!==r?t:null==n?t:x(n)?t+ht(n,Vr.encodeDashes).join("-"):i.raw?t+n:t+encodeURIComponent(n)},""),o=r.map(function(t){var e=t.param,r=t.squash,n=t.encoded,i=t.isDefaultValue;if(!(null==n||i&&!1!==r)&&(x(n)||(n=[n]),0!==n.length))return e.raw||(n=ht(n,encodeURIComponent)),n.map(function(t){return e.id+"="+t})}).filter(z).reduce(mt,[]).join("&");return i+(o?"?"+o:"")+(a["#"]?"#"+a["#"]:"")},Vr.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,Vr);function Vr(o,a,t,e){var u=this;this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.config=e=nt(e,xr),this.pattern=o;for(var r,n,i,s=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f=[],l=0,h=function(t){if(!Vr.nameValidator.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+o+"'");if(ft(u._params,y("id",t)))throw new Error("Duplicate parameter name '"+t+"' in pattern '"+o+"'")},p=function(t,e){var r,n=t[2]||t[3],i=e?t[4]:t[4]||("*"===t[1]?"[\\s\\S]*":null);return{id:n,regexp:i,segment:o.substring(l,t.index),type:i?a.type(i)||(r=i,Q(a.type(e?"query":"path"),{pattern:new RegExp(r,u.config.caseInsensitive?"i":void 0)})):null}};(r=s.exec(o))&&!(0<=(n=p(r,!1)).segment.indexOf("?"));)h(n.id),this._params.push(t.fromPath(n.id,n.type,e.state)),this._segments.push(n.segment),f.push([n.segment,Pt(this._params)]),l=s.lastIndex;var v=(i=o.substring(l)).indexOf("?");if(0<=v){var d=i.substring(v);if(i=i.substring(0,v),0<d.length)for(l=0;r=c.exec(d);)h((n=p(r,!0)).id),this._params.push(t.fromSearch(n.id,n.type,e.state)),l=s.lastIndex}this._segments.push(i),this._compiled=f.map(function(t){return kr.apply(null,t)}).concat(kr(i))}var Hr=function(){return(Hr=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},Ir=(Ar.prototype.fromConfig=function(t,e,r){return new Te(t,e,d.DefType.CONFIG,this.router.urlService.config,r)},Ar.prototype.fromPath=function(t,e,r){return new Te(t,e,d.DefType.PATH,this.router.urlService.config,r)},Ar.prototype.fromSearch=function(t,e,r){return new Te(t,e,d.DefType.SEARCH,this.router.urlService.config,r)},Ar);function Ar(t){this.router=t}var Dr=(qr.prototype.compile=function(t,e){var r=this.router.urlService.config,n=e&&!e.state&&e.params;e=n?Hr({state:{params:n}},e):e;var i={strict:r._isStrictMode,caseInsensitive:r._isCaseInsensitive};return new jr(t,r.paramTypes,this.paramFactory,B(i,e))},qr.prototype.isMatcher=function(r){if(!O(r))return!1;var n=!0;return M(jr.prototype,function(t,e){T(t)&&(n=n&&E(r[e])&&T(r[e]))}),n},qr.prototype.$get=function(){var t=this.router.urlService.config;return t.paramTypes.enqueue=!1,t.paramTypes._flushTypeQueue(),this},qr);function qr(t){var n=this;this.router=t,this.paramFactory=new Ir(this.router),this.caseInsensitive=function(t){return n.router.urlService.config.caseInsensitive(t)},this.defaultSquashPolicy=function(t){return n.router.urlService.config.defaultSquashPolicy(t)},this.strictMode=function(t){return n.router.urlService.config.strictMode(t)},this.type=function(t,e,r){return n.router.urlService.config.type(t,e,r)||n},B(this,{UrlMatcher:jr,Param:Te})}var Ur=(Fr.prototype.compile=function(t){return this.router.urlMatcherFactory.compile(t)},Fr.prototype.create=function(t,e){var r=this,n=ur.isState,i=g([[k,function(t){return i(r.compile(t))}],[h(jr),function(t){return r.fromUrlMatcher(t,e)}],[n,function(t){return r.fromState(t,r.router)}],[h(RegExp),function(t){return r.fromRegExp(t,e)}],[T,function(t){return new Nr(t,e)}]]),o=i(t);if(!o)throw new Error("invalid 'what' in when()");return o},Fr.prototype.fromUrlMatcher=function(r,e){var t=e;k(e)&&(e=this.router.urlMatcherFactory.compile(e)),h(jr)(e)&&(t=function(t){return e.format(t)});var n={urlMatcher:r,matchPriority:function(e){var t=r.parameters().filter(function(t){return t.isOptional});return t.length?t.filter(function(t){return e[t.id]}).length/t.length:1e-6},type:"URLMATCHER"};return B(new Nr(function(t){var e=r.exec(t.path,t.search,t.hash);return r.validates(e)&&e},t),n)},Fr.prototype.fromState=function(n,i){var t={state:n,type:"STATE"};return B(this.fromUrlMatcher(n.url,function(t){var e=i.stateService,r=i.globals;e.href(n,t)!==e.href(r.current,r.params)&&e.transitionTo(n,t,{inherit:!0,source:"url"})}),t)},Fr.prototype.fromRegExp=function(e,t){if(e.global||e.sticky)throw new Error("Rule RegExp must not be global or sticky");var r=k(t)?function(r){return t.replace(/\$(\$|\d{1,2})/,function(t,e){return r["$"===e?0:Number(e)]})}:t,n={regexp:e,type:"REGEXP"};return B(new Nr(function(t){return e.exec(t.path)},r),n)},Fr.isUrlRule=function(e){return e&&["type","match","handler"].every(function(t){return E(e[t])})},Fr);function Fr(t){this.router=t}var Nr=function(t,e){var r=this;this.match=t,this.type="RAW",this.matchPriority=function(t){return 0-r.$id},this.handler=e||z};var Lr=(Mr.prototype.update=function(t){var e=this.router.locationService;t?this.location=e.url():e.url()!==this.location&&e.url(this.location,!0)},Mr.prototype.push=function(t,e,r){var n=r&&!!r.replace;this.router.urlService.url(t.format(e||{}),n)},Mr.prototype.href=function(t,e,r){var n=t.format(e);if(null==n)return null;r=r||{absolute:!1};var i=this.router.urlService.config,o=i.html5Mode();if(o||null===n||(n="#"+i.hashPrefix()+n),n=function(t,e,r,n){return"/"===n?t:e?Yt(n)+t:r?n.slice(1)+t:t}(n,o,r.absolute,i.baseHref()),!r.absolute||!n)return n;var a=!o&&n?"/":"",u=i.port(),s=80===u||443===u?"":":"+u;return[i.protocol(),"://",i.host(),s,a,n].join("")},Object.defineProperty(Mr.prototype,"interceptDeferred",{get:function(){return this.router.urlService.interceptDeferred},enumerable:!0,configurable:!0}),Mr);function Mr(t){var n=this;this.router=t,this.sync=function(t){return n.router.urlService.sync(t)},this.listen=function(t){return n.router.urlService.listen(t)},this.deferIntercept=function(t){return n.router.urlService.deferIntercept(t)},this.match=function(t){return n.router.urlService.match(t)},this.initial=function(t){return n.router.urlService.rules.initial(t)},this.otherwise=function(t){return n.router.urlService.rules.otherwise(t)},this.removeRule=function(t){return n.router.urlService.rules.removeRule(t)},this.rule=function(t){return n.router.urlService.rules.rule(t)},this.rules=function(){return n.router.urlService.rules.rules()},this.sort=function(t){return n.router.urlService.rules.sort(t)},this.when=function(t,e,r){return n.router.urlService.rules.when(t,e,r)},this.urlRuleFactory=new Ur(t)}var Br=(Gr.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var r=e.split("@"),n=r[0]||"$default",i=k(r[1])?r[1]:"^",o=/^(\^(?:\.\^)*)\.(.*$)/.exec(n);return o&&(i=o[1],n=o[2]),"!"===n.charAt(0)&&(n=n.substr(1),i=""),/^(\^(?:\.\^)*)$/.exec(i)?i=i.split(".").reduce(function(t,e){return t.parent},t).name:"."===i&&(i=t.name),{uiViewName:n,uiViewContextAnchor:i}},Gr.prototype._rootViewContext=function(t){return this._rootContext=t||this._rootContext},Gr.prototype._viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},Gr.prototype.createViewConfig=function(t,e){var r=this._viewConfigFactories[e.$type];if(!r)throw new Error("ViewService: No view config factory registered for type "+e.$type);var n=r(t,e);return x(n)?n:[n]},Gr.prototype.deactivateViewConfig=function(t){we.traceViewServiceEvent("<- Removing",t),Z(this._viewConfigs,t)},Gr.prototype.activateViewConfig=function(t){we.traceViewServiceEvent("-> Registering",t),this._viewConfigs.push(t)},Gr.prototype.sync=function(){var r=this,n=this._uiViews.map(function(t){return[t.fqn,t]}).reduce(Tt,{});function i(t){for(var e=t.viewDecl.$context,r=0;++r&&e.parent;)e=e.parent;return r}var o=s(function(t,e,r,n){return e*(t(r)-t(n))}),t=this._uiViews.sort(o(function(t){var e=function(t){return t&&t.parent?e(t.parent)+1:1};return 1e4*t.fqn.split(".").length+e(t.creationContext)},1)).map(function(t){var e=r._viewConfigs.filter(Gr.matches(n,t));return 1<e.length&&e.sort(o(i,-1)),{uiView:t,viewConfig:e[0]}}),e=t.map(function(t){return t.viewConfig}),a=this._viewConfigs.filter(function(t){return!K(e,t)}).map(function(t){return{uiView:void 0,viewConfig:t}});t.forEach(function(t){-1!==r._uiViews.indexOf(t.uiView)&&t.uiView.configUpdated(t.viewConfig)});var u=t.concat(a);this._listeners.forEach(function(t){return t(u)}),we.traceViewSync(u)},Gr.prototype.registerUIView=function(e){we.traceViewServiceUIViewEvent("-> Registering",e);var t=this._uiViews;return t.filter(function(t){return t.fqn===e.fqn&&t.$type===e.$type}).length&&we.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",e),t.push(e),this.sync(),function(){-1!==t.indexOf(e)?(we.traceViewServiceUIViewEvent("<- Deregistering",e),Z(t)(e)):we.traceViewServiceUIViewEvent("Tried removing non-registered uiView",e)}},Gr.prototype.available=function(){return this._uiViews.map(m("fqn"))},Gr.prototype.active=function(){return this._uiViews.filter(m("$config")).map(m("name"))},Gr.matches=function(u,s){return function(t){if(s.$type!==t.viewDecl.$type)return!1;var e=t.viewDecl,r=e.$uiViewName.split("."),n=s.fqn.split(".");if(!G(r,n.slice(0-r.length)))return!1;var i=1-r.length||void 0,o=n.slice(0,i).join("."),a=u[o].creationContext;return e.$uiViewContextAnchor===(a&&a.name)}},Gr);function Gr(t){var r=this;this.router=t,this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._listeners=[],this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIView:function(e){return ft(r._uiViews,function(t){return r.router.$id+"."+t.id===e})},_registeredUIViews:function(){return r._uiViews},_activeViewConfigs:function(){return r._viewConfigs},_onSync:function(t){return r._listeners.push(t),function(){return Z(r._listeners,t)}}}}var zr=(Wr.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},Wr);function Wr(){this.params=new je,this.lastStartedTransitionId=-1,this.transitionHistory=new Dt([],1),this.successfulTransitions=new Dt([],1)}var Jr;function Qr(t){if(!(T(t)||k(t)||h(Ae)(t)||Ae.isDef(t)))throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");return T(t)?t:p(t)}Jr=function(t,e){var r=function(t,e){return(e.priority||0)-(t.priority||0)}(t,e);return 0!==r?r:0!==(r=function(t,e){var r={STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1};return(r[t.type]||0)-(r[e.type]||0)}(t,e))?r:0!==(r=function(t,e){return t.urlMatcher&&e.urlMatcher?jr.compare(t.urlMatcher,e.urlMatcher):0}(t,e))?r:function(t,e){var r={STATE:!0,URLMATCHER:!0};return r[t.type]&&r[e.type]?0:(t.$id||0)-(e.$id||0)}(t,e)};var Kr=(Yr.prototype.dispose=function(t){this._rules=[],delete this._otherwiseFn},Yr.prototype.initial=function(t){var e=Qr(t);this.rule(this.urlRuleFactory.create(function(t,e){return 0===e.globals.transitionHistory.size()&&!!/^\/?$/.exec(t.path)},e))},Yr.prototype.otherwise=function(t){var e=Qr(t);this._otherwiseFn=this.urlRuleFactory.create(p(!0),e),this._sorted=!1},Yr.prototype.removeRule=function(t){Z(this._rules,t)},Yr.prototype.rule=function(t){var e=this;if(!Ur.isUrlRule(t))throw new Error("invalid rule");return t.$id=this._id++,t.priority=t.priority||0,this._rules.push(t),this._sorted=!1,function(){return e.removeRule(t)}},Yr.prototype.rules=function(){return this.ensureSorted(),this._rules.concat(this._otherwiseFn?[this._otherwiseFn]:[])},Yr.prototype.sort=function(t){for(var e=this.stableSort(this._rules,this._sortFn=t||this._sortFn),r=0,n=0;n<e.length;n++)e[n]._group=r,n<e.length-1&&0!==this._sortFn(e[n],e[n+1])&&r++;this._rules=e,this._sorted=!0},Yr.prototype.ensureSorted=function(){this._sorted||this.sort()},Yr.prototype.stableSort=function(t,n){var e=t.map(function(t,e){return{elem:t,idx:e}});return e.sort(function(t,e){var r=n(t.elem,e.elem);return 0===r?t.idx-e.idx:r}),e.map(function(t){return t.elem})},Yr.prototype.when=function(t,e,r){var n=this.urlRuleFactory.create(t,e);return E(r&&r.priority)&&(n.priority=r.priority),this.rule(n),n},Yr);function Yr(t){this.router=t,this._sortFn=Jr,this._rules=[],this._id=0,this.urlRuleFactory=new Ur(t)}var Zr=(Xr.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=E(t)?t:this._isCaseInsensitive},Xr.prototype.defaultSquashPolicy=function(t){if(E(t)&&!0!==t&&!1!==t&&!k(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=E(t)?t:this._defaultSquashPolicy},Xr.prototype.strictMode=function(t){return this._isStrictMode=E(t)?t:this._isStrictMode},Xr.prototype.type=function(t,e,r){var n=this.paramTypes.type(t,e,r);return E(e)?this:n},Xr);function Xr(t){var e=this;this.router=t,this.paramTypes=new ke,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this.dispose=function(){return e.paramTypes.dispose()},this.baseHref=function(){return e.router.locationConfig.baseHref()},this.hashPrefix=function(t){return e.router.locationConfig.hashPrefix(t)},this.host=function(){return e.router.locationConfig.host()},this.html5Mode=function(){return e.router.locationConfig.html5Mode()},this.port=function(){return e.router.locationConfig.port()},this.protocol=function(){return e.router.locationConfig.protocol()}}var tn=(en.prototype.dispose=function(){this.listen(!1),this.rules.dispose()},en.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},en.prototype.sync=function(t){if(!t||!t.defaultPrevented){var e=this.router,r=e.urlService,n=e.stateService,i={path:r.path(),search:r.search(),hash:r.hash()},o=this.match(i);g([[k,function(t){return r.url(t,!0)}],[Ae.isDef,function(t){return n.go(t.state,t.params,t.options)}],[h(Ae),function(t){return n.go(t.state(),t.params(),t.options())}]])(o&&o.rule.handler(o.match,i,this.router))}},en.prototype.listen=function(t){var e=this;if(!1!==t)return this._stopListeningFn=this._stopListeningFn||this.router.urlService.onChange(function(t){return e.sync(t)});this._stopListeningFn&&this._stopListeningFn(),delete this._stopListeningFn},en.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},en.prototype.match=function(t){var e=this;t=B({path:"",search:{},hash:""},t);for(var r,n,i,o=this.rules.rules(),a=0;a<o.length&&(!r||r.rule._group===o[a]._group);a++){var u=(n=o[a],(i=n.match(t,e.router))&&{match:i,rule:n,weight:n.matchPriority(i)});r=!r||u&&u.weight>r.weight?u:r}return r},en);function en(t){var n=this;this.router=t,this.interceptDeferred=!1,this.rules=new Kr(this.router),this.config=new Zr(this.router),this.url=function(t,e,r){return n.router.locationService.url(t,e,r)},this.path=function(){return n.router.locationService.path()},this.search=function(){return n.router.locationService.search()},this.hash=function(){return n.router.locationService.hash()},this.onChange=function(t){return n.router.locationService.onChange(t)}}var rn=0,nn=I("LocationServices",["url","path","search","hash","onChange"]),on=I("LocationConfig",["port","protocol","host","baseHref","html5Mode","hashPrefix"]),an=(un.prototype.disposable=function(t){this._disposables.push(t)},un.prototype.dispose=function(t){var e=this;t&&T(t.dispose)?t.dispose(this):(this._disposed=!0,this._disposables.slice().forEach(function(t){try{"function"==typeof t.dispose&&t.dispose(e),Z(e._disposables,t)}catch(t){}}))},un.prototype.plugin=function(t,e){void 0===e&&(e={});var r=new t(this,e);if(!r.name)throw new Error("Required property `name` missing on plugin: "+r);return this._disposables.push(r),this._plugins[r.name]=r},un.prototype.getPlugin=function(t){return t?this._plugins[t]:pt(this._plugins)},un);function un(t,e){void 0===t&&(t=nn),void 0===e&&(e=on),this.locationService=t,this.locationConfig=e,this.$id=rn++,this._disposed=!1,this._disposables=[],this.trace=we,this.viewService=new Br(this),this.globals=new zr,this.transitionService=new kn(this),this.urlMatcherFactory=new Dr(this),this.urlRouter=new Lr(this),this.urlService=new tn(this),this.stateRegistry=new dr(this),this.stateService=new xn(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlService),this.disposable(t),this.disposable(e)}function sn(e){e.addResolvable(Le.fromData(an,e.router),""),e.addResolvable(Le.fromData(Tr,e),""),e.addResolvable(Le.fromData("$transition$",e),""),e.addResolvable(Le.fromData("$stateParams",e.params()),""),e.entering().forEach(function(t){e.addResolvable(Le.fromData("$state$",t),t)})}function cn(t){function e(t){return ln(t.token)?Le.fromData(t.token,null):t}pt(t.treeChanges()).reduce(mt,[]).reduce(wt,[]).forEach(function(t){t.resolvables=t.resolvables.map(e)})}function fn(e){var t=e.to().redirectTo;if(t){var r=e.router.stateService;return T(t)?D.$q.when(t(e)).then(n):n(t)}function n(t){if(t)return t instanceof Ae?t:k(t)?r.target(t,e.params(),e.options()):t.state||t.params?r.target(t.state||e.to(),t.params||e.params(),e.options()):void 0}}var ln=K(["$transition$",Tr]);function hn(r){return function(t,e){return(0,e.$$state()[r])(t,e)}}function pn(t){return new Je(t.treeChanges().to).resolvePath("EAGER",t).then(W)}function vn(t,e){return new Je(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY",t).then(W)}function dn(t){return new Je(t.treeChanges().to).resolvePath("LAZY",t).then(W)}function mn(t){var e=D.$q,r=t.views("entering");if(r.length)return e.all(r.map(function(t){return e.when(t.load())})).then(W)}function yn(t){var e=t.views("entering"),r=t.views("exiting");if(e.length||r.length){var n=t.router.viewService;r.forEach(function(t){return n.deactivateViewConfig(t)}),e.forEach(function(t){return n.activateViewConfig(t)}),n.sync()}}function gn(t){function e(){r.transition===t&&(r.transition=null)}var r=t.router.globals;t.onSuccess({},function(){r.successfulTransitions.enqueue(t),r.$current=t.$to(),r.current=r.$current.self,kt(t.params(),r.params)},{priority:1e4}),t.promise.then(e,e)}function wn(t){var e=t.options(),r=t.router.stateService,n=t.router.urlRouter;if("url"!==e.source&&e.location&&r.$current.navigable){var i={replace:"replace"===e.location};n.push(r.$current.navigable.url,r.params,i)}n.update(!0)}function _n(a){var u=a.router,t=a.entering().filter(function(t){return!!t.$$state().lazyLoad}).map(function(t){return Rn(a,t)});return D.$q.all(t).then(function(){if("url"!==a.originalTransition().options().source){var t=a.targetState();return u.stateService.target(t.identifier(),t.params(),t.options())}var e=u.urlService,r=e.match(e.parts()),n=r&&r.rule;if(n&&"STATE"===n.type){var i=n.state,o=r.match;return u.stateService.target(i,o,a.options())}u.urlService.sync()})}var Sn=hn("onExit"),bn=hn("onRetain"),$n=hn("onEnter");function Rn(e,r){var n=r.$$state().lazyLoad,t=n._promise;if(!t){t=n._promise=D.$q.when(n(e,r)).then(function(t){t&&Array.isArray(t.states)&&t.states.forEach(function(t){return e.router.stateRegistry.register(t)});return t}).then(function(t){return delete r.lazyLoad,delete r.$$state().lazyLoad,delete n._promise,t},function(t){return delete n._promise,D.$q.reject(t)})}return t}var En=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=gr.HANDLE_RESULT),void 0===a&&(a=gr.REJECT_ERROR),void 0===u&&(u=!1),this.name=t,this.hookPhase=e,this.hookOrder=r,this.criteriaMatchPath=n,this.reverseSort=i,this.getResultHandler=o,this.getErrorHandler=a,this.synchronous=u};function Cn(t){var e=t._ignoredReason();if(e){we.traceTransitionIgnored(t);var r=t.router.globals.transition;return"SameAsCurrent"===e&&r&&r.abort(),Ft.ignored().toPromise()}}function Tn(t){if(!t.valid())throw new Error(t.error().toString())}var Pn={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,supercede:!0,custom:{},current:function(){return null},source:"unknown"},kn=(On.prototype.onCreate=function(t,e,r){},On.prototype.onBefore=function(t,e,r){},On.prototype.onStart=function(t,e,r){},On.prototype.onExit=function(t,e,r){},On.prototype.onRetain=function(t,e,r){},On.prototype.onEnter=function(t,e,r){},On.prototype.onFinish=function(t,e,r){},On.prototype.onSuccess=function(t,e,r){},On.prototype.onError=function(t,e,r){},On.prototype.dispose=function(t){pt(this._registeredHooks).forEach(function(e){return e.forEach(function(t){t._deregistered=!0,Z(e,t)})})},On.prototype.create=function(t,e){return new Tr(t,e,this._router)},On.prototype._defineCoreEvents=function(){var t=d.TransitionHookPhase,e=gr,r=this._criteriaPaths;this._defineEvent("onCreate",t.CREATE,0,r.to,!1,e.LOG_REJECTED_RESULT,e.THROW_ERROR,!0),this._defineEvent("onBefore",t.BEFORE,0,r.to),this._defineEvent("onStart",t.RUN,0,r.to),this._defineEvent("onExit",t.RUN,100,r.exiting,!0),this._defineEvent("onRetain",t.RUN,200,r.retained),this._defineEvent("onEnter",t.RUN,300,r.entering),this._defineEvent("onFinish",t.RUN,400,r.to),this._defineEvent("onSuccess",t.SUCCESS,0,r.to,!1,e.LOG_REJECTED_RESULT,e.LOG_ERROR,!0),this._defineEvent("onError",t.ERROR,0,r.to,!1,e.LOG_REJECTED_RESULT,e.LOG_ERROR,!0)},On.prototype._defineCorePaths=function(){var t=d.TransitionHookScope.STATE,e=d.TransitionHookScope.TRANSITION;this._definePathType("to",e),this._definePathType("from",e),this._definePathType("exiting",t),this._definePathType("retained",t),this._definePathType("entering",t)},On.prototype._defineEvent=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=gr.HANDLE_RESULT),void 0===a&&(a=gr.REJECT_ERROR),void 0===u&&(u=!1);var s=new En(t,e,r,n,i,o,a,u);this._eventTypes.push(s),$r(this,this,s)},On.prototype._getEvents=function(e){return(E(e)?this._eventTypes.filter(function(t){return t.hookPhase===e}):this._eventTypes.slice()).sort(function(t,e){var r=t.hookPhase-e.hookPhase;return 0==r?t.hookOrder-e.hookOrder:r})},On.prototype._definePathType=function(t,e){this._criteriaPaths[t]={name:t,scope:e}},On.prototype._getPathTypes=function(){return this._criteriaPaths},On.prototype.getHooks=function(t){return this._registeredHooks[t]},On.prototype._registerCoreTransitionHooks=function(){var t=this._deregisterHookFns;t.addCoreResolves=function(t){return t.onCreate({},sn)}(this),t.ignored=function(t){return t.onBefore({},Cn,{priority:-9999})}(this),t.invalid=function(t){return t.onBefore({},Tn,{priority:-1e4})}(this),t.redirectTo=function(t){return t.onStart({to:function(t){return!!t.redirectTo}},fn)}(this),t.onExit=function(t){return t.onExit({exiting:function(t){return!!t.onExit}},Sn)}(this),t.onRetain=function(t){return t.onRetain({retained:function(t){return!!t.onRetain}},bn)}(this),t.onEnter=function(t){return t.onEnter({entering:function(t){return!!t.onEnter}},$n)}(this),t.eagerResolve=function(t){return t.onStart({},pn,{priority:1e3})}(this),t.lazyResolve=function(t){return t.onEnter({entering:p(!0)},vn,{priority:1e3})}(this),t.resolveAll=function(t){return t.onFinish({},dn,{priority:1e3})}(this),t.loadViews=function(t){return t.onFinish({},mn)}(this),t.activateViews=function(t){return t.onSuccess({},yn)}(this),t.updateGlobals=function(t){return t.onCreate({},gn)}(this),t.updateUrl=function(t){return t.onSuccess({},wn,{priority:9999})}(this),t.lazyLoad=function(t){return t.onBefore({entering:function(t){return!!t.lazyLoad}},_n)}(this)},On);function On(t){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=t,this.$view=t.viewService,this._deregisterHookFns={},this._pluginapi=J(p(this),{},p(this),["_definePathType","_defineEvent","_getPathTypes","_getEvents","getHooks"]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks(),t.globals.successfulTransitions.onEvict(cn)}var xn=(Object.defineProperty(jn.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(jn.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(jn.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(jn.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),jn.prototype.dispose=function(){this.defaultErrorHandler(W),this.invalidCallbacks=[]},jn.prototype._handleInvalidTargetState=function(t,r){function n(){return e.transitionHistory.peekTail()}var i=this,o=qe.makeTargetState(this.router.stateRegistry,t),e=this.router.globals,a=n(),u=new Dt(this.invalidCallbacks.slice()),s=new Je(t).injector(),c=function(t){if(t instanceof Ae){var e=t;return(e=i.target(e.identifier(),e.params(),e.options())).valid()?n()!==a?Ft.superseded().toPromise():i.transitionTo(e.identifier(),e.params(),e.options()):Ft.invalid(e.error()).toPromise()}};return function e(){var t=u.dequeue();return void 0===t?Ft.invalid(r.error()).toPromise():D.$q.when(t(r,o,s)).then(c).then(function(t){return t||e()})}()},jn.prototype.onInvalid=function(t){return this.invalidCallbacks.push(t),function(){Z(this.invalidCallbacks)(t)}.bind(this)},jn.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!E(t)||t,inherit:!1,notify:!1})},jn.prototype.go=function(t,e,r){var n=nt(r,{relative:this.$current,inherit:!0},Pn);return this.transitionTo(t,e,n)},jn.prototype.target=function(t,e,r){if(void 0===r&&(r={}),O(r.reload)&&!r.reload.name)throw new Error("Invalid reload state object");var n=this.router.stateRegistry;if(r.reloadState=!0===r.reload?n.root():n.matcher.find(r.reload,r.relative),r.reload&&!r.reloadState)throw new Error("No such reload state '"+(k(r.reload)?r.reload:r.reload.name)+"'");return new Ae(this.router.stateRegistry,t,e,r)},jn.prototype.getCurrentPath=function(){var t=this,e=this.router.globals.successfulTransitions.peekTail();return e?e.treeChanges().to:[new He(t.router.stateRegistry.root())]},jn.prototype.transitionTo=function(t,e,r){var o=this;void 0===e&&(e={}),void 0===r&&(r={});var a=this.router,u=a.globals;function n(){return u.transition}r=nt(r,Pn),r=B(r,{current:n});var i=this.target(t,e,r),s=this.getCurrentPath();if(!i.exists())return this._handleInvalidTargetState(s,i);if(!i.valid())return Vt(i.error());if(!1===r.supercede&&n())return Ft.ignored("Another transition is in progress and supercede has been set to false in TransitionOptions for the transition. So the transition was ignored in favour of the existing one in progress.").toPromise();var c=function(i){return function(t){if(t instanceof Ft){var e=a.globals.lastStartedTransitionId<=i.$id;if(t.type===d.RejectType.IGNORED)return e&&a.urlRouter.update(),D.$q.when(u.current);var r=t.detail;if(t.type===d.RejectType.SUPERSEDED&&t.redirected&&r instanceof Ae){var n=i.redirect(r);return n.run().catch(c(n))}if(t.type===d.RejectType.ABORTED)return e&&a.urlRouter.update(),D.$q.reject(t)}return o.defaultErrorHandler()(t),D.$q.reject(t)}},f=this.router.transitionService.create(s,i),l=f.run().catch(c(f));return jt(l),B(l,{transition:f})},jn.prototype.is=function(t,e,r){r=nt(r,{relative:this.$current});var n=this.router.stateRegistry.matcher.find(t,r.relative);if(E(n)){if(this.$current!==n)return!1;if(!e)return!0;var i=n.parameters({inherit:!0,matchingKeys:e});return Te.equals(i,Te.values(i,e),this.params)}},jn.prototype.includes=function(t,e,r){r=nt(r,{relative:this.$current});var n=k(t)&&Ht.fromString(t);if(n){if(!n.matches(this.$current.name))return!1;t=this.$current.name}var i=this.router.stateRegistry.matcher.find(t,r.relative),o=this.$current.includes;if(E(i)){if(!E(o[i.name]))return!1;if(!e)return!0;var a=i.parameters({inherit:!0,matchingKeys:e});return Te.equals(a,Te.values(a,e),this.params)}},jn.prototype.href=function(t,e,r){r=nt(r,{lossy:!0,inherit:!0,absolute:!1,relative:this.$current}),e=e||{};var n=this.router.stateRegistry.matcher.find(t,r.relative);if(!E(n))return null;r.inherit&&(e=this.params.$inherit(e,this.$current,n));var i=n&&r.lossy?n.navigable:n;return i&&void 0!==i.url&&null!==i.url?this.router.urlRouter.href(i.url,e,{absolute:r.absolute}):null},jn.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},jn.prototype.get=function(t,e){var r=this.router.stateRegistry;return 0===arguments.length?r.get():r.get(t,e||this.$current)},jn.prototype.lazyLoad=function(t,e){var r=this.get(t);if(!r||!r.lazyLoad)throw new Error("Can not lazy load "+t);var n=this.getCurrentPath(),i=qe.makeTargetState(this.router.stateRegistry,n);return Rn(e=e||this.router.transitionService.create(n,i),r)},jn);function jn(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof Ft?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var e=Object.keys(jn.prototype).filter(l(K(["current","$current","params","transition"])));J(p(jn.prototype),this,p(this),e)}function Vn(t,e){var r=e[0],n=e[1];return t.hasOwnProperty(r)?x(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n,t}function Hn(t){return t.split("&").filter(z).map(re).reduce(Vn,{})}var In={when:function(r){return new Promise(function(t,e){return t(r)})},reject:function(r){return new Promise(function(t,e){e(r)})},defer:function(){var r={};return r.promise=new Promise(function(t,e){r.resolve=t,r.reject=e}),r},all:function(t){if(x(t))return Promise.all(t);if(O(t)){var e=Object.keys(t).map(function(e){return t[e].then(function(t){return{key:e,val:t}})});return In.all(e).then(function(t){return t.reduce(function(t,e){return t[e.key]=e.val,t},{})})}}},An={},Dn=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,qn=/([^\s,]+)/g,Un={get:function(t){return An[t]},has:function(t){return null!=Un.get(t)},invoke:function(t,e,r){var n=B({},An,r||{}),i=Un.annotate(t),o=bt(function(t){return n.hasOwnProperty(t)},function(t){return"DI can't find injectable: '"+t+"'"}),a=i.filter(o).map(function(t){return n[t]});return T(t)?t.apply(e,a):t.slice(-1)[0].apply(e,a)},annotate:function(t){if(!H(t))throw new Error("Not an injectable function: "+t);if(t&&t.$inject)return t.$inject;if(x(t))return t.slice(0,-1);var e=t.toString().replace(Dn,"");return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(qn)||[]}};function Fn(t){function e(t){return t||""}var r=te(t).map(e),n=r[0],i=r[1],o=ee(n).map(e);return{path:o[0],search:o[1],hash:i,url:t}}function Nn(t){var e=t.path(),r=t.search(),n=t.hash(),i=Object.keys(r).map(function(e){var t=r[e];return(x(t)?t:[t]).map(function(t){return e+"="+t})}).reduce(mt,[]).join("&");return e+(i?"?"+i:"")+(n?"#"+n:"")}function Ln(n,i,o,a){return function(t){var e=t.locationService=new o(t),r=t.locationConfig=new a(t,i);return{name:n,service:e,configuration:r,dispose:function(t){t.dispose(e),t.dispose(r)}}}}var Mn=(Bn.prototype.url=function(e,t){return void 0===t&&(t=!0),E(e)&&e!==this._get()&&(this._set(null,null,e,t),this.fireAfterUpdate&&this._listeners.forEach(function(t){return t({url:e})})),Nn(this)},Bn.prototype.onChange=function(t){var e=this;return this._listeners.push(t),function(){return Z(e._listeners,t)}},Bn.prototype.dispose=function(t){rt(this._listeners)},Bn);function Bn(t,e){var r=this;this.fireAfterUpdate=e,this._listeners=[],this._listener=function(e){return r._listeners.forEach(function(t){return t(e)})},this.hash=function(){return Fn(r._get()).hash},this.path=function(){return Fn(r._get()).path},this.search=function(){return Hn(Fn(r._get()).search)},this._location=U.location,this._history=U.history}var Gn,zn,Wn=((Gn=function(t,e){return(Gn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}Gn(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})(Jn,zn=Mn),Jn.prototype._get=function(){return Zt(this._location.hash)},Jn.prototype._set=function(t,e,r,n){this._location.hash=r},Jn.prototype.dispose=function(t){zn.prototype.dispose.call(this,t),U.removeEventListener("hashchange",this._listener)},Jn);function Jn(t){var e=zn.call(this,t,!1)||this;return U.addEventListener("hashchange",e._listener,!1),e}var Qn,Kn,Yn=((Qn=function(t,e){return(Qn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}Qn(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})(Zn,Kn=Mn),Zn.prototype._get=function(){return this._url},Zn.prototype._set=function(t,e,r,n){this._url=r},Zn);function Zn(t){return Kn.call(this,t,!0)||this}var Xn,ti,ei=((Xn=function(t,e){return(Xn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}Xn(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})(ri,ti=Mn),ri.prototype._getBasePrefix=function(){return Yt(this._config.baseHref())},ri.prototype._get=function(){var t=this._location,e=t.pathname,r=t.hash,n=t.search;n=ee(n)[1],r=te(r)[1];var i=this._getBasePrefix(),o=e===this._config.baseHref(),a=e.substr(0,i.length)===i;return(e=o?"/":a?e.substring(i.length):e)+(n?"?"+n:"")+(r?"#"+r:"")},ri.prototype._set=function(t,e,r,n){var i=this._getBasePrefix(),o=r&&"/"!==r[0]?"/":"",a=""===r||"/"===r?this._config.baseHref():i+o+r;n?this._history.replaceState(t,e,a):this._history.pushState(t,e,a)},ri.prototype.dispose=function(t){ti.prototype.dispose.call(this,t),U.removeEventListener("popstate",this._listener)},ri);function ri(t){var e=ti.call(this,t,!0)||this;return e._config=t.urlService.config,U.addEventListener("popstate",e._listener,!1),e}function ni(){var e=this;this.dispose=W,this._baseHref="",this._port=80,this._protocol="http",this._host="localhost",this._hashPrefix="",this.port=function(){return e._port},this.protocol=function(){return e._protocol},this.host=function(){return e._host},this.baseHref=function(){return e._baseHref},this.html5Mode=function(){return!1},this.hashPrefix=function(t){return E(t)?e._hashPrefix=t:e._hashPrefix}}var ii=(oi.prototype.port=function(){return location.port?Number(location.port):"https"===this.protocol()?443:80},oi.prototype.protocol=function(){return location.protocol.replace(/:/g,"")},oi.prototype.host=function(){return location.hostname},oi.prototype.html5Mode=function(){return this._isHtml5},oi.prototype.hashPrefix=function(t){return E(t)?this._hashPrefix=t:this._hashPrefix},oi.prototype.baseHref=function(t){return E(t)&&(this._baseHref=t),b(this._baseHref)&&(this._baseHref=this.getBaseHref()),this._baseHref},oi.prototype.getBaseHref=function(){var t=document.getElementsByTagName("base")[0];return t&&t.href?t.href.replace(/^([^/:]*:)?\/\/[^/]*/,""):this._isHtml5?"/":location.pathname||"/"},oi.prototype.dispose=function(){},oi);function oi(t,e){void 0===e&&(e=!1),this._isHtml5=e,this._baseHref=void 0,this._hashPrefix=""}function ai(t){return D.$injector=Un,{name:"vanilla.services",$q:D.$q=In,$injector:Un,dispose:function(){return null}}}var ui=Ln("vanilla.hashBangLocation",!1,Wn,ii),si=Ln("vanilla.pushStateLocation",!0,ei,ii),ci=Ln("vanilla.memoryLocation",!1,Yn,ni),fi=(li.prototype.dispose=function(t){},li);function li(){}var hi=Object.freeze({__proto__:null,root:U,fromJson:N,toJson:L,forEach:M,extend:B,equals:G,identity:z,noop:W,createProxyFunctions:J,inherit:Q,inArray:K,_inArray:Y,removeFrom:Z,_removeFrom:X,pushTo:tt,_pushTo:et,deregAll:rt,defaults:nt,mergeR:it,ancestors:ot,pick:at,omit:ut,pluck:st,filter:ct,find:ft,mapObj:lt,map:ht,values:pt,allTrueR:vt,anyTrueR:dt,unnestR:mt,flattenR:yt,pushR:gt,uniqR:wt,unnest:_t,flatten:St,assertPredicate:bt,assertMap:$t,assertFn:Rt,pairs:Et,arrayTuples:Ct,applyPairs:Tt,tail:Pt,copy:kt,_extend:Ot,silenceUncaughtInPromise:jt,silentRejection:Vt,makeStub:I,services:D,Glob:Ht,curry:s,compose:r,pipe:c,prop:m,propEq:y,parse:R,not:l,and:i,or:o,all:u,any:f,is:h,eq:a,val:p,invoke:v,pattern:g,isUndefined:b,isDefined:E,isNull:_,isNullOrUndefined:C,isFunction:T,isNumber:P,isString:k,isObject:O,isArray:x,isDate:j,isRegExp:V,isInjectable:H,isPromise:A,Queue:Dt,maxLength:Lt,padString:Mt,kebobString:Bt,functionToString:Gt,fnToString:zt,stringify:Qt,beforeAfterSubstr:Kt,hostRegex:Xt,stripLastPathElement:Yt,splitHash:te,splitQuery:ee,splitEqual:re,trimHashVal:Zt,splitOnDelim:ne,joinNeighborsR:ie,get Category(){return d.Category},Trace:ye,trace:we,get DefType(){return d.DefType},Param:Te,ParamTypes:ke,StateParams:je,ParamType:_e,PathNode:He,PathUtils:qe,resolvePolicies:Fe,defaultResolvePolicy:Ne,Resolvable:Le,NATIVE_INJECTOR_TOKEN:We,ResolveContext:Je,resolvablesBuilder:ir,StateBuilder:or,StateObject:ur,StateMatcher:cr,StateQueueManager:lr,StateRegistry:dr,StateService:xn,TargetState:Ae,get TransitionHookPhase(){return d.TransitionHookPhase},get TransitionHookScope(){return d.TransitionHookScope},HookBuilder:Rr,matchState:_r,RegisteredHook:Sr,makeEvent:$r,get RejectType(){return d.RejectType},Rejection:Ft,Transition:Tr,TransitionHook:gr,TransitionEventType:En,defaultTransOpts:Pn,TransitionService:kn,UrlRules:Kr,UrlConfig:Zr,UrlMatcher:jr,ParamFactory:Ir,UrlMatcherFactory:Dr,UrlRouter:Lr,UrlRuleFactory:Ur,BaseUrlRule:Nr,UrlService:tn,ViewService:Br,UIRouterGlobals:zr,UIRouter:an,$q:In,$injector:Un,BaseLocationServices:Mn,HashLocationService:Wn,MemoryLocationService:Yn,PushStateLocationService:ei,MemoryLocationConfig:ni,BrowserLocationConfig:ii,keyValsToObjectR:Vn,getParams:Hn,parseUrl:Fn,buildUrl:Nn,locationPluginFactory:Ln,servicesPlugin:ai,hashLocationPlugin:ui,pushStateLocationPlugin:si,memoryLocationPlugin:ci,UIRouterPluginBase:fi});function pi(){var r=null;return function(t,e){return r=r||D.$injector.get("$templateFactory"),[new yi(t,e,r)]}}var vi=function(t,r){return t.reduce(function(t,e){return t||E(r[e])},!1)};function di(n){if(!n.parent)return{};var i=["component","bindings","componentProvider"],o=["templateProvider","templateUrl","template","notify","async"].concat(["controller","controllerProvider","controllerAs","resolveAs"]),t=i.concat(o);if(E(n.views)&&vi(t,n))throw new Error("State '"+n.name+"' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  "+t.filter(function(t){return E(n[t])}).join(", "));var a={},e=n.views||{$default:at(n,t)};return M(e,function(t,e){if(e=e||"$default",k(t)&&(t={component:t}),t=B({},t),vi(i,t)&&vi(o,t))throw new Error("Cannot combine: "+i.join("|")+" with: "+o.join("|")+" in stateview: '"+e+"@"+n.name+"'");t.resolveAs=t.resolveAs||"$resolve",t.$type="ng1",t.$context=n,t.$name=e;var r=Br.normalizeUIViewTarget(t.$context,t.$name);t.$uiViewName=r.uiViewName,t.$uiViewContextAnchor=r.uiViewContextAnchor,a[e]=t}),a}var mi=0,yi=(gi.prototype.load=function(){var e=this,t=D.$q,r=new Je(this.path),n=this.path.reduce(function(t,e){return B(t,e.paramValues)},{}),i={template:t.when(this.factory.fromConfig(this.viewDecl,n,r)),controller:t.when(this.getController(r))};return t.all(i).then(function(t){return we.traceViewServiceEvent("Loaded",e),e.controller=t.controller,B(e,t.template),e})},gi.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!H(e))return this.viewDecl.controller;var r=D.$injector.annotate(e),n=x(e)?Pt(e):e;return new Le("",n,r).get(t)},gi);function gi(t,e,r){var n=this;this.path=t,this.viewDecl=e,this.factory=r,this.$id=mi++,this.loaded=!1,this.getTemplate=function(t,e){return n.component?n.factory.makeComponentTemplate(t,e,n.component,n.viewDecl.bindings):n.template}}var wi=(_i.prototype.useHttpService=function(t){this._useHttp=t},_i.prototype.fromConfig=function(t,e,r){function n(t){return D.$q.when(t).then(function(t){return{template:t}})}function i(t){return D.$q.when(t).then(function(t){return{component:t}})}return E(t.template)?n(this.fromString(t.template,e)):E(t.templateUrl)?n(this.fromUrl(t.templateUrl,e)):E(t.templateProvider)?n(this.fromProvider(t.templateProvider,e,r)):E(t.component)?i(t.component):E(t.componentProvider)?i(this.fromComponentProvider(t.componentProvider,e,r)):n("<ui-view></ui-view>")},_i.prototype.fromString=function(t,e){return T(t)?t(e):t},_i.prototype.fromUrl=function(t,e){return T(t)&&(t=t(e)),null==t?null:this._useHttp?this.$http.get(t,{cache:this.$templateCache,headers:{Accept:"text/html"}}).then(function(t){return t.data}):this.$templateRequest(t)},_i.prototype.fromProvider=function(t,e,r){var n=D.$injector.annotate(t),i=x(t)?Pt(t):t;return new Le("",i,n).get(r)},_i.prototype.fromComponentProvider=function(t,e,r){var n=D.$injector.annotate(t),i=x(t)?Pt(t):t;return new Le("",i,n).get(r)},_i.prototype.makeComponentTemplate=function(s,c,t,f){function l(t){var e=Bt(t);return/^(x|data)-/.exec(e)?"x-"+e:e}f=f||{};var h=3<=$.version.minor?"::":"",e=function(t){var e=D.$injector.get(t+"Directive");if(!e||!e.length)throw new Error("Unable to find component named '"+t+"'");return e.map(Si).reduce(mt,[])}(t).map(function(t){var e=t.name,r=t.type,n=l(e);if(s.attr(n)&&!f[e])return n+"='"+s.attr(n)+"'";var i=f[e]||e;if("@"===r)return n+"='{{"+h+"$resolve."+i+"}}'";if("&"!==r)return n+"='"+h+"$resolve."+i+"'";var o=c.getResolvable(i),a=o&&o.data,u=a&&D.$injector.annotate(a)||[];return n+"='$resolve."+i+(x(a)?"["+(a.length-1)+"]":"")+"("+u.join(",")+")'"}).join(" "),r=l(t);return"<"+r+" "+e+"></"+r+">"},_i);function _i(){var n=this;this._useHttp=$.version.minor<3,this.$get=["$http","$templateCache","$injector",function(t,e,r){return n.$templateRequest=r.has&&r.has("$templateRequest")&&r.get("$templateRequest"),n.$http=t,n.$templateCache=e,n}]}var Si=function(t){return O(t.bindToController)?bi(t.bindToController):bi(t.scope)},bi=function(e){return Object.keys(e||{}).map(function(t){return[t,/^([=<@&])[?]?(.*)/.exec(e[t])]}).filter(function(t){return E(t)&&x(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},$i=(Ri.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},Ri.prototype.state=function(t,e){return O(t)?e=t:e.name=t,this.stateRegistry.register(e),this},Ri.prototype.onInvalid=function(t){return this.stateService.onInvalid(t)},Ri);function Ri(t,e){this.stateRegistry=t,this.stateService=e,J(p(Ri.prototype),this,p(this))}function Ei(r){return function(t,e){var i=t[r],o="onExit"===r?"from":"to";return i?function(t,e){var r=new Je(t.treeChanges(o)).subContext(e.$$state()),n=B(Bi(r),{$state$:e,$transition$:t});return D.$injector.invoke(i,this,n)}:void 0}}var Ci=(Ti.monkeyPatchPathParameterType=function(t){var e=t.urlMatcherFactory.type("path");e.encode=function(t){return null!=t?t.toString().replace(/(~|\/)/g,function(t){return{"~":"~~","/":"~2F"}[t]}):t},e.decode=function(t){return null!=t?t.toString().replace(/(~~|~2F)/g,function(t){return{"~~":"~","~2F":"/"}[t]}):t}},Ti.prototype.dispose=function(){},Ti.prototype.onChange=function(t){var e=this;return this._urlListeners.push(t),function(){return Z(e._urlListeners)(t)}},Ti.prototype.html5Mode=function(){var t=this.$locationProvider.html5Mode();return(t=O(t)?t.enabled:t)&&this.$sniffer.history},Ti.prototype.baseHref=function(){return this._baseHref||(this._baseHref=this.$browser.baseHref()||this.$window.location.pathname)},Ti.prototype.url=function(t,e,r){return void 0===e&&(e=!1),E(t)&&this.$location.url(t),e&&this.$location.replace(),r&&this.$location.state(r),this.$location.url()},Ti.prototype._runtimeServices=function(t,e,r,n,i){var o=this;this.$location=e,this.$sniffer=r,this.$browser=n,this.$window=i,t.$on("$locationChangeSuccess",function(e){return o._urlListeners.forEach(function(t){return t(e)})});var a=p(e);J(a,this,a,["replace","path","search","hash"]),J(a,this,a,["port","protocol","host"])},Ti);function Ti(t){this._urlListeners=[],this.$locationProvider=t;var e=p(t);J(e,this,e,["hashPrefix"])}var Pi=(ki.injectableHandler=function(e,r){return function(t){return D.$injector.invoke(r,null,{$match:t,$stateParams:e.globals.params})}},ki.prototype.$get=function(){var t=this.router.urlService;return this.router.urlRouter.update(!0),t.interceptDeferred||t.listen(),this.router.urlRouter},ki.prototype.rule=function(t){var e=this;if(!T(t))throw new Error("'rule' must be a function");var r=new Nr(function(){return t(D.$injector,e.router.locationService)},z);return this.router.urlService.rules.rule(r),this},ki.prototype.otherwise=function(t){var e=this,r=this.router.urlService.rules;if(k(t))r.otherwise(t);else{if(!T(t))throw new Error("'rule' must be a string or function");r.otherwise(function(){return t(D.$injector,e.router.locationService)})}return this},ki.prototype.when=function(t,e){return(x(e)||T(e))&&(e=ki.injectableHandler(this.router,e)),this.router.urlService.rules.when(t,e),this},ki.prototype.deferIntercept=function(t){this.router.urlService.deferIntercept(t)},ki);function ki(t){this.router=t}$.module("ui.router.angular1",[]);var Oi=$.module("ui.router.init",["ng"]),xi=$.module("ui.router.util",["ui.router.init"]),ji=$.module("ui.router.router",["ui.router.util"]),Vi=$.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),Hi=$.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),Ii=($.module("ui.router.compat",["ui.router"]),null);function Ai(t){(Ii=this.router=new an).stateProvider=new $i(Ii.stateRegistry,Ii.stateService),Ii.stateRegistry.decorator("views",di),Ii.stateRegistry.decorator("onExit",Ei("onExit")),Ii.stateRegistry.decorator("onRetain",Ei("onRetain")),Ii.stateRegistry.decorator("onEnter",Ei("onEnter")),Ii.viewService._pluginapi._viewConfigFactory("ng1",pi());var u=Ii.locationService=Ii.locationConfig=new Ci(t);function e(t,e,r,n,i,o,a){return u._runtimeServices(i,t,n,e,r),delete Ii.router,delete Ii.$get,Ii}return Ci.monkeyPatchPathParameterType(Ii),((Ii.router=Ii).$get=e).$inject=["$location","$browser","$window","$sniffer","$rootScope","$http","$templateCache"],Ii}Ai.$inject=["$locationProvider"];function Di(r){return["$uiRouterProvider",function(t){var e=t.router[r];return e.$get=function(){return e},e}]}function qi(e,t,r){if(D.$injector=e,D.$q=t,!e.hasOwnProperty("strictDi"))try{e.invoke(function(t){})}catch(t){e.strictDi=!!/strict mode/.exec(t&&t.toString())}r.stateRegistry.get().map(function(t){return t.$$state().resolvables}).reduce(mt,[]).filter(function(t){return"deferred"===t.deps}).forEach(function(t){return t.deps=e.annotate(t.resolveFn,e.strictDi)})}qi.$inject=["$injector","$q","$uiRouter"];function Ui(t){t.$watch(function(){we.approximateDigests++})}Ui.$inject=["$rootScope"],Oi.provider("$uiRouter",Ai),ji.provider("$urlRouter",["$uiRouterProvider",function(t){return t.urlRouterProvider=new Pi(t)}]),xi.provider("$urlService",Di("urlService")),xi.provider("$urlMatcherFactory",["$uiRouterProvider",function(){return Ii.urlMatcherFactory}]),xi.provider("$templateFactory",function(){return new wi}),Vi.provider("$stateRegistry",Di("stateRegistry")),Vi.provider("$uiRouterGlobals",Di("globals")),Vi.provider("$transitions",Di("transitionService")),Vi.provider("$state",["$uiRouterProvider",function(){return B(Ii.stateProvider,{$get:function(){return Ii.stateService}})}]),Vi.factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),Hi.factory("$view",function(){return Ii.viewService}),Hi.service("$trace",function(){return we}),Hi.run(Ui),xi.run(["$urlMatcherFactory",function(t){}]),Vi.run(["$state",function(t){}]),ji.run(["$urlRouter",function(t){}]),Oi.run(qi);var Fi,Ni,Li,Mi,Bi=function(r){return r.getTokens().filter(k).map(function(t){var e=r.getResolvable(t);return[t,"NOWAIT"===r.getPolicy(e).async?e.promise:e.data]}).reduce(Tt,{})};function Gi(t){var e,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t="("+r[1]+")"),!(e=t.replace(/\n/g," ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/))||4!==e.length)throw new Error("Invalid state ref '"+t+"'");return{state:e[1]||null,paramExpr:e[3]||null}}function zi(t){var e=t.parent().inheritedData("$uiView"),r=R("$cfg.path")(e);return r?Pt(r).state.name:void 0}function Wi(t,e,r){var n=r.uiState||t.current.name,i=B(function(t,e){return{relative:zi(t)||e.$current,inherit:!0,source:"sref"}}(e,t),r.uiStateOpts||{}),o=t.href(n,r.uiStateParams,i);return{uiState:n,uiStateParams:r.uiStateParams,uiStateOpts:i,href:o}}function Ji(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),r="FORM"===t[0].nodeName;return{attr:r?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!r}}function Qi(o,a,u,s,c){return function(t){var e=t.which||t.button,r=c();if(!(1<e||t.ctrlKey||t.metaKey||t.shiftKey||o.attr("target"))){var n=u(function(){o.attr("disabled")||a.go(r.uiState,r.uiStateParams,r.uiStateOpts)});t.preventDefault();var i=s.isAnchor&&!r.href?1:0;t.preventDefault=function(){i--<=0&&u.cancel(n)}}}}function Ki(i,t,o,e){var a;e&&(a=e.events),x(a)||(a=["click"]);for(var r=i.on?"on":"bind",n=0,u=a;n<u.length;n++){var s=u[n];i[r](s,o)}t.$on("$destroy",function(){for(var t=i.off?"off":"unbind",e=0,r=a;e<r.length;e++){var n=r[e];i[t](n,o)}})}function Yi(n){function t(t,e,r){return n.is(t,e,r)}return t.$stateful=!0,t}function Zi(n){function t(t,e,r){return n.includes(t,e,r)}return t.$stateful=!0,t}function Xi(d,m,y,t,g,e){var w=R("viewDecl.controllerAs"),_=R("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(t){var v=t.html();return t.empty(),function(e,r){var t=r.data("$uiView");if(!t)return r.html(v),void d(r.contents())(e);var n=t.$cfg||{viewDecl:{},getTemplate:W},i=n.path&&new Je(n.path);r.html(n.getTemplate(r,i)||v),we.traceUIViewFill(t.$uiView,r.html());var o=d(r.contents()),a=n.controller,u=w(n),s=_(n),c=i&&Bi(i);if(e[s]=c,a){var f=m(a,B({},c,{$scope:e,$element:r}));u&&(e[u]=f,e[u][s]=c),r.data("$ngControllerController",f),r.children().data("$ngControllerController",f),ro(g,y,f,e,n)}if(k(n.component))var l=Bt(n.component),h=new RegExp("^(x-|data-)?"+l+"$","i"),p=e.$watch(function(){var t=[].slice.call(r[0].children).filter(function(t){return t&&t.tagName&&h.exec(t.tagName)});return t&&$.element(t).data("$"+n.component+"Controller")},function(t){t&&(ro(g,y,t,e,n),p())});o(e)}}}}Fi=["$uiRouter","$timeout",function(h,p){var v=h.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(t,e,r,n){function i(){return Wi(v,e,c)}var o,a=Ji(e),u=n[1]||n[0],s=null,c={},f=Gi(r.uiSref);function l(){var t=i();s&&s(),u&&(s=u.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&r.$set(a.attr,t.href)}c.uiState=f.state,c.uiStateOpts=r.uiSrefOpts?t.$eval(r.uiSrefOpts):{},f.paramExpr&&(t.$watch(f.paramExpr,function(t){c.uiStateParams=B({},t),l()},!0),c.uiStateParams=B({},t.$eval(f.paramExpr))),l(),t.$on("$destroy",h.stateRegistry.onStatesChanged(l)),t.$on("$destroy",h.transitionService.onSuccess({},l)),a.clickable&&(o=Qi(e,v,p,a,i),Ki(e,t,o,c.uiStateOpts))}}}],Ni=["$uiRouter","$timeout",function(p,v){var d=p.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,t,n,e){function i(){return Wi(d,t,c)}var o,a=Ji(t),u=e[1]||e[0],s=null,c={},f=["uiState","uiStateParams","uiStateOpts"],l=f.reduce(function(t,e){return t[e]=W,t},{});function h(){var t=i();s&&s(),u&&(s=u.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&n.$set(a.attr,t.href)}f.forEach(function(e){c[e]=n[e]?r.$eval(n[e]):null,n.$observe(e,function(t){l[e](),l[e]=r.$watch(t,function(t){c[e]=t,h()},!0)})}),h(),r.$on("$destroy",p.stateRegistry.onStatesChanged(h)),r.$on("$destroy",p.transitionService.onSuccess({},h)),a.clickable&&(o=Qi(t,d,v,a,i),Ki(t,r,o,c.uiStateOpts))}}}],Li=["$state","$stateParams","$interpolate","$uiRouter",function(v,t,d,m){return{restrict:"A",controller:["$scope","$element","$attrs",function(u,s,t){var c,n,e,r,i,f=[];c=d(t.uiSrefActiveEq||"",!1)(u);try{n=u.$eval(t.uiSrefActive)}catch(t){}function o(t){t.promise.then(p,W)}function a(){l(n)}function l(t){O(t)&&(f=[],M(t,function(t,e){function r(t,e){var r=Gi(t);h(r.state,u.$eval(r.paramExpr),e)}k(t)?r(t,e):x(t)&&M(t,function(t){r(t,e)})}))}function h(t,e,r){var n={state:v.get(t,zi(s))||{name:t},params:e,activeClass:r};return f.push(n),function(){Z(f)(n)}}function p(){function e(t){return t.split(/\s/).filter(z)}function t(t){return t.map(function(t){return t.activeClass}).map(e).reduce(mt,[])}var r=t(f).concat(e(c)).reduce(wt,[]),n=t(f.filter(function(t){return v.includes(t.state.name,t.params)})),i=!!f.filter(function(t){return v.is(t.state.name,t.params)}).length?e(c):[],o=n.concat(i).reduce(wt,[]),a=r.filter(function(t){return!K(o,t)});u.$evalAsync(function(){o.forEach(function(t){return s.addClass(t)}),a.forEach(function(t){return s.removeClass(t)})})}l(n=n||d(t.uiSrefActive||"",!1)(u)),this.$$addStateInfo=function(t,e){if(!(O(n)&&0<f.length)){var r=h(t,e,n);return p(),r}},u.$on("$destroy",(e=m.stateRegistry.onStatesChanged(a),r=m.transitionService.onStart({},o),i=u.$on("$stateChangeSuccess",p),function(){e(),r(),i()})),m.globals.transition&&o(m.globals.transition),p()}]}}],$.module("ui.router.state").directive("uiSref",Fi).directive("uiSrefActive",Li).directive("uiSrefActiveEq",Li).directive("uiState",Ni),Yi.$inject=["$state"],Zi.$inject=["$state"],$.module("ui.router.state").filter("isState",Yi).filter("includedByState",Zi),Mi=["$view","$animate","$uiViewScroll","$interpolate","$q",function(i,o,g,w,_){var S={$cfg:{viewDecl:{$context:i._pluginapi._rootViewContext()}},$uiView:{}},b={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(t,e,y){return function(a,u,t){var s,c,f,l,e,h=t.onload||"",p=t.autoscroll,v={enter:function(t,e,r){2<$.version.minor?o.enter(t,null,e).then(r):o.enter(t,null,e,r)},leave:function(t,e){2<$.version.minor?o.leave(t).then(e):o.leave(t,e)}},r=u.inheritedData("$uiView")||S,d=w(t.uiView||t.name||"")(a)||"$default",m={$type:"ng1",id:b.count++,name:d,fqn:r.$uiView.fqn?r.$uiView.fqn+"."+d:d,config:null,configUpdated:function(t){if(t&&!(t instanceof yi))return;if(function(t,e){return t===e}(l,t))return;we.traceUIViewConfigUpdated(m,t&&t.viewDecl&&t.viewDecl.$context),n(l=t)},get creationContext(){var t=R("$cfg.viewDecl.$context")(r),e=R("$uiView.creationContext")(r);return t||e}};function n(t){var e=a.$new(),r=_.defer(),n=_.defer(),i={$cfg:t,$uiView:m},o={$animEnter:r.promise,$animLeave:n.promise,$$animLeave:n};e.$emit("$viewContentLoading",d),c=y(e,function(t){t.data("$uiViewAnim",o),t.data("$uiView",i),v.enter(t,u,function(){r.resolve(),f&&f.$emit("$viewContentAnimationEnded"),(E(p)&&!p||a.$eval(p))&&g(t)}),function(){if(s&&(we.traceUIViewEvent("Removing (previous) el",s.data("$uiView")),s.remove(),s=null),f&&(we.traceUIViewEvent("Destroying scope",m),f.$destroy(),f=null),c){var t=c.data("$uiViewAnim");we.traceUIViewEvent("Animate out",t),v.leave(c,function(){t.$$animLeave.resolve(),s=null}),s=c,c=null}}()}),(f=e).$emit("$viewContentLoaded",t||l),f.$eval(h)}we.traceUIViewEvent("Linking",m),u.data("$uiView",{$uiView:m}),n(),e=i.registerUIView(m),a.$on("$destroy",function(){we.traceUIViewEvent("Destroying/Unregistering",m),e()})}}};return b}],Xi.$inject=["$compile","$controller","$transitions","$view","$q","$timeout"];var to="function"==typeof $.module("ui.router").component,eo=0;function ro(n,t,c,e,r){!T(c.$onInit)||(r.viewDecl.component||r.viewDecl.componentProvider)&&to||c.$onInit();var f=Pt(r.path).state.self,i={bind:c};if(T(c.uiOnParamsChanged)){var l=new Je(r.path).getResolvable("$transition$").data;e.$on("$destroy",t.onSuccess({},function(t){if(t!==l&&-1===t.exiting().indexOf(f)){var r=t.params("to"),n=t.params("from"),e=function(t){return t.paramSchema},i=t.treeChanges("to").map(e).reduce(mt,[]),o=t.treeChanges("from").map(e).reduce(mt,[]),a=i.filter(function(t){var e=o.indexOf(t);return-1===e||!o[e].type.equals(r[t.id],n[t.id])});if(a.length){var u=a.map(function(t){return t.id}),s=ct(r,function(t,e){return-1!==u.indexOf(e)});c.uiOnParamsChanged(s,t)}}},i))}if(T(c.uiCanExit)){var o=eo++,a="_uiCanExitIds",u=function(t){return!!t&&(t[a]&&!0===t[a][o]||u(t.redirectedFrom()))},s={exiting:f.name};e.$on("$destroy",t.onBefore(s,function(t){var e,r=t[a]=t[a]||{};return u(t)||(e=n.when(c.uiCanExit(t))).then(function(t){return r[o]=!1!==t}),e},i))}}$.module("ui.router.state").directive("uiView",Mi),$.module("ui.router.state").directive("uiView",Xi),$.module("ui.router.state").provider("$uiViewScroll",function(){var r=!1;this.useAnchorScroll=function(){r=!0},this.$get=["$anchorScroll","$timeout",function(t,e){return r?t:function(t){return e(function(){t[0].scrollIntoView()},0,!1)}}]});d.$injector=Un,d.$q=In,d.BaseLocationServices=Mn,d.BaseUrlRule=Nr,d.BrowserLocationConfig=ii,d.Glob=Ht,d.HashLocationService=Wn,d.HookBuilder=Rr,d.MemoryLocationConfig=ni,d.MemoryLocationService=Yn,d.NATIVE_INJECTOR_TOKEN=We,d.Ng1ViewConfig=yi,d.Param=Te,d.ParamFactory=Ir,d.ParamType=_e,d.ParamTypes=ke,d.PathNode=He,d.PathUtils=qe,d.PushStateLocationService=ei,d.Queue=Dt,d.RegisteredHook=Sr,d.Rejection=Ft,d.Resolvable=Le,d.ResolveContext=Je,d.StateBuilder=or,d.StateMatcher=cr,d.StateObject=ur,d.StateParams=je,d.StateProvider=$i,d.StateQueueManager=lr,d.StateRegistry=dr,d.StateService=xn,d.TargetState=Ae,d.Trace=ye,d.Transition=Tr,d.TransitionEventType=En,d.TransitionHook=gr,d.TransitionService=kn,d.UIRouter=an,d.UIRouterGlobals=zr,d.UIRouterPluginBase=fi,d.UrlConfig=Zr,d.UrlMatcher=jr,d.UrlMatcherFactory=Dr,d.UrlRouter=Lr,d.UrlRouterProvider=Pi,d.UrlRuleFactory=Ur,d.UrlRules=Kr,d.UrlService=tn,d.ViewService=Br,d._extend=Ot,d._inArray=Y,d._pushTo=et,d._removeFrom=X,d.all=u,d.allTrueR=vt,d.ancestors=ot,d.and=i,d.any=f,d.anyTrueR=dt,d.applyPairs=Tt,d.arrayTuples=Ct,d.assertFn=Rt,d.assertMap=$t,d.assertPredicate=bt,d.beforeAfterSubstr=Kt,d.buildUrl=Nn,d.compose=r,d.copy=kt,d.core=hi,d.createProxyFunctions=J,d.curry=s,d.default="ui.router",d.defaultResolvePolicy=Ne,d.defaultTransOpts=Pn,d.defaults=nt,d.deregAll=rt,d.eq=a,d.equals=G,d.extend=B,d.filter=ct,d.find=ft,d.flatten=St,d.flattenR=yt,d.fnToString=zt,d.forEach=M,d.fromJson=N,d.functionToString=Gt,d.getLocals=Bi,d.getNg1ViewConfigFactory=pi,d.getParams=Hn,d.hashLocationPlugin=ui,d.hostRegex=Xt,d.identity=z,d.inArray=K,d.inherit=Q,d.invoke=v,d.is=h,d.isArray=x,d.isDate=j,d.isDefined=E,d.isFunction=T,d.isInjectable=H,d.isNull=_,d.isNullOrUndefined=C,d.isNumber=P,d.isObject=O,d.isPromise=A,d.isRegExp=V,d.isString=k,d.isUndefined=b,d.joinNeighborsR=ie,d.kebobString=Bt,d.keyValsToObjectR=Vn,d.locationPluginFactory=Ln,d.makeEvent=$r,d.makeStub=I,d.map=ht,d.mapObj=lt,d.matchState=_r,d.maxLength=Lt,d.memoryLocationPlugin=ci,d.mergeR=it,d.ng1ViewsBuilder=di,d.noop=W,d.not=l,d.omit=ut,d.or=o,d.padString=Mt,d.pairs=Et,d.parse=R,d.parseUrl=Fn,d.pattern=g,d.pick=at,d.pipe=c,d.pluck=st,d.prop=m,d.propEq=y,d.pushR=gt,d.pushStateLocationPlugin=si,d.pushTo=tt,d.removeFrom=Z,d.resolvablesBuilder=ir,d.resolvePolicies=Fe,d.root=U,d.services=D,d.servicesPlugin=ai,d.silenceUncaughtInPromise=jt,d.silentRejection=Vt,d.splitEqual=re,d.splitHash=te,d.splitOnDelim=ne,d.splitQuery=ee,d.stringify=Qt,d.stripLastPathElement=Yt,d.tail=Pt,d.toJson=L,d.trace=we,d.trimHashVal=Zt,d.uniqR=wt,d.unnest=_t,d.unnestR=mt,d.val=p,d.values=pt,d.watchDigests=Ui,Object.defineProperty(d,"__esModule",{value:!0})});
//# sourceMappingURL=angular-ui-router.min.js.map

/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Y,z){'use strict';function Fa(a,b,c){if(!a)throw Pa("areq",b||"?",c||"required");return a}function Ga(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;Z(a)&&(a=a.join(" "));Z(b)&&(b=b.join(" "));return a+" "+b}function Qa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function $(a,b,c){var d="";a=Z(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];s(a,function(a,k){a&&0<a.length&&(d+=0<k?" ":"",d+=c?b+a:a+b)});return d}function Ha(a){if(a instanceof A)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return A(va(a))}if(1===a.nodeType)return A(a)}function va(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Ra(a,b,c){s(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function aa(a){return function(b,c){c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
N;a.domOperation=function(){a.$$domOperationFired=!0;b();b=N};a.$$prepared=!0}return a}function ha(a,b){Ia(a,b);Ja(a,b)}function Ia(a,b){b.from&&(a.css(b.from),b.from=null)}function Ja(a,b){b.to&&(a.css(b.to),b.to=null)}function T(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),k=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),f,k);c.preparationClasses&&(d.preparationClasses=ba(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==N?d.domOperation:null;wa(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){G(a)&&(a=a.split(" "));var c={};s(a,function(a){a.length&&(c[a]=!0)});return c}var f={};a=d(a);b=d(b);s(b,function(a,c){f[c]=1});c=d(c);s(c,function(a,c){f[c]=1===f[c]?null:-1});var k={addClass:"",removeClass:""};s(f,function(c,b){var d,f;1===c?(d="addClass",
f=!a[b]||a[b+"-remove"]):-1===c&&(d="removeClass",f=a[b]||a[b+"-add"]);f&&(k[d].length&&(k[d]+=" "),k[d]+=b)});return k}function K(a){return a instanceof A?a[0]:a}function Ua(a,b,c,d){a="";c&&(a=$(c,"ng-",!0));d.addClass&&(a=ba(a,$(d.addClass,"-add")));d.removeClass&&(a=ba(a,$(d.removeClass,"-remove")));a.length&&(d.preparationClasses=a,b.addClass(a))}function xa(a,b){var c=b?"paused":"",d=ca+"PlayState";ma(a,[d,c]);return[d,c]}function ma(a,b){a.style[b[0]]=b[1]}function ba(a,b){return a?b?a+" "+
b:a:b}function Ka(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};s(c,function(a,c){var b=f[a];if(b){var L=b.charAt(0);if("-"===L||"+"===L||0<=L)b=Va(b);0===b&&(b=null);d[c]=b}});return d}function Va(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ya(a){return 0===a||null!=a}function La(a,b){var c=M,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Ma(a,b,c){s(c,
function(c){a[c]=za(a[c])?a[c]:b.style.getPropertyValue(c)})}var M,Aa,ca,Ba;void 0===Y.ontransitionend&&void 0!==Y.onwebkittransitionend?(M="WebkitTransition",Aa="webkitTransitionEnd transitionend"):(M="transition",Aa="transitionend");void 0===Y.onanimationend&&void 0!==Y.onwebkitanimationend?(ca="WebkitAnimation",Ba="webkitAnimationEnd animationend"):(ca="animation",Ba="animationend");var qa=ca+"Delay",Ca=ca+"Duration",na=M+"Delay",Na=M+"Duration",Pa=z.$$minErr("ng"),ra={blockTransitions:function(a,
b){var c=b?"-"+b+"s":"";ma(a,[na,c]);return[na,c]}},Wa={transitionDuration:Na,transitionDelay:na,transitionProperty:M+"Property",animationDuration:Ca,animationDelay:qa,animationIterationCount:ca+"IterationCount"},Xa={transitionDuration:Na,transitionDelay:na,animationDuration:Ca,animationDelay:qa},Da,wa,s,Z,za,sa,Ea,ta,G,R,A,N;z.module("ngAnimate",[],function(){N=z.noop;Da=z.copy;wa=z.extend;A=z.element;s=z.forEach;Z=z.isArray;G=z.isString;ta=z.isObject;R=z.isUndefined;za=z.isDefined;Ea=z.isFunction;
sa=z.isElement}).info({angularVersion:"1.7.9"}).directive("ngAnimateSwap",["$animate",function(a){return{restrict:"A",transclude:"element",terminal:!0,priority:550,link:function(b,c,d,f,k){var e,Q;b.$watchCollection(d.ngAnimateSwap||d["for"],function(b){e&&a.leave(e);Q&&(Q.$destroy(),Q=null);(b||0===b)&&k(function(b,d){e=b;Q=d;a.enter(b,null,c)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===
a)}var k=d.ngAnimateChildren;G(k)&&0===k.length?c.data("$$ngAnimateChildren",!0):(f(a(k)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),e=0;e<b.length;e++)b[e]();f||a(function(){f||c()})}}var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){return{addClass:a.addClass,
removeClass:a.removeClass,from:a.from,to:a.to}}function c(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function d(a,b){if(a&&b){var d=c(b);return a.split(" ").some(function(a){return d[a]})}}function f(a,b,c){return e[a].some(function(a){return a(b,c)})}function k(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&k(a)});
e.skip.push(function(a,b){return!a.structural&&!k(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;var c=a.addClass,f=a.removeClass,k=b.addClass,e=b.removeClass;return R(c)&&R(f)||R(k)&&R(e)?!1:d(c,e)||d(f,k)});this.$get=["$$rAF",
"$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(c,d,e,C,U,oa,H,u,t,I,da){function ia(a){O.delete(a.target)}function v(){var a=!1;return function(b){a?b():d.$$postDigest(function(){a=!0;b()})}}function ua(a,b,c){var g=[],l=m[c];l&&s(l,function(l){Oa.call(l.node,b)?g.push(l.callback):"leave"===c&&Oa.call(l.node,a)&&g.push(l.callback)});return g}function h(a,b,c){var l=va(b);return a.filter(function(a){return!(a.node===
l&&(!c||a.callback===c))})}function q(a,J,w){function e(a,b,l,g){u(function(){var a=ua(ia,m,b);a.length?c(function(){s(a,function(a){a(h,l,g)});"close"!==l||m.parentNode||D.off(m)}):"close"!==l||m.parentNode||D.off(m)});a.progress(b,l,g)}function I(a){var b=h,c=n;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),c.activeClasses=null);W(h,n);ha(h,n);n.domOperation();q.complete(!a)}var n=Da(w),h=Ha(a),m=K(h),ia=m&&
m.parentNode,n=pa(n),q=new H,u=v();Z(n.addClass)&&(n.addClass=n.addClass.join(" "));n.addClass&&!G(n.addClass)&&(n.addClass=null);Z(n.removeClass)&&(n.removeClass=n.removeClass.join(" "));n.removeClass&&!G(n.removeClass)&&(n.removeClass=null);n.from&&!ta(n.from)&&(n.from=null);n.to&&!ta(n.to)&&(n.to=null);if(!(B&&m&&fa(m,J,w)&&Ya(m,n)))return I(),q;var x=0<=["enter","move","leave"].indexOf(J),r=da(),P=r||O.get(m);w=!P&&y.get(m)||{};var p=!!w.state;P||p&&1===w.state||(P=!E(m,ia,J));if(P)return r&&
e(q,J,"start",b(n)),I(),r&&e(q,J,"close",b(n)),q;x&&F(m);r={structural:x,element:h,event:J,addClass:n.addClass,removeClass:n.removeClass,close:I,options:n,runner:q};if(p){if(f("skip",r,w)){if(2===w.state)return I(),q;T(h,w,r);return w.runner}if(f("cancel",r,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return T(h,w,r),w.runner;else if(f("join",r,w))if(2===w.state)T(h,r,{});else return Ua(t,h,x?J:null,n),J=r.event=w.event,n=T(h,w,r),w.runner}else T(h,r,{});(p=r.structural)||
(p="animate"===r.event&&0<Object.keys(r.options.to||{}).length||k(r));if(!p)return I(),g(m),q;var C=(w.counter||0)+1;r.counter=C;l(m,1,r);d.$$postDigest(function(){h=Ha(a);var c=y.get(m),d=!c,c=c||{},t=0<(h.parent()||[]).length&&("animate"===c.event||c.structural||k(c));if(d||c.counter!==C||!t){d&&(W(h,n),ha(h,n));if(d||x&&c.event!==J)n.domOperation(),q.end();t||g(m)}else J=!c.structural&&k(c,!0)?"setClass":c.event,l(m,2),c=oa(h,J,c.options),q.setHost(c),e(q,J,"start",b(n)),c.done(function(a){I(!a);
(a=y.get(m))&&a.counter===C&&g(m);e(q,J,"close",b(n))})});return q}function F(a){a=a.querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=y.get(a);if(c)switch(b){case 2:c.runner.end();case 1:y.delete(a)}})}function g(a){a.removeAttribute("data-ng-animate");y.delete(a)}function E(a,b,c){c=C[0].body;var l=K(e),g=a===c||"HTML"===a.nodeName,d=a===l,t=!1,m=O.get(a),h;for((a=A.data(a,"$ngAnimatePin"))&&(b=K(a));b;){d||(d=b===l);if(1!==b.nodeType)break;
a=y.get(b)||{};if(!t){var f=O.get(b);if(!0===f&&!1!==m){m=!0;break}else!1===f&&(m=!1);t=a.structural}if(R(h)||!0===h)a=A.data(b,"$$ngAnimateChildren"),za(a)&&(h=a);if(t&&!1===h)break;g||(g=b===c);if(g&&d)break;if(!d&&(a=A.data(b,"$ngAnimatePin"))){b=K(a);continue}b=b.parentNode}return(!t||h)&&!0!==m&&d&&g}function l(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);c=(b=y.get(a))?wa(b,c):c;y.set(a,c)}var y=new U,O=new U,B=null,P=d.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&
(P(),d.$$postDigest(function(){d.$$postDigest(function(){null===B&&(B=!0)})}))}),m=Object.create(null);U=a.customFilter();var la=a.classNameFilter();I=function(){return!0};var fa=U||I,Ya=la?function(a,b){var c=[a.getAttribute("class"),b.addClass,b.removeClass].join(" ");return la.test(c)}:I,W=aa(t),Oa=Y.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},D={on:function(a,b,c){var l=va(b);m[a]=m[a]||[];m[a].push({node:l,callback:c});A(b).on("$destroy",function(){y.get(l)||
D.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var l=m[a];l&&(m[a]=1===arguments.length?null:h(l,b,c))}else for(l in b=arguments[0],m)m[l]=h(m[l],b)},pin:function(a,b){Fa(sa(a),"element","not an element");Fa(sa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,l){c=c||{};c.domOperation=l;return q(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!B;else if(sa(a)){var l=K(a);if(1===c)b=!O.get(l);else{if(!O.has(l))A(a).on("$destroy",
ia);O.set(l,!b)}}else b=B=!!a;return b}};return D}]}]).provider("$$animateCache",function(){var a=0,b=Object.create(null);this.$get=[function(){return{cacheKey:function(b,d,f,k){var e=b.parentNode;b=[e.$$ngAnimateParentKey||(e.$$ngAnimateParentKey=++a),d,b.getAttribute("class")];f&&b.push(f);k&&b.push(k);return b.join(" ")},containsCachedAnimationWithoutDuration:function(a){return(a=b[a])&&!a.isValid||!1},flush:function(){b=Object.create(null)},count:function(a){return(a=b[a])?a.total:0},get:function(a){return(a=
b[a])&&a.value},put:function(a,d,f){b[a]?(b[a].total++,b[a].value=d):b[a]={total:1,value:d,isValid:f}}}}]}).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler","$$animateCache",function(a,d,f,k,e,Q,L){function x(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;f.set(d,a);for(var h;t;){if(h=f.get(t)){h.processed||(h=b(h));break}t=t.parentNode}(h||
c).children.push(a);return a}var c={children:[]},d,f=new e;for(d=0;d<a.length;d++){var da=a[d];f.set(da.domNode,a[d]={domNode:da.domNode,element:da.element,fn:da.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var t=0,f=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=t,t=0,b.push(f),f=[]);f.push(g);g.children.forEach(function(a){t++;c.push(a)});a--}f.length&&b.push(f);return b}(c)}var C=[],U=aa(a);return function(e,
H,u){function t(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function I(a){var b=[],c={};s(a,function(a,d){var l=K(a.element),g=0<=["enter","move"].indexOf(a.event),l=a.structural?t(l):[];if(l.length){var f=g?"to":"from";s(l,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:d,element:A(a)}})}else b.push(a)});var d={},g={};s(c,function(c,
t){var f=c.from,e=c.to;if(f&&e){var h=a[f.animationID],k=a[e.animationID],E=f.animationID.toString();if(!g[E]){var I=g[E]={structural:!0,beforeStart:function(){h.beforeStart();k.beforeStart()},close:function(){h.close();k.close()},classes:da(h.classes,k.classes),from:h,to:k,anchors:[]};I.classes.length?b.push(I):(b.push(h),b.push(k))}g[E].anchors.push({out:f.element,"in":e.element})}else f=f?f.animationID:e.animationID,e=f.toString(),d[e]||(d[e]=!0,b.push(a[f]))});return b}function da(a,b){a=a.split(" ");
b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var g=a[d];if("ng-"!==g.substring(0,3))for(var t=0;t<b.length;t++)if(g===b[t]){c.push(g);break}}return c.join(" ")}function ia(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function v(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function ua(){var a=e.data("$$animationRunner");!a||"leave"===H&&u.$$domOperationFired||a.end()}function h(b){e.off("$destroy",
ua);e.removeData("$$animationRunner");U(e,u);ha(e,u);u.domOperation();E&&a.removeClass(e,E);F.complete(!b)}u=pa(u);var q=0<=["enter","move","leave"].indexOf(H),F=new k({end:function(){h()},cancel:function(){h(!0)}});if(!b.length)return h(),F;var g=Ga(e.attr("class"),Ga(u.addClass,u.removeClass)),E=u.tempClasses;E&&(g+=" "+E,u.tempClasses=null);q&&e.data("$$animatePrepareClasses","ng-"+H+"-prepare");e.data("$$animationRunner",F);C.push({element:e,classes:g,event:H,structural:q,options:u,beforeStart:function(){E=
(E?E+" ":"")+"ng-animate";a.addClass(e,E);var b=e.data("$$animatePrepareClasses");b&&a.removeClass(e,b)},close:h});e.on("$destroy",ua);if(1<C.length)return F;d.$$postDigest(function(){var b=[];s(C,function(a){a.element.data("$$animationRunner")?b.push(a):a.close()});C.length=0;var d=I(b),g=[];s(d,function(a){var b=a.from?a.from.element:a.element,c=u.addClass,d=L.cacheKey(b[0],a.event,(c?c+" ":"")+"ng-animate",u.removeClass);g.push({element:b,domNode:K(b),fn:function(){var b,c=a.close;if(L.containsCachedAnimationWithoutDuration(d))c();
else{a.beforeStart();if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var g=ia(a);g&&(b=g.start)}b?(b=b(),b.done(function(a){c(!a)}),v(a,b)):c()}}})});for(var d=x(g),t=0;t<d.length;t++)for(var f=d[t],e=0;e<f.length;e++){var h=f[e],k=h.element;d[t][e]=h.fn;0===t?k.removeData("$$animatePrepareClasses"):(h=k.data("$$animatePrepareClasses"))&&a.addClass(k,h)}Q(d)});return F}}]}]).provider("$animateCss",["$animateProvider",function(a){this.$get=["$window","$$jqLite","$$AnimateRunner",
"$timeout","$$animateCache","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,c,d,f,k,e,Q,L,x){function C(d,f,e,x){var v,s="stagger-"+e;0<k.count(e)&&(v=k.get(s),v||(f=$(f,"-stagger"),c.addClass(d,f),v=Ka(a,d,x),v.animationDuration=Math.max(v.animationDuration,0),v.transitionDuration=Math.max(v.transitionDuration,0),c.removeClass(d,f),k.put(s,v,!0)));return v||{}}function U(a){u.push(a);L.waitUntilQuiet(function(){k.flush();for(var a=e(),b=0;b<u.length;b++)u[b](a);u.length=0})}
function z(c,d,f,e){d=k.get(f);d||(d=Ka(a,c,Wa),"infinite"===d.animationIterationCount&&(d.animationIterationCount=1));k.put(f,d,e||0<d.transitionDuration||0<d.animationDuration);c=d;f=c.animationDelay;e=c.transitionDelay;c.maxDelay=f&&e?Math.max(f,e):f||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var H=aa(c),u=[];return function(a,b){function e(){v()}function L(){v(!0)}function v(b){if(!(P||la&&m)){P=!0;m=!1;V&&!g.$$skipPreparationClasses&&
c.removeClass(a,V);ba&&c.removeClass(a,ba);xa(l,!1);ra.blockTransitions(l,!1);s(y,function(a){l.style[a[0]]=""});H(a,g);ha(a,g);Object.keys(E).length&&s(E,function(a,b){a?l.style.setProperty(b,a):l.style.removeProperty(b)});if(g.onDone)g.onDone();w&&w.length&&a.off(w.join(" "),q);var d=a.data("$$animateCss");d&&(f.cancel(d[0].timer),a.removeData("$$animateCss"));fa&&fa.complete(!b)}}function u(a){p.blockTransition&&ra.blockTransitions(l,a);p.blockKeyframeAnimation&&xa(l,!!a)}function h(){fa=new d({end:e,
cancel:L});U(N);v();return{$$willAnimate:!1,start:function(){return fa},end:e}}function q(a){a.stopPropagation();var b=a.originalEvent||a;b.target===l&&(a=b.$manualTimeStamp||Date.now(),b=parseFloat(b.elapsedTime.toFixed(3)),Math.max(a-J,0)>=G&&b>=D&&(la=!0,v()))}function F(){function b(){if(!P){u(!1);s(y,function(a){l.style[a[0]]=a[1]});H(a,g);c.addClass(a,ba);if(p.recalculateTimingStyles){T=l.getAttribute("class")+" "+V;ka=k.cacheKey(l,ja,g.addClass,g.removeClass);r=z(l,T,ka,!1);ga=r.maxDelay;W=
Math.max(ga,0);D=r.maxDuration;if(0===D){v();return}p.hasTransitions=0<r.transitionDuration;p.hasAnimations=0<r.animationDuration}p.applyAnimationDelay&&(ga="boolean"!==typeof g.delay&&ya(g.delay)?parseFloat(g.delay):ga,W=Math.max(ga,0),r.animationDelay=ga,ea=[qa,ga+"s"],y.push(ea),l.style[ea[0]]=ea[1]);G=1E3*W;R=1E3*D;if(g.easing){var e,h=g.easing;p.hasTransitions&&(e=M+"TimingFunction",y.push([e,h]),l.style[e]=h);p.hasAnimations&&(e=ca+"TimingFunction",y.push([e,h]),l.style[e]=h)}r.transitionDuration&&
w.push(Aa);r.animationDuration&&w.push(Ba);J=Date.now();var m=G+1.5*R;e=J+m;var h=a.data("$$animateCss")||[],F=!0;if(h.length){var n=h[0];(F=e>n.expectedEndTime)?f.cancel(n.timer):h.push(v)}F&&(m=f(d,m,!1),h[0]={timer:m,expectedEndTime:e},h.push(v),a.data("$$animateCss",h));if(w.length)a.on(w.join(" "),q);g.to&&(g.cleanupStyles&&Ma(E,l,Object.keys(g.to)),Ja(a,g))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}if(!P)if(l.parentNode){var e=
function(a){if(la)m&&a&&(m=!1,v());else if(m=!a,r.animationDuration)if(a=xa(l,m),m)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},h=0<aa&&(r.transitionDuration&&0===X.transitionDuration||r.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);h?f(b,Math.floor(h*aa*1E3),!1):b();A.resume=function(){e(!0)};A.pause=function(){e(!1)}}else v()}var g=b||{};g.$$prepared||(g=pa(Da(g)));var E={},l=K(a);if(!l||!l.parentNode||!x.enabled())return h();var y=[],O=
a.attr("class"),B=Qa(g),P,m,la,fa,A,W,G,D,R,J,w=[];if(0===g.duration||!Q.animations&&!Q.transitions)return h();var ja=g.event&&Z(g.event)?g.event.join(" "):g.event,Y=ja&&g.structural,n="",S="";Y?n=$(ja,"ng-",!0):ja&&(n=ja);g.addClass&&(S+=$(g.addClass,"-add"));g.removeClass&&(S.length&&(S+=" "),S+=$(g.removeClass,"-remove"));g.applyClassesEarly&&S.length&&H(a,g);var V=[n,S].join(" ").trim(),T=O+" "+V,O=B.to&&0<Object.keys(B.to).length;if(!(0<(g.keyframeStyle||"").length||O||V))return h();var X,ka=
k.cacheKey(l,ja,g.addClass,g.removeClass);if(k.containsCachedAnimationWithoutDuration(ka))return V=null,h();0<g.stagger?(B=parseFloat(g.stagger),X={transitionDelay:B,animationDelay:B,transitionDuration:0,animationDuration:0}):X=C(l,V,ka,Xa);g.$$skipPreparationClasses||c.addClass(a,V);g.transitionStyle&&(B=[M,g.transitionStyle],ma(l,B),y.push(B));0<=g.duration&&(B=0<l.style[M].length,B=La(g.duration,B),ma(l,B),y.push(B));g.keyframeStyle&&(B=[ca,g.keyframeStyle],ma(l,B),y.push(B));var aa=X?0<=g.staggerIndex?
g.staggerIndex:k.count(ka):0;(n=0===aa)&&!g.skipBlocking&&ra.blockTransitions(l,9999);var r=z(l,T,ka,!Y),ga=r.maxDelay;W=Math.max(ga,0);D=r.maxDuration;var p={};p.hasTransitions=0<r.transitionDuration;p.hasAnimations=0<r.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"===r.transitionProperty;p.applyTransitionDuration=O&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=g.duration&&p.hasAnimations;p.applyTransitionDelay=ya(g.delay)&&(p.applyTransitionDuration||
p.hasTransitions);p.applyAnimationDelay=ya(g.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<S.length;if(p.applyTransitionDuration||p.applyAnimationDuration)D=g.duration?parseFloat(g.duration):D,p.applyTransitionDuration&&(p.hasTransitions=!0,r.transitionDuration=D,B=0<l.style[M+"Property"].length,y.push(La(D,B))),p.applyAnimationDuration&&(p.hasAnimations=!0,r.animationDuration=D,y.push([Ca,D+"s"]));if(0===D&&!p.recalculateTimingStyles)return h();var ba=$(V,"-active");if(null!=g.delay){var ea;
"boolean"!==typeof g.delay&&(ea=parseFloat(g.delay),W=Math.max(ea,0));p.applyTransitionDelay&&y.push([na,ea+"s"]);p.applyAnimationDelay&&y.push([qa,ea+"s"])}null==g.duration&&0<r.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||n);G=1E3*W;R=1E3*D;g.skipBlocking||(p.blockTransition=0<r.transitionDuration,p.blockKeyframeAnimation=0<r.animationDuration&&0<X.animationDelay&&0===X.animationDuration);g.from&&(g.cleanupStyles&&Ma(E,l,Object.keys(g.from)),Ia(a,g));p.blockTransition||
p.blockKeyframeAnimation?u(D):g.skipBlocking||ra.blockTransitions(l,!1);return{$$willAnimate:!0,end:e,start:function(){if(!P)return A={end:e,cancel:L,resume:null,pause:null},fa=new d(A),U(F),fa}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,k,e,Q){function L(a){return a.replace(/\bng-\S+\b/g,"")}function x(a,b){G(a)&&
(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function C(c,e,f){function k(a){var b={},c=K(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=H.scrollTop;break;case "left":d+=H.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function v(){var c=L(f.attr("class")||""),d=x(c,q),c=x(q,c),d=a(h,{to:k(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?
d:null}function C(){h.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim")}var h=A(K(e).cloneNode(!0)),q=L(h.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");h.addClass("ng-anchor");u.append(h);var F;c=function(){var c=a(h,{addClass:"ng-anchor-out",delay:!0,from:k(e)});return c.$$willAnimate?c:null}();if(!c&&(F=v(),!F))return C();var g=c||F;return{start:function(){function a(){c&&c.end()}var b,c=g.start();c.done(function(){c=null;if(!F&&(F=v()))return c=
F.start(),c.done(function(){c=null;C();b.complete()}),c;C();b.complete()});return b=new d({end:a,cancel:a})}}}function z(a,b,c,e){var f=oa(a,N),k=oa(b,N),h=[];s(e,function(a){(a=C(c,a.out,a["in"]))&&h.push(a)});if(f||k||0!==h.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];f&&b.push(f.start());k&&b.push(k.start());s(h,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function oa(c){var d=c.element,e=c.options||
{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=ba(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!k.animations&&!k.transitions)return N;var H=Q[0].body;c=K(f);var u=A(c.parentNode&&11===c.parentNode.nodeType||H.contains(c)?c:H);return function(a){return a.from&&a.to?z(a.from,a.to,a.classes,a.anchors):oa(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=
["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=Z(c)?c:c.split(" ");for(var d=[],f={},k=0;k<c.length;k++){var s=c[k],z=a.$$registeredAnimations[s];z&&!f[s]&&(d.push(b.get(z)),f[s]=!0)}return d}var k=aa(d);return function(a,b,d,x){function C(){x.domOperation();k(a,x)}function z(a,b,d,f,e){switch(d){case "animate":b=[b,f.from,f.to,e];break;case "setClass":b=[b,t,I,e];break;case "addClass":b=[b,t,e];break;case "removeClass":b=[b,I,e];break;default:b=[b,e]}b.push(f);if(a=a.apply(a,
b))if(Ea(a.start)&&(a=a.start()),a instanceof c)a.done(e);else if(Ea(a))return a;return N}function A(a,b,d,e,f){var h=[];s(e,function(e){var l=e[f];l&&h.push(function(){var e,f,h=!1,k=function(a){h||(h=!0,(f||N)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=z(l,a,b,d,function(a){k(!1===a)});return e})});return h}function H(a,b,d,e,f){var h=A(a,b,d,e,f);if(0===h.length){var k,q;"beforeSetClass"===f?(k=A(a,"removeClass",d,e,"beforeRemoveClass"),q=A(a,"addClass",d,e,"beforeAddClass")):
"setClass"===f&&(k=A(a,"removeClass",d,e,"removeClass"),q=A(a,"addClass",d,e,"addClass"));k&&(h=h.concat(k));q&&(h=h.concat(q))}if(0!==h.length)return function(a){var b=[];h.length&&s(h,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var u=!1;3===arguments.length&&ta(d)&&(x=d,d=null);x=pa(x);d||(d=a.attr("class")||"",x.addClass&&(d+=" "+x.addClass),x.removeClass&&(d+=" "+x.removeClass));var t=x.addClass,I=x.removeClass,G=f(d),K,v;if(G.length){var M,
h;"leave"===b?(h="leave",M="afterLeave"):(h="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(K=H(a,b,x,G,h));v=H(a,b,x,G,M)}if(K||v){var q;return{$$willAnimate:!0,end:function(){q?q.end():(u=!0,C(),ha(a,x),q=new c,q.complete(!0));return q},start:function(){function b(c){u=!0;C();ha(a,x);q.complete(c)}if(q)return q;q=new c;var d,f=[];K&&f.push(function(a){d=K(a)});f.length?f.push(function(a){C();a(!0)}):C();v&&f.push(function(a){d=v(a)});q.setHost({end:function(){u||((d||
N)(void 0),b(void 0))},cancel:function(){u||((d||N)(!0),b(!0))}});c.chain(f,b);return q}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),e=d(a.to);if(b||e)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());e&&
d.push(e.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,c){'use strict';function P(c){var h=[];C(h,E).chars(c);return h.join("")}var D=c.$$minErr("$sanitize"),F,h,G,H,I,q,E,J,K,C;c.module("ngSanitize",[]).provider("$sanitize",function(){function f(a,e){return B(a.split(","),e)}function B(a,e){var d={},b;for(b=0;b<a.length;b++)d[e?q(a[b]):a[b]]=!0;return d}function t(a,e){e&&e.length&&h(a,B(e))}function Q(a){for(var e={},d=0,b=a.length;d<b;d++){var k=a[d];e[k.name]=k.value}return e}function L(a){return a.replace(/&/g,"&amp;").replace(z,function(a){var d=
a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(u,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,d=0,b=e.length;d<b;d++){var k=e[d],g=k.name.toLowerCase();if("xmlns:ns1"===g||0===g.lastIndexOf("ns1:",0))a.removeAttributeNode(k),d--,b--}(e=a.firstChild)&&A(e);a=v("nextSibling",a)}}function v(a,e){var d=e[a];if(d&&J.call(e,d))throw D("elclob",
e.outerHTML||e.outerText);return d}var y=!1,g=!1;this.$get=["$$sanitizeUri",function(a){y=!0;g&&h(m,l);return function(e){var d=[];K(e,C(d,function(b,d){return!/^unsafe:/.test(a(b,d))}));return d.join("")}}];this.enableSvg=function(a){return I(a)?(g=a,this):g};this.addValidElements=function(a){y||(H(a)&&(a={htmlElements:a}),t(l,a.svgElements),t(r,a.htmlVoidElements),t(m,a.htmlVoidElements),t(m,a.htmlElements));return this};this.addValidAttrs=function(a){y||h(M,B(a,!0));return this};F=c.bind;h=c.extend;
G=c.forEach;H=c.isArray;I=c.isDefined;q=c.$$lowercase;E=c.noop;K=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);var d=N(a);if(!d)return"";var b=5;do{if(0===b)throw D("uinput");b--;a=d.innerHTML;d=N(a)}while(a!==d.innerHTML);for(b=d.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),Q(b.attributes));break;case 3:e.chars(b.textContent)}var k;if(!(k=b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),k=v("nextSibling",b),!k))for(;null==k;){b=
v("parentNode",b);if(b===d)break;k=v("nextSibling",b);1===b.nodeType&&e.end(b.nodeName.toLowerCase())}b=k}for(;b=d.firstChild;)d.removeChild(b)};C=function(a,e){var d=!1,b=F(a,a.push);return{start:function(a,g){a=q(a);!d&&w[a]&&(d=a);d||!0!==m[a]||(b("<"),b(a),G(g,function(d,g){var c=q(g),f="img"===a&&"src"===c||"background"===c;!0!==M[c]||!0===O[c]&&!e(d,f)||(b(" "),b(g),b('="'),b(L(d)),b('"'))}),b(">"))},end:function(a){a=q(a);d||!0!==m[a]||!0===r[a]||(b("</"),b(a),b(">"));a==d&&(d=!1)},chars:function(a){d||
b(L(a))}}};J=s.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)};var z=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/([^#-~ |!])/g,r=f("area,br,col,hr,img,wbr"),x=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),p=f("rp,rt"),n=h({},p,x),x=h({},x,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),p=h({},p,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
l=f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),w=f("script,style"),m=h({},r,x,p,n),O=f("background,cite,href,longdesc,src,xlink:href,xml:base"),n=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
p=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),M=h({},O,p,n),N=function(a,e){function d(b){b="<remove></remove>"+b;try{var d=(new a.DOMParser).parseFromString(b,"text/html").body;d.firstChild.remove();return d}catch(e){}}function b(a){c.innerHTML=a;e.documentMode&&A(c);return c}var g;if(e&&e.implementation)g=e.implementation.createHTMLDocument("inert");else throw D("noinert");var c=(g.documentElement||g.getDocumentElement()).querySelector("body");c.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>';return c.querySelector("svg")?
(c.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',c.querySelector("svg img")?d:b):function(b){b="<remove></remove>"+b;try{b=encodeURI(b)}catch(d){return}var e=new a.XMLHttpRequest;e.responseType="document";e.open("GET","data:text/html;charset=utf-8,"+b,!1);e.send(null);b=e.response.body;b.firstChild.remove();return b}}(s,s.document)}).info({angularVersion:"1.7.9"});c.module("ngSanitize").filter("linky",["$sanitize",function(f){var h=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
t=/^mailto:/i,q=c.$$minErr("linky"),s=c.isDefined,A=c.isFunction,v=c.isObject,y=c.isString;return function(c,z,u){function r(c){c&&l.push(P(c))}function x(c,g){var f,a=p(c);l.push("<a ");for(f in a)l.push(f+'="'+a[f]+'" ');!s(z)||"target"in a||l.push('target="',z,'" ');l.push('href="',c.replace(/"/g,"&quot;"),'">');r(g);l.push("</a>")}if(null==c||""===c)return c;if(!y(c))throw q("notstring",c);for(var p=A(u)?u:v(u)?function(){return u}:function(){return{}},n=c,l=[],w,m;c=n.match(h);)w=c[0],c[2]||
c[4]||(w=(c[3]?"http://":"mailto:")+w),m=c.index,r(n.substr(0,m)),x(w,c[0].replace(t,"")),n=n.substring(m+c[0].length);r(n);return f(l.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z,l){'use strict';function q(n){return["$animate",function(u){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(m,f,a,e,r){var b,h,s;if(!n){b=f[0];s=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var k=function(c){h=c?v(c)?c:c.split(/[\s,]+/):null;e.reRender()};a?(k(m.$eval(a)),m.$watchCollection(a,k)):k(s)}var g,t;e.register(b,t={test:function(c){var b=h;c=b?v(b)?0<=b.indexOf(c):b.hasOwnProperty(c):void 0;return c},attach:function(){g||
r(function(c,a){u.enter(c,null,f);g=c;var d=g.$$attachId=e.getAttachId();g.on("$destroy",function(){g&&g.$$attachId===d&&(e.deregister(b,n),t.detach());a.$destroy()})})},detach:function(){if(g){var c=g;g=null;u.leave(c)}}},n);m.$on("$destroy",function(){e.deregister(b,n)})}}}]}var x,v,p,y;l.module("ngMessages",[],function(){x=l.forEach;v=l.isArray;p=l.isString;y=l.element}).info({angularVersion:"1.7.9"}).directive("ngMessages",["$animate",function(n){function u(f,a){return p(a)&&0===a.length||m(f.$eval(a))}
function m(f){return p(f)?f.length:!!f}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(f,a,e){function r(c,b){for(var d=b,a=[];d&&d!==c;){var e=d.$$ngMessageNode;if(e&&e.length)return k[e];d.childNodes.length&&-1===a.indexOf(d)?(a.push(d),d=d.childNodes[d.childNodes.length-1]):d.previousSibling?d=d.previousSibling:(d=d.parentNode,a.push(d))}}var b=this,h=0,s=0;this.getAttachId=function(){return s++};var k=this.messages={},g,t;this.render=function(c){c=c||
{};g=!1;t=c;for(var w=u(a,e.ngMessagesMultiple)||u(a,e.multiple),d=[],r={},h=0,k=b.head,s=!1,l=0;null!=k;){l++;var p=k.message,q=!1;s||x(c,function(b,c){m(b)&&!q&&(h++,p.test(c)&&!r[c]&&(q=r[c]=!0,p.attach()))});q?s=!w:d.push(p);k=k.next}x(d,function(c){c.detach()});c=d.length!==l;(w=b.default&&!c&&0<h)?b.default.attach():b.default&&b.default.detach();c||w?n.setClass(f,"ng-active","ng-inactive"):n.setClass(f,"ng-inactive","ng-active")};a.$watchCollection(e.ngMessages||e["for"],b.render);this.reRender=
function(){g||(g=!0,a.$evalAsync(function(){g&&t&&b.render(t)}))};this.register=function(c,a,d){if(d)b.default=a;else{d=h.toString();k[d]={message:a};var e=f[0];a=k[d];b.head?(e=r(e,c))?(a.next=e.next,e.next=a):(a.next=b.head,b.head=a):b.head=a;c.$$ngMessageNode=d;h++}b.reRender()};this.deregister=function(a,e){if(e)delete b.default;else{var d=a.$$ngMessageNode;delete a.$$ngMessageNode;var g=k[d];if(g){var h=r(f[0],a);h?h.next=g.next:b.head=g.next}delete k[d]}b.reRender()}}]}}]).directive("ngMessagesInclude",
["$templateRequest","$document","$compile",function(n,l,m){function f(a,e){var f=m.$$createComment?m.$$createComment("ngMessagesInclude",e):l[0].createComment(" ngMessagesInclude: "+e+" "),f=y(f);a.after(f);a.remove()}return{restrict:"AE",require:"^^ngMessages",link:function(a,e,l){var b=l.ngMessagesInclude||l.src;n(b).then(function(h){a.$$destroyed||(p(h)&&!h.trim()?f(e,b):m(h)(a,function(a){e.after(a);f(e,b)}))})}}}]).directive("ngMessage",q()).directive("ngMessageExp",q()).directive("ngMessageDefault",
q(!0))})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,p){'use strict';function q(g,h,s){n.directive(g,["$parse","$swipe",function(a,b){return function(c,e,f){function k(a){if(!d)return!1;var b=Math.abs(a.y-d.y);a=(a.x-d.x)*h;return l&&75>b&&0<a&&30<a&&.3>b/a}var m=a(f[g]),d,l,r=["touch"];p.isDefined(f.ngSwipeDisableMouse)||r.push("mouse");b.bind(e,{start:function(a,b){d=a;l=!0},cancel:function(a){l=!1},end:function(a,b){k(a)&&c.$apply(function(){e.triggerHandler(s);m(c,{$event:b})})}},r)}}])}var n=p.module("ngTouch",[]);n.info({angularVersion:"1.7.9"});
n.factory("$swipe",[function(){function g(a){a=a.originalEvent||a;var b=a.touches&&a.touches.length?a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||b[0];return{x:a.clientX,y:a.clientY}}function h(a,b){var c=[];p.forEach(a,function(a){(a=n[a][b])&&c.push(a)});return c.join(" ")}var n={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"}};
return{bind:function(a,b,c){var e,f,k,m,d=!1;c=c||["mouse","touch","pointer"];a.on(h(c,"start"),function(a){k=g(a);d=!0;f=e=0;m=k;b.start&&b.start(k,a)});var l=h(c,"cancel");if(l)a.on(l,function(a){d=!1;b.cancel&&b.cancel(a)});a.on(h(c,"move"),function(a){if(d&&k){var c=g(a);e+=Math.abs(c.x-m.x);f+=Math.abs(c.y-m.y);m=c;10>e&&10>f||(f>e?(d=!1,b.cancel&&b.cancel(a)):(a.preventDefault(),b.move&&b.move(c,a)))}});a.on(h(c,"end"),function(a){d&&(d=!1,b.end&&b.end(g(a),a))})}}}]);q("ngSwipeLeft",-1,"swipeleft");
q("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

'format cjs';
'use strict';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular', 'jquery-minicolors'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'), require('jquery-minicolors'));
    module.exports = 'minicolors';
  } else {
    root.angularMinicolors = factory(root.angular, root.jqueryMinicolors);
  }
})(this, function(angular) {

  angular.module('minicolors', []);

  angular.module('minicolors').provider('minicolors', function() {
    this.defaults = {
      theme: 'bootstrap',
      position: 'top left',
      defaultValue: '',
      animationSpeed: 50,
      animationEasing: 'swing',
      change: null,
      changeDelay: 0,
      control: 'hue',
      hide: null,
      hideSpeed: 100,
      inline: false,
      letterCase: 'lowercase',
      opacity: false,
      show: null,
      showSpeed: 100
    };

    this.$get = function() {
      return this;
    };

  });

  angular.module('minicolors').directive('minicolors', ['minicolors', '$timeout', function(minicolors, $timeout) {
    return {
      require: '?ngModel',
      restrict: 'A',
      priority: 1, //since we bind on an input element, we have to set a higher priority than angular-default input
      link: function(scope, element, attrs, ngModel) {

        var inititalized = false;

        //gets the settings object
        var getSettings = function() {
          var config = angular.extend({}, minicolors.defaults, scope.$eval(attrs.minicolors));
          return config;
        };

        /**
         * check if value is valid color value
         * e.g.#fff000 or #fff
         * @param color
         */
        function isValidColor(color) {
          return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
        }

        function canSetValue() {
          return (element.data('minicolors-settings') != null)
        }

        /**
         * set color value as minicolors internal color value
         * @param color
         */
        function setMinicolorsValue(color) {
          if (isValidColor(color) && canSetValue()) {
            element.minicolors('value', color);
          }
        }

        //what to do if the value changed
        ngModel.$render = function() {


          //we are in digest or apply, and therefore call a timeout function
          $timeout(function() {
            var color = ngModel.$viewValue;
            setMinicolorsValue(color);
          }, 0, false);
        };

        //init method
        var initMinicolors = function() {

          if (!ngModel) {
            return;
          }
          var settings = getSettings();
          settings.change = function(hex) {
            scope.$apply(function() {
              if (isValidColor(hex))
                ngModel.$setViewValue(hex);
            });
          };

          //destroy the old colorpicker if one already exists
          if (element.hasClass('minicolors-input')) {
            element.minicolors('destroy');
            element.off('blur', onBlur);
          }

          // Create the new minicolors widget
          element.minicolors(settings);

          // hook up into the jquery-minicolors onBlur event.
          element.on('blur', onBlur);

          // are we inititalized yet ?
          //needs to be wrapped in $timeout, to prevent $apply / $digest errors
          //$scope.$apply will be called by $timeout, so we don't have to handle that case
          if (!inititalized) {
            $timeout(function() {
              var color = ngModel.$viewValue;
              setMinicolorsValue(color);
            }, 0);
            inititalized = true;
            return;
          }

          function onBlur(e) {
            scope.$apply(function() {
                var color = element.minicolors('value');
                if (isValidColor(color))
                  ngModel.$setViewValue(color);
            });              
          }
        };

        initMinicolors();
        //initital call

        // Watch for changes to the directives options and then call init method again
        var unbindWatch = scope.$watch(getSettings, initMinicolors, true);

        scope.$on('$destroy', function () {
          if (element.hasClass('minicolors-input')) {
              element.minicolors('destroy');
              element.remove();
          }
          if (unbindWatch) unbindWatch();
        });

      }
    };
  }]);
});
/* angular-svg-round-progressbar@0.4.8 2016-09-18 */
(function(){
  "use strict";
!function(){for(var a=0,b=["webkit","moz"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){window.clearTimeout(a)})}(),angular.module("angular-svg-round-progressbar",[]),angular.module("angular-svg-round-progressbar").constant("roundProgressConfig",{max:50,semi:!1,rounded:!1,responsive:!1,clockwise:!0,radius:100,color:"#45ccce",bgcolor:"#eaeaea",stroke:15,duration:800,animation:"easeOutCubic",animationDelay:0,offset:0}),angular.module("angular-svg-round-progressbar").service("roundProgressService",["$window",function(a){function b(a,b,c,d){var e=(d-90)*Math.PI/180,f=a+c*Math.cos(e),g=b+c*Math.sin(e);return f+" "+g}var c={},d=angular.isNumber,e=document.head.querySelector("base");return c.isSupported=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),c.resolveColor=e&&e.href?function(a){var b=a.indexOf("#");return b>-1&&a.indexOf("url")>-1?a.slice(0,b)+window.location.href+a.slice(b):a}:function(a){return a},c.toNumber=function(a){return d(a)?a:parseFloat((a+"").replace(",","."))},c.getOffset=function(a,b){var c=+b.offset||0;if("inherit"===b.offset)for(var d=a.$parent;d;){if(d.hasOwnProperty("$$getRoundProgressOptions")){var e=d.$$getRoundProgressOptions();c+=(+e.offset||0)+(+e.stroke||0)}d=d.$parent}return c},c.getTimestamp=a.performance&&a.performance.now&&angular.isNumber(a.performance.now())?function(){return a.performance.now()}:function(){return(new a.Date).getTime()},c.updateState=function(a,c,d,e,f,g){if(!f)return e;var h=a>0?Math.min(a,c):0,i=g?180:359.9999,j=0===c?0:h/c*i,k=b(f,f,d,j),l=b(f,f,d,0),m=j<=180?0:1,n="M "+k+" A "+d+" "+d+" 0 "+m+" 0 "+l;return e.attr("d",n)},c.animations={linearEase:function(a,b,c,d){return c*a/d+b},easeInQuad:function(a,b,c,d){return c*(a/=d)*a+b},easeOutQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeInOutQuad:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},easeInCubic:function(a,b,c,d){return c*(a/=d)*a*a+b},easeOutCubic:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeInOutCubic:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b},easeInQuart:function(a,b,c,d){return c*(a/=d)*a*a*a+b},easeOutQuart:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeInOutQuart:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeOutQuint:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeInOutQuint:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeOutSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeInOutSine:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b},easeInExpo:function(a,b,c,d){return 0==a?b:c*Math.pow(2,10*(a/d-1))+b},easeOutExpo:function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeInOutExpo:function(a,b,c,d){return 0==a?b:a==d?b+c:(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeOutCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeInOutCirc:function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(a,b,c,d){var e=1.70158,f=0,g=c;return 0==a?b:1==(a/=d)?b+c:(f||(f=.3*d),g<Math.abs(c)?(g=c,e=f/4):e=f/(2*Math.PI)*Math.asin(c/g),-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*(2*Math.PI)/f))+b)},easeOutElastic:function(a,b,c,d){var e=1.70158,f=0,g=c;return 0==a?b:1==(a/=d)?b+c:(f||(f=.3*d),g<Math.abs(c)?(g=c,e=f/4):e=f/(2*Math.PI)*Math.asin(c/g),g*Math.pow(2,-10*a)*Math.sin((a*d-e)*(2*Math.PI)/f)+c+b)},easeInOutElastic:function(a,b,c,d){var e=1.70158,f=0,g=c;return 0==a?b:2==(a/=d/2)?b+c:(f||(f=d*(.3*1.5)),g<Math.abs(c)?(g=c,e=f/4):e=f/(2*Math.PI)*Math.asin(c/g),a<1?-.5*(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*(2*Math.PI)/f))+b:g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*(2*Math.PI)/f)*.5+c+b)},easeInBack:function(a,b,c,d,e){return void 0==e&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b},easeOutBack:function(a,b,c,d,e){return void 0==e&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},easeInOutBack:function(a,b,c,d,e){return void 0==e&&(e=1.70158),(a/=d/2)<1?c/2*(a*a*(((e*=1.525)+1)*a-e))+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},easeInBounce:function(a,b,d,e){return d-c.animations.easeOutBounce(e-a,0,d,e)+b},easeOutBounce:function(a,b,c,d){return(a/=d)<1/2.75?c*(7.5625*a*a)+b:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:a<2.5/2.75?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},easeInOutBounce:function(a,b,d,e){return a<e/2?.5*c.animations.easeInBounce(2*a,0,d,e)+b:.5*c.animations.easeOutBounce(2*a-e,0,d,e)+.5*d+b}},c}]),angular.module("angular-svg-round-progressbar").directive("roundProgress",["$window","roundProgressService","roundProgressConfig",function(a,b,c){var d={restrict:"EA",replace:!0,transclude:!0,scope:{current:"=",max:"=",semi:"=",rounded:"=",clockwise:"=",responsive:"=",onRender:"=",radius:"@",color:"@",bgcolor:"@",stroke:"@",duration:"@",animation:"@",offset:"@",animationDelay:"@"}};return b.isSupported?angular.extend(d,{link:function(e,f,g){function h(a){return g.hasOwnProperty(a)}var i,j,k=!f.hasClass("round-progress-wrapper"),l=k?f:f.find("svg").eq(0),m=l.find("path").eq(0),n=l.find("circle").eq(0),o=angular.copy(c),p=0;e.$$getRoundProgressOptions=function(){return o};var q=function(){var a=o.semi,c=o.responsive,d=+o.radius||0,g=+o.stroke,h=2*d,i=d-g/2-b.getOffset(e,o);l.css({top:0,left:0,position:c?"absolute":"static",width:c?"100%":h+"px",height:c?"100%":(a?d:h)+"px",overflow:"hidden"}),k||l[0].setAttribute("viewBox","0 0 "+h+" "+(a?d:h)),f.css({width:c?"100%":"auto",position:"relative",paddingBottom:c?a?"50%":"100%":0}),m.css({stroke:b.resolveColor(o.color),strokeWidth:g,strokeLinecap:o.rounded?"round":"butt"}),a?m.attr("transform",o.clockwise?"translate(0, "+h+") rotate(-90)":"translate("+h+", "+h+") rotate(90) scale(-1, 1)"):m.attr("transform",o.clockwise?"":"scale(-1, 1) translate("+-h+" 0)"),n.attr({cx:d,cy:d,r:i>=0?i:0}).css({stroke:b.resolveColor(o.bgcolor),strokeWidth:g})},r=function(c,d,g){var h=b.toNumber(o.max||0),j=c>0?a.Math.min(c,h):0,k=d===j||d<0?0:d||0,n=j-k,q=b.animations[o.animation],r=+o.duration||0,s=g||c>h&&d>h||c<0&&d<0||r<25,t=b.toNumber(o.radius),u=t-o.stroke/2-b.getOffset(e,o),v=o.semi;l.attr({"aria-valuemax":h,"aria-valuenow":j});var w=function(){if(s)b.updateState(j,h,u,m,t,v),o.onRender&&o.onRender(j,o,f);else{var c=b.getTimestamp(),d=++p;a.requestAnimationFrame(function e(){var g=a.Math.min(b.getTimestamp()-c,r),i=q(g,k,n,r);b.updateState(i,h,u,m,t,v),o.onRender&&o.onRender(i,o,f),d===p&&g<r&&a.requestAnimationFrame(e)})}};o.animationDelay>0?(a.clearTimeout(i),a.setTimeout(w,o.animationDelay)):w()},s=Object.keys(d.scope).filter(function(a){return h(a)&&"current"!==a});e.$watchGroup(s,function(a){for(var b=0;b<a.length;b++)"undefined"!=typeof a[b]&&(o[s[b]]=a[b]);q(),e.$broadcast("$parentOffsetChanged"),"inherit"!==o.offset||j?"inherit"!==o.offset&&j&&j():j=e.$on("$parentOffsetChanged",function(){r(e.current,e.current,!0),q()})}),e.$watchGroup(["current","max","radius","stroke","semi","offset"].filter(h),function(a,c){r(b.toNumber(a[0]),b.toNumber(c[0]))})},template:function(a){for(var b=a.parent(),c="round-progress",d=['<svg class="'+c+'" xmlns="http://www.w3.org/2000/svg" role="progressbar" aria-valuemin="0">','<circle fill="none"/>','<path fill="none"/>',"<g ng-transclude></g>","</svg>"];b.length&&b[0].nodeName.toLowerCase()!==c&&"undefined"==typeof b.attr(c);)b=b.parent();return b&&b.length||(d.unshift('<div class="round-progress-wrapper">'),d.push("</div>")),d.join("\n")}}):angular.extend(d,{template:'<div class="round-progress" ng-transclude></div>'})}]);
 })();
/**
 * CUSTOM BUILD
 *
 * Issue:   https://github.com/marceljuenemann/angular-drag-and-drop-lists/issues/238
 * Fix:     https://github.com/marceljuenemann/angular-drag-and-drop-lists/pull/431/commits/d92d4f95a0a29dee53e4d85510df00908aca86d4
 *
 */

/**
 * angular-drag-and-drop-lists v2.1.0
 *
 * Copyright (c) 2014 Marcel Juenemann marcel@juenemann.cc
 * Copyright (c) 2014-2017 Google Inc.
 * https://github.com/marceljuenemann/angular-drag-and-drop-lists
 *
 * License: MIT
 */
(function(dndLists) {

  // In standard-compliant browsers we use a custom mime type and also encode the dnd-type in it.
  // However, IE and Edge only support a limited number of mime types. The workarounds are described
  // in https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
  var MIME_TYPE = 'application/x-dnd';
  var EDGE_MIME_TYPE = 'application/json';
  var MSIE_MIME_TYPE = 'Text';

  // All valid HTML5 drop effects, in the order in which we prefer to use them.
  var ALL_EFFECTS = ['move', 'copy', 'link'];

  /**
   * Use the dnd-draggable attribute to make your element draggable
   *
   * Attributes:
   * - dnd-draggable      Required attribute. The value has to be an object that represents the data
   *                      of the element. In case of a drag and drop operation the object will be
   *                      serialized and unserialized on the receiving end.
   * - dnd-effect-allowed Use this attribute to limit the operations that can be performed. Valid
   *                      options are "move", "copy" and "link", as well as "all", "copyMove",
   *                      "copyLink" and "linkMove". The semantics of these operations are up to you
   *                      and have to be implemented using the callbacks described below. If you
   *                      allow multiple options, the user can choose between them by using the
   *                      modifier keys (OS specific). The cursor will be changed accordingly,
   *                      expect for IE and Edge, where this is not supported.
   * - dnd-type           Use this attribute if you have different kinds of items in your
   *                      application and you want to limit which items can be dropped into which
   *                      lists. Combine with dnd-allowed-types on the dnd-list(s). This attribute
   *                      must be a lower case string. Upper case characters can be used, but will
   *                      be converted to lower case automatically.
   * - dnd-disable-if     You can use this attribute to dynamically disable the draggability of the
   *                      element. This is useful if you have certain list items that you don't want
   *                      to be draggable, or if you want to disable drag & drop completely without
   *                      having two different code branches (e.g. only allow for admins).
   *
   * Callbacks:
   * - dnd-dragstart      Callback that is invoked when the element was dragged. The original
   *                      dragstart event will be provided in the local event variable.
   * - dnd-moved          Callback that is invoked when the element was moved. Usually you will
   *                      remove your element from the original list in this callback, since the
   *                      directive is not doing that for you automatically. The original dragend
   *                      event will be provided in the local event variable.
   * - dnd-copied         Same as dnd-moved, just that it is called when the element was copied
   *                      instead of moved, so you probably want to implement a different logic.
   * - dnd-linked         Same as dnd-moved, just that it is called when the element was linked
   *                      instead of moved, so you probably want to implement a different logic.
   * - dnd-canceled       Callback that is invoked if the element was dragged, but the operation was
   *                      canceled and the element was not dropped. The original dragend event will
   *                      be provided in the local event variable.
   * - dnd-dragend        Callback that is invoked when the drag operation ended. Available local
   *                      variables are event and dropEffect.
   * - dnd-selected       Callback that is invoked when the element was clicked but not dragged.
   *                      The original click event will be provided in the local event variable.
   * - dnd-callback       Custom callback that is passed to dropzone callbacks and can be used to
   *                      communicate between source and target scopes. The dropzone can pass user
   *                      defined variables to this callback.
   *
   * CSS classes:
   * - dndDragging        This class will be added to the element while the element is being
   *                      dragged. It will affect both the element you see while dragging and the
   *                      source element that stays at it's position. Do not try to hide the source
   *                      element with this class, because that will abort the drag operation.
   * - dndDraggingSource  This class will be added to the element after the drag operation was
   *                      started, meaning it only affects the original element that is still at
   *                      it's source position, and not the "element" that the user is dragging with
   *                      his mouse pointer.
   */
  dndLists.directive('dndDraggable', ['$parse', '$timeout', function($parse, $timeout) {
    return function(scope, element, attr) {
      // Set the HTML5 draggable attribute on the element.
      element.attr("draggable", "true");

      // If the dnd-disable-if attribute is set, we have to watch that.
      if (attr.dndDisableIf) {
        scope.$watch(attr.dndDisableIf, function(disabled) {
          element.attr("draggable", !disabled);
        });
      }

      /**
       * When the drag operation is started we have to prepare the dataTransfer object,
       * which is the primary way we communicate with the target element
       */
      element.on('dragstart', function(event) {
        event = event.originalEvent || event;

        // Check whether the element is draggable, since dragstart might be triggered on a child.
        if (element.attr('draggable') == 'false') return true;

        // Initialize global state.
        dndState.isDragging = true;
        dndState.itemType = attr.dndType && scope.$eval(attr.dndType).toLowerCase();

        // Set the allowed drop effects. See below for special IE handling.
        dndState.dropEffect = "none";
        dndState.effectAllowed = attr.dndEffectAllowed || ALL_EFFECTS[0];
        event.dataTransfer.effectAllowed = dndState.effectAllowed;

        // Internet Explorer and Microsoft Edge don't support custom mime types, see design doc:
        // https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
        var item = scope.$eval(attr.dndDraggable);
        var mimeType = MIME_TYPE + (dndState.itemType ? ('-' + dndState.itemType) : '');
        try {
          event.dataTransfer.setData(mimeType, angular.toJson(item));
        } catch (e) {
          // Setting a custom MIME type did not work, we are probably in IE or Edge.
          var data = angular.toJson({item: item, type: dndState.itemType});
          try {
            event.dataTransfer.setData(EDGE_MIME_TYPE, data);
          } catch (e) {
            // We are in Internet Explorer and can only use the Text MIME type. Also note that IE
            // does not allow changing the cursor in the dragover event, therefore we have to choose
            // the one we want to display now by setting effectAllowed.
            var effectsAllowed = filterEffects(ALL_EFFECTS, dndState.effectAllowed);
            event.dataTransfer.effectAllowed = effectsAllowed[0];
            event.dataTransfer.setData(MSIE_MIME_TYPE, data);
          }
        }

        // Add CSS classes. See documentation above.
        element.addClass("dndDragging");
        $timeout(function() { element.addClass("dndDraggingSource"); }, 0);

        // Try setting a proper drag image if triggered on a dnd-handle (won't work in IE).
        if (event._dndHandle && event.dataTransfer.setDragImage) {
          var elem = angular.element(element);
          var offestX = event.pageX - elem[0].offsetLeft;
          var offsetY = event.pageY - elem[0].offsetTop;
          event.dataTransfer.setDragImage(element[0], offestX, offsetY);
        }

        // Invoke dragstart callback and prepare extra callback for dropzone.
        $parse(attr.dndDragstart)(scope, {event: event});
        if (attr.dndCallback) {
          var callback = $parse(attr.dndCallback);
          dndState.callback = function(params) { return callback(scope, params || {}); };
        }

        event.stopPropagation();
      });

      /**
       * The dragend event is triggered when the element was dropped or when the drag
       * operation was aborted (e.g. hit escape button). Depending on the executed action
       * we will invoke the callbacks specified with the dnd-moved or dnd-copied attribute.
       */
      element.on('dragend', function(event) {
        event = event.originalEvent || event;

        // Invoke callbacks. Usually we would use event.dataTransfer.dropEffect to determine
        // the used effect, but Chrome has not implemented that field correctly. On Windows
        // it always sets it to 'none', while Chrome on Linux sometimes sets it to something
        // else when it's supposed to send 'none' (drag operation aborted).
        scope.$apply(function() {
          var dropEffect = dndState.dropEffect;
          var cb = {copy: 'dndCopied', link: 'dndLinked', move: 'dndMoved', none: 'dndCanceled'};
          $parse(attr[cb[dropEffect]])(scope, {event: event});
          $parse(attr.dndDragend)(scope, {event: event, dropEffect: dropEffect});
        });

        // Clean up
        dndState.isDragging = false;
        dndState.callback = undefined;
        element.removeClass("dndDragging");
        element.removeClass("dndDraggingSource");
        event.stopPropagation();

        // In IE9 it is possible that the timeout from dragstart triggers after the dragend handler.
        $timeout(function() { element.removeClass("dndDraggingSource"); }, 0);
      });

      /**
       * When the element is clicked we invoke the callback function
       * specified with the dnd-selected attribute.
       */
      element.on('click', function(event) {
        if (!attr.dndSelected) return;

        event = event.originalEvent || event;
        scope.$apply(function() {
          $parse(attr.dndSelected)(scope, {event: event});
        });

        // Prevent triggering dndSelected in parent elements.
        event.stopPropagation();
      });

      /**
       * Workaround to make element draggable in IE9
       */
      element.on('selectstart', function() {
        if (this.dragDrop) this.dragDrop();
      });
    };
  }]);

  /**
   * Use the dnd-list attribute to make your list element a dropzone. Usually you will add a single
   * li element as child with the ng-repeat directive. If you don't do that, we will not be able to
   * position the dropped element correctly. If you want your list to be sortable, also add the
   * dnd-draggable directive to your li element(s).
   *
   * Attributes:
   * - dnd-list             Required attribute. The value has to be the array in which the data of
   *                        the dropped element should be inserted. The value can be blank if used
   *                        with a custom dnd-drop handler that always returns true.
   * - dnd-allowed-types    Optional array of allowed item types. When used, only items that had a
   *                        matching dnd-type attribute will be dropable. Upper case characters will
   *                        automatically be converted to lower case.
   * - dnd-effect-allowed   Optional string expression that limits the drop effects that can be
   *                        performed in the list. See dnd-effect-allowed on dnd-draggable for more
   *                        details on allowed options. The default value is all.
   * - dnd-disable-if       Optional boolean expresssion. When it evaluates to true, no dropping
   *                        into the list is possible. Note that this also disables rearranging
   *                        items inside the list.
   * - dnd-horizontal-list  Optional boolean expresssion. When it evaluates to true, the positioning
   *                        algorithm will use the left and right halfs of the list items instead of
   *                        the upper and lower halfs.
   * - dnd-external-sources Optional boolean expression. When it evaluates to true, the list accepts
   *                        drops from sources outside of the current browser tab. This allows to
   *                        drag and drop accross different browser tabs. The only major browser
   *                        that does not support this is currently Microsoft Edge.
   *
   * Callbacks:
   * - dnd-dragover         Optional expression that is invoked when an element is dragged over the
   *                        list. If the expression is set, but does not return true, the element is
   *                        not allowed to be dropped. The following variables will be available:
   *                        - event: The original dragover event sent by the browser.
   *                        - index: The position in the list at which the element would be dropped.
   *                        - type: The dnd-type set on the dnd-draggable, or undefined if non was
   *                          set. Will be null for drops from external sources in IE and Edge,
   *                          since we don't know the type in those cases.
   *                        - dropEffect: One of move, copy or link, see dnd-effect-allowed.
   *                        - external: Whether the element was dragged from an external source.
   *                        - callback: If dnd-callback was set on the source element, this is a
   *                          function reference to the callback. The callback can be invoked with
   *                          custom variables like this: callback({var1: value1, var2: value2}).
   *                          The callback will be executed on the scope of the source element. If
   *                          dnd-external-sources was set and external is true, this callback will
   *                          not be available.
   * - dnd-drop             Optional expression that is invoked when an element is dropped on the
   *                        list. The same variables as for dnd-dragover will be available, with the
   *                        exception that type is always known and therefore never null. There
   *                        will also be an item variable, which is the transferred object. The
   *                        return value determines the further handling of the drop:
   *                        - falsy: The drop will be canceled and the element won't be inserted.
   *                        - true: Signalises that the drop is allowed, but the dnd-drop
   *                          callback already took care of inserting the element.
   *                        - otherwise: All other return values will be treated as the object to
   *                          insert into the array. In most cases you want to simply return the
   *                          item parameter, but there are no restrictions on what you can return.
   * - dnd-inserted         Optional expression that is invoked after a drop if the element was
   *                        actually inserted into the list. The same local variables as for
   *                        dnd-drop will be available. Note that for reorderings inside the same
   *                        list the old element will still be in the list due to the fact that
   *                        dnd-moved was not called yet.
   *
   * CSS classes:
   * - dndPlaceholder       When an element is dragged over the list, a new placeholder child
   *                        element will be added. This element is of type li and has the class
   *                        dndPlaceholder set. Alternatively, you can define your own placeholder
   *                        by creating a child element with dndPlaceholder class.
   * - dndDragover          Will be added to the list while an element is dragged over the list.
   */
  dndLists.directive('dndList', ['$parse', function($parse) {
    return function(scope, element, attr) {
      // While an element is dragged over the list, this placeholder element is inserted
      // at the location where the element would be inserted after dropping.
      var placeholder = getPlaceholderElement();
      placeholder.remove();

      var placeholderNode = placeholder[0];
      var listNode = element[0];
      var listSettings = {};

      /**
       * The dragenter event is fired when a dragged element or text selection enters a valid drop
       * target. According to the spec, we either need to have a dropzone attribute or listen on
       * dragenter events and call preventDefault(). It should be noted though that no browser seems
       * to enforce this behaviour.
       */
      element.on('dragenter', function (event) {
        event = event.originalEvent || event;

        // Calculate list properties, so that we don't have to repeat this on every dragover event.
        var types = attr.dndAllowedTypes && scope.$eval(attr.dndAllowedTypes);
        listSettings = {
          allowedTypes: angular.isArray(types) && types.join('|').toLowerCase().split('|'),
          disabled: attr.dndDisableIf && scope.$eval(attr.dndDisableIf),
          externalSources: attr.dndExternalSources && scope.$eval(attr.dndExternalSources),
          horizontal: attr.dndHorizontalList && scope.$eval(attr.dndHorizontalList)
        };

        var mimeType = getMimeType(event.dataTransfer.types);
        if (!mimeType || !isDropAllowed(getItemType(mimeType))) return true;
        event.preventDefault();
      });

      /**
       * The dragover event is triggered "every few hundred milliseconds" while an element
       * is being dragged over our list, or over an child element.
       */
      element.on('dragover', function(event) {
        event = event.originalEvent || event;

        // Check whether the drop is allowed and determine mime type.
        var mimeType = getMimeType(event.dataTransfer.types);
        var itemType = getItemType(mimeType);
        if (!mimeType || !isDropAllowed(itemType)) return true;

        // Make sure the placeholder is shown, which is especially important if the list is empty.
        if (placeholderNode.parentNode != listNode) {
          element.append(placeholder);
        }

        if (event.target != listNode) {
          // Try to find the node direct directly below the list node.
          var listItemNode = event.target;
          while (listItemNode.parentNode != listNode && listItemNode.parentNode) {
            listItemNode = listItemNode.parentNode;
          }

          if (listItemNode.parentNode == listNode && listItemNode != placeholderNode) {
            // If the mouse pointer is in the upper half of the list item element,
            // we position the placeholder before the list item, otherwise after it.
            var rect = listItemNode.getBoundingClientRect();
            if (listSettings.horizontal) {
              var isFirstHalf = event.clientX < rect.left + rect.width / 2;
            } else {
              var isFirstHalf = event.clientY < rect.top + rect.height / 2;
            }
            listNode.insertBefore(placeholderNode,
                isFirstHalf ? listItemNode : listItemNode.nextSibling);
          }
        }

        // In IE we set a fake effectAllowed in dragstart to get the correct cursor, we therefore
        // ignore the effectAllowed passed in dataTransfer. We must also not access dataTransfer for
        // drops from external sources, as that throws an exception.
        var ignoreDataTransfer = mimeType == MSIE_MIME_TYPE;
        var dropEffect = getDropEffect(event, ignoreDataTransfer);
        if (dropEffect == 'none') return stopDragover();

        // At this point we invoke the callback, which still can disallow the drop.
        // We can't do this earlier because we want to pass the index of the placeholder.
        if (attr.dndDragover && !invokeCallback(attr.dndDragover, event, dropEffect, itemType)) {
          return stopDragover();
        }

        // Set dropEffect to modify the cursor shown by the browser, unless we're in IE, where this
        // is not supported. This must be done after preventDefault in Firefox.
        event.preventDefault();
        if (!ignoreDataTransfer) {
          event.dataTransfer.dropEffect = dropEffect;
        }

        element.addClass("dndDragover");
        event.stopPropagation();
        return false;
      });

      /**
       * When the element is dropped, we use the position of the placeholder element as the
       * position where we insert the transferred data. This assumes that the list has exactly
       * one child element per array element.
       */
      element.on('drop', function(event) {
        event = event.originalEvent || event;

        // Check whether the drop is allowed and determine mime type.
        var mimeType = getMimeType(event.dataTransfer.types);
        var itemType = getItemType(mimeType);
        if (!mimeType || !isDropAllowed(itemType)) return true;

        // The default behavior in Firefox is to interpret the dropped element as URL and
        // forward to it. We want to prevent that even if our drop is aborted.
        event.preventDefault();

        // Unserialize the data that was serialized in dragstart.
        try {
          var data = JSON.parse(event.dataTransfer.getData(mimeType));
        } catch(e) {
          return stopDragover();
        }

        // Drops with invalid types from external sources might not have been filtered out yet.
        if (mimeType == MSIE_MIME_TYPE || mimeType == EDGE_MIME_TYPE) {
          itemType = data.type || undefined;
          data = data.item;
          if (!isDropAllowed(itemType)) return stopDragover();
        }

        // Special handling for internal IE drops, see dragover handler.
        var ignoreDataTransfer = mimeType == MSIE_MIME_TYPE;
        var dropEffect = getDropEffect(event, ignoreDataTransfer);
        if (dropEffect == 'none') return stopDragover();

        // Invoke the callback, which can transform the transferredObject and even abort the drop.
        var index = getPlaceholderIndex();
        if (attr.dndDrop) {
          data = invokeCallback(attr.dndDrop, event, dropEffect, itemType, index, data);
          if (!data) return stopDragover();
        }

        // The drop is definitely going to happen now, store the dropEffect.
        dndState.dropEffect = dropEffect;
        if (!ignoreDataTransfer) {
          event.dataTransfer.dropEffect = dropEffect;
        }

        // Insert the object into the array, unless dnd-drop took care of that (returned true).
        if (data !== true) {
          scope.$apply(function() {
            scope.$eval(attr.dndList).splice(index, 0, data);
          });
        }
        invokeCallback(attr.dndInserted, event, dropEffect, itemType, index, data);

        // Clean up
        stopDragover();
        event.stopPropagation();
        return false;
      });

      /**
       * We have to remove the placeholder when the element is no longer dragged over our list. The
       * problem is that the dragleave event is not only fired when the element leaves our list,
       * but also when it leaves a child element. Therefore, we determine whether the mouse cursor
       * is still pointing to an element inside the list or not.
       */
      element.on('dragleave', function(event) {
        event = event.originalEvent || event;

        var newTarget = document.elementFromPoint(event.clientX, event.clientY);
        if (listNode.contains(newTarget) && !event._dndPhShown) {
          // Signalize to potential parent lists that a placeholder is already shown.
          event._dndPhShown = true;
        } else {
          stopDragover();
        }
      });

      /**
       * Given the types array from the DataTransfer object, returns the first valid mime type.
       * A type is valid if it starts with MIME_TYPE, or it equals MSIE_MIME_TYPE or EDGE_MIME_TYPE.
       */
      function getMimeType(types) {
        if (!types) return MSIE_MIME_TYPE; // IE 9 workaround.
        for (var i = 0; i < types.length; i++) {
          if (types[i] == MSIE_MIME_TYPE || types[i] == EDGE_MIME_TYPE ||
              types[i].substr(0, MIME_TYPE.length) == MIME_TYPE) {
            return types[i];
          }
        }
        return null;
      }

      /**
       * Determines the type of the item from the dndState, or from the mime type for items from
       * external sources. Returns undefined if no item type was set and null if the item type could
       * not be determined.
       */
      function getItemType(mimeType) {
        if (dndState.isDragging) return dndState.itemType || undefined;
        if (mimeType == MSIE_MIME_TYPE || mimeType == EDGE_MIME_TYPE) return null;
        return (mimeType && mimeType.substr(MIME_TYPE.length + 1)) || undefined;
      }

      /**
       * Checks various conditions that must be fulfilled for a drop to be allowed, including the
       * dnd-allowed-types attribute. If the item Type is unknown (null), the drop will be allowed.
       */
      function isDropAllowed(itemType) {
        if (listSettings.disabled) return false;
        if (!listSettings.externalSources && !dndState.isDragging) return false;
        if (!listSettings.allowedTypes || itemType === null) return true;
        return itemType && listSettings.allowedTypes.indexOf(itemType) != -1;
      }

      /**
       * Determines which drop effect to use for the given event. In Internet Explorer we have to
       * ignore the effectAllowed field on dataTransfer, since we set a fake value in dragstart.
       * In those cases we rely on dndState to filter effects. Read the design doc for more details:
       * https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
       */
      function getDropEffect(event, ignoreDataTransfer) {
        var effects = ALL_EFFECTS;
        if (!ignoreDataTransfer) {
          effects = filterEffects(effects, event.dataTransfer.effectAllowed);
        }
        if (dndState.isDragging) {
          effects = filterEffects(effects, dndState.effectAllowed);
        }
        if (attr.dndEffectAllowed) {
          effects = filterEffects(effects, attr.dndEffectAllowed);
        }
        // MacOS automatically filters dataTransfer.effectAllowed depending on the modifier keys,
        // therefore the following modifier keys will only affect other operating systems.
        if (!effects.length) {
          return 'none';
        } else if (event.ctrlKey && effects.indexOf('copy') != -1) {
          return 'copy';
        } else if (event.altKey && effects.indexOf('link') != -1) {
          return 'link';
        } else {
          return effects[0];
        }
      }

      /**
       * Small helper function that cleans up if we aborted a drop.
       */
      function stopDragover() {
        placeholder.remove();
        element.removeClass("dndDragover");
        return true;
      }

      /**
       * Invokes a callback with some interesting parameters and returns the callbacks return value.
       */
      function invokeCallback(expression, event, dropEffect, itemType, index, item) {
        return $parse(expression)(scope, {
          callback: dndState.callback,
          dropEffect: dropEffect,
          event: event,
          external: !dndState.isDragging,
          index: index !== undefined ? index : getPlaceholderIndex(),
          item: item || undefined,
          type: itemType
        });
      }

      /**
       * We use the position of the placeholder node to determine at which position of the array the
       * object needs to be inserted
       */
      function getPlaceholderIndex() {
        return Array.prototype.indexOf.call(listNode.children, placeholderNode);
      }

      /**
       * Tries to find a child element that has the dndPlaceholder class set. If none was found, a
       * new li element is created.
       */
      function getPlaceholderElement() {
        var placeholder;
        angular.forEach(element.children(), function(childNode) {
          var child = angular.element(childNode);
          if (child.hasClass('dndPlaceholder')) {
            placeholder = child;
          }
        });
        return placeholder || angular.element("<li class='dndPlaceholder'></li>");
      }
    };
  }]);

  /**
   * Use the dnd-nodrag attribute inside of dnd-draggable elements to prevent them from starting
   * drag operations. This is especially useful if you want to use input elements inside of
   * dnd-draggable elements or create specific handle elements. Note: This directive does not work
   * in Internet Explorer 9.
   */
  dndLists.directive('dndNodrag', function() {
    return function(scope, element, attr) {
      // Set as draggable so that we can cancel the events explicitly
      element.attr("draggable", "true");

      /**
       * Since the element is draggable, the browser's default operation is to drag it on dragstart.
       * We will prevent that and also stop the event from bubbling up.
       */
      element.on('dragstart', function(event) {
        event = event.originalEvent || event;

        if (!event._dndHandle) {
          // If a child element already reacted to dragstart and set a dataTransfer object, we will
          // allow that. For example, this is the case for user selections inside of input elements.
          if (!(event.dataTransfer.types && event.dataTransfer.types.length)) {
            event.preventDefault();
          }
          event.stopPropagation();
        }
      });

      /**
       * Stop propagation of dragend events, otherwise dnd-moved might be triggered and the element
       * would be removed.
       */
      element.on('dragend', function(event) {
        event = event.originalEvent || event;
        if (!event._dndHandle) {
          event.stopPropagation();
        }
      });
    };
  });

  /**
   * Use the dnd-handle directive within a dnd-nodrag element in order to allow dragging with that
   * element after all. Therefore, by combining dnd-nodrag and dnd-handle you can allow
   * dnd-draggable elements to only be dragged via specific "handle" elements. Note that Internet
   * Explorer will show the handle element as drag image instead of the dnd-draggable element. You
   * can work around this by styling the handle element differently when it is being dragged. Use
   * the CSS selector .dndDragging:not(.dndDraggingSource) [dnd-handle] for that.
   */
  dndLists.directive('dndHandle', function() {
    return function(scope, element, attr) {
      element.attr("draggable", "true");

      element.on('dragstart dragend', function(event) {
        event = event.originalEvent || event;
        event._dndHandle = true;
      });
    };
  });

  /**
   * Filters an array of drop effects using a HTML5 effectAllowed string.
   */
  function filterEffects(effects, effectAllowed) {
    if (effectAllowed == 'all') return effects;
    return effects.filter(function(effect) {
      return effectAllowed.toLowerCase().indexOf(effect) != -1;
    });
  }

  /**
   * For some features we need to maintain global state. This is done here, with these fields:
   * - callback: A callback function set at dragstart that is passed to internal dropzone handlers.
   * - dropEffect: Set in dragstart to "none" and to the actual value in the drop handler. We don't
   *   rely on the dropEffect passed by the browser, since there are various bugs in Chrome and
   *   Safari, and Internet Explorer defaults to copy if effectAllowed is copyMove.
   * - effectAllowed: Set in dragstart based on dnd-effect-allowed. This is needed for IE because
   *   setting effectAllowed on dataTransfer might result in an undesired cursor.
   * - isDragging: True between dragstart and dragend. Falsy for drops from external sources.
   * - itemType: The item type of the dragged element set via dnd-type. This is needed because IE
   *   and Edge don't support custom mime types that we can use to transfer this information.
   */
  var dndState = {};

})(angular.module('dndLists', []));
/*! angular-pageslide-directive 2016-12-10 */
!function(a,b){"function"==typeof define&&define.amd?define(["angular"],b):"object"==typeof module&&module.exports?module.exports=b(require("angular")):b(a.angular)}(this,function(a){a.module("pageslide-directive",[]).directive("pageslide",["$document","$timeout",function(b,c){return{restrict:"EA",transclude:!1,scope:{psOpen:"=?",psAutoClose:"@",psSide:"@",psSpeed:"@",psClass:"@",psSize:"@",psZindex:"@",psPush:"@",psContainer:"@",psKeyListener:"@",psBodyClass:"@",psClickOutside:"@",onopen:"&?",onclose:"&?"},link:function(d,e,f){function g(a){var b=a.touches&&a.touches[0]||a.target;r&&q.contains(b)&&!p.contains(b)&&(r=!1,d.psOpen=!1,d.$apply()),d.psOpen&&(r=!0)}function h(a){if(n.bodyClass){var b=n.className+"-body",c=new RegExp(b+"-closed|"+b+"-open");q.className=q.className.replace(c,"");var d=b+"-"+a;" "!==q.className[q.className.length-1]?q.className+=" "+d:q.className+=d}}function i(){d.psOpen?"function"==typeof d.onopen&&d.onopen()():"function"==typeof d.onclose&&d.onclose()()}function j(){switch(n.side){case"right":p.style.width=n.size,p.style.height="100%",p.style.top="0px",p.style.bottom="0px",p.style.right="0px";break;case"left":p.style.width=n.size,p.style.height="100%",p.style.top="0px",p.style.bottom="0px",p.style.left="0px";break;case"top":p.style.height=n.size,p.style.width="100%",p.style.left="0px",p.style.top="0px",p.style.right="0px";break;case"bottom":p.style.height=n.size,p.style.width="100%",p.style.bottom="0px",p.style.left="0px",p.style.right="0px"}}function k(a,c){switch(c.side){case"right":a.style.right="-"+c.size,c.push&&(q.style.right="0px",q.style.left="0px");break;case"left":a.style.left="-"+c.size,c.push&&(q.style.left="0px",q.style.right="0px");break;case"top":a.style.top="-"+c.size,c.push&&(q.style.top="0px",q.style.bottom="0px");break;case"bottom":a.style.bottom="-"+c.size,c.push&&(q.style.bottom="0px",q.style.top="0px")}c.keyListener&&b.off("keydown",m),c.clickOutside&&b.off("touchend click",g),r=!1,h("closed"),d.psOpen=!1}function l(a,c){switch(c.side){case"right":a.style.right="0px",c.push&&(q.style.right=c.size,q.style.left="-"+c.size);break;case"left":a.style.left="0px",c.push&&(q.style.left=c.size,q.style.right="-"+c.size);break;case"top":a.style.top="0px",c.push&&(q.style.top=c.size,q.style.bottom="-"+c.size);break;case"bottom":a.style.bottom="0px",c.push&&(q.style.bottom=c.size,q.style.top="-"+c.size)}d.psOpen=!0,c.keyListener&&b.on("keydown",m),c.clickOutside&&b.on("touchend click",g),h("open")}function m(a){var b=27,e=a.keyCode||a.which;e===b&&(k(p,n),c(function(){d.$apply()}))}var n={};n.side=d.psSide||"right",n.speed=d.psSpeed||"0.5",n.size=d.psSize||"300px",n.zindex=d.psZindex||1e3,n.className=d.psClass||"ng-pageslide",n.push="true"===d.psPush,n.container=d.psContainer||!1,n.keyListener="true"===d.psKeyListener,n.bodyClass=d.psBodyClass||!1,n.clickOutside="false"!==d.psClickOutside,n.autoClose=d.psAutoClose||!1,n.push=n.push&&!n.container,e.addClass(n.className);var o,p,q,r=!1;if(q=n.container?document.getElementById(n.container):document.body,h("closed"),p=e[0],"div"!==p.tagName.toLowerCase()&&"pageslide"!==p.tagName.toLowerCase())throw new Error("Pageslide can only be applied to <div> or <pageslide> elements");if(0===p.children.length)throw new Error("You need to have content inside the <pageslide>");o=a.element(p.children),q.appendChild(p),p.style.zIndex=n.zindex,p.style.position="fixed",p.style.transitionDuration=n.speed+"s",p.style.webkitTransitionDuration=n.speed+"s",p.style.height=n.size,p.style.transitionProperty="top, bottom, left, right",n.push&&(q.style.position="absolute",q.style.transitionDuration=n.speed+"s",q.style.webkitTransitionDuration=n.speed+"s",q.style.transitionProperty="top, bottom, left, right"),n.container&&(p.style.position="absolute",q.style.position="relative",q.style.overflow="hidden"),p.addEventListener("transitionend",i),j(),d.$watch("psOpen",function(a){a?l(p,n):k(p,n)}),d.$watch("psSize",function(a,b){b!==a&&(n.size=a,j())}),d.$on("$destroy",function(){p.parentNode===q&&(n.clickOutside&&b.off("touchend click",g),q.removeChild(p)),p.removeEventListener("transitionend",i)}),n.autoClose&&(d.$on("$locationChangeStart",function(){k(p,n)}),d.$on("$stateChangeStart",function(){k(p,n)}))}}}])});
/*! 10.1.14 */
/*! FileAPI 2.0.7 - BSD | git://github.com/mailru/FileAPI.git
 * FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
 */
!function(a){"use strict";var b=a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype,c=a.Blob&&function(){try{return Boolean(new Blob)}catch(a){return!1}}(),d=c&&a.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(a){return!1}}(),e=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,f=(c||e)&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&function(a){var b,f,g,h,i,j;for(b=a.split(",")[0].indexOf("base64")>=0?atob(a.split(",")[1]):decodeURIComponent(a.split(",")[1]),f=new ArrayBuffer(b.length),g=new Uint8Array(f),h=0;h<b.length;h+=1)g[h]=b.charCodeAt(h);return i=a.split(",")[0].split(":")[1].split(";")[0],c?new Blob([d?g:f],{type:i}):(j=new e,j.append(f),j.getBlob(i))};a.HTMLCanvasElement&&!b.toBlob&&(b.mozGetAsFile?b.toBlob=function(a,c,d){a(d&&b.toDataURL&&f?f(this.toDataURL(c,d)):this.mozGetAsFile("blob",c))}:b.toDataURL&&f&&(b.toBlob=function(a,b,c){a(f(this.toDataURL(b,c)))})),a.dataURLtoBlob=f}(window),function(a,b){"use strict";function c(a,b,c,d,e){var f={type:c.type||c,target:a,result:d};S(f,e),b(f)}function d(a){return u&&!!u.prototype["readAs"+a]}function e(a,e,f,g){if(Y.isBlob(a)&&d(f)){var h=new u;T(h,M,function j(b){var d=b.type;"progress"==d?c(a,e,b,b.target.result,{loaded:b.loaded,total:b.total}):"loadend"==d?(U(h,M,j),h=null):c(a,e,b,b.target.result)});try{g?h["readAs"+f](a,g):h["readAs"+f](a)}catch(i){c(a,e,"error",b,{error:i.toString()})}}else c(a,e,"error",b,{error:"FileReader_not_support_"+f})}function f(a,b){if(!a.type&&a.size%4096===0&&a.size<=102400)if(u)try{var c=new u;V(c,M,function(a){var d="error"!=a.type;b(d),d&&c.abort()}),c.readAsDataURL(a)}catch(d){b(!1)}else b(null);else b(!0)}function g(a){var b;return a.getAsEntry?b=a.getAsEntry():a.webkitGetAsEntry&&(b=a.webkitGetAsEntry()),b}function h(a,b){if(a)if(a.isFile)a.file(function(c){c.fullPath=a.fullPath,b(!1,[c])},function(a){b("FileError.code: "+a.code)});else if(a.isDirectory){var c=a.createReader(),d=[];c.readEntries(function(a){Y.afor(a,function(a,c){h(c,function(c,e){c?Y.log(c):d=d.concat(e),a?a():b(!1,d)})})},function(a){b("directory_reader: "+a)})}else h(g(a),b);else b("invalid entry")}function i(a){var b={};return R(a,function(a,c){a&&"object"==typeof a&&void 0===a.nodeType&&(a=S({},a)),b[c]=a}),b}function j(a){return F.test(a&&a.tagName)}function k(a){return(a.originalEvent||a||"").dataTransfer||{}}function l(a){var b;for(b in a)if(a.hasOwnProperty(b)&&!(a[b]instanceof Object||"overlay"===b||"filter"===b))return!0;return!1}var m=1,n=function(){},o=a.document,p=o.doctype||{},q=a.navigator.userAgent,r=a.createObjectURL&&a||a.URL&&URL.revokeObjectURL&&URL||a.webkitURL&&webkitURL,s=a.Blob,t=a.File,u=a.FileReader,v=a.FormData,w=a.XMLHttpRequest,x=a.jQuery,y=!(!(t&&u&&(a.Uint8Array||v||w.prototype.sendAsBinary))||/safari\//i.test(q)&&!/chrome\//i.test(q)&&/windows/i.test(q)),z=y&&"withCredentials"in new w,A=y&&!!s&&!!(s.prototype.webkitSlice||s.prototype.mozSlice||s.prototype.slice),B=a.dataURLtoBlob,C=/img/i,D=/canvas/i,E=/img|canvas/i,F=/input/i,G=/^data:[^,]+,/,H={}.toString,I=a.Math,J=function(b){return b=new a.Number(I.pow(1024,b)),b.from=function(a){return I.round(a*this)},b},K={},L=[],M="abort progress error load loadend",N="status statusText readyState response responseXML responseText responseBody".split(" "),O="currentTarget",P="preventDefault",Q=function(a){return a&&"length"in a},R=function(a,b,c){if(a)if(Q(a))for(var d=0,e=a.length;e>d;d++)d in a&&b.call(c,a[d],d,a);else for(var f in a)a.hasOwnProperty(f)&&b.call(c,a[f],f,a)},S=function(a){for(var b=arguments,c=1,d=function(b,c){a[c]=b};c<b.length;c++)R(b[c],d);return a},T=function(a,b,c){if(a){var d=Y.uid(a);K[d]||(K[d]={});var e=u&&a&&a instanceof u;R(b.split(/\s+/),function(b){x&&!e?x.event.add(a,b,c):(K[d][b]||(K[d][b]=[]),K[d][b].push(c),a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c)})}},U=function(a,b,c){if(a){var d=Y.uid(a),e=K[d]||{},f=u&&a&&a instanceof u;R(b.split(/\s+/),function(b){if(x&&!f)x.event.remove(a,b,c);else{for(var d=e[b]||[],g=d.length;g--;)if(d[g]===c){d.splice(g,1);break}a.addEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}})}},V=function(a,b,c){T(a,b,function d(e){U(a,b,d),c(e)})},W=function(b){return b.target||(b.target=a.event&&a.event.srcElement||o),3===b.target.nodeType&&(b.target=b.target.parentNode),b},X=function(a){var b=o.createElement("input");return b.setAttribute("type","file"),a in b},Y={version:"2.0.7",cors:!1,html5:!0,media:!1,formData:!0,multiPassResize:!0,debug:!1,pingUrl:!1,multiFlash:!1,flashAbortTimeout:0,withCredentials:!0,staticPath:"./dist/",flashUrl:0,flashImageUrl:0,postNameConcat:function(a,b){return a+(null!=b?"["+b+"]":"")},ext2mime:{jpg:"image/jpeg",tif:"image/tiff",txt:"text/plain"},accept:{"image/*":"art bm bmp dwg dxf cbr cbz fif fpx gif ico iefs jfif jpe jpeg jpg jps jut mcf nap nif pbm pcx pgm pict pm png pnm qif qtif ras rast rf rp svf tga tif tiff xbm xbm xpm xwd","audio/*":"m4a flac aac rm mpa wav wma ogg mp3 mp2 m3u mod amf dmf dsm far gdm imf it m15 med okt s3m stm sfx ult uni xm sid ac3 dts cue aif aiff wpl ape mac mpc mpp shn wv nsf spc gym adplug adx dsp adp ymf ast afc hps xs","video/*":"m4v 3gp nsv ts ty strm rm rmvb m3u ifo mov qt divx xvid bivx vob nrg img iso pva wmv asf asx ogm m2v avi bin dat dvr-ms mpg mpeg mp4 mkv avc vp3 svq3 nuv viv dv fli flv wpl"},uploadRetry:0,networkDownRetryTimeout:5e3,chunkSize:0,chunkUploadRetry:0,chunkNetworkDownRetryTimeout:2e3,KB:J(1),MB:J(2),GB:J(3),TB:J(4),EMPTY_PNG:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=",expando:"fileapi"+(new Date).getTime(),uid:function(a){return a?a[Y.expando]=a[Y.expando]||Y.uid():(++m,Y.expando+m)},log:function(){Y.debug&&Y._supportConsoleLog&&(Y._supportConsoleLogApply?console.log.apply(console,arguments):console.log([].join.call(arguments," ")))},newImage:function(a,b){var c=o.createElement("img");return b&&Y.event.one(c,"error load",function(a){b("error"==a.type,c),c=null}),c.src=a,c},getXHR:function(){var b;if(w)b=new w;else if(a.ActiveXObject)try{b=new ActiveXObject("MSXML2.XMLHttp.3.0")}catch(c){b=new ActiveXObject("Microsoft.XMLHTTP")}return b},isArray:Q,support:{dnd:z&&"ondrop"in o.createElement("div"),cors:z,html5:y,chunked:A,dataURI:!0,accept:X("accept"),multiple:X("multiple")},event:{on:T,off:U,one:V,fix:W},throttle:function(b,c){var d,e;return function(){e=arguments,d||(b.apply(a,e),d=setTimeout(function(){d=0,b.apply(a,e)},c))}},F:function(){},parseJSON:function(b){var c;return c=a.JSON&&JSON.parse?JSON.parse(b):new Function("return ("+b.replace(/([\r\n])/g,"\\$1")+");")()},trim:function(a){return a=String(a),a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},defer:function(){var a,c,d=[],e={resolve:function(b,f){for(e.resolve=n,c=b||!1,a=f;f=d.shift();)f(c,a)},then:function(e){c!==b?e(c,a):d.push(e)}};return e},queue:function(a){var b=0,c=0,d=!1,e=!1,f={inc:function(){c++},next:function(){b++,setTimeout(f.check,0)},check:function(){b>=c&&!d&&f.end()},isFail:function(){return d},fail:function(){!d&&a(d=!0)},end:function(){e||(e=!0,a())}};return f},each:R,afor:function(a,b){var c=0,d=a.length;Q(a)&&d--?!function e(){b(d!=c&&e,a[c],c++)}():b(!1)},extend:S,isFile:function(a){return"[object File]"===H.call(a)},isBlob:function(a){return this.isFile(a)||"[object Blob]"===H.call(a)},isCanvas:function(a){return a&&D.test(a.nodeName)},getFilesFilter:function(a){return a="string"==typeof a?a:a.getAttribute&&a.getAttribute("accept")||"",a?new RegExp("("+a.replace(/\./g,"\\.").replace(/,/g,"|")+")$","i"):/./},readAsDataURL:function(a,b){Y.isCanvas(a)?c(a,b,"load",Y.toDataURL(a)):e(a,b,"DataURL")},readAsBinaryString:function(a,b){d("BinaryString")?e(a,b,"BinaryString"):e(a,function(a){if("load"==a.type)try{a.result=Y.toBinaryString(a.result)}catch(c){a.type="error",a.message=c.toString()}b(a)},"DataURL")},readAsArrayBuffer:function(a,b){e(a,b,"ArrayBuffer")},readAsText:function(a,b,c){c||(c=b,b="utf-8"),e(a,c,"Text",b)},toDataURL:function(a,b){return"string"==typeof a?a:a.toDataURL?a.toDataURL(b||"image/png"):void 0},toBinaryString:function(b){return a.atob(Y.toDataURL(b).replace(G,""))},readAsImage:function(a,d,e){if(Y.isFile(a))if(r){var f=r.createObjectURL(a);f===b?c(a,d,"error"):Y.readAsImage(f,d,e)}else Y.readAsDataURL(a,function(b){"load"==b.type?Y.readAsImage(b.result,d,e):(e||"error"==b.type)&&c(a,d,b,null,{loaded:b.loaded,total:b.total})});else if(Y.isCanvas(a))c(a,d,"load",a);else if(C.test(a.nodeName))if(a.complete)c(a,d,"load",a);else{var g="error abort load";V(a,g,function i(b){"load"==b.type&&r&&r.revokeObjectURL(a.src),U(a,g,i),c(a,d,b,a)})}else if(a.iframe)c(a,d,{type:"error"});else{var h=Y.newImage(a.dataURL||a);Y.readAsImage(h,d,e)}},checkFileObj:function(a){var b={},c=Y.accept;return"object"==typeof a?b=a:b.name=(a+"").split(/\\|\//g).pop(),null==b.type&&(b.type=b.name.split(".").pop()),R(c,function(a,c){a=new RegExp(a.replace(/\s/g,"|"),"i"),(a.test(b.type)||Y.ext2mime[b.type])&&(b.type=Y.ext2mime[b.type]||c.split("/")[0]+"/"+b.type)}),b},getDropFiles:function(a,b){var c=[],d=k(a),e=Q(d.items)&&d.items[0]&&g(d.items[0]),i=Y.queue(function(){b(c)});R((e?d.items:d.files)||[],function(a){i.inc();try{e?h(a,function(a,b){a?Y.log("[err] getDropFiles:",a):c.push.apply(c,b),i.next()}):f(a,function(b){b&&c.push(a),i.next()})}catch(b){i.next(),Y.log("[err] getDropFiles: ",b)}}),i.check()},getFiles:function(a,b,c){var d=[];return c?(Y.filterFiles(Y.getFiles(a),b,c),null):(a.jquery&&(a.each(function(){d=d.concat(Y.getFiles(this))}),a=d,d=[]),"string"==typeof b&&(b=Y.getFilesFilter(b)),a.originalEvent?a=W(a.originalEvent):a.srcElement&&(a=W(a)),a.dataTransfer?a=a.dataTransfer:a.target&&(a=a.target),a.files?(d=a.files,y||(d[0].blob=a,d[0].iframe=!0)):!y&&j(a)?Y.trim(a.value)&&(d=[Y.checkFileObj(a.value)],d[0].blob=a,d[0].iframe=!0):Q(a)&&(d=a),Y.filter(d,function(a){return!b||b.test(a.name)}))},getTotalSize:function(a){for(var b=0,c=a&&a.length;c--;)b+=a[c].size;return b},getInfo:function(a,b){var c={},d=L.concat();Y.isFile(a)?!function e(){var f=d.shift();f?f.test(a.type)?f(a,function(a,d){a?b(a):(S(c,d),e())}):e():b(!1,c)}():b("not_support_info",c)},addInfoReader:function(a,b){b.test=function(b){return a.test(b)},L.push(b)},filter:function(a,b){for(var c,d=[],e=0,f=a.length;f>e;e++)e in a&&(c=a[e],b.call(c,c,e,a)&&d.push(c));return d},filterFiles:function(a,b,c){if(a.length){var d,e=a.concat(),f=[],g=[];!function h(){e.length?(d=e.shift(),Y.getInfo(d,function(a,c){(b(d,a?!1:c)?f:g).push(d),h()})):c(f,g)}()}else c([],a)},upload:function(a){a=S({jsonp:"callback",prepare:Y.F,beforeupload:Y.F,upload:Y.F,fileupload:Y.F,fileprogress:Y.F,filecomplete:Y.F,progress:Y.F,complete:Y.F,pause:Y.F,imageOriginal:!0,chunkSize:Y.chunkSize,chunkUploadRetry:Y.chunkUploadRetry,uploadRetry:Y.uploadRetry},a),a.imageAutoOrientation&&!a.imageTransform&&(a.imageTransform={rotate:"auto"});var b,c=new Y.XHR(a),d=this._getFilesDataArray(a.files),e=this,f=0,g=0,h=!1;return R(d,function(a){f+=a.size}),c.files=[],R(d,function(a){c.files.push(a.file)}),c.total=f,c.loaded=0,c.filesLeft=d.length,a.beforeupload(c,a),b=function(){var j=d.shift(),k=j&&j.file,l=!1,m=i(a);if(c.filesLeft=d.length,k&&k.name===Y.expando&&(k=null,Y.log("[warn] FileAPI.upload() — called without files")),("abort"!=c.statusText||c.current)&&j){if(h=!1,c.currentFile=k,k&&a.prepare(k,m)===!1)return void b.call(e);m.file=k,e._getFormData(m,j,function(h){g||a.upload(c,a);var i=new Y.XHR(S({},m,{upload:k?function(){a.fileupload(k,i,m)}:n,progress:k?function(b){l||(l=b.loaded===b.total,a.fileprogress({type:"progress",total:j.total=b.total,loaded:j.loaded=b.loaded},k,i,m),a.progress({type:"progress",total:f,loaded:c.loaded=g+j.size*(b.loaded/b.total)|0},k,i,m))}:n,complete:function(d){R(N,function(a){c[a]=i[a]}),k&&(j.total=j.total||j.size,j.loaded=j.total,d||(this.progress(j),l=!0,g+=j.size,c.loaded=g),a.filecomplete(d,i,k,m)),setTimeout(function(){b.call(e)},0)}}));c.abort=function(a){a||(d.length=0),this.current=a,i.abort()},i.send(h)})}else{var o=200==c.status||201==c.status||204==c.status;a.complete(o?!1:c.statusText||"error",c,a),h=!0}},setTimeout(b,0),c.append=function(a,g){a=Y._getFilesDataArray([].concat(a)),R(a,function(a){f+=a.size,c.files.push(a.file),g?d.unshift(a):d.push(a)}),c.statusText="",h&&b.call(e)},c.remove=function(a){for(var b,c=d.length;c--;)d[c].file==a&&(b=d.splice(c,1),f-=b.size);return b},c},_getFilesDataArray:function(a){var b=[],c={};if(j(a)){var d=Y.getFiles(a);c[a.name||"file"]=null!==a.getAttribute("multiple")?d:d[0]}else Q(a)&&j(a[0])?R(a,function(a){c[a.name||"file"]=Y.getFiles(a)}):c=a;return R(c,function e(a,c){Q(a)?R(a,function(a){e(a,c)}):a&&(a.name||a.image)&&b.push({name:c,file:a,size:a.size,total:a.size,loaded:0})}),b.length||b.push({file:{name:Y.expando}}),b},_getFormData:function(a,b,c){var d=b.file,e=b.name,f=d.name,g=d.type,h=Y.support.transform&&a.imageTransform,i=new Y.Form,j=Y.queue(function(){c(i)}),k=h&&l(h),m=Y.postNameConcat;R(a.data,function n(a,b){"object"==typeof a?R(a,function(a,c){n(a,m(b,c))}):i.append(b,a)}),function o(b){b.image?(j.inc(),b.toData(function(a,b){f=f||(new Date).getTime()+".png",o(b),j.next()})):Y.Image&&h&&(/^image/.test(b.type)||E.test(b.nodeName))?(j.inc(),k&&(h=[h]),Y.Image.transform(b,h,a.imageAutoOrientation,function(c,d){if(k&&!c)B||Y.flashEngine||(i.multipart=!0),i.append(e,d[0],f,h[0].type||g);else{var l=0;c||R(d,function(a,b){B||Y.flashEngine||(i.multipart=!0),h[b].postName||(l=1),i.append(h[b].postName||m(e,b),a,f,h[b].type||g)}),(c||a.imageOriginal)&&i.append(m(e,l?"original":null),b,f,g)}j.next()})):f!==Y.expando&&i.append(e,b,f)}(d),j.check()},reset:function(a,b){var c,d;return x?(d=x(a).clone(!0).insertBefore(a).val("")[0],b||x(a).remove()):(c=a.parentNode,d=c.insertBefore(a.cloneNode(!0),a),d.value="",b||c.removeChild(a),R(K[Y.uid(a)],function(b,c){R(b,function(b){U(a,c,b),T(d,c,b)})})),d},load:function(a,b){var c=Y.getXHR();return c?(c.open("GET",a,!0),c.overrideMimeType&&c.overrideMimeType("text/plain; charset=x-user-defined"),T(c,"progress",function(a){a.lengthComputable&&b({type:a.type,loaded:a.loaded,total:a.total},c)}),c.onreadystatechange=function(){if(4==c.readyState)if(c.onreadystatechange=null,200==c.status){a=a.split("/");var d={name:a[a.length-1],size:c.getResponseHeader("Content-Length"),type:c.getResponseHeader("Content-Type")};d.dataURL="data:"+d.type+";base64,"+Y.encode64(c.responseBody||c.responseText),b({type:"load",result:d},c)}else b({type:"error"},c)},c.send(null)):b({type:"error"}),c},encode64:function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="",d=0;for("string"!=typeof a&&(a=String(a));d<a.length;){var e,f,g=255&a.charCodeAt(d++),h=255&a.charCodeAt(d++),i=255&a.charCodeAt(d++),j=g>>2,k=(3&g)<<4|h>>4;isNaN(h)?e=f=64:(e=(15&h)<<2|i>>6,f=isNaN(i)?64:63&i),c+=b.charAt(j)+b.charAt(k)+b.charAt(e)+b.charAt(f)}return c}};Y.addInfoReader(/^image/,function(a,b){if(!a.__dimensions){var c=a.__dimensions=Y.defer();Y.readAsImage(a,function(a){var b=a.target;c.resolve("load"==a.type?!1:"error",{width:b.width,height:b.height}),b.src=Y.EMPTY_PNG,b=null})}a.__dimensions.then(b)}),Y.event.dnd=function(a,b,c){var d,e;c||(c=b,b=Y.F),u?(T(a,"dragenter dragleave dragover",b.ff=b.ff||function(a){for(var c=k(a).types,f=c&&c.length,g=!1;f--;)if(~c[f].indexOf("File")){a[P](),e!==a.type&&(e=a.type,"dragleave"!=e&&b.call(a[O],!0,a),g=!0);break}g&&(clearTimeout(d),d=setTimeout(function(){b.call(a[O],"dragleave"!=e,a)},50))}),T(a,"drop",c.ff=c.ff||function(a){a[P](),e=0,b.call(a[O],!1,a),Y.getDropFiles(a,function(b){c.call(a[O],b,a)})})):Y.log("Drag'n'Drop -- not supported")},Y.event.dnd.off=function(a,b,c){U(a,"dragenter dragleave dragover",b.ff),U(a,"drop",c.ff)},x&&!x.fn.dnd&&(x.fn.dnd=function(a,b){return this.each(function(){Y.event.dnd(this,a,b)})},x.fn.offdnd=function(a,b){return this.each(function(){Y.event.dnd.off(this,a,b)})}),a.FileAPI=S(Y,a.FileAPI),Y.log("FileAPI: "+Y.version),Y.log("protocol: "+a.location.protocol),Y.log("doctype: ["+p.name+"] "+p.publicId+" "+p.systemId),R(o.getElementsByTagName("meta"),function(a){/x-ua-compatible/i.test(a.getAttribute("http-equiv"))&&Y.log("meta.http-equiv: "+a.getAttribute("content"))});try{Y._supportConsoleLog=!!console.log,Y._supportConsoleLogApply=!!console.log.apply}catch(Z){}Y.flashUrl||(Y.flashUrl=Y.staticPath+"FileAPI.flash.swf"),Y.flashImageUrl||(Y.flashImageUrl=Y.staticPath+"FileAPI.flash.image.swf"),Y.flashWebcamUrl||(Y.flashWebcamUrl=Y.staticPath+"FileAPI.flash.camera.swf")}(window,void 0),function(a,b,c){"use strict";function d(b){if(b instanceof d){var c=new d(b.file);return a.extend(c.matrix,b.matrix),c}return this instanceof d?(this.file=b,this.size=b.size||100,void(this.matrix={sx:0,sy:0,sw:0,sh:0,dx:0,dy:0,dw:0,dh:0,resize:0,deg:0,quality:1,filter:0})):new d(b)}var e=Math.min,f=Math.round,g=function(){return b.createElement("canvas")},h=!1,i={8:270,3:180,6:90,7:270,4:180,5:90};try{h=g().toDataURL("image/png").indexOf("data:image/png")>-1}catch(j){}d.prototype={image:!0,constructor:d,set:function(b){return a.extend(this.matrix,b),this},crop:function(a,b,d,e){return d===c&&(d=a,e=b,a=b=0),this.set({sx:a,sy:b,sw:d,sh:e||d})},resize:function(a,b,c){return/min|max/.test(b)&&(c=b,b=a),this.set({dw:a,dh:b||a,resize:c})},preview:function(a,b){return this.resize(a,b||a,"preview")},rotate:function(a){return this.set({deg:a})},filter:function(a){return this.set({filter:a})},overlay:function(a){return this.set({overlay:a})},clone:function(){return new d(this)},_load:function(b,c){var d=this;/img|video/i.test(b.nodeName)?c.call(d,null,b):a.readAsImage(b,function(a){c.call(d,"load"!=a.type,a.result)})},_apply:function(b,c){var f,h=g(),i=this.getMatrix(b),j=h.getContext("2d"),k=b.videoWidth||b.width,l=b.videoHeight||b.height,m=i.deg,n=i.dw,o=i.dh,p=k,q=l,r=i.filter,s=b,t=i.overlay,u=a.queue(function(){b.src=a.EMPTY_PNG,c(!1,h)}),v=a.renderImageToCanvas;for(m-=360*Math.floor(m/360),b._type=this.file.type;i.multipass&&e(p/n,q/o)>2;)p=p/2+.5|0,q=q/2+.5|0,f=g(),f.width=p,f.height=q,s!==b?(v(f,s,0,0,s.width,s.height,0,0,p,q),s=f):(s=f,v(s,b,i.sx,i.sy,i.sw,i.sh,0,0,p,q),i.sx=i.sy=i.sw=i.sh=0);h.width=m%180?o:n,h.height=m%180?n:o,h.type=i.type,h.quality=i.quality,j.rotate(m*Math.PI/180),v(j.canvas,s,i.sx,i.sy,i.sw||s.width,i.sh||s.height,180==m||270==m?-n:0,90==m||180==m?-o:0,n,o),n=h.width,o=h.height,t&&a.each([].concat(t),function(b){u.inc();var c=new window.Image,d=function(){var e=0|b.x,f=0|b.y,g=b.w||c.width,h=b.h||c.height,i=b.rel;e=1==i||4==i||7==i?(n-g+e)/2:2==i||5==i||8==i?n-(g+e):e,f=3==i||4==i||5==i?(o-h+f)/2:i>=6?o-(h+f):f,a.event.off(c,"error load abort",d);try{j.globalAlpha=b.opacity||1,j.drawImage(c,e,f,g,h)}catch(k){}u.next()};a.event.on(c,"error load abort",d),c.src=b.src,c.complete&&d()}),r&&(u.inc(),d.applyFilter(h,r,u.next)),u.check()},getMatrix:function(b){var c=a.extend({},this.matrix),d=c.sw=c.sw||b.videoWidth||b.naturalWidth||b.width,g=c.sh=c.sh||b.videoHeight||b.naturalHeight||b.height,h=c.dw=c.dw||d,i=c.dh=c.dh||g,j=d/g,k=h/i,l=c.resize;if("preview"==l){if(h!=d||i!=g){var m,n;k>=j?(m=d,n=m/k):(n=g,m=n*k),(m!=d||n!=g)&&(c.sx=~~((d-m)/2),c.sy=~~((g-n)/2),d=m,g=n)}}else l&&(d>h||g>i?"min"==l?(h=f(k>j?e(d,h):i*j),i=f(k>j?h/j:e(g,i))):(h=f(j>=k?e(d,h):i*j),i=f(j>=k?h/j:e(g,i))):(h=d,i=g));return c.sw=d,c.sh=g,c.dw=h,c.dh=i,c.multipass=a.multiPassResize,c},_trans:function(b){this._load(this.file,function(c,d){if(c)b(c);else try{this._apply(d,b)}catch(c){a.log("[err] FileAPI.Image.fn._apply:",c),b(c)}})},get:function(b){if(a.support.transform){var c=this,d=c.matrix;"auto"==d.deg?a.getInfo(c.file,function(a,e){d.deg=i[e&&e.exif&&e.exif.Orientation]||0,c._trans(b)}):c._trans(b)}else b("not_support_transform");return this},toData:function(a){return this.get(a)}},d.exifOrientation=i,d.transform=function(b,e,f,g){function h(h,i){var j={},k=a.queue(function(a){g(a,j)});h?k.fail():a.each(e,function(a,e){if(!k.isFail()){var g=new d(i.nodeType?i:b),h="function"==typeof a;if(h?a(i,g):a.width?g[a.preview?"preview":"resize"](a.width,a.height,a.strategy):a.maxWidth&&(i.width>a.maxWidth||i.height>a.maxHeight)&&g.resize(a.maxWidth,a.maxHeight,"max"),a.crop){var l=a.crop;g.crop(0|l.x,0|l.y,l.w||l.width,l.h||l.height)}a.rotate===c&&f&&(a.rotate="auto"),g.set({type:g.matrix.type||a.type||b.type||"image/png"}),h||g.set({deg:a.rotate,overlay:a.overlay,filter:a.filter,quality:a.quality||1}),k.inc(),g.toData(function(a,b){a?k.fail():(j[e]=b,k.next())})}})}b.width?h(!1,b):a.getInfo(b,h)},a.each(["TOP","CENTER","BOTTOM"],function(b,c){a.each(["LEFT","CENTER","RIGHT"],function(a,e){d[b+"_"+a]=3*c+e,d[a+"_"+b]=3*c+e})}),d.toCanvas=function(a){var c=b.createElement("canvas");return c.width=a.videoWidth||a.width,c.height=a.videoHeight||a.height,c.getContext("2d").drawImage(a,0,0),c},d.fromDataURL=function(b,c,d){var e=a.newImage(b);a.extend(e,c),d(e)},d.applyFilter=function(b,c,e){"function"==typeof c?c(b,e):window.Caman&&window.Caman("IMG"==b.tagName?d.toCanvas(b):b,function(){"string"==typeof c?this[c]():a.each(c,function(a,b){this[b](a)},this),this.render(e)})},a.renderImageToCanvas=function(b,c,d,e,f,g,h,i,j,k){try{return b.getContext("2d").drawImage(c,d,e,f,g,h,i,j,k)}catch(l){throw a.log("renderImageToCanvas failed"),l}},a.support.canvas=a.support.transform=h,a.Image=d}(FileAPI,document),function(a){"use strict";a(FileAPI)}(function(a){"use strict";if(window.navigator&&window.navigator.platform&&/iP(hone|od|ad)/.test(window.navigator.platform)){var b=a.renderImageToCanvas;a.detectSubsampling=function(a){var b,c;return a.width*a.height>1048576?(b=document.createElement("canvas"),b.width=b.height=1,c=b.getContext("2d"),c.drawImage(a,-a.width+1,0),0===c.getImageData(0,0,1,1).data[3]):!1},a.detectVerticalSquash=function(a,b){var c,d,e,f,g,h=a.naturalHeight||a.height,i=document.createElement("canvas"),j=i.getContext("2d");for(b&&(h/=2),i.width=1,i.height=h,j.drawImage(a,0,0),c=j.getImageData(0,0,1,h).data,d=0,e=h,f=h;f>d;)g=c[4*(f-1)+3],0===g?e=f:d=f,f=e+d>>1;return f/h||1},a.renderImageToCanvas=function(c,d,e,f,g,h,i,j,k,l){if("image/jpeg"===d._type){var m,n,o,p,q=c.getContext("2d"),r=document.createElement("canvas"),s=1024,t=r.getContext("2d");if(r.width=s,r.height=s,q.save(),m=a.detectSubsampling(d),m&&(e/=2,f/=2,g/=2,h/=2),n=a.detectVerticalSquash(d,m),m||1!==n){for(f*=n,k=Math.ceil(s*k/g),l=Math.ceil(s*l/h/n),j=0,p=0;h>p;){for(i=0,o=0;g>o;)t.clearRect(0,0,s,s),t.drawImage(d,e,f,g,h,-o,-p,g,h),q.drawImage(r,0,0,s,s,i,j,k,l),o+=s,i+=k;p+=s,j+=l}return q.restore(),c}}return b(c,d,e,f,g,h,i,j,k,l)}}}),function(a,b){"use strict";function c(b,c,d){var e=b.blob,f=b.file;if(f){if(!e.toDataURL)return void a.readAsBinaryString(e,function(a){"load"==a.type&&c(b,a.result)});var g={"image/jpeg":".jpe?g","image/png":".png"},h=g[b.type]?b.type:"image/png",i=g[h]||".png",j=e.quality||1;f.match(new RegExp(i+"$","i"))||(f+=i.replace("?","")),b.file=f,b.type=h,!d&&e.toBlob?e.toBlob(function(a){c(b,a)},h,j):c(b,a.toBinaryString(e.toDataURL(h,j)))}else c(b,e)}var d=b.document,e=b.FormData,f=function(){this.items=[]},g=b.encodeURIComponent;f.prototype={append:function(a,b,c,d){this.items.push({name:a,blob:b&&b.blob||(void 0==b?"":b),file:b&&(c||b.name),type:b&&(d||b.type)})},each:function(a){for(var b=0,c=this.items.length;c>b;b++)a.call(this,this.items[b])},toData:function(b,c){c._chunked=a.support.chunked&&c.chunkSize>0&&1==a.filter(this.items,function(a){return a.file}).length,a.support.html5?a.formData&&!this.multipart&&e?c._chunked?(a.log("FileAPI.Form.toPlainData"),this.toPlainData(b)):(a.log("FileAPI.Form.toFormData"),this.toFormData(b)):(a.log("FileAPI.Form.toMultipartData"),this.toMultipartData(b)):(a.log("FileAPI.Form.toHtmlData"),this.toHtmlData(b))},_to:function(b,c,d,e){var f=a.queue(function(){c(b)});this.each(function(a){d(a,b,f,e)}),f.check()},toHtmlData:function(b){this._to(d.createDocumentFragment(),b,function(b,c){var e,f=b.blob;b.file?(a.reset(f,!0),f.name=b.name,f.disabled=!1,c.appendChild(f)):(e=d.createElement("input"),e.name=b.name,e.type="hidden",e.value=f,c.appendChild(e))})},toPlainData:function(a){this._to({},a,function(a,b,d){a.file&&(b.type=a.file),a.blob.toBlob?(d.inc(),c(a,function(a,c){b.name=a.name,b.file=c,b.size=c.length,b.type=a.type,d.next()})):a.file?(b.name=a.blob.name,b.file=a.blob,b.size=a.blob.size,b.type=a.type):(b.params||(b.params=[]),b.params.push(g(a.name)+"="+g(a.blob))),b.start=-1,b.end=b.file&&b.file.FileAPIReadPosition||-1,b.retry=0})},toFormData:function(a){this._to(new e,a,function(a,b,d){a.blob&&a.blob.toBlob?(d.inc(),c(a,function(a,c){b.append(a.name,c,a.file),d.next()})):a.file?b.append(a.name,a.blob,a.file):b.append(a.name,a.blob),a.file&&b.append("_"+a.name,a.file)})},toMultipartData:function(b){this._to([],b,function(a,b,d,e){d.inc(),c(a,function(a,c){b.push("--_"+e+('\r\nContent-Disposition: form-data; name="'+a.name+'"'+(a.file?'; filename="'+g(a.file)+'"':"")+(a.file?"\r\nContent-Type: "+(a.type||"application/octet-stream"):"")+"\r\n\r\n"+(a.file?c:g(c))+"\r\n")),d.next()},!0)},a.expando)}},a.Form=f}(FileAPI,window),function(a,b){"use strict";var c=function(){},d=a.document,e=function(a){this.uid=b.uid(),this.xhr={abort:c,getResponseHeader:c,getAllResponseHeaders:c},this.options=a},f={"":1,XML:1,Text:1,Body:1};e.prototype={status:0,statusText:"",constructor:e,getResponseHeader:function(a){return this.xhr.getResponseHeader(a)},getAllResponseHeaders:function(){return this.xhr.getAllResponseHeaders()||{}},end:function(d,e){var f=this,g=f.options;f.end=f.abort=c,f.status=d,e&&(f.statusText=e),b.log("xhr.end:",d,e),g.complete(200==d||201==d?!1:f.statusText||"unknown",f),f.xhr&&f.xhr.node&&setTimeout(function(){var b=f.xhr.node;try{b.parentNode.removeChild(b)}catch(c){}try{delete a[f.uid]}catch(c){}a[f.uid]=f.xhr.node=null},9)},abort:function(){this.end(0,"abort"),this.xhr&&(this.xhr.aborted=!0,this.xhr.abort())},send:function(a){var b=this,c=this.options;a.toData(function(a){c.upload(c,b),b._send.call(b,c,a)},c)},_send:function(c,e){var g,h=this,i=h.uid,j=h.uid+"Load",k=c.url;if(b.log("XHR._send:",e),c.cache||(k+=(~k.indexOf("?")?"&":"?")+b.uid()),e.nodeName){var l=c.jsonp;k=k.replace(/([a-z]+)=(\?)/i,"$1="+i),c.upload(c,h);var m=function(a){if(~k.indexOf(a.origin))try{var c=b.parseJSON(a.data);c.id==i&&n(c.status,c.statusText,c.response)}catch(d){n(0,d.message)}},n=a[i]=function(c,d,e){h.readyState=4,h.responseText=e,h.end(c,d),b.event.off(a,"message",m),a[i]=g=p=a[j]=null};h.xhr.abort=function(){try{p.stop?p.stop():p.contentWindow.stop?p.contentWindow.stop():p.contentWindow.document.execCommand("Stop")}catch(a){}n(0,"abort")},b.event.on(a,"message",m),a[j]=function(){try{var a=p.contentWindow,c=a.document,d=a.result||b.parseJSON(c.body.innerHTML);n(d.status,d.statusText,d.response)}catch(e){b.log("[transport.onload]",e)}},g=d.createElement("div"),g.innerHTML='<form target="'+i+'" action="'+k+'" method="POST" enctype="multipart/form-data" style="position: absolute; top: -1000px; overflow: hidden; width: 1px; height: 1px;"><iframe name="'+i+'" src="javascript:false;" onload="'+j+'()"></iframe>'+(l&&c.url.indexOf("=?")<0?'<input value="'+i+'" name="'+l+'" type="hidden"/>':"")+"</form>";var o=g.getElementsByTagName("form")[0],p=g.getElementsByTagName("iframe")[0];o.appendChild(e),b.log(o.parentNode.innerHTML),d.body.appendChild(g),h.xhr.node=g,h.readyState=2,o.submit(),o=null}else{if(k=k.replace(/([a-z]+)=(\?)&?/i,""),this.xhr&&this.xhr.aborted)return void b.log("Error: already aborted");if(g=h.xhr=b.getXHR(),e.params&&(k+=(k.indexOf("?")<0?"?":"&")+e.params.join("&")),g.open("POST",k,!0),b.withCredentials&&(g.withCredentials="true"),c.headers&&c.headers["X-Requested-With"]||g.setRequestHeader("X-Requested-With","XMLHttpRequest"),b.each(c.headers,function(a,b){g.setRequestHeader(b,a)}),c._chunked){g.upload&&g.upload.addEventListener("progress",b.throttle(function(a){e.retry||c.progress({type:a.type,total:e.size,loaded:e.start+a.loaded,totalSize:e.size},h,c)},100),!1),g.onreadystatechange=function(){var a=parseInt(g.getResponseHeader("X-Last-Known-Byte"),10);if(h.status=g.status,h.statusText=g.statusText,h.readyState=g.readyState,4==g.readyState){try{for(var d in f)h["response"+d]=g["response"+d]}catch(i){}if(g.onreadystatechange=null,!g.status||g.status-201>0)if(b.log("Error: "+g.status),(!g.status&&!g.aborted||500==g.status||416==g.status)&&++e.retry<=c.chunkUploadRetry){var j=g.status?0:b.chunkNetworkDownRetryTimeout;c.pause(e.file,c),b.log("X-Last-Known-Byte: "+a),a?e.end=a:(e.end=e.start-1,416==g.status&&(e.end=e.end-c.chunkSize)),setTimeout(function(){h._send(c,e)},j)}else h.end(g.status);else e.retry=0,e.end==e.size-1?h.end(g.status):(b.log("X-Last-Known-Byte: "+a),a&&(e.end=a),e.file.FileAPIReadPosition=e.end,setTimeout(function(){h._send(c,e)},0));g=null}},e.start=e.end+1,e.end=Math.max(Math.min(e.start+c.chunkSize,e.size)-1,e.start);var q=e.file,r=(q.slice||q.mozSlice||q.webkitSlice).call(q,e.start,e.end+1);e.size&&!r.size?setTimeout(function(){h.end(-1)}):(g.setRequestHeader("Content-Range","bytes "+e.start+"-"+e.end+"/"+e.size),g.setRequestHeader("Content-Disposition","attachment; filename="+encodeURIComponent(e.name)),g.setRequestHeader("Content-Type",e.type||"application/octet-stream"),g.send(r)),q=r=null}else if(g.upload&&g.upload.addEventListener("progress",b.throttle(function(a){c.progress(a,h,c)},100),!1),g.onreadystatechange=function(){if(h.status=g.status,h.statusText=g.statusText,h.readyState=g.readyState,4==g.readyState){for(var a in f)h["response"+a]=g["response"+a];if(g.onreadystatechange=null,!g.status||g.status>201)if(b.log("Error: "+g.status),(!g.status&&!g.aborted||500==g.status)&&(c.retry||0)<c.uploadRetry){c.retry=(c.retry||0)+1;var d=b.networkDownRetryTimeout;c.pause(c.file,c),setTimeout(function(){h._send(c,e)},d)}else h.end(g.status);else h.end(g.status);g=null}},b.isArray(e)){g.setRequestHeader("Content-Type","multipart/form-data; boundary=_"+b.expando);var s=e.join("")+"--_"+b.expando+"--";if(g.sendAsBinary)g.sendAsBinary(s);else{var t=Array.prototype.map.call(s,function(a){return 255&a.charCodeAt(0)});g.send(new Uint8Array(t).buffer)}}else g.send(e)}}},b.XHR=e}(window,FileAPI),function(a,b){"use strict";function c(a){return a>=0?a+"px":a}function d(a){var b,c=f.createElement("canvas"),d=!1;try{b=c.getContext("2d"),b.drawImage(a,0,0,1,1),d=255!=b.getImageData(0,0,1,1).data[4]}catch(e){}return d}var e=a.URL||a.webkitURL,f=a.document,g=a.navigator,h=g.getUserMedia||g.webkitGetUserMedia||g.mozGetUserMedia||g.msGetUserMedia,i=!!h;b.support.media=i;var j=function(a){this.video=a};j.prototype={isActive:function(){return!!this._active},start:function(a){var b,c,f=this,i=f.video,j=function(d){f._active=!d,clearTimeout(c),clearTimeout(b),a&&a(d,f)};h.call(g,{video:!0},function(a){f.stream=a,i.src=e.createObjectURL(a),b=setInterval(function(){d(i)&&j(null)},1e3),c=setTimeout(function(){j("timeout")},5e3),i.play()},j)},stop:function(){try{this._active=!1,this.video.pause(),this.stream.stop()}catch(a){}},shot:function(){return new k(this.video)}},j.get=function(a){return new j(a.firstChild)},j.publish=function(d,e,g){"function"==typeof e&&(g=e,e={}),e=b.extend({},{width:"100%",height:"100%",start:!0},e),d.jquery&&(d=d[0]);var h=function(a){if(a)g(a);else{var b=j.get(d);e.start?b.start(g):g(null,b)}};if(d.style.width=c(e.width),d.style.height=c(e.height),b.html5&&i){var k=f.createElement("video");k.style.width=c(e.width),k.style.height=c(e.height),a.jQuery?jQuery(d).empty():d.innerHTML="",d.appendChild(k),h()}else j.fallback(d,e,h)},j.fallback=function(a,b,c){c("not_support_camera")};var k=function(a){var c=a.nodeName?b.Image.toCanvas(a):a,d=b.Image(c);return d.type="image/png",d.width=c.width,d.height=c.height,d.size=c.width*c.height*4,d};j.Shot=k,b.Camera=j}(window,FileAPI),function(a,b,c){"use strict";var d=a.document,e=a.location,f=a.navigator,g=c.each;c.support.flash=function(){var b=f.mimeTypes,d=!1;if(f.plugins&&"object"==typeof f.plugins["Shockwave Flash"])d=f.plugins["Shockwave Flash"].description&&!(b&&b["application/x-shockwave-flash"]&&!b["application/x-shockwave-flash"].enabledPlugin);
else try{d=!(!a.ActiveXObject||!new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))}catch(g){c.log("Flash -- does not supported.")}return d&&/^file:/i.test(e)&&c.log("[warn] Flash does not work on `file:` protocol."),d}(),c.support.flash&&(0||!c.html5||!c.support.html5||c.cors&&!c.support.cors||c.media&&!c.support.media)&&function(){function h(a){return('<object id="#id#" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+(a.width||"100%")+'" height="'+(a.height||"100%")+'"><param name="movie" value="#src#" /><param name="flashvars" value="#flashvars#" /><param name="swliveconnect" value="true" /><param name="allowscriptaccess" value="always" /><param name="allownetworking" value="all" /><param name="menu" value="false" /><param name="wmode" value="#wmode#" /><embed flashvars="#flashvars#" swliveconnect="true" allownetworking="all" allowscriptaccess="always" name="#id#" src="#src#" width="'+(a.width||"100%")+'" height="'+(a.height||"100%")+'" menu="false" wmode="transparent" type="application/x-shockwave-flash"></embed></object>').replace(/#(\w+)#/gi,function(b,c){return a[c]})}function i(a,b){if(a&&a.style){var c,d;for(c in b){d=b[c],"number"==typeof d&&(d+="px");try{a.style[c]=d}catch(e){}}}}function j(a,b){g(b,function(b,c){var d=a[c];a[c]=function(){return this.parent=d,b.apply(this,arguments)}})}function k(a){return a&&!a.flashId}function l(a){var b=a.wid=c.uid();return v._fn[b]=a,"FileAPI.Flash._fn."+b}function m(a){try{v._fn[a.wid]=null,delete v._fn[a.wid]}catch(b){}}function n(a,b){if(!u.test(a)){if(/^\.\//.test(a)||"/"!=a.charAt(0)){var c=e.pathname;c=c.substr(0,c.lastIndexOf("/")),a=(c+"/"+a).replace("/./","/")}"//"!=a.substr(0,2)&&(a="//"+e.host+a),u.test(a)||(a=e.protocol+a)}return b&&(a+=(/\?/.test(a)?"&":"?")+b),a}function o(a,b,e){function f(){try{var a=v.get(j);a.setImage(b)}catch(d){c.log('[err] FlashAPI.Preview.setImage -- can not set "base64":',d)}}var g,j=c.uid(),k=d.createElement("div"),o=10;for(g in a)k.setAttribute(g,a[g]),k[g]=a[g];i(k,a),a.width="100%",a.height="100%",k.innerHTML=h(c.extend({id:j,src:n(c.flashImageUrl,"r="+c.uid()),wmode:"opaque",flashvars:"scale="+a.scale+"&callback="+l(function p(){return m(p),--o>0&&f(),!0})},a)),e(!1,k),k=null}function p(a){return{id:a.id,name:a.name,matrix:a.matrix,flashId:a.flashId}}function q(a){function b(a){var b,c;if(b=c=0,a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return{left:b,top:c}}a.getBoundingClientRect(),d.body,(a&&a.ownerDocument).documentElement;return{top:b(a).top,left:b(a).left,width:a.offsetWidth,height:a.offsetHeight}}var r=c.uid(),s=0,t={},u=/^https?:/i,v={_fn:{},publish:function(a,b,d){d=d||{},a.innerHTML=h({id:b,src:n(c.flashUrl,"r="+c.version),wmode:d.camera?"":"transparent",flashvars:"callback="+(d.onEvent||"FileAPI.Flash.onEvent")+"&flashId="+b+"&storeKey="+f.userAgent.match(/\d/gi).join("")+"_"+c.version+(v.isReady||(c.pingUrl?"&ping="+c.pingUrl:""))+"&timeout="+c.flashAbortTimeout+(d.camera?"&useCamera="+n(c.flashWebcamUrl):"")+"&debug="+(c.debug?"1":"")},d)},init:function(){var a=d.body&&d.body.firstChild;if(a)do if(1==a.nodeType){c.log("FlashAPI.state: awaiting");var b=d.createElement("div");return b.id="_"+r,i(b,{top:1,right:1,width:5,height:5,position:"absolute",zIndex:1e6+""}),a.parentNode.insertBefore(b,a),void v.publish(b,r)}while(a=a.nextSibling);10>s&&setTimeout(v.init,50*++s)},ready:function(){c.log("FlashAPI.state: ready"),v.ready=c.F,v.isReady=!0,v.patch(),v.patchCamera&&v.patchCamera(),c.event.on(d,"mouseover",v.mouseover),c.event.on(d,"click",function(a){v.mouseover(a)&&(a.preventDefault?a.preventDefault():a.returnValue=!0)})},getEl:function(){return d.getElementById("_"+r)},getWrapper:function(a){do if(/js-fileapi-wrapper/.test(a.className))return a;while((a=a.parentNode)&&a!==d.body)},disableMouseover:!1,mouseover:function(a){if(!v.disableMouseover){var b=c.event.fix(a).target;if(/input/i.test(b.nodeName)&&"file"==b.type&&!b.disabled){var e=b.getAttribute(r),f=v.getWrapper(b);if(c.multiFlash){if("i"==e||"r"==e)return!1;if("p"!=e){b.setAttribute(r,"i");var g=d.createElement("div");if(!f)return void c.log("[err] FlashAPI.mouseover: js-fileapi-wrapper not found");i(g,{top:0,left:0,width:b.offsetWidth,height:b.offsetHeight,zIndex:1e6+"",position:"absolute"}),f.appendChild(g),v.publish(g,c.uid()),b.setAttribute(r,"p")}return!0}if(f){var h=q(f);i(v.getEl(),h),v.curInp=b}}else/object|embed/i.test(b.nodeName)||i(v.getEl(),{top:1,left:1,width:5,height:5})}},onEvent:function(a){var b=a.type;if("ready"==b){try{v.getInput(a.flashId).setAttribute(r,"r")}catch(d){}return v.ready(),setTimeout(function(){v.mouseenter(a)},50),!0}"ping"===b?c.log("(flash -> js).ping:",[a.status,a.savedStatus],a.error):"log"===b?c.log("(flash -> js).log:",a.target):b in v&&setTimeout(function(){c.log("FlashAPI.event."+a.type+":",a),v[b](a)},1)},mouseDown:function(){v.disableMouseover=!0},cancel:function(){v.disableMouseover=!1},mouseenter:function(a){var b=v.getInput(a.flashId);if(b){v.cmd(a,"multiple",null!=b.getAttribute("multiple"));var d=[],e={};g((b.getAttribute("accept")||"").split(/,\s*/),function(a){c.accept[a]&&g(c.accept[a].split(" "),function(a){e[a]=1})}),g(e,function(a,b){d.push(b)}),v.cmd(a,"accept",d.length?d.join(",")+","+d.join(",").toUpperCase():"*")}},get:function(b){return d[b]||a[b]||d.embeds[b]},getInput:function(a){if(!c.multiFlash)return v.curInp;try{var b=v.getWrapper(v.get(a));if(b)return b.getElementsByTagName("input")[0]}catch(d){c.log('[err] Can not find "input" by flashId:',a,d)}},select:function(a){try{var e,f=v.getInput(a.flashId),h=c.uid(f),i=a.target.files;g(i,function(a){c.checkFileObj(a)}),t[h]=i,d.createEvent?(e=d.createEvent("Event"),e.files=i,e.initEvent("change",!0,!0),f.dispatchEvent(e)):b?b(f).trigger({type:"change",files:i}):(e=d.createEventObject(),e.files=i,f.fireEvent("onchange",e))}finally{v.disableMouseover=!1}},interval:null,cmd:function(a,b,c,d){v.uploadInProgress&&v.readInProgress?setTimeout(function(){v.cmd(a,b,c,d)},100):this.cmdFn(a,b,c,d)},cmdFn:function(a,b,d,e){try{return c.log("(js -> flash)."+b+":",d),v.get(a.flashId||a).cmd(b,d)}catch(f){c.log("(js -> flash).onError:",f),e||setTimeout(function(){v.cmd(a,b,d,!0)},50)}},patch:function(){c.flashEngine=!0,j(c,{readAsDataURL:function(a,b){k(a)?this.parent.apply(this,arguments):(c.log("FlashAPI.readAsBase64"),v.readInProgress=!0,v.cmd(a,"readAsBase64",{id:a.id,callback:l(function d(e,f){v.readInProgress=!1,m(d),c.log("FlashAPI.readAsBase64:",e),b({type:e?"error":"load",error:e,result:"data:"+a.type+";base64,"+f})})}))},readAsText:function(b,d,e){e?c.log("[warn] FlashAPI.readAsText not supported `encoding` param"):e=d,c.readAsDataURL(b,function(b){if("load"==b.type)try{b.result=a.atob(b.result.split(";base64,")[1])}catch(c){b.type="error",b.error=c.toString()}e(b)})},getFiles:function(a,b,d){if(d)return c.filterFiles(c.getFiles(a),b,d),null;var e=c.isArray(a)?a:t[c.uid(a.target||a.srcElement||a)];return e?(b&&(b=c.getFilesFilter(b),e=c.filter(e,function(a){return b.test(a.name)})),e):this.parent.apply(this,arguments)},getInfo:function(a,b){if(k(a))this.parent.apply(this,arguments);else if(a.isShot)b(null,a.info={width:a.width,height:a.height});else{if(!a.__info){var d=a.__info=c.defer();d.resolve(null,a.info=null)}a.__info.then(b)}}}),c.support.transform=!0,c.Image&&j(c.Image.prototype,{get:function(a,b){return this.set({scaleMode:b||"noScale"}),this.parent(a)},_load:function(a,b){if(c.log("FlashAPI.Image._load:",a),k(a))this.parent.apply(this,arguments);else{var d=this;c.getInfo(a,function(c){b.call(d,c,a)})}},_apply:function(a,b){if(c.log("FlashAPI.Image._apply:",a),k(a))this.parent.apply(this,arguments);else{var d=this.getMatrix(a.info),e=b;v.cmd(a,"imageTransform",{id:a.id,matrix:d,callback:l(function f(g,h){c.log("FlashAPI.Image._apply.callback:",g),m(f),g?e(g):c.support.html5||c.support.dataURI&&!(h.length>3e4)?(d.filter&&(e=function(a,e){a?b(a):c.Image.applyFilter(e,d.filter,function(){b(a,this.canvas)})}),c.newImage("data:"+a.type+";base64,"+h,e)):o({width:d.deg%180?d.dh:d.dw,height:d.deg%180?d.dw:d.dh,scale:d.scaleMode},h,e)})})}},toData:function(a){var b=this.file,d=b.info,e=this.getMatrix(d);c.log("FlashAPI.Image.toData"),k(b)?this.parent.apply(this,arguments):("auto"==e.deg&&(e.deg=c.Image.exifOrientation[d&&d.exif&&d.exif.Orientation]||0),a.call(this,!b.info,{id:b.id,flashId:b.flashId,name:b.name,type:b.type,matrix:e}))}}),c.Image&&j(c.Image,{fromDataURL:function(a,b,d){!c.support.dataURI||a.length>3e4?o(c.extend({scale:"exactFit"},b),a.replace(/^data:[^,]+,/,""),function(a,b){d(b)}):this.parent(a,b,d)}}),j(c.Form.prototype,{toData:function(a){for(var b=this.items,d=b.length;d--;)if(b[d].file&&k(b[d].blob))return this.parent.apply(this,arguments);c.log("FlashAPI.Form.toData"),a(b)}}),j(c.XHR.prototype,{_send:function(a,b){if(b.nodeName||b.append&&c.support.html5||c.isArray(b)&&"string"==typeof b[0])return this.parent.apply(this,arguments);var d,e,f={},h={},i=this;if(g(b,function(a){a.file?(h[a.name]=a=p(a.blob),e=a.id,d=a.flashId):f[a.name]=a.blob}),e||(d=r),!d)return c.log("[err] FlashAPI._send: flashId -- undefined"),this.parent.apply(this,arguments);c.log("FlashAPI.XHR._send: "+d+" -> "+e),i.xhr={headers:{},abort:function(){v.uploadInProgress=!1,v.cmd(d,"abort",{id:e})},getResponseHeader:function(a){return this.headers[a]},getAllResponseHeaders:function(){return this.headers}};var j=c.queue(function(){v.uploadInProgress=!0,v.cmd(d,"upload",{url:n(a.url.replace(/([a-z]+)=(\?)&?/i,"")),data:f,files:e?h:null,headers:a.headers||{},callback:l(function b(d){var e=d.type,f=d.result;c.log("FlashAPI.upload."+e),"progress"==e?(d.loaded=Math.min(d.loaded,d.total),d.lengthComputable=!0,a.progress(d)):"complete"==e?(v.uploadInProgress=!1,m(b),"string"==typeof f&&(i.responseText=f.replace(/%22/g,'"').replace(/%5c/g,"\\").replace(/%26/g,"&").replace(/%25/g,"%")),i.end(d.status||200)):("abort"==e||"error"==e)&&(v.uploadInProgress=!1,i.end(d.status||0,d.message),m(b))})})});g(h,function(a){j.inc(),c.getInfo(a,j.next)}),j.check()}})}};c.Flash=v,c.newImage("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",function(a,b){c.support.dataURI=!(1!=b.width||1!=b.height),v.init()})}()}(window,window.jQuery,FileAPI),function(a,b,c){"use strict";var d=c.each,e=[];c.support.flash&&c.media&&!c.support.media&&!function(){function a(a){var b=a.wid=c.uid();return c.Flash._fn[b]=a,"FileAPI.Flash._fn."+b}function b(a){try{c.Flash._fn[a.wid]=null,delete c.Flash._fn[a.wid]}catch(b){}}var f=c.Flash;c.extend(c.Flash,{patchCamera:function(){c.Camera.fallback=function(d,e,g){var h=c.uid();c.log("FlashAPI.Camera.publish: "+h),f.publish(d,h,c.extend(e,{camera:!0,onEvent:a(function i(a){"camera"===a.type&&(b(i),a.error?(c.log("FlashAPI.Camera.publish.error: "+a.error),g(a.error)):(c.log("FlashAPI.Camera.publish.success: "+h),g(null)))})}))},d(e,function(a){c.Camera.fallback.apply(c.Camera,a)}),e=[],c.extend(c.Camera.prototype,{_id:function(){return this.video.id},start:function(d){var e=this;f.cmd(this._id(),"camera.on",{callback:a(function g(a){b(g),a.error?(c.log("FlashAPI.camera.on.error: "+a.error),d(a.error,e)):(c.log("FlashAPI.camera.on.success: "+e._id()),e._active=!0,d(null,e))})})},stop:function(){this._active=!1,f.cmd(this._id(),"camera.off")},shot:function(){c.log("FlashAPI.Camera.shot:",this._id());var a=c.Flash.cmd(this._id(),"shot",{});return a.type="image/png",a.flashId=this._id(),a.isShot=!0,new c.Camera.Shot(a)}})}}),c.Camera.fallback=function(){e.push(arguments)}}()}(window,window.jQuery,FileAPI),"function"==typeof define&&define.amd&&define("FileAPI",[],function(){return FileAPI});
/*! 10.1.14 */
!function(){function a(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])}function b(a,b,c){try{Object.defineProperty(a,b,{get:c})}catch(d){}}if(window.FileAPI||(window.FileAPI={}),!window.XMLHttpRequest)throw"AJAX is not supported. XMLHttpRequest is not defined.";if(FileAPI.shouldLoad=!window.FormData||FileAPI.forceLoad,FileAPI.shouldLoad){var c=function(a){if(!a.__listeners){a.upload||(a.upload={}),a.__listeners=[];var b=a.upload.addEventListener;a.upload.addEventListener=function(c,d){a.__listeners[c]=d,b&&b.apply(this,arguments)}}};a("open",function(a){return function(b,d,e){c(this),this.__url=d;try{a.apply(this,[b,d,e])}catch(f){f.message.indexOf("Access is denied")>-1&&(this.__origError=f,a.apply(this,[b,"_fix_for_ie_crossdomain__",e]))}}}),a("getResponseHeader",function(a){return function(b){return this.__fileApiXHR&&this.__fileApiXHR.getResponseHeader?this.__fileApiXHR.getResponseHeader(b):null==a?null:a.apply(this,[b])}}),a("getAllResponseHeaders",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.getAllResponseHeaders?this.__fileApiXHR.getAllResponseHeaders():null==a?null:a.apply(this)}}),a("abort",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.abort?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),a("setRequestHeader",function(a){return function(b,d){if("__setXHR_"===b){c(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[b]=d,a.apply(this,arguments)}}),a("send",function(a){return function(){var c=this;if(arguments[0]&&arguments[0].__isFileAPIShim){var d=arguments[0],e={url:c.__url,jsonp:!1,cache:!0,complete:function(a,d){a&&angular.isString(a)&&-1!==a.indexOf("#2174")&&(a=null),c.__completed=!0,!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"loadend",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),void 0!==d.status&&b(c,"status",function(){return 0===d.status&&a&&"abort"!==a?500:d.status}),void 0!==d.statusText&&b(c,"statusText",function(){return d.statusText}),b(c,"readyState",function(){return 4}),void 0!==d.response&&b(c,"response",function(){return d.response});var e=d.responseText||(a&&0===d.status&&"abort"!==a?a:void 0);b(c,"responseText",function(){return e}),b(c,"response",function(){return e}),a&&b(c,"err",function(){return a}),c.__fileApiXHR=d,c.onreadystatechange&&c.onreadystatechange(),c.onload&&c.onload()},progress:function(a){if(a.target=c,c.__listeners.progress&&c.__listeners.progress(a),c.__total=a.total,c.__loaded=a.loaded,a.total===a.loaded){var b=this;setTimeout(function(){c.__completed||(c.getAllResponseHeaders=function(){},b.complete(null,{status:204,statusText:"No Content"}))},FileAPI.noContentTimeout||1e4)}},headers:c.__requestHeaders};e.data={},e.files={};for(var f=0;f<d.data.length;f++){var g=d.data[f];null!=g.val&&null!=g.val.name&&null!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!FileAPI.hasFlash)throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR=FileAPI.upload(e)},1)}else{if(this.__origError)throw this.__origError;a.apply(c,arguments)}}}),window.XMLHttpRequest.__isFileAPIShim=!0,window.FormData=FormData=function(){return{append:function(a,b,c){b.__isFileAPIBlobShim&&(b=b.data[0]),this.data.push({key:a,val:b,name:c})},data:[],__isFileAPIShim:!0}},window.Blob=Blob=function(a){return{data:a,__isFileAPIBlobShim:!0}}}}(),function(){function a(a){return"input"===a[0].tagName.toLowerCase()&&a.attr("type")&&"file"===a.attr("type").toLowerCase()}function b(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(void 0!==navigator.mimeTypes["application/x-shockwave-flash"])return!0}return!1}function c(a){var b=0,c=0;if(window.jQuery)return jQuery(a).offset();if(a.offsetParent)do b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a);return{left:b,top:c}}if(FileAPI.shouldLoad){if(FileAPI.hasFlash=b(),FileAPI.forceLoad&&(FileAPI.html5=!1),!FileAPI.upload){var d,e,f,g,h,i=document.createElement("script"),j=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)d=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)e=window.FileAPI.jsPath;else for(f=0;f<j.length;f++)if(h=j[f].src,g=h.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/),g>-1){e=h.substring(0,g+1);break}null==FileAPI.staticPath&&(FileAPI.staticPath=e),i.setAttribute("src",d||e+"FileAPI.js"),document.getElementsByTagName("head")[0].appendChild(i)}FileAPI.ngfFixIE=function(d,e,f){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';var g=function(){var b=e.parent();d.attr("disabled")?b&&b.removeClass("js-fileapi-wrapper"):(e.attr("__ngf_flash_")||(e.unbind("change"),e.unbind("click"),e.bind("change",function(a){h.apply(this,[a]),f.apply(this,[a])}),e.attr("__ngf_flash_","true")),b.addClass("js-fileapi-wrapper"),a(d)||(b.css("position","absolute").css("top",c(d[0]).top+"px").css("left",c(d[0]).left+"px").css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("filter","alpha(opacity=0)").css("display",d.css("display")).css("overflow","hidden").css("z-index","900000").css("visibility","visible"),e.css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("position","absolute").css("top","0px").css("left","0px")))};d.bind("mouseenter",g);var h=function(a){for(var b=FileAPI.getFiles(a),c=0;c<b.length;c++)void 0===b[c].size&&(b[c].size=0),void 0===b[c].name&&(b[c].name="file"),void 0===b[c].type&&(b[c].type="undefined");a.target||(a.target={}),a.target.files=b,a.target.files!==b&&(a.__files_=b),(a.__files_||a.target.files).item=function(b){return(a.__files_||a.target.files)[b]||null}}},FileAPI.disableFileInput=function(a,b){b?a.removeClass("js-fileapi-wrapper"):a.addClass("js-fileapi-wrapper")}}}(),window.FileReader||(window.FileReader=function(){var a=this,b=!1;this.listeners={},this.addEventListener=function(b,c){a.listeners[b]=a.listeners[b]||[],a.listeners[b].push(c)},this.removeEventListener=function(b,c){a.listeners[b]&&a.listeners[b].splice(a.listeners[b].indexOf(c),1)},this.dispatchEvent=function(b){var c=a.listeners[b.type];if(c)for(var d=0;d<c.length;d++)c[d].call(a,b)},this.onabort=this.onerror=this.onload=this.onloadstart=this.onloadend=this.onprogress=null;var c=function(b,c){var d={type:b,target:a,loaded:c.loaded,total:c.total,error:c.error};return null!=c.result&&(d.target.result=c.result),d},d=function(d){b||(b=!0,a.onloadstart&&a.onloadstart(c("loadstart",d)));var e;"load"===d.type?(a.onloadend&&a.onloadend(c("loadend",d)),e=c("load",d),a.onload&&a.onload(e),a.dispatchEvent(e)):"progress"===d.type?(e=c("progress",d),a.onprogress&&a.onprogress(e),a.dispatchEvent(e)):(e=c("error",d),a.onerror&&a.onerror(e),a.dispatchEvent(e))};this.readAsDataURL=function(a){FileAPI.readAsDataURL(a,d)},this.readAsText=function(a){FileAPI.readAsText(a,d)}});
/*! 10.1.14 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="10.1.14",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){function d(d){function e(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&g?{loaded:a.loaded+d._start,total:d._file.size,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){a(d).then(function(a){g&&d._chunkSize&&!d._finished?(e({loaded:d._end,total:d._file.size,config:d,type:"progress"}),f.upload(d,!0)):(d._finished&&delete d._finished,j.resolve(a))},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){return function(a){a&&a instanceof XMLHttpRequest&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e(h(a)))},!1))}}),g?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,i()},function(a){throw a}):i():i(),k.success=function(a){return k.then(function(b){a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},k}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=this;this.isResumeSupported=function(){return window.Blob&&window.Blob instanceof Function&&(new window.Blob).slice};var g=this.isResumeSupported();this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new window.Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},this.json=function(a){return angular.toJson(a)},this.upload=function(a,b){function c(a){return null!=a&&(a instanceof window.Blob||a.flashId&&a.name&&a.size)}function h(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&g){a._end&&a._end>=b.size&&(a._finished=!0,a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),d}return b}function i(b,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))b.append(e,d);else if(c(d)){var f=h(d,b),g=e.split(",");g[1]&&(f.ngfName=g[1].replace(/^\s+|\s+$/g,""),e=g[0]),a._fileKey=a._fileKey||e,b.append(e,f,f.ngfName||f.name)}else if(angular.isObject(d)){if(d.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+e;d.$$ngfCircularDetection=!0;try{for(var j in d)if(d.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;d.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),i(b,d[j],e+k.replace(/[ik]/g,j))}}finally{delete d.$$ngfCircularDetection}}else b.append(e,d)}function j(){a._chunkSize=f.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c,d=new window.FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):i(d,e,c)}return d})}return b||(a=e(a)),a._isDigested||(a._isDigested=!0,j()),d(a)},this.http=function(b){return b=e(b),b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof window.Blob?b:a.defaults.transformRequest[0].apply(this,arguments)},b._chunkSize=f.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1e3*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1e6*a.substring(0,a.length-2));if(a.search(/gb/i)===a.length-2)return parseFloat(1e9*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","$q","UploadExif",function(a,b,c,d,e){function f(a,b,c){var e=[i.emptyPromise()];return angular.forEach(a,function(d,f){0===d.type.indexOf("image/jpeg")&&i.attrGetter("ngfFixOrientation",b,c,{$file:d})&&e.push(i.happyPromise(i.applyExifRotation(d),d).then(function(b){a.splice(f,1,b)}))}),d.all(e)}function g(a,b,c){var e=i.attrGetter("ngfResize",b,c);if(!e||!i.isResizeSupported()||!a.length)return i.emptyPromise();var f=[i.emptyPromise()];return angular.forEach(a,function(b,c){if(0===b.type.indexOf("image")){if(e.pattern&&!i.validatePattern(b,e.pattern))return;var d=i.resize(b,e.width,e.height,e.quality,e.type,e.ratio,e.centerCrop);f.push(d),d.then(function(b){a.splice(c,1,b)},function(a){b.$error="resize",b.$errorParam=(a?(a.message?a.message:a)+": ":"")+(b&&b.name)})}}),d.all(f)}function h(a,b,c,d){var e=[],f=i.attrGetter("ngfKeep",c,d);if(f){var g=!1;if("distinct"===f||i.attrGetter("ngfKeepDistinct",c,d)===!0){var h=b.length;if(a)for(var j=0;j<a.length;j++){for(var k=0;h>k;k++)if(a[j].name===b[k].name){e.push(a[j]);break}k===h&&(b.push(a[j]),g=!0)}a=b}else a=b.concat(a||[])}return{files:a,dupFiles:e,keep:f}}var i=e;return i.getAttrWithDefaults=function(a,b){if(null!=a[b])return a[b];var c=i.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},i.attrGetter=function(b,c,d,e){var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;throw g}},i.shouldUpdateOn=function(a,b,c){var d=i.attrGetter("ngModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0},i.emptyPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.resolve.apply(a,c)}),a.promise},i.happyPromise=function(a,c){var e=d.defer();return a.then(function(a){e.resolve(a)},function(a){b(function(){throw a}),e.resolve(c)}),e.promise},i.updateModel=function(c,d,e,j,k,l,m){function n(f,g,h,k,m){var n=f&&f.length?f[0]:null;c&&(i.applyModelValidation(c,f),c.$setViewValue(m?n:f)),j&&a(j)(e,{$files:f,$file:n,$newFiles:h,$duplicateFiles:k,$invalidFiles:g,$event:l});var o=i.attrGetter("ngfModelInvalid",d);o&&b(function(){a(o).assign(e,g)}),b(function(){})}var o=k,p=c&&c.$modelValue&&(angular.isArray(c.$modelValue)?c.$modelValue:[c.$modelValue]);p=(p||d.$$ngfPrevFiles||[]).slice(0);var q=h(k,p,d,e);k=q.files;var r=q.dupFiles,s=!i.attrGetter("ngfMultiple",d,e)&&!i.attrGetter("multiple",d)&&!q.keep;if(d.$$ngfPrevFiles=k,!q.keep||o&&o.length){i.attrGetter("ngfBeforeModelChange",d,e,{$files:k,$file:k&&k.length?k[0]:null,$duplicateFiles:r,$event:l}),i.validate(o,c,d,e).then(function(){if(m)n(k,[],o,r,s);else{var a=i.attrGetter("ngModelOptions",d,e);if(!a||!a.allowInvalid){var c=[],h=[];angular.forEach(k,function(a){a.$error?h.push(a):c.push(a)}),k=c}var j=i.emptyPromise(k);i.attrGetter("ngfFixOrientation",d,e)&&i.isExifSupported()&&(j=f(k,d,e)),j.then(function(){g(k,d,e).then(function(){b(function(){n(k,h,o,r,s)},a&&a.debounce?a.debounce.change||a.debounce:0)},function(a){throw"Could not resize files "+a})})}});for(var t=p.length;t--;){var u=p[t];window.URL&&u.blobUrl&&(URL.revokeObjectURL(u.blobUrl),delete u.blobUrl)}}},i}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){for(var e=b.__files_||b.target&&b.target.files,f=[],g=0;g<e.length;g++)f.push(e[g]);j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a){if(b!==a)for(var c=0;c<b[0].attributes.length;c++){var d=b[0].attributes[c];"type"!==d.name&&"class"!==d.name&&"style"!==d.name&&((null==d.value||""===d.value)&&("required"===d.name&&(d.value="required"),"multiple"===d.name&&(d.value="multiple")),a.attr(d.name,"id"===d.name?"ngf-"+d.value:d.value))}}function o(){if(k())return b;var a=angular.element('<input type="file">');n(a);var c=angular.element("<label>upload</label>");return c.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),g.push({el:b,ref:c}),document.body.appendChild(c.append(a)[0]),a}function p(c){if(b.attr("disabled")||t("ngfSelectDisabled",a))return!1;var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(w[0])||(g.push({el:b,ref:w.parent()}),document.body.appendChild(w[0].parent()),w.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){w[0].click()},0):w[0].click(),!1}function q(a){var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if("touchstart"===a.type)return v=b?b[0].clientY:0,!0;if(a.stopPropagation(),a.preventDefault(),"touchend"===a.type){var c=b?b[0].clientY:0;if(Math.abs(c-v)>20)return!1}}function r(b){j.shouldUpdateOn("click",c,a)&&w.val()&&(w.val(null),j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(w&&!w.attr("__ngf_ie10_Fix_")){if(!w[0].parentNode)return void(w=null);a.preventDefault(),a.stopPropagation(),w.unbind("click");var b=w.clone();return w.replaceWith(b),w=b,w.attr("__ngf_ie10_Fix_","true"),w.bind("change",m),w.bind("click",s),w[0].click(),!1}w.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);var u=[];u.push(a.$watch(t("ngfMultiple"),function(){w.attr("multiple",t("ngfMultiple",a))})),u.push(a.$watch(t("ngfCapture"),function(){w.attr("capture",t("ngfCapture",a))})),u.push(a.$watch(t("ngfAccept"),function(){w.attr("accept",t("ngfAccept",a))})),c.$observe("accept",function(){w.attr("accept",t("accept"))}),u.push(function(){c.$$observers&&delete c.$$observers.accept});var v=0,w=b;k()||(w=o()),w.bind("change",m),k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&w.bind("click",s),d&&d.$formatters.push(function(a){return(null==a||0===a.length)&&w.val()&&w.val(null),a}),a.$on("$destroy",function(){k()||w.parent().remove(),angular.forEach(u,function(a){a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,w,m)}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ng-hide"):e.addClass("ng-hide")})})}c(function(){var c=d.$watch(f[g],function(c){var d=h;if("ngfThumbnail"===g&&(d||(d={width:e[0].clientWidth,height:e[0].clientHeight}),0===d.width&&window.getComputedStyle)){var f=getComputedStyle(e[0]);d={width:parseInt(f.width.slice(0,-2)),height:parseInt(f.height.slice(0,-2))}}return angular.isString(c)?(e.removeClass("ng-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ng-hide"):d&&b.isResizeSupported()?b.resize(c,d.width,d.height,d.quality).then(function(a){j(a)},function(a){throw a}):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0)},d.dataUrl=function(a,e){if(!a)return d.emptyPromise(a,a);if(e&&null!=a.$ngfDataUrl||!e&&null!=a.$ngfBlobUrl)return d.emptyPromise(e?a.$ngfDataUrl:a.$ngfBlobUrl,a);var f=e?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!e){var d;try{d=c.createObjectURL(a)}catch(f){return void b(function(){a.$ngfBlobUrl="",g.reject()})}b(function(){a.$ngfBlobUrl=d,d&&g.resolve(d,a)})}else{var h=new FileReader;h.onload=function(c){b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a)})},h.onerror=function(){b(function(){a.$ngfDataUrl="",g.reject()})},h.readAsDataURL(a)}}else b(function(){a[e?"dataUrl":"blobUrl"]="",g.reject()})}),f=e?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[e?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"]}),f},d}]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1)}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0)}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/),a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name)}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name))}return e},f.ratioToFloat=function(a){var b=a.toString(),c=b.search(/[x:]/i);return b=c>-1?parseFloat(b.substring(0,c))/parseFloat(b.substring(c+1)):parseFloat(b)},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){a.$dirty&&f.validate(d,a,b,c).then(function(){f.applyModelValidation(a,d)})})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid)})},f.validate=function(a,c,d,e){function g(b,d,e){if(a){for(var f="ngf"+b[0].toUpperCase()+b.substr(1),g=a.length,h=null;g--;){var j=a[g];if(j){var k=i(f,{$file:j});null==k&&(k=d(i("ngfValidate")||{}),h=null==h?!0:h),null!=k&&(e(j,k)||(j.$error=b,j.$errorParam=k,a.splice(g,1),h=!1))}}null!==h&&c.$ngfValidations.push({name:b,valid:h})}}function h(d,e,g,h,j){var k=[f.emptyPromise()];if(a){var l="ngf"+d[0].toUpperCase()+d.substr(1);return a=void 0===a.length?[a]:a,angular.forEach(a,function(a){var c=b.defer();if(k.push(c.promise),g&&(null==a.type||0!==a.type.search(g)))return void c.resolve();var f=i(l,{$file:a})||e(i("ngfValidate",{$file:a})||{});f?h(a,f).then(function(b){j(b,f)?c.resolve():(a.$error=d,a.$errorParam=f,c.reject())},function(){i("ngfValidateForce",{$file:a})?(a.$error=d,a.$errorParam=f,c.reject()):c.resolve()}):c.resolve()}),b.all(k).then(function(){c.$ngfValidations.push({name:d,valid:!0})},function(){c.$ngfValidations.push({name:d,valid:!1})})}}c=c||{},c.$ngfValidations=c.$ngfValidations||[],angular.forEach(c.$ngfValidations,function(a){a.valid=!0});var i=function(a,b){return f.attrGetter(a,d,e,b)};if(null==a||0===a.length)return f.emptyPromise(c);a=void 0===a.length?[a]:a.slice(0),g("pattern",function(a){return a.pattern},f.validatePattern),g("minSize",function(a){return a.size&&a.size.min},function(a,b){return a.size>=f.translateScalars(b)}),g("maxSize",function(a){return a.size&&a.size.max},function(a,b){return a.size<=f.translateScalars(b)});var j=0;if(g("maxTotalSize",function(a){return a.maxTotalSize&&a.maxTotalSize},function(b,c){return j+=b.size,j>f.translateScalars(c)?(a.splice(0,a.length),!1):!0}),g("validateFn",function(){return null},function(a,b){return b===!0||null===b||""===b}),!a.length)return f.emptyPromise(c,c.$ngfValidations);var k=b.defer(),l=[];return l.push(f.happyPromise(h("maxHeight",function(a){return a.height&&a.height.max},/image/,this.imageDimensions,function(a,b){return a.height<=b}))),l.push(f.happyPromise(h("minHeight",function(a){return a.height&&a.height.min},/image/,this.imageDimensions,function(a,b){return a.height>=b}))),l.push(f.happyPromise(h("maxWidth",function(a){return a.width&&a.width.max},/image/,this.imageDimensions,function(a,b){return a.width<=b}))),l.push(f.happyPromise(h("minWidth",function(a){return a.width&&a.width.min},/image/,this.imageDimensions,function(a,b){return a.width>=b}))),l.push(f.happyPromise(h("ratio",function(a){return a.ratio},/image/,this.imageDimensions,function(a,b){for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++)Math.abs(a.width/a.height-f.ratioToFloat(c[e]))<1e-4&&(d=!0);return d}))),l.push(f.happyPromise(h("maxRatio",function(a){return a.ratio},/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)<1e-4}))),l.push(f.happyPromise(h("minRatio",function(a){return a.ratio},/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)>-1e-4}))),l.push(f.happyPromise(h("maxDuration",function(a){return a.duration&&a.duration.max},/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b)}))),l.push(f.happyPromise(h("minDuration",function(a){return a.duration&&a.duration.min},/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b)}))),l.push(f.happyPromise(h("validateAsyncFn",function(){return null},null,function(a,b){return b},function(a){return a===!0||null===a||""===a}))),b.all(l).then(function(){k.resolve(c,c.$ngfValidations)})},f.imageDimensions=function(a){if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].clientWidth,c=h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed");h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error")})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")})}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q",function(a,b){var c=a,d=function(a,b,c,d,e){var f=e?Math.max(c/a,d/b):Math.min(c/a,d/b);return{width:a*f,height:b*f,marginX:a*f-c,marginY:b*f-d}},e=function(a,e,f,g,h,i,j){var k=b.defer(),l=document.createElement("canvas"),m=document.createElement("img");return m.onload=function(){try{if(i){var a=c.ratioToFloat(i),b=m.width/m.height;a>b?(e=m.width,f=e/a):(f=m.height,e=f*a)}e||(e=m.width),f||(f=m.height);var n=d(m.width,m.height,e,f,j);l.width=Math.min(n.width,e),l.height=Math.min(n.height,f);var o=l.getContext("2d");o.drawImage(m,Math.min(0,-n.marginX/2),Math.min(0,-n.marginY/2),n.width,n.height),k.resolve(l.toDataURL(h||"image/WebP",g||1))}catch(p){k.reject(p)}},m.onerror=function(){k.reject()},m.src=a,k.promise};return c.dataUrltoBlob=function(a,b){for(var c=a.split(","),d=c[0].match(/:(.*?);/)[1],e=atob(c[1]),f=e.length,g=new Uint8Array(f);f--;)g[f]=e.charCodeAt(f);var h=new window.Blob([g],{type:d});return h.name=b,h},c.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")},c.isResizeSupported()&&Object.defineProperty(window.Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){this.$ngfName=a},configurable:!0}),c.resize=function(a,d,f,g,h,i,j){if(0!==a.type.indexOf("image"))return c.emptyPromise(a);var k=b.defer();return c.dataUrl(a,!0).then(function(b){e(b,d,f,g,h||a.type,i,j).then(function(b){k.resolve(c.dataUrltoBlob(b,a.name))},function(){k.reject()})},function(){k.reject()}),k.promise},c}]),function(){function a(a,c,d,e,f,g,h,i,j,k){function l(){return c.attr("disabled")||q("ngfDropDisabled",a)}function m(b,c){var f=[];b.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi,function(a,b,c){f.push(c)});var g=[],h=[];f.length&&(angular.forEach(f,function(a){g.push(j({url:a,method:"get",responseType:"arraybuffer"}).then(function(a){var b=new Uint8Array(a.data),c=a.headers("content-type")||"image/WebP",d=new window.Blob([b],{type:c});h.push(d)}))}),k.all(g).then(function(){i.updateModel(e,d,a,q("ngfChange")||q("ngfDrop"),h,c)}))}function n(a,b,c,d){var e=q("ngfDragOverClass",a,{$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(u=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;if(null!=g&&g.length)for(var h=e.pattern||q("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;break}f=e.accept}else f=e.accept}d(f)}function o(a,b,c,d){function e(a,b,c){if(null!=b)if(b.isDirectory){var d=(c||"")+b.name;a.push({name:b.name,type:"directory",path:d});var f=b.createReader(),g=[];i++;var h=function(){f.readEntries(function(d){try{if(d.length)g=g.concat(Array.prototype.slice.call(d||[],0)),h();else{for(var f=0;f<g.length;f++)e(a,g[f],(c?c:"")+b.name+"/");i--}}catch(j){i--,console.error(j)}},function(){i--})};h()}else i++,b.file(function(b){try{i--,b.path=(c?c:"")+b.name,a.push(b)}catch(d){i--,console.error(d)}},function(){i--})}var f=[],i=0,j=a.dataTransfer.items;if(j&&j.length>0&&"file"!==h.protocol())for(var k=0;k<j.length;k++){if(j[k].webkitGetAsEntry&&j[k].webkitGetAsEntry()&&j[k].webkitGetAsEntry().isDirectory){var l=j[k].webkitGetAsEntry();if(l.isDirectory&&!c)continue;null!=l&&e(f,l)}else{var m=j[k].getAsFile();null!=m&&f.push(m)}if(!d&&f.length>0)break}else{var n=a.dataTransfer.files;if(null!=n)for(var o=0;o<n.length;o++){var p=n.item(o);if((p.type||p.size>0)&&f.push(p),!d&&f.length>0)break}}var q=0;!function r(a){g(function(){if(i)10*q++<2e4&&r(10);else{if(!d&&f.length>1){for(k=0;"directory"===f[k].type;)k++;f=[f[k]]}b(f)}},a||0)}()}var p=b(),q=function(a,b,c){return i.attrGetter(a,d,b,c)};if(q("dropAvailable")&&g(function(){a[q("dropAvailable")]?a[q("dropAvailable")].value=p:a[q("dropAvailable")]=p}),!p)return void(q("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==q("ngfSelect")&&i.registerModelChangeValidator(e,d,a);var r,s=null,t=f(q("ngfStopPropagation")),u=1;c[0].addEventListener("dragover",function(b){if(!l()){if(b.preventDefault(),t(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}g.cancel(s),r||(r="C",n(a,d,b,function(d){r=d,c.addClass(r),q("ngfDrag",a,{$isDragging:!0,$class:r,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){l()||(b.preventDefault(),t(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){l()||(b.preventDefault(),t(a)&&b.stopPropagation(),s=g(function(){r&&c.removeClass(r),r=null,q("ngfDrag",a,{$isDragging:!1,$event:b})},u||100))},!1),c[0].addEventListener("drop",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){b.preventDefault(),t(a)&&b.stopPropagation(),r&&c.removeClass(r),r=null;var f;try{f=b.dataTransfer&&b.dataTransfer.getData&&b.dataTransfer.getData("text/html")}catch(g){}i.shouldUpdateOn("dropUrl",d,a)&&f?m(f,b):o(b,function(c){i.updateModel(e,d,a,q("ngfChange")||q("ngfDrop"),c,b)},q("ngfAllowDir",a)!==!1,q("multiple")||q("ngfMultiple",a))}},!1),c[0].addEventListener("paste",function(b){if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&q("ngfEnableFirefoxPaste",a)&&b.preventDefault(),!l()&&i.shouldUpdateOn("paste",d,a)){var c=[],f=b.clipboardData||b.originalEvent.clipboardData;if(f&&f.items)for(var g=0;g<f.items.length;g++)-1!==f.items[g].type.indexOf("image")&&c.push(f.items[g].getAsFile());if(c.length)i.updateModel(e,d,a,q("ngfChange")||q("ngfDrop"),c,b);else{var h;try{h=f&&f.getData&&f.getData("text/html")}catch(j){}i.shouldUpdateOn("pasteUrl",d,a)&&h&&m(h,b)}}},!1),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&q("ngfEnableFirefoxPaste",a)&&(c.attr("contenteditable",!0),c.on("keypress",function(a){a.metaKey||a.ctrlKey||a.preventDefault()}))}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent)}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location","Upload","$http","$q",function(b,c,d,e,f,g){return{restrict:"AEC",require:"?ngModel",link:function(h,i,j,k){a(h,i,j,k,b,c,d,e,f,g)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}(),ngFileUpload.service("UploadExif",["UploadResize","$q",function(a,b){function c(a){var b=new DataView(a);if(255!==b.getUint8(0)||216!==b.getUint8(1))return"Not a valid JPEG";for(var c,d=2,e=a.byteLength;e>d;){if(255!==b.getUint8(d))return"Not a valid marker at offset "+d+", found: "+b.getUint8(d);if(c=b.getUint8(d+1),225===c)return g(b,d+4,b.getUint16(d+2)-2);d+=2+b.getUint16(d+2)}}function d(a,b,c,d){var f,g,h=a.getUint16(c,!d);for(g=0;h>g;g++){f=c+12*g+2;var i=a.getUint16(f,!d);if(274===i)return e(a,f,b,d)}return null}function e(a,b,c,d){var e,f,g,h=a.getUint32(b+4,!d),i=a.getUint32(b+8,!d)+c;if(1===h)return a.getUint16(b+8,!d);for(e=h>2?i:b+8,f=[],g=0;h>g;g++)f[g]=a.getUint16(e+2*g,!d);return f}function f(a,b,c){for(var d="",e=b;b+c>e;e++)d+=String.fromCharCode(a.getUint8(e));return d}function g(a,b){if("Exif"!==f(a,b,4))return"Not valid EXIF data! "+f(a,b,4);var c,e=b+6;if(18761===a.getUint16(e))c=!1;else{if(19789!==a.getUint16(e))return"Not valid TIFF data! (no 0x4949 or 0x4D4D)";c=!0}if(42!==a.getUint16(e+2,!c))return"Not valid TIFF data! (no 0x002A)";var g=a.getUint32(e+4,!c);return 8>g?a.getUint32(e+4,!c):d(a,e,e+g,c)}function h(a,b,c,d){switch(b){case 2:return a.transform(-1,0,0,1,c,0);case 3:return a.transform(-1,0,0,-1,c,d);case 4:return a.transform(1,0,0,-1,0,d);case 5:return a.transform(0,1,1,0,0,0);case 6:return a.transform(0,1,-1,0,d,0);case 7:return a.transform(0,-1,-1,0,d,c);case 8:return a.transform(0,-1,1,0,0,c)}}var i=a;return i.isExifSupported=function(){return window.FileReader&&(new FileReader).readAsArrayBuffer&&i.isResizeSupported()},i.orientation=function(a){if(null!=a.$ngfOrientation)return i.emptyPromise(a.$ngfOrientation);var d=b.defer(),e=new FileReader;return e.onload=function(b){var e;try{e=c(b.target.result)}catch(b){return void d.reject(b)}angular.isString(e)?d.resolve(1):(a.$ngfOrientation=e,d.resolve(e))},e.onerror=function(a){d.reject(a)},e.readAsArrayBuffer(a),d.promise},i.applyExifRotation=function(a){if(0!==a.type.indexOf("image/jpeg"))return i.emptyPromise(a);var c=b.defer();return i.orientation(a).then(function(b){(!b||2>b||b>8)&&c.resolve(a),i.dataUrl(a,!0).then(function(d){var e=document.createElement("canvas"),f=document.createElement("img");f.onload=function(){try{e.width=b>4?f.height:f.width,e.height=b>4?f.width:f.height;var d=e.getContext("2d");h(d,b,f.width,f.height),d.drawImage(f,0,0);var g=e.toDataURL(a.type||"image/WebP",1),j=i.dataUrltoBlob(g,a.name);c.resolve(j)}catch(k){c.reject(k)}},f.onerror=function(){c.reject()},f.src=d},function(a){
c.reject(a)})},function(a){c.reject(a)}),c.promise},i}]);
/*! ngTagsInput v3.2.0 License: MIT */!function(){"use strict";var a={backspace:8,tab:9,enter:13,escape:27,space:32,up:38,down:40,left:37,right:39,"delete":46,comma:188},b=9007199254740991,c=["text","email","url"],d=angular.module("ngTagsInput",[]);d.directive("tagsInput",["$timeout","$document","$window","$q","tagsInputConfig","tiUtil",function(d,e,f,g,h,i){function j(a,b,c,d){var e,f,h,j,k={};return e=function(b){return i.safeToString(b[a.displayProperty])},f=function(b,c){b[a.displayProperty]=c},h=function(b){var d=e(b),f=d&&d.length>=a.minLength&&d.length<=a.maxLength&&a.allowedTagsPattern.test(d)&&!i.findInObjectArray(k.items,b,a.keyProperty||a.displayProperty);return g.when(f&&c({$tag:b})).then(i.promisifyValue)},j=function(a){return g.when(d({$tag:a})).then(i.promisifyValue)},k.items=[],k.addText=function(a){var b={};return f(b,a),k.add(b)},k.add=function(c){var d=e(c);return a.replaceSpacesWithDashes&&(d=i.replaceSpacesWithDashes(d)),f(c,d),h(c).then(function(){k.items.push(c),b.trigger("tag-added",{$tag:c})})["catch"](function(){d&&b.trigger("invalid-tag",{$tag:c})})},k.remove=function(a){var c=k.items[a];return j(c).then(function(){return k.items.splice(a,1),k.clearSelection(),b.trigger("tag-removed",{$tag:c}),c})},k.select=function(a){0>a?a=k.items.length-1:a>=k.items.length&&(a=0),k.index=a,k.selected=k.items[a]},k.selectPrior=function(){k.select(--k.index)},k.selectNext=function(){k.select(++k.index)},k.removeSelected=function(){return k.remove(k.index)},k.clearSelection=function(){k.selected=null,k.index=-1},k.getItems=function(){return a.useStrings?k.items.map(e):k.items},k.clearSelection(),k}function k(a){return-1!==c.indexOf(a)}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",text:"=?",templateScope:"=?",tagClass:"&",onTagAdding:"&",onTagAdded:"&",onInvalidTag:"&",onTagRemoving:"&",onTagRemoved:"&",onTagClicked:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(a,c,d){a.events=i.simplePubSub(),h.load("tagsInput",a,c,{template:[String,"ngTagsInput/tag-item.html"],type:[String,"text",k],placeholder:[String,"Add a tag"],tabindex:[Number,null],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number,b],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],addOnPaste:[Boolean,!1],pasteSplitPattern:[RegExp,/,/],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number,0],maxTags:[Number,b],displayProperty:[String,"text"],keyProperty:[String,""],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1],spellcheck:[Boolean,!0],useStrings:[Boolean,!1]}),a.tagList=new j(a.options,a.events,i.handleUndefinedResult(a.onTagAdding,!0),i.handleUndefinedResult(a.onTagRemoving,!0)),this.registerAutocomplete=function(){d.find("input");return{addTag:function(b){return a.tagList.add(b)},getTags:function(){return a.tagList.items},getCurrentTagText:function(){return a.newTag.text()},getOptions:function(){return a.options},getTemplateScope:function(){return a.templateScope},on:function(b,c){return a.events.on(b,c,!0),this}}},this.registerTagItem=function(){return{getOptions:function(){return a.options},removeTag:function(b){a.disabled||a.tagList.remove(b)}}}}],link:function(b,c,g,h){var j,k,l=[a.enter,a.comma,a.space,a.backspace,a["delete"],a.left,a.right],m=b.tagList,n=b.events,o=b.options,p=c.find("input"),q=["minTags","maxTags","allowLeftoverText"];j=function(){h.$setValidity("maxTags",m.items.length<=o.maxTags),h.$setValidity("minTags",m.items.length>=o.minTags),h.$setValidity("leftoverText",b.hasFocus||o.allowLeftoverText?!0:!b.newTag.text())},k=function(){d(function(){p[0].focus()})},h.$isEmpty=function(a){return!a||!a.length},b.newTag={text:function(a){return angular.isDefined(a)?(b.text=a,void n.trigger("input-change",a)):b.text||""},invalid:null},b.track=function(a){return a[o.keyProperty||o.displayProperty]},b.getTagClass=function(a,c){var d=a===m.selected;return[b.tagClass({$tag:a,$index:c,$selected:d}),{selected:d}]},b.$watch("tags",function(a){if(a){if(m.items=i.makeObjectArray(a,o.displayProperty),o.useStrings)return;b.tags=m.items}else m.items=[]}),b.$watch("tags.length",function(){j(),h.$validate()}),g.$observe("disabled",function(a){b.disabled=a}),b.eventHandlers={input:{keydown:function(a){n.trigger("input-keydown",a)},focus:function(){b.hasFocus||(b.hasFocus=!0,n.trigger("input-focus"))},blur:function(){d(function(){var a=e.prop("activeElement"),d=a===p[0],f=c[0].contains(a);(d||!f)&&(b.hasFocus=!1,n.trigger("input-blur"))})},paste:function(a){a.getTextData=function(){var b=a.clipboardData||a.originalEvent&&a.originalEvent.clipboardData;return b?b.getData("text/plain"):f.clipboardData.getData("Text")},n.trigger("input-paste",a)}},host:{click:function(){b.disabled||k()}},tag:{click:function(a){n.trigger("tag-clicked",{$tag:a})}}},n.on("tag-added",b.onTagAdded).on("invalid-tag",b.onInvalidTag).on("tag-removed",b.onTagRemoved).on("tag-clicked",b.onTagClicked).on("tag-added",function(){b.newTag.text("")}).on("tag-added tag-removed",function(){b.tags=m.getItems(),h.$setDirty(),k()}).on("invalid-tag",function(){b.newTag.invalid=!0}).on("option-change",function(a){-1!==q.indexOf(a.name)&&j()}).on("input-change",function(){m.clearSelection(),b.newTag.invalid=null}).on("input-focus",function(){c.triggerHandler("focus"),h.$setValidity("leftoverText",!0)}).on("input-blur",function(){o.addOnBlur&&!o.addFromAutocompleteOnly&&m.addText(b.newTag.text()),c.triggerHandler("blur"),j()}).on("input-keydown",function(c){var d,e,f,g,h=c.keyCode,j={};i.isModifierOn(c)||-1===l.indexOf(h)||(j[a.enter]=o.addOnEnter,j[a.comma]=o.addOnComma,j[a.space]=o.addOnSpace,d=!o.addFromAutocompleteOnly&&j[h],e=(h===a.backspace||h===a["delete"])&&m.selected,g=h===a.backspace&&0===b.newTag.text().length&&o.enableEditingLastTag,f=(h===a.backspace||h===a.left||h===a.right)&&0===b.newTag.text().length&&!o.enableEditingLastTag,d?m.addText(b.newTag.text()):g?(m.selectPrior(),m.removeSelected().then(function(a){a&&b.newTag.text(a[o.displayProperty])})):e?m.removeSelected():f&&(h===a.left||h===a.backspace?m.selectPrior():h===a.right&&m.selectNext()),(d||f||e||g)&&c.preventDefault())}).on("input-paste",function(a){if(o.addOnPaste){var b=a.getTextData(),c=b.split(o.pasteSplitPattern);c.length>1&&(c.forEach(function(a){m.addText(a)}),a.preventDefault())}})}}}]),d.directive("tiTagItem",["tiUtil",function(a){return{restrict:"E",require:"^tagsInput",template:'<ng-include src="$$template"></ng-include>',scope:{$scope:"=scope",data:"="},link:function(b,c,d,e){var f=e.registerTagItem(),g=f.getOptions();b.$$template=g.template,b.$$removeTagSymbol=g.removeTagSymbol,b.$getDisplayText=function(){return a.safeToString(b.data[g.displayProperty])},b.$removeTag=function(){f.removeTag(b.$index)},b.$watch("$parent.$index",function(a){b.$index=a})}}}]),d.directive("autoComplete",["$document","$timeout","$sce","$q","tagsInputConfig","tiUtil",function(b,c,d,e,f,g){function h(a,b,c){var d,f,h,i={};return h=function(){return b.tagsInput.keyProperty||b.tagsInput.displayProperty},d=function(a,c){return a.filter(function(a){return!g.findInObjectArray(c,a,h(),function(a,c){return b.tagsInput.replaceSpacesWithDashes&&(a=g.replaceSpacesWithDashes(a),c=g.replaceSpacesWithDashes(c)),g.defaultComparer(a,c)})})},i.reset=function(){f=null,i.items=[],i.visible=!1,i.index=-1,i.selected=null,i.query=null},i.show=function(){b.selectFirstMatch?i.select(0):i.selected=null,i.visible=!0},i.load=g.debounce(function(c,j){i.query=c;var k=e.when(a({$query:c}));f=k,k.then(function(a){k===f&&(a=g.makeObjectArray(a.data||a,h()),a=d(a,j),i.items=a.slice(0,b.maxResultsToShow),i.items.length>0?i.show():i.reset())})},b.debounceDelay),i.selectNext=function(){i.select(++i.index)},i.selectPrior=function(){i.select(--i.index)},i.select=function(a){0>a?a=i.items.length-1:a>=i.items.length&&(a=0),i.index=a,i.selected=i.items[a],c.trigger("suggestion-selected",a)},i.reset(),i}function i(a,b){var c=a.find("li").eq(b),d=c.parent(),e=c.prop("offsetTop"),f=c.prop("offsetHeight"),g=d.prop("clientHeight"),h=d.prop("scrollTop");h>e?d.prop("scrollTop",e):e+f>g+h&&d.prop("scrollTop",e+f-g)}return{restrict:"E",require:"^tagsInput",scope:{source:"&",matchClass:"&"},templateUrl:"ngTagsInput/auto-complete.html",controller:["$scope","$element","$attrs",function(a,b,c){a.events=g.simplePubSub(),f.load("autoComplete",a,c,{template:[String,"ngTagsInput/auto-complete-match.html"],debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10],loadOnDownArrow:[Boolean,!1],loadOnEmpty:[Boolean,!1],loadOnFocus:[Boolean,!1],selectFirstMatch:[Boolean,!0],displayProperty:[String,""]}),a.suggestionList=new h(a.source,a.options,a.events),this.registerAutocompleteMatch=function(){return{getOptions:function(){return a.options},getQuery:function(){return a.suggestionList.query}}}}],link:function(b,c,d,e){var f,h=[a.enter,a.tab,a.escape,a.up,a.down],j=b.suggestionList,k=e.registerAutocomplete(),l=b.options,m=b.events;l.tagsInput=k.getOptions(),f=function(a){return a&&a.length>=l.minLength||!a&&l.loadOnEmpty},b.templateScope=k.getTemplateScope(),b.addSuggestionByIndex=function(a){j.select(a),b.addSuggestion()},b.addSuggestion=function(){var a=!1;return j.selected&&(k.addTag(angular.copy(j.selected)),j.reset(),a=!0),a},b.track=function(a){return a[l.tagsInput.keyProperty||l.tagsInput.displayProperty]},b.getSuggestionClass=function(a,c){var d=a===j.selected;return[b.matchClass({$match:a,$index:c,$selected:d}),{selected:d}]},k.on("tag-added tag-removed invalid-tag input-blur",function(){j.reset()}).on("input-change",function(a){f(a)?j.load(a,k.getTags()):j.reset()}).on("input-focus",function(){var a=k.getCurrentTagText();l.loadOnFocus&&f(a)&&j.load(a,k.getTags())}).on("input-keydown",function(c){var d=c.keyCode,e=!1;if(!g.isModifierOn(c)&&-1!==h.indexOf(d))return j.visible?d===a.down?(j.selectNext(),e=!0):d===a.up?(j.selectPrior(),e=!0):d===a.escape?(j.reset(),e=!0):(d===a.enter||d===a.tab)&&(e=b.addSuggestion()):d===a.down&&b.options.loadOnDownArrow&&(j.load(k.getCurrentTagText(),k.getTags()),e=!0),e?(c.preventDefault(),c.stopImmediatePropagation(),!1):void 0}),m.on("suggestion-selected",function(a){i(c,a)})}}}]),d.directive("tiAutocompleteMatch",["$sce","tiUtil",function(a,b){return{restrict:"E",require:"^autoComplete",template:'<ng-include src="$$template"></ng-include>',scope:{$scope:"=scope",data:"="},link:function(c,d,e,f){var g=f.registerAutocompleteMatch(),h=g.getOptions();c.$$template=h.template,c.$index=c.$parent.$index,c.$highlight=function(c){return h.highlightMatchedText&&(c=b.safeHighlight(c,g.getQuery())),a.trustAsHtml(c)},c.$getDisplayText=function(){return b.safeToString(c.data[h.displayProperty||h.tagsInput.displayProperty])}}}}]),d.directive("tiTranscludeAppend",function(){return function(a,b,c,d,e){e(function(a){b.append(a)})}}),d.directive("tiAutosize",["tagsInputConfig",function(a){return{restrict:"A",require:"ngModel",link:function(b,c,d,e){var f,g,h=a.getTextAutosizeThreshold();f=angular.element('<span class="input"></span>'),f.css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),c.parent().append(f),g=function(a){var b,e=a;return angular.isString(e)&&0===e.length&&(e=d.placeholder),e&&(f.text(e),f.css("display",""),b=f.prop("offsetWidth"),f.css("display","none")),c.css("width",b?b+h+"px":""),a},e.$parsers.unshift(g),e.$formatters.unshift(g),d.$observe("placeholder",function(a){e.$modelValue||g(a)})}}}]),d.directive("tiBindAttrs",function(){return function(a,b,c){a.$watch(c.tiBindAttrs,function(a){angular.forEach(a,function(a,b){c.$set(b,a)})},!0)}}),d.provider("tagsInputConfig",function(){var a={},b={},c=3;this.setDefaults=function(b,c){return a[b]=c,this},this.setActiveInterpolation=function(a,c){return b[a]=c,this},this.setTextAutosizeThreshold=function(a){return c=a,this},this.$get=["$interpolate",function(d){var e={};return e[String]=function(a){return a},e[Number]=function(a){return parseInt(a,10)},e[Boolean]=function(a){return"true"===a.toLowerCase()},e[RegExp]=function(a){return new RegExp(a)},{load:function(c,f,g,h){var i=function(){return!0};f.options={},angular.forEach(h,function(h,j){var k,l,m,n,o,p;k=h[0],l=h[1],m=h[2]||i,n=e[k],o=function(){var b=a[c]&&a[c][j];return angular.isDefined(b)?b:l},p=function(a){f.options[j]=a&&m(a)?n(a):o()},b[c]&&b[c][j]?g.$observe(j,function(a){p(a),f.events.trigger("option-change",{name:j,newValue:a})}):p(g[j]&&d(g[j])(f.$parent))})},getTextAutosizeThreshold:function(){return c}}}]}),d.factory("tiUtil",["$timeout","$q",function(a,b){var c={};return c.debounce=function(b,c){var d;return function(){var e=arguments;a.cancel(d),d=a(function(){b.apply(null,e)},c)}},c.makeObjectArray=function(a,b){if(!angular.isArray(a)||0===a.length||angular.isObject(a[0]))return a;var c=[];return a.forEach(function(a){var d={};d[b]=a,c.push(d)}),c},c.findInObjectArray=function(a,b,d,e){var f=null;return e=e||c.defaultComparer,a.some(function(a){return e(a[d],b[d])?(f=a,!0):void 0}),f},c.defaultComparer=function(a,b){return c.safeToString(a).toLowerCase()===c.safeToString(b).toLowerCase()},c.safeHighlight=function(a,b){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}if(a=c.encodeHTML(a),b=c.encodeHTML(b),!b)return a;var e=new RegExp("&[^;]+;|"+d(b),"gi");return a.replace(e,function(a){return a.toLowerCase()===b.toLowerCase()?"<em>"+a+"</em>":a})},c.safeToString=function(a){return angular.isUndefined(a)||null==a?"":a.toString().trim()},c.encodeHTML=function(a){return c.safeToString(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},c.handleUndefinedResult=function(a,b){return function(){var c=a.apply(null,arguments);return angular.isUndefined(c)?b:c}},c.replaceSpacesWithDashes=function(a){return c.safeToString(a).replace(/\s/g,"-")},c.isModifierOn=function(a){return a.shiftKey||a.ctrlKey||a.altKey||a.metaKey},c.promisifyValue=function(a){return a=angular.isUndefined(a)?!0:a,b[a?"when":"reject"]()},c.simplePubSub=function(){var a={};return{on:function(b,c,d){return b.split(" ").forEach(function(b){a[b]||(a[b]=[]);var e=d?[].unshift:[].push;e.call(a[b],c)}),this},trigger:function(b,d){var e=a[b]||[];return e.every(function(a){return c.handleUndefinedResult(a,!0)(d)}),this}}},c}]),d.run(["$templateCache",function(a){a.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ng-click="eventHandlers.host.click()" ti-transclude-append><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="getTagClass(tag, $index)" ng-click="eventHandlers.tag.click(tag)"><ti-tag-item scope="templateScope" data="::tag"></ti-tag-item></li></ul><input class="input" autocomplete="off" ng-model="newTag.text" ng-model-options="{getterSetter: true}" ng-keydown="eventHandlers.input.keydown($event)" ng-focus="eventHandlers.input.focus($event)" ng-blur="eventHandlers.input.blur($event)" ng-paste="eventHandlers.input.paste($event)" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ng-disabled="disabled" ti-bind-attrs="{type: options.type, placeholder: options.placeholder, tabindex: options.tabindex, spellcheck: options.spellcheck}" ti-autosize></div></div>'),a.put("ngTagsInput/tag-item.html",'<span ng-bind="$getDisplayText()"></span> <a class="remove-button" ng-click="$removeTag()" ng-bind="::$$removeTagSymbol"></a>'),a.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-if="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="getSuggestionClass(item, $index)" ng-click="addSuggestionByIndex($index)" ng-mouseenter="suggestionList.select($index)"><ti-autocomplete-match scope="templateScope" data="::item"></ti-autocomplete-match></li></ul></div>'),a.put("ngTagsInput/auto-complete-match.html",'<span ng-bind-html="$highlight($getDisplayText())"></span>')}])}();
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.popover", "ui.bootstrap.tooltip", "ui.bootstrap.position", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.multiMap", "ui.bootstrap.timepicker"]), angular.module("ui.bootstrap.tpls", ["uib/template/popover/popover-html.html", "uib/template/popover/popover-template.html", "uib/template/popover/popover.html", "uib/template/tooltip/tooltip-html-popup.html", "uib/template/tooltip/tooltip-popup.html", "uib/template/tooltip/tooltip-template-popup.html", "uib/template/modal/window.html", "uib/template/timepicker/timepicker.html"]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function () {
    return {
        restrict: "A",
        scope: {
            uibTitle: "@",
            contentExp: "&",
            originScope: "&"
        },
        templateUrl: "uib/template/popover/popover-template.html"
    }
}).directive("uibPopoverTemplate", ["$uibTooltip", function (t) {
    return t("uibPopoverTemplate", "popover", "click", {
        useContentExp: !0
    })
}]).directive("uibPopoverHtmlPopup", function () {
    return {
        restrict: "A",
        scope: {
            contentExp: "&",
            uibTitle: "@"
        },
        templateUrl: "uib/template/popover/popover-html.html"
    }
}).directive("uibPopoverHtml", ["$uibTooltip", function (t) {
    return t("uibPopoverHtml", "popover", "click", {
        useContentExp: !0
    })
}]).directive("uibPopoverPopup", function () {
    return {
        restrict: "A",
        scope: {
            uibTitle: "@",
            content: "@"
        },
        templateUrl: "uib/template/popover/popover.html"
    }
}).directive("uibPopover", ["$uibTooltip", function (t) {
    return t("uibPopover", "popover", "click")
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function () {
    var t = {
            placement: "top",
            placementClassPrefix: "",
            animation: !0,
            popupDelay: 0,
            popupCloseDelay: 0,
            useContentExp: !1
        },
        e = {
            mouseenter: "mouseleave",
            click: "click",
            outsideClick: "outsideClick",
            focus: "blur",
            none: ""
        },
        o = {};
    this.options = function (t) {
        angular.extend(o, t)
    }, this.setTriggers = function (t) {
        angular.extend(e, t)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function (n, i, r, a, l, p, s, u, c) {
        var d = c.createNew();

        function m(t) {
            if (27 === t.which) {
                var e = d.top();
                e && (e.value.close(), e = null)
            }
        }
        return a.on("keyup", m), s.$on("$destroy", function () {
                a.off("keyup", m)
            }),
            function (n, s, c, m) {
                function f(t) {
                    var o = (t || m.trigger || c).split(" ");
                    return {
                        show: o,
                        hide: o.map(function (t) {
                            return e[t] || t
                        })
                    }
                }
                m = angular.extend({}, t, o, m);
                var h = n.replace(/[A-Z]/g, function (t, e) {
                        return (e ? "-" : "") + t.toLowerCase()
                    }),
                    b = p.startSymbol(),
                    v = p.endSymbol(),
                    g = "<div " + h + '-popup uib-title="' + b + "title" + v + '" ' + (m.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + b + "content" + v + '" ') + 'origin-scope="origScope" class="uib-position-measure ' + s + '" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';
                return {
                    compile: function (t, e) {
                        var o = i(g);
                        return function (t, e, i, p) {
                            var c, h, b, v, g, w, $, y, k = !!angular.isDefined(m.appendToBody) && m.appendToBody,
                                C = f(void 0),
                                S = angular.isDefined(i[s + "Enable"]),
                                T = t.$new(!0),
                                D = !1,
                                M = !!angular.isDefined(i[s + "IsOpen"]) && u(i[s + "IsOpen"]),
                                x = !!m.useContentExp && u(i[n]),
                                E = [],
                                I = function () {
                                    c && c.html() && (w || (w = r(function () {
                                        var t = l.positionElements(e, c, T.placement, k),
                                            o = angular.isDefined(c.offsetHeight) ? c.offsetHeight : c.prop("offsetHeight"),
                                            n = k ? l.offset(e) : l.position(e);
                                        c.css({
                                            top: t.top + "px",
                                            left: t.left + "px"
                                        });
                                        var i = t.placement.split("-");
                                        c.hasClass(i[0]) || (c.removeClass(y.split("-")[0]), c.addClass(i[0])), c.hasClass(m.placementClassPrefix + t.placement) || (c.removeClass(m.placementClassPrefix + y), c.addClass(m.placementClassPrefix + t.placement)), $ = r(function () {
                                            var t = angular.isDefined(c.offsetHeight) ? c.offsetHeight : c.prop("offsetHeight"),
                                                e = l.adjustTop(i, n, o, t);
                                            e && c.css(e), $ = null
                                        }, 0, !1), c.hasClass("uib-position-measure") ? (l.positionArrow(c, t.placement), c.removeClass("uib-position-measure")) : y !== t.placement && l.positionArrow(c, t.placement), y = t.placement, w = null
                                    }, 0, !1)))
                                };

                            function H() {
                                T.isOpen ? P() : O()
                            }

                            function O() {
                                S && !t.$eval(i[s + "Enable"]) || (F(), function () {
                                    T.title = i[s + "Title"], T.content = x ? x(t) : i[n];
                                    T.popupClass = i[s + "Class"], T.placement = angular.isDefined(i[s + "Placement"]) ? i[s + "Placement"] : m.placement;
                                    var e = l.parsePlacement(T.placement);
                                    y = e[1] ? e[0] + "-" + e[1] : e[0];
                                    var o = parseInt(i[s + "PopupDelay"], 10),
                                        r = parseInt(i[s + "PopupCloseDelay"], 10);
                                    T.popupDelay = isNaN(o) ? m.popupDelay : o, T.popupCloseDelay = isNaN(r) ? m.popupCloseDelay : r
                                }(), T.popupDelay ? v || (v = r(A, T.popupDelay, !1)) : A())
                            }

                            function P() {
                                N(), T.popupCloseDelay ? g || (g = r(R, T.popupCloseDelay, !1)) : R()
                            }

                            function A() {
                                if (N(), F(), !T.content) return angular.noop;
                                ! function () {
                                    if (c) return;
                                    h = T.$new(), c = o(h, function (t) {
                                            k ? a.find("body").append(t) : e.after(t)
                                        }), d.add(T, {
                                            close: R
                                        }),
                                        function () {
                                            E.length = 0, x ? (E.push(t.$watch(x, function (t) {
                                                T.content = t, !t && T.isOpen && R()
                                            })), E.push(h.$watch(function () {
                                                D || (D = !0, h.$$postDigest(function () {
                                                    D = !1, T && T.isOpen && I()
                                                }))
                                            }))) : E.push(i.$observe(n, function (t) {
                                                T.content = t, !t && T.isOpen ? R() : I()
                                            }));
                                            E.push(i.$observe(s + "Title", function (t) {
                                                T.title = t, T.isOpen && I()
                                            })), E.push(i.$observe(s + "Placement", function (t) {
                                                T.placement = t || m.placement, T.isOpen && I()
                                            }))
                                        }()
                                }(), T.$evalAsync(function () {
                                    T.isOpen = !0, L(!0), I()
                                })
                            }

                            function N() {
                                v && (r.cancel(v), v = null), w && (r.cancel(w), w = null)
                            }

                            function R() {
                                T && T.$evalAsync(function () {
                                    T && (T.isOpen = !1, L(!1), T.animation ? b || (b = r(U, 150, !1)) : U())
                                })
                            }

                            function F() {
                                g && (r.cancel(g), g = null), b && (r.cancel(b), b = null)
                            }

                            function U() {
                                N(), F(), E.length && (angular.forEach(E, function (t) {
                                    t()
                                }), E.length = 0), c && (c.remove(), c = null, $ && r.cancel($)), d.remove(T), h && (h.$destroy(), h = null)
                            }

                            function L(e) {
                                M && angular.isFunction(M.assign) && M.assign(t, e)
                            }

                            function W(t) {
                                T && T.isOpen && c && (e[0].contains(t.target) || c[0].contains(t.target) || P())
                            }

                            function V(t) {
                                27 === t.which && P()
                            }
                            T.origScope = t, T.isOpen = !1, T.contentExp = function () {
                                return T.content
                            }, i.$observe("disabled", function (t) {
                                t && N(), t && T.isOpen && R()
                            }), M && t.$watch(M, function (t) {
                                T && !t === T.isOpen && H()
                            });
                            var q, B, j, z = function () {
                                C.show.forEach(function (t) {
                                    "outsideClick" === t ? e.off("click", H) : (e.off(t, O), e.off(t, H)), e.off("keypress", V)
                                }), C.hide.forEach(function (t) {
                                    "outsideClick" === t ? a.off("click", W) : e.off(t, P)
                                })
                            };
                            q = [], B = [], j = t.$eval(i[s + "Trigger"]), z(), angular.isObject(j) ? (Object.keys(j).forEach(function (t) {
                                q.push(t), B.push(j[t])
                            }), C = {
                                show: q,
                                hide: B
                            }) : C = f(j), "none" !== C.show && C.show.forEach(function (t, o) {
                                "outsideClick" === t ? (e.on("click", H), a.on("click", W)) : t === C.hide[o] ? e.on(t, H) : t && (e.on(t, O), e.on(C.hide[o], P)), e.on("keypress", V)
                            });
                            var _, Y = t.$eval(i[s + "Animation"]);
                            T.animation = angular.isDefined(Y) ? !!Y : m.animation;
                            var X = s + "AppendToBody";
                            _ = X in i && void 0 === i[X] || t.$eval(i[X]), k = angular.isDefined(_) ? _ : k, t.$on("$destroy", function () {
                                z(), U(), T = null
                            })
                        }
                    }
                }
            }
    }]
}).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (t, e, o, n) {
    return {
        link: function (i, r, a) {
            var l, p, s, u = i.$eval(a.tooltipTemplateTranscludeScope),
                c = 0,
                d = function () {
                    p && (p.remove(), p = null), l && (l.$destroy(), l = null), s && (t.leave(s).then(function () {
                        p = null
                    }), p = s, s = null)
                };
            i.$watch(e.parseAsResourceUrl(a.uibTooltipTemplateTransclude), function (e) {
                var a = ++c;
                e ? (n(e, !0).then(function (n) {
                    if (a === c) {
                        var i = u.$new(),
                            p = o(n)(i, function (e) {
                                d(), t.enter(e, r)
                            });
                        s = p, (l = i).$emit("$includeContentLoaded", e)
                    }
                }, function () {
                    a === c && (d(), i.$emit("$includeContentError", e))
                }), i.$emit("$includeContentRequested", e)) : d()
            }), i.$on("$destroy", d)
        }
    }
}]).directive("uibTooltipClasses", ["$uibPosition", function (t) {
    return {
        restrict: "A",
        link: function (e, o, n) {
            if (e.placement) {
                var i = t.parsePlacement(e.placement);
                o.addClass(i[0])
            }
            e.popupClass && o.addClass(e.popupClass), e.animation && o.addClass(n.tooltipAnimationClass)
        }
    }
}]).directive("uibTooltipPopup", function () {
    return {
        restrict: "A",
        scope: {
            content: "@"
        },
        templateUrl: "uib/template/tooltip/tooltip-popup.html"
    }
}).directive("uibTooltip", ["$uibTooltip", function (t) {
    return t("uibTooltip", "tooltip", "mouseenter")
}]).directive("uibTooltipTemplatePopup", function () {
    return {
        restrict: "A",
        scope: {
            contentExp: "&",
            originScope: "&"
        },
        templateUrl: "uib/template/tooltip/tooltip-template-popup.html"
    }
}).directive("uibTooltipTemplate", ["$uibTooltip", function (t) {
    return t("uibTooltipTemplate", "tooltip", "mouseenter", {
        useContentExp: !0
    })
}]).directive("uibTooltipHtmlPopup", function () {
    return {
        restrict: "A",
        scope: {
            contentExp: "&"
        },
        templateUrl: "uib/template/tooltip/tooltip-html-popup.html"
    }
}).directive("uibTooltipHtml", ["$uibTooltip", function (t) {
    return t("uibTooltipHtml", "tooltip", "mouseenter", {
        useContentExp: !0
    })
}]), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (t, e) {
    var o, n, i = {
            normal: /(auto|scroll)/,
            hidden: /(auto|scroll|hidden)/
        },
        r = {
            auto: /\s?auto?\s?/i,
            primary: /^(top|bottom|left|right)$/,
            secondary: /^(top|bottom|left|right|center)$/,
            vertical: /^(top|bottom)$/
        },
        a = /(HTML|BODY)/;
    return {
        getRawNode: function (t) {
            return t.nodeName ? t : t[0] || t
        },
        parseStyle: function (t) {
            return t = parseFloat(t), isFinite(t) ? t : 0
        },
        offsetParent: function (o) {
            var n, i = (o = this.getRawNode(o)).offsetParent || t[0].documentElement;
            for (; i && i !== t[0].documentElement && (n = i, "static" === (e.getComputedStyle(n).position || "static"));) i = i.offsetParent;
            return i || t[0].documentElement
        },
        scrollbarWidth: function (i) {
            if (i) {
                if (angular.isUndefined(n)) {
                    var r = t.find("body");
                    r.addClass("uib-position-body-scrollbar-measure"), n = e.innerWidth - r[0].clientWidth, n = isFinite(n) ? n : 0, r.removeClass("uib-position-body-scrollbar-measure")
                }
                return n
            }
            if (angular.isUndefined(o)) {
                var a = angular.element('<div class="uib-position-scrollbar-measure"></div>');
                t.find("body").append(a), o = a[0].offsetWidth - a[0].clientWidth, o = isFinite(o) ? o : 0, a.remove()
            }
            return o
        },
        scrollbarPadding: function (t) {
            t = this.getRawNode(t);
            var o = e.getComputedStyle(t),
                n = this.parseStyle(o.paddingRight),
                i = this.parseStyle(o.paddingBottom),
                r = this.scrollParent(t, !1, !0),
                l = this.scrollbarWidth(a.test(r.tagName));
            return {
                scrollbarWidth: l,
                widthOverflow: r.scrollWidth > r.clientWidth,
                right: n + l,
                originalRight: n,
                heightOverflow: r.scrollHeight > r.clientHeight,
                bottom: i + l,
                originalBottom: i
            }
        },
        isScrollable: function (t, o) {
            t = this.getRawNode(t);
            var n = o ? i.hidden : i.normal,
                r = e.getComputedStyle(t);
            return n.test(r.overflow + r.overflowY + r.overflowX)
        },
        scrollParent: function (o, n, r) {
            o = this.getRawNode(o);
            var a = n ? i.hidden : i.normal,
                l = t[0].documentElement,
                p = e.getComputedStyle(o);
            if (r && a.test(p.overflow + p.overflowY + p.overflowX)) return o;
            var s = "absolute" === p.position,
                u = o.parentElement || l;
            if (u === l || "fixed" === p.position) return l;
            for (; u.parentElement && u !== l;) {
                var c = e.getComputedStyle(u);
                if (s && "static" !== c.position && (s = !1), !s && a.test(c.overflow + c.overflowY + c.overflowX)) break;
                u = u.parentElement
            }
            return u
        },
        position: function (o, n) {
            o = this.getRawNode(o);
            var i = this.offset(o);
            if (n) {
                var r = e.getComputedStyle(o);
                i.top -= this.parseStyle(r.marginTop), i.left -= this.parseStyle(r.marginLeft)
            }
            var a = this.offsetParent(o),
                l = {
                    top: 0,
                    left: 0
                };
            return a !== t[0].documentElement && ((l = this.offset(a)).top += a.clientTop - a.scrollTop, l.left += a.clientLeft - a.scrollLeft), {
                width: Math.round(angular.isNumber(i.width) ? i.width : o.offsetWidth),
                height: Math.round(angular.isNumber(i.height) ? i.height : o.offsetHeight),
                top: Math.round(i.top - l.top),
                left: Math.round(i.left - l.left)
            }
        },
        offset: function (o) {
            var n = (o = this.getRawNode(o)).getBoundingClientRect();
            return {
                width: Math.round(angular.isNumber(n.width) ? n.width : o.offsetWidth),
                height: Math.round(angular.isNumber(n.height) ? n.height : o.offsetHeight),
                top: Math.round(n.top + (e.pageYOffset || t[0].documentElement.scrollTop)),
                left: Math.round(n.left + (e.pageXOffset || t[0].documentElement.scrollLeft))
            }
        },
        viewportOffset: function (o, n, i) {
            i = !1 !== i;
            var r = (o = this.getRawNode(o)).getBoundingClientRect(),
                a = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                l = n ? t[0].documentElement : this.scrollParent(o),
                p = l.getBoundingClientRect();
            if (a.top = p.top + l.clientTop, a.left = p.left + l.clientLeft, l === t[0].documentElement && (a.top += e.pageYOffset, a.left += e.pageXOffset), a.bottom = a.top + l.clientHeight, a.right = a.left + l.clientWidth, i) {
                var s = e.getComputedStyle(l);
                a.top += this.parseStyle(s.paddingTop), a.bottom -= this.parseStyle(s.paddingBottom), a.left += this.parseStyle(s.paddingLeft), a.right -= this.parseStyle(s.paddingRight)
            }
            return {
                top: Math.round(r.top - a.top),
                bottom: Math.round(a.bottom - r.bottom),
                left: Math.round(r.left - a.left),
                right: Math.round(a.right - r.right)
            }
        },
        parsePlacement: function (t) {
            var e = r.auto.test(t);
            return e && (t = t.replace(r.auto, "")), (t = t.split("-"))[0] = t[0] || "top", r.primary.test(t[0]) || (t[0] = "top"), t[1] = t[1] || "center", r.secondary.test(t[1]) || (t[1] = "center"), t[2] = !!e, t
        },
        positionElements: function (t, o, n, i) {
            t = this.getRawNode(t), o = this.getRawNode(o);
            var a = angular.isDefined(o.offsetWidth) ? o.offsetWidth : o.prop("offsetWidth"),
                l = angular.isDefined(o.offsetHeight) ? o.offsetHeight : o.prop("offsetHeight");
            n = this.parsePlacement(n);
            var p = i ? this.offset(t) : this.position(t),
                s = {
                    top: 0,
                    left: 0,
                    placement: ""
                };
            if (n[2]) {
                var u = this.viewportOffset(t, i),
                    c = e.getComputedStyle(o),
                    d = a + Math.round(Math.abs(this.parseStyle(c.marginLeft) + this.parseStyle(c.marginRight))),
                    m = l + Math.round(Math.abs(this.parseStyle(c.marginTop) + this.parseStyle(c.marginBottom)));
                if (n[0] = "top" === n[0] && m > u.top && m <= u.bottom ? "bottom" : "bottom" === n[0] && m > u.bottom && m <= u.top ? "top" : "left" === n[0] && d > u.left && d <= u.right ? "right" : "right" === n[0] && d > u.right && d <= u.left ? "left" : n[0], n[1] = "top" === n[1] && m - p.height > u.bottom && m - p.height <= u.top ? "bottom" : "bottom" === n[1] && m - p.height > u.top && m - p.height <= u.bottom ? "top" : "left" === n[1] && d - p.width > u.right && d - p.width <= u.left ? "right" : "right" === n[1] && d - p.width > u.left && d - p.width <= u.right ? "left" : n[1], "center" === n[1])
                    if (r.vertical.test(n[0])) {
                        var f = p.width / 2 - a / 2;
                        u.left + f < 0 && d - p.width <= u.right ? n[1] = "left" : u.right + f < 0 && d - p.width <= u.left && (n[1] = "right")
                    } else {
                        var h = p.height / 2 - m / 2;
                        u.top + h < 0 && m - p.height <= u.bottom ? n[1] = "top" : u.bottom + h < 0 && m - p.height <= u.top && (n[1] = "bottom")
                    }
            }
            switch (n[0]) {
                case "top":
                    s.top = p.top - l;
                    break;
                case "bottom":
                    s.top = p.top + p.height;
                    break;
                case "left":
                    s.left = p.left - a;
                    break;
                case "right":
                    s.left = p.left + p.width
            }
            switch (n[1]) {
                case "top":
                    s.top = p.top;
                    break;
                case "bottom":
                    s.top = p.top + p.height - l;
                    break;
                case "left":
                    s.left = p.left;
                    break;
                case "right":
                    s.left = p.left + p.width - a;
                    break;
                case "center":
                    r.vertical.test(n[0]) ? s.left = p.left + p.width / 2 - a / 2 : s.top = p.top + p.height / 2 - l / 2
            }
            return s.top = Math.round(s.top), s.left = Math.round(s.left), s.placement = "center" === n[1] ? n[0] : n[0] + "-" + n[1], s
        },
        adjustTop: function (t, e, o, n) {
            if (-1 !== t.indexOf("top") && o !== n) return {
                top: e.top - n + "px"
            }
        },
        positionArrow: function (t, o) {
            var n = (t = this.getRawNode(t)).querySelector(".tooltip-inner, .popover-inner");
            if (n) {
                var i = angular.element(n).hasClass("tooltip-inner"),
                    a = i ? t.querySelector(".tooltip-arrow") : t.querySelector(".arrow");
                if (a) {
                    var l = {
                        top: "",
                        bottom: "",
                        left: "",
                        right: ""
                    };
                    if ("center" !== (o = this.parsePlacement(o))[1]) {
                        var p = "border-" + o[0] + "-width",
                            s = e.getComputedStyle(a)[p],
                            u = "border-";
                        r.vertical.test(o[0]) ? u += o[0] + "-" + o[1] : u += o[1] + "-" + o[0], u += "-radius";
                        var c = e.getComputedStyle(i ? n : t)[u];
                        switch (o[0]) {
                            case "top":
                                l.bottom = i ? "0" : "-" + s;
                                break;
                            case "bottom":
                                l.top = i ? "0" : "-" + s;
                                break;
                            case "left":
                                l.right = i ? "0" : "-" + s;
                                break;
                            case "right":
                                l.left = i ? "0" : "-" + s
                        }
                        l[o[1]] = c, angular.element(a).css(l)
                    } else angular.element(a).css(l)
                }
            }
        }
    }
}]), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var t = [];
            return {
                add: function (e, o) {
                    t.push({
                        key: e,
                        value: o
                    })
                },
                get: function (e) {
                    for (var o = 0; o < t.length; o++)
                        if (e === t[o].key) return t[o]
                },
                keys: function () {
                    for (var e = [], o = 0; o < t.length; o++) e.push(t[o].key);
                    return e
                },
                top: function () {
                    return t[t.length - 1]
                },
                remove: function (e) {
                    for (var o = -1, n = 0; n < t.length; n++)
                        if (e === t[n].key) {
                            o = n;
                            break
                        }
                    return t.splice(o, 1)[0]
                },
                removeTop: function () {
                    return t.pop()
                },
                length: function () {
                    return t.length
                }
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.multiMap", "ui.bootstrap.stackedMap", "ui.bootstrap.position"]).provider("$uibResolve", function () {
    var t = this;
    this.resolver = null, this.setResolver = function (t) {
        this.resolver = t
    }, this.$get = ["$injector", "$q", function (e, o) {
        var n = t.resolver ? e.get(t.resolver) : null;
        return {
            resolve: function (t, i, r, a) {
                if (n) return n.resolve(t, i, r, a);
                var l = [];
                return angular.forEach(t, function (t) {
                    angular.isFunction(t) || angular.isArray(t) ? l.push(o.resolve(e.invoke(t))) : angular.isString(t) ? l.push(o.resolve(e.get(t))) : l.push(o.resolve(t))
                }), o.all(l).then(function (e) {
                    var o = {},
                        n = 0;
                    return angular.forEach(t, function (t, i) {
                        o[i] = e[n++]
                    }), o
                })
            }
        }
    }]
}).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function (t, e, o) {
    return {
        restrict: "A",
        compile: function (t, e) {
            return t.addClass(e.backdropClass), n
        }
    };

    function n(e, n, i) {
        i.modalInClass && (t.addClass(n, i.modalInClass), e.$on(o.NOW_CLOSING_EVENT, function (o, r) {
            var a = r();
            e.modalOptions.animation ? t.removeClass(n, i.modalInClass).then(a) : a()
        }))
    }
}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function (t, e, o, n) {
    return {
        scope: {
            index: "@"
        },
        restrict: "A",
        transclude: !0,
        templateUrl: function (t, e) {
            return e.templateUrl || "uib/template/modal/window.html"
        },
        link: function (i, r, a) {
            r.addClass(a.windowTopClass || ""), i.size = a.size, i.close = function (e) {
                var o = t.getTop();
                o && o.value.backdrop && "static" !== o.value.backdrop && e.target === e.currentTarget && (e.preventDefault(), e.stopPropagation(), t.dismiss(o.key, "backdrop click"))
            }, r.on("click", i.close), i.$isRendered = !0;
            var l = e.defer();
            i.$$postDigest(function () {
                l.resolve()
            }), l.promise.then(function () {
                var l = null;
                a.modalInClass && (l = o(r, {
                    addClass: a.modalInClass
                }).start(), i.$on(t.NOW_CLOSING_EVENT, function (t, e) {
                    var n = e();
                    o(r, {
                        removeClass: a.modalInClass
                    }).start().then(n)
                })), e.when(l).then(function () {
                    var e = t.getTop();
                    if (e && t.modalRendered(e.key), !n[0].activeElement || !r[0].contains(n[0].activeElement)) {
                        var o = r[0].querySelector("[autofocus]");
                        o ? o.focus() : r[0].focus()
                    }
                })
            })
        }
    }
}]).directive("uibModalAnimationClass", function () {
    return {
        compile: function (t, e) {
            e.modalAnimation && t.addClass(e.uibModalAnimationClass)
        }
    }
}).directive("uibModalTransclude", ["$animate", function (t) {
    return {
        link: function (e, o, n, i, r) {
            r(e.$parent, function (e) {
                o.empty(), t.enter(e, o)
            })
        }
    }
}]).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", "$uibPosition", function (t, e, o, n, i, r, a, l, p) {
    var s, u, c, d = "modal-open",
        m = l.createNew(),
        f = a.createNew(),
        h = {
            NOW_CLOSING_EVENT: "modal.stack.now-closing"
        },
        b = 0,
        v = null,
        g = "data-bootstrap-modal-aria-hidden-count",
        w = /[A-Z]/g;

    function $() {
        for (var t = -1, e = m.keys(), o = 0; o < e.length; o++) m.get(e[o]).value.backdrop && (t = o);
        return t > -1 && t < b && (t = b), t
    }

    function y(t, e) {
        var o = m.get(t).value,
            n = o.appendTo;
        m.remove(t), (v = m.top()) && (b = parseInt(v.value.modalDomEl.attr("index"), 10)), C(o.modalDomEl, o.modalScope, function () {
                var e = o.openedClass || d;
                f.remove(e, t);
                var i = f.hasKey(e);
                n.toggleClass(e, i), !i && c && c.heightOverflow && c.scrollbarWidth && (c.originalRight ? n.css({
                    paddingRight: c.originalRight + "px"
                }) : n.css({
                    paddingRight: ""
                }), c = null), k(!0)
            }, o.closedDeferred),
            function () {
                if (s && -1 === $()) {
                    C(s, u, function () {
                        null
                    }), s = void 0, u = void 0
                }
            }(), e && e.focus ? e.focus() : n.focus && n.focus()
    }

    function k(t) {
        var e;
        m.length() > 0 && (e = m.top().value).modalDomEl.toggleClass(e.windowTopClass || "", t)
    }

    function C(e, o, n, i) {
        var a, l = null;
        return o.$broadcast(h.NOW_CLOSING_EVENT, function () {
            return a || (a = r.defer(), l = a.promise),
                function () {
                    a.resolve()
                }
        }), r.when(l).then(function r() {
            if (r.done) return;
            r.done = !0;
            t.leave(e).then(function () {
                n && n(), e.remove(), i && i.resolve()
            });
            o.$destroy()
        })
    }

    function S(t) {
        if (t.isDefaultPrevented()) return t;
        var e = m.top();
        if (e) switch (t.which) {
            case 27:
                e.value.keyboard && (t.preventDefault(), i.$apply(function () {
                    h.dismiss(e.key, "escape key press")
                }));
                break;
            case 9:
                var o = h.loadFocusElementList(e),
                    n = !1;
                t.shiftKey ? (h.isFocusInFirstItem(t, o) || h.isModalFocused(t, e)) && (n = h.focusLastFocusableElement(o)) : h.isFocusInLastItem(t, o) && (n = h.focusFirstFocusableElement(o)), n && (t.preventDefault(), t.stopPropagation())
        }
    }

    function T(t, e, o) {
        return !t.value.modalScope.$broadcast("modal.closing", e, o).defaultPrevented
    }

    function D() {
        Array.prototype.forEach.call(document.querySelectorAll("[" + g + "]"), function (t) {
            var e = parseInt(t.getAttribute(g), 10) - 1;
            t.setAttribute(g, e), e || (t.removeAttribute(g), t.removeAttribute("aria-hidden"))
        })
    }
    return i.$watch($, function (t) {
        u && (u.index = t)
    }), o.on("keydown", S), i.$on("$destroy", function () {
        o.off("keydown", S)
    }), h.open = function (e, r) {
        var a = o[0].activeElement,
            l = r.openedClass || d;
        k(!1), v = m.top(), m.add(e, {
            deferred: r.deferred,
            renderDeferred: r.renderDeferred,
            closedDeferred: r.closedDeferred,
            modalScope: r.scope,
            backdrop: r.backdrop,
            keyboard: r.keyboard,
            openedClass: r.openedClass,
            windowTopClass: r.windowTopClass,
            animation: r.animation,
            appendTo: r.appendTo
        }), f.put(l, e);
        var h, y = r.appendTo,
            C = $();
        C >= 0 && !s && ((u = i.$new(!0)).modalOptions = r, u.index = C, (s = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>')).attr({
            class: "modal-backdrop",
            "ng-style": "{'z-index': 8998 + (index && 1 || 0) + index*10}",
            "uib-modal-animation-class": "fade",
            "modal-in-class": "in"
        }), r.backdropClass && s.addClass(r.backdropClass), r.animation && s.attr("modal-animation", "true"), n(s)(u), t.enter(s, y), p.isScrollable(y) && (c = p.scrollbarPadding(y)).heightOverflow && c.scrollbarWidth && y.css({
            paddingRight: c.right + "px"
        })), r.component ? (h = document.createElement(r.component.name.replace(w, function (t, e) {
            return (e ? "-" : "") + t.toLowerCase()
        })), (h = angular.element(h)).attr({
            resolve: "$resolve",
            "modal-instance": "$uibModalInstance",
            close: "$close($value)",
            dismiss: "$dismiss($value)"
        })) : h = r.content, b = v ? parseInt(v.value.modalDomEl.attr("index"), 10) + 1 : 0;
        var S = angular.element('<div uib-modal-window="modal-window"></div>');
        S.attr({
                class: "section-any modal",
                "template-url": r.windowTemplateUrl,
                "window-top-class": r.windowTopClass,
                role: "dialog",
                "aria-labelledby": r.ariaLabelledBy,
                "aria-describedby": r.ariaDescribedBy,
                size: r.size,
                index: b,
                animate: "animate",
                "ng-style": "{'z-index': 9001 + $$topModalIndex*10, display: 'block'}",
                tabindex: -1,
                "uib-modal-animation-class": "fade",
                "modal-in-class": "in"
            }).append(h), r.windowClass && S.addClass(r.windowClass), r.animation && S.attr("modal-animation", "true"), y.addClass(l), r.scope && (r.scope.$$topModalIndex = b), t.enter(n(S)(r.scope), y), m.top().value.modalDomEl = S, m.top().value.modalOpener = a,
            function t(e) {
                if (!e || "BODY" === e[0].tagName) return;
                (o = e, n = o.parent() ? o.parent().children() : [], Array.prototype.filter.call(n, function (t) {
                    return t !== o[0]
                })).forEach(function (t) {
                    var e = "true" === t.getAttribute("aria-hidden"),
                        o = parseInt(t.getAttribute(g), 10);
                    o || (o = e ? 1 : 0), t.setAttribute(g, o + 1), t.setAttribute("aria-hidden", "true")
                });
                var o, n;
                return t(e.parent())
            }(S)
    }, h.close = function (t, e) {
        var o = m.get(t);
        return D(), o && T(o, e, !0) ? (o.value.modalScope.$$uibDestructionScheduled = !0, o.value.deferred.resolve(e), y(t, o.value.modalOpener), !0) : !o
    }, h.dismiss = function (t, e) {
        var o = m.get(t);
        return D(), o && T(o, e, !1) ? (o.value.modalScope.$$uibDestructionScheduled = !0, o.value.deferred.reject(e), y(t, o.value.modalOpener), !0) : !o
    }, h.dismissAll = function (t) {
        for (var e = this.getTop(); e && this.dismiss(e.key, t);) e = this.getTop()
    }, h.getTop = function () {
        return m.top()
    }, h.modalRendered = function (t) {
        var e = m.get(t);
        e && e.value.renderDeferred.resolve()
    }, h.focusFirstFocusableElement = function (t) {
        return t.length > 0 && (t[0].focus(), !0)
    }, h.focusLastFocusableElement = function (t) {
        return t.length > 0 && (t[t.length - 1].focus(), !0)
    }, h.isModalFocused = function (t, e) {
        if (t && e) {
            var o = e.value.modalDomEl;
            if (o && o.length) return (t.target || t.srcElement) === o[0]
        }
        return !1
    }, h.isFocusInFirstItem = function (t, e) {
        return e.length > 0 && (t.target || t.srcElement) === e[0]
    }, h.isFocusInLastItem = function (t, e) {
        return e.length > 0 && (t.target || t.srcElement) === e[e.length - 1]
    }, h.loadFocusElementList = function (t) {
        if (t) {
            var e = t.value.modalDomEl;
            if (e && e.length) {
                var o = e[0].querySelectorAll("a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]");
                return o ? Array.prototype.filter.call(o, function (t) {
                    return !!((e = t).offsetWidth || e.offsetHeight || e.getClientRects().length);
                    var e
                }) : o
            }
        }
    }, h
}]).provider("$uibModal", function () {
    var t = {
        options: {
            animation: !0,
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (e, o, n, i, r, a, l) {
            var p = {};
            var s = null;
            return p.getPromiseChain = function () {
                return s
            }, p.open = function (p) {
                var u, c, d, m = o.defer(),
                    f = o.defer(),
                    h = o.defer(),
                    b = o.defer(),
                    v = {
                        result: m.promise,
                        opened: f.promise,
                        closed: h.promise,
                        rendered: b.promise,
                        close: function (t) {
                            return l.close(v, t)
                        },
                        dismiss: function (t) {
                            return l.dismiss(v, t)
                        }
                    };
                if ((p = angular.extend({}, t.options, p)).resolve = p.resolve || {}, p.appendTo = p.appendTo || n.find("body").eq(0), !p.appendTo.length) throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");
                if (!p.component && !p.template && !p.templateUrl) throw new Error("One of component or template or templateUrl options is required.");

                function g() {
                    return u
                }
                return u = p.component ? o.when(a.resolve(p.resolve, {}, null, null)) : o.all([(c = p, c.template ? o.when(c.template) : i(angular.isFunction(c.templateUrl) ? c.templateUrl() : c.templateUrl)), a.resolve(p.resolve, {}, null, null)]), d = s = o.all([s]).then(g, g).then(function (t) {
                    var o = p.scope || e,
                        n = o.$new();
                    n.$close = v.close, n.$dismiss = v.dismiss, n.$on("$destroy", function () {
                        n.$$uibDestructionScheduled || n.$dismiss("$uibUnscheduledDestruction")
                    });
                    var i, a, s = {
                            scope: n,
                            deferred: m,
                            renderDeferred: b,
                            closedDeferred: h,
                            animation: p.animation,
                            backdrop: p.backdrop,
                            keyboard: p.keyboard,
                            backdropClass: p.backdropClass,
                            windowTopClass: p.windowTopClass,
                            windowClass: p.windowClass,
                            windowTemplateUrl: p.windowTemplateUrl,
                            ariaLabelledBy: p.ariaLabelledBy,
                            ariaDescribedBy: p.ariaDescribedBy,
                            size: p.size,
                            openedClass: p.openedClass,
                            appendTo: p.appendTo
                        },
                        u = {},
                        c = {};

                    function d(e, o, i, r) {
                        e.$scope = n, e.$scope.$resolve = {}, i ? e.$scope.$uibModalInstance = v : e.$uibModalInstance = v;
                        var a = o ? t[1] : t;
                        angular.forEach(a, function (t, o) {
                            r && (e[o] = t), e.$scope.$resolve[o] = t
                        })
                    }
                    p.component ? (d(u, !1, !0, !1), u.name = p.component, s.component = u) : p.controller && (d(c, !0, !1, !0), a = r(p.controller, c, !0, p.controllerAs), p.controllerAs && p.bindToController && ((i = a.instance).$close = n.$close, i.$dismiss = n.$dismiss, angular.extend(i, {
                        $resolve: c.$scope.$resolve
                    }, o)), i = a(), angular.isFunction(i.$onInit) && i.$onInit()), p.component || (s.content = t[0]), l.open(v, s), f.resolve(!0)
                }, function (t) {
                    f.reject(t), m.reject(t)
                }).finally(function () {
                    s === d && (s = null)
                }), v
            }, p
        }]
    };
    return t
}), angular.module("ui.bootstrap.multiMap", []).factory("$$multiMap", function () {
    return {
        createNew: function () {
            var t = {};
            return {
                entries: function () {
                    return Object.keys(t).map(function (e) {
                        return {
                            key: e,
                            value: t[e]
                        }
                    })
                },
                get: function (e) {
                    return t[e]
                },
                hasKey: function (e) {
                    return !!t[e]
                },
                keys: function () {
                    return Object.keys(t)
                },
                put: function (e, o) {
                    t[e] || (t[e] = []), t[e].push(o)
                },
                remove: function (e, o) {
                    var n = t[e];
                    if (n) {
                        var i = n.indexOf(o); - 1 !== i && n.splice(i, 1), n.length || delete t[e]
                    }
                }
            }
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    showMeridian: !0,
    showSeconds: !1,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0,
    showSpinners: !0,
    templateUrl: "uib/template/timepicker/timepicker.html"
}).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function (t, e, o, n, i, r, a) {
    var l, p, s, u = new Date,
        c = [],
        d = {
            $setViewValue: angular.noop
        },
        m = angular.isDefined(o.meridians) ? t.$parent.$eval(o.meridians) : a.meridians || r.DATETIME_FORMATS.AMPMS,
        f = !angular.isDefined(o.padHours) || t.$parent.$eval(o.padHours);
    t.tabindex = angular.isDefined(o.tabindex) ? o.tabindex : 0, e.removeAttr("tabindex"), this.init = function (e, n) {
        (d = e).$render = this.render, d.$formatters.unshift(function (t) {
            return t ? new Date(t) : null
        });
        var i = n.eq(0),
            r = n.eq(1),
            u = n.eq(2);
        l = i.controller("ngModel"), p = r.controller("ngModel"), s = u.controller("ngModel"), (angular.isDefined(o.mousewheel) ? t.$parent.$eval(o.mousewheel) : a.mousewheel) && this.setupMousewheelEvents(i, r, u), (angular.isDefined(o.arrowkeys) ? t.$parent.$eval(o.arrowkeys) : a.arrowkeys) && this.setupArrowkeyEvents(i, r, u), t.readonlyInput = angular.isDefined(o.readonlyInput) ? t.$parent.$eval(o.readonlyInput) : a.readonlyInput, this.setupInputEvents(i, r, u)
    };
    var h = a.hourStep;
    o.hourStep && c.push(t.$parent.$watch(n(o.hourStep), function (t) {
        h = +t
    }));
    var b, v, g = a.minuteStep;
    o.minuteStep && c.push(t.$parent.$watch(n(o.minuteStep), function (t) {
        g = +t
    })), c.push(t.$parent.$watch(n(o.min), function (t) {
        var e = new Date(t);
        b = isNaN(e) ? void 0 : e
    })), c.push(t.$parent.$watch(n(o.max), function (t) {
        var e = new Date(t);
        v = isNaN(e) ? void 0 : e
    }));
    var w = !1;
    o.ngDisabled && c.push(t.$parent.$watch(n(o.ngDisabled), function (t) {
        w = t
    })), t.noIncrementHours = function () {
        var t = x(u, 60 * h);
        return w || t > v || t < u && t < b
    }, t.noDecrementHours = function () {
        var t = x(u, 60 * -h);
        return w || t < b || t > u && t > v
    }, t.noIncrementMinutes = function () {
        var t = x(u, g);
        return w || t > v || t < u && t < b
    }, t.noDecrementMinutes = function () {
        var t = x(u, -g);
        return w || t < b || t > u && t > v
    }, t.noIncrementSeconds = function () {
        var t = E(u, $);
        return w || t > v || t < u && t < b
    }, t.noDecrementSeconds = function () {
        var t = E(u, -$);
        return w || t < b || t > u && t > v
    }, t.noToggleMeridian = function () {
        return u.getHours() < 12 ? w || x(u, 720) > v : w || x(u, -720) < b
    };
    var $ = a.secondStep;

    function y() {
        var e = +t.hours;
        if ((t.showMeridian ? e > 0 && e < 13 : e >= 0 && e < 24) && "" !== t.hours) return t.showMeridian && (12 === e && (e = 0), t.meridian === m[1] && (e += 12)), e
    }

    function k() {
        var e = +t.minutes;
        if (e >= 0 && e < 60 && "" !== t.minutes) return e
    }

    function C(t, e) {
        return null === t ? "" : angular.isDefined(t) && t.toString().length < 2 && !e ? "0" + t : t.toString()
    }

    function S(t) {
        T(), d.$setViewValue(new Date(u)), D(t)
    }

    function T() {
        l && l.$setValidity("hours", !0), p && p.$setValidity("minutes", !0), s && s.$setValidity("seconds", !0), d.$setValidity("time", !0), t.invalidHours = !1, t.invalidMinutes = !1, t.invalidSeconds = !1
    }

    function D(e) {
        if (d.$modelValue) {
            var o = u.getHours(),
                n = u.getMinutes(),
                i = u.getSeconds();
            t.showMeridian && (o = 0 === o || 12 === o ? 12 : o % 12), t.hours = "h" === e ? o : C(o, !f), "m" !== e && (t.minutes = C(n)), t.meridian = u.getHours() < 12 ? m[0] : m[1], "s" !== e && (t.seconds = C(i)), t.meridian = u.getHours() < 12 ? m[0] : m[1]
        } else t.hours = null, t.minutes = null, t.seconds = null, t.meridian = m[0]
    }

    function M(t) {
        u = E(u, t), S()
    }

    function x(t, e) {
        return E(t, 60 * e)
    }

    function E(t, e) {
        var o = new Date(t.getTime() + 1e3 * e),
            n = new Date(t);
        return n.setHours(o.getHours(), o.getMinutes(), o.getSeconds()), n
    }

    function I() {
        return (null === t.hours || "" === t.hours) && (null === t.minutes || "" === t.minutes) && (!t.showSeconds || t.showSeconds && (null === t.seconds || "" === t.seconds))
    }
    o.secondStep && c.push(t.$parent.$watch(n(o.secondStep), function (t) {
        $ = +t
    })), t.showSeconds = a.showSeconds, o.showSeconds && c.push(t.$parent.$watch(n(o.showSeconds), function (e) {
        t.showSeconds = !!e
    })), t.showMeridian = a.showMeridian, o.showMeridian && c.push(t.$parent.$watch(n(o.showMeridian), function (e) {
        if (t.showMeridian = !!e, d.$error.time) {
            var o = y(),
                n = k();
            angular.isDefined(o) && angular.isDefined(n) && (u.setHours(o), S())
        } else D()
    })), this.setupMousewheelEvents = function (e, o, n) {
        var i = function (t) {
            t.originalEvent && (t = t.originalEvent);
            var e = t.wheelDelta ? t.wheelDelta : -t.deltaY;
            return t.detail || e > 0
        };
        e.on("mousewheel wheel", function (e) {
            w || t.$apply(i(e) ? t.incrementHours() : t.decrementHours()), e.preventDefault()
        }), o.on("mousewheel wheel", function (e) {
            w || t.$apply(i(e) ? t.incrementMinutes() : t.decrementMinutes()), e.preventDefault()
        }), n.on("mousewheel wheel", function (e) {
            w || t.$apply(i(e) ? t.incrementSeconds() : t.decrementSeconds()), e.preventDefault()
        })
    }, this.setupArrowkeyEvents = function (e, o, n) {
        e.on("keydown", function (e) {
            w || (38 === e.which ? (e.preventDefault(), t.incrementHours(), t.$apply()) : 40 === e.which && (e.preventDefault(), t.decrementHours(), t.$apply()))
        }), o.on("keydown", function (e) {
            w || (38 === e.which ? (e.preventDefault(), t.incrementMinutes(), t.$apply()) : 40 === e.which && (e.preventDefault(), t.decrementMinutes(), t.$apply()))
        }), n.on("keydown", function (e) {
            w || (38 === e.which ? (e.preventDefault(), t.incrementSeconds(), t.$apply()) : 40 === e.which && (e.preventDefault(), t.decrementSeconds(), t.$apply()))
        })
    }, this.setupInputEvents = function (e, o, n) {
        if (t.readonlyInput) return t.updateHours = angular.noop, t.updateMinutes = angular.noop, void(t.updateSeconds = angular.noop);
        var i = function (e, o, n) {
            d.$setViewValue(null), d.$setValidity("time", !1), angular.isDefined(e) && (t.invalidHours = e, l && l.$setValidity("hours", !1)), angular.isDefined(o) && (t.invalidMinutes = o, p && p.$setValidity("minutes", !1)), angular.isDefined(n) && (t.invalidSeconds = n, s && s.$setValidity("seconds", !1))
        };
        t.updateHours = function () {
            var t = y(),
                e = k();
            d.$setDirty(), angular.isDefined(t) && angular.isDefined(e) ? (u.setHours(t), u.setMinutes(e), u < b || u > v ? i(!0) : S("h")) : i(!0)
        }, e.on("blur", function (e) {
            d.$setTouched(), I() ? T() : null === t.hours || "" === t.hours ? i(!0) : !t.invalidHours && t.hours < 10 && t.$apply(function () {
                t.hours = C(t.hours, !f)
            })
        }), t.updateMinutes = function () {
            var t = k(),
                e = y();
            d.$setDirty(), angular.isDefined(t) && angular.isDefined(e) ? (u.setHours(e), u.setMinutes(t), u < b || u > v ? i(void 0, !0) : S("m")) : i(void 0, !0)
        }, o.on("blur", function (e) {
            d.$setTouched(), I() ? T() : null === t.minutes ? i(void 0, !0) : !t.invalidMinutes && t.minutes < 10 && t.$apply(function () {
                t.minutes = C(t.minutes)
            })
        }), t.updateSeconds = function () {
            var e, o = (e = +t.seconds) >= 0 && e < 60 ? e : void 0;
            d.$setDirty(), angular.isDefined(o) ? (u.setSeconds(o), S("s")) : i(void 0, void 0, !0)
        }, n.on("blur", function (e) {
            I() ? T() : !t.invalidSeconds && t.seconds < 10 && t.$apply(function () {
                t.seconds = C(t.seconds)
            })
        })
    }, this.render = function () {
        var e = d.$viewValue;
        isNaN(e) ? (d.$setValidity("time", !1), i.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (e && (u = e), u < b || u > v ? (d.$setValidity("time", !1), t.invalidHours = !0, t.invalidMinutes = !0) : T(), D())
    }, t.showSpinners = angular.isDefined(o.showSpinners) ? t.$parent.$eval(o.showSpinners) : a.showSpinners, t.incrementHours = function () {
        t.noIncrementHours() || M(60 * h * 60)
    }, t.decrementHours = function () {
        t.noDecrementHours() || M(60 * -h * 60)
    }, t.incrementMinutes = function () {
        t.noIncrementMinutes() || M(60 * g)
    }, t.decrementMinutes = function () {
        t.noDecrementMinutes() || M(60 * -g)
    }, t.incrementSeconds = function () {
        t.noIncrementSeconds() || M($)
    }, t.decrementSeconds = function () {
        t.noDecrementSeconds() || M(-$)
    }, t.toggleMeridian = function () {
        var e = k(),
            o = y();
        t.noToggleMeridian() || (angular.isDefined(e) && angular.isDefined(o) ? M(720 * (u.getHours() < 12 ? 60 : -60)) : t.meridian = t.meridian === m[0] ? m[1] : m[0])
    }, t.blur = function () {
        d.$setTouched()
    }, t.$on("$destroy", function () {
        for (; c.length;) c.shift()()
    })
}]).directive("uibTimepicker", ["uibTimepickerConfig", function (t) {
    return {
        require: ["uibTimepicker", "?^ngModel"],
        restrict: "A",
        controller: "UibTimepickerController",
        controllerAs: "timepicker",
        scope: {},
        templateUrl: function (e, o) {
            return o.templateUrl || t.templateUrl
        },
        link: function (t, e, o, n) {
            var i = n[0],
                r = n[1];
            r && i.init(r, e.find("input"))
        }
    }
}]), angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/popover/popover-html.html", '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n')
}]), angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/popover/popover-template.html", '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
}]), angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/popover/popover.html", '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n')
}]), angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/tooltip/tooltip-html-popup.html", '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')
}]), angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/tooltip/tooltip-popup.html", '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')
}]), angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/tooltip/tooltip-template-popup.html", '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')
}]), angular.module("uib/template/modal/window.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/modal/window.html", "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")
}]), angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function (t) {
    t.put("uib/template/timepicker/timepicker.html", '<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("ui.bootstrap.tooltip").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'), angular.$$uibTooltipCss = !0
}), angular.module("ui.bootstrap.position").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'), angular.$$uibPositionCss = !0
}), angular.module("ui.bootstrap.timepicker").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'), angular.$$uibTimepickerCss = !0
});
var ngBridge = function () {

    /**
     * Captures Angular $rootScope and performs an $emit
     * @param name
     * @param args
     */
    function emit(name, args) {
        var body = angular.element(document.body);            // 1
        var rootScope = body.injector().get('$rootScope');   // 2b
        rootScope.$emit(name, args);
    }

    /**
     * Compiles any html template with angular declarations
     * @param html
     * @param variables
     * @returns angular-compiled html
     */
    function compileHtml(html, variables) {
        /**
         * Re-compile transformed html to allow Angular Components to work.
         */
        var $body = jQuery(document.body),
            $ngBody = angular.element($body);

        $ngBody.injector().invoke(function ($compile, $rootScope) {
            var scope = $rootScope.$new(true);
            if (variables) {
                for (var key in variables) {
                    scope[key] = variables[key];
                }
            }
            html = $compile(html)(scope);
        });

        return html;
    }

    var services = [];

    /**
     * Returns instance of one of injectable angular services by name as defined below
     * @param serviceName
     * @returns service
     */
    function getService(serviceName) {
        var $body = angular.element(document.body);

        if (typeof services[serviceName] === 'undefined') {
            var $injector = $body.injector();
            if ($injector.has(serviceName)) {
                services[serviceName] = $injector.get(serviceName)
            } else {
                console.error(serviceName + ' cannot be found.');
                return null;
            }
        }

        return services[serviceName];
    }

    /**
     * Go to specific ui-router state
     */
    function goToState(state, stateParams) {
        var $body = jQuery(document.body),
            $ngBody = angular.element($body);

        $ngBody.injector().invoke(function ($rootScope, $state) {
            console.log('switch to state: ' + state + (stateParams ? JSON.stringify(stateParams) : ''));
            $state.go(state, stateParams);
            $rootScope.$applyAsync();
        });
    }

    return {
        emit: emit,
        compileHtml: compileHtml,
        getService: getService,
        goToState: goToState
    }
}();
function fillInput(id, input) {
    if (input) {
        jQuery.each(input, function (key, val) {
            var input = jQuery("#" + id + " [name='" + key + "']");

            switch (input.prop('tagName')) {
                case 'DIV':
                    input.html(val);
                    break;

                case 'INPUT':
                case 'TEXTAREA':
                case 'SELECT':
                    switch (input.prop("type")) {
                        case 'checkbox':
                            val = (val === 1 || val === "1" || val === true);
                            input.prop('checked', !!val);
                            break;

                        case 'radio':
                            jQuery.each(input, function (key, element) {
                                if (jQuery(element).val() == val) {
                                    jQuery(element).prop('checked', true);
                                }
                            });
                            break;

                        default:
                            // this checks for dropdown options
                            if (input.find('option').length) {
                                if (input.find('option[value="' + val + '"]').val() !== undefined) {
                                    input.val(val);
                                    input.change();
                                }
                            } else {
                                input.val(val).change();
                            }
                            break;
                    }
            }
        });
    }
}

function displayErrors(id, errors) {
    jQuery("small.error").remove();
    jQuery("#" + id + " :input").removeClass("error");

    jQuery.each(errors, function (key, err) {
        var input = jQuery("#" + id + " [name='" + key + "']");
        input.addClass("error");
        input.after("<small class='error'>" + err + "</small>");
    });
}

function executeAPI(url, type, data) {
    var promise = new jQuery.Deferred();
    data = (data == undefined) ? {} : data;

    jQuery.ajax({
        url: url,
        type: type,
        data: data
    }).done(function (data, textStatus, xhr) {
        data.status = xhr.status;
        promise.resolve(data);
    }).fail(function (data) {
        promise.reject(data);
    });

    return promise;
}

function toggleGenericItems(element, id, loadFunction) {
    var domId = id + '-container';
    var container = jQuery('#' + domId);
    var tableRow = jQuery(element).parent().parent();
    var parentDiv = tableRow.parent().parent().parent();

    parentDiv.addClass('has-focus');
    parentDiv.prev().addClass('has-focus');
    tableRow.addClass('focus');

    // If containerId not found, create table row... (allows for dynamic addition of table row into .xsl)
    if (!container.length) {
        tableRow = jQuery(element).parent().parent();
        tableRow.after('<tr class="focus" id="' + domId + '" style="display:none"><td colspan="3"><div id="' + id + '"></div></td></tr>');
        container = jQuery('#' + domId);
    }

    if (container.is(":visible")) {
        container.prev().find('td').css('border-bottom-width', 1);
        jQuery(element).find('img').removeClass('up-arrow').addClass('down-arrow');
        parentDiv.parent().find('.has-focus').removeClass('has-focus');
        parentDiv.parent().find('.focus').removeClass('focus');
        container.remove();
    } else {
        if (!container.hasClass('generic-data-loaded')) {
            loadFunction(id);
        }
        container.addClass('generic-data-loaded');
        container.prev().find('td').css('border-bottom-width', 0);
        container.show();
        jQuery(element).find('img').removeClass('edit').addClass('up-arrow');
    }
}

function moveUpGeneric(item, functions, variables) {
    var generic_id = item.id;
    var url = variables.url + generic_id + '/up';
    var type = 'PUT';

    executeAPI(url, type).then(
        function (data) {
            functions.loadData();
            showNotice(data.message, 'success');
        },
        function (data) {
            showNotice(data.responseJSON.message, 'error');
        }
    );
}

function moveDownGeneric(item, functions, variables) {
    var generic_id = item.id;
    var url = variables.url + generic_id + '/down';
    var type = 'PUT';

    executeAPI(url, type).then(
        function (data) {
            functions.loadData();
            showNotice(data.message, 'success');
        },
        function (data) {
            showNotice(data.responseJSON.message, 'error');
        }
    );
}

function renderAPITemplate(template, domId, variables, items, postCompile) {
    var container = jQuery('#' + domId);
    if (items == undefined) {
        items = [];
    }

    if (container.length) {
        var internalId = "api-template-" + Date.now();

        // Removing all children
        // NOTE: Intentionally uses a jQuery.each loop...removing in bulk triggers an angular/JS error
        var children = container.find('>');

        if (children.length) {
            jQuery.each(children, function (key, element) {
                var apiChildren = jQuery(element).find('api-template');
                if (apiChildren.length) {
                    jQuery.each(apiChildren, function (apiKey, apiElement) {
                        var scope = angular.element(apiElement).scope();
                        scope.cancelLoadData();
                    });
                }

                jQuery(element).remove();
            });
        }

        angular.element(container).injector().invoke(function ($compile) {
            var html = "<div id='" + internalId + "' ng-include src=\"'" + url + "'\"></div>";
            var scope = angular.element(container).scope();

            // initialize variables inside of scope
            if (variables) {
                for (var key in variables) {
                    scope[key] = variables[key];
                }
            }

            scope.$applyAsync(function () {
                $compile(html)(scope).appendTo(container);

                // If there is a postCompile function, execute here
                if (postCompile != undefined) {
                    postCompile(internalId);
                }
            });
        });

        return internalId;
    } else {
        console.log('ERROR: renderAPIView - domId not found: ' + domId);
    }
}

function renderAPIView(url, domId, variables, items, postCompile) {
    var container = jQuery('#' + domId);
    if (items == undefined) {
        items = [];
    }

    if (container.length) {
        var internalId = "api-view-" + Date.now();

        // Removing all children
        // NOTE: Intentionally uses a jQuery.each loop...removing in bulk triggers an angular/JS error
        var children = container.find('>');
        if (children.length) {
            jQuery.each(children, function (key, element) {
                var apiChildren = jQuery(element).find('api-view');
                if (apiChildren.length) {
                    jQuery.each(apiChildren, function (apiKey, apiElement) {
                        var scope = angular.element(apiElement).scope();
                        scope.cancelLoadData();
                    });
                }

                jQuery(element).remove();
            });
        }

        angular.element(container).injector().invoke(function ($compile) {
            var html = "<div id='" + internalId + "' ng-include src=\"'" + url + "'\"></div>";
            var scope = angular.element(container).scope();

            // create a new scope
            scope = scope.$new(true);
            scope.items = items;

            // initialize variables inside of scope
            if (variables) {
                for (var key in variables) {
                    scope[key] = variables[key];
                }
            }

            scope.$applyAsync(function () {
                $compile(html)(scope).appendTo(container);

                // If there is a postCompile function, execute here
                if (postCompile != undefined) {
                    postCompile(internalId);
                }
            });
        });

        return internalId;
    } else {
        console.log('ERROR: renderAPIView - domId not found: ' + domId);
    }
}

function renderAPIContainer(options) {
    var container = {
        options: options,
        item: {}
    };

    container.getId = function () {
        return container.item[container.options.primary_key] ? container.item[container.options.primary_key] : '';
    };

    container.revealContent = function () {
        if (container.options.contentId) {
            jQuery('#' + container.options.contentId).fadeIn(100);
        }
    };

    container.loadData = function () {
        container.options.dataId = container.getId();

        if (container.options.dataId) {
            // allow for injecting data straight into view...
            if (container.options.injectData) {
                container.item = container.options.injectData;
                container.options.dataId = container.getId();

                fillInput(container.options.domId, container.item);

                if (container.options.functions['postLoad']) {
                    setTimeout(function () {
                        container.options.functions['postLoad'](container.options, container.item);
                    }, 0);
                }

                container.revealContent();
            } else {
                jQuery.ajax({
                    url: container.options.data_url + container.options.dataId,
                    type: 'get',
                    success: function (data) {
                        container.item = data.data;

                        fillInput(container.options.domId, container.item);

                        if (container.options.functions['postLoad']) {
                            setTimeout(function () {
                                container.options.functions['postLoad'](container.options, container.item);
                            }, 0);
                        }

                        container.revealContent();
                    },
                    error: function (data) {
                        var responseJSON = data.responseJSON ? data.responseJSON : JSON.parse(data.responseText);

                        switch (responseJSON.status) {
                            case 401:
                                icp.loadAltLoginPage();
                                break;

                            case 403:
                                var domElement = jQuery('#' + container.options.domId);
                                domElement.innerHTML('Not Authorized');
                                container.revealContent();
                                break;

                            default:
                                showNotice(responseJSON.message, 'error');
                                break;
                        }
                    }
                });
            }
        } else {
            if (container.options.functions['postLoaded']) {
                setTimeout(function () {
                    container.options.functions['postLoaded'](container.options, container.item);
                }, 0);
            }
        }
    };

    container.loadAfterPromise = function (scope) {
        // this is a safety check to prevent infinite loop waiting on promise
        container.waitForPromiseIndex = 0;

        // resolveData and waitForPromise allow the statesDropdown (or any other cases of $http in the future)
        // that are rendered in the directives to complete their $http callouts for data before resolving the data_url
        var resolveData = function () {
            if (scope.$root.deferred) {
                scope.$root.deferred.then(function () {
                    container.loadData();

                    delete(scope.$root.deferred);
                });
            } else {
                console.log('WARNING: waitForPromise was set to true, but no API calls were found in view.');
                container.loadData();
            }
        };

        var waitForPromise = function () {
            if (container.waitForPromiseIndex >= 100) {
                console.log('WARNING: Infinite loop detected...and stopped.');
                resolveData();
            } else {
                if (scope.$root.deferred == undefined) {
                    setTimeout(function () {
                        container.waitForPromiseIndex += 1;
                        waitForPromise();
                    }, 50);
                } else {
                    resolveData();
                }
            }
        };

        waitForPromise();
    };

    container.delete = function () {
        if (container.options.dataId) {
            if (container.options.functions['preDelete']) {
                container.options.functions['preDelete'](container.options);
            }

            var url = container.options.data_url + container.options.dataId;
            var type = 'DELETE';
            executeAPI(url, type).then(
                function (data) {
                    showNotice(data.message, 'success');
                    if (container.options.functions['loadData']) {
                        container.options.functions.loadData().then(function () {
                            if (container.options.functions['postDelete']) {
                                container.options.functions['postDelete'](container.options);
                            }
                        });
                    } else {
                        if (container.options.functions['postDelete']) {
                            container.options.functions['postDelete'](container.options);
                        }
                    }
                },
                function (data) {
                    showNotice(data.responseJSON.message, 'error');
                }
            );
        }
    };

    container.save = function () {
        container.options.dataId = container.getId();

        if (container.options.functions['preSave']) {
            container.options.functions['preSave'](container.options, container.item);
        }

        jQuery.ajax({
            url: container.options.data_url + container.options.dataId,
            type: container.options.dataId ? 'PUT' : 'POST',
            data: jQuery('#' + container.options.domId + ' :input').serializeArray(),
            success: function (data) {
                // remove any previous errors messages
                jQuery('#' + container.options.domId + ' small.error').remove();

                var responseMessage = data.message ? data.message : 'Data has been updated';
                showNotice(responseMessage, 'success');
                container.item = data.data;

                if (!container.options.dataId) {
                    container.options.dataId = container.item[container.options.primary_key] ? container.item[container.options.primary_key] : '';
                    if (container.options.functions['postCreate']) {
                        container.options.functions['postCreate'](container.options, container.item);
                    }
                } else {
                    container.options.dataId = container.item[container.options.primary_key] ? container.item[container.options.primary_key] : '';
                    if (container.options.functions['postUpdate']) {
                        container.options.functions['postUpdate'](container.options, container.item);
                    }
                }

                if (container.options.functions['loadData']) {
                    container.options.functions.loadData();
                }
            },
            error: function (data) {
                var responseJSON = data.responseJSON ? data.responseJSON : JSON.parse(data.responseText);

                if (Object.keys(responseJSON.errors).length) {
                    displayErrors(container.options.domId, responseJSON.errors);
                }

                var responseMessage = responseJSON.message ? responseJSON.message : 'There was an error.';
                // Append error array to message if set
                if (responseJSON.errors !== undefined) {
                    _.forEach(responseJSON.errors, function (error) {
                        responseMessage += '<br/>' + error;
                    });
                }
                showNotice(responseMessage, 'error');
            }
        });
    };

    container.load = function () {
        var postCompile = function (domId) {
            jQuery('#' + domId).hide();

            if (container.options.waitForPromise) {
                // setTimeout allows the renderAPIView to finish injecting into the DOM
                setTimeout(function () {
                    var domElement = jQuery('#' + container.options.contentId);
                    var scope = angular.element(domElement).scope();
                    modal.container(scope);
                });
            } else {
                container.loadData();
            }
        };
        container.options.contentId = renderAPIView(container.options.edit_url,
            container.options.domId,
            container.options.variables,
            null,
            postCompile);

        // setTimeout allows the renderAPIView to finish injecting into the DOM
        setTimeout(function () {
            var domElement = jQuery('#' + container.options.contentId);
            var scope = angular.element(domElement).scope();
            scope['saveFunction'] = container.save;
            scope['deleteFunction'] = container.delete;
        });
    };

    if (container.options.item) {
        container.item = container.options.item;
        delete container.options.item;
    }

    if (!container.options.primary_key) {
        container.options.primary_key = 'id';
    }

    if (!container.options.functions) {
        container.options.functions = {};
    }

    container.load();

    return container;
}

function renderAPIModal(options) {
    var modal = {
        windowId: '',
        window: '',
        options: options,
        item: {}
    };

    modal.setTitle = function () {
        var message = '';

        if (modal.options.title_api_field) {
            message = modal.item[modal.options.title_api_field];
            message = message ? message : '';
        }

        modal.window.setTitle(modal.options.title + (message ? ' :: ' + message : ''));
    };

    modal.getId = function () {
        return modal.item[modal.options.primary_key] ? modal.item[modal.options.primary_key] : '';
    };

    modal.revealContent = function () {
        if (modal.options.contentId) {
            jQuery('#' + modal.options.contentId).fadeIn(100);
        }
    };

    modal.disableButtons = function () {
        if (modal.options.variables && modal.options.variables.domParentId) {
            jQuery('#' + modal.options.variables.domParentId + ' button.custom-button').prop('disabled', true);
        }
    };

    modal.enableButtons = function () {
        if (modal.options.variables && modal.options.variables.domParentId) {
            jQuery('#' + modal.options.variables.domParentId + ' button.custom-button').prop('disabled', false);
        }
    };

    modal.loadData = function () {
        modal.options.dataId = modal.getId();

        if (!modal.options.dataId) {
            if (modal.options.functions['postLoaded']) {
                setTimeout(function () {
                    modal.options.functions['postLoaded'](modal.options, modal.item);
                });
            }

            modal.window.setStatus('', 0);
        } else {
            jQuery.ajax({
                url: modal.options.data_url + modal.options.dataId,
                type: 'get',
                success: function (data) {
                    modal.item = data.data;
                    modal.setTitle();

                    fillInput(modal.options.windowId, modal.item);

                    if (modal.options.functions['postLoad']) {
                        setTimeout(function () {
                            modal.options.functions['postLoad'](modal.options, modal.item);
                        });
                    }

                    modal.window.setStatus('', 0);
                    modal.revealContent();
                },
                error: function (data) {
                    var responseJSON = data.responseJSON ? data.responseJSON : JSON.parse(data.responseText);

                    switch (responseJSON.status) {
                        case 401:
                            // Redirect to login page?
                            break;

                        case 403:
                            modal.window.replaceContent('Not Authorized');
                            modal.window.setActionButtons(1024);
                            modal.window.setStatus('', 0);
                            modal.revealContent();
                            break;

                        default:
                            var responseMessage = responseJSON.message;
                            // Append error array to message if set
                            if (responseJSON.errors !== undefined) {
                                _.forEach(responseJSON.errors, function (error) {
                                    responseMessage += '<br/>' + error;
                                });
                            }
                            showNotice(responseMessage, 'error');
                            break;
                    }
                }
            });
        }
    };

    modal.loadAfterPromise = function (scope) {
        // this is a safety check to prevent infinite loop waiting on promise
        modal.waitForPromiseIndex = 0;

        // resolveData and waitForPromise allow the statesDropdown (or any other cases of $http in the future)
        // that are rendered in the directives to complete their $http callouts for data before resolving the data_url
        var resolveData = function () {
            if (scope.$root.deferred) {
                scope.$root.deferred.then(function () {
                    modal.loadData();

                    delete(scope.$root.deferred);
                });
            } else {
                console.log('WARNING: waitForPromise was set to true, but no API calls were found in view.');
                modal.loadData();
            }
        };

        var waitForPromise = function () {
            if (modal.waitForPromiseIndex >= 100) {
                console.log('WARNING: Infinite loop detected...and stopped.');
                resolveData();
            } else {
                if (scope.$root.deferred == undefined) {
                    setTimeout(function () {
                        modal.waitForPromiseIndex += 1;
                        waitForPromise();
                    }, 50);
                } else {
                    resolveData();
                }
            }
        };

        waitForPromise();
    };

    modal.delete = function () {
        modal.options.dataId = modal.getId();

        if (modal.options.enableDelete && modal.options.dataId) {
            if (modal.options.functions['preDelete']) {
                modal.options.functions['preDelete'](modal.options);
            }
            var url = modal.options.data_url + modal.options.dataId;
            var type = 'DELETE';
            executeAPI(url, type).then(
                function (data) {
                    if (modal.options.refreshPageFilterResources) {
                        updatePageFilterResources();
                    }

                    showNotice(data.message, 'success');

                    if (modal.options.functions['loadData']) {
                        modal.options.functions.loadData().then(function () {
                            modal.disableButtons();

                            if (modal.options.functions['postDelete']) {
                                modal.options.functions['postDelete'](modal.options);
                            }
                            modal.close();
                        });
                    } else {
                        if (modal.options.functions['postDelete']) {
                            modal.options.functions['postDelete'](modal.options);
                        }
                        modal.close();
                    }
                },
                function (data) {
                    showNotice(data.responseJSON.message, 'error');
                });
        }
    };

    modal.save = function (closeModal) {
        closeModal = closeModal ? true : false;
        modal.options.dataId = modal.getId();

        if (modal.options.functions['preSave']) {
            modal.options.functions['preSave'](modal.options, modal.item);
        }

        var $elements = jQuery('#' + modal.options.windowId + ' :input');
        var url = modal.options.data_url + modal.options.dataId;
        var type = modal.options.dataId ? 'PUT' : 'POST';
        var data = $elements.serializeArray();

        executeAPI(url, type, data).then(
            function (data) {
                // remove any previous errors messages
                jQuery('#' + modal.options.windowId + ' small.error').remove();

                var responseMessage = data.message ? data.message : 'Data has been updated';

                if (modal.options.refreshPageFilterResources) {
                    updatePageFilterResources();
                }

                showNotice(responseMessage, 'success');
                modal.item = data.data;

                if (!modal.options.dataId) {
                    modal.options.dataId = modal.item[modal.options.primary_key] ? modal.item[modal.options.primary_key] : '';
                    if (modal.options.functions['postCreate']) {
                        modal.options.functions['postCreate'](modal.options, modal.item);
                    }
                } else {
                    modal.options.dataId = modal.item[modal.options.primary_key] ? modal.item[modal.options.primary_key] : '';
                    if (modal.options.functions['postUpdate']) {
                        modal.options.functions['postUpdate'](modal.options, modal.item);
                    }
                }

                modal.setTitle();

                if (modal.options.enableDelete && modal.options.dataId && !modal.options.deleteButtonAdded) {
                    modal.window.addActionButtons(131072);
                    modal.options.deleteButtonAdded = true;
                }

                if (modal.options.functions['loadData']) {
                    modal.options.functions.loadData().then(function () {
                        modal.disableButtons();
                        if (closeModal) {
                            modal.close();
                        }
                    });
                } else {
                    if (closeModal) {
                        modal.close();
                    }
                }
            },
            function (data) {
                var responseJSON = data.responseJSON ? data.responseJSON : JSON.parse(data.responseText);

                if (Object.keys(responseJSON.errors).length) {
                    displayErrors(modal.options.windowId, responseJSON.errors);
                }

                var responseMessage = responseJSON.message ? responseJSON.message : 'There was an error.';
                // Append error array to message if set
                if (responseJSON.errors !== undefined) {
                    _.forEach(responseJSON.errors, function (error) {
                        responseMessage += '<br/>' + error;
                    });
                }
                showNotice(responseMessage, 'error');
            }
        );
    };

    modal.load = function () {
        var postCompile = function (domId) {
            jQuery('#' + domId).hide();

            if (modal.options.waitForPromise) {
                // setTimeout allows the renderAPIView to finish injecting into the DOM
                setTimeout(function () {
                    var domElement = jQuery('#' + modal.options.contentId);
                    var scope = angular.element(domElement).scope();
                    modal.loadAfterPromise(scope);
                });
            } else {
                modal.loadData();
            }
        };
        modal.options.contentId = renderAPIView(modal.options.edit_url,
            modal.options.windowId + ' .window-content-area',
            modal.options.variables,
            null,
            postCompile);
    };

    modal.close = function () {
        modal.enableButtons();
        getDivWindow(modal.options.windowId).closeWindow();
    };

    if (modal.options.item) {
        modal.item = modal.options.item;
        delete modal.options.item;
    }

    if (!modal.options.contentId) {
        modal.options.contentId = '';
    }

    if (!modal.options.primary_key) {
        modal.options.primary_key = 'id';
    }

    if (!modal.options.functions) {
        modal.options.functions = {};
    }

    if (!modal.options.title) {
        modal.options.title = 'New Window';
    }

    if (!modal.options.width) {
        modal.options.width = 900;
    }

    if (!modal.options.height) {
        modal.options.height = 600;
    }

    if (!modal.options.actionButtons) {
        modal.options.actionButtons = 32778;
    }

    if (!modal.options.enableDelete) {
        modal.options.enableDelete = false;
    }

    if (!modal.options.deleteButtonAdded) {
        modal.options.deleteButtonAdded = false;
    }

    if (!modal.options.refreshPageFilterResources) {
        modal.options.refreshPageFilterResources = false;
    }

    modal.window = new DivWindow(modal.options.title, modal.options.width, modal.options.height);
    modal.options.windowId = modal.window.getID();

    if (modal.options.enableDelete && modal.getId() && !modal.deleteButtonAdded) {
        modal.window.setActionButtons(modal.options.actionButtons + 131072);
        modal.options.deleteButtonAdded = true;
    } else {
        modal.window.setActionButtons(modal.options.actionButtons);
    }

    modal.disableButtons();

    modal.window.setStatus('Loading...', true);
    modal.window.addWindowEventListener('close', function () {
        modal.close();
    });
    modal.window.addWindowEventListener('save', function () {
        modal.save();
    });
    modal.window.addWindowEventListener('save3', function () {
        modal.save(true);
    });

    if (modal.options.enableDelete) {
        modal.window.addWindowEventListener('delete', function () {
            modal.delete();
        });
    }

    modal.load();

    return modal;
}