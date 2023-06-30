<template>
    <div>
        <HeaderComponent/>
        <!--<h1>This is a client home page</h1>-->
        <div id="main-body">
            <div id="demands-area-header">
                <div id="research-input" class="input-group flex-nowrap">
                    <input type="text" id="" class="form-control" placeholder="Recherche" aria-label="Recherche" aria-describedby="addon-wrapping" v-model="searchInput">
                </div>
                <!-- <input type="text" name="recherche"> -->
                <div class="sort-div">
                    <select class="sort-choices form-select" aria-label="Default select example" v-model="orderBy">
                        <option value="">Trier par :</option>
                        <option value="Name">Nom</option>
                        <option value="Value">Valeur</option>
                        <option value="Salaire">Salaire</option>
                        </select>
                </div>
                <div class="sort-div">
                    <select class="sort-choices form-select" aria-label="Default select example" v-model="onlyPinned">
                        <option value="0">Afficher Tous</option>
                        <option value="1">Favoris Uniquement</option>
                        <option value="2">Afficher rejetés</option>
                        <option value="3">Afficher acceptés</option>
                        </select>
                </div>
                
            </div>
            <div id="demands-overview-area">
                <h2>Liste des demandes :</h2>
                <ul id="demands-list" class="section-list">
                    <client-bank-demands-list-element v-for="temp_demand in displayedDemands" v-bind:key="temp_demand.id_demande" :demand="temp_demand"></client-bank-demands-list-element>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ClientBankDemandsListElement from '@/components/BankDemandListElement.vue';
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
                return demand.sujet.toLowerCase().includes(this.searchInput.toLowerCase()) || 
                demand.client.nom.toLowerCase().includes(this.searchInput.toLowerCase()) || 
                demand.client.prenom.toLowerCase().includes(this.searchInput.toLowerCase()) || 
                demand.client.revenu_mensuel.toString().includes(this.searchInput.toLowerCase()) || 
                demand.montant_bien.toString().includes(this.searchInput.toLowerCase());
            })

            if (this.orderBy == "Name") {
                this.displayedDemands.sort((a,b) => {
                    return a.client.nom.localeCompare(b.client.nom);
                })
            }
            else if (this.orderBy == "Value") {
                this.displayedDemands.sort((a,b) => {
                    return a.montant_bien - b.montant_bien;
                })
            }
            else if (this.orderBy == "Salaire") {
                this.displayedDemands.sort((a,b) => {
                    return a.client.revenu_mensuel - b.client.revenu_mensuel;
                })
            }
            else{
                this.displayedDemands.sort((a,b) => {
                    return a.id_demande - b.id_demande;
                })
            }


            if (this.onlyPinned == 0) {
                this.displayedDemands = this.displayedDemands.filter((demand) => {
                    return demand.statut==0 || demand.statut==1;
                })
            } else if (this.onlyPinned == 1) {
                this.displayedDemands = this.displayedDemands.filter((demand) => {
                    return demand.statut==1;
                })
            } else if (this.onlyPinned == 2) {
                this.displayedDemands = this.displayedDemands.filter((demand) => {
                    return demand.statut==-1;
                })
            } else if (this.onlyPinned == 3) {
                this.displayedDemands = this.displayedDemands.filter((demand) => {
                    return demand.statut==2;
                })
            }

        },
        fetchBankUserDemands() {
            // TODO
            /*
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
            */

            fetch(this.api_url + 'demande_banque/getAllDemandes',{
                headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
                }})
            .then((response)=>{
                if(response.status == 401){
                    this.$router.push("/login/bank");
                }
                return(response.json())
            })
            .then((data)=>{
                console.log(data);

                for (let i = 0; i < data.length; i++) {
                    if(data[i].client == null){
                        data.splice(i,1);
                        i--;
                    }
                }

                this.userDemands = data;
                this.displayedDemands = this.userDemands;
                this.performAllFilters();
            })
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

<style scoped>
#main-body {
    display: block;
    flex-direction: row;
    justify-content: space-between;
    align-items:start;
    width: 95%;
    height: 85vh;
    margin: auto;
    background-color: #D9D9D9;
    padding: 10px;
    border-radius: 10px;
    color: black;
}

h3{
    display: block;
    margin-top: 4%;
    font-size: large;
    text-align: left;
}

::-webkit-scrollbar {
    display:none;
}

#demands-overview-area {
    display: flex;
    flex-direction: column;
    margin-top: 1.5%;
    width: 100%;
    height: 85%;
    text-align: left;
}
#demands-list{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
    padding: 0;
    margin: 0;
    color: black;
    list-style: none;
    overflow-y: scroll;
    border-radius: 10px;
}

#demands-area-header{
    display: flex;
    width: 100%;
    height: 10%;
}
#research-input{
    margin-right: auto;
    width: 10em;
    height: 80%;
}

.sort-div{
    width: fit-content;
    max-width: 20%;
}

.sort-choices{
    height: 85%;
    font-size:small;
}
</style>