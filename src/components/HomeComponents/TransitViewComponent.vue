<template>
<div >
  
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>

      <b-col sm="4">
        <b-card-body title="In Transit">
          <b-card-text>
           <ul>
                <li></li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>
          
      <div class="vl-1"></div>

      <b-col sm="4">
        <b-card-body title="Delayed">
          <b-card-text>
            <ul>
                <li></li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>
     
     <div class="vl-2"></div>

      <b-col sm="4">
        <b-card-body title="To Warehouse">
          <b-card-text>
            <ul>
                <li></li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>

    </b-row>
    <div slot="footer"><small class="text-muted">Items In Transit</small><b-button class="appPrimaryBackgroundColor" href="#">Track Order Status</b-button></div>
  </b-card>
</div>
</template>

<script></script>

<style scoped>

  li{
      list-style: none;
      font-size: 12px;
     
    }

    .card-body{
        background-color: #283593;
        -webkit-text-fill-color: white;
        padding-right: 0%;
        height: 230px;
        padding: 0%;     
    }
      .card-title{
      padding-left: 10px;
      padding-top: 10px;
      font-size: 20px;
    }
    .btn{
      height: 32px;
      width: 120px;
      font-size: 11px;    
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

     .vl-1 {
        border-left: 1px solid white;
        height: 180px;
        position: absolute;
        margin-left: 170px;
        margin-top: 28px;
      
        
    }

    .vl-2 {
        border-left: 1px solid white;
        height: 180px;
        position: absolute;
        margin-left: 345px;
        margin-top: 28px;    
    }
   
</style>