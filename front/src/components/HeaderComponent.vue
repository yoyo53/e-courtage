<template>
  <div id="header">
        <h1>E-COURTAGE</h1>
        <div id="headerButtons">
          <button class="headerButton" v-if="this.$route.path == '/client'"><router-link to="/client/profile">Vos infos</router-link></button>
          <button class="headerButton" v-if="this.$route.path == '/client/profile'"><router-link to="/client">Accueil</router-link></button>
          <button class="headerButton" v-if="this.$route.path == '/'" @click="()=>handleLoginButton()">Se Connecter</button>
          <button class="headerButton" v-else @click="()=>handleDisconnect()">Se Déconnecter</button>
        </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    components: {
    },
    data() {
        return {
          connected: false
        }
    },
    beforeCreate() {
        //If the token is not valid and the user is not on the landing page, redirect him to the login page
        // TODO: we should check if the token is really valid

        if(!localStorage.getItem('token') && this.$route.path != '/') {
          this.$router.push('/login');
          return;
        }

        if(this.$route.path == '/client' || this.$route.path == '/client/profile') {
            fetch(this.api_url + 'client/getClient',{
            headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem("token")
            }})
            .then((response)=>{
              if(response.status == 401) {
                localStorage.removeItem('token');
                this.$router.push('/login');
              }
              return;
            })
        }
    },
    methods: {
        handleDisconnect(){
            localStorage.removeItem('token');
            this.$router.push('/');
        },
        handleLoginButton(){
          this.$router.push('/login');
        }
    }
}
</script>

<style>
#header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5vh;
    padding: 0 2vw;
}

#header h1 {
    color: white;
    font-size: 2em;
}

#headerButtons {
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-left: auto;
}

.headerButton, .headerButton a {
    color: white;
    background-color: transparent;
    text-decoration: none;
    border: none;
    cursor: pointer;
    padding: 0 1em;
    white-space: nowrap;
}

.headerButton a:hover, .headerButton:hover {
    text-decoration: underline;
}

.headerButton a:active, .headerButton:active {
    color: #D9D9D9;
}

</style>