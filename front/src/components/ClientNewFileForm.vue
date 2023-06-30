<template>
    <div>
        <!--<h1>This is a demand form filling pop up</h1>-->
        <button type="none" id="openNFButton" @click="handleDisplay">NOUVEAU DOCUMENT</button>
        <div id="cover" v-if="displayForm"></div>
        <div id="modal-file-form" ref="modalForm" v-if="displayForm">
            <button id="closeButton" @click="handleDisplay">X</button>
            <h2>Nouveau document</h2>
            <form id="newFileForm" @submit="handleSubmit">
                <div id="newFileFormFields">
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Votre fichier</label>
                        <input class="form-control" type="file" id="formFile" @change="(ev)=>onFilesChange(ev)" required>
                    </div>
                    <div class="mb-3">
                        <label for="formNameTitle" class="form-label">Nom du fichier</label>
                        <input type="text" class="form-control" id="formNameTitle" v-model="name" placeholder="Nom du fichier" maxlength="30" required>
                    </div>
                    <div class="mb-3">
                        <label for="formDocType" class="form-label">Genre</label>
                        <select class="form-select" aria-label="Default select example" id="formDocType" v-model="type">
                            <option value="">Selectionnez le type du fichier</option>
                            <option value="Document d'identité">Document d'identité</option>
                            <option value="Fiche de paie">Fiche de paie</option>
                            <option value="Document médical">Document médical</option>
                            <option value="Justificatif de domicile">Justificatif de domicile</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Envoyer</button>
                <button type="none" class="btn btn-warning" @click="handleDisplay">Annuler</button>
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
            type: ''
        }
    },
    methods: {
        onFilesChange(ev) {
            this.file = ev.target.files[0];
        },
        handleSubmit(ev) {
            if(this.name == '' || this.file == null || this.type == ''){
                return;
            }
            ev.preventDefault();

            
            //We send the file with a XMLHttpRequest
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('nom_document', this.name);
            formData.append('type', this.type);
            
            let xhr = new XMLHttpRequest();
            xhr.open('POST', this.api_url + 'document/addDocument');
            xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            xhr.send(formData);
            xhr.onload = () => {
                if(xhr.status == 200){

                    let response = JSON.parse(xhr.response);

                    console.log("File sent");
                    console.log(response.id_document);
                    this.$parent.userFiles.push({
                        nom_document: this.name+"."+this.file.name.split('.').pop(),
                        id_document: response.id_document,
                        type: this.type
                    });
                    this.name = '';
                    this.file = null;
                    this.type = '';
                    this.displayForm = false;
                    this.$notify({
                        title: 'Succès',
                        text: 'Votre document a bien été envoyé',
                        type: 'success'
                    });
                }
                else{
                    console.log("Error while sending file");
                    this.$notify({
                        title: 'Erreur',
                        text: 'Une erreur est survenue lors de l\'envoi du document',
                        type: 'error'
                    });
                }
            }
        },
        handleDisplay() {
            console.log("display");
            this.displayForm = !this.displayForm;
        }
    }
}
</script>

<style scoped>

    #openNFButton{
        background-color: #D9D9D9;
        text-align: center;
        border-radius: 10px;
        margin-top: 1vh;
        margin-bottom: 1vh;
    }

    #closeButton{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #D9D9D9;
        border-radius: 10px;
        border: none;
        font-size: 2em;
    }

    #cover {
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    #modal-file-form{
        z-index: 101;
        color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #D9D9D9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: max(min(90vw, 350px), 50vw);
        max-height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    #newFileForm{
        margin-top: 20px;
        text-align: left;
        flex: auto;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
    }

    #newFileFormFields{
        flex: auto;
        overflow-y: scroll;
    }

</style>