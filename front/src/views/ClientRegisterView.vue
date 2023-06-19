<template>
    <div>
        <h1>This is a register page</h1>

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
                <label for="formPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="userInfo.password" required>
            </div>

            <div class="mb-3">
                <label for="formRePassword" class="form-label">Confirmez le mot de passe</label>
                <input type="password" class="form-control" id="formRePassword" placeholder="********" v-model="rePassword" required>
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary" @click="(ev)=>handleRegister(ev)">Register</button>
            </div>

        </form>
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
                alert('Please fill all the fields');
                return;
            }

            ev.preventDefault();
            console.log(this.userInfo);
            if(this.userInfo.password !== this.rePassword) {
                alert('Password not match');
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
                    alert('Register failed');
                }
            })

        }
    }
}
</script>

<style>

    #registerForm {
        width: 30%;
        margin: auto;
        margin-top: 2vw;
        height: 80vh;
        overflow-y : scroll;
        background-color: #d9d9d9;
        border-radius: 10px;
        color: black;
    }

</style>