<template>
    <div>
        <h1>This is a register page</h1>

        <form id="registerForm">

            <div class="mb-3">
                <label for="formName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="formName" v-model="userInfo.name" required/>
            </div>

            <div class="mb-3">
                <label for="formFirstName" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="formFirstName" v-model="userInfo.firstName" required/>
            </div>

            <div class="mb-3">
                <label for="formEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" v-model="userInfo.email" required/>
            </div>

            <div class="mb-3">
                <label for="formGenre" class="form-label">Genre</label>
                <input type="text" class="form-control" id="formGenre" v-model="userInfo.genre" required/>
            </div>

            <div class="mb-3">
                <label for="formBirthDate" class="form-label">Date de naissance</label>
                <input type="text" class="form-control" id="formBirthDate" v-model="userInfo.birthDate" required/>
            </div>

            <div class="mb-3">
                <label for="formTelephone" class="form-label">Telephone</label>
                <input type="text" class="form-control" id="formTelephone" v-model="userInfo.telephone" required/>
            </div>
            <div class="mb-3">
                <label for="formCountry" class="form-label">Pays</label>
                <input type="text" class="form-control" id="formCountry" v-model="userInfo.country" required/>
            </div>
            <div class="mb-3">
                <label for="formCity" class="form-label">Ville</label>
                <input type="text" class="form-control" id="formCity" v-model="userInfo.city" required/>
            </div>
            <div class="mb-3">
                <label for="formAddress" class="form-label">Adresse</label>
                <input type="text" class="form-control" id="formAddress" v-model="userInfo.address" required/>
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="userInfo.password" required>
            </div>

            <div class="mb-3">
                <label for="formRePassword" class="form-label">Confirm Password</label>
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
                name: '',
                firstName: '',
                email: '',
                genre: '',
                birthDate: '',
                telephone: '',
                country: '',
                city: '',
                address: '',
                password: ''
            },
            rePassword: ''
        }
    },
    methods: {
        handleRegister(ev) {
            ev.preventDefault();
            console.log(this.userInfo);
            if(this.userInfo.password !== this.rePassword) {
                alert('Password not match');
                return;
            }

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