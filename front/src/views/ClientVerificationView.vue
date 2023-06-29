<template>
    <div>
        <h1>Client Verification</h1>
        
        <div v-if="verifying">
            <h2>Verifying...</h2>
        </div>

        <div v-if="verified">
            <h2>Verified</h2>*
            <router-link to="/login">Login</router-link>
        </div>

        <div v-if="!verifying && !verified">
            <h2>Verification failed</h2>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            verifying: true,
            verified: false,
        }
    },
    mounted() {
        fetch(this.api_url + 'auth/verifyClient/'+this.$route.params.token,{
            headers: {
            'Content-Type': 'application/json',
            }})
            .then(response => {
                if(response.status == 200){
                    this.verifying = false;
                    this.verified = true;
                }
                else{
                    this.verifying = false;
                    this.verified = false;
                }
            })
    },
}
</script>

<style>

</style>