<template>
  <div>
    <input type="checkbox" v-bind:id= file.id v-bind:ref="file.id" v-bind:name= file.id value="Bike" @change="(ev)=>handleAddFile(ev)">
    <label v-bind:for= file.id>  {{ file.name }}</label><br>
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
                this.$parent.newDemand.selectedFiles.push(this.file.id);
            }
            else{
                this.$parent.newDemand.selectedFiles = this.$parent.selectedFiles.filter(file => file !== this.file.id);
            }
            console.log(this.$parent.newDemand.selectedFiles);
        }
    },
    updated() {
        if(this.$parent.newDemand.selectedFiles.includes(this.file.id)){
            this.$refs[this.file.id].checked = true;
        }
        else{
            this.$refs[this.file.id].checked = false;
        }
    },
    mounted() {
        if(this.$parent.newDemand.selectedFiles.includes(this.file.id)){
            this.$refs[this.file.id].checked = true;
        }
        else{
            this.$refs[this.file.id].checked = false;
        }
    }
}
</script>

<style>

</style>