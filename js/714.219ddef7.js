"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[714],{4714:function(e,a,n){n.r(a),n.d(a,{default:function(){return I}});var s=n(3396);const t=(0,s._)("h1",null,"Admin Home Page",-1),l={id:"main-body"},i=(0,s._)("h3",null,"Liste des banques :",-1),o={id:"banks-overview-area",class:"section-list"},r=(0,s._)("div",{id:"banks-area-header"},[(0,s._)("div",{id:"research-input",class:"input-group flex-nowrap"},[(0,s._)("input",{type:"text",class:"form-control",placeholder:"Recherche","aria-label":"Recherche","aria-describedby":"addon-wrapping"})])],-1),u={id:"banks-list-container"},d={id:"banks-list",class:"section-list"};function c(e,a,n,c,p,b){const m=(0,s.up)("HeaderComponent"),k=(0,s.up)("banks-list-element");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",null,[t,(0,s.Wm)(m)]),(0,s._)("div",l,[i,(0,s._)("div",o,[r,(0,s._)("div",u,[(0,s._)("ul",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.banks,(e=>((0,s.wg)(),(0,s.j4)(k,{key:e.id,bank:e},null,8,["bank"])))),128))])])])])],64)}var p=n(7139);const b={id:"buttons_options"},m=(0,s._)("span",null,[(0,s._)("p",{id:"delete",class:"but",onclick:"deleteElement()"},"x")],-1),k={id:"bankTitle"},_={class:"bankRow"},h={class:"bankRow"},v={class:"bankRow"};function w(e,a,n,t,l,i){const o=(0,s.up)("bank-detail");return(0,s.wg)(),(0,s.iD)("div",{id:"bankListElement",class:(0,p.C_)(i.borderClass)},[(0,s._)("div",b,[m,(0,s._)("span",null,[(0,s._)("p",{id:"valid",class:"but",onClick:a[0]||(a[0]=()=>e.validElement())},"+")])]),(0,s._)("span",k,(0,p.zw)(n.bank.nom_banque),1),(0,s._)("div",_,[(0,s._)("span",null," Siret : "+(0,p.zw)(n.bank.siret),1)]),(0,s._)("div",h,[(0,s._)("span",null," Pays : "+(0,p.zw)(n.bank.pays),1),(0,s.Uk)(),(0,s._)("span",null," Ville : "+(0,p.zw)(n.bank.ville),1),(0,s.Uk)(),(0,s._)("span",null," Address : "+(0,p.zw)(n.bank.adresse),1)]),(0,s._)("div",v,[(0,s._)("span",null," Email : "+(0,p.zw)(n.bank.email),1),(0,s._)("span",null," Telephone : "+(0,p.zw)(n.bank.tel),1)]),(0,s.Wm)(o,{propbank:n.bank},null,8,["propbank"])],2)}const y={key:0,id:"modal-form",ref:"modalForm"},q=(0,s._)("h2",null,"Détails du compte",-1);function f(e,a,n,t,l,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("button",{id:"detailButton",onClick:a[0]||(a[0]=()=>i.handleDisplay())},"Détails"),l.displayDetail?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("button",{id:"closeButton",onClick:a[1]||(a[1]=()=>i.handleDisplay())},"X"),q],512)):(0,s.kq)("",!0)])}var B={data(){return{displayDetail:!1}},props:{bank:{type:Object,required:!0}},methods:{handleDisplay(){this.displayDetail=!this.displayDetail}}},D=n(89);const g=(0,D.Z)(B,[["render",f]]);var C=g,R={components:{bankDetail:C},name:"banksListElement",props:{bank:{type:Object,required:!0}},computed:{borderClass(){return this.bank.account_status?"active-border":this.bank.account_status?"":"inactive-border"}},methods:{handleDisplayDetail(){alert("WIP")},deleteBank(){},validateBank(){}}};const z=(0,D.Z)(R,[["render",w]]);var E=z,L=n(9222),H={name:"BankHomeView",components:{HeaderComponent:L.Z,BanksListElement:E},data(){return{banks:[],searchInput:""}},watch:{searchInput(e){console.log(e),this.performSearch()}},methods:{fetchBanks(){this.banks=[{nom_banque:"Banque A",siret:"123456789",pays:"France",ville:"Paris",adresse:"123 Rue de la Banque",email:"contact@banquea.com",tel:"0123456789",account_status:!0},{nom_banque:"Banque B",siret:"987654321",pays:"États-Unis",ville:"New York",adresse:"456 Bank Street",email:"info@banqueb.com",tel:"9876543210",account_status:!1},{nom_banque:"Banque C",siret:"111111111",pays:"Espagne",ville:"Madrid",adresse:"Calle de la Banca",email:"info@banquex.com",tel:"1111111111",account_status:!1},{nom_banque:"Banque D",siret:"222222222",pays:"Allemagne",ville:"Berlin",adresse:"Bankstraße",email:"contact@banquey.com",tel:"2222222222",account_status:!0},{nom_banque:"Banque E",siret:"999999999",pays:"Royaume-Uni",ville:"Londres",adresse:"Bank Road",email:"support@banquez.com",tel:"9999999999",account_status:!0},{nom_banque:"Banque F",siret:"888888888",pays:"Italie",ville:"Rome",adresse:"Via della Banca",email:"info@banquew.com",tel:"8888888888",account_status:!1}]},performSearch(){this.displayedDemands=this.userDemands.filter((e=>e.sujet.toLowerCase().includes(this.searchInput.toLowerCase())))}},mounted(){console.log("Mounted"),this.fetchBanks()},beforeUnmount(){console.log("Unmounted")}};const U=(0,D.Z)(H,[["render",c]]);var I=U}}]);
//# sourceMappingURL=714.219ddef7.js.map