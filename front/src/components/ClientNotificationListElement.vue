<template>
    <div id="notificationListElement">
        <span>{{notification.demand}}</span>
        <span>{{notification.bank}}</span>
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
        font-size: 1.5vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
    }
</style>