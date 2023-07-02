<template>
    <div id="bankListElement" :class="borderClass">
        <div id="buttons_options">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" @click="deleteBank(bank.id_banque)" style="cursor: pointer;">
            <path fill="red" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
        </span>
        <span v-if="!bank.account_status" style="padding-left:5px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" @click="validateBank(bank.id_banque)" style="cursor: pointer;" >
            <path fill="green" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </span>
        </div>

        <span id="bankTitle">{{bank.nom_banque}}</span>
        <div class="bankRow">
            <span> Siret : {{ bank.siret }} </span>
        </div>
        <div class="bankRow">
            <span> Pays : {{ bank.pays}}</span>
            <span> Ville : {{ bank.ville}}</span>
            <span> Addresse : {{ bank.adresse}}</span>
            <span> Email : {{ bank.email }}</span>
            <span> Telephone : {{ bank.tel }}</span>
        </div>
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
                await fetch(this.api_url + "admin/activateBanque/"+id_banque, {
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

<style scoped>
    #bankListElement {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        justify-content: center;
        margin: 10px auto;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
    }

    .bankRow {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        column-gap: 1em;
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

    .active-border {
        border: 3px solid green;
    }

    .inactive-border {
        border: 3px solid red;
    }

</style>