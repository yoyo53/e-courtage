<template>
    <div id="loginMain">
        <h1>Connexion Admin</h1>

        <form id="loginForm" @submit.prevent="handleLoginA">
            <div class="mb-3">
                <label for="formIdentifiant" class="form-label">Identifiant</label>
                <input type="text" class="form-control" id="formIdentifiant" placeholder="identifiant" v-model="identifiant">
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="password">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Connexion</button>
            </div>

        </form>

        <div id="loginLinks">
            <router-link to="/">Retour à la page d'accueil</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            identifiant: '',
            password: ''
        }
    },
    methods: {
        handleLoginA(){
            let obj = {identifiant:this.identifiant,password:this.password}
            fetch( this.api_url + 'auth/loginAdmin', {
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
                    this.$router.push('/admin/Banques');
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

<style scoped>

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
    }

    #loginForm {
        width: 90%;
        margin: auto;
        margin-top: 2dvw;
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
</style>