"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[314],{314:function(e,o,n){n.r(o),n.d(o,{default:function(){return g}});var t=n(3396),a=n(9242);const l={id:"loginMain"},s=(0,t._)("h1",null,"Connexion",-1),i={class:"mb-3"},r=(0,t._)("label",{for:"formEmail",class:"form-label"},"Adresse Email",-1),d={class:"mb-3"},u=(0,t._)("label",{for:"formPassword",class:"form-label"},"Mot de passe",-1),m=(0,t._)("div",{class:"mb-3"},[(0,t._)("button",{type:"submit",class:"btn btn-primary"},"Connexion")],-1),c={id:"loginLinks"};function p(e,o,n,p,f,h){const b=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",l,[s,(0,t._)("form",{id:"clientLoginForm",onSubmit:o[2]||(o[2]=(0,a.iM)(((...e)=>h.handleLoginC&&h.handleLoginC(...e)),["prevent"]))},[(0,t._)("div",i,[r,(0,t.wy)((0,t._)("input",{type:"email",class:"form-control",id:"formEmail",placeholder:"name@example.com","onUpdate:modelValue":o[0]||(o[0]=e=>f.email=e)},null,512),[[a.nr,f.email]])]),(0,t._)("div",d,[u,(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",id:"formPassword",placeholder:"********","onUpdate:modelValue":o[1]||(o[1]=e=>f.password=e)},null,512),[[a.nr,f.password]])]),m],32),(0,t._)("div",c,[(0,t.Wm)(b,{to:"/register"},{default:(0,t.w5)((()=>[(0,t.Uk)("Vous n'avez encore de compte ?")])),_:1}),(0,t.Wm)(b,{to:"/login/bank"},{default:(0,t.w5)((()=>[(0,t.Uk)("Vous vous connectez en tant que banque?")])),_:1}),(0,t.Wm)(b,{to:"/"},{default:(0,t.w5)((()=>[(0,t.Uk)("Retour à la page d'accueil")])),_:1})])])}n(7658);var f={name:"LoginView",data(){return{email:"",password:""}},methods:{handleLoginC(){let e={email:this.email,password:this.password};fetch(this.api_url+"auth/loginClient",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),null!=e.token?(localStorage.setItem("token",e.token),this.$router.push("/client")):alert("Login failed")}))},handleLoginB(){localStorage.setItem("token","123456789"),this.$router.push("/bank")}}},h=n(89);const b=(0,h.Z)(f,[["render",p]]);var g=b}}]);
//# sourceMappingURL=314.e3d24fe5.js.map