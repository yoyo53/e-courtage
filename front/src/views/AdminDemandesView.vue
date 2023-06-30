<template>
    <div>
      <HeaderComponent />
    </div>
    <div id="links">
    <router-link class="link" to="/admin/Banques">Banques</router-link>
    <router-link class="link" to="/admin/Clients">Clients</router-link>
    <router-link class="link" to="/admin/Demandes">Demandes</router-link>
    </div>
    <div id="main-body">
      <h3>Liste des demandes :</h3>
      <div id="demandes-overview-area" class="section-list">
        <div id="demandes-area-header">
          <div id="search-input" class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Recherche"
              aria-label="Recherche"
              aria-describedby="addon-wrapping"
              v-model="searchInput"
            />
          </div>
        </div>
        <div id="demandes-list-container">
          <ul id="demandes-list" class="section-list">
            <admin-demandes-list-element
              @updateDemande="fetchDemandes()"
              v-for="temp_demande in demandes"
              :key="temp_demande.id"
              :demand="temp_demande"
            ></admin-demandes-list-element>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AdminDemandesListElement from "@/components/AdminDemandesListElement.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  export default {
    name: "BankHomeView",
    components: {
      HeaderComponent,
      AdminDemandesListElement,
    },
    data() {
      return {
        demandes: [],
        searchInput: "",
      };
    },
    watch: {
      searchInput(newSearchInput) {
        console.log(newSearchInput);
        this.performSearch();
      },
    },
    methods: {
      async fetchDemandes() {
        const token = localStorage.getItem("token");
        const response = await fetch(this.api_url + "admin/getAllDemandes", {
          headers: {
            'authorization': token,
          },
        });
        const data = await response.json();
        console.log(data);
        this.demandes = data;
      },
      performSearch() {
        // Todo
      },
    },
    mounted() {
      console.log("Mounted");
      this.fetchDemandes();
    },
    beforeUnmount() {
      console.log("Unmounted");
    },
  };
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
}

  #demandes-list-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  #demandes-list-container::-webkit-scrollbar {
    display: none;
  }
  
  #demandes-list-container {
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
  