!function(e){function t(t){for(var n,r,a=t[0],i=t[1],u=0,c=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={0:0},o={0:0};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{1:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o=e+".style.css",i=a.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=(d=u[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===i))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var d;if((l=(d=s[c]).getAttribute("data-href"))===o||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({}[e]||e)+".bundle.js"}(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a(a.s=0)}([function(e,t,n){n.e(1).then(n.t.bind(null,1,7));var r={btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]')},o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548","#c7c2bf","#524d49","#de6814","#d534eb","#4034eb","#c0eb34"],a={isActive:!1,intervalId:null,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var e,t;document.body.style.backgroundColor=o[(e=0,t=o.length-1,Math.floor(Math.random()*(t-e+1)+e))]}),1e3))},stop:function(){this.isActive&&(this.isActive=!1,clearInterval(this.intervalId))}};r.btnStart.addEventListener("click",a.start.bind(a)),r.btnStop.addEventListener("click",a.stop.bind(a))}]);
//# sourceMappingURL=main.bundle.js.map