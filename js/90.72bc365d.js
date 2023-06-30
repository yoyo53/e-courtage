"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[90],{90:function(e,n,a){a.r(n),a.d(n,{default:function(){return S}});var t=a(3396),s=a(9242);const i=e=>((0,t.dD)("data-v-9650df4a"),e=e(),(0,t.Cn)(),e),l={id:"links"},o={id:"main-body"},r={id:"banks-filter"},d=i((()=>(0,t._)("label",{for:"uncheckedOnly"},"Afficher uniquement les comptes non validés",-1))),c=i((()=>(0,t._)("h3",null,"Liste des banques :",-1))),u={id:"banks-overview-area",class:"section-list"},k={id:"banks-area-header"},h={id:"research-input",class:"input-group flex-nowrap"},p={id:"banks-list-container"},b={id:"banks-list",class:"section-list"};function m(e,n,a,i,m,w){const _=(0,t.up)("HeaderComponent"),f=(0,t.up)("router-link"),v=(0,t.up)("banks-list-element");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",null,[(0,t.Wm)(_)]),(0,t._)("div",l,[(0,t.Wm)(f,{class:"link",to:"/admin/Banques"},{default:(0,t.w5)((()=>[(0,t.Uk)("Banques")])),_:1}),(0,t.Wm)(f,{class:"link",to:"/admin/Clients"},{default:(0,t.w5)((()=>[(0,t.Uk)("Clients")])),_:1}),(0,t.Wm)(f,{class:"link",to:"/admin/Demandes"},{default:(0,t.w5)((()=>[(0,t.Uk)("Demandes")])),_:1})]),(0,t._)("div",o,[(0,t._)("div",r,[(0,t.wy)((0,t._)("input",{type:"checkbox",id:"uncheckedOnly","onUpdate:modelValue":n[0]||(n[0]=e=>m.showUncheckedOnly=e)},null,512),[[s.e8,m.showUncheckedOnly]]),d]),c,(0,t._)("div",u,[(0,t._)("div",k,[(0,t._)("div",h,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"Recherche","aria-label":"Recherche","aria-describedby":"addon-wrapping","onUpdate:modelValue":n[1]||(n[1]=e=>m.searchInput=e)},null,512),[[s.nr,m.searchInput]])])]),(0,t._)("div",p,[(0,t._)("ul",b,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(w.filteredBanks,(e=>((0,t.wg)(),(0,t.j4)(v,{onUpdateBank:n[2]||(n[2]=e=>w.fetchBanks()),key:e.id,bank:e},null,8,["bank"])))),128))])])])])])}var w=a(7139);const _=e=>((0,t.dD)("data-v-2cfeb5e1"),e=e(),(0,t.Cn)(),e),f={id:"buttons_options"},v=_((()=>(0,t._)("path",{fill:"red",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1))),g=[v],y={key:0,style:{"padding-left":"5px"}},B=_((()=>(0,t._)("path",{fill:"green",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"},null,-1))),C=[B],q={id:"bankTitle"},z={class:"bankRow"},U={class:"bankRow"},L={class:"bankRow"};function D(e,n,a,s,i,l){return(0,t.wg)(),(0,t.iD)("div",{id:"bankListElement",class:(0,w.C_)(l.borderClass)},[(0,t._)("div",f,[(0,t._)("span",null,[((0,t.wg)(),(0,t.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16",onClick:n[0]||(n[0]=e=>l.deleteBank(a.bank.id_banque)),style:{cursor:"pointer"}},g))]),a.bank.account_status?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("span",y,[((0,t.wg)(),(0,t.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-check-circle-fill",viewBox:"0 0 16 16",onClick:n[1]||(n[1]=e=>l.validateBank(a.bank.id_banque)),style:{cursor:"pointer"}},C))]))]),(0,t._)("span",q,(0,w.zw)(a.bank.nom_banque),1),(0,t._)("div",z,[(0,t._)("span",null," Siret : "+(0,w.zw)(a.bank.siret),1)]),(0,t._)("div",U,[(0,t._)("span",null," Pays : "+(0,w.zw)(a.bank.pays),1),(0,t.Uk)(),(0,t._)("span",null," Ville : "+(0,w.zw)(a.bank.ville),1),(0,t.Uk)(),(0,t._)("span",null," Addresse : "+(0,w.zw)(a.bank.adresse),1)]),(0,t._)("div",L,[(0,t._)("span",null," Email : "+(0,w.zw)(a.bank.email),1),(0,t._)("span",null," Telephone : "+(0,w.zw)(a.bank.tel),1)])],2)}var I={name:"banksListElement",props:{bank:{type:Object,required:!0}},computed:{borderClass(){return this.bank.account_status?"active-border":this.bank.account_status?"":"inactive-border"}},methods:{handleDisplayDetail(){alert("WIP")},async deleteBank(e){if(confirm("Voulez-vous vraiment supprimer cette banque ?")){const n=localStorage.getItem("token");await fetch(this.api_url+"admin/deleteBanque/"+e,{method:"DELETE",headers:{authorization:n}}),this.$emit("updateBank")}},async validateBank(e){if(confirm("Voulez-vous vraiment valider cette banque ?")){const n=localStorage.getItem("token");await fetch(this.api_url+"admin/activateBanque/"+e,{method:"PUT",headers:{authorization:n}}),this.$emit("updateBank")}}}},x=a(89);const O=(0,x.Z)(I,[["render",D],["__scopeId","data-v-2cfeb5e1"]]);var E=O,V=a(9718),A={name:"BankHomeView",components:{HeaderComponent:V.Z,BanksListElement:E},data(){return{banks:[],searchInput:"",showUncheckedOnly:!1}},computed:{filteredBanks(){if(this.searchInput){const e=this.searchInput.toLowerCase();return this.banks.filter((n=>(!this.showUncheckedOnly||!n.account_status)&&(n.nom_banque.toLowerCase().includes(e)||n.id_banque.toString().toLowerCase().includes(e))))}return this.banks.filter((e=>!this.showUncheckedOnly||!e.account_status))}},methods:{async fetchBanks(){const e=localStorage.getItem("token"),n=await fetch(this.api_url+"admin/getAllBanques",{headers:{authorization:e}}),a=await n.json();this.banks=a}},mounted(){this.fetchBanks()},beforeUnmount(){console.log("Unmounted")}};const R=(0,x.Z)(A,[["render",m],["__scopeId","data-v-9650df4a"]]);var S=R}}]);
//# sourceMappingURL=90.72bc365d.js.map