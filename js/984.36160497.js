"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[984],{3984:function(e,o,a){a.r(o),a.d(o,{default:function(){return S}});var l=a(3396),r=a(9242);const n=e=>((0,l.dD)("data-v-4365e4ac"),e=e(),(0,l.Cn)(),e),s={id:"registerMain"},t=n((()=>(0,l._)("h1",null,"Inscription Banque",-1))),i={class:"mb-3"},d=n((()=>(0,l._)("label",{for:"formName",class:"form-label"},"Nom de banque",-1))),f={class:"mb-3"},m=n((()=>(0,l._)("label",{for:"formName",class:"form-label"},"SIRET",-1))),u={class:"mb-3"},c=n((()=>(0,l._)("label",{for:"formEmail",class:"form-label"},"Adresse Email",-1))),p={class:"mb-3"},b=n((()=>(0,l._)("label",{for:"formTelephone",class:"form-label"},"Telephone",-1))),_={class:"mb-3"},k=n((()=>(0,l._)("label",{for:"formCountry",class:"form-label"},"Pays",-1))),h={class:"mb-3"},y=n((()=>(0,l._)("label",{for:"formCity",class:"form-label"},"Ville",-1))),w={class:"mb-3"},I=n((()=>(0,l._)("label",{for:"formAddress",class:"form-label"},"Adresse",-1))),B={class:"mb-3"},v=n((()=>(0,l._)("label",{for:"formPassword",class:"form-label"},"Mot de passe",-1))),q={class:"mb-3"},g=n((()=>(0,l._)("label",{for:"formRePassword",class:"form-label"},"Confirmez le mot de passe",-1))),P=n((()=>(0,l._)("div",{class:"mb-3"},[(0,l._)("button",{type:"submit",class:"btn btn-primary"},"Inscription")],-1))),U={id:"registerLinks"};function V(e,o,a,n,V,C){const x=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",s,[t,(0,l._)("form",{id:"registerForm",onSubmit:o[9]||(o[9]=(...e)=>C.handleRegister&&C.handleRegister(...e))},[(0,l._)("div",i,[d,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formName","onUpdate:modelValue":o[0]||(o[0]=e=>V.BankInfo.nom_banque=e),required:""},null,512),[[r.nr,V.BankInfo.nom_banque]])]),(0,l._)("div",f,[m,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formSiret","onUpdate:modelValue":o[1]||(o[1]=e=>V.BankInfo.siret=e),required:""},null,512),[[r.nr,V.BankInfo.siret]])]),(0,l._)("div",u,[c,(0,l.wy)((0,l._)("input",{type:"email",class:"form-control",id:"formEmail",placeholder:"name@example.com","onUpdate:modelValue":o[2]||(o[2]=e=>V.BankInfo.email=e),required:""},null,512),[[r.nr,V.BankInfo.email]])]),(0,l._)("div",p,[b,(0,l.wy)((0,l._)("input",{type:"tel",class:"form-control",id:"formTelephone","onUpdate:modelValue":o[3]||(o[3]=e=>V.BankInfo.tel=e),required:""},null,512),[[r.nr,V.BankInfo.tel]])]),(0,l._)("div",_,[k,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formCountry","onUpdate:modelValue":o[4]||(o[4]=e=>V.BankInfo.pays=e),required:""},null,512),[[r.nr,V.BankInfo.pays]])]),(0,l._)("div",h,[y,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formCity","onUpdate:modelValue":o[5]||(o[5]=e=>V.BankInfo.ville=e),required:""},null,512),[[r.nr,V.BankInfo.ville]])]),(0,l._)("div",w,[I,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formAddress","onUpdate:modelValue":o[6]||(o[6]=e=>V.BankInfo.adresse=e),required:""},null,512),[[r.nr,V.BankInfo.adresse]])]),(0,l._)("div",B,[v,(0,l.wy)((0,l._)("input",{type:"password",class:"form-control",id:"formPassword",placeholder:"********","onUpdate:modelValue":o[7]||(o[7]=e=>V.BankInfo.password=e),required:""},null,512),[[r.nr,V.BankInfo.password]])]),(0,l._)("div",q,[g,(0,l.wy)((0,l._)("input",{type:"password",class:"form-control",id:"formRePassword",placeholder:"********","onUpdate:modelValue":o[8]||(o[8]=e=>V.rePassword=e),required:""},null,512),[[r.nr,V.rePassword]])]),P],32),(0,l._)("div",U,[(0,l.Wm)(x,{to:"/login/bank"},{default:(0,l.w5)((()=>[(0,l.Uk)("Vous avez déjà un compte ?")])),_:1}),(0,l.Wm)(x,{to:"/register/client"},{default:(0,l.w5)((()=>[(0,l.Uk)("Vous vous inscrivez en tant que particulier ?")])),_:1}),(0,l.Wm)(x,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Retour à la page d'accueil")])),_:1})])])}a(7658);var C={data(){return{BankInfo:{nom_banque:"",siret:"",email:"",tel:"",adresse:"",password:"",pays:"",ville:""},rePassword:""}},methods:{handleRegister(e){""!=this.BankInfo.nom&&""!=this.BankInfo.email&&""!=this.BankInfo.tel&&""!=this.BankInfo.adresse&&""!=this.BankInfo.password&&""!=this.BankInfo.siret?(e.preventDefault(),console.log(this.userInfo),this.BankInfo.password===this.rePassword?/^[0-9]{15}$/.test(this.BankInfo.siret)?alert("Siret is false"):fetch(this.api_url+"auth/registerBanque",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.BankInfo)}).then((e=>e.json())).then((e=>{console.log(e),null!=e.id_banque?(localStorage.setItem("token",e.token),this.$router.push("/login/bank")):this.$notify({title:"Erreur",text:"L'inscription a échoué",type:"warn"})})):alert("Password not match")):alert("Please fill all the fields")}}},x=a(89);const R=(0,x.Z)(C,[["render",V],["__scopeId","data-v-4365e4ac"]]);var S=R}}]);
//# sourceMappingURL=984.36160497.js.map