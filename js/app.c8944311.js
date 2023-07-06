(function(){"use strict";var e={1042:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3396);const i=e=>((0,a.dD)("data-v-6dba5274"),e=e(),(0,a.Cn)(),e),o={id:"header"},r=i((()=>(0,a._)("h1",null,"E-COURTAGE",-1))),c={id:"headerButtons"},s={key:0,class:"headerButton"},d={key:1,class:"headerButton"};function l(e,t,n,i,l,u){const p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",o,[r,(0,a._)("div",c,["/client"==this.$route.path?((0,a.wg)(),(0,a.iD)("button",s,[(0,a.Wm)(p,{to:"/client/profile"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vos infos")])),_:1})])):(0,a.kq)("",!0),"/client/profile"==this.$route.path?((0,a.wg)(),(0,a.iD)("button",d,[(0,a.Wm)(p,{to:"/client"},{default:(0,a.w5)((()=>[(0,a.Uk)("Accueil")])),_:1})])):(0,a.kq)("",!0),"/"==this.$route.path?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"headerButton",onClick:t[0]||(t[0]=()=>u.handleLoginButton())},"Se Connecter")):((0,a.wg)(),(0,a.iD)("button",{key:3,class:"headerButton",onClick:t[1]||(t[1]=()=>u.handleDisconnect())},"Se Déconnecter"))])])}n(7658);var u={name:"HeaderComponent",components:{},data(){return{connected:!1}},beforeCreate(){localStorage.getItem("token")||"/"==this.$route.path?"/client"!=this.$route.path&&"/client/profile"!=this.$route.path||fetch(this.api_url+"client/getClient",{headers:{"Content-Type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{401==e.status&&(localStorage.removeItem("token"),this.$router.push("/login/client"))})):this.$router.push("/login/client")},methods:{handleDisconnect(){localStorage.removeItem("token"),this.$router.push("/")},handleLoginButton(){this.$router.push("/login/client")}}},p=n(89);const f=(0,p.Z)(u,[["render",l],["__scopeId","data-v-6dba5274"]]);var m=f},9516:function(e,t,n){var a=n(9242),i=n(3396);function o(e,t){const n=(0,i.up)("notifications"),a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(n),(0,i.Wm)(a)])}var r=n(89);const c={},s=(0,r.Z)(c,[["render",o]]);var d=s,l=n(2483),u=n.p+"img/famille-maison.cb4595db.jpg",p=n.p+"img/logo-societe-generale.91e007bb.jpg",f=n.p+"img/logo-bnp-paribas.07113553.png",m=n.p+"img/logo-bred.8f307288.png";const h=e=>((0,i.dD)("data-v-55d68978"),e=e(),(0,i.Cn)(),e),v={class:"landing-page-container"},g={class:"landing-page"},b=(0,i.uE)('<header data-v-55d68978><h1 data-v-55d68978>Trouvez votre prêt immobilier idéal avec notre plateforme de confiance !</h1><h2 data-v-55d68978>Connectez-vous avec des banques compétitives et trouvez les meilleures offres de prêt en quelques clics.</h2></header><section class="illustration" data-v-55d68978><img src="'+u+'" alt="Photo d&#39;une famille" data-v-55d68978></section><section class="benefits" data-v-55d68978><h3 data-v-55d68978>Avantages clés</h3><ul data-v-55d68978><p data-v-55d68978>Des prêts immobiliers sur mesure pour répondre à vos besoins</p><p data-v-55d68978>Accès direct aux offres de plusieurs institutions financières</p><p data-v-55d68978>Processus simple et rapide de dépôt des pièces et d&#39;évaluation des dossiers</p><p data-v-55d68978>Gain de temps et d&#39;efforts grâce à une recherche centralisée</p></ul></section><section class="testimonials" data-v-55d68978><h3 data-v-55d68978>Quelques témoignages de nos clients</h3><div class="testimonial" data-v-55d68978><p data-v-55d68978>&quot;Grâce à cette plateforme, j&#39;ai pu obtenir un prêt immobilier avec un taux avantageux et sans tracas. Je la recommande vivement !&quot;</p><span data-v-55d68978>- Romain Foucher</span></div><div class="testimonial" data-v-55d68978><p data-v-55d68978>&quot;Je suis impressionné par la facilité d&#39;utilisation de cette plateforme. J&#39;ai rapidement trouvé l&#39;offre de prêt qui me convenait.&quot;</p><span data-v-55d68978>- Yohan Villiers</span></div><div class="testimonial" data-v-55d68978><p data-v-55d68978>&quot;Je suis vraiment impressionné par la facilité avec laquelle j&#39;ai trouvé l&#39;offre de prêt immobilier qui me convenait. C&#39;était rapide et pratique, et cela m&#39;a grandement simplifié la vie.&quot;</p><span data-v-55d68978>- Thomas Song</span></div></section>',4),k={class:"call-to-action"},y=h((()=>(0,i._)("h3",null,"Rejoignez-nous !",-1))),C={class:"cta-buttons"},w=(0,i.uE)('<section class="reassurance" data-v-55d68978><h3 data-v-55d68978>Nos partenaires</h3><div class="partner-logos" data-v-55d68978><img src="'+p+'" alt="Logo SG" data-v-55d68978><img src="'+f+'" alt="Logo BNP Paribas" data-v-55d68978><img src="'+m+'" alt="Logo BRED" data-v-55d68978></div><p data-v-55d68978>Plus de 100 000 prêts accordés avec succès</p><p data-v-55d68978>Taux de satisfaction client de 97%</p></section>',1);function _(e,t,n,a,o,r){const c=(0,i.up)("header-component");return(0,i.wg)(),(0,i.iD)("div",v,[(0,i.Wm)(c),(0,i._)("div",g,[b,(0,i._)("section",k,[y,(0,i._)("div",C,[(0,i._)("button",{class:"cta-button",onClick:t[0]||(t[0]=(...e)=>r.redirectToClientRegister&&r.redirectToClientRegister(...e))},"Particuliers"),(0,i._)("button",{class:"cta-button",onClick:t[1]||(t[1]=(...e)=>r.redirectToBankRegister&&r.redirectToBankRegister(...e))},"Profesionnels")])]),w])])}n(7658);var q=n(1042),T={components:{HeaderComponent:q.Z},name:"LandingPage",methods:{redirectToClientRegister(){this.$router.push({path:"/register/client"})},redirectToBankRegister(){this.$router.push({path:"/register/bank"})}}};const j=(0,r.Z)(T,[["render",_],["__scopeId","data-v-55d68978"]]);var S=j;let E={api_url:"https://sheltered-everglades-24913.fly.dev/https://e-courtage-back.fly.dev/",base_url:"/e-courtage/"};const P=[{path:"/",name:"landing",component:S},{path:"/login/client",name:"login-client",component:()=>n.e(981).then(n.bind(n,5981))},{path:"/login/bank",name:"login-bank",component:()=>n.e(271).then(n.bind(n,6271))},{path:"/register/client",name:"register-client",component:()=>n.e(471).then(n.bind(n,7471))},{path:"/register/bank",name:"register-bank",component:()=>n.e(280).then(n.bind(n,1280))},{path:"/client",name:"client-home",component:()=>n.e(466).then(n.bind(n,8466))},{path:"/client/profile",name:"client-profile",component:()=>n.e(808).then(n.bind(n,9808))},{path:"/bank",name:"bank",component:()=>n.e(211).then(n.bind(n,7211))},{path:"/login/admin",name:"login-admin",component:()=>n.e(77).then(n.bind(n,1077))},{path:"/admin/banques",name:"admin-banques",component:()=>n.e(793).then(n.bind(n,1793))},{path:"/admin/clients",name:"admin-clients",component:()=>n.e(550).then(n.bind(n,6550))},{path:"/admin/demandes",name:"admin-demandes",component:()=>n.e(964).then(n.bind(n,2964))},{path:"/client/verification/:token",name:"client-verification",component:()=>n.e(79).then(n.bind(n,79))},{path:"/client/forgot",name:"client-recovery-forgot",component:()=>n.e(297).then(n.bind(n,8297))},{path:"/client/recover/:token",name:"client-recovery-form",component:()=>n.e(689).then(n.bind(n,2689))},{path:"/:pathMatch(.*)*",name:"404",component:()=>n.e(76).then(n.bind(n,1076))}],B=(0,l.p7)({history:(0,l.r5)(),routes:P});B.beforeEach((async e=>{if(["404","landing"].includes(e.name))return!0;{let t=await fetch(E.api_url+"auth/verifyToken/"+localStorage.getItem("token"));return t=await t.json(),"client"==t.type?!!["client-home","client-profile"].includes(e.name)||"/client":"banque"==t.type?!!["bank"].includes(e.name)||"/bank":"admin"==t.type?!!["admin-banques","admin-clients","admin-demandes"].includes(e.name)||"/admin/banques":!!["login-client","login-bank","login-admin","register-client","register-bank","client-verification","client-recovery-forgot","client-recovery-form"].includes(e.name)||(["client-home","client-profile"].includes(e.name)?"/login/client":["bank"].includes(e.name)?"/login/bank":["admin-banques","admin-clients","admin-demandes"].includes(e.name)?"/login/admin":"/")}}));var D=B,O=n(1037);n(2166);const A=(0,a.ri)(d);A.config.globalProperties.api_url=E.api_url,A.use(D),A.use(O.ZP),A.mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var r=1/0;for(l=0;l<e.length;l++){a=e[l][0],i=e[l][1],o=e[l][2];for(var c=!0,s=0;s<a.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(c=!1,o<r&&(r=o));if(c){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{76:"40d851b1",77:"6f153564",79:"1cc786d2",211:"f258c8c3",271:"2623ddcd",280:"e80b5e61",297:"ccf4e404",466:"711f04c1",471:"ef1635e4",550:"4ea495c6",689:"637ff157",793:"427455b7",808:"0563407f",964:"b8b880f3",981:"1bb393fc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{76:"204686ff",77:"b963a233",79:"84bc9909",211:"b9b7d4c0",271:"4d58c97c",280:"9c07ecae",297:"132dc251",466:"22e400bf",471:"4be0faf6",550:"312f925f",689:"5745082e",793:"68f0860f",808:"76d14188",964:"284fa41c",981:"312c737a"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front:";n.l=function(a,i,o,r){if(e[a])e[a].push(i);else{var c,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+o){c=u;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=a),e[a]=[i];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var i=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/e-courtage/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=c,o.parentNode&&o.parentNode.removeChild(o),i(s)}};return o.onerror=o.onload=r,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){i=r[a],o=i.getAttribute("data-href");if(o===e||o===t)return i}},a=function(a){return new Promise((function(i,o){var r=n.miniCssF(a),c=n.p+r;if(t(r,c))return i();e(a,c,null,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={76:1,77:1,79:1,211:1,271:1,280:1,297:1,466:1,471:1,550:1,689:1,793:1,808:1,964:1,981:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=o);var r=n.p+n.u(t),c=new Error,s=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,i[1](c)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,r=a[0],c=a[1],s=a[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var l=s(n)}for(t&&t(a);d<r.length;d++)o=r[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunkfront"]=self["webpackChunkfront"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9516)}));a=n.O(a)})();
//# sourceMappingURL=app.c8944311.js.map