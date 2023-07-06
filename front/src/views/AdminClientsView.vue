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
  import ClientsListElement from '@/components/AdminClientsListElement.vue';
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
        data.forEach(client => {
          if (client.date_birth != null) {
            client.date_birth = new Date(client.date_birth).toLocaleDateString();
          }
          if (client.poste_depuis != null) {
            client.poste_depuis = new Date(client.poste_depuis).toLocaleDateString();
          }
          if (client.genre == "1") {
            client.genre = "Homme";
          }
          else if (client.genre == "2") {
            client.genre = "Femme";
          }
          else if (client.genre == "3") {
            client.genre = "Autre";
          }
        });
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

#clients-overview-area {
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

  #clients-list-container::-webkit-scrollbar {
    display: none;
  }
  
  #clients-list-container {
    flex: auto;
    overflow-y: scroll;
    scrollbar-width: none;
    border: 2px solid aliceblue;
    border-radius: 15px;
    width: max(min(90%, 700px), 50%);
    margin: 1em auto;
  }

  #clients-list {
    padding: 0;
  }
  
  #search-input {
      margin-bottom: 10px;
      width: 15em;
      margin: auto;
  }
  </style>
  