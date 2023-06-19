<template>
    <div id="notificationListElement">
        <div class="notification-row">
            <span>{{notification.sujet_demande}}</span>
            <span>{{notification.banque_name}}</span>
        </div>
        <div class="notification-row">
            <span id="comment"> Accepté ! </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClientNotificationListElement',
    props: {
        notification: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

    #notificationListElement {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
    }

    .notification-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: left;
        width: 100%;
    }

    #comment {
        color: green;
    }

</style>