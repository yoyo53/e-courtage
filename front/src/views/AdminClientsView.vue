<template>
    <div>
        <div>
        <h1>Admin Clients Page</h1>
    
        <HeaderComponent/>
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
                <clients-list-element @updateClient="fetchClients()" v-for="temp_client in clients" :key="temp_client.id" :client="temp_client"></clients-list-element>
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
      watch: {
          searchInput(newSearchInput) {
              console.log(newSearchInput);
              this.performSearch();
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
              console.log(data);
              this.clients = data;
          },
          performSearch() {
              // Todo
          }
      },
      mounted() {
          console.log("Mounted");
          this.fetchClients();
      },
      beforeUnmount() {
          console.log("Unmounted");
      }
  }
  </script>
  
  <style>
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
  