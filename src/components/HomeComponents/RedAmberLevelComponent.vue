<template>
<div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col sm="6">
        <b-card-body title="Red Levels">
          <b-card-text>
            <ul>
                <li>Nippon Paint Red</li>
                <li>Unitec Elbow Pipe</li>
                <li>Firefly 9W Led Bulbs</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>

      <div class="vl"></div>
     
      <b-col sm="6">
        <b-card-body title="Amber Levels">
          <b-card-text>
            <ul>
                <li>9 inch Nail</li>
                <li>Vulcaseal 330ml</li>
                <li>10" dia Fan Belt</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>
    
    </b-row>   
        <div slot="footer"><small class="text-muted">Items With Low Stock Level <b-button href="#">View All Items</b-button></small></div>     
  </b-card>
</div>

</template>

<script>
  
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