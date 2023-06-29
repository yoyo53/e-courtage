"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[383],{1383:function(e,o,a){a.r(o),a.d(o,{default:function(){return V}});var r=a(3396),s=a(9242);const n={id:"registerMain"},l=(0,r._)("h1",null,"Inscription Banque",-1),t={id:"registerForm"},i={class:"mb-3"},d=(0,r._)("label",{for:"formName",class:"form-label"},"Nom de banque",-1),f={class:"mb-3"},m=(0,r._)("label",{for:"formName",class:"form-label"},"SIRET",-1),u={class:"mb-3"},c=(0,r._)("label",{for:"formEmail",class:"form-label"},"Adresse Email",-1),p={class:"mb-3"},h=(0,r._)("label",{for:"formTelephone",class:"form-label"},"Telephone",-1),b={class:"mb-3"},k=(0,r._)("label",{for:"formAddress",class:"form-label"},"Adresse",-1),_={class:"mb-3"},w=(0,r._)("label",{for:"formPassword",class:"form-label"},"Mot de passe",-1),I={class:"mb-3"},B=(0,r._)("label",{for:"formRePassword",class:"form-label"},"Confirmez le mot de passe",-1),y={class:"mb-3"},v={id:"registerLinks"};function g(e,o,a,g,q,P){const U=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",n,[l,(0,r._)("form",t,[(0,r._)("div",i,[d,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"formName","onUpdate:modelValue":o[0]||(o[0]=e=>q.BankInfo.nom_banque=e),required:""},null,512),[[s.nr,q.BankInfo.nom_banque]])]),(0,r._)("div",f,[m,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"formSiret","onUpdate:modelValue":o[1]||(o[1]=e=>q.BankInfo.siret=e),required:""},null,512),[[s.nr,q.BankInfo.siret]])]),(0,r._)("div",u,[c,(0,r.wy)((0,r._)("input",{type:"email",class:"form-control",id:"formEmail",placeholder:"name@example.com","onUpdate:modelValue":o[2]||(o[2]=e=>q.BankInfo.email=e),required:""},null,512),[[s.nr,q.BankInfo.email]])]),(0,r._)("div",p,[h,(0,r.wy)((0,r._)("input",{type:"tel",class:"form-control",id:"formTelephone","onUpdate:modelValue":o[3]||(o[3]=e=>q.BankInfo.tel=e),required:""},null,512),[[s.nr,q.BankInfo.tel]])]),(0,r._)("div",b,[k,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",id:"formAddress","onUpdate:modelValue":o[4]||(o[4]=e=>q.BankInfo.adresse=e),required:""},null,512),[[s.nr,q.BankInfo.adresse]])]),(0,r._)("div",_,[w,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",id:"formPassword",placeholder:"********","onUpdate:modelValue":o[5]||(o[5]=e=>q.BankInfo.password=e),required:""},null,512),[[s.nr,q.BankInfo.password]])]),(0,r._)("div",I,[B,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",id:"formRePassword",placeholder:"********","onUpdate:modelValue":o[6]||(o[6]=e=>q.rePassword=e),required:""},null,512),[[s.nr,q.rePassword]])]),(0,r._)("div",y,[(0,r._)("button",{type:"submit",class:"btn btn-primary",onClick:o[7]||(o[7]=e=>P.handleRegister(e))},"Inscription")])]),(0,r._)("div",v,[(0,r.Wm)(U,{to:"/login/bank"},{default:(0,r.w5)((()=>[(0,r.Uk)("Vous avez déjà un compte ?")])),_:1}),(0,r.Wm)(U,{to:"/register"},{default:(0,r.w5)((()=>[(0,r.Uk)("Vous vous inscrivez en tant que particulier ?")])),_:1}),(0,r.Wm)(U,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Retour à la page d'accueil")])),_:1})])])}a(7658);var q={data(){return{BankInfo:{nom_banque:"",siret:"",email:"",tel:"",adresse:"",password:"",pays:"France",ville:"Paris"},rePassword:""}},methods:{handleRegister(e){""!=this.BankInfo.nom&&""!=this.BankInfo.email&&""!=this.BankInfo.tel&&""!=this.BankInfo.adresse&&""!=this.BankInfo.password&&""!=this.BankInfo.siret?(e.preventDefault(),console.log(this.userInfo),this.BankInfo.password===this.rePassword?/^[0-9]{15}$/.test(this.BankInfo.siret)?alert("Siret is false"):fetch(this.api_url+"auth/registerBanque",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.BankInfo)}).then((e=>e.json())).then((e=>{console.log(e),null!=e.id_banque?(localStorage.setItem("token",e.token),this.$router.push("/login/bank")):this.$notify({title:"Erreur",text:"L'inscription a échoué",type:"warn"})})):alert("Password not match")):alert("Please fill all the fields")}}},P=a(89);const U=(0,P.Z)(q,[["render",g]]);var V=U}}]);
//# sourceMappingURL=383.8bfce464.js.map