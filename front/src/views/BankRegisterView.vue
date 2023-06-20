<template>
    <div>
        <h1>This is bank register page</h1>

        <form id="registerForm">

            <div class="mb-3">
                <label for="formName" class="form-label">Nom de banque</label>
                <input type="text" class="form-control" id="formName" v-model="BankInfo.nom_banque" required/>
            </div>

            <div class="mb-3">
                <label for="formName" class="form-label">SIRET</label>
                <input type="text" class="form-control" id="formSiret" v-model="BankInfo.siren" required/>
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
                <button type="submit" class="btn btn-primary" @click="(ev)=>handleRegister(ev)">Register</button>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            BankInfo: {
                nom_banque: '',
                siren: '',
                email: '',
                tel: '',
                adresse: '',
                password: ''
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
            if(/^[0-9]{14}$/.test(this.BankInfo.siret)) {
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
::-webkit-scrollbar {
    display:none;
}
</style>