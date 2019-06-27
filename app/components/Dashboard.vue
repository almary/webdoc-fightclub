<template>
    <div v-if="isLoggedin" class="container-fluid">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Editer le contenu</h5>
                    <button type="button" class="close" @click="closeModal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateContent(id)">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <h1>Dashboard</h1>
        <button class="btn btn-outline-danger" @click="logout">Deconnexion</button>
        <p v-if="message">{{ message }}</p>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Contenu</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="content in contents" scope="row">
                    <td>{{ content.text }}</td>
                    <td> <button @click="deleteContent(content._id)" class="btn btn-danger" >Supprimer</button><button class="btn btn-primary" @click="showModal(content.text, content._id)">Editer</button></td> 
                </tr>
            </tbody>
        </table>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </div>

</template>
<style scoped>
.container-fluid {
    width: 100vw;
    height: 100vh;
}
body {
    overflow: visible;
}
h1 {
    color: black;
}
.btn-primary {
    margin-left: 10px;
}
.btn-outline-danger {
    margin-bottom: 15px;
}
textarea {
    width: 100%;
}
</style>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            contents: [],
            message: '',
            isLoggedin: false,
            text: '',
            id: ''
        }
    },
    methods: {
        getContents: function() {
            axios.get('http://localhost:2324/api/content')
            .then(data => {
                this.contents = data.data.contents
            })
            .catch(error => {
                this.message = error
            })
        },
        deleteContent: function(id) {
            axios.delete('http://localhost:2324/api/content/' + id)
            .then(data => {
                this.message = `Le contenu a bien été supprimé`
                this.getContents()
            })
            .catch(error => {
                this.message = `Erreur lors de la suppression`
            })
        },
        updateContent: function(id) {
            axios.put('http://localhost:2324/api/content/' + id, {text: this.text})
            .then(data => {
                this.message = `Le contenu a bien été modifié`
                this.getContents()
                this.closeModal()
            })
            .catch(error => {
                this.message = `Erreur lors de la modification`
            })
        },
        logout: function() {
            this.$session.destroy()
            this.$router.push('/')
        },
        showModal: function(content, id) {
            this.text = content
            this.id = id
            document.querySelector('.modal').style.display = "block"
        },
        closeModal: function() {
            document.querySelector('.modal').style.display = "none"
        }
    },
    created(){
        document.querySelector('body').style.overflow = "visible"
    },
    destroyed(){
        document.querySelector('body').style.overflow = "hidden"
    },
    mounted: function() {
        if(!this.$session.exists())
        {
            this.$router.push('/');
        }
        this.isLoggedin = true
        this.getContents()

    }
}
</script>
