(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[872],{7045:function(e,n,t){var o=t(6339),a=t(3070);e.exports=function(e,n,t){return t.get&&o(t.get,n,{getter:!0}),t.set&&o(t.set,n,{setter:!0}),a.f(e,n,t)}},2062:function(e,n,t){"use strict";var o=t(9781),a=t(1702),i=t(7045),l=URLSearchParams.prototype,s=a(l.forEach);o&&!("size"in l)&&i(l,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},132:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var o=t(3396),a=t(7139);const i={id:"clientFileListComponent"},l=(0,o._)("h2",{style:{"margin-bottom":"30px"}},"Vos fichiers",-1),s={id:"clientFileList"},r={class:"list-group"},u={class:"fileRowText"},d={id:"fileRowTextName"},m={class:"fileRowButtons"},c=["onClick"],p=["onClick"],f=["onClick"];function h(e,n,t,h,_,v){const w=(0,o.up)("client-new-file-form");return(0,o.wg)(),(0,o.iD)("div",i,[l,(0,o._)("div",s,[(0,o._)("ul",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.userFiles,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"fileRow list-group-item",key:e.name},[(0,o._)("div",u,[(0,o._)("span",d,(0,a.zw)(e.nom_document),1),(0,o._)("span",null,(0,a.zw)(e.type),1)]),(0,o._)("div",m,[(0,o._)("button",{class:"btn btn-success fileRowButton",onClick:()=>v.handleDownload(e.id_document,e.nom_document)},"Télécharger",8,c),(0,o._)("button",{class:"btn btn-light fileRowButton",onClick:()=>v.handleUpdate(e.id_document)},"Remplacer",8,p),(0,o._)("button",{class:"btn btn-danger fileRowButton",onClick:()=>v.handleDelete(e.id_document)},"Supprimer",8,f)])])))),128))])]),(0,o.Wm)(w)])}t(2062);var _=t(2586),v={components:{ClientNewFileForm:_.Z},name:"ClientFileList",data(){return{userFiles:[]}},methods:{handleDownload(e,n){console.log(e),fetch(this.api_url+"document/downloadDocument/"+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.blob();throw new Error("Something went wrong")})).then((e=>{console.log(e);const t=window.URL.createObjectURL(new Blob([e])),o=document.createElement("a");o.href=t,o.setAttribute("download",n),document.body.appendChild(o),o.click()}))},handleUpdate(e){let n=this;console.log(e);const t=document.createElement("input");t.type="file",t.ref="file",t.click(),t.onchange=()=>{const o=new FormData;console.log(t),o.append("file",t.files[0]);let a=new XMLHttpRequest;a.open("PATCH",this.api_url+"document/updateDocument/"+e,!0),a.setRequestHeader("Authorization",localStorage.getItem("token")),a.send(o),a.onload=function(){200==a.status?(console.log("File uploaded"),n.userFiles.find((n=>n.id_document===e)).nom_document=t.files[0].name):console.log("Error "+a.status+" occurred when trying to upload your file.")}}},handleDelete(e){confirm("Voulez-vous vraiment supprimer ce fichier ?")&&(console.log(e),fetch(this.api_url+"document/deleteDocument/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((n=>{console.log(n),this.userFiles=this.userFiles.filter((n=>n.id_document!==e))})))},fetchUserFiles(){fetch(this.api_url+"document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.userFiles=e;for(let n=0;n<this.userFiles.length;n++)null==this.userFiles[n].type&&(this.userFiles[n].type="Non spécifié")})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))}},mounted(){this.fetchUserFiles()}},w=t(89);const g=(0,w.Z)(v,[["render",h]]);var b=g},7007:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return hn}});var o=t(3396),a=t(7139);const i={id:"main-body"},l={id:"body-left"},s={id:"profile-overview-area"},r=(0,o._)("h2",null,"Votre profil :",-1),u={id:"profile-list",class:"section-list"},d={class:"profile-item"},m=(0,o._)("span",null,"Nom :",-1),c={class:"profile-item"},p=(0,o._)("span",null,"Prénom :",-1),f={class:"profile-item"},h=(0,o._)("span",null,"Date de Naissance :",-1),_={class:"profile-item"},v=(0,o._)("span",null,"Numéro de téléphone :",-1),w={class:"profile-item"},g=(0,o._)("span",null,"Adresse mail :",-1),b={class:"profile-item"},D=(0,o._)("span",null,"Profession :",-1),y={class:"profile-item profile-buttons"},C={id:"notifications-view-area"},z=(0,o._)("h2",null,"Vos notifications :",-1),A={id:"notifications-list",class:"section-list"},k={id:"body-right"},F={id:"demands-overview-area"},j=(0,o._)("h2",null,"Liste de vos demandes en cours :",-1),U={id:"demands-list",class:"section-list"},V={id:"add-demand-area"};function E(e,n,t,E,x,R){const S=(0,o.up)("HeaderComponent"),T=(0,o.up)("client-file-list-modal"),q=(0,o.up)("router-link"),N=(0,o.up)("client-notification-list-element"),L=(0,o.up)("client-demands-list-element"),M=(0,o.up)("ClientDemandForm");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(S),(0,o._)("div",i,[(0,o._)("div",l,[(0,o._)("div",s,[r,(0,o._)("ul",u,[(0,o._)("li",d,[m,(0,o._)("span",null,(0,a.zw)(x.userData.nom),1)]),(0,o._)("li",c,[p,(0,o._)("span",null,(0,a.zw)(x.userData.prenom),1)]),(0,o._)("li",f,[h,(0,o._)("span",null,(0,a.zw)(x.userData.date_birth),1)]),(0,o._)("li",_,[v,(0,o._)("span",null,(0,a.zw)(x.userData.tel),1)]),(0,o._)("li",w,[g,(0,o._)("span",null,(0,a.zw)(x.userData.email),1)]),(0,o._)("li",b,[D,(0,o._)("span",null,(0,a.zw)(x.userData.situation_professionnelle),1)]),(0,o._)("li",y,[(0,o.Wm)(T),(0,o.Wm)(q,{class:"btn btn-primary",to:"/client/profile"},{default:(0,o.w5)((()=>[(0,o.Uk)("Votre profil")])),_:1})])])]),(0,o._)("div",C,[z,(0,o._)("ul",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.userNotifications,(e=>((0,o.wg)(),(0,o.j4)(N,{key:e.id,notification:e},null,8,["notification"])))),128))])])]),(0,o._)("div",k,[(0,o._)("div",F,[j,(0,o._)("ul",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.userDemands,(e=>((0,o.wg)(),(0,o.j4)(L,{key:e.id,demand:e},null,8,["demand"])))),128))])]),(0,o._)("div",V,[(0,o.Wm)(M,{id:"demand-form"})])])])])}var x=t(9242);const R={key:0,id:"modal-form",ref:"modalForm"},S=(0,o._)("h2",null,"Nouvelle demande",-1),T={id:"demandCreationForm"},q={id:"demandCreationFormFields"},N={class:"mb-3"},L=(0,o._)("label",{for:"formSubject",class:"form-label"},"Sujet",-1),M={class:"mb-3"},I=(0,o._)("label",{for:"formNature",class:"form-label"},"Nature du projet ?",-1),Z=(0,o.uE)('<option value="">Choisissez la nature de votre projet</option><option value="Achat">Achat</option><option value="Construction">Construction</option><option value="Travaux">Travaux</option><option value="Autre">Autre</option>',5),H=[Z],B={class:"mb-3"},W=(0,o._)("label",{for:"formType",class:"form-label"},"Type de bien ?",-1),O=(0,o.uE)('<option value="">Choisissez le type du bien</option><option value="Maison">Maison</option><option value="Appartement">Appartement</option><option value="Terrain">Terrain</option><option value="Autre">Autre</option>',5),P=[O],G={class:"mb-3"},K=(0,o._)("label",{for:"formAge",class:"form-label"},"Age du bien ?",-1),Y=(0,o._)("option",{value:""},"Choisissez l'âge du bien",-1),X=(0,o._)("option",{value:"Ancien"},"Ancien",-1),$=(0,o._)("option",{value:"Neuf"},"Neuf",-1),J=(0,o._)("option",{value:"Vente sur plan"},"Vente sur plan",-1),Q=[Y,X,$,J],ee={class:"mb-3"},ne=(0,o._)("label",{for:"formPurpose",class:"form-label"},"Usage du bien ?",-1),te=(0,o.uE)('<option value="">Choisissez l&#39;usage du bien</option><option value="Résidence principale">Résidence principale</option><option value="Résidence secondaire">Résidence secondaire</option><option value="Investissement locatif">Investissement locatif</option><option value="Usage professionnel">Usage professionnel</option><option value="Usage mixte">Usage mixte</option><option value="Autre">Autre</option>',7),oe=[te],ae={class:"mb-3"},ie=(0,o._)("label",{for:"formResearchStatus",class:"form-label"},"Ou en êtes vous dans votre recherche ?",-1),le=(0,o.uE)('<option value="">Renseigner où vous en êtes dans votre recherche</option><option value="En recherche">En recherche</option><option value="Vous vous préparez à faire une offre">Vous vous préparez à faire une offre</option><option value="Vous avez déjà fait une offre">Vous avez déjà fait une offre</option><option value="Vous pensez bientôt signer compromi">Vous pensez bientôt signer compromis</option><option value="Vous avez déjà signé un compromis">Vous avez déjà signé un compromis</option><option value="Autre">Autre</option>',7),se=[le],re={class:"mb-3"},ue=(0,o._)("label",{for:"formCountry",class:"form-label"},"Dans quel pays se situe le bien ?",-1),de={class:"mb-3"},me=(0,o._)("label",{for:"formCity",class:"form-label"},"Dans quelle ville se situe le bien ?",-1),ce={class:"mb-3"},pe=(0,o._)("label",{for:"formAcquisitionAmount",class:"form-label"},"Montant estimé de l'acquisition ?",-1),fe={class:"mb-3"},he=(0,o._)("label",{for:"formTravauxAmount",class:"form-label"},"Montant estimé des travaux ?",-1),_e={class:"mb-3"},ve=(0,o._)("label",{for:"formNotaireAmount",class:"form-label"},"Frais de notaire ? (optionnel)",-1),we={class:"mb-3"},ge=(0,o._)("label",{for:"formAloneGroup",class:"form-label"},"Comment empruntez-vous ?",-1),be=(0,o._)("option",{value:""},"Vous empruntez seul ? En groupe ? ",-1),De=(0,o._)("option",{value:"1"},"Seul",-1),ye=(0,o._)("option",{value:"2"},"Avec un co-emprunteur",-1),Ce=(0,o._)("option",{value:"3"},"Autre",-1),ze=[be,De,ye,Ce],Ae={class:"mb-3"},ke=(0,o._)("label",{for:"formApport",class:"form-label"},"Votre apport personnel ?",-1),Fe={class:"mb-3"},je=(0,o._)("label",{for:"formComment",class:"form-label"},"Commentaires sur le projet ? (optionnel)",-1),Ue={class:"mb-3"},Ve=(0,o._)("label",{for:"formFileMultiple",class:"form-label"},"Vos Fichiers",-1);function Ee(e,n,t,a,i,l){const s=(0,o.up)("ClientFileListCheckableElement"),r=(0,o.up)("client-new-file-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{id:"openButton",onClick:n[0]||(n[0]=()=>l.handleDisplay())},"NOUVELLE DEMANDE"),i.displayForm?((0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>l.handleDisplay())},"X"),S,(0,o._)("form",T,[(0,o._)("div",q,[(0,o._)("div",N,[L,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formSubject","onUpdate:modelValue":n[2]||(n[2]=e=>i.newDemand.sujet=e),placeholder:"Trouvez un titre pour votre demande",required:""},null,512),[[x.nr,i.newDemand.sujet]])]),(0,o._)("div",M,[I,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formNature","onUpdate:modelValue":n[3]||(n[3]=e=>i.newDemand.nature=e),required:""},H,512),[[x.bM,i.newDemand.nature]])]),(0,o._)("div",B,[W,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formType","onUpdate:modelValue":n[4]||(n[4]=e=>i.newDemand.type=e),required:""},P,512),[[x.bM,i.newDemand.type]])]),(0,o._)("div",G,[K,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAge","onUpdate:modelValue":n[5]||(n[5]=e=>i.newDemand.age=e),required:""},Q,512),[[x.bM,i.newDemand.age]])]),(0,o._)("div",ee,[ne,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formPurpose","onUpdate:modelValue":n[6]||(n[6]=e=>i.newDemand.usage=e),required:""},oe,512),[[x.bM,i.newDemand.usage]])]),(0,o._)("div",ae,[ie,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formResearchStatus","onUpdate:modelValue":n[7]||(n[7]=e=>i.newDemand.status_recherche=e),required:""},se,512),[[x.bM,i.newDemand.status_recherche]])]),(0,o._)("div",re,[ue,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCountry","onUpdate:modelValue":n[8]||(n[8]=e=>i.newDemand.pays=e),placeholder:"Renseignez le pays où se situe le bien",required:""},null,512),[[x.nr,i.newDemand.pays]])]),(0,o._)("div",de,[me,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCity","onUpdate:modelValue":n[9]||(n[9]=e=>i.newDemand.ville=e),placeholder:"Renseignez la ville où se situe le bien",required:""},null,512),[[x.nr,i.newDemand.ville]])]),(0,o._)("div",ce,[pe,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formAcquisitionAmount","onUpdate:modelValue":n[10]||(n[10]=e=>i.newDemand.montant_bien=e),placeholder:"Renseignez la valeur estimée du bien",required:""},null,512),[[x.nr,i.newDemand.montant_bien]])]),(0,o._)("div",fe,[he,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formTravauxAmount","onUpdate:modelValue":n[11]||(n[11]=e=>i.newDemand.montant_travaux=e),placeholder:"Renseignez la valeur estimée des travaux",required:""},null,512),[[x.nr,i.newDemand.montant_travaux]])]),(0,o._)("div",_e,[ve,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formNotaireAmount","onUpdate:modelValue":n[12]||(n[12]=e=>i.newDemand.frais_notaire=e),placeholder:"Renseignez les frais de notaires, si il y a"},null,512),[[x.nr,i.newDemand.frais_notaire]])]),(0,o._)("div",we,[ge,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAloneGroup","onUpdate:modelValue":n[13]||(n[13]=e=>i.newDemand.accompagnement=e),required:""},ze,512),[[x.bM,i.newDemand.accompagnement]])]),(0,o._)("div",Ae,[ke,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formApport","onUpdate:modelValue":n[14]||(n[14]=e=>i.newDemand.apport_personnel=e),placeholder:"Renseignez votre apport dans l'acquisition",required:""},null,512),[[x.nr,i.newDemand.apport_personnel]])]),(0,o._)("div",Fe,[je,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formComment","onUpdate:modelValue":n[15]||(n[15]=e=>i.newDemand.commentaire=e),placeholder:"Vous pouvez ajouter tout détail que vous pensez significant"},null,512),[[x.nr,i.newDemand.commentaire]])]),(0,o._)("div",Ue,[Ve,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.userFiles,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.id_document,file:e},null,8,["file"])))),128))]),(0,o.Wm)(r)])]),(0,o._)("button",{type:"submit",class:"btn btn-primary",onClick:n[16]||(n[16]=e=>l.handleSubmit(e))},"Envoyer")])],512)):(0,o.kq)("",!0)])}t(7658);var xe=t(6231),Re=t(2586),Se={name:"ClientDemandForm",data(){return{newDemand:{sujet:"",nature:"",type:"",age:"",usage:"",status_recherche:"",pays:"",ville:"",montant_bien:"",montant_travaux:"",frais_notaire:"",accompagnement:"",apport_personnel:"",commentaire:"",files:[]},displayForm:!1,userFiles:[]}},methods:{handleSubmit(e){""!=this.newDemand.sujet&&""!=this.newDemand.nature&&""!=this.newDemand.type&&""!=this.newDemand.age&&""!=this.newDemand.usage&&""!=this.newDemand.status_recherche&&""!=this.newDemand.pays&&""!=this.newDemand.montant_bien&&""!=this.newDemand.aloneGroup&&""!=this.newDemand.apport_personnel?(e.preventDefault(),console.log(localStorage.getItem("token")),fetch(this.api_url+"demande_client/createDemande",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.newDemand)}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e);let n=this.newDemand;n.id_demande=e.id_demande,this.$parent.userDemands.push(this.newDemand),console.log(this.$parent.userDemands),this.newDemand={sujet:"",nature:"",type:"",age:"",usage:"",status_recherche:"",pays:"",ville:"",montant_bien:"",montant_travaux:"",frais_notaire:"",accompagnement:"",apport_personnel:"",commentaire:"",files:[]},this.displayForm=!1})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))):alert("Veuillez remplir tous les champs obligatoires")},handleDisplay(){this.displayForm=!this.displayForm}},components:{ClientFileListCheckableElement:xe.Z,ClientNewFileForm:Re.Z},mounted(){fetch(this.api_url+"document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.userFiles=e})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))}},Te=t(89);const qe=(0,Te.Z)(Se,[["render",Ee]]);var Ne=qe,Le=t(9222);const Me={id:"notificationListElement"},Ie={class:"notification-row"},Ze=(0,o._)("div",{class:"notification-row"},[(0,o._)("span",{id:"comment"}," Accepté ! ")],-1);function He(e,n,t,i,l,s){return(0,o.wg)(),(0,o.iD)("div",Me,[(0,o._)("div",Ie,[(0,o._)("span",null,(0,a.zw)(t.notification.sujet_demande),1),(0,o._)("span",null,(0,a.zw)(t.notification.banque_name),1)]),Ze])}var Be={name:"ClientNotificationListElement",props:{notification:{type:Object,required:!0}}};const We=(0,Te.Z)(Be,[["render",He]]);var Oe=We;const Pe={id:"demandListElement"},Ge={class:"demandRow"},Ke={class:"demandRow"},Ye=(0,o._)("br",null,null,-1),Xe={class:"demandRow"},$e=(0,o._)("span",null,"État :",-1),Je={id:"accept_count"},Qe={id:"pending_count"},en={id:"refuse_count"};function nn(e,n,t,i,l,s){const r=(0,o.up)("client-demand-detail");return(0,o.wg)(),(0,o.iD)("div",Pe,[(0,o._)("h3",null,(0,a.zw)(t.demand.sujet),1),(0,o._)("div",Ge,[(0,o._)("span",null," Acquisition : "+(0,a.zw)(t.demand.montant_bien)+" €",1),(0,o.Uk)(),(0,o._)("span",null," Apport : "+(0,a.zw)(t.demand.apport_personnel)+" €",1)]),(0,o._)("div",Ke,[(0,o._)("span",null,(0,a.zw)(t.demand.commentaire),1)]),Ye,(0,o._)("div",Xe,[$e,(0,o._)("span",Je,(0,a.zw)(t.demand.accepted),1),(0,o._)("span",Qe,(0,a.zw)(t.demand.pending),1),(0,o._)("span",en,(0,a.zw)(t.demand.refused),1)]),(0,o.Wm)(r,{propDemand:t.demand},null,8,["propDemand"])])}var tn=t(6448),on={components:{ClientDemandDetail:tn.Z},name:"ClientDemandsListElement",props:{demand:{type:Object,required:!0}}};const an=(0,Te.Z)(on,[["render",nn]]);var ln=an;const sn={key:0,id:"modalFileList"};function rn(e,n,t,a,i,l){const s=(0,o.up)("client-file-list");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{class:"btn btn-primary",onClick:n[0]||(n[0]=()=>l.handleDisplay())},"Vos fichiers"),i.display?((0,o.wg)(),(0,o.iD)("div",sn,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>l.handleDisplay())},"X"),(0,o.Wm)(s)])):(0,o.kq)("",!0)])}var un=t(132),dn={name:"ClientFileListModal",components:{ClientFileList:un.Z},data(){return{display:!1}},methods:{handleDisplay(){this.display=!this.display}}};const mn=(0,Te.Z)(dn,[["render",rn]]);var cn=mn,pn={name:"ClientHomeView",components:{HeaderComponent:Le.Z,ClientDemandForm:Ne,ClientNotificationListElement:Oe,ClientDemandsListElement:ln,ClientFileListModal:cn},data(){return{userData:{},userNotifications:[],userDemands:[]}},methods:{fetchUserData(){fetch(this.api_url+"client/getClient",{headers:{"Content-Type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{console.log(e),this.userData=e;for(const n in this.userData)"date_birth"==n?this.userData[n]=this.userData[n].split("T")[0]:null==this.userData[n]&&(this.userData[n]="Non renseigné")}))},fetchUserNotifications(){fetch(this.api_url+"demande_client/getAllDemandesAccepted",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{Array.isArray(e)?(console.log(e),this.userNotifications=e):this.userNotifications=[]}))},fetchUserDemands(){fetch(this.api_url+"demande_client/getAllDemandes",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{console.log(e),this.userDemands=e,fetch(this.api_url+"demande_client/getAllStatutDemandes",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{for(let n=0;n<this.userDemands.length;n++)this.userDemands[n].accepted=e[n].accepted,this.userDemands[n].refused=e[n].refused,this.userDemands[n].pending=e[n].pending}))}))}},mounted(){console.log("Mounted"),this.fetchUserData(),this.fetchUserNotifications(),this.fetchUserDemands()}};const fn=(0,Te.Z)(pn,[["render",E]]);var hn=fn}}]);
//# sourceMappingURL=872.dae92a3e.js.map