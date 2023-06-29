<template>
    <div id="demandListElement">
        <div id="buttons_options">
            <span>
                <p id="valid" class="but" @click="()=>validElement()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>  
                </p>
            </span>
            <span>
                <p id="delete" class="but" onclick="deleteElement()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </p>
            </span>
            <span>
                <p id="favorite" class="but" @click="()=>favoriteElement()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" v-if="demand.statut==0">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16" v-else>
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </p>
            </span>
        </div>
        <h2>{{demand.sujet}}</h2>
        <div class="demandRow"><span> Nom : {{ demand.client.nom }} {{ demand.client.prenom }}</span> <span> Salaire : {{ demand.client.revenu_mensuel }} €</span></div>
        <div class="demandRow"><span> Valeur : {{ demand.montant_bien}} €</span></div>
        <div class="demandRow"><span>{{ demand.commentaire }}</span></div>
        <bank-demand-detail :demand="demand"/>
    </div>
</template>

<script>
import BankDemandDetail from './BankDemandDetail.vue'
export default {
  components: { BankDemandDetail },
    name: 'ClientDemandsListElement',
    props: {
        demand: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleDisplayDetail() {
            alert("WIP")
        },
        deleteElement(){
        //
        },
        validElement(){
            if (this.$parent.userDemands.find(obj=> {
                return obj.id == this.demand.id
            }).added==false) {
        
                this.$parent.userDemands.find(obj=> {
                return obj.id == this.demand.id
                }).added = true;
            }
            else{
                this.$parent.userDemands.find(obj=> {
                return obj.id == this.demand.id
            }).added = false;
            }
            console.log(this.$parent.userDemands);
        },
        favoriteElement(){
            if (this.$parent.userDemands.find(obj=> {return obj.id_demande == this.demand.id_demande}).statut == 0) {
                this.$parent.userDemands.find(obj=> {return obj.id_demande == this.demand.id_demande}).statut = 1;
            }
            else{
                this.$parent.userDemands.find(obj=> {return obj.id_demande == this.demand.id_demande}).statut = 0;
            }
            console.log(this.$parent.userDemands);  

            fetch(this.api_url + "demande_banque/updateDemande/" + this.demand.id_demande, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(this.demand)
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
                //this.userEditSuccess = true;
                this.$notify({
                    title: 'Success',
                    text: 'Vos informations ont été mises à jour',
                    type: 'success'
                });
            })
            .catch((error) => {
                console.log(error);
                this.$notify({
                    title: 'Error',
                    text: 'Il y a eu une erreur lors de la mise à jour de vos informations',
                    type: 'error'
                });
            });
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
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
    }

    .demandRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    #detailButton{
        color: blue;
        margin-top: 10px;
        border: none;
    }
    #buttons_options{
        display: flex;
        margin-left: auto;
    }
    .but{
        padding-left:3mm;
        cursor: pointer;
    }
    #delete{
        color: #E70F0F;
    }
    #valid{
        color: #008D17;
    }


</style>