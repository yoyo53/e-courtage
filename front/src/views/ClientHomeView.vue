<template>
    <div id="content">
        <HeaderComponent/>
        <!--<h1>This is a client home page</h1>-->
        <div id="main-body">
            <div id="body-left">
                <div id="profile-overview-area">
                    <h2>Votre profil :</h2>
                    <ul id="profile-list" class="section-list">
                        <li class="profile-item"><span>Nom :</span><span> {{ userData.nom }}</span></li>
                        <li class="profile-item"><span>Prénom :</span><span> {{ userData.prenom }}</span></li>
                        <li class="profile-item"><span>Date de Naissance :</span><span> {{ userData.date_birth }}</span></li>
                        <li class="profile-item"><span>Numéro de téléphone :</span><span> {{ userData.tel }}</span></li>
                        <li class="profile-item"><span>Adresse mail :</span><span> {{ userData.email }}</span></li>
                        <li class="profile-item"><span>Profession :</span><span> {{ userData.situation_professionnelle }}</span></li>
                        <li class="profile-item profile-buttons"><client-file-list-modal/><router-link class="btn btn-primary" to="/client/profile">Votre profil</router-link></li>
                    </ul>
                </div>
                <div id="notifications-view-area">
                    <h2>Vos notifications :</h2>
                    <ul id="notifications-list" class="section-list">
                        <client-notification-list-element v-for="temp_notification in userNotifications" v-bind:key="temp_notification.id" :notification="temp_notification"></client-notification-list-element>
                    </ul>
                </div>
            </div>
            <div id="body-right">
                <div id="demands-overview-area">
                    <h2>Liste de vos demandes en cours :</h2>
                    <ul id="demands-list" class="section-list">
                        <client-demands-list-element v-for="temp_demand in userDemands" v-bind:key="temp_demand.id_demande" :demand="temp_demand"></client-demands-list-element>
                    </ul>
                </div>
                <div id="add-demand-area">
                    <ClientDemandForm id="demand-form"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ClientDemandForm from '@/components/ClientDemandForm.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'
import ClientNotificationListElement from '../components/ClientNotificationListElement.vue';
import ClientDemandsListElement from '../components/ClientDemandsListElement.vue';
import ClientFileListModal from '../components/ClientFileListModal.vue';

export default {
    name: 'ClientHomeView',
    components: {
    HeaderComponent,
    ClientDemandForm,
    ClientNotificationListElement,
    ClientDemandsListElement,
    ClientFileListModal
},
    data() {
        return {
            userData:{},
            userNotifications:[],
            userDemands:[]
        }
    },
    methods: {
        fetchUserData() {
            
            fetch(this.api_url + 'client/getClient',{
                headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("token")
                }})
            .then((response)=>{
                if(response.status == 401){
                    this.$router.push("/login/client");
                }
                return(response.json())
            })
            .then((parsed) => {
                console.log(parsed);
                this.userData = parsed;
                for(const key in this.userData){
                    if(key == "date_birth"){
                        this.userData[key] = new Date(this.userData[key]).toLocaleDateString();
                    } else if(this.userData[key] == null){
                        this.userData[key] = "Non renseigné";
                    }
                }
            });
            
        },
        fetchUserNotifications() {
            
            fetch(this.api_url + 'demande_client/getAllDemandesAccepted', {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
                }})
            .then((response)=>{
                if(response.status == 401){
                    this.$router.push("/login/client");
                }
                return(response.json())
            })
            .then((parsed) => {
                if(!Array.isArray(parsed)){
                    this.userNotifications = [];
                } else {
                    console.log(parsed);
                    this.userNotifications = parsed;
                }
            });
            
        },
        fetchUserDemands() {
            
            fetch(this.api_url + 'demande_client/getAllDemandes',{
                headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
                }})
            .then((response)=>{
                if(response.status == 401){
                    this.$router.push("/login/client");
                }
                return(response.json())
            })
            .then((parsed) => {
                console.log(parsed);
                this.userDemands = parsed;

                fetch(this.api_url + 'demande_client/getAllStatutDemandes', {
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("token")
                    }})
                .then((response)=>{return(response.json())})
                .then((parsed) => {
                    for(let i = 0; i < this.userDemands.length; i++){
                        this.userDemands[i].accepted = parsed[i].accepted;
                        this.userDemands[i].refused = parsed[i].refused;
                        this.userDemands[i].pending = parsed[i].pending;
                    }

                });
            });
            
        }
    },
    mounted() {
        console.log("Mounted");
        this.fetchUserData();
        this.fetchUserNotifications();
        this.fetchUserDemands();
    }
    
}
</script>

<style scoped>
    #content {
        display: flex;
        flex-direction: column;
        height: 100dvh;
    }

    #main-body {
        flex: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: space-between;
        width: 95%;
        margin: auto;
        overflow-y: scroll;
        scrollbar-width: none;
        padding-bottom: 2em;
    }

    .section-list{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: #D9D9D9;
        color: black;
        list-style: none;
        padding: 10px;
        border-radius: 10px;
        overflow-y: scroll;
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display:none;
    }

    /* Left Part Stuff */
    
    #body-left {
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: left;
        align-items: flex-start;
        flex: auto;
        max-height: 100%;
    }

    #profile-overview-area {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        border: 0px solid black;
        overflow-y: hidden;
    }

    .profile-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .profile-buttons{
        margin-top: auto;
        padding-top: 10px;
    }

    input {
        border: 0px solid black;
    }

    #files-button{
        color: blue;
        margin-top: 10px;
        border: none;
        background-color: transparent;
    }

    #notifications-view-area {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        border: 0px solid black;
        overflow-y: hidden;
    }

    /* Right Part Stuff */

    #body-right {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        flex: auto;
        max-height: 100%;
    }

    #demands-overview-area {
        display: flex;
        flex-direction: column;
        flex: auto;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        overflow-y: hidden;
        border: 0px solid black;
    }

    #add-demand-area {
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: flex-end;
        width: 100%;
        height: 4em;
        border: 0px solid black;
        padding-top : 10px;
    }

    #demand-form {
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        border: 0px solid black;
    }


</style>