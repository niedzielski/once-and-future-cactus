!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);void 0!==typeof l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],[],!1,function(a){this.require,this.exports,this.module;a.registerDynamic("2",[],!0,function(a,b,c){var d;this||self;return function(){function a(a,b,c){return a.call.apply(a.bind,arguments)}function b(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function e(c,d,f){return e=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:b,e.apply(null,arguments)}function f(a,b){this.a=a,this.m=b||a,this.c=this.m.document}function g(a,b,c,d){if(b=a.c.createElement(b),c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));return d&&b.appendChild(a.c.createTextNode(d)),b}function h(a,b,c){a=a.c.getElementsByTagName(b)[0],a||(a=document.documentElement),a.insertBefore(c,a.lastChild)}function i(a){a.parentNode&&a.parentNode.removeChild(a)}function j(a,b,c){b=b||[],c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}for(b=[],e=0;e<d.length;e+=1){for(f=!1,g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function k(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function l(a){if("string"==typeof a.f)return a.f;var b=a.m.location.protocol;return"about:"==b&&(b=a.a.location.protocol),"https:"==b?"https:":"http:"}function m(a){return a.m.location.hostname||a.a.location.hostname}function n(a,b,c){function d(){j&&e&&f&&(j(i),j=null)}b=g(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,i=null,j=c||null;fa?(b.onload=function(){e=!0,d()},b.onerror=function(){e=!0,i=Error("Stylesheet failed to load"),d()}):setTimeout(function(){e=!0,d()},0),h(a,"head",b)}function o(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=g(a,"script",{src:b}),h=!1;return f.onload=f.onreadystatechange=function(){h||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(h=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))},e.appendChild(f),setTimeout(function(){h||(h=!0,c&&c(Error("Script load timeout")))},d||5e3),f}return null}function p(){this.a=0,this.c=null}function q(a){return a.a++,function(){a.a--,s(a)}}function r(a,b){a.c=b,s(a)}function s(a){0==a.a&&a.c&&(a.c(),a.c=null)}function t(a){this.a=a||"-"}function u(a,b){this.c=a,this.f=4,this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function v(a){return y(a)+" "+(a.f+"00")+" 300px "+w(a.c)}function w(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function x(a){return a.a+a.f}function y(a){var b="normal";return"o"===a.a?b="oblique":"i"===a.a&&(b="italic"),b}function z(a){var b=4,c="n",d=null;return a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10)))),c+b}function A(a,b){this.c=a,this.f=a.m.document.documentElement,this.h=b,this.a=new t("-"),this.j=!1!==b.events,this.g=!1!==b.classes}function B(a){a.g&&j(a.f,[a.a.c("wf","loading")]),D(a,"loading")}function C(a){if(a.g){var b=k(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive")),j(a.f,c,d)}D(a,"inactive")}function D(a,b,c){a.j&&a.h[b]&&(c?a.h[b](c.c,x(c)):a.h[b]())}function E(){this.c={}}function F(a,b,c){var d,e=[];for(d in b)if(b.hasOwnProperty(d)){var f=a.c[d];f&&e.push(f(b[d],c))}return e}function G(a,b){this.c=a,this.f=b,this.a=g(this.c,"span",{"aria-hidden":"true"},this.f)}function H(a){h(a.c,"body",a.a)}function I(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(a.c)+";"+("font-style:"+y(a)+";font-weight:"+(a.f+"00")+";")}function J(a,b,c,d,e,f){this.g=a,this.j=b,this.a=d,this.c=c,this.f=e||3e3,this.h=f||void 0}function K(a,b,c,d,e,f,g){this.v=a,this.B=b,this.c=c,this.a=d,this.s=g||"BESbswy",this.f={},this.w=e||3e3,this.u=f||null,this.o=this.j=this.h=this.g=null,this.g=new G(this.c,this.s),this.h=new G(this.c,this.s),this.j=new G(this.c,this.s),this.o=new G(this.c,this.s),a=new u(this.a.c+",serif",x(this.a)),a=I(a),this.g.a.style.cssText=a,a=new u(this.a.c+",sans-serif",x(this.a)),a=I(a),this.h.a.style.cssText=a,a=new u("serif",x(this.a)),a=I(a),this.j.a.style.cssText=a,a=new u("sans-serif",x(this.a)),a=I(a),this.o.a.style.cssText=a,H(this.g),H(this.h),H(this.j),H(this.o)}function L(){if(null===ha){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ha=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return ha}function M(a,b,c){for(var d in ga)if(ga.hasOwnProperty(d)&&b===a.f[ga[d]]&&c===a.f[ga[d]])return!0;return!1}function N(a){var b,c=a.g.a.offsetWidth,d=a.h.a.offsetWidth;(b=c===a.f.serif&&d===a.f["sans-serif"])||(b=L()&&M(a,c,d)),b?ea()-a.A>=a.w?L()&&M(a,c,d)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?P(a,a.v):P(a,a.B):O(a):P(a,a.v)}function O(a){setTimeout(e(function(){N(this)},a),50)}function P(a,b){setTimeout(e(function(){i(this.g.a),i(this.h.a),i(this.j.a),i(this.o.a),b(this.a)},a),0)}function Q(a,b,c){this.c=a,this.a=b,this.f=0,this.o=this.j=!1,this.s=c}function R(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&j(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),D(a,"active")):C(a.a))}function S(a){this.j=a,this.a=new E,this.h=0,this.f=this.g=!0}function T(a,b,c,d,f){var g=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=f||null,h=d||null||{};if(0===c.length&&g)C(b.a);else{b.f+=c.length,g&&(b.j=g);var i,k=[];for(i=0;i<c.length;i++){var l=c[i],m=h[l.c],n=b.a,o=l;n.g&&j(n.f,[n.a.c("wf",o.c,x(o).toString(),"loading")]),D(n,"fontloading",o),n=null,null===ia&&(ia=!!window.FontFace&&(!(o=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(o[1],10))),n=ia?new J(e(b.g,b),e(b.h,b),b.c,l,b.s,m):new K(e(b.g,b),e(b.h,b),b.c,l,b.s,a,m),k.push(n)}for(i=0;i<k.length;i++)k[i].start()}},0)}function U(a,b,c){var d=[],e=c.timeout;B(b);var d=F(a.a,c,a.c),f=new Q(a.c,b,e);for(a.h=d.length,b=0,c=d.length;b<c;b++)d[b].load(function(b,c,d){T(a,f,b,c,d)})}function V(a,b){this.c=a,this.a=b}function W(a,b,c){var d=l(a.c);return a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}function X(a,b){this.c=a,this.a=b}function Y(a,b,c){a?this.c=a:this.c=b+ja,this.a=[],this.f=[],this.g=c||""}function Z(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":"),a.a.push(e.join(f))}}function $(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));return b=a.c+"?family="+c.join("%7C"),0<a.f.length&&(b+="&subset="+a.f.join(",")),0<a.g.length&&(b+="&text="+encodeURIComponent(a.g)),b}function _(a){this.f=a,this.a=[],this.c={}}function aa(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g,h=d[1];if(g=[],h)for(var h=h.split(","),i=h.length,j=0;j<i;j++){var k;if(k=h[j],k.match(/^[\w-]+$/)){var l=na.exec(k.toLowerCase());if(null==l)k="";else{if(k=l[2],k=null==k||""==k?"n":ma[k],l=l[1],null==l||""==l)l="4";else var m=la[l],l=m?m:isNaN(l)?"4":l.substr(0,1);k=[k,l].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g),3==d.length&&(d=d[2],g=[],d=d?d.split(","):g,0<d.length&&(d=ka[d[0]])&&(a.c[e]=d))}for(a.c[e]||(d=ka[e])&&(a.c[e]=d),d=0;d<f.length;d+=1)a.a.push(new u(e,f[d]))}}function ba(a,b){this.c=a,this.a=b}function ca(a,b){this.c=a,this.a=b}function da(a,b){this.c=a,this.f=b,this.a=[]}var ea=Date.now||function(){return+new Date},fa=!!window.FontFace;t.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)},J.prototype.start=function(){var a=this.c.m.document,b=this,c=ea(),d=new Promise(function(d,e){function f(){ea()-c>=b.f?e():a.fonts.load(v(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=new Promise(function(a,c){setTimeout(c,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};var ga={D:"serif",C:"sans-serif"},ha=null;K.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=ea(),N(this)};var ia=null;Q.prototype.g=function(a){var b=this.a;b.g&&j(b.f,[b.a.c("wf",a.c,x(a).toString(),"active")],[b.a.c("wf",a.c,x(a).toString(),"loading"),b.a.c("wf",a.c,x(a).toString(),"inactive")]),D(b,"fontactive",a),this.o=!0,R(this)},Q.prototype.h=function(a){var b=this.a;if(b.g){var c=k(b.f,b.a.c("wf",a.c,x(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,x(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,x(a).toString(),"inactive")),j(b.f,d,e)}D(b,"fontinactive",a),R(this)},S.prototype.load=function(a){this.c=new f(this.j,a.context||this.j),this.g=!1!==a.events,this.f=!1!==a.classes,U(this,new A(this.c,a),a)},V.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c,e=f["__mti_fntLst"+d](),g=[];if(e)for(var h=0;h<e.length;h++){var i=e[h].fontfamily;void 0!=e[h].fontStyle&&void 0!=e[h].fontWeight?(c=e[h].fontStyle+e[h].fontWeight,g.push(new u(i,c))):g.push(new u(i))}a(g)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;o(this.c,W(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])},X.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new p;for(b=0,c=d.length;b<c;b++)n(this.c,d[b],q(g));var h=[];for(b=0,c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var i=d[1].split(","),j=0;j<i.length;j+=1)h.push(new u(d[0],i[j]));else h.push(new u(d[0]));r(g,function(){a(h,f)})};var ja="//fonts.googleapis.com/css",ka={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},la={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ma={i:"i",italic:"i",n:"n",normal:"n"},na=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,oa={Arimo:!0,Cousine:!0,Tinos:!0};ba.prototype.load=function(a){var b=new p,c=this.c,d=new Y(this.a.api,l(c),this.a.text),e=this.a.families;Z(d,e);var f=new _(e);aa(f),n(c,$(d),q(b)),r(b,function(){a(f.a,f.c,oa)})},ca.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?o(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var d=[],e=0;e<b.length;e+=2)for(var f=b[e],g=b[e+1],h=0;h<g.length;h++)d.push(new u(f,g[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(a){}a(d)}},2e3):a([])},da.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var e=0,f=c.fonts.length;e<f;++e){var g=c.fonts[e];d.a.push(new u(g.name,z("font-weight:"+g.weight+";font-style:"+g.style)))}a(d.a)},o(this.c,l(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+m(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var pa=new S(window);pa.a.c.custom=function(a,b){return new X(b,a)},pa.a.c.fontdeck=function(a,b){return new da(b,a)},pa.a.c.monotype=function(a,b){return new V(b,a)},pa.a.c.typekit=function(a,b){return new ca(b,a)},pa.a.c.google=function(a,b){return new ba(b,a)};var qa={load:e(pa.load,pa)};"function"==typeof d&&d.amd?d(function(){return qa}):"undefined"!=typeof c&&c.exports?c.exports=qa:(window.WebFont=qa,window.WebFontConfig&&pa.load(window.WebFontConfig))}(),c.exports}),a.register("1",["2"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m;return{setters:[function(a){c=a.default}],execute:function(){d=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b},g=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},h=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;if(void 0!==g)return g.call(d)},i=function(){function a(){d(this,a);for(var b=arguments.length,c=Array(b),e=0;e<b;e++)c[e]=arguments[e];this._keys=c}return e(a,[{key:"pressed",value:function(a){var b=!0,c=!1,d=void 0;try{for(var e,f=this._keys[Symbol.iterator]();!(b=(e=f.next()).done);b=!0){var g=e.value;if(a.input.keyboard.isDown(g))return!0}}catch(a){c=!0,d=a}finally{try{!b&&f.return&&f.return()}finally{if(c)throw d}}return!1}}]),a}(),j=function(){function a(){d(this,a),this._up=new i(Phaser.Keyboard.UP,Phaser.Keyboard.W),this._right=new i(Phaser.Keyboard.RIGHT,Phaser.Keyboard.D),this._down=new i(Phaser.Keyboard.DOWN,Phaser.Keyboard.S),this._left=new i(Phaser.Keyboard.LEFT,Phaser.Keyboard.A)}return e(a,[{key:"up",value:function(a){return this._up.pressed(a)}},{key:"right",value:function(a){return this._right.pressed(a)}},{key:"down",value:function(a){return this._down.pressed(a)}},{key:"left",value:function(a){return this._left.pressed(a)}}]),a}(),k=function(){function a(){d(this,a),this._map=null,this._layers=[],this._kbd=new j}return e(a,[{key:"width",value:function(){return this._map&&this._map.widthInPixels}},{key:"height",value:function(){return this._map&&this._map.heightInPixels}},{key:"preload",value:function(a){a.stage.backgroundColor="#f4f4ed";var b=16;a.load.tilemap("lvl","/asset/lvl.json",null,Phaser.Tilemap.TILED_JSON),a.load.spritesheet("tileset","/asset/tileset.png",b,b)}},{key:"create",value:function(a){this._map=a.add.tilemap("lvl"),this._map.addTilesetImage("tileset");var b=!0,c=!1,d=void 0;try{for(var e,f=this._map.layers[Symbol.iterator]();!(b=(e=f.next()).done);b=!0){var g=e.value,h=this._map.createLayer(g.name);h.resizeWorld(),this._layers.push(h)}}catch(a){c=!0,d=a}finally{try{!b&&f.return&&f.return()}finally{if(c)throw d}}var i=a.add.group(),j=16;this._map.createFromObjects("char","player","tileset",j,!0,!1,i),i.enableBody=!0,this._player=i.getChildAt(0);var k=.5;this._player.anchor.setTo(k,0),a.physics.arcade.enable(this._player),this._player.body.collideWorldBounds=!0,a.camera.follow(this._player,Phaser.Camera.FOLLOW_PLATFORMER);var l=50;this._player.body.maxVelocity.set(l);var m=300;this._player.body.drag.set(m)}},{key:"update",value:function(a){var b=this._player.body.velocity,c=10;this._kbd.up(a)&&(b.y-=c),this._kbd.right(a)&&(b.x+=c),this._kbd.down(a)&&(b.y+=c),this._kbd.left(a)&&(b.x-=c)}},{key:"render",value:function(a){a.debug.body(this._player)}},{key:"resize",value:function(a){var b=this;this._layers.forEach(function(a){return a.resize(b.width(),b.height())}),a.camera.follow(this._player,Phaser.Camera.FOLLOW_PLATFORMER)}}]),a}(),l=function(a){function b(a,c){d(this,b),console.log("GameState: constructor");var e=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return e._scene=c,e}return g(b,a),e(b,[{key:"preload",value:function(a){var c=this;h(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"preload",this).call(this,a),console.log("GameState: preload"),a.time.advancedTiming=!0,a.renderer.renderSession.roundPixels=!0,a.camera.roundPx=!1,Phaser.Canvas.setImageRenderingCrisp(a.canvas),window.addEventListener("resize",function(){return c.resize()}),this._scene.preload(a)}},{key:"create",value:function(a){h(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"create",this).call(this,a),console.log("GameState: create"),this._scene.create(a),this.resize()}},{key:"fontsLoaded",value:function(){console.log("GameState: fontsLoaded"),this._fpsText=this.game.add.text(1,1),this._fpsText.font="mem mono",this._fpsText.fontSize=4,this._fpsText.smoothed=!1,this._fpsText.autoRound=!0,this._fpsText.fixedToCamera=!0}},{key:"fontsUnloaded",value:function(){console.log("GameState: fontsUnloaded"),this._fpsText=null}},{key:"update",value:function(a){h(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"update",this).call(this,a),this._scene.update(a)}},{key:"render",value:function(a){if(h(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"render",this).call(this,a),this._scene.render(a),this._fpsText){var c=String(a.time.fps);this._fpsText.text=c.length<2?"0"+c:c}}},{key:"resize",value:function(){var a=window.innerHeight/this._scene.height(),b=Math.ceil(window.innerWidth/a),c=Math.ceil(this._scene.height());console.log("GameState: resize scale="+a+" "+("native="+b+"x"+c+" ")+("scene="+this._scene.width()+"x"+this._scene.height()+" ")+("window="+window.innerWidth+"x"+window.innerHeight+" ")+("ratio="+window.innerWidth/window.innerHeight)),this.game.scale.setGameSize(b,c),this.game.camera.bounds=new Phaser.Rectangle(0,0,this._scene.width(),this._scene.height()),this._scene.resize(this.game)}}]),b}(Phaser.State),m=function(a){function b(){d(this,b);var a=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,{transparent:!1,antialias:!1,renderer:Phaser.AUTO}));return a._gameState=new l(a,new k),a}return g(b,a),e(b,[{key:"init",value:function(){var a=this;this.state.add("GameState",this._gameState,!0),c.load({loading:function(){return console.log("loading fonts")},fontloading:function(a,b){return console.log("loading "+a+" "+b)},fontactive:function(a,b){return console.log(a+" "+b+" active")},fontinactive:function(a,b){return console.log(a+" "+b+" inactive")},custom:{families:["mem mono"],urls:["/src/font.css"]},active:function(){return a._gameState.fontsLoaded()},inactive:function(){return a._gameState.fontsUnloaded()}})}}]),b}(Phaser.Game),(new m).init()}}})})(function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=a():a()});
//# sourceMappingURL=index.js.map