<template>
    <div id="demandListElement" :class="borderClass">
      <div id="buttons_options">
        <span><p id="delete" class="but" @click="deleteDemande(demand.id_demande)">x</p></span>
      </div>
      <span id="demandName"> Sujet : {{ demand.sujet }}</span>
      <div class="demandRow"><span> Nature : {{ demand.nature }} </span></div> 
      <div class="demandRow"><span> ID : {{ demand.id_demande }} </span></div>
      <bank-demand-detail :demand="demand"/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'demandesListElement',
    props: {
      demand: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleDisplayDetail() {
        alert("WIP");
      },
      async deleteDemande(id_demande) {
        if (confirm("Voulez-vous vraiment supprimer cette demande ?")) {
            const token = localStorage.getItem('token');
            await fetch(this.api_url + "admin/deleteDemande/" + id_demande, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }});
            this.$emit('updateDemande');
          }
      }
    },
  }
  </script>
  
  <style>
  #demandListElement {
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
  
  .demandRow {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
  
  .demandRow span {
    color: black;
  }
  
  #demandName {
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
  </style>
  