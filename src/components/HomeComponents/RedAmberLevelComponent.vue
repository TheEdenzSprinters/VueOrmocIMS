<template>
<div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col sm="6">
        <b-card-body title="Red Levels">
          <b-card-text>
            <p v-if="showNoRedLevelItems">No Items to display.</p>
            <ul v-if="!showNoRedLevelItems">
                <li v-for="items in redLevelItems" :key="items.Id">{{items.ItemName}}</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>

      <div class="vl"></div>
     
      <b-col sm="6">
        <b-card-body title="Amber Levels">
          <b-card-text>
            <p v-if="showNoAmberLevelItems">No Items to display.</p>
            <ul v-if="!showNoAmberLevelItems">
                <li v-for="items in amberLevelItems" :key="items.Id">{{items.ItemName}}</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>
    
    </b-row>   
        <div slot="footer"><small class="text-muted">Items With Low Stock Level</small><b-button class="appPrimaryBackgroundColor" href="#">View All Items</b-button></div>     
  </b-card>
</div>

</template>

<script>
import axios from "axios";
import { host } from "../../variables.js";

export default{
  name: "RedAmberLevelComponent",
  data(){
    return {
      redLevelItems: [],
      showNoRedLevelItems: true,
      amberLevelItems: [],
      showNoAmberLevelItems: true,
    }
  },
  methods: {

  },
  mounted(){
    axios.get(host + "api/ItemManagement/GetRedLevelItems")
      .then( res => {
        if(res.data.length > 0){
          this.redLevelItems = res.data;
          this.showNoRedLevelItems = false;
        }
        else {
          this.showNoRedLevelItems = true;
        }
      });

    axios.get(host + "api/ItemManagement/GetAmberLevelItems")
      .then( res => {
        if(res.data.length > 0){
          this.amberLevelItems = res.data;
          this.showNoAmberLevelItems = false;
        }
        else {
          this.showNoAmberLevelItems = true;
        }
      })
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
    .card-title{
      padding-left: 20px;
      padding-top: 10px
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

    .card-footer{
      background-color: white; 
      border: none;     
    }

    .card{
      border-radius: 0px;
    }

    .vl {
      border-left: 1px solid white;
      height: 180px;
      position: absolute;
      right: 50%;
      margin-left: -3px;
      top: 0;
      margin-top: 28px;
    }
   
</style>