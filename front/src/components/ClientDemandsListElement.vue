<template>
    <div id="demandListElement">
        <h3>{{demand.subject}}</h3>
        <div class="demandRow"><span> Acquisition : {{ demand.acquisitionAmount}} €</span> <span> Apport : {{ demand.apport }} €</span></div>
        <div class="demandRow"><span>{{ demand.comments }}</span></div>
        <button id="detailButton" @click="()=>handleDisplayDetail()"> Plus </button>
    </div>
</template>

<script>
export default {
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