<template>
    <div id="demandListElement" :class="borderClass">
        <div id="buttons_options">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" @click="deleteDemande(demand.id_demande)"  style="cursor: pointer;">
            <path fill="red" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
        </span>
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
    border: solid 3px black;
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
  