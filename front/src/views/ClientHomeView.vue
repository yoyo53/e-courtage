<template>
    <div>
        <HeaderComponent/>
        <!--<h1>This is a client home page</h1>-->
        <div id="main-body">
            <div id="body-left">
                <div id="profile-overview-area">
                    <h2>Votre profil :</h2>
                    <ul id="profile-list" class="section-list">
                        <li class="profile-item"><span>Nom :</span> <input type="text" v-model="userData.name"></li>
                        <li class="profile-item"><span>Prénom :</span> <input type="text" v-model="userData.firstname"> </li>
                        <li class="profile-item"><span>Date de Naissance :</span> <input type="date" v-model="userData.birthdate"></li>
                        <li class="profile-item"><span>Numéro de téléphone :</span> <input type="tel" v-model="userData.phone"></li>
                        <li class="profile-item"><span>Adresse mail :</span> <input type="email" v-model="userData.email"></li>
                        <li class="profile-item"><span>Profession :</span> <input type="text" v-model="userData.occupation"></li>
                        <li class="profile-item profile-buttons"><client-file-list/><router-link class="btn btn-primary" to="/client/profile">Votre profil</router-link></li>
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
                        <client-demands-list-element v-for="temp_demand in userDemands" v-bind:key="temp_demand.id" :demand="temp_demand"></client-demands-list-element>
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
import ClientFileList from '../components/ClientFileList.vue';

export default {
    name: 'ClientHomeView',
    components: {
    HeaderComponent,
    ClientDemandForm,
    ClientNotificationListElement,
        ClientDemandsListElement,
        ClientFileList
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
            // TODO
            this.userData = {
                name: "Doe",
                firstname: "John",
                birthdate: "2002-09-29",
                phone: "0123456789",
                email: "john.doe@gmail.com",
                occupation: "Software Engineer",
            }
            console.log(this.userData);
            /*
            fetch('/api/userdataaddress/',{
                headers: {
                'Content-Type': 'application/json',
                'authorization': sessionStorage.getItem("token")
                }})
            .then((response)=>{return(response.json())})
            .then((parsed) => {
                console.log(parsed);
                this.userData = parsed;
            });
            */
        },
        fetchUserNotifications() {
            // TODO
            this.userNotifications = [
                {
                    "demand": "Demande de prêt 1",
                    "bank": "Crédit Agricole"
                },
                {
                    "demand": "Demande de prêt 1",
                    "bank": "BNP Paribas"
                },
                {
                    "demand": "Demande de prêt 2",
                    "bank": "Crédit Agricole"
                }
            ]

            /*
            fetch('/api/usernotificationsaddress/',{
                headers: {
                'Content-Type': 'application/json',
                'authorization': sessionStorage.getItem("token")
                }})
            .then((response)=>{return(response.json())})
            .then((parsed) => {
                console.log(parsed);
                this.userNotifications = parsed;
            });
            */
        },
        fetchUserDemands() {
            
            fetch('https://e-courtage-back.fly.dev/demande_client/getAllDemandes',{
                headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
                }})
            .then((response)=>{return(response.json())})
            .then((parsed) => {
                console.log(parsed);
                this.userDemands = parsed;
            });
            
        },
        sendUserData() {
            /*
            fetch( '/api/userdataaddress', {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                'authorization': sessionStorage.getItem("token")
                },
                body: JSON.stringify({
                    "name": this.userData.name,
                    "firstname": this.userData.firstname,
                    "birthdate": this.userData.birthdate,
                    "phone": this.userData.phone,
                    "email": this.userData.email,
                    "occupation": this.userData.occupation
                })
            })
            */
        }
    },
    mounted() {
        console.log("Mounted");
        this.fetchUserData();
        this.fetchUserNotifications();
        this.fetchUserDemands();
    },
    beforeUnmount() {
        console.log("Unmounted");
        this.sendUserData();
    }
    
}
</script>

<style>
    #main-body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 95%;
        height: 90%;
        height: 80vh;
        margin: auto;
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
        justify-content: left;
        align-items: flex-start;
        width: 40%;
        height: 100%;
    }

    #profile-overview-area {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        height: 50%;
        border: 0px solid black;
    }

    .profile-item {
        font-size: 1.5vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .profile-buttons{
        margin-top: 10px;
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
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        height: 50%;
        border: 0px solid black;
    }

    /* Right Part Stuff */

    #body-right {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 55%;
        height: 100%;
    }

    #demands-overview-area {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        height: 85%;
        border: 0px solid black;
    }

    #add-demand-area {
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: flex-end;
        width: 100%;
        height: 15%;
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