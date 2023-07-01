<template>
    <div id="clientListElement" :class="borderClass">
        <div id="buttons_options">
            <span><p id="delete" class="but" @click="deleteClient(client.id_client, client.account_status)">x</p></span>
        </div>
        <span id="clientName">{{ client.nom }} {{ client.prenom }}</span>
        <div class="clientRow"><span> ID : {{ client.id_client }} </span></div>
        <bank-demand-detail :demand="demand"/>
    </div>
</template>

<script>
export default {
  name: 'clientsListElement',
  props: {
    client: {
      type: Object,
      required: true
    }
  },
  computed: {
    borderClass() {
      if (this.client.account_status) {
        return 'active-border';
      } else if (!this.client.account_status) {
        return 'inactive-border';
      } else {
        return '';
      }
    }
  },
  methods: {
    handleDisplayDetail() {
      alert("WIP");
    },
    async deleteClient(id_client, account_status) {
      if (confirm("Voulez-vous vraiment supprimer/bannir ce client ?")) {
        if(account_status){
          const token = localStorage.getItem('token');
          await fetch(this.api_url + "admin/updateClient/" + id_client, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            },
            body: JSON.stringify({
              account_status: false
            })
          });
        } else {
        const token = localStorage.getItem('token');
        await fetch(this.api_url + "admin/deleteClient/" + id_client, {
          method: 'DELETE',
          headers: {
            'Authorization': token
          }});
        }
        this.$emit('updateClient');
      }
    }
  },
}
</script>

<style>
#clientListElement {
  font-size: 1.5dvw;
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

.clientRow {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.clientRow span {
  color: black;
}

#clientName {
  color: black;
  font-size: 1.5em;
}

#buttons_options {
  display: flex;
  margin-left: 90%;
  color: black;
}

.but {
  padding-left: 2mm;
}

.active-border {
  border: 3px solid green;
}

.inactive-border {
  border: 3px solid red;
}
</style>
