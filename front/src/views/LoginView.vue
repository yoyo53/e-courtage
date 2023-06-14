<template>
    <div>
        <h1>This is a login page</h1>
        <button @click="()=>handleLoginB()">Login (Banque)</button>

        <router-link class="btn btn-primary" to="/register">Déjà client ?</router-link>

        <form id="loginForm">
            <div class="mb-3">
                <label for="formEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="formEmail" placeholder="name@example.com">
            </div>

            <div class="mb-3">
                <label for="formPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="formPassword" placeholder="********">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary" @click="handleLoginC">Login</button>
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
            fetch( 'http://localhost:3000/auth/loginClient', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then((res) => {return(res.json())})
            .then((json) => {sessionStorage.setItem("token",json.token)})
            .then(()=>{this.$router.push('/client')})
            .catch((err) => {console.log(err)});
                
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