<template>
    <div>

        <HeaderComponent/>

        <div id="topDog">

            <form id="profileForm">

                <h2>Profil</h2>

                <div class="fields">
                    <div class="mb-3 profilePageField">
                        <label for="formName" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="formName"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formFirstName" class="form-label">Prénom</label>
                        <input type="text" class="form-control" id="formFirstName"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formEmail" class="form-label">Email</label>
                        <input type="text" class="form-control" id="formEmail"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formGenre" class="form-label">Genre</label>
                        <input type="text" class="form-control" id="formGenre"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formBirthDate" class="form-label">Date de naissance</label>
                        <input type="text" class="form-control" id="formBirthDate"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formTelephone" class="form-label">Telephone</label>
                        <input type="text" class="form-control" id="formTelephone"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formCountry" class="form-label">Pays</label>
                        <input type="text" class="form-control" id="formCountry"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formCity" class="form-label">Ville</label>
                        <input type="text" class="form-control" id="formCity"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formAddress" class="form-label">Adresse</label>
                        <input type="text" class="form-control" id="formAddress"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formHousingStatus" class="form-label">Statut immobilier</label>
                        <input type="text" class="form-control" id="formHousingStatus"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formWorkStatus" class="form-label">Situation professionnelle</label>
                        <input type="text" class="form-control" id="formWorkStatus"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formWorkContract" class="form-label">Contrat</label>
                        <input type="text" class="form-control" id="formWorkContract"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formWorkLength" class="form-label">En poste depuis</label>
                        <input type="text" class="form-control" id="formWorkLength"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formMainBank" class="form-label">Banque principale</label>
                        <input type="text" class="form-control" id="formMainBank"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formFamilyStatus" class="form-label">Situation familiale</label>
                        <input type="text" class="form-control" id="formFamilyStatus"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formNationality" class="form-label">Nationalité</label>
                        <input type="text" class="form-control" id="formNationality"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formMonthlyRevenue" class="form-label">Revenu mensuel</label>
                        <input type="text" class="form-control" id="formMonthlyRevenue"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formAnnualPrime" class="form-label">Prime annuelle (Optionnel)</label>
                        <input type="text" class="form-control" id="formAnnualPrime"/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formCurrentRent" class="form-label">Loyer Actuel</label>
                        <input type="text" class="form-control" id="formCurrentRent"/>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" id="saveButton">Mettre à jour</button>

            </form>

            <div id="filesList">
                <h2 style="margin-bottom: 30px;">Vos fichiers</h2>
                <ul class="list-group">
                    <li class="fileRow list-group-item" v-for="file in userFiles" :key="file.name">
                        <div class="fileRow-text">{{file.id_document}} - {{ file.nom_document }}</div>
                        <div class="fileRow-buttons">
                            <button class="btn btn-success fileRowButton" @click="()=>handleDownload(file.id_document, file.nom_document)">Télécharger</button>
                            <button class="btn btn-light fileRowButton" @click="()=>handleUpdate(file.id_document)">Remplacer</button>
                            <button class="btn btn-danger fileRowButton" @click="()=>handleDelete(file.id_document)">Supprimer</button>
                        </div>
                    </li>
                </ul>
                <client-new-file-form/>
            </div>

        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ClientNewFileForm from '../components/ClientNewFileForm.vue';

export default {
    components: { HeaderComponent,ClientNewFileForm },
    data() {
        return{
            userFiles: [],
        }
    },
    methods:{
        handleDownload(id,nom) {
            console.log(id);
            fetch("https://e-courtage-back.fly.dev/document/downloadDocument/" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((response) => {
                if (response.ok) {
                    return response.blob();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .then((response) => {
                console.log(response);
                const url = window.URL.createObjectURL(new Blob([response]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", nom);
                document.body.appendChild(link);
                link.click();
            })
        },
        handleUpdate(id) {
            console.log(id);
            //Open file explorer, when file is selected, send whole file with xmlHttpRequest
            const input = document.createElement("input");
            input.type = "file";
            input.ref = "file";
            input.click();
            input.onchange = () => {
                const formData = new FormData();
                console.log(input);
                formData.append("file", input.files[0]);
                let xhr = new XMLHttpRequest();
                xhr.open("PATCH", "https://e-courtage-back.fly.dev/document/updateDocument/" + id, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.send(formData);
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        console.log("File uploaded");
                    } else {
                        console.log("Error " + xhr.status + " occurred when trying to upload your file.");
                    }
                };
            }

        },
        handleDelete(id) {
            console.log(id);
            fetch("https://e-courtage-back.fly.dev/document/deleteDocument/" + id, {
                method: "DELETE",
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
                this.userFiles = this.userFiles.filter((file) => file.id_document !== id);
            })
        },
        fetchUserFiles() {
            fetch("https://e-courtage-back.fly.dev/document/getAllDocuments", {
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
            })
            .catch((error) => {
                console.log(error);
                alert("Une erreur est survenue, veuillez réessayer plus tard");
            });
        }
    },
    mounted() {
        this.fetchUserFiles();
    }
}
</script>

<style>

    ::-webkit-scrollbar {
        display: none;
    }

    #topDog {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #filesList {
        width: 45%;
        margin: auto;
        background-color: #d9d9d9;
        padding: 20px;
        border-radius: 10px;
        color: black;
        text-align: left;
    }
    
    #profileForm {
        width: 45%;
        height: 85vh;
        margin: auto;
        background-color: #d9d9d9;
        padding: 20px;
        border-radius: 10px;
        color: black;
        text-align: left;
    }

    .fields {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow-y: scroll;
        height: 70vh;
    }

    .profilePageField {
        width: 45%;
        margin: auto;
    }

    #saveButton{
        margin-top: 20px;
    }

</style>