<template>
    <div id="demandListElement">
        <h3>{{demand.subject}}</h3>
        <div class="demandRow"><span>{{ demand.amount }}</span> <span>{{ demand.duration }}</span></div>
        <div class="demandRow"><span>{{ demand.purpose }}</span></div>
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

</style>