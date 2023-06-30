<template>
    <div id="loginMain">
        <h1>Connexion Admin</h1>

        <form id="loginForm">
            <div class="mb-3">
                <label for="formId" class="form-label">Identifiant</label>
                <input type="text" class="form-control" id="formId" placeholder="test" v-model="identifiant">
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="formPassword" placeholder="password" v-model="password">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary" @click="()=>handleLoginA()">Connexion</button>
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
                    this.$router.push('/admin/home');
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
        border: 3px solid #005500;
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
        border: 3px solid #005500;
        background-color: #b9b9b9;
    }
</style>