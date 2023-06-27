<template>
    <div>
        <!-- <h1>This demand detail pop up</h1> -->
        <button id="detailButton" @click="()=>handleDisplay()">Détails</button>
        <div id="modal-form" ref="modalForm" v-if="displayDetail">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <h2>Détails de la demande</h2>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            displayDetail: false,
        }
    },
    props: {
        demand: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleDisplay() {
            this.displayDetail = !this.displayDetail;
        }
    }
}

</script>
<style>
    #closeButton{
        position: absolute;
        top: 0;
        right: 5px;
        background-color: #D9D9D9;
        border-radius: 10px;
        border: none;
        font-size: 2vw;
    }

    #modal-form{
        color: black;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #D9D9D9;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: 50vw;
        height: 80vh;
        border-radius: 10px;
    }
</style>