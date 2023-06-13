<template>
    <div>
        <button @click="()=>handleDisplay()">Vos fichiers</button>
        <div id="modal-list" v-if="display">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <div>
                <h2 style="margin-bottom: 30px;">Vos fichiers</h2>
                <ul class="list-group">
                    <li class="fileRow list-group-item" v-for="file in userFiles" :key="file.name">
                        <div>{{file.name}} - {{file.use}} - {{file.size}}</div>
                        <div>
                            <button class="btn btn-success fileRowButton" @click="()=>handleDownload(file.name)">Télécharger</button>
                            <button class="btn btn-light fileRowButton" @click="()=>handleReplace(file.name)">Remplacer</button>
                            <button class="btn btn-danger fileRowButton" @click="()=>handleDelete(file.name)">Supprimer</button>
                        </div>
                    </li>
                </ul>
            </div>
            <client-new-file-form/>
        </div>
    </div>
</template>

<script>
import ClientNewFileForm from './ClientNewFileForm.vue';
export default {
  components: { ClientNewFileForm },
    name: 'ClientFileList',
    data() {
        return {
            userFiles: [],
            display: false,
        }
    },
    methods: {
        handleDisplay() {
            this.display = !this.display;
        },
        handleDelete(name) {
            console.log(name);
            if(confirm('Voulez-vous vraiment supprimer ce fichier ?')){
                this.userFiles = this.userFiles.filter(file => file.name !== name);
                console.log(this.userFiles);
            }
        },
        onFilesChange(ev) {
            this.newFile.file = ev.target.files[0];
        },
        handleSubmit(ev) {
            if(this.newFile.name == '' || this.newFile.use == '' || this.newFile.file == null){
                return;
            }
            ev.preventDefault();
            this.userFiles.push({
                name: this.newFile.name,
                use: this.newFile.use,
                size: this.newFile.file.size,
                file: this.newFile.file
            });
            this.newFile = {
                name: '',
                use: '',
                file: null
            };
            this.newForm = false;
        },
        handleDownload(name) {
            console.log(name);
        },
        handleReplace(name) {
            console.log(name);
        }

    },
    mounted() {
        this.userFiles = [
            {
                name: 'test',
                use: 'test',
                size: 1000,
                file: null
            },
            {
                name: 'test2',
                use: 'test2',
                size: 2000,
                file: null
            }
        ]
    }
}
</script>

<style>

    #modal-list {
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
        overflow-y: scroll;
    }

    .fileRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .fileRowButton {
        margin-left: 10px;
    }

</style>