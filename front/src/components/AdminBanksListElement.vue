<template>
    <div id="bankListElement" :class="borderClass">
        <div id="buttons_options">
            <span><p id="delete" class="but" @click="this.deleteBank(bank.id_banque)">x</p></span>
            <span v-if="!bank.account_status"><p id="valid" class="but" @click="this.validateBank(bank.id_banque)">+</p></span>
        </div>
        <span id="bankTitle">{{bank.nom_banque}}</span>
        <div class="bankRow"><span> Siret : {{ bank.siret }} </span></div>
        <div class="bankRow"><span> Pays : {{ bank.pays}}</span> <span> Ville : {{ bank.ville}}</span> <span> Address : {{ bank.adresse}}</span></div>
        <div class="bankRow"><span> Email : {{ bank.email }}</span><span> Telephone : {{ bank.tel }}</span></div>
    </div>
</template>

<script>
export default {
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
        async deleteBank(id_banque){
            if(confirm("Voulez-vous vraiment supprimer cette banque ?")){
            const token = localStorage.getItem('token');
            await fetch(this.api_url + "admin/deleteBanque/"+id_banque, {
                method: 'DELETE',
                headers: {
                    'authorization': token
                }
            });
            this.$emit('updateBank');
            }
        },
        async validateBank(id_banque){
            if(confirm("Voulez-vous vraiment valider cette banque ?")){
                const token = localStorage.getItem('token');
                await fetch(this.api_url + "admin/validateBanque/"+id_banque, {
                    method: 'PUT',
                    headers: {
                        'authorization': token
                    }
                });
                this.$emit('updateBank');
            }
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

    #buttons_options{
        display: flex;
        margin-left: 90%;
        color: black;
    }
    .but{
        padding-left:2mm;
    }

    .active-border {
        border: 3px solid green;
    }

    .inactive-border {
        border: 3px solid red;
    }

</style>