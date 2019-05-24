<template>
  <b-form @submit="onSubmit">
    <b-container fluid>    
      <b-row class="form-1">
        <b-col sm="4">
          <label class="text-1" for="request-id">Item Request ID:</label>
          <b-form-input id="request-id" size="sm" v-model="form.Id"></b-form-input>
        </b-col>    
        <b-col sm="8">
          <label class="text-1" for="title">Title:</label>
          <b-form-input id="title" size="sm" v-model="form.Title"></b-form-input>
        </b-col>    
      </b-row>

      <b-row class="form-2">
        <b-col sm="4">
          <label class="text-1" for="date-from">Date From:</label>
          <date-picker class="form-control-sm" id="date-from" v-model="form.DateFrom" :config="options"></date-picker>
        </b-col>    
        <b-col sm="4">
          <label class="text-1" for="date=to">Date To:</label>
          <date-picker class="form-control-sm" id="date-to" v-model="form.DateTo" :config="options"></date-picker>
        </b-col>
        <b-col sm="4">
          <label class="text-1" for="status">Status:</label>
          <b-form-select id="status" size="sm" v-model="form.StatusCd" :options="itemRequestStatusList"></b-form-select>
        </b-col>
        <b-col sm="12" class="searchButton">
          <b-button class="appPrimaryBackgroundColor simpleSearch" type="submit" size="sm">SEARCH</b-button>
        </b-col>        
      </b-row>  
    </b-container>
  </b-form>
</template>

<script>
import datePicker from 'vue-bootstrap-datetimepicker'; 
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import axios from "axios";
   
  export default {    
    data () {
      return {
        options: {
          format: 'DD/MMM/YYYY',
        },
        form: {
          Id: "",
          Title: "",
          StatusCd: null,
          DateFrom: "",
          DateTo: ""
        },
        itemRequestList: [],
        itemRequestStatusList: [{value: null, text: "Select Status"}],
      }
    },
    components: {
      datePicker
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        axios.post("http://localhost:50006/api/PurchaseOrderManagement/ItemRequestFormSearch", this.form)
        .then(res => {
          if(res.data.length > 0){
            this.itemRequestList = res.data;
            this.$emit("item-request-list", this.itemRequestList);
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },
    beforeMount: function(){
      axios.get("http://localhost:50006/api/PurchaseOrderManagement/GetItemRequestTicketSatus")
        .then(res => {
          for(var i = 0; i < res.data.length; i++){
            var ticketStatus = {
              value: res.data[i].Id,
              text: res.data[i].Status
            };

            this.itemRequestStatusList = this.itemRequestStatusList.concat(ticketStatus);
          }
        });
    }
  }
</script>

<style scoped>
.text-1{
    font-size: 12px;
    margin: 0%;
    padding: 0%;   
}

.searchButton {
    text-align: center;
    margin: 5px 0px;
}

</style>
