<template>
    <div>
        <button class="btn btn-primary" @click="()=>handleDisplay()">Vos fichiers</button>
        <div id="cover" v-if="display"></div>
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

<style scoped>
    #cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
        z-index: 10;
    }

    #modalFileList {
        z-index: 11;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #D9D9D9;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: max(min(90dvw, 350px), 50dvw);
        height: 70dvh;
        border-radius: 10px;
        padding: 20px;
    }

    #closeButton{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #D9D9D9;
        border-radius: 10px;
        border: none;
        font-size: 2em;
    }
</style>