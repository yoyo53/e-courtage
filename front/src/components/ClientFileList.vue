<template>
    <div>
        <button class="btn btn-primary" @click="()=>handleDisplay()">Vos fichiers</button>
        <div id="modal-list" v-if="display">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <h2 style="margin-bottom: 30px;">Vos fichiers</h2>
            <div id="clientFileList">
                <ul class="list-group">
                    <li class="fileRow list-group-item" v-for="file in userFiles" :key="file.name">
                        <div class="fileRow-text">{{file.id_document}} - {{ file.nom_document }}</div>
                        <div class="fileRow-buttons">
                            <button class="btn btn-success fileRowButton" @click="()=>handleDownload(file.id_document, file.nom_document)">Télécharger</button>
                            <button class="btn btn-light fileRowButton" @click="()=>handleUpdate(file.id_document)">Remplacer</button>
                            <button class="btn btn-danger fileRowButton" @click="()=>handleDelete(file.id_document)">Supprimer</button>
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
        handleDownload(id,nom) {
            console.log(id);
            fetch(this.api_url + "document/downloadDocument/" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((response) => {
                if (response.ok) {
                    return response.blob();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .then((response) => {
                console.log(response);
                const url = window.URL.createObjectURL(new Blob([response]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", nom);
                document.body.appendChild(link);
                link.click();
            })
        },
        handleUpdate(id) {

            let $this = this;
            
            console.log(id);
            //Open file explorer, when file is selected, send whole file with xmlHttpRequest
            const input = document.createElement("input");
            input.type = "file";
            input.ref = "file";
            input.click();
            input.onchange = () => {
                const formData = new FormData();
                console.log(input);
                formData.append("file", input.files[0]);
                let xhr = new XMLHttpRequest();
                xhr.open("PATCH", this.api_url + "document/updateDocument/" + id, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.send(formData);
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        console.log("File uploaded");
                        $this.userFiles.find((file) => file.id_document === id).nom_document = input.files[0].name;
                        
                    } else {
                        console.log("Error " + xhr.status + " occurred when trying to upload your file.");
                    }
                };
            }

        },
        handleDelete(id) {
            console.log(id);
            fetch(this.api_url + "document/deleteDocument/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .then((response) => {
                console.log(response);
                this.userFiles = this.userFiles.filter((file) => file.id_document !== id);
            })
        },
        fetchUserFiles() {
            fetch(this.api_url + "document/getAllDocuments", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .then((response) => {
                console.log(response);
                this.userFiles = response;
            })
            .catch((error) => {
                console.log(error);
                alert("Une erreur est survenue, veuillez réessayer plus tard");
            });
        }

    },
    mounted() {
        this.fetchUserFiles();
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
    }

    #clientFileList {
        height: 80%;
        overflow-y: scroll;
    }

    .fileRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .fileRow-text {
        width: 40%;
        text-align: left;
    }

    .fileRow-buttons {
        width: 60%;
    }

    .fileRowButton {
        margin-left: 10px;
    }

</style>