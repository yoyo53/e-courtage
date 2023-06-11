<template>
    <div>
        <h1>This is a login page</h1>
        <button @click="()=>handleLoginC()">Login (Client)</button>
        <button @click="()=>handleLoginB()">Login (Banque)</button>
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
        handleLoginC(){
            localStorage.setItem('token', '123456789');
            this.$router.push('/client');
        },
        handleLoginB(){
            localStorage.setItem('token', '123456789');
            this.$router.push('/bank');
        }
    }
}
</script>

<style>

</style>