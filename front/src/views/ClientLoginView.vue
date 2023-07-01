<template>
    <div id="loginMain">
        <h1>Connexion</h1>

        <form id="clientLoginForm" @submit.prevent="handleLoginC">
            <div class="mb-3">
                <label for="formEmail" class="form-label">Adresse Email</label>
                <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" v-model="email">
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="password">
                <router-link to="/client/forgot">Mot de passe oublié ?</router-link>
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Connexion</button>
            </div>

        </form>

        <div id="loginLinks">
            <router-link to="/register/client">Vous n'avez pas encore de compte ?</router-link>
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
                    this.$notify({
                        title: 'Erreur',
                        text: 'La connexion a échoué',
                        type: 'warn'
                    });
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

<style scoped>
    ::-webkit-scrollbar {
        display:none;
    }

    #loginMain {
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

    #clientLoginForm {
        width: 90%;
        margin: auto;
        margin-top: 2dvw;
        flex: auto;
        overflow-y : scroll;
        scrollbar-width: none;
    }

    #loginLinks {
        margin-top: 2dvw;
        display: flex;
        flex-direction: column;
        padding: 1dvh;
        border-radius: 10px;
        border: 3px solid #000000;
        background-color: #b9b9b9;
    }

    #loginLinks a {
        margin: 0.2em;
    }
</style>