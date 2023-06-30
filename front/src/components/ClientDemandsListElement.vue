<template>
    <div id="demandListElement">
        <h3>{{demand.sujet}}</h3>
        <div class="demandRow"><span> Acquisition : {{ demand.montant_bien}} €</span> <span> Apport : {{ demand.apport_personnel }} €</span></div>
        <div class="demandRow"><span>{{ demand.commentaire }}</span></div>
        <br>
        <div class="demandRow"><span>État :</span><span id="accept_count">{{ demand.accepted }}</span><span id="pending_count">{{ demand.pending }}</span><span id="refuse_count">{{ demand.refused }}</span></div>
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
    }
}
</script>

<style scoped>
    #demandListElement {
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

    #accept_count {
        color: green;
    }

    #pending_count {
        color: orange;
    }

    #refuse_count {
        color: red;
    }

</style>