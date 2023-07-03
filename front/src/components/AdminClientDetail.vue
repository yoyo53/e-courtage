<template>
    <div>
      <div id="cover" v-if="displayDetail"></div>
      <button id="detailButton" @click="handleDisplay()">Détails</button>
      <div id="modal-form" ref="modalForm" v-if="displayDetail">
        <button id="closeButton" @click="handleDisplay()">X</button>
        <h2>Informations du compte client</h2>
        <div id="client" class="clientDetailDivision">
          <p><span>Nom : </span><span>{{ client.nom }}</span></p>
          <p><span>Prénom : </span><span>{{ client.prenom }}</span></p>
          <p><span>Email : </span><span>{{ client.email }}</span></p>
          <p><span>Genre : </span><span>{{ client.genre }}</span></p>
          <p><span>Date de naissance : </span><span>{{ client.date_birth }}</span></p>
          <p><span>Téléphone : </span><span>{{ client.tel }}</span></p>
          <p><span>Pays : </span><span>{{ client.pays }}</span></p>
          <p><span>Ville : </span><span>{{ client.ville }}</span></p>
          <p><span>Adresse : </span><span>{{ client.adresse }}</span></p>
          <p><span>Status immobilier : </span><span>{{ client.status_immo }}</span></p>
          <p><span>Situation professionnelle : </span><span>{{ client.situation_professionnelle }}</span></p>
          <p><span>Contrat : </span><span>{{ client.contrat }}</span></p>
          <p><span>Poste depuis : </span><span>{{ client.poste_depuis }}</span></p>
          <p><span>Banque principale : </span><span>{{ client.banque_principale }}</span></p>
          <p><span>Situation familiale : </span><span>{{ client.situation_familiale }}</span></p>
          <p><span>Nationalité : </span><span>{{ client.nationalite }}</span></p>
          <p><span>Revenu mensuel : </span><span>{{ client.revenu_mensuel }}</span></p>
          <p><span>Prime annuelle : </span><span>{{ client.prime_annuelle }}</span></p>
          <p><span>Loyer actuel : </span><span>{{ client.loyer_actuel }}</span></p>
          <p><span>Nombre d'enfants : </span><span>{{ client.nombre_enfant }}</span></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        displayDetail: false,
      };
    },
    props: {
      client: {
        type: Object,
        required: true,
      },
    },
    methods: {
      handleDisplay() {
        this.displayDetail = !this.displayDetail;
      },
    },
  };
  </script>
  
  <style scoped>
    #cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
    }
    .clientDetailDivision {
        margin-top: 20px 0;
        overflow-y: scroll;
        border: solid black 3px;
        border-radius: 10px;
        padding: 15px 0;
        flex: auto;
    }

    #closeButton {
        position: absolute;
        top: 0;
        right: 5px;
        background-color: #D9D9D9;
        border-radius: 10px;
        border: none;
        font-size: 2em;
    }

    #modal-form {
        color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #D9D9D9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: max(min(90dvw, 350px), 50dvw);
        max-height: 95%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    #demandDetailForm {
        margin-top: 50px;
        text-align: left;
        height: 80%;
    }

    #demandDetailFormFields {
        height: 100%;
        overflow-y: scroll;
    }

    #detailButton {
        color: blue;
        margin-top: 10px;
        border: none;
        background-color: white;
    }

    /* Custom styles for client account information */
    #clientAccountForm {
        margin-top: 50px;
        text-align: left;
        height: 80%;
    }

    #clientAccountFormFields {
        height: 100%;
        overflow-y: scroll;
    }

    #bankAccountDetailBottomButtons {
        margin-top: 20px;
    }

    #bankAccountDetailBottomButtons button {
        margin-right: 10px;
    }
</style>
