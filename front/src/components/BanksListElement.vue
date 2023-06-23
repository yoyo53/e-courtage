<template>
    <div id="demandListElement">
        <div id="buttons_options">
            <span><p id="delete" class="but" onclick="deleteElement()">x</p></span>
            <span><p id="favorite" class="but" @click="()=>favoriteElement()">☆</p></span>
            <span><p id="valid" class="but" @click="()=>validElement()">+</p></span>
        </div>
        <h2>{{demand.sujet}}</h2>
        <div class="demandRow"><span> Nom : {{ demand.Nom}}</span> <span> Salaire : {{ demand.Salaire }}</span></div>
        <div class="demandRow"><span> Valeur : {{ demand.Valeur}}</span></div>
        <div class="demandRow"><span>{{ demand.commentaire }}</span></div>
        <client-demand-detail :propDemand="demand"/>
    </div>
</template>

<script>
import ClientDemandDetail from './ClientDemandDetail.vue'
export default {
  components: { ClientDemandDetail },
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
            if (this.$parent.userDemands.find(obj=> {return obj.id == this.demand.id}).favorite==false) {
                this.$parent.userDemands.find(obj=> {return obj.id == this.demand.id}).favorite = true;
            }
            else{
                this.$parent.userDemands.find(obj=> {return obj.id == this.demand.id}).favorite = false;
            }
            console.log(this.$parent.userDemands);
            
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
        margin-left: 90%;
    }
    .but{
        padding-left:2mm;
    }

</style>