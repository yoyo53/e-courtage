"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[575],{7575:function(i,e,t){t.r(e),t.d(e,{default:function(){return m}});var n=t(3396);const r={id:"verificationMain"},a=(0,n._)("h1",{id:"verificationTitle"},"Client Verification",-1),o={id:"verificationMessage"},c={key:0},u=(0,n._)("h2",null,"Verification ...",-1),l=[u],f={key:1,class:"verificationOption"},s=(0,n._)("h2",null,"Votre compte a été activé",-1),v={key:2,class:"verificationOption"},d=(0,n._)("h2",null,"La verification a échoué",-1),p=(0,n._)("p",null,"Votre compte a peut-être déjà été activé.",-1);function k(i,e,t,u,k,h){const y=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",r,[a,(0,n._)("div",o,[k.verifying?((0,n.wg)(),(0,n.iD)("div",c,l)):(0,n.kq)("",!0),k.verified?((0,n.wg)(),(0,n.iD)("div",f,[s,(0,n.Wm)(y,{to:"/login",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour vous connecter")])),_:1}),(0,n.Wm)(y,{to:"/",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour retourner à l'accueil")])),_:1})])):(0,n.kq)("",!0),k.verifying||k.verified?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",v,[d,p,(0,n.Wm)(y,{to:"/login",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour vous connecter")])),_:1}),(0,n.Wm)(y,{to:"/",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour retourner à l'accueil")])),_:1})]))])])}var h={data(){return{verifying:!0,verified:!1}},mounted(){fetch(this.api_url+"auth/verifyClient/"+this.$route.params.token,{headers:{"Content-Type":"application/json"}}).then((i=>{200==i.status?(this.verifying=!1,this.verified=!0):(this.verifying=!1,this.verified=!1)}))}},y=t(89);const g=(0,y.Z)(h,[["render",k]]);var m=g}}]);
//# sourceMappingURL=575.34ed8c96.js.map