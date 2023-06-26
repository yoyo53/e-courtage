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

</script>