"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[951],{2951:function(e,o,n){n.r(o),n.d(o,{default:function(){return b}});var a=n(3396),l=n(9242);const t=(0,a._)("h1",null,"This is a Bank login page",-1),s={id:"loginForm"},r={class:"mb-3"},i=(0,a._)("label",{for:"formEmail",class:"form-label"},"Email address",-1),d={class:"mb-3"},m=(0,a._)("label",{for:"formPassword",class:"form-label"},"Password",-1),c={class:"mb-3"};function u(e,o,n,u,p,h){const f=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a._)("button",{onClick:o[0]||(o[0]=()=>h.handleLoginB())},"Login (Banque)"),(0,a.Wm)(f,{class:"btn btn-primary",to:"/register/bank"},{default:(0,a.w5)((()=>[(0,a.Uk)("Pas encore de compte ?")])),_:1}),(0,a._)("form",s,[(0,a._)("div",r,[i,(0,a.wy)((0,a._)("input",{type:"email",class:"form-control",id:"formEmail",placeholder:"name@example.com","onUpdate:modelValue":o[1]||(o[1]=e=>p.email=e)},null,512),[[l.nr,p.email]])]),(0,a._)("div",d,[m,(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",id:"formPassword",placeholder:"********","onUpdate:modelValue":o[2]||(o[2]=e=>p.password=e)},null,512),[[l.nr,p.password]])]),(0,a._)("div",c,[(0,a._)("button",{type:"submit",class:"btn btn-primary",onClick:o[3]||(o[3]=()=>h.handleLoginC())},"Login")])])])}n(7658);var p={name:"LoginView",data(){return{email:"",password:""}},methods:{handleLoginC(){let e={email:this.email,password:this.password};fetch(this.api_url+"auth/loginClient",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),null!=e.token?(localStorage.setItem("token",e.token),this.$router.push("/client")):alert("Login failed")}))},handleLoginB(){localStorage.setItem("token","123456789"),this.$router.push("/bank")}}},h=n(89);const f=(0,h.Z)(p,[["render",u]]);var b=f}}]);
//# sourceMappingURL=951.6f95726d.js.map