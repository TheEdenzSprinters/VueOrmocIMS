<template>
  <b-container fluid>    
    <b-row class="form-1">
      <b-col sm="6">
        <label class="text-1" for="request-id">Item Request ID:</label>
        <b-form-input id="request-id" class="input-small" size="sm"></b-form-input>
      </b-col>    
      <b-col sm="6">
        <label class="text-1" for="title">Title:</label>
        <b-form-input id="title" class="input-small" size="sm"></b-form-input>
      </b-col>    
    </b-row>

    <b-row class="form-2">
      <b-col sm="4">
        <label class="text-1" for="date-from">Date From:</label>
        <date-picker id="date-from" v-model="startDate" :config="options"></date-picker>
      </b-col>    
      <b-col sm="4">
        <label class="text-1" for="date=to">Date To:</label>
        <date-picker id="date-to" v-model="endDate" :config="options"></date-picker>
      </b-col>
      <b-col sm="4">
        <label class="text-1" for="status">Status:</label>
        <b-form-input id="status" class="input-small-1" size="sm"></b-form-input>
      </b-col>
      <b-col sm="12" class="searchButton">
        <b-button class="appPrimaryBackgroundColor simpleSearch" v-on:click="ItemNameSearch(itemName)" size="sm">SEARCH</b-button>
      </b-col>        
    </b-row>  
  </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'; 
import datePicker from 'vue-bootstrap-datetimepicker'; 
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
   
  export default {    
    data () {
      return {
        date: new Date(),
        startDate: null,
        endDate: null,
        options: {
          format: 'DD/MMM/YYYY',
          useCurrent: false,
        }       
      }
    },
    components: {
      datePicker
    }
  }
</script>

<style scoped>
.text-1{
    font-size: 11px;
    margin: 0%;
    padding: 0%;   
}
.input-small{
    margin: 0%;
    padding: 0%;
    height: 25px;
    width: 210px;
}
.input-small-1{
    margin: 0%;
    padding: 0%;
    height: 25px;
    width: 138px;
}
.row{
    margin-right: 2px;
}
.btn {
    margin: 0 auto;
    margin-top: 5px;
    display: block;
    height: 30px;
}
.searchButton{
    height: 40px;
}
</style>
