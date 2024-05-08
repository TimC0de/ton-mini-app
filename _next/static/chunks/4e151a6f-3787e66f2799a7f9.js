"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{8217:function(e,t,n){let r,o;n.d(t,{BN:function(){return to},HF:function(){return iW}});var l,i,a,s,c=n(5699),u=n(6088),d=n.n(u),h=n(9535),f=n.n(h),g=n(9772),p=n.n(g),m=Object.defineProperty,C=Object.defineProperties,v=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&b(e,n,t[n]);if(w)for(var n of w(t))x.call(t,n)&&b(e,n,t[n]);return e},L=(e,t)=>C(e,v(t)),M=(e,t,n)=>(b(e,"symbol"!=typeof t?t+"":t,n),n),$=(e,t,n)=>new Promise((r,o)=>{var l=e=>{try{a(n.next(e))}catch(e){o(e)}},i=e=>{try{a(n.throw(e))}catch(e){o(e)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,i);a((n=n.apply(e,t)).next())});let S={},A=Symbol("solid-proxy"),T=Symbol("solid-track"),_={equals:(e,t)=>e===t},E=en,I={owned:null,cleanups:null,context:null,owner:null},H={};var R=null;let B=null,N=null,W=null,P=0;function O(e,t){let n=B,r=R,o=0===e.length,l=o?I:{owned:null,cleanups:null,context:null,owner:void 0===t?r:t};R=l,B=null;try{return et(o?e:()=>e(()=>U(()=>el(l))),!0)}finally{B=n,R=r}}function V(e,t){let n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},_,t):_).equals||void 0};return[G.bind(n),e=>("function"==typeof e&&(e=e(n.value)),Q(n,e))]}function D(e,t,n){J(X(e,t,!0,1))}function K(e,t,n){J(X(e,t,!1,1))}function j(e,t,n){E=er;let r=X(e,t,!1,1);r.user=!0,W?W.push(r):J(r)}function F(e,t,n){n=n?Object.assign({},_,n):_;let r=X(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,J(r),G.bind(r)}function U(e){if(null===B)return e();let t=B;B=null;try{return e()}finally{B=t}}function Z(e){return null===R||(null===R.cleanups?R.cleanups=[e]:R.cleanups.push(e)),e}function z(e,t){let n=Symbol("context");return{id:n,Provider:function(e){let t;return K(()=>t=U(()=>(R.context={[n]:e.value},Y(()=>e.children))),void 0),t},defaultValue:e}}function q(e){let t;return void 0!==(t=function e(t,n){return t?t.context&&void 0!==t.context[n]?t.context[n]:e(t.owner,n):void 0}(R,e.id))?t:e.defaultValue}function Y(e){let t=F(e),n=F(()=>(function e(t){if("function"==typeof t&&!t.length)return e(t());if(Array.isArray(t)){let n=[];for(let r=0;r<t.length;r++){let o=e(t[r]);Array.isArray(o)?n.push.apply(n,o):n.push(o)}return n}return t})(t()));return n.toArray=()=>{let e=n();return Array.isArray(e)?e:null!=e?[e]:[]},n}function G(){if(this.sources&&this.state){if(1===this.state)J(this);else{let e=N;N=null,et(()=>eo(this),!1),N=e}}if(B){let e=this.observers?this.observers.length:0;B.sources?(B.sources.push(this),B.sourceSlots.push(e)):(B.sources=[this],B.sourceSlots=[e]),this.observers?(this.observers.push(B),this.observerSlots.push(B.sources.length-1)):(this.observers=[B],this.observerSlots=[B.sources.length-1])}return this.value}function Q(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&et(()=>{for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t];n.state||(n.pure?N.push(n):W.push(n),n.observers&&function e(t){for(let n=0;n<t.observers.length;n+=1){let r=t.observers[n];!r.state&&(r.state=2,r.pure?N.push(r):W.push(r),r.observers&&e(r))}}(n)),n.state=1}if(N.length>1e6)throw N=[],Error()},!1)),t}function J(e){if(!e.fn)return;el(e);let t=R,n=B,r=P;B=R=e,function(e,t,n){let r;try{r=e.fn(t)}catch(t){e.pure&&(e.state=1,e.owned&&e.owned.forEach(el),e.owned=null),ea(t)}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?Q(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),B=n,R=t}function X(e,t,n,r=1,o){let l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:R,context:null,pure:n};return null===R||R!==I&&(R.owned?R.owned.push(l):R.owned=[l]),l}function ee(e){if(0===e.state)return;if(2===e.state)return eo(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);let t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<P);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)J(e);else if(2===e.state){let n=N;N=null,et(()=>eo(e,t[0]),!1),N=n}}function et(e,t){if(N)return e();let n=!1;t||(N=[]),W?n=!0:W=[],P++;try{let t=e();return function(e){if(N&&(en(N),N=null),e)return;let t=W;W=null,t.length&&et(()=>E(t),!1)}(n),t}catch(e){n||(W=null),N=null,ea(e)}}function en(e){for(let t=0;t<e.length;t++)ee(e[t])}function er(e){let t,n=0;for(t=0;t<e.length;t++){let r=e[t];r.user?e[n++]=r:ee(r)}for(S.context&&(S.context=void 0),t=0;t<n;t++)ee(e[t])}function eo(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){let r=e.sources[n];r.sources&&(1===r.state?r!==t&&ee(r):(2===r.state||null)&&eo(r,t))}}function el(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){let e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)el(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ei(e){return e instanceof Error||"string"==typeof e?e:Error("Unknown error")}function ea(e){throw e=ei(e)}let es=Symbol("fallback");function ec(e){for(let t=0;t<e.length;t++)e[t]()}function eu(e,t){return U(()=>e(t||{}))}function ed(){return!0}let eh={get:(e,t,n)=>t===A?n:e.get(t),has:(e,t)=>t===A||e.has(t),set:ed,deleteProperty:ed,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:ed,deleteProperty:ed}),ownKeys:e=>e.keys()};function ef(e){return(e="function"==typeof e?e():e)?e:{}}function eg(...e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];t=t||!!r&&A in r,e[n]="function"==typeof r?(t=!0,F(r)):r}if(t)return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){let r=ef(e[n])[t];if(void 0!==r)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ef(e[n]))return!0;return!1},keys(){let t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ef(e[n])));return[...new Set(t)]}},eh);let n={};for(let t=e.length-1;t>=0;t--)if(e[t]){let r=Object.getOwnPropertyDescriptors(e[t]);for(let t in r)t in n||Object.defineProperty(n,t,{enumerable:!0,get(){for(let n=e.length-1;n>=0;n--){let r=(e[n]||{})[t];if(void 0!==r)return r}}})}return n}function ep(e,...t){let n=new Set(t.flat());if(A in e){let r=t.map(t=>new Proxy({get:n=>t.includes(n)?e[n]:void 0,has:n=>t.includes(n)&&n in e,keys:()=>t.filter(t=>t in e)},eh));return r.push(new Proxy({get:t=>n.has(t)?void 0:e[t],has:t=>!n.has(t)&&t in e,keys:()=>Object.keys(e).filter(e=>!n.has(e))},eh)),r}let r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(e=>!n.has(e))),t.map(t=>{let n={};for(let o=0;o<t.length;o++){let l=t[o];l in e&&Object.defineProperty(n,l,r[l]?r[l]:{get:()=>e[l],set:()=>!0,enumerable:!0})}return n})}function em(e){return F(function(e,t,n={}){let r=[],o=[],l=[],i=0,a=t.length>1?[]:null;return Z(()=>ec(l)),()=>{let s=e()||[],c,u;return s[T],U(()=>{let e=s.length,t,h,f,g,p,m,C,v,w;if(0===e)0!==i&&(ec(l),l=[],r=[],o=[],i=0,a&&(a=[])),n.fallback&&(r=[es],o[0]=O(e=>(l[0]=e,n.fallback())),i=1);else if(0===i){for(u=0,o=Array(e);u<e;u++)r[u]=s[u],o[u]=O(d);i=e}else{for(f=Array(e),g=Array(e),a&&(p=Array(e)),m=0,C=Math.min(i,e);m<C&&r[m]===s[m];m++);for(C=i-1,v=e-1;C>=m&&v>=m&&r[C]===s[v];C--,v--)f[v]=o[C],g[v]=l[C],a&&(p[v]=a[C]);for(t=new Map,h=Array(v+1),u=v;u>=m;u--)w=s[u],c=t.get(w),h[u]=void 0===c?-1:c,t.set(w,u);for(c=m;c<=C;c++)w=r[c],void 0!==(u=t.get(w))&&-1!==u?(f[u]=o[c],g[u]=l[c],a&&(p[u]=a[c]),u=h[u],t.set(w,u)):l[c]();for(u=m;u<e;u++)u in f?(o[u]=f[u],l[u]=g[u],a&&(a[u]=p[u],a[u](u))):o[u]=O(d);o=o.slice(0,i=e),r=s.slice(0)}return o});function d(e){if(l[u]=e,a){let[e,n]=V(u);return a[u]=n,t(s[u],e)}return t(s[u])}}}(()=>e.each,e.children,"fallback"in e&&{fallback:()=>e.fallback}||void 0))}function eC(e){let t=!1,n=e.keyed,r=F(()=>e.when,void 0,{equals:(e,n)=>t?e===n:!e==!n});return F(()=>{let o=r();if(o){let r=e.children,l="function"==typeof r&&r.length>0;return t=n||l,l?U(()=>r(o)):r}return e.fallback},void 0,void 0)}function ev(e){let t=!1,n=!1,r=Y(()=>e.children),o=F(()=>{let e=r();Array.isArray(e)||(e=[e]);for(let t=0;t<e.length;t++){let r=e[t].when;if(r)return n=!!e[t].keyed,[t,r,e[t]]}return[-1]},void 0,{equals:(e,n)=>e[0]===n[0]&&(t?e[1]===n[1]:!e[1]==!n[1])&&e[2]===n[2]});return F(()=>{let[r,l,i]=o();if(r<0)return e.fallback;let a=i.children,s="function"==typeof a&&a.length>0;return t=n||s,s?U(()=>a(l)):a},void 0,void 0)}function ew(e){return e}let ey=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),ex=new Set(["innerHTML","textContent","innerText","children"]),eb=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ek=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),eL=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),eM=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),e$={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},eS="_$DX_DELEGATE";function eA(e,t,n){if("undefined"==typeof window)return null;let r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function eT(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function e_(e,t){null==t?e.removeAttribute("class"):e.className=t}function eE(e,t={},n,r){let o={};return r||K(()=>o.children=eW(e,t.children,o.children)),K(()=>t.ref&&t.ref(e)),K(()=>(function(e,t,n,r,o={},l=!1){for(let r in t||(t={}),o)if(!(r in t)){if("children"===r)continue;o[r]=eB(e,r,null,o[r],n,l)}for(let i in t){if("children"===i){r||eW(e,t.children);continue}let a=t[i];o[i]=eB(e,i,a,o[i],n,l)}})(e,t,n,!0,o,!0)),o}function eI(e,t,n){return U(()=>e(t,n))}function eH(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return eW(e,t,r,n);K(r=>eW(e,t(),r,n),r)}function eR(e,t,n){let r=t.trim().split(/\s+/);for(let t=0,o=r.length;t<o;t++)e.classList.toggle(r[t],n)}function eB(e,t,n,r,o,l){let i,a,s;if("style"===t)return function(e,t,n){let r,o;if(!t)return n?eT(e,"style"):t;let l=e.style;if("string"==typeof t)return l.cssText=t;for(o in"string"==typeof n&&(l.cssText=n=void 0),n||(n={}),t||(t={}),n)null==t[o]&&l.removeProperty(o),delete n[o];for(o in t)(r=t[o])!==n[o]&&(l.setProperty(o,r),n[o]=r);return n}(e,n,r);if("classList"===t)return function(e,t,n={}){let r,o;let l=Object.keys(t||{}),i=Object.keys(n);for(r=0,o=i.length;r<o;r++){let o=i[r];o&&"undefined"!==o&&!t[o]&&(eR(e,o,!1),delete n[o])}for(r=0,o=l.length;r<o;r++){let o=l[r],i=!!t[o];o&&"undefined"!==o&&n[o]!==i&&i&&(eR(e,o,!0),n[o]=i)}return n}(e,n,r);if(n===r)return r;if("ref"===t)l||n(e);else if("on:"===t.slice(0,3)){let o=t.slice(3);r&&e.removeEventListener(o,r),n&&e.addEventListener(o,n)}else if("oncapture:"===t.slice(0,10)){let o=t.slice(10);r&&e.removeEventListener(o,r,!0),n&&e.addEventListener(o,n,!0)}else if("on"===t.slice(0,2)){let o=t.slice(2).toLowerCase(),l=eL.has(o);if(!l&&r){let t=Array.isArray(r)?r[0]:r;e.removeEventListener(o,t)}(l||n)&&(!function(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n)}(e,o,n,l),l&&function(e,t=window.document){let n=t[eS]||(t[eS]=new Set);for(let r=0,o=e.length;r<o;r++){let o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,eN))}}([o]))}else if((s=ex.has(t))||!o&&(ek[t]||(a=ey.has(t)))||(i=e.nodeName.includes("-")))"class"===t||"className"===t?e_(e,n):!i||a||s?e[ek[t]||t]=n:e[t.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())]=n;else{let r=o&&t.indexOf(":")>-1&&e$[t.split(":")[0]];r?null==n?e.removeAttributeNS(r,t):e.setAttributeNS(r,t,n):eT(e,eb[t]||t,n)}return n}function eN(e){let t=`$$${e.type}`,n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document}),S.registry&&!S.done&&(S.done=!0,document.querySelectorAll("[id^=pl-]").forEach(t=>{for(;t&&8!==t.nodeType&&t.nodeValue!=="pl-"+e;){let e=t.nextSibling;t.remove(),t=e}t&&t.remove()}));n;){let r=n[t];if(r&&!n.disabled){let o=n[`${t}Data`];if(void 0!==o?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function eW(e,t,n,r,o){for(S.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;let l=typeof t,i=void 0!==r;if(e=i&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l){if(S.context)return n;if("number"===l&&(t=t.toString()),i){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=eO(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===l){if(S.context)return n;n=eO(e,n,r)}else if("function"===l)return K(()=>{let o=t();for(;"function"==typeof o;)o=o();n=eW(e,o,n,r)}),()=>n;else if(Array.isArray(t)){let l=[],a=n&&Array.isArray(n);if(function e(t,n,r,o){let l=!1;for(let i=0,a=n.length;i<a;i++){let a=n[i],s=r&&r[i];if(a instanceof Node)t.push(a);else if(null==a||!0===a||!1===a);else if(Array.isArray(a))l=e(t,a,s)||l;else if("function"==typeof a){if(o){for(;"function"==typeof a;)a=a();l=e(t,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||l}else t.push(a),l=!0}else{let e=String(a);s&&3===s.nodeType&&s.data===e?t.push(s):t.push(document.createTextNode(e))}}return l}(l,t,n,o))return K(()=>n=eW(e,l,n,r,!0)),()=>n;if(S.context){if(!l.length)return n;for(let e=0;e<l.length;e++)if(l[e].parentNode)return n=l}if(0===l.length){if(n=eO(e,n,r),i)return n}else a?0===n.length?eP(e,l,r):function(e,t,n){let r=n.length,o=t.length,l=r,i=0,a=0,s=t[o-1].nextSibling,c=null;for(;i<o||a<l;){if(t[i]===n[a]){i++,a++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===i){let t=l<r?a?n[a-1].nextSibling:n[l-a]:s;for(;a<l;)e.insertBefore(n[a++],t)}else if(l===a)for(;i<o;)c&&c.has(t[i])||t[i].remove(),i++;else if(t[i]===n[l-1]&&n[a]===t[o-1]){let r=t[--o].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!c){c=new Map;let e=a;for(;e<l;)c.set(n[e],e++)}let r=c.get(t[i]);if(null!=r){if(a<r&&r<l){let s=i,u=1,d;for(;++s<o&&s<l&&null!=(d=c.get(t[s]))&&d===r+u;)u++;if(u>r-a){let o=t[i];for(;a<r;)e.insertBefore(n[a++],o)}else e.replaceChild(n[a++],t[i++])}else i++}else t[i++].remove()}}}(e,n,l):(n&&eO(e),eP(e,l));n=l}else if(t instanceof Node){if(S.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=eO(e,n,r,t);eO(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}return n}function eP(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function eO(e,t,n,r){if(void 0===n)return e.textContent="";let o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){let i=t[l];if(o!==i){let t=i.parentNode===e;r||l?t&&i.remove():t?e.replaceChild(o,i):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function eV(e,t=!1){return t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)}function eD(e){let{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function o(){if(!S.context)return()=>e.children;{let[t,n]=V(!1);return queueMicrotask(()=>n(!0)),()=>t()&&e.children}}if(r instanceof HTMLHeadElement){let[e,t]=V(!1),n=()=>t(!0);O(t=>eH(r,()=>e()?t():o()(),null)),Z(()=>{S.context?queueMicrotask(n):n()})}else{let l=eV(e.isSVG?"g":"div",e.isSVG),i=t&&l.attachShadow?l.attachShadow({mode:"open"}):l;Object.defineProperty(l,"_$host",{get:()=>n.parentNode,configurable:!0}),eH(i,o()),r.appendChild(l),e.ref&&e.ref(l),Z(()=>r.removeChild(l))}return n}function eK(e){let[t,n]=ep(e,["component"]),r=F(()=>t.component);return F(()=>{let e=r();switch(typeof e){case"function":return U(()=>e(n));case"string":let t,o;let l=eM.has(e),i=S.context?S.context&&(t=S.registry.get(o=function(){let e=S.context;return`${e.id}${e.count++}`}()))?(S.completed&&S.completed.add(t),S.registry.delete(o),t):(void 0).cloneNode(!0):eV(e,l);return eE(i,n,l),i}})}var ej=((l=ej||{}).DARK="DARK",l.LIGHT="LIGHT",l);let eF={data:""},eU=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||eF,eZ=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ez=/\/\*[^]*?\*\/|  +/g,eq=/\n+/g,eY=(e,t)=>{let n="",r="",o="";for(let l in e){let i=e[l];"@"==l[0]?"i"==l[1]?n=l+" "+i+";":r+="f"==l[1]?eY(i,l):l+"{"+eY(i,"k"==l[1]?"":t)+"}":"object"==typeof i?r+=eY(i,t?t.replace(/([^,])+/g,e=>l.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):l):null!=i&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=eY.p?eY.p(l,i):l+":"+i+";")}return n+(t&&o?t+"{"+o+"}":o)+r},eG={},eQ=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+eQ(e[n]);return t}return e},eJ=(e,t,n,r,o)=>{var l;let i=eQ(e),a=eG[i]||(eG[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!eG[a]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=eZ.exec(e.replace(ez,""));)t[4]?r.shift():t[3]?(n=t[3].replace(eq," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(eq," ").trim();return r[0]})(e);eG[a]=eY(o?{["@keyframes "+a]:t}:t,n?"":"."+a)}let s=n&&eG.g?eG.g:null;return n&&(eG.g=eG[a]),l=eG[a],s?t.data=t.data.replace(s,l):-1===t.data.indexOf(l)&&(t.data=r?l+t.data:t.data+l),a},eX=(e,t,n)=>e.reduce((e,r,o)=>{let l=t[o];if(l&&l.call){let e=l(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;l=t?"."+t:e&&"object"==typeof e?e.props?"":eY(e,""):!1===e?"":e}return e+r+(null==l?"":l)},"");function e1(e){let t=this||{},n=e.call?e(t.p):e;return eJ(n.unshift?n.raw?eX(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,eU(t.target),t.g,t.o,t.k)}e1.bind({g:1});let e0=e1.bind({k:1}),e2=z();function e5(e){return eu(e2.Provider,{value:e.theme,get children(){return e.children}})}function e4(){return q(e2)}function e3(e){let t=this||{};return(...n)=>{let r=r=>{let o;let l=eg(r,{theme:q(e2)}),[i,a]=ep(eg(l,{get class(){let e=l.class,r="class"in l&&/^go[0-9]+/.test(e);return[e,e1.apply({target:t.target,o:r,p:l,g:t.g},n)].filter(Boolean).join(" ")}}),["as","theme"]),s=i.as||e;return"function"==typeof s?o=s(a):1==t.g?eE(o=document.createElement(s),a):o=eK(eg({component:s},a)),o};return r.class=e=>U(()=>e1.apply({target:t.target,p:e,g:t.g},n)),r}}let e9=new Proxy(e3,{get:(e,t)=>e(t)});function e8(){let e=e3.call({g:1},"div").apply(null,arguments);return function(t){return e(t),null}}let e6="tc-root",e7="tc-disable-scroll",te="tc-using-mouse",tt=()=>(document.body.addEventListener("mousedown",()=>document.body.classList.add(te)),document.body.addEventListener("keydown",e=>{"Tab"===e.key&&document.body.classList.remove(te)}),eu(e8`
    ${e6} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${e6} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${e6} *:focus {
        outline: #08f auto 2px;
    }
    
    ${e6} li {
        list-style: none;
    }
    
    ${e6} button {
        outline: none;
    }
    
    body.${e7} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${te} ${e6} *:focus {
        outline: none;
    }
`,{}));function tn(e,t){return"#"===e[0]&&(e=function(e){"#"===e[0]&&(e=e.slice(1));let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t].join(",")}(e)),`rgba(${e}, ${t})`}function tr(e){return e.toString()+"px"}class to extends c._Y{constructor(...e){super(...e),Object.setPrototypeOf(this,to.prototype)}}function tl(e){!function(e,t="_self"){window.open(e,t,"noreferrer noopener")}(e,"_blank")}function ti(e,t){let n=function(e,t,n){let r=new URL(e);return r.searchParams.append("ret",n),r.toString()}(e,0,"string"==typeof t?t:tu()?t.twaReturnUrl||t.returnStrategy:"none");if(!(0,c.dg)(e))return n;let r=n.slice(n.lastIndexOf("&")+1);return n.slice(0,n.lastIndexOf("&"))+"-"+(0,c.Ob)(r)}function ta(){if("undefined"==typeof localStorage)throw new to("window.localStorage is undefined. localStorage is required for TonConnectUI")}function ts(){if("undefined"!=typeof window)return window}function tc(e,t){let n=new URL(e);n.searchParams.append("startattach","tonconnect"),tl(ti(n.toString(),t))}function tu(){var e;return!!(null==(e=ts())?void 0:e.TelegramWebviewProxy)}class td{constructor(){M(this,"localStorage"),M(this,"storageKey","ton-connect-ui_wallet-info"),ta(),this.localStorage=localStorage}setWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getWalletInfo(){let e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeWalletInfo(){this.localStorage.removeItem(this.storageKey)}}class th{constructor(){M(this,"localStorage"),M(this,"storageKey","ton-connect-ui_preferred-wallet"),ta(),this.localStorage=localStorage}setPreferredWalletAppName(e){this.localStorage.setItem(this.storageKey,e)}getPreferredWalletAppName(){return this.localStorage.getItem(this.storageKey)||void 0}}class tf{constructor(){M(this,"localStorage"),M(this,"storageKey","ton-connect-ui_last-selected-wallet-info"),ta(),this.localStorage=localStorage}setLastSelectedWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getLastSelectedWalletInfo(){let e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeLastSelectedWalletInfo(){this.localStorage.removeItem(this.storageKey)}}let[tg,tp]=V(!1),tm="undefined"!=typeof window?new tf:void 0,[tC,tv]=V((null==tm?void 0:tm.getLastSelectedWalletInfo())||null),tw=e=>{tm||(tm=new tf),e?tm.setLastSelectedWalletInfo(e):tm.removeLastSelectedWalletInfo(),tv(e)},[ty,tx]=V(null),tb={en:tk({common:{close:"Close",openWallet:"Open wallet",copyLink:"Copy Link",linkCopied:"Link Copied",copied:"Copied",yourWallet:"Your Wallet",retry:"Retry",get:"GET",mobile:"Mobile",browserExtension:"Browser Extension",desktop:"Desktop"},button:{connectWallet:"Connect Wallet",dropdown:{copy:"Copy address",copied:"Address copied!",disconnect:"Disconnect"}},notifications:{confirm:{header:"Open {{ name }} to\xa0confirm the\xa0transaction."},transactionSent:{header:"Transaction sent",text:"Your transaction\xa0will be\xa0processed in\xa0a\xa0few seconds."},transactionCanceled:{header:"Transaction canceled",text:"There will be no changes to\xa0your account."}},walletItem:{walletOn:"Wallet On",recent:"Recent",installed:"Installed",popular:"Popular"},walletModal:{loading:"Loading wallets",wallets:"Wallets",mobileUniversalModal:{connectYourWallet:"Connect your wallet",openWalletOnTelegramOrSelect:"Open Wallet on Telegram or\xa0select your\xa0wallet\xa0to\xa0connect",openWalletOnTelegram:"Open Wallet on Telegram",openLink:"Open Link",scan:"Scan with your mobile wallet"},desktopUniversalModal:{connectYourWallet:"Connect your wallet",scan:"Scan with your mobile wallet",availableWallets:"Available wallets"},mobileConnectionModal:{showQR:"Show QR Code",scanQR:"Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera",continueIn:"Continue in {{ name }}…",connectionDeclined:"Connection declined"},desktopConnectionModal:{scanQR:"Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera",continueInExtension:"Continue in\xa0{{ name }} browser extension…",dontHaveExtension:"Seems you don't have installed {{ name }}\xa0browser\xa0extension",getWallet:"Get {{ name }}",continueOnDesktop:"Continue in\xa0{{ name }} on desktop…",openWalletOnTelegram:"Open Wallet on Telegram on desktop",connectionDeclined:"Connection declined"},infoModal:{whatIsAWallet:"What is a wallet",secureDigitalAssets:"Secure digital assets storage",walletProtects:"A wallet protects and manages your digital assets\xa0including TON, tokens and collectables.",controlIdentity:"Control your Web3 identity",manageIdentity:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in\xa0the\xa0blockchain ecosystem.",effortlessCryptoTransactions:"Effortless crypto transactions",easilySend:"Easily send, receive, monitor your cryptocurrencies.\xa0Streamline your operations with\xa0decentralized applications.",getAWallet:"Get a Wallet"}},actionModal:{confirmTransaction:{header:"Confirm the\xa0transaction in\xa0{{ name }}",text:"It will only take a\xa0moment."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}}),ru:tk({common:{close:"Закрыть",openWallet:"Открыть кошелёк",copyLink:"Копировать ссылку",linkCopied:"Ссылка скопирована",copied:"Ссылка скопирована",yourWallet:"Ваш кошелёк",retry:"Повторить",get:"Скачать",mobile:"Мобильный",browserExtension:"Расширение",desktop:"Десктоп"},button:{connectWallet:"Подключить кошелёк",dropdown:{copy:"Скопировать адрес",copied:"Адрес скопирован!",disconnect:"Отключить кошелёк"}},notifications:{confirm:{header:"Откройте {{ name }}, чтобы\xa0подтвердить транзакцию."},transactionSent:{header:"Транзакция отправлена",text:"Ваша транзакция\xa0будет обработана через\xa0несколько секунд."},transactionCanceled:{header:"Транзакция отменена",text:"Состояние вашего счёта не\xa0изменится."}},walletItem:{walletOn:"Wallet в",recent:"Недавний",installed:"Установлен",popular:"Популярен"},walletModal:{loading:"Кошельки загружаются",wallets:"Кошельки",mobileUniversalModal:{connectYourWallet:"Подключите кошелёк",openWalletOnTelegramOrSelect:"Подключите Wallet в\xa0Telegram или\xa0выберете кошелёк для\xa0подключения",openWalletOnTelegram:"Открыть Wallet в Telegram",openLink:"Открыть ссылку",scan:"Отсканируйте камерой вашего\xa0телефона"},desktopUniversalModal:{connectYourWallet:"Подключите кошелёк",scan:"Отсканируйте QR-код камерой вашего\xa0телефона",availableWallets:"Доступные кошельки"},mobileConnectionModal:{showQR:"Показать QR-код",scanQR:"Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона",continueIn:"Продолжите в {{ name }}…",connectionDeclined:"Подключение отклонено"},desktopConnectionModal:{scanQR:"Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона",continueInExtension:"Откройте браузерное расширение {{ name }}",dontHaveExtension:"Похоже, у вас не\xa0установлено браузерное\xa0расширение\xa0{{ name }}",getWallet:"Скачать {{ name }}",continueOnDesktop:"Откройте {{ name }} на\xa0компьютере…",openWalletOnTelegram:"Открыть Wallet в\xa0Telegram",connectionDeclined:"Подключение отклонено"},infoModal:{whatIsAWallet:"Что такое кошелёк?",secureDigitalAssets:"Надежное хранилище цифровых активов",walletProtects:"Кошелёк защищает ваши цифровые активы, включая TON, токены и\xa0предметы коллекционирования, и\xa0управляет ими.",controlIdentity:"Контроль своей личности Web3",manageIdentity:"Управляйте своей цифровой идентификацией и\xa0с\xa0легкостью получайте доступ к\xa0децентрализованным приложениям. Сохраняйте контроль над\xa0своими данными и\xa0безопасно участвуйте в\xa0экосистеме\xa0блокчейна.",effortlessCryptoTransactions:"Простые криптотранзакции",easilySend:"Легко отправляйте, получайте и\xa0отслеживайте свои криптовалюты. Оптимизируйте свои операции с\xa0помощью децентрализованных приложений.",getAWallet:"Скачать кошелёк"}},actionModal:{confirmTransaction:{header:"Подтвердите действие в\xa0{{ name }}",text:"Это займет пару секунд."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}})};function tk(e){let t=n=>{Object.entries(n).forEach(([r,o])=>{if("object"==typeof o&&o)return t(o);if("string"==typeof o){if("$"===o[0]){let t=o.slice(1).split("."),l=e;t.forEach(e=>{if(e in l)l=l[e];else throw Error(`Cannot parse translations: there is no property ${e} in translation`)}),n[r]=l}"\\$"===o.slice(0,2)&&(n[r]=o.slice(1))}})};return t(e),e}let tL=z(),tM=Symbol("store-raw"),t$=Symbol("store-node"),tS=Symbol("store-name");function tA(e,t){let n=e[A];if(!n&&(Object.defineProperty(e,A,{value:n=new Proxy(e,tB)}),!Array.isArray(e))){let t=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,l=t.length;o<l;o++){let l=t[o];r[l].get&&Object.defineProperty(e,l,{enumerable:r[l].enumerable,get:r[l].get.bind(n)})}}return n}function tT(e){let t;return null!=e&&"object"==typeof e&&(e[A]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function t_(e,t=new Set){let n,r,o,l;if(n=null!=e&&e[tM])return n;if(!tT(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,l=e.length;n<l;n++)(r=t_(o=e[n],t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);let n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let a=0,s=n.length;a<s;a++)i[l=n[a]].get||(r=t_(o=e[l],t))===o||(e[l]=r)}return e}function tE(e){let t=e[t$];return t||Object.defineProperty(e,t$,{value:t={}}),t}function tI(e,t,n){return e[t]||(e[t]=tR(n))}function tH(e){if(B){let t=tE(e);(t._||(t._=tR()))()}}function tR(e){let[t,n]=V(e,{equals:!1,internal:!0});return t.$=n,t}let tB={get(e,t,n){if(t===tM)return e;if(t===A)return n;if(t===T)return tH(e),n;let r=tE(e),o=r.hasOwnProperty(t),l=o?r[t]():e[t];if(t===t$||"__proto__"===t)return l;if(!o){let n=Object.getOwnPropertyDescriptor(e,t);B&&("function"!=typeof l||e.hasOwnProperty(t))&&!(n&&n.get)&&(l=tI(r,t,l)())}return tT(l)?tA(l):l},has(e,t){return t===tM||t===A||t===T||t===t$||"__proto__"===t||(this.get(e,t,e),t in e)},set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){return tH(e),Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(e,t){let n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.get&&n.configurable&&t!==A&&t!==t$&&t!==tS&&(delete n.value,delete n.writable,n.get=()=>e[A][t]),n}};function tN(e,t,n,r=!1){if(!r&&e[t]===n)return;let o=e[t],l=e.length;void 0===n?delete e[t]:e[t]=n;let i=tE(e),a;(a=tI(i,t,o))&&a.$(()=>n),Array.isArray(e)&&e.length!==l&&(a=tI(i,"length",l))&&a.$(e.length),(a=i._)&&a.$()}function tW(e,t){let n=Object.keys(t);for(let r=0;r<n.length;r+=1){let o=n[r];tN(e,o,t[o])}}function tP(...[e,t]){let n=t_(e||{}),r=Array.isArray(n);return[tA(n),function(...e){et(()=>{r&&1===e.length?function(e,t){if("function"==typeof t&&(t=t(e)),Array.isArray(t=t_(t))){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){let r=t[n];e[n]!==r&&tN(e,n,r)}tN(e,"length",r)}else tW(e,t)}(n,e[0]):function e(t,n,r=[]){let o,l=t;if(n.length>1){let i=typeof(o=n.shift()),a=Array.isArray(t);if(Array.isArray(o)){for(let l=0;l<o.length;l++)e(t,[o[l]].concat(n),r);return}if(a&&"function"===i){for(let l=0;l<t.length;l++)o(t[l],l)&&e(t,[l].concat(n),r);return}if(a&&"object"===i){let{from:l=0,to:i=t.length-1,by:a=1}=o;for(let o=l;o<=i;o+=a)e(t,[o].concat(n),r);return}if(n.length>1){e(t[o],n,[o].concat(r));return}l=t[o],r=[o].concat(r)}let i=n[0];("function"!=typeof i||(i=i(l,r))!==l)&&(void 0!==o||void 0!=i)&&(i=t_(i),void 0===o||tT(l)&&tT(i)&&!Array.isArray(i)?tW(l,i):tN(t,o,i))}(n,e)},!1)}]}let tO={constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#0098EA",telegramButton:"#0098EA",icon:{primary:"#0F0F0F",secondary:"#7A8999",tertiary:"#C1CAD2",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#FFFFFF",secondary:"#F1F3F5",segment:"#FFFFFF",tint:"#F1F3F5",qr:"#F1F3F5"},text:{primary:"#0F0F0F",secondary:"#6A7785"}};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function tV(e){return"[object Object]"===Object.prototype.toString.call(e)}function tD(e){var t,n;return!1!==tV(e)&&(void 0===(t=e.constructor)||!1!==tV(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))}function tK(e,t){return e?f()(t,e,{arrayMerge:(e,t,n)=>t,isMergeableObject:tD}):t}let[tj,tF]=tP({theme:ej.LIGHT,colors:tO,borderRadius:"m"}),tU={[ej.LIGHT]:tO,[ej.DARK]:{constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#E5E5EA",telegramButton:"#31A6F5",icon:{primary:"#E5E5EA",secondary:"#909099",tertiary:"#434347",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#121214",secondary:"#18181A",segment:"#262629",tint:"#222224",qr:"#FFFFFF"},text:{primary:"#E5E5EA",secondary:"#7D7D85"}}},tZ={[ej.LIGHT]:void 0,[ej.DARK]:void 0};function tz(e,t){t&&(tZ[ej.DARK]=tK(t[ej.DARK],tZ[ej.DARK]),tZ[ej.LIGHT]=tK(t[ej.LIGHT],tZ[ej.LIGHT])),tF({theme:e,colors:tK(tZ[e],tU[e])})}let tq=e9.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,tY=e=>{let t;let[n,r]=V(null);return j(()=>{let t=new window.Image;return(t.src=e.src,t.alt=e.alt||"",t.setAttribute("draggable","false"),e.class&&t.classList.add(e.class),t.complete)?r(t):(t.addEventListener("load",()=>r(t)),()=>t.removeEventListener("load",()=>r(t)))}),[eu(eC,{get when(){return n()},get children(){return n()}}),eu(eC,{get when(){return!n()},get children(){return eu(tq,{get class(){return e.class},ref(e){let n=t;"function"==typeof n?n(e):t=e}})}})]},tG={mobile:440,tablet:1020};function tQ(e){let t=ts();if(!t)return"desktop"===e;let n=t.innerWidth;switch(e){case"desktop":return n>tG.tablet;case"tablet":return n>tG.mobile;default:return n<=tG.mobile}}function tJ(e){switch(e){case"mobile":return`@media (max-width: ${tG.mobile}px)`;case"tablet":return`@media (max-width: ${tG.tablet}px) (min-width: ${tG.mobile}px)`;default:return`@media (min-width: ${tG.tablet}px)`}}let tX="@media (hover: none)",t1="@media not all and (hover: none)",t0={m:"100vh",s:"8px",none:"0"},t2={s:.02,m:.04},t5=e9.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>"flat"===e.appearance?"transparent":"secondary"===e.appearance?e.theme.colors.background.tint:tn(e.theme.colors.accent,.12)};
    color: ${e=>"secondary"===e.appearance?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>"flat"===e.appearance?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&"flat"!==e.appearance?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&"flat"!==e.appearance?"12px":"16px"};
    border: none;
    border-radius: ${e=>t0[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 590;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${t1} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+t2[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-t2[e.scale]})`};
    }

    ${tX} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-2*t2[e.scale]})`};
        }
    }
`;function t4(e){let t=U(()=>Object.keys(e).filter(e=>e.startsWith("data-"))),[n]=ep(e,t);return n}let t3=e=>{let t=t4(e);return eu(t5,eg({get appearance(){return e.appearance||"primary"},get class(){return e.class},onClick:t=>{var n;return null==(n=e.onClick)?void 0:n.call(e,t)},onMouseEnter:t=>{var n;return null==(n=e.onMouseEnter)?void 0:n.call(e,t)},onMouseLeave:t=>{var n;return null==(n=e.onMouseLeave)?void 0:n.call(e,t)},ref(t){let n=e.ref;"function"==typeof n?n(t):e.ref=t},get disabled(){return e.disabled},get scale(){return e.scale||"m"},get leftIcon(){return!!e.leftIcon},get rightIcon(){return!!e.rightIcon},"data-tc-button":"true"},t,{get children(){return[F(()=>e.leftIcon),F(()=>e.children),F(()=>e.rightIcon)]}}))};function t9(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let t8=e=>{let t;let n=!0,[r,o]=V(),[l,i]=V(),a=Y(()=>e.children),{onBeforeEnter:s,onEnter:c,onAfterEnter:u,onBeforeExit:d,onExit:h,onAfterExit:f}=e,g=F(()=>{let t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to"}});function p(t,a){if(!n||e.appear){let n=function(s){t&&(!s||s.target===t)&&(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(...h),t.classList.remove(...f),et(()=>{r()!==t&&o(t),l()===t&&i(void 0)},!1),u&&u(t),"inout"===e.mode&&m(t,a))},d=g().enterClass.split(" "),h=g().enterActiveClass.split(" "),f=g().enterToClass.split(" ");s&&s(t),t.classList.add(...d),t.classList.add(...h),t9(()=>{t.classList.remove(...d),t.classList.add(...f),c&&c(t,()=>n()),(!c||c.length<2)&&(t.addEventListener("transitionend",n),t.addEventListener("animationend",n))})}a&&!e.mode?i(t):o(t)}function m(t,n){let l=g().exitClass.split(" "),i=g().exitActiveClass.split(" "),a=g().exitToClass.split(" ");if(!n.parentNode)return s();function s(l){l&&l.target!==n||(n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...i),n.classList.remove(...a),r()===n&&o(void 0),f&&f(n),"outin"===e.mode&&p(t,n))}d&&d(n),n.classList.add(...l),n.classList.add(...i),t9(()=>{n.classList.remove(...l),n.classList.add(...a)}),h&&h(n,()=>s()),(!h||h.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))}return D(r=>{for(t=a();"function"==typeof t;)t=t();return U(()=>(t&&t!==r&&("outin"!==e.mode?p(t,r):n&&o(t)),r&&r!==t&&"inout"!==e.mode&&m(t,r),n=!1,t))}),[r,l]};function t6(e){let{top:t,bottom:n,left:r,right:o,width:l,height:i}=e.getBoundingClientRect(),a=e.parentNode.getBoundingClientRect();return{top:t-a.top,bottom:n,left:r-a.left,right:o,width:l,height:i}}let t7=e=>{let t=Y(()=>e.children),n=F(()=>{let t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to",moveClass:e.moveClass||t+"-move"}}),{onBeforeEnter:r,onEnter:o,onAfterEnter:l,onBeforeExit:i,onExit:a,onAfterExit:s}=e,[c,u]=V(),d=[],h=!0;return D(()=>{let e=t(),c=[...e],f=new Set(e),g=new Set(d),p=n().enterClass.split(" "),m=n().enterActiveClass.split(" "),C=n().enterToClass.split(" "),v=n().exitClass.split(" "),w=n().exitActiveClass.split(" "),y=n().exitToClass.split(" ");for(let t=0;t<e.length;t++){let n=e[t];if(!h&&!g.has(n)){let e=function(t){n&&(!t||t.target===n)&&(n.removeEventListener("transitionend",e),n.removeEventListener("animationend",e),n.classList.remove(...m),n.classList.remove(...C),l&&l(n))};r&&r(n),n.classList.add(...p),n.classList.add(...m),t9(()=>{n.classList.remove(...p),n.classList.add(...C),o&&o(n,()=>e()),(!o||o.length<2)&&(n.addEventListener("transitionend",e),n.addEventListener("animationend",e))})}}for(let e=0;e<d.length;e++){let t=d[e];if(!f.has(t)&&t.parentNode){let n=function(e){e&&e.target!==t||(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(...w),t.classList.remove(...y),s&&s(t),u(d=d.filter(e=>e!==t)))};c.splice(e,0,t),i&&i(t),t.classList.add(...v),t.classList.add(...w),t9(()=>{t.classList.remove(...v),t.classList.add(...y)}),a&&a(t,()=>n()),(!a||a.length<2)&&(t.addEventListener("transitionend",n),t.addEventListener("animationend",n))}}d=c,u(c)}),j(e=>{let t=c();return(t.forEach(t=>{let n;(n=e.get(t))?n.new&&(n.new=!1,n.newPos=t6(t)):e.set(t,n={pos:t6(t),new:!h}),n.new&&t.addEventListener("transitionend",()=>{n.new=!1,t.parentNode&&(n.newPos=t6(t))},{once:!0}),n.newPos&&(n.pos=n.newPos),n.newPos=t6(t)}),h)?h=!1:(t.forEach(t=>{let n=e.get(t),r=n.pos,o=n.newPos,l=r.left-o.left,i=r.top-o.top;if(l||i){n.moved=!0;let e=t.style;e.transform=`translate(${l}px,${i}px)`,e.transitionDuration="0s"}}),document.body.offsetHeight,t.forEach(t=>{let r=e.get(t);if(r.moved){let e=function(n){(!n||n.target===t)&&t.parentNode&&(!n||/transform$/.test(n.propertyName))&&(t.removeEventListener("transitionend",e),t.classList.remove(...l))};r.moved=!1;let o=t.style,l=n().moveClass.split(" ");t.classList.add(...l),o.transform=o.transitionDuration="",t.addEventListener("transitionend",e)}})),e},new Map),c},ne=eA('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>',4,!0),nt={left:0,top:90,right:180,bottom:270},nn=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary,r=()=>e.direction||"left";return eu(e9("svg")`
        transform: rotate(${e=>nt[e.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",get svgDirection(){return r()},get children(){let e=ne.cloneNode(!0);return K(()=>eT(e,"fill",n())),e}})},nr=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),no=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=nr.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},nl=e9.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${t1} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${tX} {
        &:active {
            transform: scale(0.92);
        }
    }
`,ni=e=>{let t=t4(e),n=()=>e.icon||"close";return eu(nl,eg({get class(){return e.class},onClick:()=>e.onClick(),"data-tc-icon-button":"true"},t,{get children(){return[eu(eC,{get when(){return!!e.children},get children(){return e.children}}),eu(eC,{get when(){return!e.children},get children(){return eu(ev,{get children(){return[eu(ew,{get when(){return"close"===n()},get children(){return eu(no,{get fill(){return e.fill}})}}),eu(ew,{get when(){return"arrow"===n()},get children(){return eu(nn,{get fill(){return e.fill}})}}),eu(ew,{get when(){return"question"===n()},get children(){return eu(rm,{get fill(){return e.fill}})}}),eu(ew,{get when(){return"string"!=typeof n()},get children(){return n()}})]}})}})]}}))},na={m:"24px",s:"16px",none:"0"},ns=e9.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${tJ("mobile")} {
        padding-bottom: 0;
    }
`,nc=e1`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${tJ("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,nu=e9.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>na[e.theme.borderRadius]};

    ${tJ("mobile")} {
        width: 100%;
    }
`,nd=e9(ni)`
    position: absolute;
    right: 16px;
    top: 16px;
`,nh=e9.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>na[e.theme.borderRadius]}
        ${e=>na[e.theme.borderRadius]};
`,nf=e9(ni)`
    background-color: ${e=>tn(e.theme.colors.icon.secondary,.12)};
`,ng=eA("<div></div>"),np=function(e,t){let n=n=>{var r;return!e.contains(n.target)&&(null==(r=t())?void 0:r())};document.body.addEventListener("click",n),Z(()=>document.body.removeEventListener("click",n))},nm=function(e,t){let n=e=>{var n,r;"Escape"===e.key&&(null==(n=document.activeElement)||n.blur(),null==(r=t())||r())};document.body.addEventListener("keydown",n),Z(()=>document.body.removeEventListener("keydown",n))},nC=e=>{let t=e4(),n=t4(e);return j(()=>{e.opened?document.documentElement.scrollHeight!==document.documentElement.clientHeight&&(document.body.style.top=tr(-document.documentElement.scrollTop),document.body.classList.add(e7)):(document.body.classList.remove(e7),document.documentElement.scrollTo({top:-parseFloat(getComputedStyle(document.body).top)}),document.body.style.top="auto")}),eu(t8,{onBeforeEnter:e=>{let t=tQ("mobile")?200:100;e.animate([{opacity:0},{opacity:1}],{duration:t}),tQ("mobile")&&e.firstElementChild.animate([{transform:"translateY(390px)"},{transform:"translateY(0)"}],{duration:t})},onExit:(e,t)=>{let n=tQ("mobile")?200:100,r=e.animate([{opacity:1},{opacity:0}],{duration:n});if(tQ("mobile")){let o=e.firstElementChild.animate([{transform:"translateY(0)"},{transform:"translateY(390px)"}],{duration:n});Promise.all([r.finished,o.finished]).then(t)}else r.finished.then(t)},get children(){return eu(eC,{get when(){return e.opened},get children(){return eu(ns,eg({"data-tc-modal":"true"},n,{get children(){let n=ng.cloneNode(!0);return eI(nm,n,()=>()=>e.onClose()),eI(np,n,()=>()=>e.onClose()),eH(n,eu(nu,{get class(){return e.class},get children(){return[eu(nd,{icon:"close",onClick:()=>e.onClose()}),F(()=>e.children)]}}),null),eH(n,eu(eC,{get when(){return e.onClickQuestion},get children(){return eu(nh,{get children(){return[eu(rg,{}),eu(nf,{get onClick(){return e.onClickQuestion},icon:"question"})]}})}}),null),K(()=>e_(n,p()(nc,e1`
                                border-radius: ${na[t.borderRadius]};
                                background-color: ${t.colors.background.tint};
                                ${tJ("mobile")} {
                                    border-radius: ${na[t.borderRadius]}
                                        ${na[t.borderRadius]} 0 0;
                                }
                            `))),n}}))}})}})},nv={m:"22px",s:"12px",none:"0"},nw={m:"18px",s:"8px",none:"0"},ny=e9.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>nv[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,nx=e9.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>nw[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,nb=e9.input`
    display: none;
`,nk=e9.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,nL={m:"16px",s:"12px",none:"0"},nM={m:"12px",s:"8px",none:"0"},n$=e9.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,nS=e9.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>nL[e.theme.borderRadius]};
    padding: ${tr(24)} 0;
    height: ${tr(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${t1} {
        &:hover {
            ${n$.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${n$.class} {
            transform: scale(0.96);
        }
    }

    ${tX} {
        &:active {
            ${n$.class} {
                transform: scale(0.92);
            }
        }
    }
`,nA=e9.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,nT=e9.div`
    position: absolute;
    width: ${tr(60)};
    height: ${tr(60)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,n_=e9(tY)`
    width: ${e=>tr(e.size)};
    height: ${e=>tr(e.size)};
    border-radius: ${e=>nM[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,nE=e9.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;var nI={exports:{}};(i=function(){var e,t,n,r,o,l,i,a=function(e,t){var n=e,r=c[t],o=null,l=0,i=null,a=[],s={},u=function(e,t){o=function(e){for(var t=Array(e),n=0;n<e;n+=1){t[n]=Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(l=4*n+17),h(0,0),h(l-7,0),h(0,l-7),b(),x(),M(e,t),n>=7&&k(e),null==i&&(i=A(n,r,a)),$(i,t)},h=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1)&&!(l<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||l<=t+r||(0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4?o[e+n][t+r]=!0:o[e+n][t+r]=!1)},y=function(){for(var e=0,t=0,n=0;n<8;n+=1){u(!0,n);var r=d.getLostPoint(s);(0==n||e>r)&&(e=r,t=n)}return t},x=function(){for(var e=8;e<l-8;e+=1)null==o[e][6]&&(o[e][6]=e%2==0);for(var t=8;t<l-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},b=function(){for(var e=d.getPatternPosition(n),t=0;t<e.length;t+=1)for(var r=0;r<e.length;r+=1){var l=e[t],i=e[r];if(null==o[l][i])for(var a=-2;a<=2;a+=1)for(var s=-2;s<=2;s+=1)-2==a||2==a||-2==s||2==s||0==a&&0==s?o[l+a][i+s]=!0:o[l+a][i+s]=!1}},k=function(e){for(var t=d.getBCHTypeNumber(n),r=0;r<18;r+=1){var i=!e&&(t>>r&1)==1;o[Math.floor(r/3)][r%3+l-8-3]=i}for(var r=0;r<18;r+=1){var i=!e&&(t>>r&1)==1;o[r%3+l-8-3][Math.floor(r/3)]=i}},M=function(e,t){for(var n=r<<3|t,i=d.getBCHTypeInfo(n),a=0;a<15;a+=1){var s=!e&&(i>>a&1)==1;a<6?o[a][8]=s:a<8?o[a+1][8]=s:o[l-15+a][8]=s}for(var a=0;a<15;a+=1){var s=!e&&(i>>a&1)==1;a<8?o[8][l-a-1]=s:a<9?o[8][15-a-1+1]=s:o[8][15-a-1]=s}o[l-8][8]=!e},$=function(e,t){for(var n=-1,r=l-1,i=7,a=0,s=d.getMaskFunction(t),c=l-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var u=0;u<2;u+=1)if(null==o[r][c-u]){var h=!1;a<e.length&&(h=(e[a]>>>i&1)==1),s(r,c-u)&&(h=!h),o[r][c-u]=h,-1==(i-=1)&&(a+=1,i=7)}if((r+=n)<0||l<=r){r-=n,n=-n;break}}},S=function(e,t){for(var n=0,r=0,o=0,l=Array(t.length),i=Array(t.length),a=0;a<t.length;a+=1){var s=t[a].dataCount,c=t[a].totalCount-s;r=Math.max(r,s),o=Math.max(o,c),l[a]=Array(s);for(var u=0;u<l[a].length;u+=1)l[a][u]=255&e.getBuffer()[u+n];n+=s;var h=d.getErrorCorrectPolynomial(c),g=f(l[a],h.getLength()-1).mod(h);i[a]=Array(h.getLength()-1);for(var u=0;u<i[a].length;u+=1){var p=u+g.getLength()-i[a].length;i[a][u]=p>=0?g.getAt(p):0}}for(var m=0,u=0;u<t.length;u+=1)m+=t[u].totalCount;for(var C=Array(m),v=0,u=0;u<r;u+=1)for(var a=0;a<t.length;a+=1)u<l[a].length&&(C[v]=l[a][u],v+=1);for(var u=0;u<o;u+=1)for(var a=0;a<t.length;a+=1)u<i[a].length&&(C[v]=i[a][u],v+=1);return C},A=function(e,t,n){for(var r=g.getRSBlocks(e,t),o=p(),l=0;l<n.length;l+=1){var i=n[l];o.put(i.getMode(),4),o.put(i.getLength(),d.getLengthInBits(i.getMode(),e)),i.write(o)}for(var a=0,l=0;l<r.length;l+=1)a+=r[l].dataCount;if(o.getLengthInBits()>8*a)throw"code length overflow. ("+o.getLengthInBits()+">"+8*a+")";for(o.getLengthInBits()+4<=8*a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*a)&&(o.put(236,8),!(o.getLengthInBits()>=8*a));)o.put(17,8);return S(o,r)};s.addData=function(e,t){var n=null;switch(t=t||"Byte"){case"Numeric":n=m(e);break;case"Alphanumeric":n=C(e);break;case"Byte":n=v(e);break;case"Kanji":n=w(e);break;default:throw"mode:"+t}a.push(n),i=null},s.isDark=function(e,t){if(e<0||l<=e||t<0||l<=t)throw e+","+t;return o[e][t]},s.getModuleCount=function(){return l},s.make=function(){if(n<1){for(var e=1;e<40;e++){for(var t=g.getRSBlocks(e,r),o=p(),l=0;l<a.length;l++){var i=a[l];o.put(i.getMode(),4),o.put(i.getLength(),d.getLengthInBits(i.getMode(),e)),i.write(o)}for(var s=0,l=0;l<t.length;l++)s+=t[l].dataCount;if(o.getLengthInBits()<=8*s)break}n=e}u(!1,y())},s.createTableTag=function(e,t){e=e||2;var n="";n+='<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: '+(t=void 0===t?4*e:t)+'px;"><tbody>';for(var r=0;r<s.getModuleCount();r+=1){n+="<tr>";for(var o=0;o<s.getModuleCount();o+=1)n+='<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: '+e+"px; height: "+e+"px; background-color: "+(s.isDark(r,o)?"#000000":"#ffffff")+';"/>';n+="</tr>"}return n+"</tbody></table>"},s.createSvgTag=function(e,t,n,r){var o={};"object"==typeof arguments[0]&&(o=arguments[0],e=o.cellSize,t=o.margin,n=o.alt,r=o.title),e=e||2,t=void 0===t?4*e:t,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,(r="string"==typeof r?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-title":null;var l,i,a,c,u=s.getModuleCount()*e+2*t,d="";for(c="l"+e+",0 0,"+e+" -"+e+",0 0,-"+e+"z ",d+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"'+(o.scalable?"":' width="'+u+'px" height="'+u+'px"')+(' viewBox="0 0 '+u+" ")+u+'"  preserveAspectRatio="xMinYMin meet"'+(r.text||n.text?' role="img" aria-labelledby="'+T([r.id,n.id].join(" ").trim())+'"':"")+">"+(r.text?'<title id="'+T(r.id)+'">'+T(r.text)+"</title>":"")+(n.text?'<description id="'+T(n.id)+'">'+T(n.text)+"</description>":"")+'<rect width="100%" height="100%" fill="white" cx="0" cy="0"/><path d="',i=0;i<s.getModuleCount();i+=1)for(l=0,a=i*e+t;l<s.getModuleCount();l+=1)s.isDark(i,l)&&(d+="M"+(l*e+t)+","+a+c);return d+'" stroke="transparent" fill="black"/></svg>'},s.createDataURL=function(e,t){e=e||2,t=void 0===t?4*e:t;var n=s.getModuleCount()*e+2*t,r=t,o=n-t;return L(n,n,function(t,n){if(!(r<=t)||!(t<o)||!(r<=n)||!(n<o))return 1;var l=Math.floor((t-r)/e),i=Math.floor((n-r)/e);return s.isDark(i,l)?0:1})},s.createImgTag=function(e,t,n){e=e||2,t=void 0===t?4*e:t;var r=s.getModuleCount()*e+2*t,o="";return o+='<img src="'+s.createDataURL(e,t)+'" width="'+r+'" height="'+r+'"',n&&(o+=' alt="'+T(n)+'"'),o+="/>"};var T=function(e){for(var t="",n=0;n<e.length;n+=1){var r=e.charAt(n);switch(r){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=r}}return t},_=function(e){e=void 0===e?2:e;var t,n,r,o,l,i=1*s.getModuleCount()+2*e,a=e,c=i-e,u={"██":"█","█ ":"▀"," █":"▄","  ":" "},d={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(t=0;t<i;t+=2){for(n=0,r=Math.floor((t-a)/1),o=Math.floor((t+1-a)/1);n<i;n+=1)l="█",a<=n&&n<c&&a<=t&&t<c&&s.isDark(r,Math.floor((n-a)/1))&&(l=" "),a<=n&&n<c&&a<=t+1&&t+1<c&&s.isDark(o,Math.floor((n-a)/1))?l+=" ":l+="█",h+=e<1&&t+1>=c?d[l]:u[l];h+="\n"}return i%2&&e>0?h.substring(0,h.length-i-1)+Array(i+1).join("▀"):h.substring(0,h.length-1)};return s.createASCII=function(e,t){if((e=e||1)<2)return _(t);e-=1,t=void 0===t?2*e:t;var n,r,o,l,i=s.getModuleCount()*e+2*t,a=t,c=i-t,u=Array(e+1).join("██"),d=Array(e+1).join("  "),h="",f="";for(n=0;n<i;n+=1){for(r=0,o=Math.floor((n-a)/e),f="";r<i;r+=1)l=1,a<=r&&r<c&&a<=n&&n<c&&s.isDark(o,Math.floor((r-a)/e))&&(l=0),f+=l?u:d;for(o=0;o<e;o+=1)h+=f+"\n"}return h.substring(0,h.length-1)},s.renderTo2dContext=function(e,t){t=t||2;for(var n=s.getModuleCount(),r=0;r<n;r++)for(var o=0;o<n;o++)e.fillStyle=s.isDark(r,o)?"black":"white",e.fillRect(r*t,o*t,t,t)},s};a.stringToBytesFuncs={default:function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t.push(255&r)}return t}},a.stringToBytes=a.stringToBytesFuncs.default,a.createStringToBytes=function(e,t){var n=function(){for(var n=b(e),r=function(){var e=n.read();if(-1==e)throw"eof";return e},o=0,l={};;){var i=n.read();if(-1==i)break;var a=r(),s=r(),c=r(),u=String.fromCharCode(i<<8|a),d=s<<8|c;l[u]=d,o+=1}if(o!=t)throw o+" != "+t;return l}();return function(e){for(var t=[],r=0;r<e.length;r+=1){var o=e.charCodeAt(r);if(o<128)t.push(o);else{var l=n[e.charAt(r)];"number"==typeof l?(255&l)==l?t.push(l):(t.push(l>>>8),t.push(255&l)):t.push(63)}}return t}};var s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},c={L:1,M:0,Q:3,H:2},u={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d=(e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t={},n=function(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t},t.getBCHTypeInfo=function(e){for(var t=e<<10;n(t)-n(1335)>=0;)t^=1335<<n(t)-n(1335);return(e<<10|t)^21522},t.getBCHTypeNumber=function(e){for(var t=e<<12;n(t)-n(7973)>=0;)t^=7973<<n(t)-n(7973);return e<<12|t},t.getPatternPosition=function(t){return e[t-1]},t.getMaskFunction=function(e){switch(e){case u.PATTERN000:return function(e,t){return(e+t)%2==0};case u.PATTERN001:return function(e,t){return e%2==0};case u.PATTERN010:return function(e,t){return t%3==0};case u.PATTERN011:return function(e,t){return(e+t)%3==0};case u.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case u.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case u.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case u.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw"bad maskPattern:"+e}},t.getErrorCorrectPolynomial=function(e){for(var t=f([1],0),n=0;n<e;n+=1)t=t.multiply(f([1,h.gexp(n)],0));return t},t.getLengthInBits=function(e,t){if(1<=t&&t<10)switch(e){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:case s.MODE_KANJI:return 8;default:throw"mode:"+e}else if(t<27)switch(e){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw"mode:"+e}else if(t<41)switch(e){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw"mode:"+e}else throw"type:"+t},t.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var o=0;o<t;o+=1){for(var l=0,i=e.isDark(r,o),a=-1;a<=1;a+=1)if(!(r+a<0)&&!(t<=r+a))for(var s=-1;s<=1;s+=1)o+s<0||t<=o+s||0==a&&0==s||i!=e.isDark(r+a,o+s)||(l+=1);l>5&&(n+=3+l-5)}for(var r=0;r<t-1;r+=1)for(var o=0;o<t-1;o+=1){var c=0;e.isDark(r,o)&&(c+=1),e.isDark(r+1,o)&&(c+=1),e.isDark(r,o+1)&&(c+=1),e.isDark(r+1,o+1)&&(c+=1),(0==c||4==c)&&(n+=3)}for(var r=0;r<t;r+=1)for(var o=0;o<t-6;o+=1)e.isDark(r,o)&&!e.isDark(r,o+1)&&e.isDark(r,o+2)&&e.isDark(r,o+3)&&e.isDark(r,o+4)&&!e.isDark(r,o+5)&&e.isDark(r,o+6)&&(n+=40);for(var o=0;o<t;o+=1)for(var r=0;r<t-6;r+=1)e.isDark(r,o)&&!e.isDark(r+1,o)&&e.isDark(r+2,o)&&e.isDark(r+3,o)&&e.isDark(r+4,o)&&!e.isDark(r+5,o)&&e.isDark(r+6,o)&&(n+=40);for(var u=0,o=0;o<t;o+=1)for(var r=0;r<t;r+=1)e.isDark(r,o)&&(u+=1);return n+Math.abs(100*u/t/t-50)/5*10},t),h=function(){for(var e=Array(256),t=Array(256),n=0;n<8;n+=1)e[n]=1<<n;for(var n=8;n<256;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(var n=0;n<255;n+=1)t[e[n]]=n;var r={};return r.glog=function(e){if(e<1)throw"glog("+e+")";return t[e]},r.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]},r}();function f(e,t){if(void 0===e.length)throw e.length+"/"+t;var n=function(){for(var n=0;n<e.length&&0==e[n];)n+=1;for(var r=Array(e.length-n+t),o=0;o<e.length-n;o+=1)r[o]=e[o+n];return r}(),r={};return r.getAt=function(e){return n[e]},r.getLength=function(){return n.length},r.multiply=function(e){for(var t=Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var o=0;o<e.getLength();o+=1)t[n+o]^=h.gexp(h.glog(r.getAt(n))+h.glog(e.getAt(o)));return f(t,0)},r.mod=function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=h.glog(r.getAt(0))-h.glog(e.getAt(0)),n=Array(r.getLength()),o=0;o<r.getLength();o+=1)n[o]=r.getAt(o);for(var o=0;o<e.getLength();o+=1)n[o]^=h.gexp(h.glog(e.getAt(o))+t);return f(n,0).mod(e)},r}var g=(r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},l={},i=function(e,t){switch(t){case c.L:return r[(e-1)*4+0];case c.M:return r[(e-1)*4+1];case c.Q:return r[(e-1)*4+2];case c.H:return r[(e-1)*4+3];default:return}},l.getRSBlocks=function(e,t){var n=i(e,t);if(void 0===n)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+t;for(var r=n.length/3,l=[],a=0;a<r;a+=1)for(var s=n[3*a+0],c=n[3*a+1],u=n[3*a+2],d=0;d<s;d+=1)l.push(o(c,u));return l},l),p=function(){var e=[],t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},n.put=function(e,t){for(var r=0;r<t;r+=1)n.putBit((e>>>t-r-1&1)==1)},n.getLengthInBits=function(){return t},n.putBit=function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1},n},m=function(e){var t=s.MODE_NUMBER,n={};n.getMode=function(){return t},n.getLength=function(t){return e.length},n.write=function(t){for(var n=0;n+2<e.length;)t.put(r(e.substring(n,n+3)),10),n+=3;n<e.length&&(e.length-n==1?t.put(r(e.substring(n,n+1)),4):e.length-n==2&&t.put(r(e.substring(n,n+2)),7))};var r=function(e){for(var t=0,n=0;n<e.length;n+=1)t=10*t+o(e.charAt(n));return t},o=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-48;throw"illegal char :"+e};return n},C=function(e){var t=s.MODE_ALPHA_NUM,n={};n.getMode=function(){return t},n.getLength=function(t){return e.length},n.write=function(t){for(var n=0;n+1<e.length;)t.put(45*r(e.charAt(n))+r(e.charAt(n+1)),11),n+=2;n<e.length&&t.put(r(e.charAt(n)),6)};var r=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-48;if("A"<=e&&e<="Z")return e.charCodeAt(0)-65+10;switch(e){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+e}};return n},v=function(e){var t=s.MODE_8BIT_BYTE,n=a.stringToBytes(e),r={};return r.getMode=function(){return t},r.getLength=function(e){return n.length},r.write=function(e){for(var t=0;t<n.length;t+=1)e.put(n[t],8)},r},w=function(e){var t=s.MODE_KANJI,n=a.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(e,t){var r=n("友");if(2!=r.length||(r[0]<<8|r[1])!=38726)throw"sjis not supported."}(0,0);var r=n(e),o={};return o.getMode=function(){return t},o.getLength=function(e){return~~(r.length/2)},o.write=function(e){for(var t=0;t+1<r.length;){var n=(255&r[t])<<8|255&r[t+1];if(33088<=n&&n<=40956)n-=33088;else if(57408<=n&&n<=60351)n-=49472;else throw"illegal char at "+(t+1)+"/"+n;n=(n>>>8&255)*192+(255&n),e.put(n,13),t+=2}if(t<r.length)throw"illegal char at "+(t+1)},o},y=function(){var e=[],t={};return t.writeByte=function(t){e.push(255&t)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,r){n=n||0,r=r||e.length;for(var o=0;o<r;o+=1)t.writeByte(e[o+n])},t.writeString=function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return e},t.toString=function(){var t="";t+="[";for(var n=0;n<e.length;n+=1)n>0&&(t+=","),t+=e[n];return t+"]"},t},x=function(){var e=0,t=0,n=0,r="",o={},l=function(e){r+=String.fromCharCode(i(63&e))},i=function(e){if(e<0);else if(e<26)return 65+e;else if(e<52)return 97+(e-26);else if(e<62)return 48+(e-52);else if(62==e)return 43;else if(63==e)return 47;throw"n:"+e};return o.writeByte=function(r){for(e=e<<8|255&r,t+=8,n+=1;t>=6;)l(e>>>t-6),t-=6},o.flush=function(){if(t>0&&(l(e<<6-t),e=0,t=0),n%3!=0)for(var o=3-n%3,i=0;i<o;i+=1)r+="="},o.toString=function(){return r},o},b=function(e){var t=0,n=0,r=0,o={};o.read=function(){for(;r<8;){if(t>=e.length){if(0==r)return -1;throw"unexpected end of file./"+r}var o=e.charAt(t);if(t+=1,"="==o)return r=0,-1;o.match(/^\s$/)||(n=n<<6|l(o.charCodeAt(0)),r+=6)}var i=n>>>r-8&255;return r-=8,i};var l=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(43==e)return 62;if(47==e)return 63;throw"c:"+e};return o},k=function(e,t){var n=Array(e*t),r={};r.setPixel=function(t,r,o){n[r*e+t]=o},r.write=function(n){n.writeString("GIF87a"),n.writeShort(e),n.writeShort(t),n.writeByte(128),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(255),n.writeByte(255),n.writeByte(255),n.writeString(","),n.writeShort(0),n.writeShort(0),n.writeShort(e),n.writeShort(t),n.writeByte(0);var r=l(2);n.writeByte(2);for(var o=0;r.length-o>255;)n.writeByte(255),n.writeBytes(r,o,255),o+=255;n.writeByte(r.length-o),n.writeBytes(r,o,r.length-o),n.writeByte(0),n.writeString(";")};var o=function(e){var t=0,n=0,r={};return r.write=function(r,o){if(r>>>o!=0)throw"length over";for(;t+o>=8;)e.writeByte(255&(r<<t|n)),o-=8-t,r>>>=8-t,n=0,t=0;n=r<<t|n,t+=o},r.flush=function(){t>0&&e.writeByte(n)},r},l=function(e){for(var t=1<<e,r=(1<<e)+1,l=e+1,a=i(),s=0;s<t;s+=1)a.add(String.fromCharCode(s));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(r));var c=y(),u=o(c);u.write(t,l);var d=0,h=String.fromCharCode(n[0]);for(d+=1;d<n.length;){var f=String.fromCharCode(n[d]);d+=1,a.contains(h+f)?h+=f:(u.write(a.indexOf(h),l),4095>a.size()&&(a.size()==1<<l&&(l+=1),a.add(h+f)),h=f)}return u.write(a.indexOf(h),l),u.write(r,l),u.flush(),c.toByteArray()},i=function(){var e={},t=0,n={};return n.add=function(r){if(n.contains(r))throw"dup key:"+r;e[r]=t,t+=1},n.size=function(){return t},n.indexOf=function(t){return e[t]},n.contains=function(t){return void 0!==e[t]},n};return r},L=function(e,t,n){for(var r=k(e,t),o=0;o<t;o+=1)for(var l=0;l<e;l+=1)r.setPixel(l,o,n(l,o));var i=y();r.write(i);for(var a=x(),s=i.toByteArray(),c=0;c<s.length;c+=1)a.writeByte(s[c]);return a.flush(),"data:image/gif;base64,"+a};return a}()).stringToBytesFuncs["UTF-8"]=function(e){return function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t}(e)},a=function(){return i},nI.exports=a();let nH=nI.exports;function nR(e){return(null==navigator?void 0:navigator.clipboard)?navigator.clipboard.writeText(e):(function(e){let t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}finally{document.body.removeChild(t)}}(e),Promise.resolve())}let nB=eA("<div></div>"),nN=e=>{let t,n,r;let[o,l]=V(!1),[i,a]=V(48);j(()=>{let o=nH(0,"L");o.addData(e.sourceUrl),o.make(),t.innerHTML=o.createSvgTag(4,0);let l=t.firstElementChild.clientWidth,i=Math.round(256/l*1e5)/1e5;if(r){let e=4*Math.ceil(60/(4*i)),t=tr(4*Math.ceil((l-e)/8));r.style.top=t,r.style.left=t,r.style.height=tr(e),r.style.width=tr(e),a(Math.round(48/i))}n.style.transform=`scale(${i})`});let s=null;return eu(nS,{get class(){return e.class},onClick:()=>{l(!0),nR(e.sourceUrl),null!=s&&clearTimeout(s),s=setTimeout(()=>l(!1),1500)},get children(){return[eu(nA,{ref(e){let t=n;"function"==typeof t?t(e):n=e},get children(){return[(()=>{let e=nB.cloneNode(!0),n=t;return"function"==typeof n?eI(n,e):t=e,e})(),eu(eC,{get when(){return e.imageUrl},get children(){return eu(nT,{ref(e){let t=r;"function"==typeof t?t(e):r=e},get children(){return eu(n_,{get src(){return e.imageUrl},alt:"",get size(){return i()}})}})}})]}}),eu(t8,{onBeforeEnter:e=>{e.animate([{opacity:0,transform:"translate(-50%, 44px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:150,easing:"ease-out"})},onExit:(e,t)=>{e.animate([{opacity:1,transform:"translate(-50%, 0)"},{opacity:0,transform:"translate(-50%, 44px)"}],{duration:150,easing:"ease-out"}).finished.then(()=>{t()})},get children(){return eu(eC,{get when(){return o()&&!e.disableCopy},get children(){return eu(nE,{get children(){return[eu(ro,{size:"xs"}),eu(nj,{translationKey:"common.linkCopied",children:"Link Copied"})]}})}})}}),eu(eC,{get when(){return!e.disableCopy},get children(){return eu(n$,{get children(){return eu(rV,{})}})}})]}})};var nW=(e,t,n)=>{let r=t.trim().split(".").reduce((e,t)=>e?e[t]:void 0,e);return void 0!==r?r:n},nP=(e,t,n=/{{(.*?)}}/g)=>e.replace(n,(e,n)=>nW(t,n,"")),nO=(e={},t=navigator.language in e?navigator.language:Object.keys(e)[0])=>{let[n,r]=V(t),[o,l]=tP(e);return[(e,t,r)=>{let l=nW(o[n()],e,r||"");return"function"==typeof l?l(t):"string"==typeof l?nP(l,t||{}):l},{add(e,t){l(e,e=>Object.assign(e||{},t))},locale:e=>e?r(e):n(),dict:e=>nW(o,e)}]},nV=z({}),nD=()=>q(nV);let nK=e9.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,nj=e=>{let t;let n=e4(),[r]=nD(),o=()=>e.color||n.colors.text.primary,l=eg({fontSize:"14px",fontWeight:"510",lineHeight:"130%"},e);return j(()=>{t&&"unset"!==l.cursor&&"pointer"!==getComputedStyle(t).cursor&&(t.style.cursor="default")}),eu(nK,{get fontSize(){return l.fontSize},get fontWeight(){return l.fontWeight},get lineHeight(){return l.lineHeight},get color(){return o()},get class(){return l.class},ref(e){let n=t;"function"==typeof n?n(e):t=e},"data-tc-text":"true",get children(){var i;return F(()=>!!l.translationKey)()?r(l.translationKey,l.translationValues,null==(i=l.children)?void 0:i.toString()):l.children}})},nF=e9.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,nU=e9(tY)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,nZ=e=>eu(nF,{get class(){return e.class},get children(){return eu(nU,{get src(){return e.src}})}}),nz={m:"16px",s:"12px",none:"0"},nq={m:"6px",s:"6px",none:"0"},nY=e9.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${t1} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${tJ("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${tX} {
        &:active {
            transform: scale(0.92);
        }
    }
`,nG=e9(nZ)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>nz[e.theme.borderRadius]};

    margin-bottom: 8px;
`,nQ=e9(tY)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>nq[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,nJ=e9(nj)`
    max-width: 90px;
    font-weight: 590;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${tJ("mobile")} {
        max-width: 80px;
    }
`,nX=e9(nj)`
    font-weight: 510;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${tJ("mobile")} {
        max-width: 80px;
    }
`,n1=e=>eu(nY,{get class(){return e.class},onClick:()=>e.onClick(),"data-tc-wallet-item":"true",get children(){return[F(()=>F(()=>"string"==typeof e.icon)()?eu(nG,{get src(){return e.icon}}):e.icon),F(()=>F(()=>!!e.badgeUrl)()&&eu(nQ,{get src(){return e.badgeUrl}})),eu(nJ,{get children(){return e.name}}),F(()=>F(()=>!!e.secondLine)()&&eu(nX,{get colorPrimary(){var t;return null==(t=e.secondLineColorPrimary)||t},get children(){return e.secondLine}}))]}}),n0=e9.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,n2=e=>{let[t]=nD();return eu(n0,{get class(){return e.class},"data-tc-h1":"true",get children(){var n;return F(()=>!!e.translationKey)()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},n5=e9.h2`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,n4=e=>{let[t]=nD();return eu(n5,{get class(){return e.class},"data-tc-h2":"true",get children(){var n;return F(()=>!!e.translationKey)()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},n3=e9.h3`
    font-style: normal;
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,n9=e=>{let[t]=nD();return eu(n3,{"data-tc-h3":"true",get class(){return e.class},get children(){var n;return F(()=>!!e.translationKey)()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},n8=eA('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),n6=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=n8.cloneNode(!0),t=e.firstChild;return K(r=>{let o=n(),l=n();return o!==r._v$&&eT(e,"fill",r._v$=o),l!==r._v$2&&eT(t,"fill",r._v$2=l),r},{_v$:void 0,_v$2:void 0}),e})()},n7=eA('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),re=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=n7.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},rt=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),rn=eA('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),rr=eA('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),ro=e=>{let t=e4(),n=()=>e.size||"s",r=()=>e.fill||t.colors.icon.success;return F((()=>{let o=F(()=>"xs"===n());return()=>o()?(()=>{let n=rt.cloneNode(!0),o=n.firstChild.firstChild,l=o.nextSibling;return K(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$&&eT(n,"class",i._v$=a),s!==i._v$2&&eT(o,"fill",i._v$2=s),c!==i._v$3&&eT(l,"stroke",i._v$3=c),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{let o=F(()=>"s"===n());return()=>o()?(()=>{let n=rn.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return K(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$4&&eT(n,"class",i._v$4=a),s!==i._v$5&&eT(o,"fill",i._v$5=s),c!==i._v$6&&eT(l,"fill",i._v$6=c),i},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{let n=rr.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return K(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$7&&eT(n,"class",i._v$7=a),s!==i._v$8&&eT(o,"fill",i._v$8=s),c!==i._v$9&&eT(l,"fill",i._v$9=c),i},{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},rl=eA('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),ri=eA('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),ra=eA('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),rs=e=>{let t=e4(),n=()=>e.size||"m",r=()=>e.fill||t.colors.icon.error;return F((()=>{let o=F(()=>"m"===n());return()=>o()?(()=>{let n=rl.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return K(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$&&eT(n,"class",i._v$=a),s!==i._v$2&&eT(o,"fill",i._v$2=s),c!==i._v$3&&eT(l,"fill",i._v$3=c),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{let o=F(()=>"s"===n());return()=>o()?(()=>{let n=ri.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return K(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$4&&eT(n,"class",i._v$4=a),s!==i._v$5&&eT(o,"fill",i._v$5=s),c!==i._v$6&&eT(l,"stroke",i._v$6=c),i},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{let n=ra.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return K(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$7&&eT(n,"class",i._v$7=a),s!==i._v$8&&eT(o,"fill",i._v$8=s),c!==i._v$9&&eT(l,"fill",i._v$9=c),i},{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},rc=eA('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),ru=eA('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),rd=eA('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),rh=e=>{let t=e4(),n=()=>e.size||"xs",r=()=>e.fill||t.colors.icon.tertiary,o=e0`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,l=e1`
        animation: ${o} 1s linear infinite;
    `;return F((()=>{let t=F(()=>"xs"===n());return()=>t()?(()=>{let t=rc.cloneNode(!0),n=t.firstChild;return K(o=>{let i=p()(l,e.class),a=r();return i!==o._v$&&eT(t,"class",o._v$=i),a!==o._v$2&&eT(n,"fill",o._v$2=a),o},{_v$:void 0,_v$2:void 0}),t})():(()=>{let t=F(()=>"s"===n());return()=>t()?(()=>{let t=ru.cloneNode(!0),n=t.firstChild;return K(o=>{let i=p()(l,e.class),a=r();return i!==o._v$3&&eT(t,"class",o._v$3=i),a!==o._v$4&&eT(n,"fill",o._v$4=a),o},{_v$3:void 0,_v$4:void 0}),t})():(()=>{let t=rd.cloneNode(!0),n=t.firstChild;return K(o=>{let i=p()(l,e.class),a=r();return i!==o._v$5&&eT(t,"class",o._v$5=i),a!==o._v$6&&eT(n,"stroke",o._v$6=a),o},{_v$5:void 0,_v$6:void 0}),t})()})()})())},rf=eA('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),rg=()=>{let e=e4(),t=()=>e.theme===ej.DARK?e.colors.constant.white:e.colors.constant.black;return(()=>{let e=rf.cloneNode(!0),n=e.firstChild.nextSibling.nextSibling;return K(()=>eT(n,"fill",t())),e})()},rp=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),rm=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=rp.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},rC=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),rv=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=rC.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},rw=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),ry=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=rw.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},rx=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),rb=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=rx.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},rk=eA('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),rL=e=>{let t=e4(),n=()=>e.fill||t.colors.accent;return(()=>{let e=rk.cloneNode(!0),t=e.firstChild.firstChild;return K(()=>eT(t,"fill",n())),e})()},rM=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),r$=e=>{let t=e4(),n=()=>e.fill||t.colors.accent;return(()=>{let e=rM.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},rS=eA('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),rA=e=>{let t=e4(),n=()=>e.fill||t.colors.accent;return(()=>{let e=rS.cloneNode(!0),t=e.firstChild.firstChild;return K(()=>eT(t,"fill",n())),e})()},rT=eA('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),r_=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let t=rT.cloneNode(!0),r=t.firstChild;return K(o=>{let l=e.class,i=n();return l!==o._v$&&eT(t,"class",o._v$=l),i!==o._v$2&&eT(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},rE=eA('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),rI=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let t=rE.cloneNode(!0),r=t.firstChild;return K(o=>{let l=e.class,i=n();return l!==o._v$&&eT(t,"class",o._v$=l),i!==o._v$2&&eT(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},rH=eA('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),rR=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let t=rH.cloneNode(!0),r=t.firstChild;return K(o=>{let l=e.class,i=n();return l!==o._v$&&eT(t,"class",o._v$=l),i!==o._v$2&&eT(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},rB=eA('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),rN=e=>{let t=e4(),n=()=>e.fill||t.colors.constant.white;return(()=>{let t=rB.cloneNode(!0),r=t.firstChild;return K(o=>{let l=e.class,i=n();return l!==o._v$&&eT(t,"class",o._v$=l),i!==o._v$2&&eT(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},rW=eA('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),rP=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let t=rW.cloneNode(!0),r=t.firstChild;return K(o=>{let l=e.class,i=n();return l!==o._v$&&eT(t,"class",o._v$=l),i!==o._v$2&&eT(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},rO=eA('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),rV=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=rO.cloneNode(!0),t=e.firstChild;return K(r=>{let o=n(),l=n();return o!==r._v$&&eT(e,"fill",r._v$=o),l!==r._v$2&&eT(t,"fill",r._v$2=l),r},{_v$:void 0,_v$2:void 0}),e})()},rD=eA('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),rK=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=rD.cloneNode(!0),t=e.firstChild;return K(()=>eT(t,"fill",n())),e})()},rj={m:"16px",s:"12px",none:"0"},rF={m:"6px",s:"6px",none:"0"},rU=e9.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>rj[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,rZ=e9(nZ)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>rF[e.theme.borderRadius]};
`,rz=e=>eu(n1,{get name(){return e.labelLine1},get secondLine(){return e.labelLine2},get icon(){return eu(rU,{get children(){return eu(em,{each:[0,1,2,3],children:t=>eu(rZ,{get src(){return e.images[t]}})})}})},onClick:()=>e.onClick()}),rq="telegram-wallet",rY={TON:"https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",TG:"https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"},rG=e=>{let[t]=nD(),n=()=>e.wallet.appName===rq?void 0:"isPreferred"in e.wallet&&e.wallet.isPreferred?t("walletItem.recent",{},"Recent"):(0,c.rM)(e.wallet)?t("walletItem.installed",{},"Installed"):"Tonkeeper"===e.wallet.name?t("walletItem.popular",{},"Popular"):void 0;return F((()=>{let r=F(()=>e.wallet.appName===rq);return()=>r()?eu(n1,{get icon(){return e.wallet.imageUrl},get name(){return t("walletItem.walletOn",{},"Wallet On")},secondLine:"Telegram",get badgeUrl(){return rY.TG},onClick:()=>e.onClick()}):eu(n1,{get icon(){return e.wallet.imageUrl},get name(){return e.wallet.name},get secondLine(){return n()},secondLineColorPrimary:!1,onClick:()=>e.onClick()})})())},rQ=e9.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,rJ=e9.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${tJ("mobile")} {
        width: 100%;
        margin: 0;
    }
`,[rX,r1]=V((null==(s=ts())?void 0:s.innerHeight)||0);ts()&&window.addEventListener("resize",()=>r1(window.innerHeight));let[r0,r2]=V(tQ("mobile"));ts()&&window.addEventListener("resize",()=>r2(tQ("mobile")));let r5=e=>{let[t,n]=V(!1),r=()=>r0()?150:200,o=()=>void 0!==e.maxHeight?`${e.maxHeight}px`:`${rX()-r()}px`;return[eu(rJ,{get isShown(){return t()}}),eu(rQ,{get maxHeight(){return o()},onScroll:e=>{n(e.target.scrollTop>0)},get class(){return e.class},get children(){return e.children}})]},r4=e9.a`
    display: block;
    text-decoration: unset;
`,r3=e=>eu(r4,eg({get href(){return e.href},get target(){return e.blank?"_blank":"_self"},get class(){return e.class}},()=>e.blank?{rel:"noreferrer noopener"}:{},{get children(){return e.children}})),r9=z(),r8=eA('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),r6=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let t=r8.cloneNode(!0),r=t.firstChild;return K(o=>{let l=e.class,i=n();return l!==o._v$&&eT(t,"class",o._v$=l),i!==o._v$2&&eT(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},r7=eA('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),oe=e=>{let t=e4(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=r7.cloneNode(!0),t=e.firstChild,r=t.nextSibling;return K(e=>{let o=n(),l=n();return o!==e._v$&&eT(t,"fill",e._v$=o),l!==e._v$2&&eT(r,"fill",e._v$2=l),e},{_v$:void 0,_v$2:void 0}),e})()},ot={m:"8px",s:"4px",none:"0"},on={m:"16px",s:"8px",none:"0"},or=e9.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>on[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,oo=e9.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,ol=e9.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>ot[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,oi=eA("<li></li>"),oa=e=>eu(nj,{get translationKey(){return e.translationKey},fontSize:"15px",fontWeight:"590",get children(){return e.children}}),os={m:"16px",s:"8px",none:"0"},oc=e9.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>os[e.theme.borderRadius]};
`,ou=e9.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,od=e9(nj)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,oh=e=>{let t=t4(e);return eu(oc,eg({get class(){return e.class},"data-tc-notification":"true"},t,{get children(){return[eu(ou,{get children(){return[eu(n9,{get translationKey(){return e.header.translationKey},get translationValues(){return e.header.translationValues},get children(){return e.children}}),eu(eC,{get when(){return e.text},get children(){return eu(od,{get translationKey(){return e.text.translationKey},get translationValues(){return e.text.translationValues}})}})]}}),F(()=>e.icon)]}}))},of=e9(rh)`
    align-self: center;
`,og=e=>{let t=q(r9),[n]=nD(),r=()=>t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet");return eu(oh,{get header(){return{translationKey:"notifications.confirm.header",translationValues:{name:r()}}},get class(){return e.class},get icon(){return eu(of,{})},"data-tc-notification-confirm":"true",children:"Confirm operation in your wallet"})},op=e9(rs)`
    margin-top: 2px;
`,om=e=>eu(oh,{header:{translationKey:"notifications.transactionCanceled.header"},text:{translationKey:"notifications.transactionCanceled.text"},get icon(){return eu(op,{size:"xs"})},get class(){return e.class},"data-tc-notification-tx-cancelled":"true",children:"Transaction cancelled"}),oC=e9(ro)`
    margin-top: 2px;
`,ov=e=>eu(oh,{header:{translationKey:"notifications.transactionSent.header"},text:{translationKey:"notifications.transactionSent.text"},get icon(){return eu(oC,{})},get class(){return e.class},"data-tc-notification-tx-sent":"true",children:"Transaction sent"}),ow=e1`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,oy=eA('<div data-tc-list-notifications="true"></div>'),ox=e9(t3)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${tn(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,ob=e9(ox)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,ok=e9(t3)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${tn(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,oL=e9(rh)`
    height: 18px;
    width: 18px;
`,oM=e9.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,o$=e9(e=>{let t=q(r9),[n,r]=V(!1),o=()=>$(void 0,null,function*(){let e=(0,c.mb)(t.account.address,t.account.chain===c.sX.TESTNET);yield nR(e),r(!0),setTimeout(()=>r(!1),1e3)}),l=()=>{t.disconnect(),e.onClose()};return eu(or,{ref(t){let n=e.ref;"function"==typeof n?n(t):e.ref=t},get class(){return e.class},"data-tc-dropdown":"true",get children(){return eu(oo,{get children(){return[(()=>{let e=oi.cloneNode(!0);return eH(e,eu(ol,{onClick:()=>o(),get children(){return[eu(r6,{}),eu(eC,{get when(){return!n()},get children(){return eu(oa,{translationKey:"button.dropdown.copy",children:"Copy address"})}}),eu(eC,{get when(){return n()},get children(){return eu(oa,{translationKey:"button.dropdown.copied",children:"Address copied!"})}})]}})),e})(),(()=>{let e=oi.cloneNode(!0);return eH(e,eu(ol,{onClick:()=>l(),get children(){return[eu(oe,{}),eu(oa,{translationKey:"button.dropdown.disconnect",children:"Disconnect"})]}})),e})()]}})}})})`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,oS=e9(e=>{let t=[],[n,r]=V([]),o=-1;return j(function(e,t,n){let r,o;let l=Array.isArray(e);return n=>{let i;if(l){i=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]()}else i=e();if(o){o=!1;return}let a=U(()=>t(i,r,n));return r=i,a}}(ty,e=>{if(e&&e.showNotification){let n=++o;r(t=>t.filter(e=>"confirm-transaction"!==e.action).concat({id:n,action:e.name})),t.push(setTimeout(()=>r(e=>e.filter(e=>e.id!==n)),4500))}})),Z(()=>{t.forEach(clearTimeout)}),(()=>{let t=oy.cloneNode(!0);return eH(t,eu(t7,{onBeforeEnter:e=>{e.animate([{opacity:0,transform:"translateY(0)"},{opacity:1,transform:"translateY(-8px)"}],{duration:200})},onExit:(e,t)=>{e.animate([{opacity:1,transform:"translateY(-8px)"},{opacity:0,transform:"translateY(-30px)"}],{duration:200}).finished.then(t)},get children(){return eu(em,{get each(){return n()},children:e=>eu(ev,{get children(){return[eu(ew,{get when(){return"transaction-sent"===e.action},get children(){return eu(ov,{class:ow})}}),eu(ew,{get when(){return"transaction-canceled"===e.action},get children(){return eu(om,{class:ow})}}),eu(ew,{get when(){return"confirm-transaction"===e.action},get children(){return eu(og,{class:ow})}})]}})})}})),K(()=>e_(t,e.class)),t})()})`
    > div:first-child {
        margin-top: 20px;
    }
`;function oA(e){return e.split("-")[0]}function oT(e,t,n){let r,{reference:o,floating:l}=e,i=o.x+o.width/2-l.width/2,a=o.y+o.height/2-l.height/2,s=["top","bottom"].includes(oA(t))?"x":"y",c="y"===s?"height":"width",u=o[c]/2-l[c]/2,d=oA(t),h="x"===s;switch(d){case"top":r={x:i,y:o.y-l.height};break;case"bottom":r={x:i,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:a};break;case"left":r={x:o.x-l.width,y:a};break;default:r={x:o.x,y:o.y}}switch(t.split("-")[1]){case"start":r[s]-=u*(n&&h?-1:1);break;case"end":r[s]+=u*(n&&h?-1:1)}return r}let o_=(e,t,n)=>$(void 0,null,function*(){let{placement:r="bottom",strategy:o="absolute",middleware:l=[],platform:i}=n,a=l.filter(Boolean),s=yield null==i.isRTL?void 0:i.isRTL(t);if("production"!==({}).NODE_ENV){if(null==i&&console.error("Floating UI: `platform` property was not passed to config. If you want to use Floating UI on the web, install @floating-ui/dom instead of the /core package. Otherwise, you can create your own `platform`: https://floating-ui.com/docs/platform"),a.filter(e=>{let{name:t}=e;return"autoPlacement"===t||"flip"===t}).length>1)throw Error("Floating UI: duplicate `flip` and/or `autoPlacement` middleware detected. This will lead to an infinite loop. Ensure only one of either has been passed to the `middleware` array.");e&&t||console.error("Floating UI: The reference and/or floating element was not defined when `computePosition()` was called. Ensure that both elements have been created and can be measured.")}let c=yield i.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=oT(c,r,s),h=r,f={},g=0;for(let n=0;n<a.length;n++){let{name:l,fn:p}=a[n],{x:m,y:C,data:v,reset:w}=yield p({x:u,y:d,initialPlacement:r,placement:h,strategy:o,middlewareData:f,rects:c,platform:i,elements:{reference:e,floating:t}});if(u=null!=m?m:u,d=null!=C?C:d,f=L(k({},f),{[l]:k(k({},f[l]),v)}),"production"!==({}).NODE_ENV&&g>50&&console.warn("Floating UI: The middleware lifecycle appears to be running in an infinite loop. This is usually caused by a `reset` continually being returned without a break condition."),w&&g<=50){g++,"object"==typeof w&&(w.placement&&(h=w.placement),w.rects&&(c=!0===w.rects?yield i.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:u,y:d}=oT(c,h,s)),n=-1;continue}}return{x:u,y:d,placement:h,strategy:o,middlewareData:f}});function oE(e){return L(k({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}function oI(e){var t;return(null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function oH(e){return oI(e).getComputedStyle(e)}function oR(e){return oP(e)?(e.nodeName||"").toLowerCase():""}function oB(){if(o)return o;let e=navigator.userAgentData;return e&&Array.isArray(e.brands)?o=e.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function oN(e){return e instanceof oI(e).HTMLElement}function oW(e){return e instanceof oI(e).Element}function oP(e){return e instanceof oI(e).Node}function oO(e){if("undefined"==typeof ShadowRoot)return!1;let t=oI(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function oV(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=oH(e);return/auto|scroll|overlay|hidden/.test(t+r+n)&&!["inline","contents"].includes(o)}function oD(e){let t=/firefox/i.test(oB()),n=oH(e),r=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!r&&"none"!==r||t&&"filter"===n.willChange||t&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some(e=>n.willChange.includes(e))||["paint","layout","strict","content"].some(e=>{let t=n.contain;return null!=t&&t.includes(e)})}function oK(){return!/^((?!chrome|android).)*safari/i.test(oB())}function oj(e){return["html","body","#document"].includes(oR(e))}let oF=Math.min,oU=Math.max,oZ=Math.round,oz={x:1,y:1};function oq(e){let t=!oW(e)&&e.contextElement?e.contextElement:oW(e)?e:null;if(!t)return oz;let n=t.getBoundingClientRect(),r=oH(t);if("border-box"!==r.boxSizing)return oN(t)?{x:t.offsetWidth>0&&oZ(n.width)/t.offsetWidth||1,y:t.offsetHeight>0&&oZ(n.height)/t.offsetHeight||1}:oz;let o=n.width/parseFloat(r.width),l=n.height/parseFloat(r.height);return o&&Number.isFinite(o)||(o=1),l&&Number.isFinite(l)||(l=1),{x:o,y:l}}function oY(e,t,n,r){var o,l,i,a;void 0===t&&(t=!1),void 0===n&&(n=!1);let s=e.getBoundingClientRect(),c=oz;t&&(r?oW(r)&&(c=oq(r)):c=oq(e));let u=oW(e)?oI(e):window,d=!oK()&&n,h=(s.left+(d&&null!=(o=null==(l=u.visualViewport)?void 0:l.offsetLeft)?o:0))/c.x,f=(s.top+(d&&null!=(i=null==(a=u.visualViewport)?void 0:a.offsetTop)?i:0))/c.y,g=s.width/c.x,p=s.height/c.y;return{width:g,height:p,top:f,right:h+g,bottom:f+p,left:h,x:h,y:f}}function oG(e){return((oP(e)?e.ownerDocument:e.document)||window.document).documentElement}function oQ(e){return oW(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function oJ(e){return oY(oG(e)).left+oQ(e).scrollLeft}function oX(e){if("html"===oR(e))return e;let t=e.assignedSlot||e.parentNode||(oO(e)?e.host:null)||oG(e);return oO(t)?t.host:t}function o1(e){return oN(e)&&"fixed"!==oH(e).position?e.offsetParent:null}function o0(e){let t=oI(e),n=o1(e);for(;n&&["table","td","th"].includes(oR(n))&&"static"===oH(n).position;)n=o1(n);return n&&("html"===oR(n)||"body"===oR(n)&&"static"===oH(n).position&&!oD(n))?t:n||function(e){let t=oX(e);for(;oN(t)&&!oj(t);){if(oD(t))return t;t=oX(t)}return null}(e)||t}function o2(e,t){var n;void 0===t&&(t=[]);let r=function e(t){let n=oX(t);return oj(n)?t.ownerDocument.body:oN(n)&&oV(n)?n:e(n)}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),l=oI(r);return o?t.concat(l,l.visualViewport||[],oV(r)?r:[]):t.concat(r,o2(r))}function o5(e,t,n){return"viewport"===t?oE(function(e,t){let n=oI(e),r=oG(e),o=n.visualViewport,l=r.clientWidth,i=r.clientHeight,a=0,s=0;if(o){l=o.width,i=o.height;let e=oK();(e||!e&&"fixed"===t)&&(a=o.offsetLeft,s=o.offsetTop)}return{width:l,height:i,x:a,y:s}}(e,n)):oW(t)?function(e,t){let n=oY(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,l=oN(e)?oq(e):{x:1,y:1},i=e.clientWidth*l.x,a=e.clientHeight*l.y,s=o*l.x,c=r*l.y;return{top:c,left:s,right:s+i,bottom:c+a,x:s,y:c,width:i,height:a}}(t,n):oE(function(e){var t;let n=oG(e),r=oQ(e),o=null==(t=e.ownerDocument)?void 0:t.body,l=oU(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=oU(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+oJ(e),s=-r.scrollTop;return"rtl"===oH(o||n).direction&&(a+=oU(n.clientWidth,o?o.clientWidth:0)-l),{width:l,height:i,x:a,y:s}}(oG(e)))}let o4={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,l=[..."clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=o2(e).filter(e=>oW(e)&&"body"!==oR(e)),o=null,l="fixed"===oH(e).position,i=l?oX(e):e;for(;oW(i)&&!oj(i);){let e=oH(i),t=oD(i);(l?t||o:!(!t&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)))?o=e:r=r.filter(e=>e!==i),i=oX(i)}return t.set(e,r),r}(t,this._c):[].concat(n),r],i=l[0],a=l.reduce((e,n)=>{let r=o5(t,n,o);return e.top=oU(r.top,e.top),e.right=oF(r.right,e.right),e.bottom=oF(r.bottom,e.bottom),e.left=oU(r.left,e.left),e},o5(t,i,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,o=oN(n),l=oG(n);if(n===l)return t;let i={scrollLeft:0,scrollTop:0},a={x:1,y:1},s={x:0,y:0};if((o||!o&&"fixed"!==r)&&(("body"!==oR(n)||oV(l))&&(i=oQ(n)),oN(n))){let e=oY(n);a=oq(n),s.x=e.x+n.clientLeft,s.y=e.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-i.scrollLeft*a.x+s.x,y:t.y*a.y-i.scrollTop*a.y+s.y}},isElement:oW,getDimensions:function(e){if(oN(e))return{width:e.offsetWidth,height:e.offsetHeight};let t=oY(e);return{width:t.width,height:t.height}},getOffsetParent:o0,getDocumentElement:oG,getScale:oq,getElementRects(e){return $(this,null,function*(){let{reference:t,floating:n,strategy:r}=e,o=this.getOffsetParent||o0,l=this.getDimensions;return{reference:function(e,t,n){let r=oN(t),o=oG(t),l=oY(e,!0,"fixed"===n,t),i={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(r||!r&&"fixed"!==n){if(("body"!==oR(t)||oV(o))&&(i=oQ(t)),oN(t)){let e=oY(t,!0);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else o&&(a.x=oJ(o))}return{x:l.left+i.scrollLeft-a.x,y:l.top+i.scrollTop-a.y,width:l.width,height:l.height}}(t,(yield o(n)),r),floating:k({x:0,y:0},(yield l(n)))}})},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===oH(e).direction};function o3(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:l=!0,ancestorResize:i=!0,elementResize:a=!0,animationFrame:s=!1}=r,c=l&&!s,u=c||i?[...oW(e)?o2(e):e.contextElement?o2(e.contextElement):[],...o2(t)]:[];u.forEach(e=>{c&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)});let d=null;if(a){let r=!0;d=new ResizeObserver(()=>{r||n(),r=!1}),oW(e)&&!s&&d.observe(e),oW(e)||!e.contextElement||s||d.observe(e.contextElement),d.observe(t)}let h=s?oY(e):null;return s&&function t(){let r=oY(e);h&&(r.x!==h.x||r.y!==h.y||r.width!==h.width||r.height!==h.height)&&n(),h=r,o=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach(e=>{c&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)}),null==(e=d)||e.disconnect(),d=null,s&&cancelAnimationFrame(o)}}let o9=(e,t,n)=>{let r=new Map,o=k({platform:o4},n),l=L(k({},o.platform),{_c:r});return o_(e,t,L(k({},o),{platform:l}))},o8=eA('<tc-root data-tc-dropdown-container="true"></tc-root>'),o6=()=>{var e;let t;let n=e4(),r=q(tL),o=q(r9),[l,i]=V(!1),[a,s]=V(r.account),[u,d]=V(!0),[h,f]=V(),[g,p]=V(),m=function(e,t,n){let r=()=>{var e;return null!=(e=null==n?void 0:n.placement)?e:"bottom"},o=()=>{var e;return null!=(e=null==n?void 0:n.strategy)?e:"absolute"},[l,i]=V({x:null,y:null,placement:r(),strategy:o(),middlewareData:{}}),[a,s]=V();j(()=>{let e=a();if(e)throw e.value});let c=F(()=>(e(),t(),{}));function u(){let l=e(),a=t();if(l&&a){let e=c();o9(l,a,{middleware:null==n?void 0:n.middleware,placement:r(),strategy:o()}).then(t=>{e===c()&&i(t)},e=>{s(e)})}}return j(()=>{let l=e(),i=t();if(null==n||n.middleware,r(),o(),l&&i){if(null!=n&&n.whileElementsMounted){let e=n.whileElementsMounted(l,i,u);e&&Z(e)}else u()}}),{get x(){return l().x},get y(){return l().y},get placement(){return l().placement},get strategy(){return l().strategy},get middlewareData(){return l().middlewareData},update:u}}(g,h,{whileElementsMounted:o3,placement:"bottom-end"}),C=()=>{let e=a();if(e){let t=(0,c.mb)(e.address,e.chain===c.sX.TESTNET);return t.slice(0,4)+"…"+t.slice(-4)}return""};o.connectionRestored.then(()=>d(!1));let v=r.onStatusChange(e=>{if(!e){i(!1),s(null);return}s(e.account)}),w=e=>{if(!a()||!l())return;let n=g().contains(e.target),r=t.contains(e.target);n||r||i(!1)};return e=()=>{document.body.addEventListener("click",w)},j(()=>U(e)),Z(()=>{document.body.removeEventListener("click",w),v()}),eu(eK,{component:e6,get children(){return[eu(eC,{get when(){return u()},get children(){return eu(ok,{disabled:!0,"data-tc-connect-button-loading":"true",get children(){return eu(oL,{})}})}}),eu(eC,{get when(){return!u()},get children(){return[eu(eC,{get when(){return!a()},get children(){return eu(ox,{onClick:()=>o.connectWallet(),"data-tc-connect-button":"true",scale:"s",get children(){return[eu(re,{get fill(){return n.colors.connectButton.foreground}}),eu(nj,{translationKey:"button.connectWallet",fontSize:"15px",lineHeight:"18px",fontWeight:"590",get color(){return n.colors.connectButton.foreground},children:"Connect wallet"})]}})}}),eu(eC,{get when(){return a()},get children(){return eu(oM,{get children(){return[eu(ob,{onClick:()=>i(e=>!e),ref:p,"data-tc-dropdown-button":"true",scale:"s",get children(){return[eu(nj,{fontSize:"15px",fontWeight:"590",lineHeight:"18px",get children(){return C()}}),eu(nn,{direction:"bottom"})]}}),eu(eD,{get children(){let e=U(()=>document.importNode(o8,!0));return eI(f,e),e.style.setProperty("z-index","999"),e._$owner=R,eH(e,eu(t8,{onBeforeEnter:e=>{e.animate([{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"translateY(0)"}],{duration:150})},onExit:(e,t)=>{e.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-8px)"}],{duration:150}).finished.then(t)},get children(){return eu(eC,{get when(){return l()},get children(){return eu(o$,{get hidden(){return!l()},onClose:()=>i(!1),ref(e){let n=t;"function"==typeof n?n(e):t=e}})}})}}),null),eH(e,eu(oS,{}),null),K(t=>{var n,r;let o=m.strategy,l=`${null!=(n=m.y)?n:0}px`,i=`${null!=(r=m.x)?r:0}px`;return o!==t._v$&&e.style.setProperty("position",t._v$=o),l!==t._v$2&&e.style.setProperty("top",t._v$2=l),i!==t._v$3&&e.style.setProperty("left",t._v$3=i),t},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}})]}})}})]}})]}})},o7=e9(nC)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${tJ("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,le=e9(n2)`
    margin-top: 12px;

    ${tJ("mobile")} {
        padding: 0 10px;
    }
`,lt=e9.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${tJ("mobile")} {
        height: 160px;
        align-items: center;
    }
`;e9(nj)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`,e9(e=>{let t="tabBar"+Math.floor(1e4*Math.random());return eu(ny,{get class(){return e.class},"data-tc-tab-bar":"true",get children(){return[eu(nx,{get right(){return 1===e.selectedTabIndex}}),eu(nk,{get isActive(){return 0===e.selectedTabIndex},get children(){return[eu(nb,{type:"radio",name:t,get checked(){return 0===e.selectedTabIndex},onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,0)}}),F(()=>e.tab1)]}}),eu(nk,{get isActive(){return 1===e.selectedTabIndex},get children(){return[eu(nb,{type:"radio",get checked(){return 1===e.selectedTabIndex},name:t,onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,1)}}),F(()=>e.tab2)]}})]}})})`
    margin: 0 auto 22px;
`;let[ln,lr]=tP({buttonRootId:null,language:"en",returnStrategy:"back",twaReturnUrl:void 0,walletsListConfiguration:{}});function lo(e){return"jsBridgeKey"in e?L(k({},e),{injected:c.PS.isWalletInjected(e.jsBridgeKey),embedded:c.PS.isInsideWalletBrowser(e.jsBridgeKey)}):e}function ll(e,t){var n,r,o,l;return t&&(null==(n=t.includeWallets)?void 0:n.length)&&(r="name",o=e,l=t.includeWallets.map(lo),e=o.map(e=>{let t=l.find(t=>t[r]===e[r]);return l=l.filter(t=>t[r]!==e[r]),void 0===t?e:t}).concat(l)),e}function li(e){return e.platforms.some(e=>["macos","linux","windows"].includes(e))}function la(e){return e.platforms.some(e=>["ios","android"].includes(e))}function ls(e){return e.platforms.some(e=>["chrome","firefox","safari"].includes(e))}function lc(e,t){return!!t&&(e.name.toLowerCase()===t.toLowerCase()||e.appName.toLowerCase()===t.toLowerCase())}let lu=e9.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,ld=e9(n2)`
    margin-bottom: 18px;
`;e9.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${tJ("mobile")} {
        width: 100%;
    }
`;let lh=e9.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${tJ("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;e9(t3)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;let lf=e9(ni)`
    position: absolute;
    top: 16px;
    left: 16px;
`,lg=e9(rG)`
    height: 100%;
`,lp=eA("<li></li>"),lm=e=>{let t=()=>r0()?void 0:510,n=()=>r0()?e.walletsList.filter(la):e.walletsList;return eu(lu,{"data-tc-wallets-modal-list":"true",get children(){return[eu(lf,{icon:"arrow",onClick:()=>e.onBack()}),eu(ld,{translationKey:"walletModal.wallets",children:"Wallets"}),eu(r5,{get maxHeight(){return t()},get children(){return eu(lh,{get children(){return eu(em,{get each(){return n()},children:t=>(()=>{let n=lp.cloneNode(!0);return eH(n,eu(lg,{wallet:t,onClick:()=>e.onSelect(t)})),n})()})}})}})]}})},lC={m:"16px",s:"12px",none:"0"},lv={m:"6px",s:"6px",none:"0"},lw=e9.div`
    display: flex;
    flex-direction: column;
`,ly=e9.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,lx=e9(nN)`
    margin-bottom: 24px;
`,lb=e9(n2)`
    max-width: 288px;
    margin: 0 auto 2px;
`,lk=e9(n4)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,lL=e9(ni)`
    position: absolute;
    top: 16px;
    left: 16px;
`,lM=e9.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,l$=e9(lM)`
    padding-bottom: 0;
`,lS=e9(t3)`
    margin-bottom: 24px;
`,lA=e9(rh)`
    margin-bottom: 18px;
    margin-top: 2px;
`,lT=e9(rs)`
    margin-bottom: 16px;
`,l_=e9(n4)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,lE=e9(t3)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>lC[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,lI=e9(tY)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>lv[e.theme.borderRadius]};
`,lH=e=>{let[t]=nD();return F(()=>{var n;return t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString())})},lR=e=>{let[t,n]=V("mobile"),[r,o]=V(!1),[l,i]=V(),a=q(tL);Z(a.onStatusChange(()=>{},()=>{e.wallet.appName!==rq&&o(!0)}));let s=()=>{i(a.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest))};j(()=>{"extension"!==U(t)&&(la(e.wallet)||li(e.wallet))&&s()});let u=()=>{o(!1),"extension"===t()&&s(),n("mobile"),tw(L(k({},e.wallet),{openMethod:"qrcode"}))},d=()=>{o(!1),"extension"===t()&&s(),n("desktop"),tw(L(k({},e.wallet),{openMethod:"universal-link"})),tl(ti(l(),ln.returnStrategy))},h=()=>{tw(L(k({},e.wallet),{openMethod:"universal-link"})),tl(ti(l(),{returnStrategy:ln.returnStrategy,twaReturnUrl:ln.twaReturnUrl}))},f=()=>{o(!1),n("extension"),(0,c.rM)(e.wallet)&&(tw(e.wallet),a.connect({jsBridgeKey:e.wallet.jsBridgeKey},e.additionalRequest))};return la(e.wallet)?u():ls(e.wallet)?f():d(),eu(lw,{"data-tc-wallets-modal-connection-desktop":"true",get children(){return[eu(lL,{icon:"arrow",onClick:()=>e.onBackClick()}),eu(lb,{get children(){return e.wallet.name}}),eu(eC,{get when(){return"mobile"===t()},get children(){return eu(lk,{translationKey:"walletModal.desktopConnectionModal.scanQR",get translationValues(){return{name:e.wallet.name}},get children(){return["Scan the QR code below with your phone’s or ",F(()=>e.wallet.name),"’s camera"]}})}}),eu(ly,{get qr(){return"mobile"===t()},get children(){return eu(ev,{get children(){return[eu(ew,{get when(){return"mobile"===t()},get children(){return eu(lx,{disableCopy:!1,get sourceUrl(){return ti(l(),"none")},get imageUrl(){return e.wallet.imageUrl}})}}),eu(ew,{get when(){return r()},get children(){return[eu(lT,{size:"s"}),eu(l_,{translationKey:"walletModal.desktopConnectionModal.connectionDeclined",children:"Connection declined"}),eu(lM,{get children(){return eu(t3,{get leftIcon(){return eu(rL,{})},get onClick(){return"extension"===t()?f:d},get children(){return eu(lH,{translationKey:"common.retry",children:"Retry"})}})}})]}}),eu(ew,{get when(){return"extension"===t()},get children(){return[eu(eC,{get when(){return(0,c.rM)(e.wallet)},get children(){return[eu(lA,{size:"s"}),eu(l_,{translationKey:"walletModal.desktopConnectionModal.continueInExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",F(()=>e.wallet.name)," browser extension…"]}}),eu(lM,{get children(){return eu(t3,{get leftIcon(){return eu(rL,{})},onClick:f,get children(){return eu(lH,{translationKey:"common.retry",children:"Retry"})}})}})]}}),eu(eC,{get when(){return!(0,c.rM)(e.wallet)},get children(){return[eu(l_,{translationKey:"walletModal.desktopConnectionModal.dontHaveExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Seems you don't have installed ",F(()=>e.wallet.name)," browser extension"]}}),eu(lM,{get children(){return eu(r3,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eu(t3,{get rightIcon(){return eu(r$,{})},onClick:f,get children(){return eu(lH,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",F(()=>e.wallet.name)]}})}})}})}})]}})]}}),eu(ew,{get when(){return"desktop"===t()},get children(){return[eu(rh,{size:"m"}),eu(l_,{translationKey:"walletModal.desktopConnectionModal.continueOnDesktop",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",F(()=>e.wallet.name)," on desktop…"]}}),eu(lM,{get children(){return[eu(t3,{get leftIcon(){return eu(rL,{})},onClick:d,get children(){return eu(lH,{translationKey:"common.retry",children:"Retry"})}}),eu(r3,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eu(t3,{get rightIcon(){return eu(r$,{})},get children(){return eu(lH,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",F(()=>e.wallet.name)]}})}})}})]}})]}})]}})}}),eu(eC,{get when(){return e.wallet.appName===rq},get children(){return eu(lE,{get rightIcon(){return eu(lI,{get src(){return rY.TG}})},scale:"s",onClick:h,get children(){return eu(lH,{translationKey:"walletModal.desktopConnectionModal.openWalletOnTelegram",children:"Open Wallet on Telegram on desktop"})}})}}),eu(eC,{get when(){return e.wallet.appName!==rq},get children(){return eu(l$,{get children(){return[eu(eC,{get when(){return F(()=>"mobile"!==t())()&&la(e.wallet)},get children(){return eu(lS,{appearance:"secondary",get leftIcon(){return eu(ry,{})},onClick:u,get children(){return eu(lH,{translationKey:"common.mobile",children:"Mobile"})}})}}),eu(eC,{get when(){return F(()=>"extension"!==t())()&&ls(e.wallet)},get children(){return eu(lS,{appearance:"secondary",get leftIcon(){return eu(rv,{})},onClick:f,get children(){return eu(lH,{translationKey:"common.browserExtension",children:"Browser Extension"})}})}}),eu(eC,{get when(){return F(()=>"desktop"!==t())()&&li(e.wallet)},get children(){return eu(lS,{appearance:"secondary",get leftIcon(){return eu(rb,{})},onClick:d,get children(){return eu(lH,{translationKey:"common.desktop",children:"Desktop"})}})}})]}})}})]}})},lB=e9.div``,lN=e9(ni)`
    position: absolute;
    top: 16px;
    left: 16px;
`,lW=e9(n2)`
    margin-bottom: 18px;
`,lP=e9.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,lO=e1`
    margin-bottom: 12px;
`,lV=e9(n9)`
    text-align: center;
    margin-bottom: 4px;
`,lD=e9(nj)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,lK=e9.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,lj=e=>eu(lB,{"data-tc-wallets-modal-info":"true",get children(){return[eu(lN,{icon:"arrow",onClick:()=>e.onBackClick()}),eu(lW,{translationKey:"walletModal.infoModal.whatIsAWallet",children:"What is a wallet"}),eu(r5,{get children(){return[eu(lP,{get children(){return[eu(r_,{class:lO}),eu(lV,{translationKey:"walletModal.infoModal.secureDigitalAssets",children:"Secure digital assets storage"}),eu(lD,{translationKey:"walletModal.infoModal.walletProtects",children:"A wallet protects and manages your digital assets including TON, tokens and collectables."})]}}),eu(lP,{get children(){return[eu(rI,{class:lO}),eu(lV,{translationKey:"walletModal.infoModal.controlIdentity",children:"Control your Web3 identity"}),eu(lD,{translationKey:"walletModal.infoModal.manageIdentity",children:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."})]}}),eu(lP,{get children(){return[eu(rR,{class:lO}),eu(lV,{translationKey:"walletModal.infoModal.effortlessCryptoTransactions",children:"Effortless crypto transactions"}),eu(lD,{translationKey:"walletModal.infoModal.easilySend",children:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."})]}}),eu(lK,{get children(){return eu(r3,{get href(){return"https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"},blank:!0,get children(){return eu(t3,{get rightIcon(){return eu(rA,{})},get children(){return eu(lH,{translationKey:"walletModal.infoModal.getAWallet",children:"Get a Wallet"})}})}})}})]}})]}}),lF=e9.div``,lU=e9.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,lZ=e9(n2)`
    max-width: 262px;
    margin: 0 auto 8px;
`,lz=e9(ni)`
    position: absolute;
    top: 16px;
    left: 16px;
`,lq=e9.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>tn(e.theme.colors.icon.secondary,.2)};
`,lY=e9(tY)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,lG=e9(r3)`
    margin-left: auto;
`,lQ=e9(rh)`
    margin-bottom: 18px;
    margin-top: 2px;
`,lJ=e9(rs)`
    margin-bottom: 16px;
`,lX=e9(n4)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,l1=e9.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,l0=e9(n2)`
    margin-bottom: 2px;
    padding: 0 64px;
`,l2=e9(n4)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,l5=e9.div`
    padding: 0 24px 24px;
`,l4=e=>[eu(l0,{get children(){return e.walletInfo.name}}),eu(l2,{translationKey:"walletModal.mobileConnectionModal.scanQR",get translationValues(){return{name:e.walletInfo.name}},get children(){return["Scan the QR code below with your phone’s or ",F(()=>e.walletInfo.name),"’s camera"]}}),eu(l5,{get children(){return eu(nN,{get imageUrl(){return e.walletInfo.imageUrl},get sourceUrl(){return ti(e.universalLink,"none")},disableCopy:!0})}})],l3=e=>{let t=e4(),[n,r]=V(!1),[o,l]=V(!1),i=q(tL),a=i.onStatusChange(()=>{},()=>{l(!0)}),s=F(()=>i.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest)),c=()=>{l(!1),tw(L(k({},e.wallet),{openMethod:"universal-link"})),tl(ti(s(),ln.returnStrategy))},u=()=>{l(!1),r(!0),tw(L(k({},e.wallet),{openMethod:"qrcode"}))},d=()=>{r(!1),tw(L(k({},e.wallet),{openMethod:"universal-link"}))},h=()=>{n()?d():e.onBackClick()};return Z(a),c(),eu(lF,{"data-tc-wallets-modal-connection-mobile":"true",get children(){return[eu(lz,{icon:"arrow",onClick:h}),eu(eC,{get when(){return n()},get children(){return eu(l4,{get universalLink(){return s()},get walletInfo(){return e.wallet}})}}),eu(eC,{get when(){return!n()},get children(){return[eu(lZ,{get children(){return e.wallet.name}}),eu(lU,{get children(){return[eu(eC,{get when(){return o()},get children(){return[eu(lJ,{size:"s"}),eu(lX,{translationKey:"walletModal.mobileConnectionModal.connectionDeclined",children:"Connection declined"}),eu(l1,{get children(){return[eu(t3,{get leftIcon(){return eu(rL,{})},onClick:c,get children(){return eu(lH,{translationKey:"common.retry",children:"Retry"})}}),eu(t3,{get leftIcon(){return eu(rK,{get fill(){return t.colors.accent}})},onClick:u,get children(){return eu(lH,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}}),eu(eC,{get when(){return!o()},get children(){return[eu(lQ,{size:"s"}),eu(lX,{translationKey:"walletModal.mobileConnectionModal.continueIn",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",F(()=>e.wallet.name),"…"]}}),eu(l1,{get children(){return[eu(t3,{get leftIcon(){return eu(rL,{})},onClick:c,get children(){return eu(lH,{translationKey:"common.retry",children:"Retry"})}}),eu(t3,{get leftIcon(){return eu(rK,{get fill(){return t.colors.accent}})},onClick:u,get children(){return eu(lH,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}})]}}),eu(lq,{get children(){return[eu(lY,{get src(){return e.wallet.imageUrl}}),eu(n9,{get children(){return e.wallet.name}}),eu(lG,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eu(t3,{get children(){return eu(lH,{translationKey:"common.get",children:"GET"})}})}})]}})]}})]}})},l9={m:"16px",s:"12px",none:"0"},l8={m:"6px",s:"6px",none:"0"},l6=e9.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,l7=e9.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${t1} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${tX} {
        &:active {
            transform: scale(0.92);
        }
    }
`,ie=e9.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`,it=e9.div`
    width: 60px;
    height: 60px;
    border-radius: ${e=>l9[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`,ir=e9(n2)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,io=e9(n4)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
`;e9(t3)`
    display: block;
    margin: 0 auto;
`;let il=e9(t3)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>l9[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;
`,ii=e9(tY)`
    border-radius: ${e=>l8[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,ia=e9(ni)`
    position: absolute;
    top: 16px;
    left: 16px;
`,is=e9(n2)`
    margin-bottom: 2px;
    padding: 0 64px;
`,ic=e9(n4)`
    margin-bottom: 20px;
    padding: 0 64px;
`,iu=e9.div`
    padding: 0 24px 24px;
`,id=e=>[eu(is,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),eu(ic,{translationKey:"walletModal.mobileUniversalModal.scan",children:"Scan with your mobile wallet"}),eu(iu,{get children(){return eu(nN,{get imageUrl(){return rY.TON},get sourceUrl(){return ti(e.universalLink,"none")},disableCopy:!0})}})],ih=eA("<li></li>"),ig=eA('<div data-tc-wallets-modal-universal-mobile="true"></div>'),ip=e=>{let[t,n]=V(!1),r=ln.connector,o=()=>e.walletsList.filter(e=>la(e)&&e.appName!==rq),l=()=>o().length>7,i=()=>[...new Set(e.walletsList.filter(c.Lh).map(e=>e.bridgeUrl)).values()].map(e=>({bridgeUrl:e})),a=F(()=>r.connect(i(),e.additionalRequest));tw({openMethod:"universal-link"});let[s,u]=V(void 0),d=()=>$(void 0,null,function*(){void 0!==s()&&clearTimeout(s()),yield nR(a());let e=setTimeout(()=>u(void 0),1500);u(e)}),h=()=>{tl(ti(a(),ln.returnStrategy))},f=()=>{let t=e.walletsList.find(e=>e.appName===rq);if(!t||!(0,c.Lh)(t))throw new to("@wallet bot not found in the wallets list");tl(ti(r.connect({bridgeUrl:t.bridgeUrl,universalLink:t.universalLink},e.additionalRequest),{returnStrategy:ln.returnStrategy,twaReturnUrl:ln.twaReturnUrl}))},g=()=>{n(!0),tw({openMethod:"qrcode"})},p=()=>{n(!1),tw({openMethod:"universal-link"})};return(()=>{let n=ig.cloneNode(!0);return eH(n,eu(eC,{get when(){return t()},get children(){return[eu(ia,{icon:"arrow",onClick:p}),eu(id,{get universalLink(){return a()}})]}}),null),eH(n,eu(eC,{get when(){return!t()},get children(){return[eu(ia,{get icon(){return eu(rK,{})},onClick:g}),eu(ir,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),eu(io,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",children:"Open Wallet on Telegram or select your wallet to connect"}),eu(il,{get leftIcon(){return eu(rN,{})},get rightIcon(){return eu(ii,{get src(){return rY.TG}})},onClick:f,scale:"s",get children(){return eu(lH,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegram",children:"Open Wallet on Telegram"})}}),eu(l6,{get children(){return[eu(em,{get each(){return F(()=>!!l())()?o().slice(0,4):o()},children:t=>(()=>{let n=ih.cloneNode(!0);return eH(n,eu(n1,{get icon(){return t.imageUrl},get name(){return t.name},onClick:()=>e.onSelect(t)})),n})()}),eu(eC,{get when(){return l()},get children(){let t=ih.cloneNode(!0);return eH(t,eu(rz,{labelLine1:"View all",labelLine2:"wallets",get images(){return o().slice(3,7).map(e=>e.imageUrl)},onClick:()=>e.onSelectAllWallets()})),t}}),eu(ie,{children:"\xa0"}),eu(l7,{onClick:h,get children(){return[eu(it,{get children(){return eu(n6,{})}}),eu(nj,{fontWeight:590,translationKey:"walletModal.mobileUniversalModal.openLink",children:"Open Link"})]}}),eu(l7,{onClick:d,get children(){return[eu(it,{get children(){return F(()=>void 0!==s())()?eu(rP,{}):eu(rV,{})}}),eu(nj,{fontWeight:590,get translationKey(){return void 0!==s()?"common.copied":"common.copyLink"},get children(){return void 0!==s()?"Copied":"Copy Link"}})]}})]}})]}}),null),n})()},im={m:"16px",s:"8px",none:"0"},iC={m:"8px",s:"4px",none:"0"},iv=e9.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,iw=e9(n4)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,iy=e9(n4)`
    margin-bottom: 16px;
`,ix=e9(nN)`
    margin-bottom: 24px;
`,ib=e9.ul`
    display: flex;
`;e9.div`
    display: flex;
    gap: 16px;
    width: 100%;
`,e9(t3)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>im[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`,e9.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>im[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`,e9.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>iC[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,e9(tY)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`,e9.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,e9(nj)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;let ik=eA("<li></li>"),iL=e=>{let[t,n]=V(!1),r=ln.connector,o=()=>[...new Set(e.walletsList.filter(c.Lh).map(e=>e.bridgeUrl)).values()].map(e=>({bridgeUrl:e}));tw({openMethod:"qrcode"});let l=F(()=>r.connect(o(),e.additionalRequest));return eu(iv,{onClick:()=>n(!1),"data-tc-wallets-modal-universal-desktop":"true",get children(){return[eu(n2,{translationKey:"walletModal.desktopUniversalModal.connectYourWallet",children:"Connect your wallet"}),eu(iw,{translationKey:"walletModal.desktopUniversalModal.scan",children:"Scan with your mobile wallet"}),eu(ix,{get sourceUrl(){return ti(l(),"none")},get disableCopy(){return t()},get imageUrl(){return rY.TON}}),eu(iy,{translationKey:"walletModal.desktopUniversalModal.availableWallets",children:"Available wallets"}),eu(ib,{get children(){return[eu(em,{get each(){return e.walletsList.slice(0,3)},children:t=>(()=>{let n=ik.cloneNode(!0);return eH(n,eu(rG,{wallet:t,onClick:()=>e.onSelect(t)})),n})()}),eu(rz,{labelLine1:"View all",labelLine2:"wallets",get images(){return e.walletsList.slice(3,7).map(e=>e.imageUrl)},onClick:()=>e.onSelectAllWallets()})]}})]}})},iM=()=>{let{locale:e}=nD()[1];j(()=>e(ln.language));let t=q(tL),n=q(r9),[o]=function(e,t,n){let o,l,i;2==arguments.length&&"object"==typeof t||1==arguments.length?(o=!0,l=e,i=t||{}):(o=e,l=t,i=n||{});let a=null,s=H,c=null,u=!1,d="initialValue"in i,h="function"==typeof o&&F(o),f=new Set,[g,p]=(i.storage||V)(i.initialValue),[m,C]=V(void 0),[v,w]=V(void 0,{equals:!1}),[y,x]=V(d?"ready":"unresolved");if(S.context){let e;c=`${S.context.id}${S.context.count++}`,"initial"===i.ssrLoadFrom?s=i.initialValue:S.load&&(e=S.load(c))&&(s=e[0])}function b(e,t,n,r){return a===e&&(a=null,d=!0,(e===s||t===s)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(r,{value:t})),s=H,et(()=>{for(let e of(void 0===n&&p(()=>t),x(void 0!==n?"errored":"ready"),C(n),f.keys()))e.decrement();f.clear()},!1)),t}function k(){let e=g(),t=m();if(void 0!==t&&!a)throw t;return B&&!B.user&&r&&D(()=>{v(),a&&(r.resolved||f.has(r)||(r.increment(),f.add(r)))}),e}function L(e=!0){if(!1!==e&&u)return;u=!1;let t=h?h():o;if(null==t||!1===t){b(a,U(g));return}let n=s!==H?s:U(()=>l(t,{value:g(),refetching:e}));return"object"==typeof n&&n&&"then"in n?(a=n,u=!0,queueMicrotask(()=>u=!1),et(()=>{x(d?"refreshing":"pending"),w()},!1),n.then(e=>b(n,e,void 0,t),e=>b(n,void 0,ei(e),t))):(b(a,n,void 0,t),n)}return Object.defineProperties(k,{state:{get:()=>y()},error:{get:()=>m()},loading:{get(){let e=y();return"pending"===e||"refreshing"===e}},latest:{get(){if(!d)return k();let e=m();if(e&&!a)throw e;return g()}}}),h?D(()=>L(!1)):L(!1),[k,{refetch:L,mutate:p}]}(()=>n.getWallets()),[l,i]=V(null),[a,s]=V("universal"),[u,d]=V(!1),h=F(()=>{if("ready"!==o.state)return null;let e=ll(o(),ln.walletsListConfiguration),t=e.filter(c.rM),n=e.filter(e=>!(0,c.rM)(e));e=(t||[]).concat(n);let r=ln.preferredWalletAppName,l=e.find(e=>lc(e,r)),i=e.filter(e=>lc(e,r)).length>=2;r&&l&&!i&&(e=[L(k({},l),{isPreferred:!0})].concat(e.filter(e=>!lc(e,r))));let a=e.find(e=>lc(e,rq));return a&&(e=[a].concat(e.filter(e=>!lc(e,rq)))),e}),f=()=>{var e;return(null==(e=ln.connectRequestParameters)?void 0:e.state)==="loading"},g=F(()=>{var e;if(!f())return null==(e=ln.connectRequestParameters)?void 0:e.value}),p=()=>{tp(!1),i(null),d(!1)};return Z(t.onStatusChange(e=>{e&&p()})),eu(o7,{get opened(){return tg()},onClose:p,onClickQuestion:()=>d(e=>!e),"data-tc-wallets-modal-container":"true",get children(){return[eu(eC,{get when(){return u()},get children(){return eu(lj,{onBackClick:()=>d(!1)})}}),eu(eC,{get when(){return!u()},get children(){return[eu(eC,{get when(){return f()||!h()},get children(){return[eu(le,{translationKey:"walletModal.loading",children:"Wallets list is loading"}),eu(lt,{get children(){return eu(rh,{size:"m"})}})]}}),eu(eC,{get when(){return F(()=>!f())()&&h()},get children(){return eu(ev,{get children(){return[eu(ew,{get when(){return l()},get children(){return eu(eK,{get component(){return r0()?l3:lR},get wallet(){return l()},get additionalRequest(){return g()},onBackClick:()=>i(null)})}}),eu(ew,{get when(){return"universal"===a()},get children(){return eu(eK,{get component(){return r0()?ip:iL},onSelect:i,get walletsList(){return h()},get additionalRequest(){return g()},onSelectAllWallets:()=>s("all-wallets")})}}),eu(ew,{get when(){return"all-wallets"===a()},get children(){return eu(lm,{get walletsList(){return h()},onBack:()=>s("universal"),onSelect:i})}})]}})}})]}})]}})},i$=e9.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,iS=e9(n2)`
    margin-top: 16px;
`,iA=e9(nj)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,iT=e9(t3)`
    margin-top: 32px;
`,i_=e=>{let t;let n=t4(e),r=q(r9);(null==r?void 0:r.wallet)&&"universalLink"in r.wallet&&("universal-link"===r.wallet.openMethod||(0,c.dg)(r.wallet.universalLink)&&tu())&&(t=r.wallet.universalLink);let o=()=>{let e=ty(),n="returnStrategy"in e?e.returnStrategy:ln.returnStrategy;(0,c.dg)(t)?tc(t,{returnStrategy:n,twaReturnUrl:"twaReturnUrl"in e?e.twaReturnUrl:ln.twaReturnUrl}):tl(ti(t,n))};return eu(i$,eg(n,{get children(){return[F(()=>e.icon),eu(iS,{get translationKey(){return e.headerTranslationKey},get translationValues(){return e.headerTranslationValues}}),eu(iA,{get translationKey(){return e.textTranslationKey},get translationValues(){return e.textTranslationValues}}),eu(eC,{get when(){return"open-wallet"!==e.showButton},get children(){return eu(iT,{onClick:()=>e.onClose(),get children(){return eu(lH,{translationKey:"common.close",children:"Close"})}})}}),eu(eC,{get when(){return"open-wallet"===e.showButton&&t},get children(){return eu(iT,{onClick:o,get children(){return eu(lH,{translationKey:"common.openWallet",children:"Open wallet"})}})}})]}}))},iE=e=>{let t=q(r9),[n]=nD(),r=()=>t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet");return eu(i_,{headerTranslationKey:"actionModal.confirmTransaction.header",get headerTranslationValues(){return{name:r()}},textTranslationKey:"actionModal.confirmTransaction.text",get icon(){return eu(rh,{size:"m"})},onClose:()=>e.onClose(),showButton:"open-wallet","data-tc-confirm-modal":"true"})},iI=e=>eu(i_,{headerTranslationKey:"actionModal.transactionCanceled.header",textTranslationKey:"actionModal.transactionCanceled.text",get icon(){return eu(rs,{size:"m"})},onClose:()=>e.onClose(),"data-tc-transaction-canceled-modal":"true"}),iH=e=>eu(i_,{headerTranslationKey:"actionModal.transactionSent.header",textTranslationKey:"actionModal.transactionSent.text",get icon(){return eu(ro,{size:"m"})},onClose:()=>e.onClose(),"data-tc-transaction-sent-modal":"true"}),iR=()=>eu(nC,{get opened(){var e;return F(()=>null!==ty())()&&(null==(e=ty())?void 0:e.openModal)===!0},onClose:()=>tx(null),"data-tc-actions-modal-container":"true",get children(){return eu(ev,{get children(){return[eu(ew,{get when(){return"transaction-sent"===ty().name},get children(){return eu(iH,{onClose:()=>tx(null)})}}),eu(ew,{get when(){return"transaction-canceled"===ty().name},get children(){return eu(iI,{onClose:()=>tx(null)})}}),eu(ew,{get when(){return"confirm-transaction"===ty().name},get children(){return eu(iE,{onClose:()=>tx(null)})}})]}})}}),iB=e=>{let t=nO(tb,ln.language);return customElements.define(e6,class extends HTMLDivElement{},{extends:"div"}),document.body.hasAttribute("ontouchstart")||document.body.setAttribute("ontouchstart",""),eu(nV.Provider,{value:t,get children(){return eu(r9.Provider,{get value(){return e.tonConnectUI},get children(){return eu(tL.Provider,{get value(){return ln.connector},get children(){return[eu(tt,{}),eu(e5,{theme:tj,get children(){return[eu(eC,{get when(){return ln.buttonRootId},get children(){return eu(eD,{get mount(){return document.getElementById(ln.buttonRootId)},get children(){return eu(o6,{})}})}}),eu(eK,{component:e6,get children(){return[eu(iM,{}),eu(iR,{})]}})]}})]}})}})}})},iN={openWalletsModal:()=>void setTimeout(()=>tp(!0)),setAction:e=>void setTimeout(()=>tx(e)),clearAction:()=>void setTimeout(()=>tx(null)),getSelectedWalletInfo:()=>tC(),removeSelectedWalletInfo:()=>tw(null),renderApp:(e,t)=>(function(e,t,n,r={}){let o;return O(n=>{o=n,t===document?e():eH(t,e(),t.firstChild?null:void 0,void 0)},r.owner),()=>{o(),t.textContent=""}})(()=>eu(iB,{tonConnectUI:t}),document.getElementById(e))};class iW{constructor(e){if(M(this,"walletInfoStorage",new td),M(this,"preferredWalletStorage",new th),M(this,"connector"),M(this,"walletInfo",null),M(this,"systemThemeChangeUnsubscribe",null),M(this,"actionsConfiguration"),M(this,"walletsList"),M(this,"connectRequestParametersCallback"),M(this,"connectionRestored",Promise.resolve(!1)),e&&"connector"in e&&e.connector)this.connector=e.connector;else if(e&&"manifestUrl"in e&&e.manifestUrl)this.connector=new c.PS({manifestUrl:e.manifestUrl});else throw new to("You have to specify a `manifestUrl` or a `connector` in the options.");this.walletsList=this.getWallets(),this.walletsList.then(e=>(function(e){e.forEach(e=>{new window.Image().src=e})})([...new Set(e.map(e=>e.imageUrl))]));let t=this.normalizeWidgetRoot(null==e?void 0:e.widgetRootId);this.subscribeToWalletChange(),(null==e?void 0:e.restoreConnection)!==!1&&(this.connectionRestored=new Promise(e=>$(this,null,function*(){yield this.connector.restoreConnection(),this.connector.connected||this.walletInfoStorage.removeWalletInfo(),e(this.connector.connected)}))),this.uiOptions=tK(e,{uiPreferences:{theme:"SYSTEM"}});let n=this.preferredWalletStorage.getPreferredWalletAppName();lr({connector:this.connector,preferredWalletAppName:n}),iN.renderApp(t,this)}static getWallets(){return c.PS.getWallets()}get connected(){return this.connector.connected}get account(){return this.connector.account}get wallet(){return this.connector.wallet?k(k({},this.connector.wallet),this.walletInfo):null}set uiOptions(e){var t,n,r,o,l,i;(this.checkButtonRootExist(e.buttonRootId),this.actionsConfiguration=e.actionsConfiguration,null==(t=e.uiPreferences)?void 0:t.theme)?(null==(n=e.uiPreferences)?void 0:n.theme)!=="SYSTEM"?(null==(r=this.systemThemeChangeUnsubscribe)||r.call(this),tz(e.uiPreferences.theme,e.uiPreferences.colorsSet)):(tz(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?ej.LIGHT:ej.DARK,e.uiPreferences.colorsSet),this.systemThemeChangeUnsubscribe||(this.systemThemeChangeUnsubscribe=function(e){let t=t=>e(t.matches?ej.DARK:ej.LIGHT);return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t),()=>window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",t)}(tz))):(null==(o=e.uiPreferences)?void 0:o.colorsSet)&&(i=e.uiPreferences.colorsSet,tZ[ej.DARK]=tK(i[ej.DARK],tZ[ej.DARK]),tZ[ej.LIGHT]=tK(i[ej.LIGHT],tZ[ej.LIGHT]),tF(e=>({colors:tK(tZ[e.theme],tU[e.theme])}))),(null==(l=e.uiPreferences)?void 0:l.borderRadius)&&tF({borderRadius:e.uiPreferences.borderRadius}),lr(t=>{var n,r;let o=tK(k(k(k(k({},e.language&&{language:e.language}),!!(null==(n=e.actionsConfiguration)?void 0:n.returnStrategy)&&{returnStrategy:e.actionsConfiguration.returnStrategy}),!!(null==(r=e.actionsConfiguration)?void 0:r.twaReturnUrl)&&{twaReturnUrl:e.actionsConfiguration.twaReturnUrl}),!!e.walletsListConfiguration&&{walletsListConfiguration:e.walletsListConfiguration}),t_(t));return void 0!==e.buttonRootId&&(o.buttonRootId=e.buttonRootId),o})}setConnectRequestParameters(e){var t;lr({connectRequestParameters:e}),(null==e?void 0:e.state)!=="ready"&&e||null==(t=this.connectRequestParametersCallback)||t.call(this,null==e?void 0:e.value)}getWallets(){return $(this,null,function*(){return this.connector.getWallets()})}onStatusChange(e,t){return this.connector.onStatusChange(t=>$(this,null,function*(){if(t){let n=yield this.getSelectedWalletInfo(t);e(k(k({},t),n||this.walletInfoStorage.getWalletInfo()))}else e(t)}),t)}connectWallet(){return $(this,null,function*(){let e=(yield this.getWallets()).find(c.eo);if(e){let t=t=>{tw(e),this.connector.connect({jsBridgeKey:e.jsBridgeKey},t)},n=ln.connectRequestParameters;(null==n?void 0:n.state)==="loading"?this.connectRequestParametersCallback=t:t(null==n?void 0:n.value)}else iN.openWalletsModal();return new Promise((e,t)=>{let n=this.connector.onStatusChange(r=>$(this,null,function*(){if(n(),r){let t=yield this.getSelectedWalletInfo(r);e(k(k({},r),t||this.walletInfoStorage.getWalletInfo()))}else t(new to("Wallet was not connected"))}),t)})})}disconnect(){return iN.clearAction(),iN.removeSelectedWalletInfo(),this.walletInfoStorage.removeWalletInfo(),this.connector.disconnect()}sendTransaction(e,t){return $(this,null,function*(){if(!this.connected)throw new to("Connect wallet to send a transaction.");let{notifications:n,modals:r,returnStrategy:o,twaReturnUrl:l,skipRedirectToWallet:i}=this.getModalsAndNotificationsConfiguration(t),a="ios"===function(){var e,t;let n,r;let o=new(d())().getResult(),l=null==(e=o.os.name)?void 0:e.toLowerCase();switch(!0){case"ios"===l:n="ios";break;case"android"===l:n="android";break;case"mac os"===l:n="macos";break;case"linux"===l:n="linux";break;case null==l?void 0:l.includes("windows"):n="windows"}let i=null==(t=o.browser.name)?void 0:t.toLowerCase();switch(!0){case"chrome"===i:r="chrome";break;case"firefox"===i:r="firefox";break;case null==i?void 0:i.includes("safari"):r="safari"}return{os:n,browser:r}}().os;this.walletInfo&&"universalLink"in this.walletInfo&&"universal-link"===this.walletInfo.openMethod&&!("ios"===i&&a||"always"===i)&&((0,c.dg)(this.walletInfo.universalLink)?tc(this.walletInfo.universalLink,{returnStrategy:o,twaReturnUrl:l}):tl(ti(this.walletInfo.universalLink,o))),iN.setAction({name:"confirm-transaction",showNotification:n.includes("before"),openModal:r.includes("before")});try{let t=yield this.connector.sendTransaction(e);return iN.setAction({name:"transaction-sent",showNotification:n.includes("success"),openModal:r.includes("success")}),t}catch(e){if(iN.setAction({name:"transaction-canceled",showNotification:n.includes("error"),openModal:r.includes("error")}),e instanceof c._Y)throw e;throw console.error(e),new to("Unhandled error:"+e)}})}subscribeToWalletChange(){this.connector.onStatusChange(e=>$(this,null,function*(){var t;e?(yield this.updateWalletInfo(e),this.setPreferredWalletAppName((null==(t=this.walletInfo)?void 0:t.appName)||e.device.appName)):this.walletInfoStorage.removeWalletInfo()}))}setPreferredWalletAppName(e){this.preferredWalletStorage.setPreferredWalletAppName(e),lr({preferredWalletAppName:e})}getSelectedWalletInfo(e){return $(this,null,function*(){let t,n=iN.getSelectedWalletInfo();if(!n)return null;if("name"in n)t=n;else{let r=ll((yield this.walletsList),ln.walletsListConfiguration).find(t=>lc(t,e.device.appName));if(!r)throw new to(`Cannot find WalletInfo for the '${e.device.appName}' wallet`);t=k(k({},r),n)}return t})}updateWalletInfo(e){return $(this,null,function*(){let t=yield this.getSelectedWalletInfo(e);if(t){this.walletInfo=t,this.walletInfoStorage.setWalletInfo(t);return}let n=this.walletInfoStorage.getWalletInfo();if(n){this.walletInfo=n;return}this.walletInfo=(yield this.walletsList).find(t=>lc(t,e.device.appName))||null})}normalizeWidgetRoot(e){if(!e||!document.getElementById(e)){e="tc-widget-root";let t=document.createElement("div");t.id=e,document.body.appendChild(t)}return e}checkButtonRootExist(e){if(null!=e&&!document.getElementById(e))throw new to(`${e} element not found in the document.`)}getModalsAndNotificationsConfiguration(e){var t,n,r,o,l,i;let a=["before","success","error"],s=a;(null==(t=this.actionsConfiguration)?void 0:t.notifications)&&(null==(n=this.actionsConfiguration)?void 0:n.notifications)!=="all"&&(s=this.actionsConfiguration.notifications),(null==e?void 0:e.notifications)&&(s="all"===e.notifications?a:e.notifications);let c=["before"];return(null==(r=this.actionsConfiguration)?void 0:r.modals)&&(c="all"===this.actionsConfiguration.modals?a:this.actionsConfiguration.modals),(null==e?void 0:e.modals)&&(c="all"===e.modals?a:e.modals),{notifications:s,modals:c,returnStrategy:(null==e?void 0:e.returnStrategy)||(null==(o=this.actionsConfiguration)?void 0:o.returnStrategy)||"back",twaReturnUrl:(null==e?void 0:e.twaReturnUrl)||(null==(l=this.actionsConfiguration)?void 0:l.twaReturnUrl),skipRedirectToWallet:(null==e?void 0:e.skipRedirectToWallet)||(null==(i=this.actionsConfiguration)?void 0:i.skipRedirectToWallet)||"ios"}}}}}]);