<template>
    <div id="recoveryForgotMain">
        <h1> Vous avez oublié votre mot de passe ? </h1>
        <form>
            <div class="mb-3">
                    <label for="formEmail" class="form-label">Veuillez entrer votre email :</label>
                    <input type="email" class="form-control" id="formEmail" v-model="email" placeholder="Renseignez votre email" required :disabled="success">
            </div>
            <button type="submit" class="btn btn-primary" @click="(ev)=>handleSubmit(ev)" v-if="!success">Envoyer</button>
            <h2 v-if="success">Un email vous a été envoyé</h2>
        </form>
        <router-link to="/login/client">Retour à la page de connexion</router-link>
        <router-link to="/">Retour à la page d'accueil</router-link>
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

<style scoped>

    #recoveryForgotMain {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 1em;
        background-color: #b9b9b9;
        color: white;
        border: 1px solid black;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(90%, 350px);
    }

    #recoveryForgotMain h1 {
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
        border-bottom: solid 1px black;
    }

    #recoveryForgotMain form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        margin-bottom: 1em;
    }

    #recoveryForgotMain form div {
        width: 100%;
    }

    #recoveryForgotMain form div input {
        width: 100%;
    }

    #recoveryForgotMain form h2 {
        margin: 0;
    }

    #recoveryForgotMain a {
        margin: 0.2em;
    }
</style>