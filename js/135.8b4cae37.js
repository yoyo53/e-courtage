"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[135],{135:function(e,r,s){s.r(r),s.d(r,{default:function(){return z}});var l=s(3396),o=s(9242);const a=(0,l._)("h1",null,"This is a register page",-1),t={id:"registerForm"},n={class:"mb-3"},i=(0,l._)("label",{for:"formName",class:"form-label"},"Nom",-1),d={class:"mb-3"},f=(0,l._)("label",{for:"formFirstName",class:"form-label"},"Prénom",-1),m={class:"mb-3"},u=(0,l._)("label",{for:"formEmail",class:"form-label"},"Adresse Email",-1),c={class:"mb-3"},p=(0,l._)("label",{for:"formGenre",class:"form-label"},"Genre",-1),b=(0,l._)("option",{value:""},"Selectionnez votre genre",-1),h=(0,l._)("option",{value:"1"},"homme",-1),_=(0,l._)("option",{value:"2"},"femme",-1),y=(0,l._)("option",{value:"3"},"autre",-1),I=[b,h,_,y],w={class:"mb-3"},v=(0,l._)("label",{for:"formBirthDate",class:"form-label"},"Date de naissance",-1),g={class:"mb-3"},P=(0,l._)("label",{for:"formTelephone",class:"form-label"},"Telephone",-1),V={class:"mb-3"},U=(0,l._)("label",{for:"formCountry",class:"form-label"},"Pays",-1),q={class:"mb-3"},C=(0,l._)("label",{for:"formCity",class:"form-label"},"Ville",-1),k={class:"mb-3"},x=(0,l._)("label",{for:"formAddress",class:"form-label"},"Adresse",-1),D={class:"mb-3"},N=(0,l._)("label",{for:"formPassword",class:"form-label"},"Mot de passe",-1),R={class:"mb-3"},T=(0,l._)("label",{for:"formRePassword",class:"form-label"},"Confirmez le mot de passe",-1),A={class:"mb-3"};function S(e,r,s,b,h,_){return(0,l.wg)(),(0,l.iD)("div",null,[a,(0,l._)("form",t,[(0,l._)("div",n,[i,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formName","onUpdate:modelValue":r[0]||(r[0]=e=>h.userInfo.nom=e),required:""},null,512),[[o.nr,h.userInfo.nom]])]),(0,l._)("div",d,[f,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formFirstName","onUpdate:modelValue":r[1]||(r[1]=e=>h.userInfo.prenom=e),required:""},null,512),[[o.nr,h.userInfo.prenom]])]),(0,l._)("div",m,[u,(0,l.wy)((0,l._)("input",{type:"email",class:"form-control",id:"formEmail",placeholder:"name@example.com","onUpdate:modelValue":r[2]||(r[2]=e=>h.userInfo.email=e),required:""},null,512),[[o.nr,h.userInfo.email]])]),(0,l._)("div",c,[p,(0,l.wy)((0,l._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":r[3]||(r[3]=e=>h.userInfo.genre=e)},I,512),[[o.bM,h.userInfo.genre]])]),(0,l._)("div",w,[v,(0,l.wy)((0,l._)("input",{type:"date",class:"form-control",id:"formBirthDate","onUpdate:modelValue":r[4]||(r[4]=e=>h.userInfo.date_birth=e),required:""},null,512),[[o.nr,h.userInfo.date_birth]])]),(0,l._)("div",g,[P,(0,l.wy)((0,l._)("input",{type:"tel",class:"form-control",id:"formTelephone","onUpdate:modelValue":r[5]||(r[5]=e=>h.userInfo.tel=e),required:""},null,512),[[o.nr,h.userInfo.tel]])]),(0,l._)("div",V,[U,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formCountry","onUpdate:modelValue":r[6]||(r[6]=e=>h.userInfo.pays=e),required:""},null,512),[[o.nr,h.userInfo.pays]])]),(0,l._)("div",q,[C,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formCity","onUpdate:modelValue":r[7]||(r[7]=e=>h.userInfo.ville=e),required:""},null,512),[[o.nr,h.userInfo.ville]])]),(0,l._)("div",k,[x,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"formAddress","onUpdate:modelValue":r[8]||(r[8]=e=>h.userInfo.adresse=e),required:""},null,512),[[o.nr,h.userInfo.adresse]])]),(0,l._)("div",D,[N,(0,l.wy)((0,l._)("input",{type:"password",class:"form-control",id:"formPassword",placeholder:"********","onUpdate:modelValue":r[9]||(r[9]=e=>h.userInfo.password=e),required:""},null,512),[[o.nr,h.userInfo.password]])]),(0,l._)("div",R,[T,(0,l.wy)((0,l._)("input",{type:"password",class:"form-control",id:"formRePassword",placeholder:"********","onUpdate:modelValue":r[10]||(r[10]=e=>h.rePassword=e),required:""},null,512),[[o.nr,h.rePassword]])]),(0,l._)("div",A,[(0,l._)("button",{type:"submit",class:"btn btn-primary",onClick:r[11]||(r[11]=e=>_.handleRegister(e))},"Register")])])])}s(7658);var E={data(){return{userInfo:{nom:"",prenom:"",email:"",genre:"",date_birth:"",tel:"",pays:"",ville:"",adresse:"",password:""},rePassword:""}},methods:{handleRegister(e){""!=this.userInfo.nom&&""!=this.userInfo.prenom&&""!=this.userInfo.email&&""!=this.userInfo.genre&&""!=this.userInfo.date_birth&&""!=this.userInfo.tel&&""!=this.userInfo.pays&&""!=this.userInfo.ville&&""!=this.userInfo.adresse&&""!=this.userInfo.password?(e.preventDefault(),console.log(this.userInfo),this.userInfo.password===this.rePassword?fetch("https://e-courtage-back.fly.dev/auth/registerClient",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.userInfo)}).then((e=>e.json())).then((e=>{console.log(e),null!=e.id_client?(localStorage.setItem("token",e.token),this.$router.push("/login")):alert("Register failed")})):alert("Password not match")):alert("Please fill all the fields")}}},F=s(89);const j=(0,F.Z)(E,[["render",S]]);var z=j}}]);
//# sourceMappingURL=135.8b4cae37.js.map