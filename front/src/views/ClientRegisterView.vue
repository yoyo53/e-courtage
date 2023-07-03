<template>
    <div id="registerMain">
        <h1>Inscription</h1>

        <form id="registerForm" @submit="handleRegister">

            <div class="mb-3">
                <label for="formName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="formName" v-model="userInfo.nom" required/>
            </div>

            <div class="mb-3">
                <label for="formFirstName" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="formFirstName" v-model="userInfo.prenom" required/>
            </div>

            <div class="mb-3">
                <label for="formEmail" class="form-label">Adresse Email</label>
                <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" v-model="userInfo.email" required/>
            </div>

            <div class="mb-3">
                <label for="formGenre" class="form-label">Genre</label>
                <select class="form-select" aria-label="Default select example" id="formGenre" v-model="userInfo.genre">
                    <option value="">Selectionnez votre genre</option>
                    <option value="1">homme</option>
                    <option value="2">femme</option>
                    <option value="3">autre</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="formBirthDate" class="form-label">Date de naissance</label>
                <input type="date" class="form-control" id="formBirthDate" v-model="userInfo.date_birth" required/>
            </div>

            <div class="mb-3">
                <label for="formTelephone" class="form-label">Telephone</label>
                <input type="tel" class="form-control" id="formTelephone" v-model="userInfo.tel" required/>
            </div>
            <div class="mb-3">
                <label for="formCountry" class="form-label">Pays</label>
                <input type="text" class="form-control" id="formCountry" v-model="userInfo.pays" required/>
            </div>
            <div class="mb-3">
                <label for="formCity" class="form-label">Ville</label>
                <input type="text" class="form-control" id="formCity" v-model="userInfo.ville" required/>
            </div>
            <div class="mb-3">
                <label for="formAddress" class="form-label">Adresse</label>
                <input type="text" class="form-control" id="formAddress" v-model="userInfo.adresse" required/>
            </div>
            <div class="mb-3">
                <label for="formPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="userInfo.password" required>
            </div>

            <div class="mb-3">
                <label for="formRePassword" class="form-label">Confirmez le mot de passe</label>
                <input type="password" class="form-control" id="formRePassword" placeholder="********" v-model="rePassword" required>
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Inscription</button>
            </div>

        </form>
        <div id="registerLinks">
            <router-link to="/login/client">Vous avez déjà un compte ?</router-link>
            <router-link to="/register/bank">Vous vous inscrivez en tant que banque ?</router-link>
            <router-link to="/">Retour à la page d'accueil</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                nom: '',
                prenom: '',
                email: '',
                genre: '',
                date_birth: '',
                tel: '',
                pays: '',
                ville: '',
                adresse: '',
                password: ''
            },
            rePassword: ''
        }
    },
    methods: {
        handleRegister(ev) {

            if(this.userInfo.nom == '' || this.userInfo.prenom == '' || this.userInfo.email == '' || this.userInfo.genre == '' || this.userInfo.date_birth == '' || this.userInfo.tel == '' || this.userInfo.pays == '' || this.userInfo.ville == '' || this.userInfo.adresse == '' || this.userInfo.password == '') {
                this.$notify({
                    title: 'Error',
                    text: 'Veuiilez remplir tous les champs',
                    type: 'warn'
                });
                return;
            }

            ev.preventDefault();
            console.log(this.userInfo);
            if(this.userInfo.password !== this.rePassword) {
                this.$notify({
                    title: 'Error',
                    text: 'Les mots de passe ne correspondent pas',
                    type: 'warn'
                });
                return;
            }
            fetch(this.api_url + 'auth/registerClient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.userInfo)
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
                if(data.id_client != null) {
                    localStorage.setItem('token', data.token);
                    this.$router.push('/login/client');
                } else {
                    this.$notify({
                        title: 'Error',
                        text: 'Une erreur est survenue',
                        type: 'warn'
                    });
                }
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

    ::-webkit-scrollbar {
        display:none;
    }

    #registerMain {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        border-radius: 10px;
        border: 3px solid #000000;
        padding: 1dvh;
        width: min(90%, 350px);
        max-height: 95%;
        display: flex;
        flex-direction: column;
    }

    #registerForm {
        width: 90%;
        margin: auto;
        flex: auto;
        overflow-y : scroll;
        scrollbar-width: none;
    }

    #registerLinks {
        margin-top: 2dvw;
        display: flex;
        flex-direction: column;
        padding: 1dvh;
        border-radius: 10px;
        border: 3px solid #000000;
        background-color: #b9b9b9;
    }

    #registerLinks a {
        margin: 0.2em;
    }
</style>