<template>
    <div id="demandListElement">
        <h3>{{demand.sujet}}</h3>
        <div class="demandRow"><span> Acquisition : {{ demand.montant_bien}} €</span> <span> Apport : {{ demand.apport_personnel }} €</span></div>
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
        }
    }
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

</style>