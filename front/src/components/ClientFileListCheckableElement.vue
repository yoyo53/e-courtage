<template>
  <div>
    <input type="checkbox" v-bind:id= file.id  v-bind:name= file.id value="Bike" @change="(ev)=>handleAddFile(ev)">
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
                this.$parent.selectedFiles.push(this.file.id);
            }
            else{
                this.$parent.selectedFiles = this.$parent.selectedFiles.filter(file => file !== this.file.id);
            }
            console.log(this.$parent.selectedFiles);
        }
    }
}
</script>

<style>

</style>