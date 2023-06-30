<template>
    <div id="registerMain">
        <h1>Inscription Banque</h1>

        <form id="registerForm" @submit="handleRegister">

            <div class="mb-3">
                <label for="formName" class="form-label">Nom de banque</label>
                <input type="text" class="form-control" id="formName" v-model="BankInfo.nom_banque" required/>
            </div>

            <div class="mb-3">
                <label for="formName" class="form-label">SIRET</label>
                <input type="text" class="form-control" id="formSiret" v-model="BankInfo.siret" required/>
            </div>

            <div class="mb-3">
                <label for="formEmail" class="form-label">Adresse Email</label>
                <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" v-model="BankInfo.email" required/>
            </div>

            <div class="mb-3">
                <label for="formTelephone" class="form-label">Telephone</label>
                <input type="tel" class="form-control" id="formTelephone" v-model="BankInfo.tel" required/>
            </div>

            <div class="mb-3">
                <label for="formCountry" class="form-label">Pays</label>
                <input type="text" class="form-control" id="formCountry" v-model="BankInfo.pays" required/>
            </div>

            <div class="mb-3">
                <label for="formCity" class="form-label">Ville</label>
                <input type="text" class="form-control" id="formCity" v-model="BankInfo.ville" required/>
            </div>

            <div class="mb-3">
                <label for="formAddress" class="form-label">Adresse</label>
                <input type="text" class="form-control" id="formAddress" v-model="BankInfo.adresse" required/>
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="BankInfo.password" required>
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
            <router-link to="/login/bank">Vous avez déjà un compte ?</router-link>
            <router-link to="/register/client">Vous vous inscrivez en tant que particulier ?</router-link>
            <router-link to="/">Retour à la page d'accueil</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            BankInfo: {
                nom_banque: '',
                siret: '',
                email: '',
                tel: '',
                adresse: '',
                password: '',
                pays: '',
                ville: ''
            },
            rePassword: ''
        }
    },
    methods: {
        handleRegister(ev) {

            if(this.BankInfo.nom == '' || this.BankInfo.email == '' || this.BankInfo.tel == '' || this.BankInfo.adresse == '' || this.BankInfo.password == '' || this.BankInfo.siret == '') {
                alert('Please fill all the fields');
                return;
            }

            ev.preventDefault();
            console.log(this.userInfo);
            if(this.BankInfo.password !== this.rePassword) {
                alert('Password not match');
                return;
            }
            if(/^[0-9]{15}$/.test(this.BankInfo.siret)) {
                alert('Siret is false');
                return;
            }
            fetch(this.api_url + 'auth/registerBanque', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.BankInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.id_banque != null) {
                    localStorage.setItem('token', data.token);
                    this.$router.push('/login/bank');
                } else {
                    this.$notify({
                        title: 'Erreur',
                        text: "L'inscription a échoué",
                        type: 'warn'
                    });
                }
            })

        }
    }
}
</script>

<style>
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
    padding: 1vh;
    width: min(90%, 350px);
    max-height: 95%;
    display: flex;
    flex-direction: column;
}

#registerForm {
    width: 90%;
    margin: auto;
    margin-top: 10%;
    flex: auto;
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

#registerLinks a {
    margin: 0.2em;
}

</style>