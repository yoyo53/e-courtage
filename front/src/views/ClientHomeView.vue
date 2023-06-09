<template>
    <div>
        <HeaderComponent/>
        <!--<h1>This is a client home page</h1>-->
        <div id="main-body">
            <div id="body-left">
                <div id="profile-overview-area">
                    <h2>Votre profil</h2>

                </div>
                <div id="notifications-view-area">
                    <h2>Vos notifications</h2>
                    <ul id="notifications-list">
                        <li>Notification 1</li>
                        <li>Notification 2</li>
                    </ul>
                </div>
            </div>
            <div id="body-right">
                <div id="demands-overview-area">
                    <h2>Liste de vos demandes en cours</h2>
                    <ul id="demands-list">

                    </ul>
                </div>
                <div id="add-demand-area">
                    <ClientDemandForm/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ClientDemandForm from '@/components/ClientDemandForm.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    name: 'ClientHomeView',
    components: {
    HeaderComponent,
    ClientDemandForm
},
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
        border: 1px solid black;
    }

    #notifications-view-area {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        height: 50%;
        border: 1px solid black;
    }

    #notifications-list {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        border: 1px solid black;
        background-color: #D9D9D9;
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
        border: 1px solid black;
    }

    #demands-list {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        border: 1px solid black;
        background-color: #D9D9D9;
    }

    #add-demand-area {
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: flex-end;
        width: 100%;
        height: 15%;
        border: 1px solid black;
    }


</style>