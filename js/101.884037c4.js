"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[101],{101:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var i=n(3396),l=n(9242);const s={id:"links"},a={id:"main-body"},o=(0,i._)("h3",null,"Liste des clients :",-1),c={id:"clients-overview-area",class:"section-list"},r={id:"clients-area-header"},d={id:"search-input",class:"input-group flex-nowrap"},u={id:"clients-list-container"},m={id:"clients-list",class:"section-list"};function p(e,t,n,p,h,_){const f=(0,i.up)("HeaderComponent"),C=(0,i.up)("router-link"),w=(0,i.up)("clients-list-element");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[(0,i.Wm)(f)]),(0,i._)("div",s,[(0,i.Wm)(C,{class:"link",to:"/admin/Banques"},{default:(0,i.w5)((()=>[(0,i.Uk)("Banques")])),_:1}),(0,i.Wm)(C,{class:"link",to:"/admin/Clients"},{default:(0,i.w5)((()=>[(0,i.Uk)("Clients")])),_:1}),(0,i.Wm)(C,{class:"link",to:"/admin/Demandes"},{default:(0,i.w5)((()=>[(0,i.Uk)("Demandes")])),_:1})]),(0,i._)("div",a,[o,(0,i._)("div",c,[(0,i._)("div",r,[(0,i._)("div",d,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"Recherche","aria-label":"Recherche","aria-describedby":"addon-wrapping","onUpdate:modelValue":t[0]||(t[0]=e=>h.searchInput=e)},null,512),[[l.nr,h.searchInput]])])]),(0,i._)("div",u,[(0,i._)("ul",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(_.filteredClients,(e=>((0,i.wg)(),(0,i.j4)(w,{onUpdateClient:t[1]||(t[1]=e=>_.fetchClients()),key:e.id,client:e},null,8,["client"])))),128))])])])])])}var h=n(7139);const _={id:"buttons_options"},f={id:"clientName"},C={class:"clientRow"};function w(e,t,n,l,s,a){const o=(0,i.up)("bank-demand-detail");return(0,i.wg)(),(0,i.iD)("div",{id:"clientListElement",class:(0,h.C_)(a.borderClass)},[(0,i._)("div",_,[(0,i._)("span",null,[(0,i._)("p",{id:"delete",class:"but",onClick:t[0]||(t[0]=e=>a.deleteClient(n.client.id_client,n.client.account_status))},"x")])]),(0,i._)("span",f,(0,h.zw)(n.client.nom)+" "+(0,h.zw)(n.client.prenom),1),(0,i._)("div",C,[(0,i._)("span",null," ID : "+(0,h.zw)(n.client.id_client),1)]),(0,i.Wm)(o,{demand:e.demand},null,8,["demand"])],2)}var v={name:"clientsListElement",props:{client:{type:Object,required:!0}},computed:{borderClass(){return this.client.account_status?"active-border":this.client.account_status?"":"inactive-border"}},methods:{handleDisplayDetail(){alert("WIP")},async deleteClient(e,t){if(confirm("Voulez-vous vraiment supprimer/bannir ce client ?")){if(t){const t=localStorage.getItem("token");await fetch(this.api_url+"admin/updateClient/"+e,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify({account_status:!1})})}else{const t=localStorage.getItem("token");await fetch(this.api_url+"admin/deleteClient/"+e,{method:"DELETE",headers:{Authorization:t}})}this.$emit("updateClient")}}}},k=n(89);const b=(0,k.Z)(v,[["render",w]]);var g=b,y=n(9718),I={name:"BankHomeView",components:{HeaderComponent:y.Z,ClientsListElement:g},data(){return{clients:[],searchInput:""}},computed:{filteredClients(){if(this.searchInput){const e=this.searchInput.toLowerCase();return this.clients.filter((t=>t.nom.toLowerCase().includes(e)||t.prenom.toLowerCase().includes(e)||t.id_client.toString().toLowerCase().includes(e)))}return this.clients}},methods:{async fetchClients(){const e=localStorage.getItem("token"),t=await fetch(this.api_url+"admin/getAllClients",{headers:{authorization:e}}),n=await t.json();this.clients=n}},mounted(){this.fetchClients()},beforeUnmount(){console.log("Unmounted")}};const D=(0,k.Z)(I,[["render",p]]);var L=D}}]);
//# sourceMappingURL=101.884037c4.js.map