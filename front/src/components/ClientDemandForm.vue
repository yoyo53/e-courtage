<template>
    <div>
        <!--<h1>This is a demand form filling pop up</h1>-->
        <button id="openButton" @click="()=>handleDisplay()">NOUVELLE DEMANDE</button>
        <div id="modal-form" ref="modalForm" v-if="displayForm">
            <button id="closeButton" @click="()=>handleDisplay()">X</button>
            <h2>New Demand</h2>
            <form id="form">
                <div class="mb-3">
                    <label for="demandSubject" class="form-label">Sujet</label>
                    <input type="text" class="form-control" id="demandSubject" v-model="subject">
                </div>
                <div class="mb-3">
                    <label for="demandAmount" class="form-label">Amount</label>
                    <input type="text" class="form-control" id="demandAmount" v-model="amount">
                </div>
                <div class="mb-3">
                    <label for="demandDuration" class="form-label">Durée</label>
                    <input type="text" class="form-control" id="demandDuration" v-model="duration">
                </div>
                <div class="mb-3">
                    <label for="demandPurpose" class="form-label">Raison</label>
                    <input type="text" class="form-control" id="demandPurpose" v-model="purpose">
                </div>
                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Vos fichiers</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple v-on:change="(ev)=>onFilesChange(ev)">
                </div>
                <button type="submit" class="btn btn-primary" @click="(ev)=>handleSubmit(ev)">Envoyer</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ClientDemandForm',
    data() {
        return {
            subject: '',
            amount: '',
            duration: '',
            purpose: '',
            displayForm: false,
            files: []
        }
    },
    methods: {
        handleSubmit(ev) {
            ev.preventDefault();
            console.log(this.files);


            this.$parent.userDemands.push({
                subject: this.subject,
                amount: this.amount,
                duration: this.duration,
                purpose: this.purpose,
                files: this.files
            });

            console.log(this.$parent.userDemands);


            //Send data to the server with XMLHttpRequest
            let formData = new FormData();
            formData.append('subject', this.subject);
            formData.append('amount', this.amount);
            formData.append('duration', this.duration);
            formData.append('purpose', this.purpose);
            formData.append('files', this.files);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/api/demand');
            xhr.send(formData);
            xhr.onload = () => {
                console.log(xhr.response);
            }

            //Reset the form
            this.subject = '';
            this.amount = '';
            this.duration = '';
            this.purpose = '';
            this.files = [];

            this.displayForm = false;
        },
        handleDisplay() {
            this.displayForm = !this.displayForm;
        },
        onFilesChange(ev) {
            this.files = ev.target.files;
        }
    }
}
</script>

<style>

    #openButton{
        height: 100%;
        width: 50%;
        background-color: #D9D9D9;
        text-align: center;
        font-size: 2vw;
        border-radius: 10px;
    }

    #closeButton{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #D9D9D9;
        border-radius: 10px;
        border: none;
        font-size: 2vw;
    }

    #modal-form{
        color: black;
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

    #form{
        margin-top: 50px;
        text-align: left;
    }

</style>