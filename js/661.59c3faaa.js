"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[661],{3661:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var i=n(3396),l=n(9242);const a=(0,i._)("h1",null,"Admin Clients Page",-1),s={id:"main-body"},o=(0,i._)("h3",null,"Liste des clients :",-1),c={id:"clients-overview-area",class:"section-list"},r={id:"clients-area-header"},d={id:"search-input",class:"input-group flex-nowrap"},u={id:"clients-list-container"},p={id:"clients-list",class:"section-list"};function h(e,t,n,h,m,_){const f=(0,i.up)("HeaderComponent"),C=(0,i.up)("clients-list-element");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[a,(0,i.Wm)(f)]),(0,i._)("div",s,[o,(0,i._)("div",c,[(0,i._)("div",r,[(0,i._)("div",d,[(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"Recherche","aria-label":"Recherche","aria-describedby":"addon-wrapping","onUpdate:modelValue":t[0]||(t[0]=e=>m.searchInput=e)},null,512),[[l.nr,m.searchInput]])])]),(0,i._)("div",u,[(0,i._)("ul",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.clients,(e=>((0,i.wg)(),(0,i.j4)(C,{onUpdateClient:t[1]||(t[1]=e=>_.fetchClients()),key:e.id,client:e},null,8,["client"])))),128))])])])])])}var m=n(7139);const _={id:"buttons_options"},f={id:"clientName"},C={class:"clientRow"};function v(e,t,n,l,a,s){const o=(0,i.up)("bank-demand-detail");return(0,i.wg)(),(0,i.iD)("div",{id:"clientListElement",class:(0,m.C_)(s.borderClass)},[(0,i._)("div",_,[(0,i._)("span",null,[(0,i._)("p",{id:"delete",class:"but",onClick:t[0]||(t[0]=e=>s.deleteClient(n.client.id_client,n.client.account_status))},"x")])]),(0,i._)("span",f,(0,m.zw)(n.client.nom)+" "+(0,m.zw)(n.client.prenom),1),(0,i._)("div",C,[(0,i._)("span",null," ID : "+(0,m.zw)(n.client.id_client),1)]),(0,i.Wm)(o,{demand:e.demand},null,8,["demand"])],2)}var w={name:"clientsListElement",props:{client:{type:Object,required:!0}},computed:{borderClass(){return this.client.account_status?"active-border":this.client.account_status?"":"inactive-border"}},methods:{handleDisplayDetail(){alert("WIP")},async deleteClient(e,t){if(confirm("Voulez-vous vraiment supprimer/bannir ce client ?")){if(t){const t=localStorage.getItem("token");await fetch(this.api_url+"admin/updateClient/"+e,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify({account_status:!1})})}else{const t=localStorage.getItem("token");await fetch(this.api_url+"admin/deleteClient/"+e,{method:"DELETE",headers:{Authorization:t}})}this.$emit("updateClient")}}}},g=n(89);const b=(0,g.Z)(w,[["render",v]]);var y=b,k=n(7275),I={name:"BankHomeView",components:{HeaderComponent:k.Z,ClientsListElement:y},data(){return{clients:[],searchInput:""}},watch:{searchInput(e){console.log(e),this.performSearch()}},methods:{async fetchClients(){const e=localStorage.getItem("token"),t=await fetch(this.api_url+"admin/getAllClients",{headers:{authorization:e}}),n=await t.json();console.log(n),this.clients=n},performSearch(){}},mounted(){console.log("Mounted"),this.fetchClients()},beforeUnmount(){console.log("Unmounted")}};const z=(0,g.Z)(I,[["render",h]]);var D=z}}]);
//# sourceMappingURL=661.59c3faaa.js.map