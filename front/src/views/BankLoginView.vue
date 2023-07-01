<template>
    <div id="loginMain">
        <h1>Connexion Banque</h1>

        <form id="bankLoginForm" @submit.prevent="handleLoginB">
            <div class="mb-3">
                <label for="formEmail" class="form-label">Email address</label>
                <input type="text" class="form-control" id="formEmail" placeholder="name@example.com" v-model="email">
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="password">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Connexion</button>
            </div>

        </form>
        <div id="loginLinks">
            <router-link to="/register/bank">Vous n'avez pas encore de compte ?</router-link>
            <router-link to="/login/client">Vous vous connectez en tant que particulier ?</router-link>
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
        handleLoginB(){
            let obj = {email:this.email,password:this.password}
            fetch( this.api_url + 'auth/loginBanque', {
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
                    this.$router.push('/bank');
                } else {
                    this.$notify({
                        title: 'Erreur',
                        text: 'Email ou mot de passe incorrect',
                        type: 'warn'
                    });
                }
            })
                
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

#bankLoginForm {
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