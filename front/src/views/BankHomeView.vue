<template>
    <div>
        <HeaderComponent/>
        <!--<h1>This is a client home page</h1>-->
        <div id="main-body">
            <h3>Liste des demandes en cours :</h3>
            <div id="demands-overview-area" class="section-list">
                <div id="demands-area-header">
                    <div id="research-input" class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Recherche" aria-label="Recherche" aria-describedby="addon-wrapping" v-model="searchInput">
                    </div>
                    <!-- <input type="text" name="recherche"> -->
                    <div>
                        <select id="sort-choices" class="form-select" aria-label="Default select example" v-model="orderBy">
                            <option value="">Trier par :</option>
                            <option value="Name">Nom</option>
                            <option value="Value">Valeur</option>
                            <option value="Salaire">Salaire</option>
                          </select>
                    </div>
                    <div>
                        <select id="sort-choices" class="form-select" aria-label="Default select example" v-model="onlyPinned">
                            <option value="0">Afficher Tous</option>
                            <option value="1">Favoris Uniquement</option>
                          </select>
                    </div>
                    
                </div>
                <ul id="demands-list" class="section-list">
                    <client-bank-demands-list-element v-for="temp_demand in displayedDemands" v-bind:key="temp_demand.id" :demand="temp_demand"></client-bank-demands-list-element>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ClientBankDemandsListElement from '@/components/ClientBankDemandsListElement.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
    name: 'BankHomeView',
    components: {
    HeaderComponent,
    ClientBankDemandsListElement
    },
    data(){
        return {
            userDemands:[],
            displayedDemands:[],
            searchInput:"",
            orderBy:"",
            onlyPinned:0
        }
    },
    watch:{
        searchInput(newSearchInput){
            console.log(newSearchInput);
            this.performAllFilters();
            
        },
        orderBy(newOrderBy){
            console.log(newOrderBy);
            this.performAllFilters();
            
        },
        onlyPinned(newOnlyPinned){
            console.log(newOnlyPinned);
            this.performAllFilters();
        }
    },
    methods:{
        performAllFilters(){
            this.displayedDemands = this.userDemands.filter((demand) => {
                return demand.sujet.toLowerCase().includes(this.searchInput.toLowerCase());
            })

            if (this.orderBy == "Name") {
                this.displayedDemands.sort((a,b) => {
                    return a.nom.localeCompare(b.nom);
                })
            }
            else if (this.orderBy == "Value") {
                this.displayedDemands.sort((a,b) => {
                    return a.montant_bien - b.montant_bien;
                })
            }
            else if (this.orderBy == "Salaire") {
                this.displayedDemands.sort((a,b) => {
                    return a.revenu_mensuel - b.revenu_mensuel;
                })
            }
            else{
                this.displayedDemands.sort((a,b) => {
                    return a.id - b.id;
                })
            }

            if (this.onlyPinned == 1) {
                this.displayedDemands = this.displayedDemands.filter((demand) => {
                    return demand.favorite;
                })
            }

        },
        fetchBankUserDemands() {
            // TODO
            this.userDemands = [
                {
                    "id":0,
                    "sujet": "Projet Maison",
                    "nom": "Jesen Brown",
                    "montant_bien": 300000,
                    "revenu_mensuel" : 4000,
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":1,
                    "sujet": "Projet construction",
                    "nom": "Mike Harvey",
                    "montant_bien": 900000,
                    "revenu_mensuel" : 8000,
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":2,
                    "sujet": "Projet jet",
                    "nom": "Louis Litt",
                    "montant_bien": 500000,
                    "revenu_mensuel" : 6000,
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":3,
                    "sujet": "Projet LVMH",
                    "nom": "Bernard Arnaud",
                    "montant_bien": 20000000,
                    "revenu_mensuel" : 60000,
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":4,
                    "sujet": "Projet lawyer",
                    "nom": "Specter Ross",
                    "montant_bien": 100000,
                    "revenu_mensuel" : 3000,
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":5,
                    "sujet": "Projet club",
                    "nom": "Jimmy Buckets",
                    "montant_bien": 1000000,
                    "revenu_mensuel" : 8000,
                    "favorite" : false,
                    "added" : false
                }
            ];
            this.displayedDemands = this.userDemands;
        }
    },
    mounted() {
        console.log("Mounted");
        this.fetchBankUserDemands();
    },
    beforeUnmount() {
        console.log("Unmounted");
    },


}
</script>

<style>
#main-body {
    display: block;
    flex-direction: row;
    justify-content: space-between;
    align-items:start;
    width: 95%;
    height: 90%;
    height: 80vh;
    margin: auto;
}

h3{
    display: block;
    margin-top: 4%;
    font-size: large;
    text-align: left;
}

.section-list{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #D9D9D9;
    color: black;
    list-style: none;
    padding: 10px;
    border-radius: 10px;
    overflow-y: scroll;
}

::-webkit-scrollbar {
    display:none;
}

#demands-overview-area {
    margin-top: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
    height: 80%;
    border: 0px solid black;
}
#demands-list{
    height: 85%;
}
#demands-area-header{
    display: flex;
    width: 100%
}
#research-input{
    margin-right: 55%;
    width: 30%;
    height: 80%;
}
#sort-choices{
    height: 80%;
    font-size:small;
}
</style>