(function(){"use strict";var e={704:function(e,n,t){var r=t(9242),o=t(3396);function i(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var u=t(89);const a={},c=(0,u.Z)(a,[["render",i]]);var l=c,f=t(2483);const s=(0,o._)("h1",null,"This is a landing page",-1);function d(e,n,t,r,i,u){const a=(0,o.up)("header-component");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a),s])}var p=t(3216),h={components:{HeaderComponent:p.Z}};const m=(0,u.Z)(h,[["render",d]]);var g=m;const v=[{path:"/",name:"landing",component:g},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,833))},{path:"/login",name:"login",component:()=>t.e(851).then(t.bind(t,5851))},{path:"/register",name:"register",component:()=>t.e(884).then(t.bind(t,884))},{path:"/client",name:"client",component:()=>t.e(923).then(t.bind(t,2923))},{path:"/client/profile",name:"client-profile",component:()=>t.e(989).then(t.bind(t,1989))},{path:"/bank",name:"bank",component:()=>t.e(220).then(t.bind(t,220))}],b=(0,f.p7)({history:(0,f.r5)(),routes:v});var y=b;let k={api_url:"https://e-courtage-back.fly.dev/"};t(2166);const w=(0,r.ri)(l);w.config.globalProperties.api_url=k.api_url,w.use(y).mount("#app")},3216:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3396);const o={id:"header"},i=(0,r._)("h1",null,"E-COURTAGE",-1);function u(e,n,t,u,a,c){return(0,r.wg)(),(0,r.iD)("div",o,[i,"/"==this.$route.path?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:n[0]||(n[0]=()=>c.handleLoginButton())},"Se Connecter")):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:n[1]||(n[1]=()=>c.handleDisconnect())},"Se Déconnecter"))])}t(7658);var a={name:"HeaderComponent",components:{},data(){return{connected:!1}},mounted(){localStorage.getItem("token")||"/"==this.$route.path||this.$router.push("/login")},methods:{handleDisconnect(){localStorage.removeItem("token"),this.$router.push("/")},handleLoginButton(){localStorage.getItem("token")?this.$router.push("/client"):this.$router.push("/login")}}},c=t(89);const l=(0,c.Z)(a,[["render",u]]);var f=l}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"."+{220:"446cb045",443:"3a337ee6",851:"b773f166",884:"5e09cc6f",923:"f481d723",989:"9e9a9ce8"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{851:"8232da6a",884:"a6968cd0",923:"1311cb80",989:"ec73b7f7"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="front:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/e-courtage/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={851:1,884:1,923:1,989:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var f=c(t)}for(n&&n(r);l<u.length;l++)i=u[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(704)}));r=t.O(r)})();
//# sourceMappingURL=app.0c931291.js.map