(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[79],{7045:function(e,n,t){var a=t(6339),l=t(3070);e.exports=function(e,n,t){return t.get&&a(t.get,n,{getter:!0}),t.set&&a(t.set,n,{setter:!0}),l.f(e,n,t)}},2062:function(e,n,t){"use strict";var a=t(9781),l=t(1702),s=t(7045),d=URLSearchParams.prototype,i=l(d.forEach);a&&!("size"in d)&&s(d,"size",{get:function(){var e=0;return i(this,(function(){e++})),e},configurable:!0,enumerable:!0})},7079:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return qe}});var a=t(3396),l=t(9242);const s=e=>((0,a.dD)("data-v-147645e3"),e=e(),(0,a.Cn)(),e),d={id:"main-body"},i={id:"demands-area-header"},o={id:"research-input",class:"input-group flex-nowrap"},r={class:"sort-div"},u=s((()=>(0,a._)("option",{value:""},"Trier par :",-1))),m=s((()=>(0,a._)("option",{value:"Name"},"Nom",-1))),p=s((()=>(0,a._)("option",{value:"Value"},"Valeur",-1))),c=s((()=>(0,a._)("option",{value:"Salaire"},"Salaire",-1))),_=[u,m,p,c],h={class:"sort-div"},w=s((()=>(0,a._)("option",{value:"0"},"Afficher Tous",-1))),f=s((()=>(0,a._)("option",{value:"1"},"Favoris Uniquement",-1))),y=s((()=>(0,a._)("option",{value:"2"},"Afficher rejetés",-1))),g=s((()=>(0,a._)("option",{value:"3"},"Afficher acceptés",-1))),v=[w,f,y,g],D={id:"demands-overview-area"},b=s((()=>(0,a._)("h2",null,"Liste des demandes :",-1))),z={id:"demands-list",class:"section-list"};function k(e,n,t,s,u,m){const p=(0,a.up)("HeaderComponent"),c=(0,a.up)("client-bank-demands-list-element");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(p),(0,a._)("div",d,[(0,a._)("div",i,[(0,a._)("div",o,[(0,a.wy)((0,a._)("input",{type:"text",id:"",class:"form-control",placeholder:"Recherche","aria-label":"Recherche","aria-describedby":"addon-wrapping","onUpdate:modelValue":n[0]||(n[0]=e=>u.searchInput=e)},null,512),[[l.nr,u.searchInput]])]),(0,a._)("div",r,[(0,a.wy)((0,a._)("select",{class:"sort-choices form-select","aria-label":"Default select example","onUpdate:modelValue":n[1]||(n[1]=e=>u.orderBy=e)},_,512),[[l.bM,u.orderBy]])]),(0,a._)("div",h,[(0,a.wy)((0,a._)("select",{class:"sort-choices form-select","aria-label":"Default select example","onUpdate:modelValue":n[2]||(n[2]=e=>u.onlyPinned=e)},v,512),[[l.bM,u.onlyPinned]])])]),(0,a._)("div",D,[b,(0,a._)("ul",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.displayedDemands,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.id_demande,demand:e},null,8,["demand"])))),128))])])])])}t(7658);var C=t(7139);const L=e=>((0,a.dD)("data-v-60fe3466"),e=e(),(0,a.Cn)(),e),A={id:"buttons_options"},S=L((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-circle-fill",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"})],-1))),$=[S],x=L((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})],-1))),E=[x],j={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-star",viewBox:"0 0 16 16"},B=L((()=>(0,a._)("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"},null,-1))),I=[B],P={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-star-fill",viewBox:"0 0 16 16"},F=L((()=>(0,a._)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"},null,-1))),T=[F],R={class:"demandRow"},U={class:"demandRow"},N={class:"demandRow"};function V(e,n,t,l,s,d){const i=(0,a.up)("bank-demand-detail");return(0,a.wg)(),(0,a.iD)("div",{id:"demandListElement",class:(0,C.C_)({approvedDemand:2==t.demand.statut,refusedDemand:-1==t.demand.statut,pinnedDemand:1==t.demand.statut})},[(0,a._)("div",A,[(0,a._)("span",null,[(0,a._)("p",{id:"valid",class:"but",onClick:n[0]||(n[0]=()=>d.validElement())},$)]),(0,a._)("span",null,[(0,a._)("p",{id:"delete",class:"but",onClick:n[1]||(n[1]=()=>d.deleteElement())},E)]),(0,a._)("span",null,[(0,a._)("p",{id:"favorite",class:"but",onClick:n[2]||(n[2]=()=>d.favoriteElement())},[0==t.demand.statut?((0,a.wg)(),(0,a.iD)("svg",j,I)):((0,a.wg)(),(0,a.iD)("svg",P,T))])])]),(0,a._)("h2",null,(0,C.zw)(t.demand.sujet),1),(0,a._)("div",R,[(0,a._)("span",null," Nom : "+(0,C.zw)(t.demand.client.nom)+" "+(0,C.zw)(t.demand.client.prenom),1),(0,a.Uk)(),(0,a._)("span",null," Salaire : "+(0,C.zw)(t.demand.client.revenu_mensuel)+" €",1)]),(0,a._)("div",U,[(0,a._)("span",null," Valeur : "+(0,C.zw)(t.demand.montant_bien)+" €",1)]),(0,a._)("div",N,[(0,a._)("span",null,(0,C.zw)(t.demand.commentaire),1)]),(0,a.Wm)(i,{demand:t.demand},null,8,["demand"])],2)}const q=e=>((0,a.dD)("data-v-d441baf2"),e=e(),(0,a.Cn)(),e),M={key:0,id:"modal-form",ref:"modalForm"},H={id:"bankDemandDetailFields"},O={id:"top-part"},Z={id:"clientInfo",class:"bankDemandDetailDivision"},J=q((()=>(0,a._)("span",null,"Nom : ",-1))),K=q((()=>(0,a._)("span",null,"Prénom : ",-1))),W=q((()=>(0,a._)("span",null,"Email : ",-1))),Y=q((()=>(0,a._)("span",null,"Téléphone : ",-1))),G=q((()=>(0,a._)("span",null,"Pays : ",-1))),X=q((()=>(0,a._)("span",null,"Ville : ",-1))),Q=q((()=>(0,a._)("span",null,"Adresse : ",-1))),ee=q((()=>(0,a._)("span",null,"Status immobilier : ",-1))),ne=q((()=>(0,a._)("span",null,"Situation professionnelle : ",-1))),te=q((()=>(0,a._)("span",null,"Contrat : ",-1))),ae=q((()=>(0,a._)("span",null,"Poste depuis : ",-1))),le=q((()=>(0,a._)("span",null,"Banque principale : ",-1))),se=q((()=>(0,a._)("span",null,"Situation familiale : ",-1))),de=q((()=>(0,a._)("span",null,"Nationalité : ",-1))),ie=q((()=>(0,a._)("span",null,"Revenu mensuel : ",-1))),oe=q((()=>(0,a._)("span",null,"Prime annuelle : ",-1))),re=q((()=>(0,a._)("span",null,"Loyer actuel : ",-1))),ue=q((()=>(0,a._)("span",null,"Nombre d'enfants : ",-1))),me={id:"demandInfo",class:"bankDemandDetailDivision"},pe=q((()=>(0,a._)("span",null,"Sujet : ",-1))),ce=q((()=>(0,a._)("span",null,"Nature : ",-1))),_e=q((()=>(0,a._)("span",null,"Type : ",-1))),he=q((()=>(0,a._)("span",null,"Age : ",-1))),we=q((()=>(0,a._)("span",null,"Usage : ",-1))),fe=q((()=>(0,a._)("span",null,"Status recherche : ",-1))),ye=q((()=>(0,a._)("span",null,"Pays : ",-1))),ge=q((()=>(0,a._)("span",null,"Ville : ",-1))),ve=q((()=>(0,a._)("span",null,"Montant bien : ",-1))),De=q((()=>(0,a._)("span",null,"Montant travaux : ",-1))),be=q((()=>(0,a._)("span",null,"Frais notaire : ",-1))),ze=q((()=>(0,a._)("span",null,"Apport personnel : ",-1))),ke=q((()=>(0,a._)("span",null,"Commentaire : ",-1))),Ce=q((()=>(0,a._)("span",null,"Accompagnement : ",-1))),Le={id:"demandFiles",class:"bankDemandDetailDivision"},Ae=q((()=>(0,a._)("p",null,"Documents : ",-1))),Se={class:"fileRowText"},$e={id:"fileRowTextName"},xe={id:"bankDemandDetailBottomButtons"};function Ee(e,n,t,l,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{id:"detailButton",onClick:n[0]||(n[0]=()=>d.handleDisplay())},"Détails"),s.displayDetail?((0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("button",{id:"closeButton",onClick:n[1]||(n[1]=()=>d.handleDisplay())},"X"),(0,a._)("h2",null,(0,C.zw)(t.demand.sujet),1),(0,a._)("div",H,[(0,a._)("div",O,[(0,a._)("div",Z,[(0,a._)("p",null,[J,(0,a._)("span",null,(0,C.zw)(t.demand.client.nom),1)]),(0,a._)("p",null,[K,(0,a._)("span",null,(0,C.zw)(t.demand.client.prenom),1)]),(0,a._)("p",null,[W,(0,a._)("span",null,(0,C.zw)(t.demand.client.email),1)]),(0,a._)("p",null,[Y,(0,a._)("span",null,(0,C.zw)(t.demand.client.tel),1)]),(0,a._)("p",null,[G,(0,a._)("span",null,(0,C.zw)(t.demand.client.pays),1)]),(0,a._)("p",null,[X,(0,a._)("span",null,(0,C.zw)(t.demand.client.ville),1)]),(0,a._)("p",null,[Q,(0,a._)("span",null,(0,C.zw)(t.demand.client.adresse),1)]),(0,a._)("p",null,[ee,(0,a._)("span",null,(0,C.zw)(t.demand.client.status_immo),1)]),(0,a._)("p",null,[ne,(0,a._)("span",null,(0,C.zw)(t.demand.client.situation_professionnelle),1)]),(0,a._)("p",null,[te,(0,a._)("span",null,(0,C.zw)(t.demand.client.contrat),1)]),(0,a._)("p",null,[ae,(0,a._)("span",null,(0,C.zw)(t.demand.client.poste_depuis),1)]),(0,a._)("p",null,[le,(0,a._)("span",null,(0,C.zw)(t.demand.client.banque_principale),1)]),(0,a._)("p",null,[se,(0,a._)("span",null,(0,C.zw)(t.demand.client.situation_familiale),1)]),(0,a._)("p",null,[de,(0,a._)("span",null,(0,C.zw)(t.demand.client.nationalite),1)]),(0,a._)("p",null,[ie,(0,a._)("span",null,(0,C.zw)(t.demand.client.revenu_mensuel),1)]),(0,a._)("p",null,[oe,(0,a._)("span",null,(0,C.zw)(t.demand.client.prime_annuelle),1)]),(0,a._)("p",null,[re,(0,a._)("span",null,(0,C.zw)(t.demand.client.loyer_actuel),1)]),(0,a._)("p",null,[ue,(0,a._)("span",null,(0,C.zw)(t.demand.client.nombre_enfant),1)])]),(0,a._)("div",me,[(0,a._)("p",null,[pe,(0,a._)("span",null,(0,C.zw)(t.demand.sujet),1)]),(0,a._)("p",null,[ce,(0,a._)("span",null,(0,C.zw)(t.demand.nature),1)]),(0,a._)("p",null,[_e,(0,a._)("span",null,(0,C.zw)(t.demand.type),1)]),(0,a._)("p",null,[he,(0,a._)("span",null,(0,C.zw)(t.demand.age),1)]),(0,a._)("p",null,[we,(0,a._)("span",null,(0,C.zw)(t.demand.usage),1)]),(0,a._)("p",null,[fe,(0,a._)("span",null,(0,C.zw)(t.demand.status_recherche),1)]),(0,a._)("p",null,[ye,(0,a._)("span",null,(0,C.zw)(t.demand.pays),1)]),(0,a._)("p",null,[ge,(0,a._)("span",null,(0,C.zw)(t.demand.ville),1)]),(0,a._)("p",null,[ve,(0,a._)("span",null,(0,C.zw)(t.demand.montant_bien),1)]),(0,a._)("p",null,[De,(0,a._)("span",null,(0,C.zw)(t.demand.montant_travaux),1)]),(0,a._)("p",null,[be,(0,a._)("span",null,(0,C.zw)(t.demand.frais_notaire),1)]),(0,a._)("p",null,[ze,(0,a._)("span",null,(0,C.zw)(t.demand.apport_personnel),1)]),(0,a._)("p",null,[ke,(0,a._)("span",null,(0,C.zw)(t.demand.commentaire),1)]),(0,a._)("p",null,[Ce,(0,a._)("span",null,(0,C.zw)(1==t.demand.accompagnement?"Seul":"En groupe"),1)])])]),(0,a._)("div",Le,[Ae,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.demand.files,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"fileRow list-group-item",key:e.name},[(0,a._)("div",Se,[(0,a._)("span",$e,(0,C.zw)(e.nom_document),1),(0,a._)("span",null,(0,C.zw)(e.type),1)])])))),128)),(0,a._)("button",{class:"btn btn-secondary",onClick:n[2]||(n[2]=()=>d.handleDownload(t.demand.id_demande,t.demand.client.nom+" "+t.demand.client.prenom+" : Fichiers "+t.demand.sujet))},"Télécharger tous les documents")])]),(0,a._)("div",xe,[(0,a._)("button",{class:"btn btn-primary",onClick:n[3]||(n[3]=()=>d.handleFavorite())},"Épingler"),(0,a._)("button",{class:"btn btn-success",onClick:n[4]||(n[4]=()=>d.handleValid())},"Accepter"),(0,a._)("button",{class:"btn btn-danger",onClick:n[5]||(n[5]=()=>d.handleDelete())},"Refuser")])],512)):(0,a.kq)("",!0)])}t(2062);var je={data(){return{displayDetail:!1}},props:{demand:{type:Object,required:!0}},methods:{handleDisplay(){this.displayDetail=!this.displayDetail},handleDownload(e,n){console.log(e),fetch(this.api_url+"document/downloadAllDocumentsBanque/"+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>{if(e.ok)return e.blob();throw new Error("Something went wrong")})).then((e=>{console.log(e);const t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=t,a.setAttribute("download",n+".zip"),document.body.appendChild(a),a.click()})).catch((e=>{console.log(e)}))},handleFavorite(){this.$parent.favoriteElement(),this.handleDisplay()},handleValid(){this.$parent.validElement(),this.handleDisplay()},handleDelete(){this.$parent.deleteElement(),this.handleDisplay()}}},Be=t(89);const Ie=(0,Be.Z)(je,[["render",Ee],["__scopeId","data-v-d441baf2"]]);var Pe=Ie,Fe={components:{BankDemandDetail:Pe},name:"ClientDemandsListElement",props:{demand:{type:Object,required:!0}},methods:{deleteElement(){-1!=this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut?this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut=-1:this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut=0,console.log(this.$parent.userDemands),fetch(this.api_url+"demande_banque/updateDemande/"+this.demand.id_demande,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.demand)}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.$notify({title:"Success",text:-1==this.demand.statut?"La demande a été refusée":"La demande n'est plus refusée",type:"success"}),this.$parent.performAllFilters()})).catch((e=>{console.log(e),this.$notify({title:"Error",text:"Il y a eu une erreur lors de la mise à jour de la demande",type:"error"})}))},validElement(){2!=this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut?this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut=2:this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut=1,console.log(this.$parent.userDemands),fetch(this.api_url+"demande_banque/updateDemande/"+this.demand.id_demande,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.demand)}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.$notify({title:"Success",text:2==this.demand.statut?"La demande a été acceptée":"La demande n'est plus acceptée",type:"success"}),this.$parent.performAllFilters()})).catch((e=>{console.log(e),this.$notify({title:"Error",text:"Il y a eu une erreur lors de la mise à jour de la demande",type:"error"})}))},favoriteElement(){0==this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut?this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut=1:this.$parent.userDemands.find((e=>e.id_demande==this.demand.id_demande)).statut=0,console.log(this.$parent.userDemands),fetch(this.api_url+"demande_banque/updateDemande/"+this.demand.id_demande,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(this.demand)}).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong")})).then((e=>{console.log(e),this.$notify({title:"Success",text:1==this.demand.statut?"La demande a été épinglée":"La demande a été désépinglée",type:"success"}),this.$parent.performAllFilters()})).catch((e=>{console.log(e),this.$notify({title:"Error",text:"Il y a eu une erreur lors de la mise à jour de la demande",type:"error"})}))}}};const Te=(0,Be.Z)(Fe,[["render",V],["__scopeId","data-v-60fe3466"]]);var Re=Te,Ue=t(2498),Ne={name:"BankHomeView",components:{HeaderComponent:Ue.Z,ClientBankDemandsListElement:Re},data(){return{userDemands:[],displayedDemands:[],searchInput:"",orderBy:"",onlyPinned:0}},watch:{searchInput(e){console.log(e),this.performAllFilters()},orderBy(e){console.log(e),this.performAllFilters()},onlyPinned(e){console.log(e),this.performAllFilters()}},methods:{performAllFilters(){this.displayedDemands=this.userDemands.filter((e=>e.sujet.toLowerCase().includes(this.searchInput.toLowerCase())||e.client.nom.toLowerCase().includes(this.searchInput.toLowerCase())||e.client.prenom.toLowerCase().includes(this.searchInput.toLowerCase())||e.client.revenu_mensuel.toString().includes(this.searchInput.toLowerCase())||e.montant_bien.toString().includes(this.searchInput.toLowerCase()))),"Name"==this.orderBy?this.displayedDemands.sort(((e,n)=>e.client.nom.localeCompare(n.client.nom))):"Value"==this.orderBy?this.displayedDemands.sort(((e,n)=>e.montant_bien-n.montant_bien)):"Salaire"==this.orderBy?this.displayedDemands.sort(((e,n)=>e.client.revenu_mensuel-n.client.revenu_mensuel)):this.displayedDemands.sort(((e,n)=>e.id_demande-n.id_demande)),0==this.onlyPinned?this.displayedDemands=this.displayedDemands.filter((e=>0==e.statut||1==e.statut)):1==this.onlyPinned?this.displayedDemands=this.displayedDemands.filter((e=>1==e.statut)):2==this.onlyPinned?this.displayedDemands=this.displayedDemands.filter((e=>-1==e.statut)):3==this.onlyPinned&&(this.displayedDemands=this.displayedDemands.filter((e=>2==e.statut)))},fetchBankUserDemands(){fetch(this.api_url+"demande_banque/getAllDemandes",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then((e=>(401==e.status&&this.$router.push("/login/bank"),e.json()))).then((e=>{console.log(e);for(let n=0;n<e.length;n++)null==e[n].client&&(e.splice(n,1),n--);this.userDemands=e,this.displayedDemands=this.userDemands,this.performAllFilters()}))}},mounted(){console.log("Mounted"),this.fetchBankUserDemands()},beforeUnmount(){console.log("Unmounted")}};const Ve=(0,Be.Z)(Ne,[["render",k],["__scopeId","data-v-147645e3"]]);var qe=Ve}}]);
//# sourceMappingURL=79.3dcd0770.js.map