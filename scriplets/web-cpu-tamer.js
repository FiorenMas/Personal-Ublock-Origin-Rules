web-cpu-tamer.js text/javascript
(function() {
  (e=>{"use strict";const[t,n,r,o,c,i]=e,a=queueMicrotask,l=this instanceof Window?this:window,s="nzsxclvflluv";if(l[s])throw new Error("Duplicated Userscript Calling");l[s]=!0;const u=(async()=>{})().constructor,m=()=>{let e;const t=new u((t=>{e=t}));return t.resolve=e,t};let d=m();const f=document.createComment("--WebCPUTamer--"),w=HTMLElement.prototype.appendChild;let b,p=0,v=null;function h(){v!==d&&(v=d,p||w.call(document.documentElement,f),p=1+(1073741823&p),f.data=1&p?"++WebCPUTamer++":"--WebCPUTamer--")}if("function"==typeof DocumentTimeline)b=new DocumentTimeline;else{let e=Animation,t=document.documentElement;t&&(t=t.animate(null),"object"==typeof(t||0)&&"_animation"in t&&t.constructor===Object&&(t=t._animation),"object"==typeof(t||0)&&"timeline"in t&&"function"==typeof t.constructor&&(e=t.constructor));b=(new e).timeline}const y=b;new MutationObserver((()=>{d.resolve(),d=m()})).observe(f,{characterData:!0});const T=new Set,O=new Set,j=async e=>(T.add(e),a(h),await d,a(h),await d,T.delete(e)),A=e=>{a((()=>{throw e}))},D=2**-26;setTimeout=function(e,n=void 0,...r){let o;return n>=1&&(n-=D),o=t(((...t)=>{j(o).then((n=>{n&&e(...t)})).catch(A)}),n,...r),o},setInterval=function(e,t=void 0,...r){let o;return t>=1&&(t-=D),o=n(((...t)=>{j(o).then((n=>{n&&e(...t)})).catch(A)}),t,...r),o},clearTimeout=function(e){return T.delete(e),o(e)},clearInterval=function(e){return T.delete(e),c(e)},requestAnimationFrame=function(e){let t;const n=d;return a(h),t=r((r=>{const o=y.currentTime;(async(e,t)=>(O.add(e),await t,O.delete(e)))(t,n).then((t=>{t&&e(r+(y.currentTime-o))})).catch(A)})),t},cancelAnimationFrame=function(e){return O.delete(e),i(e)};try{if("function"==typeof webkitRequestAnimationFrame&&location.hostname.endsWith("youtube.com")&&navigator.userAgentData.brands.some((e=>"Brave"===e.brand))){let e;e=Object.getOwnPropertyDescriptor(self,"setTimeout"),Object.defineProperty(self,"setTimeout",{...e,writable:!1}),e=Object.getOwnPropertyDescriptor(self,"setInterval"),Object.defineProperty(self,"setInterval",{...e,writable:!1})}}catch(e){}})([setTimeout,setInterval,requestAnimationFrame,clearTimeout,clearInterval,cancelAnimationFrame]);
})();
