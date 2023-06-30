<template>
  <div>
    <div>
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
            <banks-list-element @updateBank="fetchBanks()" v-for="temp_bank in banks" v-bind:key="temp_bank.id" :bank="temp_bank"></banks-list-element>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BanksListElement from '@/components/AdminBanksListElement.vue';
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
        async fetchBanks() {
            const token = localStorage.getItem('token');
            const response = await fetch(this.api_url + "admin/getAllBanques", {
                headers: {
                    'authorization': token
                }
            });
            const data = await response.json();
            console.log(data);
            this.banks = data;
            
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