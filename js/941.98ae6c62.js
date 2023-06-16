(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[941],{7045:function(e,n,t){var o=t(6339),a=t(3070);e.exports=function(e,n,t){return t.get&&o(t.get,n,{getter:!0}),t.set&&o(t.set,n,{setter:!0}),a.f(e,n,t)}},2062:function(e,n,t){"use strict";var o=t(9781),a=t(1702),l=t(7045),i=URLSearchParams.prototype,s=a(i.forEach);o&&!("size"in i)&&l(i,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3843:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var o=t(3396),a=t(9242);const l={key:0,id:"modal-form",ref:"modalForm"},i=(0,o._)("h2",null,"Nouveau document",-1),s={class:"mb-3"},r=(0,o._)("label",{for:"formFile",class:"form-label"},"Votre fichier",-1),u={class:"mb-3"},d=(0,o._)("label",{for:"formNameTitle",class:"form-label"},"Nom du fichier",-1);function m(e,n,t,m,c,p){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{type:"none",id:"openNFButton",onClick:n[0]||(n[0]=()=>p.handleDisplay())},"NOUVEAU DOCUMENT"),c.displayForm?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>p.handleDisplay())},"X"),i,(0,o._)("form",null,[(0,o._)("div",s,[r,(0,o._)("input",{class:"form-control",type:"file",id:"formFile",onChange:n[2]||(n[2]=e=>p.onFilesChange(e)),required:""},null,32)]),(0,o._)("div",u,[d,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formNameTitle","onUpdate:modelValue":n[3]||(n[3]=e=>c.name=e),required:""},null,512),[[a.nr,c.name]])]),(0,o._)("button",{type:"submit",class:"btn btn-success",onClick:n[4]||(n[4]=e=>p.handleSubmit(e))},"Envoyer"),(0,o._)("button",{type:"none",class:"btn btn-warning",onClick:n[5]||(n[5]=()=>p.handleDisplay())},"Annuler")])],512)):(0,o.kq)("",!0)])}t(7658);var c={name:"ClientNewFileForm",data(){return{name:"",file:null,displayForm:!1}},methods:{onFilesChange(e){this.file=e.target.files[0]},handleSubmit(e){if(""==this.name||null==this.file)return;e.preventDefault();let n=new FormData;n.append("file",this.file),n.append("nom_document",this.name);let t=new XMLHttpRequest;t.open("POST","https://e-courtage-back.fly.dev/document/addDocument"),t.setRequestHeader("Authorization",localStorage.getItem("token")),t.send(n),t.onload=()=>{if(200==t.status){let e=JSON.parse(t.response);console.log("File sent"),console.log(e.id_document),this.$parent.userFiles.push({nom_document:this.name+"."+this.file.name.split(".").pop(),id_document:e.id_document}),this.name="",this.file=null,this.displayForm=!1}else console.log("Error while sending file")}},handleDisplay(){console.log("display"),this.displayForm=!this.displayForm}}},p=t(89);const f=(0,p.Z)(c,[["render",m]]);var h=f},7941:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _t}});var o=t(3396),a=t(9242);const l={id:"main-body"},i={id:"body-left"},s={id:"profile-overview-area"},r=(0,o._)("h2",null,"Votre profil :",-1),u={id:"profile-list",class:"section-list"},d={class:"profile-item"},m=(0,o._)("span",null,"Nom :",-1),c={class:"profile-item"},p=(0,o._)("span",null,"Prénom :",-1),f={class:"profile-item"},h=(0,o._)("span",null,"Date de Naissance :",-1),b={class:"profile-item"},_=(0,o._)("span",null,"Numéro de téléphone :",-1),v={class:"profile-item"},w=(0,o._)("span",null,"Adresse mail :",-1),D={class:"profile-item"},g=(0,o._)("span",null,"Profession :",-1),y={class:"profile-item profile-buttons"},C={id:"notifications-view-area"},k=(0,o._)("h2",null,"Vos notifications :",-1),A={id:"notifications-list",class:"section-list"},U={id:"body-right"},z={id:"demands-overview-area"},V=(0,o._)("h2",null,"Liste de vos demandes en cours :",-1),F={id:"demands-list",class:"section-list"},j={id:"add-demand-area"};function E(e,n,t,E,x,q){const S=(0,o.up)("HeaderComponent"),T=(0,o.up)("client-file-list"),N=(0,o.up)("router-link"),R=(0,o.up)("client-notification-list-element"),M=(0,o.up)("client-demands-list-element"),L=(0,o.up)("ClientDemandForm");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(S),(0,o._)("div",l,[(0,o._)("div",i,[(0,o._)("div",s,[r,(0,o._)("ul",u,[(0,o._)("li",d,[m,(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>x.userData.name=e)},null,512),[[a.nr,x.userData.name]])]),(0,o._)("li",c,[p,(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>x.userData.firstname=e)},null,512),[[a.nr,x.userData.firstname]])]),(0,o._)("li",f,[h,(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"date","onUpdate:modelValue":n[2]||(n[2]=e=>x.userData.birthdate=e)},null,512),[[a.nr,x.userData.birthdate]])]),(0,o._)("li",b,[_,(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"tel","onUpdate:modelValue":n[3]||(n[3]=e=>x.userData.phone=e)},null,512),[[a.nr,x.userData.phone]])]),(0,o._)("li",v,[w,(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":n[4]||(n[4]=e=>x.userData.email=e)},null,512),[[a.nr,x.userData.email]])]),(0,o._)("li",D,[g,(0,o.Uk)(),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=e=>x.userData.occupation=e)},null,512),[[a.nr,x.userData.occupation]])]),(0,o._)("li",y,[(0,o.Wm)(T),(0,o.Wm)(N,{class:"btn btn-primary",to:"/client/profile"},{default:(0,o.w5)((()=>[(0,o.Uk)("Votre profil")])),_:1})])])]),(0,o._)("div",C,[k,(0,o._)("ul",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.userNotifications,(e=>((0,o.wg)(),(0,o.j4)(R,{key:e.id,notification:e},null,8,["notification"])))),128))])])]),(0,o._)("div",U,[(0,o._)("div",z,[V,(0,o._)("ul",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.userDemands,(e=>((0,o.wg)(),(0,o.j4)(M,{key:e.id,demand:e},null,8,["demand"])))),128))])]),(0,o._)("div",j,[(0,o.Wm)(L,{id:"demand-form"})])])])])}const x={key:0,id:"modal-form",ref:"modalForm"},q=(0,o._)("h2",null,"Nouvelle demande",-1),S={id:"form"},T={class:"mb-3"},N=(0,o._)("label",{for:"formSubject",class:"form-label"},"Sujet",-1),R={class:"mb-3"},M=(0,o._)("label",{for:"formNature",class:"form-label"},"Nature du projet ?",-1),L=(0,o.uE)('<option value="">Choisissez la nature de votre projet</option><option value="Achat">Achat</option><option value="Construction">Construction</option><option value="Travaux">Travaux</option><option value="Autre">Autre</option>',5),$=[L],I={class:"mb-3"},O=(0,o._)("label",{for:"formType",class:"form-label"},"Type de bien ?",-1),H=(0,o.uE)('<option value="">Choisissez le type du bien</option><option value="Maison">Maison</option><option value="Appartement">Appartement</option><option value="Terrain">Terrain</option><option value="Autre">Autre</option>',5),P=[H],B={class:"mb-3"},Z=(0,o._)("label",{for:"formAge",class:"form-label"},"Age du bien ?",-1),G=(0,o._)("option",{value:""},"Choisissez l'âge du bien",-1),W=(0,o._)("option",{value:"Ancien"},"Ancien",-1),X=(0,o._)("option",{value:"Neuf"},"Neuf",-1),K=(0,o._)("option",{value:"Vente sur plan"},"Vente sur plan",-1),Y=[G,W,X,K],J={class:"mb-3"},Q=(0,o._)("label",{for:"formPurpose",class:"form-label"},"Usage du bien ?",-1),ee=(0,o.uE)('<option value="">Choisissez l&#39;usage du bien</option><option value="Résidence principale">Résidence principale</option><option value="Résidence secondaire">Résidence secondaire</option><option value="Investissement locatif">Investissement locatif</option><option value="Usage professionnel">Usage professionnel</option><option value="Usage mixte">Usage mixte</option><option value="Autre">Autre</option>',7),ne=[ee],te={class:"mb-3"},oe=(0,o._)("label",{for:"formResearchStatus",class:"form-label"},"Ou en êtes vous dans votre recherche ?",-1),ae=(0,o.uE)('<option value="">Renseigner où vous en êtes dans votre recherche</option><option value="En recherche">En recherche</option><option value="Vous vous préparez à faire une offre">Vous vous préparez à faire une offre</option><option value="Vous avez déjà fait une offre">Vous avez déjà fait une offre</option><option value="Vous pensez bientôt signer compromi">Vous pensez bientôt signer compromis</option><option value="Vous avez déjà signé un compromis">Vous avez déjà signé un compromis</option><option value="Autre">Autre</option>',7),le=[ae],ie={class:"mb-3"},se=(0,o._)("label",{for:"formCountry",class:"form-label"},"Dans quel pays se situe le bien ?",-1),re={class:"mb-3"},ue=(0,o._)("label",{for:"formCity",class:"form-label"},"Dans quelle ville se situe le bien ?",-1),de={class:"mb-3"},me=(0,o._)("label",{for:"formAcquisitionAmount",class:"form-label"},"Montant estimé de l'acquisition ?",-1),ce={class:"mb-3"},pe=(0,o._)("label",{for:"formTravauxAmount",class:"form-label"},"Montant estimé des travaux ?",-1),fe={class:"mb-3"},he=(0,o._)("label",{for:"formNotaireAmount",class:"form-label"},"Frais de notaire ? (optionnel)",-1),be={class:"mb-3"},_e=(0,o._)("label",{for:"formAloneGroup",class:"form-label"},"Comment empruntez-vous ?",-1),ve=(0,o._)("option",{value:""},"Vous empruntez seul ? En groupe ? ",-1),we=(0,o._)("option",{value:"1"},"Seul",-1),De=(0,o._)("option",{value:"2"},"Avec un co-emprunteur",-1),ge=(0,o._)("option",{value:"3"},"Autre",-1),ye=[ve,we,De,ge],Ce={class:"mb-3"},ke=(0,o._)("label",{for:"formApport",class:"form-label"},"Votre apport personnel ?",-1),Ae={class:"mb-3"},Ue=(0,o._)("label",{for:"formComment",class:"form-label"},"Commentaires sur le projet ? (optionnel)",-1),ze={class:"mb-3"},Ve=(0,o._)("label",{for:"formFileMultiple",class:"form-label"},"Vos Fichiers",-1);function Fe(e,n,t,l,i,s){const r=(0,o.up)("ClientFileListCheckableElement"),u=(0,o.up)("client-new-file-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{id:"openButton",onClick:n[0]||(n[0]=()=>s.handleDisplay())},"NOUVELLE DEMANDE"),i.displayForm?((0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>s.handleDisplay())},"X"),q,(0,o._)("form",S,[(0,o._)("div",T,[N,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formSubject","onUpdate:modelValue":n[2]||(n[2]=e=>i.newDemand.sujet=e),placeholder:"Trouvez un titre pour votre demande",required:""},null,512),[[a.nr,i.newDemand.sujet]])]),(0,o._)("div",R,[M,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formNature","onUpdate:modelValue":n[3]||(n[3]=e=>i.newDemand.nature=e),required:""},$,512),[[a.bM,i.newDemand.nature]])]),(0,o._)("div",I,[O,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formType","onUpdate:modelValue":n[4]||(n[4]=e=>i.newDemand.type=e),required:""},P,512),[[a.bM,i.newDemand.type]])]),(0,o._)("div",B,[Z,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAge","onUpdate:modelValue":n[5]||(n[5]=e=>i.newDemand.age=e),required:""},Y,512),[[a.bM,i.newDemand.age]])]),(0,o._)("div",J,[Q,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formPurpose","onUpdate:modelValue":n[6]||(n[6]=e=>i.newDemand.usage=e),required:""},ne,512),[[a.bM,i.newDemand.usage]])]),(0,o._)("div",te,[oe,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formResearchStatus","onUpdate:modelValue":n[7]||(n[7]=e=>i.newDemand.status_recherche=e),required:""},le,512),[[a.bM,i.newDemand.status_recherche]])]),(0,o._)("div",ie,[se,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCountry","onUpdate:modelValue":n[8]||(n[8]=e=>i.newDemand.pays=e),placeholder:"Renseignez le pays où se situe le bien",required:""},null,512),[[a.nr,i.newDemand.pays]])]),(0,o._)("div",re,[ue,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCity","onUpdate:modelValue":n[9]||(n[9]=e=>i.newDemand.ville=e),placeholder:"Renseignez la ville où se situe le bien",required:""},null,512),[[a.nr,i.newDemand.ville]])]),(0,o._)("div",de,[me,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formAcquisitionAmount","onUpdate:modelValue":n[10]||(n[10]=e=>i.newDemand.montant_bien=e),placeholder:"Renseignez la valeur estimée du bien",required:""},null,512),[[a.nr,i.newDemand.montant_bien]])]),(0,o._)("div",ce,[pe,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formTravauxAmount","onUpdate:modelValue":n[11]||(n[11]=e=>i.newDemand.montant_travaux=e),placeholder:"Renseignez la valeur estimée des travaux",required:""},null,512),[[a.nr,i.newDemand.montant_travaux]])]),(0,o._)("div",fe,[he,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formNotaireAmount","onUpdate:modelValue":n[12]||(n[12]=e=>i.newDemand.frais_notaire=e),placeholder:"Renseignez les frais de notaires, si il y a"},null,512),[[a.nr,i.newDemand.frais_notaire]])]),(0,o._)("div",be,[_e,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAloneGroup","onUpdate:modelValue":n[13]||(n[13]=e=>i.newDemand.accompagnement=e),required:""},ye,512),[[a.bM,i.newDemand.accompagnement]])]),(0,o._)("div",Ce,[ke,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formApport","onUpdate:modelValue":n[14]||(n[14]=e=>i.newDemand.apport_personnel=e),placeholder:"Renseignez votre apport dans l'acquisition",required:""},null,512),[[a.nr,i.newDemand.apport_personnel]])]),(0,o._)("div",Ae,[Ue,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formComment","onUpdate:modelValue":n[15]||(n[15]=e=>i.newDemand.commentaire=e),placeholder:"Vous pouvez ajouter tout détail que vous pensez significant"},null,512),[[a.nr,i.newDemand.commentaire]])]),(0,o._)("div",ze,[Ve,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.userFiles,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e.id_document,file:e},null,8,["file"])))),128))]),(0,o.Wm)(u)]),(0,o._)("button",{type:"submit",class:"btn btn-primary",onClick:n[16]||(n[16]=e=>s.handleSubmit(e))},"Envoyer")])],512)):(0,o.kq)("",!0)])}t(7658);var je=t(7139);const Ee=["id","name"],xe=["for"],qe=(0,o._)("br",null,null,-1);function Se(e,n,t,a,l,i){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("input",{type:"checkbox",id:t.file.id_document,ref:t.file.id_document,name:t.file.id,value:"Bike",onChange:n[0]||(n[0]=e=>i.handleAddFile(e))},null,40,Ee),(0,o._)("label",{for:t.file.id},(0,je.zw)(t.file.nom_document),9,xe),qe])}var Te={name:"ClientFileListCheckableElement",props:{file:{type:Object,required:!0}},methods:{handleAddFile(e){e.target.checked?this.$parent.newDemand.files.push(this.file.id_document):this.$parent.newDemand.files=this.$parent.newDemand.files.filter((e=>e!==this.file.id_document)),console.log(this.$parent.newDemand.files)}},updated(){void 0==this.$parent.newDemand.files&&(this.$parent.newDemand.files=[]),this.$parent.newDemand.files.includes(this.file.id_document)?this.$refs[this.file.id_document].checked=!0:this.$refs[this.file.id_document].checked=!1},mounted(){void 0==this.$parent.newDemand.files&&(this.$parent.newDemand.files=[]),this.$parent.newDemand.files.includes(this.file.id_document)?this.$refs[this.file.id_document].checked=!0:this.$refs[this.file.id_document].checked=!1}},Ne=t(89);const Re=(0,Ne.Z)(Te,[["render",Se]]);var Me=Re,Le=t(3843),$e={name:"ClientDemandForm",data(){return{newDemand:{sujet:"",nature:"",type:"",age:"",usage:"",status_recherche:"",pays:"",ville:"",montant_bien:"",montant_travaux:"",frais_notaire:"",accompagnement:"",apport_personnel:"",commentaire:"",files:[]},displayForm:!1,userFiles:[]}},methods:{handleSubmit(e){""!=this.newDemand.sujet&&""!=this.newDemand.nature&&""!=this.newDemand.type&&""!=this.newDemand.age&&""!=this.newDemand.usage&&""!=this.newDemand.status_recherche&&""!=this.newDemand.pays&&""!=this.newDemand.montant_bien&&""!=this.newDemand.aloneGroup&&""!=this.newDemand.apport_personnel?(e.preventDefault(),console.log(localStorage.getItem("token")),fetch("https://e-courtage-back.fly.dev/demande_client/createDemande",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.newDemand)}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e);let n=this.newDemand;n.id_demande=e.id_demande,this.$parent.userDemands.push(this.newDemand),console.log(this.$parent.userDemands),this.newDemand={sujet:"",nature:"",type:"",age:"",usage:"",status_recherche:"",pays:"",ville:"",montant_bien:"",montant_travaux:"",frais_notaire:"",accompagnement:"",apport_personnel:"",commentaire:"",files:[]},this.displayForm=!1})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))):alert("Veuillez remplir tous les champs obligatoires")},handleDisplay(){this.displayForm=!this.displayForm}},components:{ClientFileListCheckableElement:Me,ClientNewFileForm:Le.Z},mounted(){fetch("https://e-courtage-back.fly.dev/document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.userFiles=e})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))}};const Ie=(0,Ne.Z)($e,[["render",Fe]]);var Oe=Ie,He=t(3216);const Pe={id:"notificationListElement"};function Be(e,n,t,a,l,i){return(0,o.wg)(),(0,o.iD)("div",Pe,[(0,o._)("span",null,(0,je.zw)(t.notification.demand),1),(0,o._)("span",null,(0,je.zw)(t.notification.bank),1)])}var Ze={name:"ClientNotificationListElement",props:{notification:{type:Object,required:!0}}};const Ge=(0,Ne.Z)(Ze,[["render",Be]]);var We=Ge;const Xe={id:"demandListElement"},Ke={class:"demandRow"},Ye={class:"demandRow"};function Je(e,n,t,a,l,i){const s=(0,o.up)("client-demand-detail");return(0,o.wg)(),(0,o.iD)("div",Xe,[(0,o._)("h3",null,(0,je.zw)(t.demand.sujet),1),(0,o._)("div",Ke,[(0,o._)("span",null," Acquisition : "+(0,je.zw)(t.demand.montant_bien)+" €",1),(0,o.Uk)(),(0,o._)("span",null," Apport : "+(0,je.zw)(t.demand.apport_personnel)+" €",1)]),(0,o._)("div",Ye,[(0,o._)("span",null,(0,je.zw)(t.demand.commentaire),1)]),(0,o.Wm)(s,{propDemand:t.demand},null,8,["propDemand"])])}const Qe={key:0,id:"modal-form",ref:"modalForm"},en={id:"form"},nn={class:"mb-3"},tn=(0,o._)("label",{for:"formSubject",class:"form-label"},"Sujet",-1),on={class:"mb-3"},an=(0,o._)("label",{for:"formNature",class:"form-label"},"Nature du projet ?",-1),ln=(0,o.uE)('<option value="">Choisissez la nature de votre projet</option><option value="Achat">Achat</option><option value="Construction">Construction</option><option value="Travaux">Travaux</option><option value="Autre">Autre</option>',5),sn=[ln],rn={class:"mb-3"},un=(0,o._)("label",{for:"formType",class:"form-label"},"Type de bien ?",-1),dn=(0,o.uE)('<option value="">Choisissez le type du bien</option><option value="Maison">Maison</option><option value="Appartement">Appartement</option><option value="Terrain">Terrain</option><option value="Autre">Autre</option>',5),mn=[dn],cn={class:"mb-3"},pn=(0,o._)("label",{for:"formAge",class:"form-label"},"Age du bien ?",-1),fn=(0,o._)("option",{value:""},"Choisissez l'âge du bien",-1),hn=(0,o._)("option",{value:"Ancien"},"Ancien",-1),bn=(0,o._)("option",{value:"Neuf"},"Neuf",-1),_n=(0,o._)("option",{value:"Vente sur plan"},"Vente sur plan",-1),vn=[fn,hn,bn,_n],wn={class:"mb-3"},Dn=(0,o._)("label",{for:"formPurpose",class:"form-label"},"Usage du bien ?",-1),gn=(0,o.uE)('<option value="">Choisissez l&#39;usage du bien</option><option value="Résidence principale">Résidence principale</option><option value="Résidence secondaire">Résidence secondaire</option><option value="Investissement locatif">Investissement locatif</option><option value="Usage professionnel">Usage professionnel</option><option value="Usage mixte">Usage mixte</option><option value="Autre">Autre</option>',7),yn=[gn],Cn={class:"mb-3"},kn=(0,o._)("label",{for:"formResearchStatus",class:"form-label"},"Ou en êtes vous dans votre recherche ?",-1),An=(0,o.uE)('<option value="">Renseigner où vous en êtes dans votre recherche</option><option value="En recherche">En recherche</option><option value="Vous vous préparez à faire une offre">Vous vous préparez à faire une offre</option><option value="Vous avez déjà fait une offre">Vous avez déjà fait une offre</option><option value="Vous pensez bientôt signer compromi">Vous pensez bientôt signer compromis</option><option value="Vous avez déjà signé un compromis">Vous avez déjà signé un compromis</option><option value="Autre">Autre</option>',7),Un=[An],zn={class:"mb-3"},Vn=(0,o._)("label",{for:"formCountry",class:"form-label"},"Dans quel pays se situe le bien ?",-1),Fn={class:"mb-3"},jn=(0,o._)("label",{for:"formCity",class:"form-label"},"Dans quelle ville se situe le bien ?",-1),En={class:"mb-3"},xn=(0,o._)("label",{for:"formAcquisitionAmount",class:"form-label"},"Montant estimé de l'acquisition ?",-1),qn={class:"mb-3"},Sn=(0,o._)("label",{for:"formTravauxAmount",class:"form-label"},"Montant estimé des travaux ?",-1),Tn={class:"mb-3"},Nn=(0,o._)("label",{for:"formNotaireAmount",class:"form-label"},"Frais de notaire ? (optionnel)",-1),Rn={class:"mb-3"},Mn=(0,o._)("label",{for:"formAloneGroup",class:"form-label"},"Comment empruntez-vous ?",-1),Ln=(0,o._)("option",{value:""},"Vous empruntez seul ? En groupe ? ",-1),$n=(0,o._)("option",{value:"1"},"Seul",-1),In=(0,o._)("option",{value:"2"},"Avec un co-emprunteur",-1),On=(0,o._)("option",{value:"3"},"Autre",-1),Hn=[Ln,$n,In,On],Pn={class:"mb-3"},Bn=(0,o._)("label",{for:"formApport",class:"form-label"},"Votre apport personnel ?",-1),Zn={class:"mb-3"},Gn=(0,o._)("label",{for:"formComment",class:"form-label"},"Commentaires sur le projet ? (optionnel)",-1),Wn={class:"mb-3"},Xn=(0,o._)("label",{for:"formFileMultiple",class:"form-label"},"Vos Fichiers",-1);function Kn(e,n,t,l,i,s){const r=(0,o.up)("ClientFileListCheckableElement"),u=(0,o.up)("client-new-file-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{id:"detailButton",onClick:n[0]||(n[0]=()=>s.handleDisplay())},"Show Detail"),i.displayDetail?((0,o.wg)(),(0,o.iD)("div",Qe,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>s.handleDisplay())},"X"),(0,o._)("h2",null,"Détails de la demande "+(0,je.zw)(i.newDemand.subject),1),(0,o._)("form",en,[(0,o._)("div",nn,[tn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formSubject","onUpdate:modelValue":n[2]||(n[2]=e=>i.newDemand.sujet=e),placeholder:"Trouvez un titre pour votre demande",required:""},null,512),[[a.nr,i.newDemand.sujet]])]),(0,o._)("div",on,[an,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formNature","onUpdate:modelValue":n[3]||(n[3]=e=>i.newDemand.nature=e),required:""},sn,512),[[a.bM,i.newDemand.nature]])]),(0,o._)("div",rn,[un,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formType","onUpdate:modelValue":n[4]||(n[4]=e=>i.newDemand.type=e),required:""},mn,512),[[a.bM,i.newDemand.type]])]),(0,o._)("div",cn,[pn,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAge","onUpdate:modelValue":n[5]||(n[5]=e=>i.newDemand.age=e),required:""},vn,512),[[a.bM,i.newDemand.age]])]),(0,o._)("div",wn,[Dn,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formPurpose","onUpdate:modelValue":n[6]||(n[6]=e=>i.newDemand.usage=e),required:""},yn,512),[[a.bM,i.newDemand.usage]])]),(0,o._)("div",Cn,[kn,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formResearchStatus","onUpdate:modelValue":n[7]||(n[7]=e=>i.newDemand.status_recherche=e),required:""},Un,512),[[a.bM,i.newDemand.status_recherche]])]),(0,o._)("div",zn,[Vn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCountry","onUpdate:modelValue":n[8]||(n[8]=e=>i.newDemand.pays=e),placeholder:"Renseignez le pays où se situe le bien",required:""},null,512),[[a.nr,i.newDemand.pays]])]),(0,o._)("div",Fn,[jn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCity","onUpdate:modelValue":n[9]||(n[9]=e=>i.newDemand.ville=e),placeholder:"Renseignez la ville où se situe le bien",required:""},null,512),[[a.nr,i.newDemand.ville]])]),(0,o._)("div",En,[xn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formAcquisitionAmount","onUpdate:modelValue":n[10]||(n[10]=e=>i.newDemand.montant_bien=e),placeholder:"Renseignez la valeur estimée du bien",required:""},null,512),[[a.nr,i.newDemand.montant_bien]])]),(0,o._)("div",qn,[Sn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formTravauxAmount","onUpdate:modelValue":n[11]||(n[11]=e=>i.newDemand.montant_travaux=e),placeholder:"Renseignez la valeur estimée des travaux",required:""},null,512),[[a.nr,i.newDemand.montant_travaux]])]),(0,o._)("div",Tn,[Nn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formNotaireAmount","onUpdate:modelValue":n[12]||(n[12]=e=>i.newDemand.frais_notaire=e),placeholder:"Renseignez les frais de notaires, si il y a"},null,512),[[a.nr,i.newDemand.frais_notaire]])]),(0,o._)("div",Rn,[Mn,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAloneGroup","onUpdate:modelValue":n[13]||(n[13]=e=>i.newDemand.accompagnement=e),required:""},Hn,512),[[a.bM,i.newDemand.accompagnement]])]),(0,o._)("div",Pn,[Bn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formApport","onUpdate:modelValue":n[14]||(n[14]=e=>i.newDemand.apport_personnel=e),placeholder:"Renseignez votre apport dans l'acquisition",required:""},null,512),[[a.nr,i.newDemand.apport_personnel]])]),(0,o._)("div",Zn,[Gn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formComment","onUpdate:modelValue":n[15]||(n[15]=e=>i.newDemand.commentaire=e),placeholder:"Vous pouvez ajouter tout détail que vous pensez significant"},null,512),[[a.nr,i.newDemand.commentaire]])]),(0,o._)("div",Wn,[Xn,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.userFiles,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e.id_document,file:e},null,8,["file"])))),128))]),(0,o.Wm)(u)]),(0,o._)("button",{type:"submit",class:"btn btn-primary",onClick:n[16]||(n[16]=e=>s.handleSubmit(e))},"Envoyer"),(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:n[17]||(n[17]=e=>s.handleDelete(e))},"Supprimer")])],512)):(0,o.kq)("",!0)])}var Yn={name:"ClientDemandDetail",components:{ClientFileListCheckableElement:Me,ClientNewFileForm:Le.Z},props:{propDemand:{type:Object,required:!0}},data(){return{newDemand:{},displayDetail:!1,userFiles:[]}},methods:{handleSubmit(e){""!=this.newDemand.subject&&""!=this.newDemand.nature&&""!=this.newDemand.type&&""!=this.newDemand.age&&""!=this.newDemand.usage&&""!=this.newDemand.researchStatus&&""!=this.newDemand.country&&""!=this.newDemand.city&&""!=this.newDemand.acquisitionAmount&&""!=this.newDemand.aloneGroup&&""!=this.newDemand.apport&&(e.preventDefault(),fetch("https://e-courtage-back.fly.dev/demande_client/updateDemande/"+this.newDemand.id_demande,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.newDemand)}).then((e=>{if(e.ok)return e.json();throw new Error("Erreur lors de la mise à jour de la demande")})).then((e=>{console.log(e),this.displayDetail=!1})).catch((e=>{console.log(e),alert(e.message)})))},handleDelete(){fetch("https://e-courtage-back.fly.dev/demande_client/deleteDemande/"+this.newDemand.id_demande,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Erreur lors de la suppression de la demande")})).then((e=>{console.log(e),this.$parent.$parent.userDemands=this.$parent.$parent.userDemands.filter((e=>e.id_demande!=this.newDemand.id_demande)),this.displayDetail=!1})).catch((e=>{console.log(e),alert(e.message)}))},handleDisplay(){this.displayDetail=!this.displayDetail}},mounted(){fetch("https://e-courtage-back.fly.dev/document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.userFiles=e,this.newDemand=this.propDemand})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))}};const Jn=(0,Ne.Z)(Yn,[["render",Kn]]);var Qn=Jn,et={components:{ClientDemandDetail:Qn},name:"ClientDemandsListElement",props:{demand:{type:Object,required:!0}},methods:{handleDisplayDetail(){alert("WIP")}}};const nt=(0,Ne.Z)(et,[["render",Je]]);var tt=nt;const ot={key:0,id:"modal-list"},at=(0,o._)("h2",{style:{"margin-bottom":"30px"}},"Vos fichiers",-1),lt={class:"list-group"},it={class:"fileRow-text"},st={class:"fileRow-buttons"},rt=["onClick"],ut=["onClick"],dt=["onClick"];function mt(e,n,t,a,l,i){const s=(0,o.up)("client-new-file-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{class:"btn btn-primary",onClick:n[0]||(n[0]=()=>i.handleDisplay())},"Vos fichiers"),l.display?((0,o.wg)(),(0,o.iD)("div",ot,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>i.handleDisplay())},"X"),(0,o._)("div",null,[at,(0,o._)("ul",lt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.userFiles,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"fileRow list-group-item",key:e.name},[(0,o._)("div",it,(0,je.zw)(e.id_document)+" - "+(0,je.zw)(e.nom_document),1),(0,o._)("div",st,[(0,o._)("button",{class:"btn btn-success fileRowButton",onClick:()=>i.handleDownload(e.id_document,e.nom_document)},"Télécharger",8,rt),(0,o._)("button",{class:"btn btn-light fileRowButton",onClick:()=>i.handleUpdate(e.id_document)},"Remplacer",8,ut),(0,o._)("button",{class:"btn btn-danger fileRowButton",onClick:()=>i.handleDelete(e.id_document)},"Supprimer",8,dt)])])))),128))])]),(0,o.Wm)(s)])):(0,o.kq)("",!0)])}t(2062);var ct={components:{ClientNewFileForm:Le.Z},name:"ClientFileList",data(){return{userFiles:[],display:!1}},methods:{handleDisplay(){this.display=!this.display},handleDownload(e,n){console.log(e),fetch("https://e-courtage-back.fly.dev/document/downloadDocument/"+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.blob();throw new Error("Something went wrong")})).then((e=>{console.log(e);const t=window.URL.createObjectURL(new Blob([e])),o=document.createElement("a");o.href=t,o.setAttribute("download",n),document.body.appendChild(o),o.click()}))},handleUpdate(e){console.log(e);const n=document.createElement("input");n.type="file",n.ref="file",n.click(),n.onchange=()=>{const t=new FormData;console.log(n),t.append("file",n.files[0]);let o=new XMLHttpRequest;o.open("PATCH","https://e-courtage-back.fly.dev/document/updateDocument/"+e,!0),o.setRequestHeader("Authorization",localStorage.getItem("token")),o.send(t),o.onload=function(){200==o.status?console.log("File uploaded"):console.log("Error "+o.status+" occurred when trying to upload your file.")}}},handleDelete(e){console.log(e),fetch("https://e-courtage-back.fly.dev/document/deleteDocument/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((n=>{console.log(n),this.userFiles=this.userFiles.filter((n=>n.id_document!==e))}))},fetchUserFiles(){fetch("https://e-courtage-back.fly.dev/document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.userFiles=e})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))}},mounted(){this.fetchUserFiles()}};const pt=(0,Ne.Z)(ct,[["render",mt]]);var ft=pt,ht={name:"ClientHomeView",components:{HeaderComponent:He.Z,ClientDemandForm:Oe,ClientNotificationListElement:We,ClientDemandsListElement:tt,ClientFileList:ft},data(){return{userData:{},userNotifications:[],userDemands:[]}},methods:{fetchUserData(){this.userData={name:"Doe",firstname:"John",birthdate:"2002-09-29",phone:"0123456789",email:"john.doe@gmail.com",occupation:"Software Engineer"},console.log(this.userData)},fetchUserNotifications(){this.userNotifications=[{demand:"Demande de prêt 1",bank:"Crédit Agricole"},{demand:"Demande de prêt 1",bank:"BNP Paribas"},{demand:"Demande de prêt 2",bank:"Crédit Agricole"}]},fetchUserDemands(){fetch("https://e-courtage-back.fly.dev/demande_client/getAllDemandes",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{console.log(e),this.userDemands=e}))},sendUserData(){}},mounted(){console.log("Mounted"),this.fetchUserData(),this.fetchUserNotifications(),this.fetchUserDemands()},beforeUnmount(){console.log("Unmounted"),this.sendUserData()}};const bt=(0,Ne.Z)(ht,[["render",E]]);var _t=bt}}]);
//# sourceMappingURL=941.98ae6c62.js.map