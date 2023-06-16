<template>
    <div>
        <h1>This is a login page</h1>
        <button @click="()=>handleLoginB()">Login (Banque)</button>

        <router-link class="btn btn-primary" to="/register">Pas encore de compte ?</router-link>

        <form id="loginForm">
            <div class="mb-3">
                <label for="formEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" v-model="email">
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********" v-model="password">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary" @click="()=>handleLoginC()">Login</button>
            </div>

        </form>
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
            fetch( 'https://e-courtage-back.fly.dev/auth/loginClient', {
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
    #loginForm {
        width: 30%;
        margin: auto;
        margin-top: 2vw;
    }
</style>