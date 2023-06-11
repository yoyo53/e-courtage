<template>
    <div>
        <h1>This is a login page</h1>
        <button @click="()=>handleLogin()">Login</button>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
        }
    },
    methods: {
        handleLogin(){
            localStorage.setItem('token', '123456789');
            this.$router.push('/client');
        }
    }
}
</script>

<style>

</style>