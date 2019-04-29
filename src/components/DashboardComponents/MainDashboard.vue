<template>
    <div class="container-fluid">
  <div class="row date">
    <div class="col-sm-12"></div>   
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class="element-1">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 stock-levels">
              <h4>Red Levels</h4>
            </div>
            <div class="col-sm-6 stock-levels">
                <h4>Amber Levels</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8 stock-levels1">
              <p>ITEMS WITH LOW STOCK LEVEL</p>
            </div>
            <div class="col-sm-4 stock-levels1">
                <button type="button" class="btn btn-primary btn-md">View All Items</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
        <div class="element-1">
            <div class="container">
                <div class="row">
                  <div class="col-sm-6 aging-stocks">
                      <h4>Oldest Stock Inventory</h4>
                  </div>
                  <div class="col-sm-6 aging-stocks"></div>
                </div>
                <div class="row">
                  <div class="col-sm-8 aging-stocks1">
                      <p>AGING STOCKS</p>
                  </div>
                  <div class="col-sm-4 aging-stocks1">
                      <button type="button" class="btn btn-primary btn-md">Review Stocks</button>
                  </div>
                </div>
              </div>
        </div>
    </div>
  </div>
  <div class="row">
      <div class="col-sm-6">
          <div class="element-1">
              <div class="container">
                  <div class="row">
                    <div class="col-sm-4 po">
                        <h4>Created</h4>
                    </div>
                    <div class="col-sm-4 po">
                        <h4>For Follow-up</h4>
                    </div>
                    <div class="col-sm-4 po">
                        <h4>Completed</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 po1">
                        <p>PURCHASE ORDERS</p>
                    </div>
                    <div class="col-sm-4 po1">
                        <button type="button" class="btn btn-primary btn-md">Purchase Orders</button>
                    </div>
                  </div>
                </div>
          </div>
      </div>
      <div class="col-sm-6">
          <div class="element-1">
              <div class="container">
                  <div class="row">
                    <div class="col-sm-4 items-transit">
                        <h4>In Transit</h4>
                    </div>
                    <div class="col-sm-4 items-transit">
                        <h4>Delayed</h4>
                    </div>
                    <div class="col-sm-4 items-transit">
                        <h4>To Warehouse</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 items-transit1">
                        <p>ITEMS IN TRANSIT</p>
                    </div>
                    <div class="col-sm-4 items-transit1">
                        <button type="button" class="btn btn-primary btn-md">Items In Transit</button>
                    </div>
                  </div>
                </div>
          </div>
      </div>
    </div>
</div>
</template>

<style scoped>
.element-1{
    border-style: solid;
    border-width: 1px;
    height: 306px;
    margin-bottom: 15px;
    border-color: #283593;
}

.date{
    height: 50px;
}

p{
    -webkit-text-fill-color: #283593;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-top: 5px;
    font-weight: 700;
}

h4{
    -webkit-text-fill-color: white;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 15px;
    margin-top: 10px;

}

.stock-levels{
    border-right-color: white;
    border-style: solid;
    border-width: 1px;    
    height: 230px;
    background-color: #283593;
}

.stock-levels1{    
    height: 63px;  
}

.aging-stocks{
    border-right-color: white;
    border-style: solid;
    border-width: 1px;    
    height: 230px;
    background-color: #283593;
}

.aging-stocks1{    
    height: 63px;  
}

.po{
    border-right-color: white;
    border-style: solid;
    border-width: 1px;    
    height: 230px;
    background-color: #283593;
}

.po1{    
    height: 63px;  
}

.items-transit{
    border-right-color: white;
    border-style: solid;
    border-width: 1px;    
    height: 230px;
    background-color: #283593;
}

.items-transit1{   
    height: 63px;    
}

.btn{
    margin-top: 25px;
    margin-left: 45px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 12px;  
    background: #283593;
    border-color: #283593;
    border-radius: 2px;  
    cursor: pointer; 
    width: 120px;
    
}
</style>


<script>
export default {
    name: "MainDashboard"
}
</script>

