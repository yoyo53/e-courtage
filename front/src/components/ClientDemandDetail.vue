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
                    <input type="text" class="form-control" id="formSubject" v-model="newDemand.sujet" placeholder="Trouvez un titre pour votre demande" required>
                </div>
                <div class="mb-3">
                    <label for="formNature" class="form-label">Nature du projet ?</label>
                    <select class="form-select" aria-label="Default select example" id="formNature" v-model="newDemand.nature" required>
                        <option value="">Choisissez la nature de votre projet</option>
                        <option value="Achat">Achat</option>
                        <option value="Construction">Construction</option>
                        <option value="Travaux">Travaux</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formType" class="form-label">Type de bien ?</label>
                    <select class="form-select" aria-label="Default select example" id="formType" v-model="newDemand.type" required>
                        <option value="">Choisissez le type du bien</option>
                        <option value="Maison">Maison</option>
                        <option value="Appartement">Appartement</option>
                        <option value="Terrain">Terrain</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formAge" class="form-label">Age du bien ?</label>
                    <select class="form-select" aria-label="Default select example" id="formAge" v-model="newDemand.age" required>
                        <option value="">Choisissez l'âge du bien</option>
                        <option value="Ancien">Ancien</option>
                        <option value="Neuf">Neuf</option>
                        <option value="Vente sur plan">Vente sur plan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formPurpose" class="form-label">Usage du bien ?</label>
                    <select class="form-select" aria-label="Default select example" id="formPurpose" v-model="newDemand.usage" required>
                        <option value="">Choisissez l'usage du bien</option>
                        <option value="Résidence principale">Résidence principale</option>
                        <option value="Résidence secondaire">Résidence secondaire</option>
                        <option value="Investissement locatif">Investissement locatif</option>
                        <option value="Usage professionnel">Usage professionnel</option>
                        <option value="Usage mixte">Usage mixte</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formResearchStatus" class="form-label">Ou en êtes vous dans votre recherche ?</label>
                    <select class="form-select" aria-label="Default select example" id="formResearchStatus" v-model="newDemand.status_recherche" required>
                        <option value="">Renseigner où vous en êtes dans votre recherche</option>
                        <option value="En recherche">En recherche</option>
                        <option value="Vous vous préparez à faire une offre">Vous vous préparez à faire une offre</option>
                        <option value="Vous avez déjà fait une offre">Vous avez déjà fait une offre</option>
                        <option value="Vous pensez bientôt signer compromi">Vous pensez bientôt signer compromis</option>
                        <option value="Vous avez déjà signé un compromis">Vous avez déjà signé un compromis</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formCountry" class="form-label">Dans quel pays se situe le bien ?</label>
                    <input type="text" class="form-control" id="formCountry" v-model="newDemand.pays" placeholder="Renseignez le pays où se situe le bien" required>
                </div>
                <div class="mb-3">
                    <label for="formCity" class="form-label">Dans quelle ville se situe le bien ?</label>
                    <input type="text" class="form-control" id="formCity" v-model="newDemand.ville" placeholder="Renseignez la ville où se situe le bien" required>
                </div>
                <div class="mb-3">
                    <label for="formAcquisitionAmount" class="form-label">Montant estimé de l'acquisition ?</label>
                    <input type="text" class="form-control" id="formAcquisitionAmount" v-model="newDemand.montant_bien" placeholder="Renseignez la valeur estimée du bien" required>
                </div>
                <div class="mb-3">
                    <label for="formTravauxAmount" class="form-label">Montant estimé des travaux ?</label>
                    <input type="text" class="form-control" id="formTravauxAmount" v-model="newDemand.montant_travaux" placeholder="Renseignez la valeur estimée des travaux" required>
                </div>
                <div class="mb-3">
                    <label for="formNotaireAmount" class="form-label">Frais de notaire ? (optionnel)</label>
                    <input type="text" class="form-control" id="formNotaireAmount" v-model="newDemand.frais_notaire" placeholder="Renseignez les frais de notaires, si il y a">
                </div>
                <div class="mb-3">
                    <label for="formAloneGroup" class="form-label">Comment empruntez-vous ?</label>
                    <select class="form-select" aria-label="Default select example" id="formAloneGroup" v-model="newDemand.accompagnement" required>
                        <option value="">Vous empruntez seul ? En groupe ? </option>
                        <option value="1">Seul</option>
                        <option value="2">Avec un co-emprunteur</option>
                        <option value="3">Autre</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="formApport" class="form-label">Votre apport personnel ?</label>
                    <input type="text" class="form-control" id="formApport" v-model="newDemand.apport_personnel" placeholder="Renseignez votre apport dans l'acquisition" required>
                </div>
                <div class="mb-3">
                    <label for="formComment" class="form-label">Commentaires sur le projet ? (optionnel)</label>
                    <input type="text" class="form-control" id="formComment" v-model="newDemand.commentaire" placeholder="Vous pouvez ajouter tout détail que vous pensez significant">
                </div>

                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Vos Fichiers</label>
                    <ul>
                        <ClientFileListCheckableElement v-for="file in userFiles" :key="file.id_document" :file="file"/>
                    </ul>
                    <client-new-file-form />
                </div>
                <button type="submit" class="btn btn-primary" @click="(ev)=>handleSubmit(ev)">Envoyer</button>
                <button type="button" class="btn btn-danger" @click="(ev)=>handleDelete(ev)">Supprimer</button>
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
            
            fetch(this.api_url + "demande_client/updateDemande/"+this.newDemand.id_demande, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(this.newDemand)
            })
            .then((response)=>{
                if(response.ok){
                    return response.json();
                }
                else{
                    throw new Error("Erreur lors de la mise à jour de la demande");
                }
            })
            .then(res => {
                console.log(res);
                this.displayDetail = false;
            })
            .catch(err => {
                console.log(err);
                alert(err.message)
            });
        },
        handleDelete() {
            fetch(this.api_url + "demande_client/deleteDemande/"+this.newDemand.id_demande, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((response)=>{
                if(response.ok){
                    return response.json();
                }
                else{
                    throw new Error("Erreur lors de la suppression de la demande");
                }
            })
            .then(res => {
                console.log(res);
                this.$parent.$parent.userDemands = this.$parent.$parent.userDemands.filter(demand => demand.id_demande != this.newDemand.id_demande);
                this.displayDetail = false;
            })
            .catch(err => {
                console.log(err);
                alert(err.message)
            });
        },
        handleDisplay() {
            this.displayDetail = !this.displayDetail;
        }
    },
    mounted() {
        fetch(this.api_url + "document/getAllDocuments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Something went wrong");
            }
        })
        .then((response) => {
            console.log(response);
            this.userFiles = response;
            this.newDemand = this.propDemand;
        })
        .catch((error) => {
            console.log(error);
            alert("Une erreur est survenue, veuillez réessayer plus tard");
        });

    }
}
</script>

<style>

    #openButton{
        height: 100%;
        width: 50%;
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