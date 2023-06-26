"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[438],{1934:function(e,n,d){d.r(n),d.d(n,{default:function(){return M}});var a=d(3396),s=d(9242);const t={id:"main-body"},i=(0,a._)("h3",null,"Liste des demandes en cours :",-1),l={id:"demands-overview-area",class:"section-list"},o={id:"demands-area-header"},r={id:"research-input",class:"input-group flex-nowrap"},m=(0,a._)("option",{value:""},"Trier par :",-1),u=(0,a._)("option",{value:"Name"},"Nom",-1),c=(0,a._)("option",{value:"Value"},"Valeur",-1),p=(0,a._)("option",{value:"Salaire"},"Salaire",-1),h=[m,u,c,p],v=(0,a._)("option",{value:"0"},"Afficher Tous",-1),_=(0,a._)("option",{value:"1"},"Favoris Uniquement",-1),f=[v,_],D={id:"demands-list",class:"section-list"};function y(e,n,d,m,u,c){const p=(0,a.up)("HeaderComponent"),v=(0,a.up)("client-bank-demands-list-element");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(p),(0,a._)("div",t,[i,(0,a._)("div",l,[(0,a._)("div",o,[(0,a._)("div",r,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"Recherche","aria-label":"Recherche","aria-describedby":"addon-wrapping","onUpdate:modelValue":n[0]||(n[0]=e=>u.searchInput=e)},null,512),[[s.nr,u.searchInput]])]),(0,a._)("div",null,[(0,a.wy)((0,a._)("select",{id:"sort-choices",class:"form-select","aria-label":"Default select example","onUpdate:modelValue":n[1]||(n[1]=e=>u.orderBy=e)},h,512),[[s.bM,u.orderBy]])]),(0,a._)("div",null,[(0,a.wy)((0,a._)("select",{id:"sort-choices",class:"form-select","aria-label":"Default select example","onUpdate:modelValue":n[2]||(n[2]=e=>u.onlyPinned=e)},f,512),[[s.bM,u.onlyPinned]])])]),(0,a._)("ul",D,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.displayedDemands,(e=>((0,a.wg)(),(0,a.j4)(v,{key:e.id,demand:e},null,8,["demand"])))),128))])])])])}var b=d(7139);const w={id:"demandListElement"},j={id:"buttons_options"},k=(0,a._)("span",null,[(0,a._)("p",{id:"delete",class:"but",onclick:"deleteElement()"},"x")],-1),B={class:"demandRow"},g={class:"demandRow"},C={class:"demandRow"};function P(e,n,d,s,t,i){const l=(0,a.up)("client-demand-detail");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",j,[k,(0,a._)("span",null,[(0,a._)("p",{id:"favorite",class:"but",onClick:n[0]||(n[0]=()=>i.favoriteElement())},"☆")]),(0,a._)("span",null,[(0,a._)("p",{id:"valid",class:"but",onClick:n[1]||(n[1]=()=>i.validElement())},"+")])]),(0,a._)("h2",null,(0,b.zw)(d.demand.sujet),1),(0,a._)("div",B,[(0,a._)("span",null," Nom : "+(0,b.zw)(d.demand.nom),1),(0,a.Uk)(),(0,a._)("span",null," Salaire : "+(0,b.zw)(d.demand.revenu_mensuel)+" €",1)]),(0,a._)("div",g,[(0,a._)("span",null," Valeur : "+(0,b.zw)(d.demand.montant_bien)+" €",1)]),(0,a._)("div",C,[(0,a._)("span",null,(0,b.zw)(d.demand.commentaire),1)]),(0,a.Wm)(l,{propDemand:d.demand},null,8,["propDemand"])])}var E=d(9265),L={components:{ClientDemandDetail:E.Z},name:"ClientDemandsListElement",props:{demand:{type:Object,required:!0}},methods:{handleDisplayDetail(){alert("WIP")},deleteElement(){},validElement(){0==this.$parent.userDemands.find((e=>e.id==this.demand.id)).added?this.$parent.userDemands.find((e=>e.id==this.demand.id)).added=!0:this.$parent.userDemands.find((e=>e.id==this.demand.id)).added=!1,console.log(this.$parent.userDemands)},favoriteElement(){0==this.$parent.userDemands.find((e=>e.id==this.demand.id)).favorite?this.$parent.userDemands.find((e=>e.id==this.demand.id)).favorite=!0:this.$parent.userDemands.find((e=>e.id==this.demand.id)).favorite=!1,console.log(this.$parent.userDemands)}}},U=d(89);const V=(0,U.Z)(L,[["render",P]]);var $=V,A=d(9222),H={name:"BankHomeView",components:{HeaderComponent:A.Z,ClientBankDemandsListElement:$},data(){return{userDemands:[],displayedDemands:[],searchInput:"",orderBy:"",onlyPinned:0}},watch:{searchInput(e){console.log(e),this.performAllFilters()},orderBy(e){console.log(e),this.performAllFilters()},onlyPinned(e){console.log(e),this.performAllFilters()}},methods:{performAllFilters(){this.displayedDemands=this.userDemands.filter((e=>e.sujet.toLowerCase().includes(this.searchInput.toLowerCase()))),"Name"==this.orderBy?this.displayedDemands.sort(((e,n)=>e.nom.localeCompare(n.nom))):"Value"==this.orderBy?this.displayedDemands.sort(((e,n)=>e.montant_bien-n.montant_bien)):"Salaire"==this.orderBy?this.displayedDemands.sort(((e,n)=>e.revenu_mensuel-n.revenu_mensuel)):this.displayedDemands.sort(((e,n)=>e.id-n.id)),1==this.onlyPinned&&(this.displayedDemands=this.displayedDemands.filter((e=>e.favorite)))},fetchBankUserDemands(){this.userDemands=[{id:0,sujet:"Projet Maison",nom:"Jesen Brown",montant_bien:3e5,revenu_mensuel:4e3,favorite:!1,added:!1},{id:1,sujet:"Projet construction",nom:"Mike Harvey",montant_bien:9e5,revenu_mensuel:8e3,favorite:!1,added:!1},{id:2,sujet:"Projet jet",nom:"Louis Litt",montant_bien:5e5,revenu_mensuel:6e3,favorite:!1,added:!1},{id:3,sujet:"Projet LVMH",nom:"Bernard Arnaud",montant_bien:2e7,revenu_mensuel:6e4,favorite:!1,added:!1},{id:4,sujet:"Projet lawyer",nom:"Specter Ross",montant_bien:1e5,revenu_mensuel:3e3,favorite:!1,added:!1},{id:5,sujet:"Projet club",nom:"Jimmy Buckets",montant_bien:1e6,revenu_mensuel:8e3,favorite:!1,added:!1}],this.displayedDemands=this.userDemands}},mounted(){console.log("Mounted"),this.fetchBankUserDemands()},beforeUnmount(){console.log("Unmounted")}};const I=(0,U.Z)(H,[["render",y]]);var M=I}}]);
//# sourceMappingURL=438.3a2fb62f.js.map