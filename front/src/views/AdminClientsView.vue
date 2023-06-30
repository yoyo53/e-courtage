<template>
    <div>
      <div>
        <HeaderComponent/>
      </div>
      <div id="links">
        <router-link class="link" to="/admin/Banques">Banques</router-link>
        <router-link class="link" to="/admin/Clients">Clients</router-link>
        <router-link class="link" to="/admin/Demandes">Demandes</router-link>
      </div>
      <div id="main-body">
        <h3>Liste des clients :</h3>
        <div id="clients-overview-area" class="section-list">
          <div id="clients-area-header">
            <div id="search-input" class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="Recherche" aria-label="Recherche" aria-describedby="addon-wrapping" v-model="searchInput">
            </div>
          </div>
          <div id="clients-list-container">
            <ul id="clients-list" class="section-list">
              <clients-list-element @updateClient="fetchClients()" v-for="client in filteredClients" :key="client.id" :client="client"></clients-list-element>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ClientsListElement from '@/components/ClientsListElement.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue'
  
  export default {
    name: 'BankHomeView',
    components: {
      HeaderComponent,
      ClientsListElement
    },
    data() {
      return {
        clients: [],
        searchInput: ""
      }
    },
    computed: {
      filteredClients() {
        if (this.searchInput) {
          const searchKeyword = this.searchInput.toLowerCase();
          return this.clients.filter(client => {
            return client.nom.toLowerCase().includes(searchKeyword) || 
            client.prenom.toLowerCase().includes(searchKeyword) ||
            client.id_client.toString().toLowerCase().includes(searchKeyword);
          });
        } else {
          return this.clients;
        }
      }
    },
    methods: {
      async fetchClients() {
        const token = localStorage.getItem('token');
        const response = await fetch(this.api_url + "admin/getAllClients", {
          headers: {
            'authorization': token
          }
        });
        const data = await response.json();
        this.clients = data;
      }
    },
    mounted() {
      this.fetchClients();
    },
    beforeUnmount() {
      console.log("Unmounted");
    }
  }
  </script>
  
  
  <style>

#links {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

#links .link {
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: white;
  color: black;
  padding: 5px 10px;
  font-size: 26px;
  flex-basis: 0;
  flex-grow: 1;
}


  #clients-list-container {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  #clients-list-container::-webkit-scrollbar {
    display: none;
  }
  
  #clients-list-container {
    max-height: 600px;
    overflow-y: auto;
    border: 2px solid aliceblue;
    border-radius: 15px;
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  
  #search-input {
      margin-bottom: 10px;
      width: 20%;
      margin-left: auto;
      margin-right: auto;
  }
  </style>
  