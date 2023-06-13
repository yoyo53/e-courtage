<template>
    <div>
        <!--<h1>This is a demand form filling pop up</h1>-->
        <button id="openButton" @click="()=>handleDisplay()">NOUVELLE DEMANDE</button>
        <div id="modal-form" ref="modalForm" v-if="displayForm">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <h2>New Demand</h2>
            <form id="form">
                <div class="mb-3">
                    <label for="formSubject" class="form-label">Sujet</label>
                    <input type="text" class="form-control" id="formSubject" v-model="newDemand.subject" required>
                </div>
                <div class="mb-3">
                    <label for="formAmount" class="form-label">Nature du projet ?</label>
                    <select class="form-select" aria-label="Default select example" v-model="newDemand.nature" required>
                        <option selected>Choisissez la nature de votre projet</option>
                        <option value="1">Achat</option>
                        <option value="2">Construction</option>
                        <option value="3">Travaux</option>
                        <option value="4">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formDuration" class="form-label">Type de bien ?</label>
                    <select class="form-select" aria-label="Default select example" v-model="newDemand.type" required>
                        <option selected>Choisissez le type du bien</option>
                        <option value="1">Maison</option>
                        <option value="2">Appartement</option>
                        <option value="3">Terrain</option>
                        <option value="4">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Age du bien ?</label>
                    <select class="form-select" aria-label="Default select example" v-model="newDemand.age" required>
                        <option selected>Choisissez l'âge du bien</option>
                        <option value="1">Ancien</option>
                        <option value="2">Neuf</option>
                        <option value="3">Vente sur plan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Usage du bien ?</label>
                    <select class="form-select" aria-label="Default select example" v-model="newDemand.usage" required>
                        <option selected>Choisissez l'usage du bien</option>
                        <option value="1">Residence principale</option>
                        <option value="2">Residence secondaire</option>
                        <option value="3">Utilisation professionnelle</option>
                        <option value="4">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Ou en êtes vous dans votre recherche ?</label>
                    <select class="form-select" aria-label="Default select example" v-model="newDemand.researchStatus" required>
                        <option selected>Renseigner où vous en êtes dans votre recherche</option>
                        <option value="1">En recherche</option>
                        <option value="2">Vous vous préparez à faire une offre</option>
                        <option value="3">Vous avez déjà fait une offre</option>
                        <option value="4">Vous avez déjà signé un compromis</option>
                        <option value="5">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Où se situe le bien ?</label>
                    <input type="text" class="form-control" id="formPurpose" v-model="newDemand.location" required>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Montant de l'acquisition ?</label>
                    <input type="text" class="form-control" id="formPurpose" v-model="newDemand.acquisitionAmount" required>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Frais de notaire (opt.) ?</label>
                    <input type="text" class="form-control" id="formPurpose" v-model="newDemand.notaireAmount">
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Acquisition en solo ?</label>
                    <input type="text" class="form-control" id="formPurpose" v-model="newDemand.solo" required>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Votre apport personnel ?</label>
                    <input type="text" class="form-control" id="formPurpose" v-model="newDemand.apport" required>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Commentaires sur le projet ?</label>
                    <input type="text" class="form-control" id="formPurpose" v-model="newDemand.comments">
                </div>

                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Vos Fichiers</label>
                    <ul>
                        <ClientFileListCheckableElement v-for="file in files" :key="file.name" :file="file"/>
                    </ul>
                    <client-new-file-form />
                </div>
                <button type="submit" class="btn btn-primary" @click="(ev)=>handleSubmit(ev)">Envoyer</button>
            </form>
        </div>
    </div>
</template>

<script>
import ClientFileListCheckableElement from './ClientFileListCheckableElement.vue';
import ClientNewFileForm from './ClientNewFileForm.vue';


export default {
    name: "ClientDemandForm",
    data() {
        return {
            newDemand: {
                subject: "",
                nature: "",
                type: "",
                age: "",
                usage: "",
                researchStatus: "",
                location: "",
                acquisitionAmount: "",
                notaireAmount: "",
                solo: false,
                apport: "",
                comments: "",
            },
            displayForm: false,
            selectedFiles: [],
            files: []
        };
    },
    methods: {
        handleSubmit(ev) {
            ev.preventDefault();
            this.$parent.userDemands.push({
                subject: this.subject,
                amount: this.amount,
                duration: this.duration,
                purpose: this.purpose,
                files: this.files
            });
            console.log(this.$parent.userDemands);
            //Send data to the server with XMLHttpRequest
            let formData = new FormData();
            formData.append("subject", this.subject);
            formData.append("amount", this.amount);
            formData.append("duration", this.duration);
            formData.append("purpose", this.purpose);
            formData.append("files", this.files);
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:3000/api/demand");
            xhr.send(formData);
            xhr.onload = () => {
                console.log(xhr.response);
            };
            //Reset the form
            this.subject = "";
            this.amount = "";
            this.duration = "";
            this.purpose = "";
            this.files = [];
            this.displayForm = false;
        },
        handleDisplay() {
            this.displayForm = !this.displayForm;
        },
        onFilesChange(ev) {
            this.files = ev.target.files;
        }
    },
    components: { ClientFileListCheckableElement, ClientNewFileForm },
    mounted() {
        this.files = [
            {
                name: "file1",
                id: "1"
            },
            {
                name: "file2",
                id: "2"
            },
            {
                name: "file3",
                id: "3"
            }
        ];
    }
}
</script>

<style>

    #openButton{
        height: 100%;
        width: 50%;
        background-color: #D9D9D9;
        text-align: center;
        font-size: 2vw;
        border-radius: 10px;
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