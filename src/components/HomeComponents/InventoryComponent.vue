<template>
<div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
        <b-col md="6">
            <b-card-body title="Oldest Stocks in Inventory">
                <b-card-text>
                    <ul>
                        <li>Nippon Paint Red</li>
                        <li>Unitec Elbow Pipe</li>
                        <li>Firefly 9W Led Bulbs</li>
                    </ul>
                </b-card-text>
            </b-card-body>       
        </b-col>
        <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
        </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
   
</script>

<style scoped>
    li{
        list-style: none;
        font-size: 12px;
        padding-left: 10px;
        padding-right: 0%;    
    }
    ul{
        margin: 0%;
        padding: 0%;
    }
    .card-body{
        background-color: #283593;
        -webkit-text-fill-color: white;
        border: 1px;
        border: solid;
        border-color: white; 
        padding-right: 0%;
        height: 230px;       
    }
    .rounded-0{
        height: 230px;

    }

   
</style>