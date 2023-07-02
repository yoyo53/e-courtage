<template>
  <div id="content">
    <div>
      <HeaderComponent/>
    </div>
    <div id="links">
      <router-link class="link" to="/admin/Banques">Banques</router-link>
      <router-link class="link" to="/admin/Clients">Clients</router-link>
      <router-link class="link" to="/admin/Demandes">Demandes</router-link>
    </div>
    <div id="main-body">
      <div id="banks-filter">
        <input type="checkbox" id="uncheckedOnly" v-model="showUncheckedOnly">
        <label for="uncheckedOnly">Afficher uniquement les comptes non validés</label>
      </div>
      <h3>Liste des banques :</h3>
      <div id="banks-overview-area" class="section-list">
        <div id="banks-area-header">
          <div id="research-input" class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Recherche" aria-label="Recherche" aria-describedby="addon-wrapping" v-model="searchInput">
          </div>
        </div>
        <div id="banks-list-container">
          <ul id="banks-list" class="section-list">
            <banks-list-element @updateBank="fetchBanks()" v-for="bank in filteredBanks" :key="bank.id" :bank="bank"></banks-list-element>
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
  data() {
    return {
      banks: [],
      searchInput: "",
      showUncheckedOnly: false
    }
  },
  computed: {
    filteredBanks() {
      if (this.searchInput) {
        const searchKeyword = this.searchInput.toLowerCase();
        return this.banks.filter(bank => {
          return (
            (!this.showUncheckedOnly || !bank.account_status) &&
            (bank.nom_banque.toLowerCase().includes(searchKeyword) ||
              bank.id_banque.toString().toLowerCase().includes(searchKeyword))
          );
        });
      } else {
        return this.banks.filter(bank => !this.showUncheckedOnly || !bank.account_status);
      }
    }
  },
  methods: {
    async fetchBanks() {
      const token = localStorage.getItem('token');
      const response = await fetch(this.api_url + "admin/getAllBanques", {
        headers: {
          'authorization': token
        }
      });
      const data = await response.json();
      this.banks = data;
    }
  },
  mounted() {
    this.fetchBanks();
  },
  beforeUnmount() {
    console.log("Unmounted");
  }
}
</script>

<style scoped>
#content {
  height: 100dvh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
}

#main-body {
  height: 100dvh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  flex: auto;
}

#banks-overview-area {
  height: 100dvh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  flex: auto;
}

#links {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: auto;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

#links .link {
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: white;
  color: black;
  padding: 5px 10px;
  font-size: 1.5em;
}


#banks-filter {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

#banks-list-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#banks-list-container::-webkit-scrollbar {
  display: none;
}

#banks-list-container {
  flex: auto;
  overflow-y: scroll;
  border: 2px solid aliceblue;
  border-radius: 15px;
  width: max(min(90%, 700px), 50%);
  margin: 1em auto;
}

#banks-list {
  padding: 0;
}

#research-input{
    margin-bottom: 10px;
    width: 15em;
    margin: auto;
}

</style>