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
          this.$router.push('/login/client');
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
                this.$router.push('/login/client');
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
          this.$router.push('/login/client');
        }
    }
}
</script>

<style>
#header {
    display: flex;
    justify-content: space-between;
    height: 5vh;
    margin-bottom: 5vh;
    padding-left: 2vw;
    padding-right: 2vw;
}

#header h1 {
    color: white;
    font-size: 5vh;
    margin: 0;
}

#headerButtons {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
}

.headerButton {
    height: 100%;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2.5vh;
    padding-left: 10%;
    padding-right: 10%;
    white-space: nowrap;
}

.headerButton a:hover {
    text-decoration: underline;
}

.headerButton a:active {
    color: #D9D9D9;
}

.headerButton a:visited {
    text-decoration: none;
    color: white;
    border: none;
}


</style>