"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[319],{3319:function(n,l,e){e.r(l),e.d(l,{default:function(){return ln}});var t=e(3396),i=e(9242);const a={id:"links"},s={id:"main-body"},u=(0,t._)("h3",null,"Liste des clients :",-1),o={id:"clients-overview-area",class:"section-list"},c={id:"clients-area-header"},r={id:"search-input",class:"input-group flex-nowrap"},p={id:"clients-list-container"},d={id:"clients-list",class:"section-list"};function _(n,l,e,_,m,h){const w=(0,t.up)("HeaderComponent"),f=(0,t.up)("router-link"),v=(0,t.up)("clients-list-element");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",null,[(0,t.Wm)(w)]),(0,t._)("div",a,[(0,t.Wm)(f,{class:"link",to:"/admin/Banques"},{default:(0,t.w5)((()=>[(0,t.Uk)("Banques")])),_:1}),(0,t.Wm)(f,{class:"link",to:"/admin/Clients"},{default:(0,t.w5)((()=>[(0,t.Uk)("Clients")])),_:1}),(0,t.Wm)(f,{class:"link",to:"/admin/Demandes"},{default:(0,t.w5)((()=>[(0,t.Uk)("Demandes")])),_:1})]),(0,t._)("div",s,[u,(0,t._)("div",o,[(0,t._)("div",c,[(0,t._)("div",r,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"Recherche","aria-label":"Recherche","aria-describedby":"addon-wrapping","onUpdate:modelValue":l[0]||(l[0]=n=>m.searchInput=n)},null,512),[[i.nr,m.searchInput]])])]),(0,t._)("div",p,[(0,t._)("ul",d,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.filteredClients,(n=>((0,t.wg)(),(0,t.j4)(v,{onUpdateClient:l[1]||(l[1]=n=>h.fetchClients()),key:n.id,client:n},null,8,["client"])))),128))])])])])])}var m=e(7139);const h={id:"buttons_options",style:{"padding-top":"10px"}},w=(0,t._)("path",{fill:"red",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1),f=[w],v={id:"clientName"},C={class:"clientRow"};function z(n,l,e,i,a,s){const u=(0,t.up)("admin-client-detail");return(0,t.wg)(),(0,t.iD)("div",{id:"clientListElement",class:(0,m.C_)(s.borderClass)},[(0,t._)("div",h,[((0,t.wg)(),(0,t.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16",onClick:l[0]||(l[0]=n=>s.deleteClient(e.client.id_client,e.client.account_status)),style:{cursor:"pointer"}},f))]),(0,t._)("span",v,(0,m.zw)(e.client.nom)+" "+(0,m.zw)(e.client.prenom),1),(0,t._)("div",C,[(0,t._)("span",null," ID : "+(0,m.zw)(e.client.id_client),1)]),(0,t.Wm)(u,{client:e.client},null,8,["client"])],2)}const y={key:0,id:"modal-form",ref:"modalForm"},b=(0,t._)("h2",null,"Informations du compte client",-1),g={id:"client",class:"clientDetailDivision"},D=(0,t._)("span",null,"Nom : ",-1),k=(0,t._)("span",null,"Prénom : ",-1),L=(0,t._)("span",null,"Email : ",-1),I=(0,t._)("span",null,"Genre : ",-1),S=(0,t._)("span",null,"Date de naissance : ",-1),q=(0,t._)("span",null,"Téléphone : ",-1),B=(0,t._)("span",null,"Pays : ",-1),E=(0,t._)("span",null,"Ville : ",-1),U=(0,t._)("span",null,"Adresse : ",-1),x=(0,t._)("span",null,"Status immobilier : ",-1),A=(0,t._)("span",null,"Situation professionnelle : ",-1),P=(0,t._)("span",null,"Contrat : ",-1),W=(0,t._)("span",null,"Poste depuis : ",-1),j=(0,t._)("span",null,"Banque principale : ",-1),H=(0,t._)("span",null,"Situation familiale : ",-1),N=(0,t._)("span",null,"Nationalité : ",-1),R=(0,t._)("span",null,"Revenu mensuel : ",-1),T=(0,t._)("span",null,"Prime annuelle : ",-1),V=(0,t._)("span",null,"Loyer actuel : ",-1),Z=(0,t._)("span",null,"Nombre d'enfants : ",-1);function O(n,l,e,i,a,s){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("button",{id:"detailButton",onClick:l[0]||(l[0]=n=>s.handleDisplay())},"Détails"),a.displayDetail?((0,t.wg)(),(0,t.iD)("div",y,[(0,t._)("button",{id:"closeButton",onClick:l[1]||(l[1]=n=>s.handleDisplay())},"X"),b,(0,t._)("div",g,[(0,t._)("p",null,[D,(0,t._)("span",null,(0,m.zw)(e.client.nom),1)]),(0,t._)("p",null,[k,(0,t._)("span",null,(0,m.zw)(e.client.prenom),1)]),(0,t._)("p",null,[L,(0,t._)("span",null,(0,m.zw)(e.client.email),1)]),(0,t._)("p",null,[I,(0,t._)("span",null,(0,m.zw)(e.client.genre),1)]),(0,t._)("p",null,[S,(0,t._)("span",null,(0,m.zw)(e.client.date_birth),1)]),(0,t._)("p",null,[q,(0,t._)("span",null,(0,m.zw)(e.client.tel),1)]),(0,t._)("p",null,[B,(0,t._)("span",null,(0,m.zw)(e.client.pays),1)]),(0,t._)("p",null,[E,(0,t._)("span",null,(0,m.zw)(e.client.ville),1)]),(0,t._)("p",null,[U,(0,t._)("span",null,(0,m.zw)(e.client.adresse),1)]),(0,t._)("p",null,[x,(0,t._)("span",null,(0,m.zw)(e.client.status_immo),1)]),(0,t._)("p",null,[A,(0,t._)("span",null,(0,m.zw)(e.client.situation_professionnelle),1)]),(0,t._)("p",null,[P,(0,t._)("span",null,(0,m.zw)(e.client.contrat),1)]),(0,t._)("p",null,[W,(0,t._)("span",null,(0,m.zw)(e.client.poste_depuis),1)]),(0,t._)("p",null,[j,(0,t._)("span",null,(0,m.zw)(e.client.banque_principale),1)]),(0,t._)("p",null,[H,(0,t._)("span",null,(0,m.zw)(e.client.situation_familiale),1)]),(0,t._)("p",null,[N,(0,t._)("span",null,(0,m.zw)(e.client.nationalite),1)]),(0,t._)("p",null,[R,(0,t._)("span",null,(0,m.zw)(e.client.revenu_mensuel),1)]),(0,t._)("p",null,[T,(0,t._)("span",null,(0,m.zw)(e.client.prime_annuelle),1)]),(0,t._)("p",null,[V,(0,t._)("span",null,(0,m.zw)(e.client.loyer_actuel),1)]),(0,t._)("p",null,[Z,(0,t._)("span",null,(0,m.zw)(e.client.nombre_enfant),1)])])],512)):(0,t.kq)("",!0)])}var M={data(){return{displayDetail:!1}},props:{client:{type:Object,required:!0}},methods:{handleDisplay(){this.displayDetail=!this.displayDetail}}},F=e(89);const G=(0,F.Z)(M,[["render",O]]);var J=G,K={components:{"admin-client-detail":J},name:"clientsListElement",props:{client:{type:Object,required:!0}},computed:{borderClass(){return this.client.account_status?"active-border":this.client.account_status?"":"inactive-border"}},methods:{handleDisplayDetail(){alert("WIP")},async deleteClient(n,l){if(confirm("Voulez-vous vraiment supprimer/bannir ce client ?")){if(l){const l=localStorage.getItem("token");await fetch(this.api_url+"admin/updateClient/"+n,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:l},body:JSON.stringify({account_status:!1})})}else{const l=localStorage.getItem("token");await fetch(this.api_url+"admin/deleteClient/"+n,{method:"DELETE",headers:{Authorization:l}})}this.$emit("updateClient")}}}};const X=(0,F.Z)(K,[["render",z]]);var Y=X,$=e(7275),Q={name:"BankHomeView",components:{HeaderComponent:$.Z,ClientsListElement:Y},data(){return{clients:[],searchInput:""}},computed:{filteredClients(){if(this.searchInput){const n=this.searchInput.toLowerCase();return this.clients.filter((l=>l.nom.toLowerCase().includes(n)||l.prenom.toLowerCase().includes(n)||l.id_client.toString().toLowerCase().includes(n)))}return this.clients}},methods:{async fetchClients(){const n=localStorage.getItem("token"),l=await fetch(this.api_url+"admin/getAllClients",{headers:{authorization:n}}),e=await l.json();this.clients=e}},mounted(){this.fetchClients()},beforeUnmount(){console.log("Unmounted")}};const nn=(0,F.Z)(Q,[["render",_]]);var ln=nn}}]);
//# sourceMappingURL=319.bc94d46a.js.map