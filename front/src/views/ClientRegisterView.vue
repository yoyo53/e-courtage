<template>
    <div id="registerMain">
        <h1>Inscription</h1>

        <form id="registerForm">

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
                <label for="formHealthDocument" class="form-label">Document de santé</label>
                <input type="file" class="form-control" id="formHealthDocument" required @change="(ev)=>handleDocumentPlacement(ev)" />
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
                <button type="submit" class="btn btn-primary" @click="(ev)=>handleRegister(ev)">Inscription</button>
            </div>

        </form>
        <div id="registerLinks">
            <router-link to="/login">Vous avez déjà un compte ?</router-link>
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
            healthDocument: null,
            rePassword: ''
        }
    },
    methods: {
        handleDocumentPlacement(ev) {
            this.healthDocument = ev.target.files[0];
        },
        handleRegister(ev) {

            if(this.userInfo.nom == '' || this.userInfo.prenom == '' || this.userInfo.email == '' || this.userInfo.genre == '' || this.userInfo.date_birth == '' || this.userInfo.tel == '' || this.userInfo.pays == '' || this.userInfo.ville == '' || this.userInfo.adresse == '' || this.userInfo.password == '') {
                this.$notify({
                    group: 'foo',
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
                    group: 'foo',
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
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.id_client != null) {
                    localStorage.setItem('token', data.token);
                    this.$router.push('/login');
                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'Error',
                        text: 'Une erreur est survenue',
                        type: 'warn'
                    });
                }
            })

            //We send the file with a XMLHttpRequest
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('nom_document', "Document de santé");
            formData.append('type', "Document médical");
            
            let xhr = new XMLHttpRequest();
            xhr.open('POST', this.api_url + 'document/addDocument');
            xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            xhr.send(formData);
            xhr.onload = () => {
                if(xhr.status == 200){
                    console.log("File sent");
                }
                else{
                    console.log("Error while sending file");
                }
            }

        }
    }
}
</script>

<style>

    #registerMain {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        border-radius: 10px;
        border: 3px solid #000000;
        padding: 1vh;
    }

    #registerForm {
        width: 80%;
        margin: auto;
        margin-top: 10%;

        height: 60vh;
        overflow-y : scroll;
        scrollbar-width: none;

    }

    #registerLinks {
        margin-top: 2vw;
        display: flex;
        flex-direction: column;
        padding: 1vh;
        border-radius: 10px;
        border: 3px solid #000000;
        background-color: #b9b9b9;
    }

</style>