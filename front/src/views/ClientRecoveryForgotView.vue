<template>
    <div>
        <h1> Vous avez oublié votre mot de passe ? </h1>
        <form>
            <div class="mb-3">
                    <label for="formEmail" class="form-label">Veuillez entrer votre email :</label>
                    <input type="email" class="form-control" id="formEmail" v-model="email" placeholder="Renseignez votre email" required :disabled="success">
            </div>
            <button type="submit" class="btn btn-primary" @click="(ev)=>handleSubmit(ev)" v-if="!success">Envoyer</button>
        </form>
        <div v-if="success">
            <h2>Un email vous a été envoyé</h2>
            <router-link to="/login/client">Retour à la page de connexion</router-link>
            <router-link to="/">Retour à la page d'accueil</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            success: false,
        }
    },
    methods: {
        handleSubmit(ev) {
            
            if(this.email == '') {
                return;
            }

            ev.preventDefault();

            fetch(this.api_url + 'client//sendRecuperationMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: this.email})
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
                    text: 'Un email vous a été envoyé',
                    type: 'success'
                });
            })
            .catch(err => {
                console.log(err);
                this.$notify({
                    title: 'Error',
                    text: 'Une erreur est survenue',
                    type: 'warn'
                });
            });
        }
    }
}
</script>

<style>

</style>