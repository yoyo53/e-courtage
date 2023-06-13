<template>
    <div>
        <!--<h1>This is a demand form filling pop up</h1>-->
        <button type="none" id="openNFButton" @click="()=>handleDisplay()">NOUVEAU DOCUMENT</button>
        <div id="modal-form" ref="modalForm" v-if="displayForm">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <h2>Nouveau document</h2>
            <form>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Votre fichier</label>
                    <input class="form-control" type="file" id="formFile" @change="(ev)=>onFilesChange(ev)" required>
                </div>
                <div class="mb-3">
                    <label for="formNameTitle" class="form-label">Nom du fichier</label>
                    <input type="text" class="form-control" id="formNameTitle" v-model="name" required>
                </div>
                <button type="submit" class="btn btn-success" @click="(ev)=>handleSubmit(ev)">Envoyer</button>
                <button type="none" class="btn btn-warning" @click="()=>handleDisplay()">Annuler</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClientNewFileForm',
    data() {
        return {
            name: '',
            file: null,
            displayForm: false,
        }
    },
    methods: {
        onFilesChange(ev) {
            this.file = ev.target.files[0];
        },
        handleSubmit(ev) {
            if(this.name == '' || this.file == null){
                return;
            }
            ev.preventDefault();

            /*
            fetch( '/api/userfilesaddress', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'authorization': sessionStorage.getItem("token")
                },
                body: JSON.stringify({
                    "name": this.name,
                    "file": this.file,
                })
            })
            .then( response => response.json() )
            .then( json => {
                console.log(json);
                this.$parent.files.push({name: this.name, file: this.file, id: this.$parent.files.length + 1});
                this.displayForm = false;
            })
            */

            this.$parent.userFiles.push({name: this.name, file: this.file, id: this.$parent.userFiles.length + 1});
            this.displayForm = false;
        },
        handleDisplay() {
            console.log("display");
            this.displayForm = !this.displayForm;
        }
    }
}
</script>

<style>

    #openNFButton{
        height: 50%;
        width: 25%;
        background-color: #D9D9D9;
        text-align: center;
        font-size: 1vw;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #closeButton{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #D9D9D9;
        border-radius: 10px;
        border: none;
        font-size: 2vw;
    }

    #modal-form{
        z-index: 100;
        color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #D9D9D9;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: 50vw;
        height: 70vh;
        border-radius: 10px;
        overflow-y: scroll;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    #form{
        margin-top: 50px;
        text-align: left;
    }

</style>