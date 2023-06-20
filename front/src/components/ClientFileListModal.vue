<template>
    <div>
        <button class="btn btn-primary" @click="()=>handleDisplay()">Vos fichiers</button>
        <div id="modalFileList" v-if="display">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <client-file-list/>
        </div>
    </div>
</template>

<script>
import ClientFileList from './ClientFileList.vue'
export default {
    name: 'ClientFileListModal',
    components: { ClientFileList },
    data() {
        return {
            display: false,
        }
    },
    methods: {
        handleDisplay() {
            this.display = !this.display;
        },
    }
}
</script>

<style>
    #modalFileList {
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #D9D9D9;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: 50vw;
        height: 70vh;
        border-radius: 10px;
    }
</style>