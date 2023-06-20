<template>
    <div>
        <HeaderComponent/>
        <!--<h1>This is a client home page</h1>-->
        <div id="main-body">
            <h3>Liste des demandes en cours :</h3>
            <div id="demands-overview-area" class="section-list">
                <div id="demands-area-header">
                    <div id="research-input" class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Recherche" aria-label="Recherche" aria-describedby="addon-wrapping">
                    </div>
                    <!-- <input type="text" name="recherche"> -->
                    <div>
                        <select id="sort-choices" class="form-select" aria-label="Default select example">
                            <option selected>Trier par :</option>
                            <option value="Name">Nom</option>
                            <option value="Value">Valeur</option>
                            <option value="Salaire">Salaire</option>
                          </select>
                    </div>
                    <div>
                        <select id="sort-choices" class="form-select" aria-label="Default select example">
                            <option selected>Afficher :</option>
                            <option value="1">favori</option>
                          </select>
                    </div>
                    
                </div>
                <ul id="demands-list" class="section-list">
                    <client-bank-demands-list-element v-for="temp_demand in userDemands" v-bind:key="temp_demand.id" :demand="temp_demand"></client-bank-demands-list-element>
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
            userDemands:[]
        }
    },
    methods:{
        fetchBankUserDemands() {
            // TODO
            this.userDemands = [
                {
                    "id":0,
                    "sujet": "Projet Maison",
                    "Nom": "Jesen Brown",
                    "Valeur": "300 000 €",
                    "Salaire" : "4000 €",
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":1,
                    "sujet": "Projet construction",
                    "Nom": "Mike Harvey",
                    "Valeur": "900 000 €",
                    "Salaire" : "8000 €",
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":2,
                    "sujet": "Projet jet",
                    "Nom": "Louis Litt",
                    "Valeur": "500 000 €",
                    "Salaire" : "6000 €",
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":3,
                    "sujet": "Projet LVMH",
                    "Nom": "Bernard Arnaud",
                    "Valeur": "20 000 000 €",
                    "Salaire" : "60 000 €",
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":4,
                    "sujet": "Projet lawyer",
                    "Nom": "Specter Ross",
                    "Valeur": "100 000 €",
                    "Salaire" : "3000 €",
                    "favorite" : false,
                    "added" : false
                },
                {
                    "id":5,
                    "sujet": "Projet club",
                    "Nom": "Jimmy Buckets",
                    "Valeur": "1 000 000 €",
                    "Salaire" : "8000 €",
                    "favorite" : false,
                    "added" : false
                }
            ]
        },

    },
    mounted() {
        console.log("Mounted");
        this.fetchBankUserDemands();
    },
    beforeUnmount() {
        console.log("Unmounted");
    }


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