(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[585],{7045:function(e,o,t){var n=t(6339),l=t(3070);e.exports=function(e,o,t){return t.get&&n(t.get,o,{getter:!0}),t.set&&n(t.set,o,{setter:!0}),l.f(e,o,t)}},2062:function(e,o,t){"use strict";var n=t(9781),l=t(1702),i=t(7045),r=URLSearchParams.prototype,a=l(r.forEach);n&&!("size"in r)&&i(r,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},4057:function(e,o,t){"use strict";t.d(o,{Z:function(){return g}});var n=t(3396),l=t(7139);const i={id:"clientFileListComponent"},r=(0,n._)("h2",{style:{"margin-bottom":"30px"}},"Vos fichiers",-1),a={id:"clientFileList"},s={class:"list-group"},u={class:"fileRowText"},c={id:"fileRowTextName"},p={class:"fileRowButtons"},d=["onClick"],m=["onClick"],f=["onClick"];function h(e,o,t,h,b,_){const v=(0,n.up)("client-new-file-form");return(0,n.wg)(),(0,n.iD)("div",i,[r,(0,n._)("div",a,[(0,n._)("ul",s,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.userFiles,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"fileRow list-group-item",key:e.name},[(0,n._)("div",u,[(0,n._)("span",c,(0,l.zw)(e.nom_document),1),(0,n._)("span",null,(0,l.zw)(e.type),1)]),(0,n._)("div",p,[(0,n._)("button",{class:"btn btn-success fileRowButton",onClick:()=>_.handleDownload(e.id_document,e.nom_document)},"Télécharger",8,d),(0,n._)("button",{class:"btn btn-light fileRowButton",onClick:()=>_.handleUpdate(e.id_document)},"Remplacer",8,m),(0,n._)("button",{class:"btn btn-danger fileRowButton",onClick:()=>_.handleDelete(e.id_document)},"Supprimer",8,f)])])))),128))])]),(0,n.Wm)(v)])}t(2062),t(7658);var b=t(1256),_={components:{ClientNewFileForm:b.Z},name:"ClientFileList",data(){return{userFiles:[]}},methods:{handleDownload(e,o){console.log(e),fetch(this.api_url+"document/downloadDocument/"+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.blob();throw new Error("Something went wrong")})).then((e=>{console.log(e);const t=window.URL.createObjectURL(new Blob([e])),n=document.createElement("a");n.href=t,n.setAttribute("download",o),document.body.appendChild(n),n.click()}))},handleUpdate(e){let o=this;console.log(e);const t=document.createElement("input");t.type="file",t.ref="file",t.click(),t.onchange=()=>{const n=new FormData;console.log(t),n.append("file",t.files[0]);let l=new XMLHttpRequest;l.open("PATCH",this.api_url+"document/updateDocument/"+e,!0),l.setRequestHeader("Authorization",localStorage.getItem("token")),l.send(n),l.onload=function(){200==l.status?(console.log("File uploaded"),o.userFiles.find((o=>o.id_document===e)).nom_document=t.files[0].name,o.$notify({title:"Succès",text:"Votre fichier a été mis à jour",type:"success"})):(console.log("Error "+l.status+" occurred when trying to upload your file."),this.$notify({title:"Erreur",text:"Une erreur est survenue lors de la mise à jour de votre fichier",type:"error"}))}}},handleDelete(e){confirm("Voulez-vous vraiment supprimer ce fichier ?")&&(console.log(e),fetch(this.api_url+"document/deleteDocument/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();throw new Error("Une erreur est survenue lors de la suppression de votre fichier")})).then((o=>{console.log(o),this.userFiles=this.userFiles.filter((o=>o.id_document!==e)),this.$notify({title:"Succès",text:"Votre fichier a été supprimé",type:"success"})})).catch((e=>{console.log(e),this.$notify({title:"Erreur",text:"Une erreur est survenue lors de la suppression de votre fichier",type:"error"})})))},fetchUserFiles(){fetch(this.api_url+"document/getAllDocuments",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();if(401!=e.status)throw new Error("Une erreur est survenue lors de la récupération de vos fichiers");this.$router.push("/login")})).then((e=>{console.log(e),this.userFiles=e;for(let o=0;o<this.userFiles.length;o++)null==this.userFiles[o].type&&(this.userFiles[o].type="Non spécifié")})).catch((e=>{console.log(e),this.$notify({title:"Erreur",text:"Une erreur est survenue lors de la récupération de vos fichiers",type:"error"})}))}},mounted(){this.fetchUserFiles()}},v=t(89);const y=(0,v.Z)(_,[["render",h]]);var g=y},1256:function(e,o,t){"use strict";t.d(o,{Z:function(){return y}});var n=t(3396),l=t(9242);const i={key:0,id:"modal-file-form",ref:"modalForm"},r=(0,n._)("h2",null,"Nouveau document",-1),a={class:"mb-3"},s=(0,n._)("label",{for:"formFile",class:"form-label"},"Votre fichier",-1),u={class:"mb-3"},c=(0,n._)("label",{for:"formNameTitle",class:"form-label"},"Nom du fichier",-1),p={class:"mb-3"},d=(0,n._)("label",{for:"formDocType",class:"form-label"},"Genre",-1),m=(0,n.uE)('<option value="">Selectionnez le type du fichier</option><option value="Document d&#39;identité">Document d&#39;identité</option><option value="Fiche de paie">Fiche de paie</option><option value="Document médical">Document médical</option><option value="Justificatif de domicile">Justificatif de domicile</option><option value="Autre">Autre</option>',6),f=[m];function h(e,o,t,m,h,b){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("button",{type:"none",id:"openNFButton",onClick:o[0]||(o[0]=()=>b.handleDisplay())},"NOUVEAU DOCUMENT"),h.displayForm?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("button",{id:"closeButton",onClick:o[1]||(o[1]=()=>b.handleDisplay())},"X"),r,(0,n._)("form",null,[(0,n._)("div",a,[s,(0,n._)("input",{class:"form-control",type:"file",id:"formFile",onChange:o[2]||(o[2]=e=>b.onFilesChange(e)),required:""},null,32)]),(0,n._)("div",u,[c,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formNameTitle","onUpdate:modelValue":o[3]||(o[3]=e=>h.name=e),placeholder:"Nom du fichier",maxlength:"30",required:""},null,512),[[l.nr,h.name]])]),(0,n._)("div",p,[d,(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",id:"formDocType","onUpdate:modelValue":o[4]||(o[4]=e=>h.type=e)},f,512),[[l.bM,h.type]])]),(0,n._)("button",{type:"submit",class:"btn btn-success",onClick:o[5]||(o[5]=e=>b.handleSubmit(e))},"Envoyer"),(0,n._)("button",{type:"none",class:"btn btn-warning",onClick:o[6]||(o[6]=()=>b.handleDisplay())},"Annuler")])],512)):(0,n.kq)("",!0)])}t(7658);var b={name:"ClientNewFileForm",data(){return{name:"",file:null,displayForm:!1,type:""}},methods:{onFilesChange(e){this.file=e.target.files[0]},handleSubmit(e){if(""==this.name||null==this.file||""==this.type)return;e.preventDefault();let o=new FormData;o.append("file",this.file),o.append("nom_document",this.name),o.append("type",this.type);let t=new XMLHttpRequest;t.open("POST",this.api_url+"document/addDocument"),t.setRequestHeader("Authorization",localStorage.getItem("token")),t.send(o),t.onload=()=>{if(200==t.status){let e=JSON.parse(t.response);console.log("File sent"),console.log(e.id_document),this.$parent.userFiles.push({nom_document:this.name+"."+this.file.name.split(".").pop(),id_document:e.id_document,type:this.type}),this.name="",this.file=null,this.type="",this.displayForm=!1,this.$notify({group:"foo",title:"Succès",text:"Votre document a bien été envoyé",type:"success"})}else console.log("Error while sending file"),this.$notify({group:"foo",title:"Erreur",text:"Une erreur est survenue lors de l'envoi du document",type:"error"})}},handleDisplay(){console.log("display"),this.displayForm=!this.displayForm}}},_=t(89);const v=(0,_.Z)(b,[["render",h]]);var y=v},6585:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return _e}});var n=t(3396),l=t(9242);const i={id:"topDog"},r={id:"profileForm"},a=(0,n._)("h2",null,"Profil",-1),s={class:"fields"},u={class:"mb-3 profilePageField"},c=(0,n._)("label",{for:"formName",class:"form-label"},"Nom",-1),p={class:"mb-3 profilePageField"},d=(0,n._)("label",{for:"formFirstName",class:"form-label"},"Prénom",-1),m={class:"mb-3 profilePageField"},f=(0,n._)("label",{for:"formEmail",class:"form-label"},"Email",-1),h={class:"mb-3 profilePageField"},b=(0,n._)("label",{for:"formGenre",class:"form-label"},"Genre",-1),_=(0,n._)("option",{value:""},"Selectionnez votre genre",-1),v=(0,n._)("option",{value:"1"},"Homme",-1),y=(0,n._)("option",{value:"2"},"Femme",-1),g=(0,n._)("option",{value:"3"},"Autre",-1),w=[_,v,y,g],I={class:"mb-3 profilePageField"},F=(0,n._)("label",{for:"formBirthDate",class:"form-label"},"Date de naissance",-1),C={class:"mb-3 profilePageField"},D=(0,n._)("label",{for:"formTelephone",class:"form-label"},"Telephone",-1),V={class:"mb-3 profilePageField"},k=(0,n._)("label",{for:"formCountry",class:"form-label"},"Pays",-1),U={class:"mb-3 profilePageField"},E=(0,n._)("label",{for:"formCity",class:"form-label"},"Ville",-1),P={class:"mb-3 profilePageField"},S=(0,n._)("label",{for:"formAddress",class:"form-label"},"Adresse",-1),A={class:"mb-3 profilePageField"},q=(0,n._)("label",{for:"formHousingStatus",class:"form-label"},"Statut immobilier",-1),x=(0,n.uE)('<option value="">Aujourd&#39;hui vous êtes ...</option><option value="Locataire">Locataire</option><option value="Propriétaire">Propriétaire</option><option value="Bénéficiare d&#39;un logement de fonction">Bénéficiare d&#39;un logement de fonction</option><option value="Hébergé à titre gratuit">Hébergé à titre gratuit</option><option value="Autre">Autre</option>',6),T=[x],N={class:"mb-3 profilePageField"},R=(0,n._)("label",{for:"formCurrentRent",class:"form-label"},"Loyer Actuel (Si applicable)",-1),j={class:"mb-3 profilePageField"},M=(0,n._)("label",{for:"formFamilyStatus",class:"form-label"},"Situation familiale",-1),L=(0,n.uE)('<option value="">Aujourd&#39;hui vous êtes ...</option><option value="Célibataire">Célibataire</option><option value="Marié(e) contrat de mariage">Marié(e) contrat de mariage</option><option value="Marié(e) communauté de biens">Marié(e) communauté de biens</option><option value="Concubin(e) / Vie maritale">Concubin(e) / Vie maritale</option><option value="PACS">PACS</option><option value="Divorcé(e)">Divorcé(e)</option><option value="Séparé(e)">Séparé(e)</option><option value="Veuf(ve)">Veuf(ve)</option><option value="Autre">Autre</option>',10),z=[L],B={class:"mb-3 profilePageField"},H=(0,n._)("label",{for:"formChildCount",class:"form-label"},"Nombre d'enfants",-1),$={class:"mb-3 profilePageField"},O=(0,n._)("label",{for:"formNationality",class:"form-label"},"Nationalité",-1),W={class:"mb-3 profilePageField"},Z=(0,n._)("label",{for:"formWorkStatus",class:"form-label"},"Situation professionnelle",-1),G=(0,n.uE)('<option value="">Aujourd&#39;hui vous êtes ...</option><option value="Employé">Employé</option><option value="Ouvrier">Ouvrier</option><option value="Cadre">Cadre</option><option value="Fonctionnaire">Fonctionnaire</option><option value="Enseignant">Enseignant</option><option value="Artisan commerçant">Artisan commerçant</option><option value="Chef d&#39;entreprise">Chef d&#39;entreprise</option><option value="Profession libérale">Profession libérale</option><option value="Profession libérale médicale">Profession libérale médicale</option><option value="Travailleur indépendant">Travailleur indépendant</option><option value="Congé parental">Congé parental</option><option value="Intermittent du spectacle">Intermittent du spectacle</option><option value="Agriculteur">Agriculteur</option><option value="Retraité">Retraité</option><option value="Etudiant">Etudiant</option><option value="Sans emploi">Sans emploi</option><option value="Autre">Autre</option>',18),J=[G],X={class:"mb-3 profilePageField"},Y=(0,n._)("label",{for:"formWorkContract",class:"form-label"},"Contrat",-1),K=(0,n.uE)('<option value="">Aujourd&#39;hui vous travaillez en ...</option><option value="CDI">CDI</option><option value="CDI Probatoire">CDI Probatoire</option><option value="CDD">CDD</option><option value="Intérim">Intérim</option><option value="Autre">Autre</option>',6),Q=[K],ee={class:"mb-3 profilePageField"},oe=(0,n._)("label",{for:"formWorkLength",class:"form-label"},"En poste depuis",-1),te=["min"],ne={class:"mb-3 profilePageField"},le=(0,n._)("label",{for:"formMainBank",class:"form-label"},"Banque principale",-1),ie={class:"mb-3 profilePageField"},re=(0,n._)("label",{for:"formMonthlyRevenue",class:"form-label"},"Revenu mensuel (€)",-1),ae={class:"mb-3 profilePageField"},se=(0,n._)("label",{for:"formAnnualPrime",class:"form-label"},"Prime annuelle (€) (Optionnel)",-1),ue={key:0,id:"userEditSuccessMessage"},ce={id:"filesList"};function pe(e,o,t,_,v,y){const g=(0,n.up)("HeaderComponent"),x=(0,n.up)("client-file-list");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(g),(0,n._)("div",i,[(0,n._)("form",r,[a,(0,n._)("div",s,[(0,n._)("div",u,[c,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formName","onUpdate:modelValue":o[0]||(o[0]=e=>v.userInfo.nom=e),placeholder:"Votre nom",required:"",disabled:""},null,512),[[l.nr,v.userInfo.nom]])]),(0,n._)("div",p,[d,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formFirstName","onUpdate:modelValue":o[1]||(o[1]=e=>v.userInfo.prenom=e),placeholder:"Votre prénom",required:"",disabled:""},null,512),[[l.nr,v.userInfo.prenom]])]),(0,n._)("div",m,[f,(0,n.wy)((0,n._)("input",{type:"email",class:"form-control",id:"formEmail","onUpdate:modelValue":o[2]||(o[2]=e=>v.userInfo.email=e),placeholder:"Votre adresse email",required:"",disabled:""},null,512),[[l.nr,v.userInfo.email]])]),(0,n._)("div",h,[b,(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",id:"formGenre","onUpdate:modelValue":o[3]||(o[3]=e=>v.userInfo.genre=e),required:""},w,512),[[l.bM,v.userInfo.genre]])]),(0,n._)("div",I,[F,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"formBirthDate","onUpdate:modelValue":o[4]||(o[4]=e=>v.userInfo.date_birth=e),required:""},null,512),[[l.nr,v.userInfo.date_birth]])]),(0,n._)("div",C,[D,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formTelephone","onUpdate:modelValue":o[5]||(o[5]=e=>v.userInfo.tel=e),placeholder:"Votre numéro",required:""},null,512),[[l.nr,v.userInfo.tel]])]),(0,n._)("div",V,[k,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formCountry","onUpdate:modelValue":o[6]||(o[6]=e=>v.userInfo.pays=e),placeholder:"Votre ville de résidence",required:""},null,512),[[l.nr,v.userInfo.pays]])]),(0,n._)("div",U,[E,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formCity","onUpdate:modelValue":o[7]||(o[7]=e=>v.userInfo.ville=e),placeholder:"Votre ville de résidence",required:""},null,512),[[l.nr,v.userInfo.ville]])]),(0,n._)("div",P,[S,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formAddress","onUpdate:modelValue":o[8]||(o[8]=e=>v.userInfo.adresse=e),placeholder:"Votre adresse",required:""},null,512),[[l.nr,v.userInfo.adresse]])]),(0,n._)("div",A,[q,(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",id:"formHousingStatus","onUpdate:modelValue":o[9]||(o[9]=e=>v.userInfo.status_immo=e),required:""},T,512),[[l.bM,v.userInfo.status_immo]])]),(0,n._)("div",N,[R,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"formCurrentRent","onUpdate:modelValue":o[10]||(o[10]=e=>v.userInfo.loyer_actuel=e),placeholder:"Votre loyer actuel",required:""},null,512),[[l.nr,v.userInfo.loyer_actuel]])]),(0,n._)("div",j,[M,(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",id:"formFamilyStatus","onUpdate:modelValue":o[11]||(o[11]=e=>v.userInfo.situation_familiale=e),required:""},z,512),[[l.bM,v.userInfo.situation_familiale]])]),(0,n._)("div",B,[H,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"formChildCount",min:"0","onUpdate:modelValue":o[12]||(o[12]=e=>v.userInfo.nombre_enfant=e),required:""},null,512),[[l.nr,v.userInfo.nombre_enfant]])]),(0,n._)("div",$,[O,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formNationality","onUpdate:modelValue":o[13]||(o[13]=e=>v.userInfo.nationalite=e),placeholder:"Votre nationalité",required:""},null,512),[[l.nr,v.userInfo.nationalite]])]),(0,n._)("div",W,[Z,(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",id:"formWorkStatus","onUpdate:modelValue":o[14]||(o[14]=e=>v.userInfo.situation_professionnelle=e),required:""},J,512),[[l.bM,v.userInfo.situation_professionnelle]])]),(0,n._)("div",X,[Y,(0,n.wy)((0,n._)("select",{class:"form-select","aria-label":"Default select example",id:"formWorkContract","onUpdate:modelValue":o[15]||(o[15]=e=>v.userInfo.contrat=e),required:""},Q,512),[[l.bM,v.userInfo.contrat]])]),(0,n._)("div",ee,[oe,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"formWorkLength",min:this.userInfo.date_birth,max:"2023-06-19","onUpdate:modelValue":o[16]||(o[16]=e=>v.userInfo.poste_depuis=e),required:""},null,8,te),[[l.nr,v.userInfo.poste_depuis]])]),(0,n._)("div",ne,[le,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"formMainBank","onUpdate:modelValue":o[17]||(o[17]=e=>v.userInfo.banque_principale=e),placeholder:"Votre banque principale",required:""},null,512),[[l.nr,v.userInfo.banque_principale]])]),(0,n._)("div",ie,[re,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"formMonthlyRevenue","onUpdate:modelValue":o[18]||(o[18]=e=>v.userInfo.revenu_mensuel=e),required:""},null,512),[[l.nr,v.userInfo.revenu_mensuel]])]),(0,n._)("div",ae,[se,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"formAnnualPrime","onUpdate:modelValue":o[19]||(o[19]=e=>v.userInfo.prime_annuelle=e)},null,512),[[l.nr,v.userInfo.prime_annuelle]])])]),(0,n._)("button",{type:"submit",class:"btn btn-primary",id:"saveButton",onClick:o[20]||(o[20]=e=>y.handlePatchUserInfo(e))},"Mettre à jour"),v.userEditSuccess?((0,n.wg)(),(0,n.iD)("div",ue,"Your informations have been stored")):(0,n.kq)("",!0)]),(0,n._)("div",ce,[(0,n.Wm)(x)])])])}t(7658);var de=t(9222),me=t(4057),fe={components:{HeaderComponent:de.Z,ClientFileList:me.Z},data(){return{userFiles:[],userInfo:{nom:"",prenom:"",email:"",genre:"",date_birth:"",tel:"",pays:"",ville:"",adresse:"",status_immo:"",situation_professionnelle:"",contrat:"",poste_depuis:"",banque_principale:"",situation_familiale:"",nationalite:"",revenu_mensuel:0,prime_annuelle:0,loyer_actuel:0,nombre_enfant:0},userEditSuccess:!1}},methods:{handlePatchUserInfo(e){e.target.checkValidity()&&(e.preventDefault(),fetch(this.api_url+"client/patchClient",{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.userInfo)}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.$notify({title:"Success",text:"Vos informations ont été mises à jour",type:"success"})})).catch((e=>{console.log(e),this.$notify({title:"Error",text:"Il y a eu une erreur lors de la mise à jour de vos informations",type:"error"})})))},fetchUserData(){fetch(this.api_url+"client/getClient",{headers:{"Content-Type":"application/json",authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.json();if(401!=e.status)throw new Error("Something went wrong");this.$router.push("/login")})).then((e=>{console.log(e),this.userInfo=e;for(const o in this.userInfo)"date_birth"==o||"poste_depuis"==o?this.userInfo[o]=this.userInfo[o].split("T")[0]:null==this.userInfo[o]&&(this.userInfo[o]="nombre_enfant"==o||"revenu_mensuel"==o||"prime_annuelle"==o||"loyer_actuel"==o?0:"")})).catch((e=>{console.log(e),this.$notify({group:"foo",title:"Erreur",text:"Une erreur est survenue lors de la récupération de vos informations"})}))}},mounted(){this.fetchUserData()}},he=t(89);const be=(0,he.Z)(fe,[["render",pe]]);var _e=be}}]);
//# sourceMappingURL=585.99f96546.js.map