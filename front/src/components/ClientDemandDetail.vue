<template>
    <div>
        <!--<h1>This is a demand form filling pop up</h1>-->
        <button id="detailButton" @click="()=>handleDisplay()">Show Detail</button>
        <div id="modal-form" ref="modalForm" v-if="displayDetail">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <h2>Détails de la demande {{ newDemand.subject }}</h2>
            <form id="form">
                <div class="mb-3">
                    <label for="formSubject" class="form-label">Sujet</label>
                    <input type="text" class="form-control" id="formSubject" v-model="newDemand.subject" placeholder="Trouvez un titre pour votre demande" required>
                </div>
                <div class="mb-3">
                    <label for="formNature" class="form-label">Nature du projet ?</label>
                    <select class="form-select" aria-label="Default select example" id="formNature" v-model="newDemand.nature" required>
                        <option value="">Choisissez la nature de votre projet</option>
                        <option value="1">Achat</option>
                        <option value="2">Construction</option>
                        <option value="3">Travaux</option>
                        <option value="4">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formType" class="form-label">Type de bien ?</label>
                    <select class="form-select" aria-label="Default select example" id="formType" v-model="newDemand.type" required>
                        <option value="">Choisissez le type du bien</option>
                        <option value="1">Maison</option>
                        <option value="2">Appartement</option>
                        <option value="3">Terrain</option>
                        <option value="4">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formAge" class="form-label">Age du bien ?</label>
                    <select class="form-select" aria-label="Default select example" id="formAge" v-model="newDemand.age" required>
                        <option value="">Choisissez l'âge du bien</option>
                        <option value="1">Ancien</option>
                        <option value="2">Neuf</option>
                        <option value="3">Vente sur plan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Usage du bien ?</label>
                    <select class="form-select" aria-label="Default select example" id="formPurpose" v-model="newDemand.usage" required>
                        <option value="">Choisissez l'usage du bien</option>
                        <option value="1">Residence principale</option>
                        <option value="2">Residence secondaire</option>
                        <option value="3">Utilisation professionnelle</option>
                        <option value="4">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formResearchStatus" class="form-label">Ou en êtes vous dans votre recherche ?</label>
                    <select class="form-select" aria-label="Default select example" id="formResearchStatus" v-model="newDemand.researchStatus" required>
                        <option value="">Renseigner où vous en êtes dans votre recherche</option>
                        <option value="1">En recherche</option>
                        <option value="2">Vous vous préparez à faire une offre</option>
                        <option value="3">Vous avez déjà fait une offre</option>
                        <option value="4">Vous avez déjà signé un compromis</option>
                        <option value="5">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formCountry" class="form-label">Dans quel pays se situe le bien ?</label>
                    <input type="text" class="form-control" id="formCountry" v-model="newDemand.country" placeholder="Renseignez le pays où se situe le bien" required>
                </div>
                <div class="mb-3">
                    <label for="formCity" class="form-label">Dans quelle ville se situe le bien ?</label>
                    <input type="text" class="form-control" id="formCity" v-model="newDemand.city" placeholder="Renseignez la ville où se situe le bien" required>
                </div>
                <div class="mb-3">
                    <label for="formAcquisitionAmount" class="form-label">Montant de l'acquisition ?</label>
                    <input type="text" class="form-control" id="formAcquisitionAmount" v-model="newDemand.acquisitionAmount" placeholder="Renseignez la valeur du bien" required>
                </div>
                <div class="mb-3">
                    <label for="formNotaireAmount" class="form-label">Frais de notaire (opt.) ?</label>
                    <input type="text" class="form-control" id="formNotaireAmount" v-model="newDemand.notaireAmount" placeholder="Renseignez les frais de notaires, si il y a">
                </div>
                <div class="mb-3">
                    <label for="formAloneGroup" class="form-label">Comment empruntez-vous ?</label>
                    <select class="form-select" aria-label="Default select example" id="formAloneGroup" v-model="newDemand.aloneGroup" required>
                        <option value="">Vous empruntez ...</option>
                        <option value="1">Seul</option>
                        <option value="2">Avec un co-emprunteur</option>
                        <option value="3">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formApport" class="form-label">Votre apport personnel ?</label>
                    <input type="text" class="form-control" id="formApport" v-model="newDemand.apport" placeholder="Renseignez votre apport dans l'acquisition" required>
                </div>
                <div class="mb-3">
                    <label for="formComment" class="form-label">Commentaires sur le projet ?</label>
                    <input type="text" class="form-control" id="formComment" v-model="newDemand.comments" placeholder="Vous pouvez ajouter tout détail que vous pensez significant">
                </div>

                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Vos Fichiers</label>
                    <ul>
                        <ClientFileListCheckableElement v-for="file in userFiles" :key="file.name" :file="file"/>
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
    name: "ClientDemandDetail",
    components: {
        ClientFileListCheckableElement,
        ClientNewFileForm
    },
    props: {
        propDemand: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            newDemand: {},
            displayDetail: false,
            userFiles: []
        };
    },
    methods: {
        handleSubmit(ev) {

            if(this.newDemand.subject=="" || this.newDemand.nature=="" || this.newDemand.type=="" || this.newDemand.age=="" || this.newDemand.usage=="" || this.newDemand.researchStatus=="" || this.newDemand.country=="" || this.newDemand.city=="" || this.newDemand.acquisitionAmount=="" || this.newDemand.aloneGroup=="" || this.newDemand.apport=="")
                return;

            ev.preventDefault();
            /*
            this.$parent.userDemands.push({
                subject: this.newDemand.subject,
                nature: this.newDemand.nature,
                type: this.newDemand.type,
                age: this.newDemand.age,
                usage: this.newDemand.usage,
                researchStatus: this.newDemand.researchStatus,
                country: this.newDemand.country,
                city: this.newDemand.city,
                acquisitionAmount: this.newDemand.acquisitionAmount,
                notaireAmount: this.newDemand.notaireAmount,
                aloneGroup: this.newDemand.aloneGroup,
                apport: this.newDemand.apport,
                comments: this.newDemand.comments,
                files: this.files
            });
            */
            console.log(this.$parent.userDemands);
            //Send data to the server with XMLHttpRequest
            let formData = new FormData();
            formData.append("subject", this.subject);
            formData.append("amount", this.amount);
            formData.append("duration", this.duration);
            formData.append("purpose", this.purpose);
            formData.append("files", this.files);
            let xhr = new XMLHttpRequest();
            xhr.open("PUT", "http://localhost:3000/api/demand");
            xhr.send(formData);
            xhr.onload = () => {
                console.log(xhr.response);
            };
        },
        handleDisplay() {
            this.displayDetail = !this.displayDetail;
        }
    },
    mounted() {
        this.userFiles = [
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
        this.newDemand = this.propDemand;
        //Make files for which the is in newDemand.files checked
        
        //TODO

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

    #detailButton{
        color: blue;
        margin-top: 10px;
        border: none;
    }

</style>