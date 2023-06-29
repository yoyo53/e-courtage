<template>
    <div>
        <!-- <h1>This demand detail pop up</h1> -->
        <button id="detailButton" @click="()=>handleDisplay()">Détails</button>
        <div id="modal-form" ref="modalForm" v-if="displayDetail">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <h2>{{demand.sujet}}</h2>
            <div id="bankDemandDetailFields">
            <!--[{"id_demande":41,"sujet":"Mon chateau dans le Berry","nature":"Achat","type":"Maison","age":"Ancien","usage":"Résidence principale","status_recherche":"En recherche","pays":"France","ville":"Le Kremlin-Bicêtre","montant_bien":300000,"montant_travaux":3000,"frais_notaire":null,"apport_personnel":200000,"commentaire":"Gotta go fast !","accompagnement":"1","id_client":2,"client":{"nom":"Craipeau","prenom":"Antoine","email":"antoine.craipeau@efrei.net","genre":"1","date_birth":"2002-09-29T00:00:00.000Z","tel":"+33652084199","pays":"France","ville":"Le Kremlin-Bicêtre","adresse":"20 Avenue du Repos","status_immo":"Locataire","situation_professionnelle":"Etudiant","contrat":"CDI","poste_depuis":"2018-06-28T00:00:00.000Z","banque_principale":"Boursorama","situation_familiale":"Célibataire","nationalite":"Français","revenu_mensuel":0,"prime_annuelle":0,"loyer_actuel":0,"nombre_enfant":0}},{"id_demande":42,"sujet":"Mon chateau dans le Berry 2","nature":"Achat","type":"Maison","age":"Ancien","usage":"Résidence principale","status_recherche":"En recherche","pays":"France","ville":"Chateauroux","montant_bien":300000,"montant_travaux":3000,"frais_notaire":null,"apport_personnel":200000,"commentaire":"Gotta go fast !","accompagnement":"1","id_client":2,"client":{"nom":"Craipeau","prenom":"Antoine","email":"antoine.craipeau@efrei.net","genre":"1","date_birth":"2002-09-29T00:00:00.000Z","tel":"+33652084199","pays":"France","ville":"Le Kremlin-Bicêtre","adresse":"20 Avenue du Repos","status_immo":"Locataire","situation_professionnelle":"Etudiant","contrat":"CDI","poste_depuis":"2018-06-28T00:00:00.000Z","banque_principale":"Boursorama","situation_familiale":"Célibataire","nationalite":"Français","revenu_mensuel":0,"prime_annuelle":0,"loyer_actuel":0,"nombre_enfant":0}},{"id_demande":29,"sujet":"Mon chateau dans le Berry 5","nature":"Achat","type":"Maison","age":"Ancien","usage":"Résidence principale","status_recherche":"En recherche","pays":"France","ville":"Chateauroux","montant_bien":300000,"montant_travaux":3000,"frais_notaire":null,"apport_personnel":30000,"commentaire":"Gotta go fast !","accompagnement":"1","id_client":2,"client":{"nom":"Craipeau","prenom":"Antoine","email":"antoine.craipeau@efrei.net","genre":"1","date_birth":"2002-09-29T00:00:00.000Z","tel":"+33652084199","pays":"France","ville":"Le Kremlin-Bicêtre","adresse":"20 Avenue du Repos","status_immo":"Locataire","situation_professionnelle":"Etudiant","contrat":"CDI","poste_depuis":"2018-06-28T00:00:00.000Z","banque_principale":"Boursorama","situation_familiale":"Célibataire","nationalite":"Français","revenu_mensuel":0,"prime_annuelle":0,"loyer_actuel":0,"nombre_enfant":0}}]-->
                <div id="clientInfo" class="bankDemandDetailDivision">
                    <p><span>Nom : </span><span>{{ demand.client.nom }}</span></p>
                    <p><span>Prénom : </span><span>{{ demand.client.prenom }}</span></p>
                    <p><span>Email : </span><span>{{ demand.client.email }}</span></p>
                    <p><span>Téléphone : </span><span>{{ demand.client.tel }}</span></p>
                    <p><span>Pays : </span><span>{{ demand.client.pays }}</span></p>
                    <p><span>Ville : </span><span>{{ demand.client.ville }}</span></p>
                    <p><span>Adresse : </span><span>{{ demand.client.adresse }}</span></p>
                    <p><span>Status immobilier : </span><span>{{ demand.client.status_immo }}</span></p>
                    <p><span>Situation professionnelle : </span><span>{{ demand.client.situation_professionnelle }}</span></p>
                    <p><span>Contrat : </span><span>{{ demand.client.contrat }}</span></p>
                    <p><span>Poste depuis : </span><span>{{ demand.client.poste_depuis }}</span></p>
                    <p><span>Banque principale : </span><span>{{ demand.client.banque_principale }}</span></p>
                    <p><span>Situation familiale : </span><span>{{ demand.client.situation_familiale }}</span></p>
                    <p><span>Nationalité : </span><span>{{ demand.client.nationalite }}</span></p>
                    <p><span>Revenu mensuel : </span><span>{{ demand.client.revenu_mensuel }}</span></p>
                    <p><span>Prime annuelle : </span><span>{{ demand.client.prime_annuelle }}</span></p>
                    <p><span>Loyer actuel : </span><span>{{ demand.client.loyer_actuel }}</span></p>
                    <p><span>Nombre d'enfants : </span><span>{{ demand.client.nombre_enfant }}</span></p>
                </div>
                <div id="demandInfo" class="bankDemandDetailDivision">
                    <p><span>Sujet : </span><span>{{ demand.sujet }}</span></p>
                    <p><span>Nature : </span><span>{{ demand.nature }}</span></p>
                    <p><span>Type : </span><span>{{ demand.type }}</span></p>
                    <p><span>Age : </span><span>{{ demand.age }}</span></p>
                    <p><span>Usage : </span><span>{{ demand.usage }}</span></p>
                    <p><span>Status recherche : </span><span>{{ demand.status_recherche }}</span></p>
                    <p><span>Pays : </span><span>{{ demand.pays }}</span></p>
                    <p><span>Ville : </span><span>{{ demand.ville }}</span></p>
                    <p><span>Montant bien : </span><span>{{ demand.montant_bien }}</span></p>
                    <p><span>Montant travaux : </span><span>{{ demand.montant_travaux }}</span></p>
                    <p><span>Frais notaire : </span><span>{{ demand.frais_notaire }}</span></p>
                    <p><span>Apport personnel : </span><span>{{ demand.apport_personnel }}</span></p>
                    <p><span>Commentaire : </span><span>{{ demand.commentaire }}</span></p>
                    <p><span>Accompagnement : </span><span>{{ demand.accompagnement==1?"Seul":"En groupe" }}</span></p>
                </div>
                <div id="demandFiles" class="bankDemandDetailDivision">
                    <p>Documents : </p>
                    <li class="fileRow list-group-item" v-for="file in demand.files" :key="file.name">
                        <div class="fileRowText"><span id="fileRowTextName">{{ file.nom_document }}</span><span>{{ file.type }}</span></div>
                    </li>
                    <button class="btn btn-secondary" @click="()=>handleDownload(demand.id_demande,demand.client.nom+' '+demand.client.prenom+' : Fichiers '+demand.sujet)">Télécharger tous les documents</button>
                </div>
            </div>
            <div id="bankDemandDetailBottomButtons">
                <button class="btn btn-primary" @click="()=>handleDisplay()">Épingler</button>
                <button class="btn btn-success" @click="()=>handleDisplay()">Accepter</button>
                <button class="btn btn-danger" @click="()=>handleDisplay()">Refuser</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            displayDetail: false,
        }
    },
    props: {
        demand: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleDisplay() {
            this.displayDetail = !this.displayDetail;
        },
        handleDownload(id,nom) {
            console.log(id);
            fetch(this.api_url + "document/downloadAllDocumentsBanque/" + id, {
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
                link.setAttribute("download", nom +".zip");
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                console.log(error);
            });
        },
        handleFavorite(){
            this.$parent.favoriteElement();
        },
        handleValid(){
            this.$parent.validElement();
        },
        handleDelete(){
            this.$parent.deleteElement();
        }
    }
}

</script>
<style>
    #closeButton{
        position: absolute;
        top: 0;
        right: 5px;
        background-color: #D9D9D9;
        border-radius: 10px;
        border: none;
        font-size: 2vw;
    }

    #modal-form{
        color: black;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #D9D9D9;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: 80vw;
        height: 80vh;
        border-radius: 10px;
    }

    #bankDemandDetailFields{
        height: 90%;
        overflow-y: scroll;
    }

    .bankDemandDetailDivision{
        width: 100%;
        border-radius: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        margin-top: 2vh;
        padding: 1vh;
        text-align: left;
    }

    .bankDemandDetailDivision p{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .fileRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;
        width: 100%;
    }

    .fileRowText {
        width: 40%;
        text-align: left;
        display: flex;
        flex-direction: column;
    }

    #fileRowTextName {
        font-weight: 550;
    }

    #bankDemandDetailBottomButtons{
        margin-top: 2vh;
    }

</style>