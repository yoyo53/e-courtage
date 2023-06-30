<template>
    <div>
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
                v-for="demande in filteredDemandes"
                :key="demande.id"
                :demand="demande"
              ></admin-demandes-list-element>
            </ul>
          </div>
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
    computed: {
      filteredDemandes() {
        if (this.searchInput) {
          const searchKeyword = this.searchInput.toLowerCase();
          return this.demandes.filter((demande) => {
            return (
              demande.sujet.toLowerCase().includes(searchKeyword) ||
              demande.nature.toLowerCase().includes(searchKeyword) ||
              demande.id_demande.toString().toLowerCase().includes(searchKeyword)
            );
          });
        } else {
          return this.demandes;
        }
      },
    },
    methods: {
      async fetchDemandes() {
        const token = localStorage.getItem("token");
        const response = await fetch(this.api_url + "admin/getAllDemandes", {
          headers: {
            authorization: token,
          },
        });
        const data = await response.json();
        this.demandes = data;
      },
    },
    mounted() {
      this.fetchDemandes();
    },
    beforeUnmount() {
      console.log("Unmounted");
    },
  };
  </script>
  
  
  <style scoped>

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
  