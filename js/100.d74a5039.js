"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[100],{1100:function(i,e,t){t.r(e),t.d(e,{default:function(){return w}});var n=t(3396);const r=i=>((0,n.dD)("data-v-a8dcb4ac"),i=i(),(0,n.Cn)(),i),a={id:"verificationMain"},o=r((()=>(0,n._)("h1",{id:"verificationTitle"},"Verification Client ",-1))),c={id:"verificationMessage"},u={key:0},l=r((()=>(0,n._)("h2",null,"Verification ...",-1))),s=r((()=>(0,n._)("p",null,"Veuillez patienter pendant que nous vérifions votre compte.",-1))),v=[l,s],f={key:1,class:"verificationOption"},d=r((()=>(0,n._)("h2",null,"Votre compte a été activé",-1))),p=r((()=>(0,n._)("p",null,"Vous pouvez maintenant vous connecter.",-1))),k={key:2,class:"verificationOption"},h=r((()=>(0,n._)("h2",null,"La verification a échoué",-1))),_=r((()=>(0,n._)("p",null,"Votre compte a peut-être déjà été activé.",-1)));function m(i,e,t,r,l,s){const m=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",a,[o,(0,n._)("div",c,[l.verifying?((0,n.wg)(),(0,n.iD)("div",u,v)):(0,n.kq)("",!0),l.verified?((0,n.wg)(),(0,n.iD)("div",f,[d,p,(0,n.Wm)(m,{to:"/login/client",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour vous connecter")])),_:1}),(0,n.Wm)(m,{to:"/",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour retourner à l'accueil")])),_:1})])):(0,n.kq)("",!0),l.verifying||l.verified?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",k,[h,_,(0,n.Wm)(m,{to:"/login/client",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour vous connecter")])),_:1}),(0,n.Wm)(m,{to:"/",class:"btn btn-primary verificationLink"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cliquez ici pour retourner à l'accueil")])),_:1})]))])])}var y={data(){return{verifying:!0,verified:!1}},mounted(){fetch(this.api_url+"auth/verifyClient/"+this.$route.params.token,{headers:{"Content-Type":"application/json"}}).then((i=>{200==i.status?(this.verifying=!1,this.verified=!0):(this.verifying=!1,this.verified=!1)}))}},b=t(89);const g=(0,b.Z)(y,[["render",m],["__scopeId","data-v-a8dcb4ac"]]);var w=g}}]);
//# sourceMappingURL=100.d74a5039.js.map