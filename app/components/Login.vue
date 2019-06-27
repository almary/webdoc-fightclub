<template>
    <div class="container">
        <h1>Connexion</h1>
        <p v-if="message">{{ message }}</p>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">Nom d'utilisateur: </label>
                <input class="form-control" v-model="username" type="text" name="username" id="username">
            </div>
            <div class="form-group">
                <label for="password">Mot de passe: </label>
                <input class="form-control" v-model="password" type="password" name="password" id="password">
            </div>
            <button class="btn btn-primary">Connexion</button>
        </form>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </div>
</template>
<style scoped>
form {
    margin-top: 50px;
}
h1 {
    color: black;
}
</style>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            username: '',
            password: '',
            message: ''
        }
    },
    methods: {
        login: function(e) {
            axios.post('http://localhost:2324/api/user/login', {username: this.username, password: this.password})
            .then(response => {
                if(response.data.isConnected) {
                    //Utilisateur connecté
                    this.message = 'Vous êtes connecté !'
                    this.$session.start()
                    this.$session.set('jwt', response.data.token)
                    axios.defaults.headers.common = {'Authorization': `Bearer ${response.data.token}`}
                    this.$router.push('/dashboard')
                }
                else {
                    //mot de passe ou username incorrect
                    this.message = response.data.error
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted: function() {
        if(this.$session.exists())
        {
            this.$router.push('/dashboard');
        }
    }
}
</script>
