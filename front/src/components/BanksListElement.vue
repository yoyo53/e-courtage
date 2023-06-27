<template>
    <div id="bankListElement" :class="borderClass">
        <div id="buttons_options">
            <span><p id="delete" class="but" onclick="deleteElement()">x</p></span>
            <span><p id="valid" class="but" @click="()=>validElement()">+</p></span>
        </div>
        <span id="bankTitle">{{bank.nom_banque}}</span>
        <div class="bankRow"><span> Siret : {{ bank.siret }} </span></div>
        <div class="bankRow"><span> Pays : {{ bank.pays}}</span> <span> Ville : {{ bank.ville}}</span> <span> Address : {{ bank.adresse}}</span></div>
        <div class="bankRow"><span> Email : {{ bank.email }}</span><span> Telephone : {{ bank.tel }}</span></div>
        <bank-detail :propbank="bank"/>
    </div>
</template>

<script>
import bankDetail from './BankDetail.vue'
export default {
  components: { bankDetail },
  name: 'banksListElement',
  props: {
    bank: {
      type: Object,
      required: true
    }
  },
  computed: {
    borderClass() {
      if (this.bank.account_status) {
        return 'active-border';
      } else if (!this.bank.account_status) {
        return 'inactive-border';
      } else {
        return '';
      }
    }
  },
    methods: {
        handleDisplayDetail() {
            alert("WIP")
        },
        deleteBank(){
        //Todo
        },
        validateBank(){
            //Todo
        }
    },
}
</script>

<style>
    #bankListElement {
        font-size: 1.5vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2%;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
    }

    .bankRow {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        
    }

    .bankRow span {
        color: black;
    }

    #bankTitle {
        color: black;
        font-size: 1.5em;
    }

    #detailButton{
        color: blue;
        margin-top: 10px;
        border: none;
    }
    #buttons_options{
        display: flex;
        margin-left: 90%;
        color: black;
    }
    .but{
        padding-left:2mm;
    }

    .active-border {
        border: 2px solid green;
    }

    .inactive-border {
        border: 2px solid red;
    }

</style>