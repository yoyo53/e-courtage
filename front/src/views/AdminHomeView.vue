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
        <ul id="banks-list" class="section-list">
            <banks-list-element v-for="temp_bank in banks" v-bind:key="temp_bank.id" :bank="temp_bank"></banks-list-element>
        </ul>
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
            userDemands:[]
        }
    },
    methods:{
      fetchBanks() {
            // TODO
        },

    },
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

</style>