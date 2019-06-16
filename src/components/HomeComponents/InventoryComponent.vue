<template>
<div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
        <b-col sm="6">
            <b-card-body title="Oldest Stocks in Inventory">
                <b-card-text>
                    <p v-if="showNoOldStocks">No Items to display.</p>
                    <ul v-if="!showNoOldStocks">
                        <li v-for="items in oldStocks" :key="items.Id">{{items.ItemName}}</li>
                    </ul>
                </b-card-text>
            </b-card-body>       
        </b-col>       
        <b-col sm="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
        </b-col>
    </b-row>
     <div slot="footer"><small class="text-muted">Aging Stocks</small><b-button class="appPrimaryBackgroundColor" href="#">Review Stocks</b-button></div>
  </b-card>
</div>
</template>

<script>
   import axios from "axios";

   export default {
       name: "InventoryComponent",
       data() {
           return{
               oldStocks: [],
               showNoOldStocks: true,
           }
       },
       mounted() {
           axios.get("http://localhost:49995/api/ItemManagement/GetOldestStocks")
            .then( res => {
                if(res.data.length > 0){
                    this.oldStocks = res.data;
                    this.showNoOldStocks = false;
                }
                else {
                    this.oldStocks = [];
                    this.showNoOldStocks = true;
                }
            });
       },
   }
</script>

<style scoped>
    li{
        list-style: none;
        font-size: 12px;
      
    }
     ul{
        margin: 0%;
        padding: 0px 0px 0px 30px;
    }
    .card-body{
        background-color: #283593;
        -webkit-text-fill-color: white;
        padding: 0%;
        height: 230px;     
    }
    .rounded-0{
        height: 230px;
        border-style: solid;
        border-width: 0px 0px 0px .2px;

    }
     .card{
      border-radius: 0px;
    }

    .card-footer{
      background-color: white; 
      border: none;     
    }

    .btn{
      height: 32px;
      width: 120px;
      font-size: 14px;    
      float:right;      
     
    }

    .text-muted{
      font-size: 22px;
      -webkit-text-fill-color: black;      
    }

    .card-title{
        font-size: 20px;
        padding-left: 10px;
        padding-top: 10px
    }
     
</style>