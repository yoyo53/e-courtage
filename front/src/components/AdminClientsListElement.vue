<template>
    <div id="clientListElement" :class="borderClass">
        <div id="buttons_options" style="padding-top: 10px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" @click="deleteClient(client.id_client, client.account_status)" style="cursor: pointer;">
          <path fill="red" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </div>
        <span id="clientName">{{ client.nom }} {{ client.prenom }}</span>
        <div class="clientRow"><span> ID : {{ client.id_client }} </span></div>
        <admin-client-detail :client="client"/>
    </div>
</template>

<script>
import AdminClientDetail from './AdminClientDetail.vue';
export default {
  components: {
    'admin-client-detail': AdminClientDetail
  },
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

<style scoped>
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
