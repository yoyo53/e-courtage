<template>
    <div id="verificationMain">
        <h1 id="verificationTitle">Verification Client </h1>
        

        <div id="verificationMessage">
            <div v-if="verifying">
                <h2>Verification ...</h2>
                <p>Veuillez patienter pendant que nous vérifions votre compte.</p>
            </div>

            <div v-if="verified" class="verificationOption">
                <h2>Votre compte a été activé</h2>
                <p>Vous pouvez maintenant vous connecter.</p>
                <router-link to="/login/client" class="btn btn-primary verificationLink">Cliquez ici pour vous connecter</router-link>
                <router-link to="/" class="btn btn-primary verificationLink">Cliquez ici pour retourner à l'accueil</router-link>
            </div>

            <div v-if="!verifying && !verified" class="verificationOption">
                <h2>La verification a échoué</h2>
                <p>Votre compte a peut-être déjà été activé.</p>
                <router-link to="/login/client" class="btn btn-primary verificationLink">Cliquez ici pour vous connecter</router-link>
                <router-link to="/" class="btn btn-primary verificationLink">Cliquez ici pour retourner à l'accueil</router-link>
            </div>
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

    #verificationMain{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        border-radius: 10px;
        background-color: #b9b9b9;
        border: solid 1px black;
        padding: 1vh;
        min-height: 30vh;
    }

    #verificationTitle{
        font-size: 3em;
        border-bottom: solid 1px black;
        margin-bottom: 1vh;
    }

    #verificationMessage{
        margin-top: 1vh;
    }

    .verificationOption{
        display: flex;
        flex-direction: column;
    }

    .verificationLink{
        font-size: 1.2em;
        margin-top: 1vh;
    }

</style>