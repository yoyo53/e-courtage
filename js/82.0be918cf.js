"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[82],{1082:function(e,o,n){n.r(o),n.d(o,{default:function(){return _}});var a=n(3396),t=n(9242);const l=e=>((0,a.dD)("data-v-ea2e650c"),e=e(),(0,a.Cn)(),e),s={id:"loginMain"},r=l((()=>(0,a._)("h1",null,"Connexion Banque",-1))),i={class:"mb-3"},d=l((()=>(0,a._)("label",{for:"formEmail",class:"form-label"},"Email address",-1))),u={class:"mb-3"},c=l((()=>(0,a._)("label",{for:"formPassword",class:"form-label"},"Password",-1))),m=l((()=>(0,a._)("div",{class:"mb-3"},[(0,a._)("button",{type:"submit",class:"btn btn-primary"},"Connexion")],-1))),p={id:"loginLinks"};function f(e,o,n,l,f,h){const w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",s,[r,(0,a._)("form",{id:"bankLoginForm",onSubmit:o[2]||(o[2]=(0,t.iM)(((...e)=>h.handleLoginB&&h.handleLoginB(...e)),["prevent"]))},[(0,a._)("div",i,[d,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"formEmail",placeholder:"name@example.com","onUpdate:modelValue":o[0]||(o[0]=e=>f.email=e)},null,512),[[t.nr,f.email]])]),(0,a._)("div",u,[c,(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",id:"formPassword",placeholder:"********","onUpdate:modelValue":o[1]||(o[1]=e=>f.password=e)},null,512),[[t.nr,f.password]])]),m],32),(0,a._)("div",p,[(0,a.Wm)(w,{to:"/register/bank"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vous n'avez pas encore de compte ?")])),_:1}),(0,a.Wm)(w,{to:"/login/client"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vous vous connectez en tant que particulier ?")])),_:1}),(0,a.Wm)(w,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Retour à la page d'accueil")])),_:1})])])}n(7658);var h={name:"LoginView",data(){return{email:"",password:""}},methods:{handleLoginB(){let e={email:this.email,password:this.password};fetch(this.api_url+"auth/loginBanque",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),null!=e.token?(localStorage.setItem("token",e.token),this.$router.push("/bank")):this.$notify({title:"Erreur",text:"Email ou mot de passe incorrect",type:"warn"})}))}}},w=n(89);const b=(0,w.Z)(h,[["render",f],["__scopeId","data-v-ea2e650c"]]);var _=b}}]);
//# sourceMappingURL=82.0be918cf.js.map