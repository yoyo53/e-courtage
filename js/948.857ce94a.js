"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[948],{3948:function(e,n,l){l.r(n),l.d(n,{default:function(){return hn}});var t=l(3396),i=l(9242);const o={id:"main-body"},a={id:"body-left"},s={id:"profile-overview-area"},r=(0,t._)("h2",null,"Votre profil :",-1),u={id:"profile-list",class:"section-list"},d={class:"profile-item"},m=(0,t._)("span",null,"Nom :",-1),p={class:"profile-item"},c=(0,t._)("span",null,"Prénom :",-1),f={class:"profile-item"},h=(0,t._)("span",null,"Date de Naissance :",-1),b={class:"profile-item"},_=(0,t._)("span",null,"Numéro de téléphone :",-1),w={class:"profile-item"},D=(0,t._)("span",null,"Adresse mail :",-1),v={class:"profile-item"},y=(0,t._)("span",null,"Profession :",-1),g={class:"profile-item"},F={id:"notifications-view-area"},C=(0,t._)("h2",null,"Vos notifications :",-1),k={id:"notifications-list",class:"section-list"},U={id:"body-right"},V={id:"demands-overview-area"},j=(0,t._)("h2",null,"Liste de vos demandes en cours :",-1),q={id:"demands-list",class:"section-list"},A={id:"add-demand-area"};function N(e,n,l,N,z,E){const P=(0,t.up)("HeaderComponent"),x=(0,t.up)("client-file-list"),L=(0,t.up)("client-notification-list-element"),R=(0,t.up)("client-demands-list-element"),S=(0,t.up)("ClientDemandForm");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(P),(0,t._)("div",o,[(0,t._)("div",a,[(0,t._)("div",s,[r,(0,t._)("ul",u,[(0,t._)("li",d,[m,(0,t.Uk)(),(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>z.userData.name=e)},null,512),[[i.nr,z.userData.name]])]),(0,t._)("li",p,[c,(0,t.Uk)(),(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>z.userData.firstname=e)},null,512),[[i.nr,z.userData.firstname]])]),(0,t._)("li",f,[h,(0,t.Uk)(),(0,t.wy)((0,t._)("input",{type:"date","onUpdate:modelValue":n[2]||(n[2]=e=>z.userData.birthdate=e)},null,512),[[i.nr,z.userData.birthdate]])]),(0,t._)("li",b,[_,(0,t.Uk)(),(0,t.wy)((0,t._)("input",{type:"tel","onUpdate:modelValue":n[3]||(n[3]=e=>z.userData.phone=e)},null,512),[[i.nr,z.userData.phone]])]),(0,t._)("li",w,[D,(0,t.Uk)(),(0,t.wy)((0,t._)("input",{type:"email","onUpdate:modelValue":n[4]||(n[4]=e=>z.userData.email=e)},null,512),[[i.nr,z.userData.email]])]),(0,t._)("li",v,[y,(0,t.Uk)(),(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=e=>z.userData.occupation=e)},null,512),[[i.nr,z.userData.occupation]])]),(0,t._)("li",g,[(0,t.Wm)(x)])])]),(0,t._)("div",F,[C,(0,t._)("ul",k,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(z.userNotifications,(e=>((0,t.wg)(),(0,t.j4)(L,{key:e.id,notification:e},null,8,["notification"])))),128))])])]),(0,t._)("div",U,[(0,t._)("div",V,[j,(0,t._)("ul",q,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(z.userDemands,(e=>((0,t.wg)(),(0,t.j4)(R,{key:e.id,demand:e},null,8,["demand"])))),128))])]),(0,t._)("div",A,[(0,t.Wm)(S,{id:"demand-form"})])])])])}const z={key:0,id:"modal-form",ref:"modalForm"},E=(0,t._)("h2",null,"New Demand",-1),P={id:"form"},x={class:"mb-3"},L=(0,t._)("label",{for:"formSubject",class:"form-label"},"Sujet",-1),R={class:"mb-3"},S=(0,t._)("label",{for:"formAmount",class:"form-label"},"Nature du projet ?",-1),B=(0,t.uE)('<option selected>Choisissez la nature de votre projet</option><option value="1">Achat</option><option value="2">Construction</option><option value="3">Travaux</option><option value="4">Autre</option>',5),M=[B],H={class:"mb-3"},O=(0,t._)("label",{for:"formDuration",class:"form-label"},"Type de bien ?",-1),Z=(0,t.uE)('<option selected>Choisissez le type du bien</option><option value="1">Maison</option><option value="2">Appartement</option><option value="3">Terrain</option><option value="4">Autre</option>',5),$=[Z],T={class:"mb-3"},W=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Age du bien ?",-1),K=(0,t._)("option",{selected:""},"Choisissez l'âge du bien",-1),X=(0,t._)("option",{value:"1"},"Ancien",-1),Y=(0,t._)("option",{value:"2"},"Neuf",-1),I=(0,t._)("option",{value:"3"},"Vente sur plan",-1),J=[K,X,Y,I],G={class:"mb-3"},Q=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Usage du bien ?",-1),ee=(0,t.uE)('<option selected>Choisissez l&#39;usage du bien</option><option value="1">Residence principale</option><option value="2">Residence secondaire</option><option value="3">Utilisation professionnelle</option><option value="4">Autre</option>',5),ne=[ee],le={class:"mb-3"},te=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Ou en êtes vous dans votre recherche ?",-1),ie=(0,t.uE)('<option selected>Renseigner où vous en êtes dans votre recherche</option><option value="1">En recherche</option><option value="2">Vous vous préparez à faire une offre</option><option value="3">Vous avez déjà fait une offre</option><option value="4">Vous avez déjà signé un compromis</option><option value="5">Autre</option>',6),oe=[ie],ae={class:"mb-3"},se=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Où se situe le bien ?",-1),re={class:"mb-3"},ue=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Montant de l'acquisition ?",-1),de={class:"mb-3"},me=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Frais de notaire (opt.) ?",-1),pe={class:"mb-3"},ce=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Acquisition en solo ?",-1),fe={class:"mb-3"},he=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Votre apport personnel ?",-1),be={class:"mb-3"},_e=(0,t._)("label",{for:"formPurpose",class:"form-label"},"Commentaires sur le projet ?",-1),we={class:"mb-3"},De=(0,t._)("label",{for:"formFileMultiple",class:"form-label"},"Vos Fichiers",-1);function ve(e,n,l,o,a,s){const r=(0,t.up)("ClientFileListCheckableElement"),u=(0,t.up)("client-new-file-form");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("button",{id:"openButton",onClick:n[0]||(n[0]=()=>s.handleDisplay())},"NOUVELLE DEMANDE"),a.displayForm?((0,t.wg)(),(0,t.iD)("div",z,[(0,t._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>s.handleDisplay())},"X"),E,(0,t._)("form",P,[(0,t._)("div",x,[L,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formSubject","onUpdate:modelValue":n[2]||(n[2]=e=>a.newDemand.subject=e),required:""},null,512),[[i.nr,a.newDemand.subject]])]),(0,t._)("div",R,[S,(0,t.wy)((0,t._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":n[3]||(n[3]=e=>a.newDemand.nature=e),required:""},M,512),[[i.bM,a.newDemand.nature]])]),(0,t._)("div",H,[O,(0,t.wy)((0,t._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":n[4]||(n[4]=e=>a.newDemand.type=e),required:""},$,512),[[i.bM,a.newDemand.type]])]),(0,t._)("div",T,[W,(0,t.wy)((0,t._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":n[5]||(n[5]=e=>a.newDemand.age=e),required:""},J,512),[[i.bM,a.newDemand.age]])]),(0,t._)("div",G,[Q,(0,t.wy)((0,t._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":n[6]||(n[6]=e=>a.newDemand.usage=e),required:""},ne,512),[[i.bM,a.newDemand.usage]])]),(0,t._)("div",le,[te,(0,t.wy)((0,t._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":n[7]||(n[7]=e=>a.newDemand.researchStatus=e),required:""},oe,512),[[i.bM,a.newDemand.researchStatus]])]),(0,t._)("div",ae,[se,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formPurpose","onUpdate:modelValue":n[8]||(n[8]=e=>a.newDemand.location=e),required:""},null,512),[[i.nr,a.newDemand.location]])]),(0,t._)("div",re,[ue,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formPurpose","onUpdate:modelValue":n[9]||(n[9]=e=>a.newDemand.acquisitionAmount=e),required:""},null,512),[[i.nr,a.newDemand.acquisitionAmount]])]),(0,t._)("div",de,[me,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formPurpose","onUpdate:modelValue":n[10]||(n[10]=e=>a.newDemand.notaireAmount=e)},null,512),[[i.nr,a.newDemand.notaireAmount]])]),(0,t._)("div",pe,[ce,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formPurpose","onUpdate:modelValue":n[11]||(n[11]=e=>a.newDemand.solo=e),required:""},null,512),[[i.nr,a.newDemand.solo]])]),(0,t._)("div",fe,[he,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formPurpose","onUpdate:modelValue":n[12]||(n[12]=e=>a.newDemand.apport=e),required:""},null,512),[[i.nr,a.newDemand.apport]])]),(0,t._)("div",be,[_e,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formPurpose","onUpdate:modelValue":n[13]||(n[13]=e=>a.newDemand.comments=e)},null,512),[[i.nr,a.newDemand.comments]])]),(0,t._)("div",we,[De,(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.files,(e=>((0,t.wg)(),(0,t.j4)(r,{key:e.name,file:e},null,8,["file"])))),128))]),(0,t.Wm)(u)]),(0,t._)("button",{type:"submit",class:"btn btn-primary",onClick:n[14]||(n[14]=e=>s.handleSubmit(e))},"Envoyer")])],512)):(0,t.kq)("",!0)])}l(7658);var ye=l(7139);const ge=["id","name"],Fe=["for"],Ce=(0,t._)("br",null,null,-1);function ke(e,n,l,i,o,a){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("input",{type:"checkbox",id:l.file.id,name:l.file.id,value:"Bike",onChange:n[0]||(n[0]=e=>a.handleAddFile(e))},null,40,ge),(0,t._)("label",{for:l.file.id},(0,ye.zw)(l.file.name),9,Fe),Ce])}var Ue={name:"ClientFileListCheckableElement",props:{file:{type:Object,required:!0}},methods:{handleAddFile(e){e.target.checked?this.$parent.selectedFiles.push(this.file.id):this.$parent.selectedFiles=this.$parent.selectedFiles.filter((e=>e!==this.file.id)),console.log(this.$parent.selectedFiles)}}},Ve=l(89);const je=(0,Ve.Z)(Ue,[["render",ke]]);var qe=je;const Ae={key:0,id:"modal-form",ref:"modalForm"},Ne=(0,t._)("h2",null,"New Demand",-1),ze={class:"mb-3"},Ee=(0,t._)("label",{for:"formFile",class:"form-label"},"Votre fichier",-1),Pe={class:"mb-3"},xe=(0,t._)("label",{for:"formNameTitle",class:"form-label"},"Nom du fichier",-1);function Le(e,n,l,o,a,s){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("button",{type:"none",id:"openButton",onClick:n[0]||(n[0]=()=>s.handleDisplay())},"NOUVEAU FICHIER"),a.displayForm?((0,t.wg)(),(0,t.iD)("div",Ae,[(0,t._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>s.handleDisplay())},"X"),Ne,(0,t._)("form",null,[(0,t._)("div",ze,[Ee,(0,t._)("input",{class:"form-control",type:"file",id:"formFile",onChange:n[2]||(n[2]=e=>s.onFilesChange(e)),required:""},null,32)]),(0,t._)("div",Pe,[xe,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",id:"formNameTitle","onUpdate:modelValue":n[3]||(n[3]=e=>a.name=e),required:""},null,512),[[i.nr,a.name]])]),(0,t._)("button",{type:"submit",class:"btn btn-success",onClick:n[4]||(n[4]=e=>s.handleSubmit(e))},"Envoyer"),(0,t._)("button",{type:"none",class:"btn btn-warning",onClick:n[5]||(n[5]=()=>s.handleDisplay())},"Annuler")])],512)):(0,t.kq)("",!0)])}var Re={name:"ClientNewFileForm",data(){return{name:"",file:null,displayForm:!1}},methods:{onFilesChange(e){this.file=e.target.files[0]},handleSubmit(e){""!=this.name&&null!=this.file&&(e.preventDefault(),this.$parent.files.push({name:this.name,file:this.file,id:this.$parent.files.length+1}),this.displayForm=!1)},handleDisplay(){console.log("display"),this.displayForm=!this.displayForm}}};const Se=(0,Ve.Z)(Re,[["render",Le]]);var Be=Se,Me={name:"ClientDemandForm",data(){return{newDemand:{subject:"",nature:"",type:"",age:"",usage:"",researchStatus:"",location:"",acquisitionAmount:"",notaireAmount:"",solo:!1,apport:"",comments:""},displayForm:!1,selectedFiles:[],files:[]}},methods:{handleSubmit(e){e.preventDefault(),this.$parent.userDemands.push({subject:this.subject,amount:this.amount,duration:this.duration,purpose:this.purpose,files:this.files}),console.log(this.$parent.userDemands);let n=new FormData;n.append("subject",this.subject),n.append("amount",this.amount),n.append("duration",this.duration),n.append("purpose",this.purpose),n.append("files",this.files);let l=new XMLHttpRequest;l.open("POST","http://localhost:3000/api/demand"),l.send(n),l.onload=()=>{console.log(l.response)},this.subject="",this.amount="",this.duration="",this.purpose="",this.files=[],this.displayForm=!1},handleDisplay(){this.displayForm=!this.displayForm},onFilesChange(e){this.files=e.target.files}},components:{ClientFileListCheckableElement:qe,ClientNewFileForm:Be},mounted(){this.files=[{name:"file1",id:"1"},{name:"file2",id:"2"},{name:"file3",id:"3"}]}};const He=(0,Ve.Z)(Me,[["render",ve]]);var Oe=He,Ze=l(3216);const $e={id:"notificationListElement"};function Te(e,n,l,i,o,a){return(0,t.wg)(),(0,t.iD)("div",$e,[(0,t._)("span",null,(0,ye.zw)(l.notification.demand),1),(0,t._)("span",null,(0,ye.zw)(l.notification.bank),1)])}var We={name:"ClientNotificationListElement",props:{notification:{type:Object,required:!0}}};const Ke=(0,Ve.Z)(We,[["render",Te]]);var Xe=Ke;const Ye={id:"demandListElement"},Ie={class:"demandRow"},Je={class:"demandRow"};function Ge(e,n,l,i,o,a){return(0,t.wg)(),(0,t.iD)("div",Ye,[(0,t._)("h3",null,(0,ye.zw)(l.demand.subject),1),(0,t._)("div",Ie,[(0,t._)("span",null,(0,ye.zw)(l.demand.amount),1),(0,t.Uk)(),(0,t._)("span",null,(0,ye.zw)(l.demand.duration),1)]),(0,t._)("div",Je,[(0,t._)("span",null,(0,ye.zw)(l.demand.purpose),1)]),(0,t._)("button",{id:"detailButton",onClick:n[0]||(n[0]=()=>a.handleDisplayDetail())}," Plus ")])}var Qe={name:"ClientDemandsListElement",props:{demand:{type:Object,required:!0}},methods:{handleDisplayDetail(){alert("WIP")}}};const en=(0,Ve.Z)(Qe,[["render",Ge]]);var nn=en;const ln={key:0,id:"modal-list"},tn=(0,t._)("h2",{style:{"margin-bottom":"30px"}},"Vos fichiers",-1),on={class:"list-group"},an=["onClick"],sn=["onClick"],rn=["onClick"];function un(e,n,l,i,o,a){const s=(0,t.up)("client-new-file-form");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("button",{onClick:n[0]||(n[0]=()=>a.handleDisplay())},"Vos fichiers"),o.display?((0,t.wg)(),(0,t.iD)("div",ln,[(0,t._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>a.handleDisplay())},"X"),(0,t._)("div",null,[tn,(0,t._)("ul",on,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.userFiles,(e=>((0,t.wg)(),(0,t.iD)("li",{class:"fileRow list-group-item",key:e.name},[(0,t._)("div",null,(0,ye.zw)(e.name)+" - "+(0,ye.zw)(e.use)+" - "+(0,ye.zw)(e.size),1),(0,t._)("div",null,[(0,t._)("button",{class:"btn btn-success fileRowButton",onClick:()=>a.handleDownload(e.name)},"Télécharger",8,an),(0,t._)("button",{class:"btn btn-light fileRowButton",onClick:()=>a.handleReplace(e.name)},"Remplacer",8,sn),(0,t._)("button",{class:"btn btn-danger fileRowButton",onClick:()=>a.handleDelete(e.name)},"Supprimer",8,rn)])])))),128))])]),(0,t.Wm)(s)])):(0,t.kq)("",!0)])}var dn={components:{ClientNewFileForm:Be},name:"ClientFileList",data(){return{userFiles:[],display:!1}},methods:{handleDisplay(){this.display=!this.display},handleDelete(e){console.log(e),confirm("Voulez-vous vraiment supprimer ce fichier ?")&&(this.userFiles=this.userFiles.filter((n=>n.name!==e)),console.log(this.userFiles))},onFilesChange(e){this.newFile.file=e.target.files[0]},handleSubmit(e){""!=this.newFile.name&&""!=this.newFile.use&&null!=this.newFile.file&&(e.preventDefault(),this.userFiles.push({name:this.newFile.name,use:this.newFile.use,size:this.newFile.file.size,file:this.newFile.file}),this.newFile={name:"",use:"",file:null},this.newForm=!1)},handleDownload(e){console.log(e)},handleReplace(e){console.log(e)},fetchUserFiles(){}},mounted(){this.userFiles=[{name:"test",use:"test",size:1e3,file:null},{name:"test2",use:"test2",size:2e3,file:null}],this.fetchUserFiles()}};const mn=(0,Ve.Z)(dn,[["render",un]]);var pn=mn,cn={name:"ClientHomeView",components:{HeaderComponent:Ze.Z,ClientDemandForm:Oe,ClientNotificationListElement:Xe,ClientDemandsListElement:nn,ClientFileList:pn},data(){return{userData:{},userNotifications:[],userDemands:[]}},methods:{fetchUserData(){this.userData={name:"Doe",firstname:"John",birthdate:"2002-09-29",phone:"0123456789",email:"john.doe@gmail.com",occupation:"Software Engineer"},console.log(this.userData)},fetchUserNotifications(){this.userNotifications=[{demand:"Demande de prêt 1",bank:"Crédit Agricole"},{demand:"Demande de prêt 1",bank:"BNP Paribas"},{demand:"Demande de prêt 2",bank:"Crédit Agricole"}]},fetchUserDemands(){},sendUserData(){}},mounted(){console.log("Mounted"),this.fetchUserData(),this.fetchUserNotifications(),this.fetchUserDemands()},beforeUnmount(){console.log("Unmounted"),this.sendUserData()}};const fn=(0,Ve.Z)(cn,[["render",N]]);var hn=fn}}]);
//# sourceMappingURL=948.857ce94a.js.map