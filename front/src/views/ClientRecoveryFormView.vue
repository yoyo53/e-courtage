<template>
    <div>
        <h1> Nouveau mot de passe </h1>
        <form>
            <div class="mb-3">
                    <label for="formPassword" class="form-label">Veuillez entrer votre nouveau mot de passe :</label>
                    <input type="password" class="form-control" id="formPassword" v-model="password" placeholder="Renseignez votre nouveau mot de passe" required :disabled="success">
            </div>
            <div class="mb-3">
                    <label for="formRePassword" class="form-label">Veuillez confirmer votre nouveau mot de passe :</label>
                    <input type="password" class="form-control" id="formRePassword" v-model="repassword" placeholder="Confirmez votre nouveau mot de passe" required :disabled="success">
            </div>
            <button type="submit" class="btn btn-primary" @click="(ev)=>handleSubmit(ev)" v-if="!success">Envoyer</button>
        </form>
        <div v-if="success">
            <h2>Votre mail a été modifié</h2>
            <router-link to="/login/client">Retour à la page de connexion</router-link>
            <router-link to="/">Retour à la page d'accueil</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            repassword: '',
            success: false,
        }
    },
    methods: {
        handleSubmit(ev) {
            
            if(this.password == '' || this.repassword == '') {
                return;
            }

            ev.preventDefault();

            if(this.password != this.repassword) {
                this.$notify({
                    title: 'Erreur',
                    text: 'Les mots de passe ne correspondent pas',
                    type: 'error'
                });
                return;
            }

            fetch(this.api_url + 'auth/verifyClient/'+this.$route.params.token,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token: this.$route.params.token, password: this.password})
            })
            .then(res => {
                if(res.status == 200) {
                    return res.json();
                } else {
                    throw new Error('Une erreur est survenue');
                }
            })
            .then(data => {
                console.log(data);
                this.success = true;
                this.$notify({
                    title: 'Succès',
                    text: 'Votre mot de passe a été modifié',
                    type: 'success'
                });
            })
            .catch(err => {
                console.log(err);
                this.$notify({
                    title: 'Erreur',
                    text: 'Une erreur est survenue',
                    type: 'error'
                });
            })
        }
    }
}
</script>

<style>

</style>