<template>
  <div>
    <h1>Admin Home Page</h1>

    <HeaderComponent/>
  </div>

  <div id="main-body">
    <h3>Liste des banques :</h3>
    <div id="banks-overview-area" class="section-list">
        <div id="banks-area-header">
            <div id="research-input" class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="Recherche" aria-label="Recherche" aria-describedby="addon-wrapping">
            </div>
        </div>
        <div id="banks-list-container">
        <ul id="banks-list" class="section-list">
          <banks-list-element v-for="temp_bank in banks" v-bind:key="temp_bank.id" :bank="temp_bank"></banks-list-element>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BanksListElement from '@/components/BanksListElement.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
    name: 'BankHomeView',
    components: {
    HeaderComponent,
    BanksListElement
    },
    data(){
        return {
            banks:[],
            searchInput:""
        }
    },
    watch:{
        searchInput(newSearchInput){
            console.log(newSearchInput);
            this.performSearch();
            
        }
    },
    methods:{
        fetchBanks() {
            this.banks = [
            {
                nom_banque: "Banque A",
                siret: "123456789",
                pays: "France",
                ville: "Paris",
                adresse: "123 Rue de la Banque",
                email: "contact@banquea.com",
                tel: "0123456789",
                account_status: true
            },
            {
                nom_banque: "Banque B",
                siret: "987654321",
                pays: "États-Unis",
                ville: "New York",
                adresse: "456 Bank Street",
                email: "info@banqueb.com",
                tel: "9876543210",
                account_status: false
            },
            {
                nom_banque: "Banque C",
                siret: "111111111",
                pays: "Espagne",
                ville: "Madrid",
                adresse: "Calle de la Banca",
                email: "info@banquex.com",
                tel: "1111111111",
                account_status: false
            },
            {
                nom_banque: "Banque D",
                siret: "222222222",
                pays: "Allemagne",
                ville: "Berlin",
                adresse: "Bankstraße",
                email: "contact@banquey.com",
                tel: "2222222222",
                account_status: true
            },
            {
                nom_banque: "Banque E",
                siret: "999999999",
                pays: "Royaume-Uni",
                ville: "Londres",
                adresse: "Bank Road",
                email: "support@banquez.com",
                tel: "9999999999",
                account_status: true
            },
            {
                nom_banque: "Banque F",
                siret: "888888888",
                pays: "Italie",
                ville: "Rome",
                adresse: "Via della Banca",
                email: "info@banquew.com",
                tel: "8888888888",
                account_status: false
            }
        ];
        },
        performSearch(){
            this.displayedDemands = this.userDemands.filter((demand) => {
                return demand.sujet.toLowerCase().includes(this.searchInput.toLowerCase());
        });

    }},
    mounted() {
        console.log("Mounted");
        this.fetchBanks();
    },
    beforeUnmount() {
        console.log("Unmounted");
    }


}
</script>

<style>

#banks-list-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#banks-list-container::-webkit-scrollbar {
  display: none;
}

#banks-list-container {
  max-height: 600px;
  overflow-y: auto;
  border: 2px solid aliceblue;
  border-radius: 15px;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

#research-input{
    margin-bottom: 10px;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
}

</style>