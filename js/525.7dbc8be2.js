(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[525],{7045:function(e,n,t){var o=t(6339),a=t(3070);e.exports=function(e,n,t){return t.get&&o(t.get,n,{getter:!0}),t.set&&o(t.set,n,{setter:!0}),a.f(e,n,t)}},2062:function(e,n,t){"use strict";var o=t(9781),a=t(1702),l=t(7045),i=URLSearchParams.prototype,s=a(i.forEach);o&&!("size"in i)&&l(i,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},8802:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return bn}});var o=t(3396),a=t(7139);const l={id:"main-body"},i={id:"body-left"},s={id:"profile-overview-area"},r=(0,o._)("h2",null,"Votre profil :",-1),u={id:"profile-list",class:"section-list"},d={class:"profile-item"},m=(0,o._)("span",null,"Nom :",-1),c={class:"profile-item"},p=(0,o._)("span",null,"Prénom :",-1),f={class:"profile-item"},h=(0,o._)("span",null,"Date de Naissance :",-1),_={class:"profile-item"},w=(0,o._)("span",null,"Numéro de téléphone :",-1),v={class:"profile-item"},g=(0,o._)("span",null,"Adresse mail :",-1),b={class:"profile-item"},D=(0,o._)("span",null,"Profession :",-1),y={class:"profile-item profile-buttons"},C={id:"notifications-view-area"},z=(0,o._)("h2",null,"Vos notifications :",-1),A={id:"notifications-list",class:"section-list"},k={id:"body-right"},j={id:"demands-overview-area"},U=(0,o._)("h2",null,"Liste de vos demandes en cours :",-1),V={id:"demands-list",class:"section-list"},E={id:"add-demand-area"};function F(e,n,t,F,x,S){const R=(0,o.up)("HeaderComponent"),q=(0,o.up)("client-file-list"),T=(0,o.up)("router-link"),N=(0,o.up)("client-notification-list-element"),L=(0,o.up)("client-demands-list-element"),M=(0,o.up)("ClientDemandForm");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(R),(0,o._)("div",l,[(0,o._)("div",i,[(0,o._)("div",s,[r,(0,o._)("ul",u,[(0,o._)("li",d,[m,(0,o._)("span",null,(0,a.zw)(x.userData.nom),1)]),(0,o._)("li",c,[p,(0,o._)("span",null,(0,a.zw)(x.userData.prenom),1)]),(0,o._)("li",f,[h,(0,o._)("span",null,(0,a.zw)(x.userData.date_birth),1)]),(0,o._)("li",_,[w,(0,o._)("span",null,(0,a.zw)(x.userData.tel),1)]),(0,o._)("li",v,[g,(0,o._)("span",null,(0,a.zw)(x.userData.email),1)]),(0,o._)("li",b,[D,(0,o._)("span",null,(0,a.zw)(x.userData.situation_professionnelle),1)]),(0,o._)("li",y,[(0,o.Wm)(q),(0,o.Wm)(T,{class:"btn btn-primary",to:"/client/profile"},{default:(0,o.w5)((()=>[(0,o.Uk)("Votre profil")])),_:1})])])]),(0,o._)("div",C,[z,(0,o._)("ul",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.userNotifications,(e=>((0,o.wg)(),(0,o.j4)(N,{key:e.id,notification:e},null,8,["notification"])))),128))])])]),(0,o._)("div",k,[(0,o._)("div",j,[U,(0,o._)("ul",V,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.userDemands,(e=>((0,o.wg)(),(0,o.j4)(L,{key:e.id,demand:e},null,8,["demand"])))),128))])]),(0,o._)("div",E,[(0,o.Wm)(M,{id:"demand-form"})])])])])}var x=t(9242);const S={key:0,id:"modal-form",ref:"modalForm"},R=(0,o._)("h2",null,"Nouvelle demande",-1),q={id:"form"},T={class:"mb-3"},N=(0,o._)("label",{for:"formSubject",class:"form-label"},"Sujet",-1),L={class:"mb-3"},M=(0,o._)("label",{for:"formNature",class:"form-label"},"Nature du projet ?",-1),I=(0,o.uE)('<option value="">Choisissez la nature de votre projet</option><option value="Achat">Achat</option><option value="Construction">Construction</option><option value="Travaux">Travaux</option><option value="Autre">Autre</option>',5),H=[I],Z={class:"mb-3"},B=(0,o._)("label",{for:"formType",class:"form-label"},"Type de bien ?",-1),O=(0,o.uE)('<option value="">Choisissez le type du bien</option><option value="Maison">Maison</option><option value="Appartement">Appartement</option><option value="Terrain">Terrain</option><option value="Autre">Autre</option>',5),P=[O],W={class:"mb-3"},G=(0,o._)("label",{for:"formAge",class:"form-label"},"Age du bien ?",-1),K=(0,o._)("option",{value:""},"Choisissez l'âge du bien",-1),Y=(0,o._)("option",{value:"Ancien"},"Ancien",-1),X=(0,o._)("option",{value:"Neuf"},"Neuf",-1),$=(0,o._)("option",{value:"Vente sur plan"},"Vente sur plan",-1),J=[K,Y,X,$],Q={class:"mb-3"},ee=(0,o._)("label",{for:"formPurpose",class:"form-label"},"Usage du bien ?",-1),ne=(0,o.uE)('<option value="">Choisissez l&#39;usage du bien</option><option value="Résidence principale">Résidence principale</option><option value="Résidence secondaire">Résidence secondaire</option><option value="Investissement locatif">Investissement locatif</option><option value="Usage professionnel">Usage professionnel</option><option value="Usage mixte">Usage mixte</option><option value="Autre">Autre</option>',7),te=[ne],oe={class:"mb-3"},ae=(0,o._)("label",{for:"formResearchStatus",class:"form-label"},"Ou en êtes vous dans votre recherche ?",-1),le=(0,o.uE)('<option value="">Renseigner où vous en êtes dans votre recherche</option><option value="En recherche">En recherche</option><option value="Vous vous préparez à faire une offre">Vous vous préparez à faire une offre</option><option value="Vous avez déjà fait une offre">Vous avez déjà fait une offre</option><option value="Vous pensez bientôt signer compromi">Vous pensez bientôt signer compromis</option><option value="Vous avez déjà signé un compromis">Vous avez déjà signé un compromis</option><option value="Autre">Autre</option>',7),ie=[le],se={class:"mb-3"},re=(0,o._)("label",{for:"formCountry",class:"form-label"},"Dans quel pays se situe le bien ?",-1),ue={class:"mb-3"},de=(0,o._)("label",{for:"formCity",class:"form-label"},"Dans quelle ville se situe le bien ?",-1),me={class:"mb-3"},ce=(0,o._)("label",{for:"formAcquisitionAmount",class:"form-label"},"Montant estimé de l'acquisition ?",-1),pe={class:"mb-3"},fe=(0,o._)("label",{for:"formTravauxAmount",class:"form-label"},"Montant estimé des travaux ?",-1),he={class:"mb-3"},_e=(0,o._)("label",{for:"formNotaireAmount",class:"form-label"},"Frais de notaire ? (optionnel)",-1),we={class:"mb-3"},ve=(0,o._)("label",{for:"formAloneGroup",class:"form-label"},"Comment empruntez-vous ?",-1),ge=(0,o._)("option",{value:""},"Vous empruntez seul ? En groupe ? ",-1),be=(0,o._)("option",{value:"1"},"Seul",-1),De=(0,o._)("option",{value:"2"},"Avec un co-emprunteur",-1),ye=(0,o._)("option",{value:"3"},"Autre",-1),Ce=[ge,be,De,ye],ze={class:"mb-3"},Ae=(0,o._)("label",{for:"formApport",class:"form-label"},"Votre apport personnel ?",-1),ke={class:"mb-3"},je=(0,o._)("label",{for:"formComment",class:"form-label"},"Commentaires sur le projet ? (optionnel)",-1),Ue={class:"mb-3"},Ve=(0,o._)("label",{for:"formFileMultiple",class:"form-label"},"Vos Fichiers",-1);function Ee(e,n,t,a,l,i){const s=(0,o.up)("ClientFileListCheckableElement"),r=(0,o.up)("client-new-file-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{id:"openButton",onClick:n[0]||(n[0]=()=>i.handleDisplay())},"NOUVELLE DEMANDE"),l.displayForm?((0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>i.handleDisplay())},"X"),R,(0,o._)("form",q,[(0,o._)("div",T,[N,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formSubject","onUpdate:modelValue":n[2]||(n[2]=e=>l.newDemand.sujet=e),placeholder:"Trouvez un titre pour votre demande",required:""},null,512),[[x.nr,l.newDemand.sujet]])]),(0,o._)("div",L,[M,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formNature","onUpdate:modelValue":n[3]||(n[3]=e=>l.newDemand.nature=e),required:""},H,512),[[x.bM,l.newDemand.nature]])]),(0,o._)("div",Z,[B,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formType","onUpdate:modelValue":n[4]||(n[4]=e=>l.newDemand.type=e),required:""},P,512),[[x.bM,l.newDemand.type]])]),(0,o._)("div",W,[G,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAge","onUpdate:modelValue":n[5]||(n[5]=e=>l.newDemand.age=e),required:""},J,512),[[x.bM,l.newDemand.age]])]),(0,o._)("div",Q,[ee,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formPurpose","onUpdate:modelValue":n[6]||(n[6]=e=>l.newDemand.usage=e),required:""},te,512),[[x.bM,l.newDemand.usage]])]),(0,o._)("div",oe,[ae,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formResearchStatus","onUpdate:modelValue":n[7]||(n[7]=e=>l.newDemand.status_recherche=e),required:""},ie,512),[[x.bM,l.newDemand.status_recherche]])]),(0,o._)("div",se,[re,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCountry","onUpdate:modelValue":n[8]||(n[8]=e=>l.newDemand.pays=e),placeholder:"Renseignez le pays où se situe le bien",required:""},null,512),[[x.nr,l.newDemand.pays]])]),(0,o._)("div",ue,[de,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formCity","onUpdate:modelValue":n[9]||(n[9]=e=>l.newDemand.ville=e),placeholder:"Renseignez la ville où se situe le bien",required:""},null,512),[[x.nr,l.newDemand.ville]])]),(0,o._)("div",me,[ce,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formAcquisitionAmount","onUpdate:modelValue":n[10]||(n[10]=e=>l.newDemand.montant_bien=e),placeholder:"Renseignez la valeur estimée du bien",required:""},null,512),[[x.nr,l.newDemand.montant_bien]])]),(0,o._)("div",pe,[fe,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formTravauxAmount","onUpdate:modelValue":n[11]||(n[11]=e=>l.newDemand.montant_travaux=e),placeholder:"Renseignez la valeur estimée des travaux",required:""},null,512),[[x.nr,l.newDemand.montant_travaux]])]),(0,o._)("div",he,[_e,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formNotaireAmount","onUpdate:modelValue":n[12]||(n[12]=e=>l.newDemand.frais_notaire=e),placeholder:"Renseignez les frais de notaires, si il y a"},null,512),[[x.nr,l.newDemand.frais_notaire]])]),(0,o._)("div",we,[ve,(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example",id:"formAloneGroup","onUpdate:modelValue":n[13]||(n[13]=e=>l.newDemand.accompagnement=e),required:""},Ce,512),[[x.bM,l.newDemand.accompagnement]])]),(0,o._)("div",ze,[Ae,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formApport","onUpdate:modelValue":n[14]||(n[14]=e=>l.newDemand.apport_personnel=e),placeholder:"Renseignez votre apport dans l'acquisition",required:""},null,512),[[x.nr,l.newDemand.apport_personnel]])]),(0,o._)("div",ke,[je,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"formComment","onUpdate:modelValue":n[15]||(n[15]=e=>l.newDemand.commentaire=e),placeholder:"Vous pouvez ajouter tout détail que vous pensez significant"},null,512),[[x.nr,l.newDemand.commentaire]])]),(0,o._)("div",Ue,[Ve,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.userFiles,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.id_document,file:e},null,8,["file"])))),128))]),(0,o.Wm)(r)]),(0,o._)("button",{type:"submit",class:"btn btn-primary",onClick:n[16]||(n[16]=e=>i.handleSubmit(e))},"Envoyer")])],512)):(0,o.kq)("",!0)])}t(7658);var Fe=t(9500),xe=t(8508),Se={name:"ClientDemandForm",data(){return{newDemand:{sujet:"",nature:"",type:"",age:"",usage:"",status_recherche:"",pays:"",ville:"",montant_bien:"",montant_travaux:"",frais_notaire:"",accompagnement:"",apport_personnel:"",commentaire:"",files:[]},displayForm:!1,userFiles:[]}},methods:{handleSubmit(e){""!=this.newDemand.sujet&&""!=this.newDemand.nature&&""!=this.newDemand.type&&""!=this.newDemand.age&&""!=this.newDemand.usage&&""!=this.newDemand.status_recherche&&""!=this.newDemand.pays&&""!=this.newDemand.montant_bien&&""!=this.newDemand.aloneGroup&&""!=this.newDemand.apport_personnel?(e.preventDefault(),console.log(localStorage.getItem("token")),fetch(this.api_url+"demande_client/createDemande",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.newDemand)}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e);let n=this.newDemand;n.id_demande=e.id_demande,this.$parent.userDemands.push(this.newDemand),console.log(this.$parent.userDemands),this.newDemand={sujet:"",nature:"",type:"",age:"",usage:"",status_recherche:"",pays:"",ville:"",montant_bien:"",montant_travaux:"",frais_notaire:"",accompagnement:"",apport_personnel:"",commentaire:"",files:[]},this.displayForm=!1})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))):alert("Veuillez remplir tous les champs obligatoires")},handleDisplay(){this.displayForm=!this.displayForm}},components:{ClientFileListCheckableElement:Fe.Z,ClientNewFileForm:xe.Z},mounted(){fetch(this.api_url+"document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.userFiles=e})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))}},Re=t(89);const qe=(0,Re.Z)(Se,[["render",Ee]]);var Te=qe,Ne=t(7837);const Le={id:"notificationListElement"},Me={class:"notification-row"},Ie=(0,o._)("div",{class:"notification-row"},[(0,o._)("span",{id:"comment"}," Accepté ! ")],-1);function He(e,n,t,l,i,s){return(0,o.wg)(),(0,o.iD)("div",Le,[(0,o._)("div",Me,[(0,o._)("span",null,(0,a.zw)(t.notification.sujet_demande),1),(0,o._)("span",null,(0,a.zw)(t.notification.banque_name),1)]),Ie])}var Ze={name:"ClientNotificationListElement",props:{notification:{type:Object,required:!0}}};const Be=(0,Re.Z)(Ze,[["render",He]]);var Oe=Be;const Pe={id:"demandListElement"},We={class:"demandRow"},Ge={class:"demandRow"},Ke=(0,o._)("br",null,null,-1),Ye={class:"demandRow"},Xe=(0,o._)("span",null,"État :",-1),$e={id:"accept_count"},Je={id:"pending_count"},Qe={id:"refuse_count"};function en(e,n,t,l,i,s){const r=(0,o.up)("client-demand-detail");return(0,o.wg)(),(0,o.iD)("div",Pe,[(0,o._)("h3",null,(0,a.zw)(t.demand.sujet),1),(0,o._)("div",We,[(0,o._)("span",null," Acquisition : "+(0,a.zw)(t.demand.montant_bien)+" €",1),(0,o.Uk)(),(0,o._)("span",null," Apport : "+(0,a.zw)(t.demand.apport_personnel)+" €",1)]),(0,o._)("div",Ge,[(0,o._)("span",null,(0,a.zw)(t.demand.commentaire),1)]),Ke,(0,o._)("div",Ye,[Xe,(0,o._)("span",$e,(0,a.zw)(t.demand.accepted),1),(0,o._)("span",Je,(0,a.zw)(t.demand.pending),1),(0,o._)("span",Qe,(0,a.zw)(t.demand.refused),1)]),(0,o.Wm)(r,{propDemand:t.demand},null,8,["propDemand"])])}var nn=t(3409),tn={components:{ClientDemandDetail:nn.Z},name:"ClientDemandsListElement",props:{demand:{type:Object,required:!0}}};const on=(0,Re.Z)(tn,[["render",en]]);var an=on;const ln={key:0,id:"modal-list"},sn=(0,o._)("h2",{style:{"margin-bottom":"30px"}},"Vos fichiers",-1),rn={class:"list-group"},un={class:"fileRow-text"},dn={class:"fileRow-buttons"},mn=["onClick"],cn=["onClick"],pn=["onClick"];function fn(e,n,t,l,i,s){const r=(0,o.up)("client-new-file-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{class:"btn btn-primary",onClick:n[0]||(n[0]=()=>s.handleDisplay())},"Vos fichiers"),i.display?((0,o.wg)(),(0,o.iD)("div",ln,[(0,o._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>s.handleDisplay())},"X"),(0,o._)("div",null,[sn,(0,o._)("ul",rn,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.userFiles,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"fileRow list-group-item",key:e.name},[(0,o._)("div",un,(0,a.zw)(e.id_document)+" - "+(0,a.zw)(e.nom_document),1),(0,o._)("div",dn,[(0,o._)("button",{class:"btn btn-success fileRowButton",onClick:()=>s.handleDownload(e.id_document,e.nom_document)},"Télécharger",8,mn),(0,o._)("button",{class:"btn btn-light fileRowButton",onClick:()=>s.handleUpdate(e.id_document)},"Remplacer",8,cn),(0,o._)("button",{class:"btn btn-danger fileRowButton",onClick:()=>s.handleDelete(e.id_document)},"Supprimer",8,pn)])])))),128))])]),(0,o.Wm)(r)])):(0,o.kq)("",!0)])}t(2062);var hn={components:{ClientNewFileForm:xe.Z},name:"ClientFileList",data(){return{userFiles:[],display:!1}},methods:{handleDisplay(){this.display=!this.display},handleDownload(e,n){console.log(e),fetch(this.api_url+"document/downloadDocument/"+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.blob();throw new Error("Something went wrong")})).then((e=>{console.log(e);const t=window.URL.createObjectURL(new Blob([e])),o=document.createElement("a");o.href=t,o.setAttribute("download",n),document.body.appendChild(o),o.click()}))},handleUpdate(e){let n=this;console.log(e);const t=document.createElement("input");t.type="file",t.ref="file",t.click(),t.onchange=()=>{const o=new FormData;console.log(t),o.append("file",t.files[0]);let a=new XMLHttpRequest;a.open("PATCH",this.api_url+"document/updateDocument/"+e,!0),a.setRequestHeader("Authorization",localStorage.getItem("token")),a.send(o),a.onload=function(){200==a.status?(console.log("File uploaded"),n.userFiles.find((n=>n.id_document===e)).nom_document=t.files[0].name):console.log("Error "+a.status+" occurred when trying to upload your file.")}}},handleDelete(e){console.log(e),fetch(this.api_url+"document/deleteDocument/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((n=>{console.log(n),this.userFiles=this.userFiles.filter((n=>n.id_document!==e))}))},fetchUserFiles(){fetch(this.api_url+"document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.userFiles=e})).catch((e=>{console.log(e),alert("Une erreur est survenue, veuillez réessayer plus tard")}))}},mounted(){this.fetchUserFiles()}};const _n=(0,Re.Z)(hn,[["render",fn]]);var wn=_n,vn={name:"ClientHomeView",components:{HeaderComponent:Ne.Z,ClientDemandForm:Te,ClientNotificationListElement:Oe,ClientDemandsListElement:an,ClientFileList:wn},data(){return{userData:{},userNotifications:[],userDemands:[]}},methods:{fetchUserData(){fetch(this.api_url+"client/getClient",{headers:{"Content-Type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{console.log(e),this.userData=e;for(const n in this.userData)"date_birth"==n?this.userData[n]=this.userData[n].split("T")[0]:null==this.userData[n]&&(this.userData[n]="Non renseigné")}))},fetchUserNotifications(){fetch(this.api_url+"demande_client/getAllDemandesAccepted",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{Array.isArray(e)?(console.log(e),this.userNotifications=e):this.userNotifications=[]}))},fetchUserDemands(){fetch(this.api_url+"demande_client/getAllDemandes",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{console.log(e),this.userDemands=e,fetch(this.api_url+"demande_client/getAllStatutDemandes",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>e.json())).then((e=>{for(let n=0;n<this.userDemands.length;n++)this.userDemands[n].accepted=e[n].accepted,this.userDemands[n].refused=e[n].refused,this.userDemands[n].pending=e[n].pending}))}))}},mounted(){console.log("Mounted"),this.fetchUserData(),this.fetchUserNotifications(),this.fetchUserDemands()}};const gn=(0,Re.Z)(vn,[["render",F]]);var bn=gn}}]);
//# sourceMappingURL=525.7dbc8be2.js.map