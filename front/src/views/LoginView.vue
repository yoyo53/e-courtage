<template>
    <div id="loginMain">
        <h1>Connexion</h1>

        <form id="loginForm">
            <div class="mb-3">
                <label for="formEmail" class="form-label">Adresse Email</label>
                <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" v-model="email">
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="password">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary" @click="()=>handleLoginC()">Connexion</button>
            </div>

        </form>

        <div id="loginLinks">
            <router-link to="/register">Vous n'avez encore de compte ?</router-link>
            <router-link to="/login/bank">Vous vous connectez en tant que banque?</router-link>
            <router-link to="/">Retour à la page d'accueil</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleLoginC(){
            let obj = {email:this.email,password:this.password}
            fetch( this.api_url + 'auth/loginClient', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then((res) => {return(res.json())})
            .then((data) => {
                console.log(data);
                if(data.token != null) {
                    localStorage.setItem('token', data.token);
                    this.$router.push('/client');
                } else {
                    alert('Login failed');
                }
            })
                
        },
        handleLoginB(){
            localStorage.setItem('token', '123456789');
            this.$router.push('/bank');
        }
    }
}
</script>

<style>

    #loginMain {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        border-radius: 10px;
        border: 3px solid #000000;
        padding: 1vh;
    }

    #loginForm {
        width: 80%;
        margin: auto;
        margin-top: 2vw;
    }

    #loginLinks {
        margin-top: 2vw;
        display: flex;
        flex-direction: column;
        padding: 1vh;
        border-radius: 10px;
        border: 3px solid #000000;
        background-color: #b9b9b9;
    }
</style>