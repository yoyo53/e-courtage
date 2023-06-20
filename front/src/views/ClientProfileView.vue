<template>
    <div>

        <HeaderComponent/>

        <div id="topDog">

            <form id="profileForm">

                <h2>Profil</h2>

                <div class="fields">
                    <div class="mb-3 profilePageField">
                        <label for="formName" class="form-label">Nom</label>
                        <input type="text" class="form-control" id="formName" v-model="userInfo.nom" placeholder="Votre nom" required disabled/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formFirstName" class="form-label">Prénom</label>
                        <input type="text" class="form-control" id="formFirstName" v-model="userInfo.prenom" placeholder="Votre prénom" required disabled/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="formEmail" v-model="userInfo.email" placeholder="Votre adresse email" required disabled/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formGenre" class="form-label">Genre</label>
                        <select class="form-select" aria-label="Default select example" id="formGenre" v-model="userInfo.genre" required>
                            <option value="">Selectionnez votre genre</option>
                            <option value="1">Homme</option>
                            <option value="2">Femme</option>
                            <option value="3">Autre</option>
                        </select>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formBirthDate" class="form-label">Date de naissance</label>
                        <input type="date" class="form-control" id="formBirthDate" v-model="userInfo.date_birth" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formTelephone" class="form-label">Telephone</label>
                        <input type="text" class="form-control" id="formTelephone" v-model="userInfo.tel" placeholder="Votre numéro" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formCountry" class="form-label">Pays</label>
                        <input type="text" class="form-control" id="formCountry" v-model="userInfo.pays" placeholder="Votre ville de résidence" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formCity" class="form-label">Ville</label>
                        <input type="text" class="form-control" id="formCity" v-model="userInfo.ville" placeholder="Votre ville de résidence" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formAddress" class="form-label">Adresse</label>
                        <input type="text" class="form-control" id="formAddress" v-model="userInfo.adresse" placeholder="Votre adresse" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formHousingStatus" class="form-label">Statut immobilier</label>
                        <select class="form-select" aria-label="Default select example" id="formHousingStatus" v-model="userInfo.status_immo" required>
                            <option value="">Aujourd'hui vous êtes ...</option>
                            <option value="Locataire">Locataire</option>
                            <option value="Propriétaire">Propriétaire</option>
                            <option value="Bénéficiare d'un logement de fonction">Bénéficiare d'un logement de fonction</option>
                            <option value="Hébergé à titre gratuit">Hébergé à titre gratuit</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formCurrentRent" class="form-label">Loyer Actuel (Si applicable)</label>
                        <input type="number" class="form-control" id="formCurrentRent" v-model="userInfo.loyer_actuel" placeholder="Votre loyer actuel" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formFamilyStatus" class="form-label">Situation familiale</label>
                        <select class="form-select" aria-label="Default select example" id="formFamilyStatus" v-model="userInfo.situation_familiale" required>
                            <option value=''>Aujourd'hui vous êtes ...</option>
                            <option value="Célibataire">Célibataire</option>
                            <option value="Marié(e) contrat de mariage">Marié(e) contrat de mariage</option>
                            <option value="Marié(e) communauté de biens">Marié(e) communauté de biens</option>
                            <option value="Concubin(e) / Vie maritale">Concubin(e) / Vie maritale</option>
                            <option value="PACS">PACS</option>
                            <option value="Divorcé(e)">Divorcé(e)</option>
                            <option value="Séparé(e)">Séparé(e)</option>
                            <option value="Veuf(ve)">Veuf(ve)</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formChildCount" class="form-label">Nombre d'enfants</label>
                        <input type="number" class="form-control" id="formChildCount" min="0" v-model="userInfo.nombre_enfant" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formNationality" class="form-label">Nationalité</label>
                        <input type="text" class="form-control" id="formNationality" v-model="userInfo.nationalite" placeholder="Votre nationalité" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formWorkStatus" class="form-label">Situation professionnelle</label>
                        <select class="form-select" aria-label="Default select example" id="formWorkStatus" v-model="userInfo.situation_professionnelle" required>
                            <option value="">Aujourd'hui vous êtes ...</option>
                            <option value="Employé">Employé</option>
                            <option value="Ouvrier">Ouvrier</option>
                            <option value="Cadre">Cadre</option>
                            <option value="Fonctionnaire">Fonctionnaire</option>
                            <option value="Enseignant">Enseignant</option>
                            <option value="Artisan commerçant">Artisan commerçant</option>
                            <option value="Chef d'entreprise">Chef d'entreprise</option>
                            <option value="Profession libérale">Profession libérale</option>
                            <option value="Profession libérale médicale">Profession libérale médicale</option>
                            <option value="Travailleur indépendant">Travailleur indépendant</option>
                            <option value="Congé parental">Congé parental</option>
                            <option value="Intermittent du spectacle">Intermittent du spectacle</option>
                            <option value="Agriculteur">Agriculteur</option>
                            <option value="Retraité">Retraité</option>
                            <option value="Etudiant">Etudiant</option>
                            <option value="Sans emploi">Sans emploi</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formWorkContract" class="form-label">Contrat</label>
                        <select class="form-select" aria-label="Default select example" id="formWorkContract" v-model="userInfo.contrat" required>
                            <option value="">Aujourd'hui vous travaillez en ...</option>
                            <option value="CDI">CDI</option>
                            <option value="CDI Probatoire">CDI Probatoire</option>
                            <option value="CDD">CDD</option>
                            <option value="Intérim">Intérim</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formWorkLength" class="form-label">En poste depuis</label>
                        <input type="date" class="form-control" id="formWorkLength" :min="this.userInfo.date_birth" max="2023-06-19" v-model="userInfo.poste_depuis" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formMainBank" class="form-label">Banque principale</label>
                        <input type="text" class="form-control" id="formMainBank" v-model="userInfo.banque_principale" placeholder="Votre banque principale" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formMonthlyRevenue" class="form-label">Revenu mensuel (€)</label>
                        <input type="number" class="form-control" id="formMonthlyRevenue" v-model="userInfo.revenu_mensuel" required/>
                    </div>
                    <div class="mb-3 profilePageField">
                        <label for="formAnnualPrime" class="form-label">Prime annuelle (€) (Optionnel)</label>
                        <input type="number" class="form-control" id="formAnnualPrime" v-model="userInfo.prime_annuelle"/>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" id="saveButton" @click="(ev)=>handlePatchUserInfo(ev)">Mettre à jour</button>

            </form>

            <div id="filesList">
                <h2 style="margin-bottom: 30px;">Vos fichiers</h2>
                <ul id="trueFileList" class="list-group">
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
            userInfo: {
                nom: "",
                prenom: "",
                email: "",
                genre: "",
                date_birth: "",
                tel: "",
                pays: "",
                ville: "",
                adresse: "",
                status_immo: "",
                situation_professionnelle: "",
                contrat: "",
                poste_depuis: "",
                banque_principale: "",
                situation_familiale: "",
                nationalite: "",
                revenu_mensuel: 0,
                prime_annuelle: 0,
                loyer_actuel: 0,
                nombre_enfant: 0,
            }
        }
    },
    methods:{
        handlePatchUserInfo(ev) {
            if(!ev.target.checkValidity()){
                return;
            }
            ev.preventDefault();
            fetch(this.api_url + "client/patchClient", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(this.userInfo)
            })
        },
        handleDownload(id,nom) {
            console.log(id);
            fetch(this.api_url + "document/downloadDocument/" + id, {
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
                xhr.open("PATCH", this.api_url + "document/updateDocument/" + id, true);
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
            fetch(this.api_url + "document/deleteDocument/" + id, {
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
            })
            .catch((error) => {
                console.log(error);
                alert("Une erreur est survenue, veuillez réessayer plus tard");
            });
        },
        fetchUserData() {
            
            fetch(this.api_url + 'client/getClient',{
                headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("token")
                }})
            .then((response)=>{return(response.json())})
            .then((parsed) => {
                console.log(parsed);
                this.userInfo = parsed;
                //For each key in userInfo, set the value to "" or 0 if the field is in [poste_depuis, nombre_enfant, revenu_mensuel, prime_annuelle, loyer_actuel]
                
                for (const key in this.userInfo) {
                    
                    if(key == "date_birth" || key == "poste_depuis") {
                        this.userInfo[key] = this.userInfo[key].split("T")[0];
                    }
                    else if (this.userInfo[key] == null) {
                        if (key == "nombre_enfant" || key == "revenu_mensuel" || key == "prime_annuelle" || key == "loyer_actuel") {
                        this.userInfo[key] = 0;
                        } else {
                            this.userInfo[key] = "";
                        }
                    }
                    
                }
            });
            
        }
    },
    mounted() {
        this.fetchUserFiles();
        this.fetchUserData();
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
        align-items: flex-start;
        height: 85vh;
        overflow-y: scroll;
        flex-wrap: wrap;
        scrollbar-width: none;
    }

    #filesList {
        width: 45%;
        min-width: 300px;
        margin: auto;
        background-color: #d9d9d9;
        padding: 20px;
        border-radius: 10px;
        color: black;
        text-align: left;
        height: 100%;
    }

    #trueFileList {
        display: flex;
        flex-direction: column;
        height: 80%;
        overflow-y: scroll;
        scrollbar-width: none;
    }
    
    #profileForm {
        width: 45%;
        min-width: 300px;
        height: 100%;
        margin: auto;
        background-color: #d9d9d9;
        padding: 20px;
        border-radius: 10px;
        color: black;
        text-align: left;
        height: 100%;
        scrollbar-width: none;
    }

    .fields {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 80%;
        overflow-y: scroll;
        scrollbar-width: none;
    }

    .profilePageField {
        width: 45%;
        margin: auto;
    }

    #saveButton{
        margin-top: 20px;
    }

</style>