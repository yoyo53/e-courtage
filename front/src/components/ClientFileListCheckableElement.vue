<template>
  <div id="checkableRow">
    <input type="checkbox" v-bind:id= file.id_document v-bind:ref="file.id_document" v-bind:name= file.id value="Bike" @change="(ev)=>handleAddFile(ev)">
    <label v-bind:for= file.id>  {{ file.nom_document }} [{{ file.type }}]</label><br>
  </div>
</template>

<script>
export default {
    name: 'ClientFileListCheckableElement',
    props: {
        file: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleAddFile(ev) {
            if(ev.target.checked){
                this.$parent.newDemand.files.push(this.file.id_document);
            }
            else{
                this.$parent.newDemand.files = this.$parent.newDemand.files.filter(file => file !== this.file.id_document);
            }
            console.log(this.$parent.newDemand.files);
        }
    },
    updated() {
        if(this.$parent.newDemand.files == undefined){
            this.$parent.newDemand.files = []
        }
        if(this.$parent.newDemand.files.includes(this.file.id_document)){
            this.$refs[this.file.id_document].checked = true;
        }
        else{
            this.$refs[this.file.id_document].checked = false;
        }
    },
    mounted() {
        if(this.$parent.newDemand.files == undefined){
            this.$parent.newDemand.files = []
        }
        if(this.$parent.newDemand.files.includes(this.file.id_document)){
            this.$refs[this.file.id_document].checked = true;
        }
        else{
            this.$refs[this.file.id_document].checked = false;
        }
    }
}
</script>

<style scoped>
    #checkableRow {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #checkableRow input {
        margin-right: 10px;
    }
</style>