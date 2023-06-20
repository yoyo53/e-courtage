<template>
  <div id="header">
        <h1>E-COURTAGE</h1>
        <button v-if="this.$route.path == '/'" @click="()=>handleLoginButton()">Se Connecter</button>
        <button v-else @click="()=>handleDisconnect()">Se Déconnecter</button>
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
    mounted() {
        //If the token is not valid and the user is not on the landing page, redirect him to the login page
        // TODO: we should check if the token is really valid
        if(!localStorage.getItem('token') && this.$route.path != '/') {
            this.$router.push('/login');
        }
    },
    methods: {
        handleDisconnect(){
            localStorage.removeItem('token');
            this.$router.push('/');
        },
        handleLoginButton(){
          if(localStorage.getItem('token')) {  // TODO: we should check if the token is valid
            this.$router.push('/client');
          } else {
            this.$router.push('/login');
          }
        }
    }
}
</script>

<style>
#header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5vh;
}
</style>