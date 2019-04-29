<template>
    <div class="container-fluid">
  <div class="row">
    <div class="col-sm-12 head">
      <p4>Home > Item Mangement > Item Request Form</p4>
    </div>
  </div>
  <!-- <-----1stForm----- -->
 
  <div class="row">
    <div class="col-sm-6">
      <div class="container-fluid">
        <div class="row filters">
          <div class="col-sm-12">
            <h5>Filters</h5>
            <form>
                Item Request ID <input type="text" name="itemID"> 
                Title <input type="text" name="title">             
                Date From <input type="text" name="dateFrom">
                Date To <input type="text" name="dateTo">
                Status <input type="text" name="status">
                <br>
                <button class="btn search">Search</button>
            </form>           
          </div>
        </div>
        <div class="row request1">
            <div class="col-sm-3 request">
              <p6>Item Request ID</p6>
            </div>
            <div class="col-sm-4 request">
                <p6>Title</p6>
            </div>
            <div class="col-sm-2 request">
                <p6>Status</p6>
            </div>
            <div class="col-sm-3 request">
                <p6>Date Created</p6>
            </div>
          </div>
          <div class="row">
              <div class="col-sm-3 request2"></div>
              <div class="col-sm-4 request2"></div>
              <div class="col-sm-2 request2"></div>
              <div class="col-sm-3 request2"></div>
          </div>
          <div class="row not-fulfilled">
              <div class="col-sm-12">
                <h5>Item Request Not Fulfilled</h5>            
              </div>
            </div>
          <div class="row request3">
            <div class="col-sm-3">
                <p6>Item Request ID</p6>
            </div>
            <div class="col-sm-6">
                <p6>Title</p6>
            </div>
            <div class="col-sm-3">
                <p6>Date Created</p6>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 request4"></div>
            <div class="col-sm-6 request4"></div>
            <div class="col-sm-3 request4"></div>
          </div>
      </div>
    </div>
 <!-- <-----2ndForm----- -->
    <div class="col-sm-6">
        <div class="container-fluid">
          <div class="row id">
            <div class="col-sm-12">
                <h5>IR1000001</h5>
            </div>          
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h5>ITEMS</h5>
            </div>
          </div>
          <div class="row stock-left">
              <div class="col-sm-12">
                <p6>Stock Left</p6>
              </div>
          </div>
          <div class="row">              
              <div class="col-sm-2 items">
                  <p6>Item ID</p6>
              </div>
              <div class="col-sm-2 items">
                  <p6>Item Name</p6>
              </div>
              <div class="col-sm-3 items">
                  <p6>Item Description</p6>
              </div>
              <div class="col-sm-1 items">
                  <p6>Brand</p6>
              </div>
              <div class="col-sm-2 items">
                  <p6>Store Room</p6>
              </div>
              <div class="col-sm-2 items">
                  <p6>Warehouse</p6>
              </div>
          </div>
          <div class="row">
            <div class="col-sm-2 items1"></div>
            <div class="col-sm-2 items1"></div>
            <div class="col-sm-3 items1"></div>
            <div class="col-sm-1 items1"></div>
            <div class="col-sm-2 items1"></div>
            <div class="col-sm-2 items1"></div>
          </div>
          <div class="row">
              <div class="col-sm-12">                
                  <h5>Quotations</h5>                
              </div>
          </div>
          <div class="row">
            <div class="col-sm-2 quotation">
                  <p6>Quotation ID</p6>
              </div>
              <div class="col-sm-3 quotation">
                  <p6>Quotation Title</p6>
              </div>
              <div class="col-sm-2 quotation">
                  <p6>Status</p6>
              </div>
              <div class="col-sm-2 quotation">
                  <p6>Sent to</p6>
              </div>
              <div class="col-sm-3 quotation">
                  <p6>Notes</p6>
              </div>
          </div>
          <div class="row">
            <div class="col-sm-2 quotation1"></div>
            <div class="col-sm-3 quotation1"></div>
            <div class="col-sm-2 quotation1"></div>
            <div class="col-sm-2 quotation1"></div>
            <div class="col-sm-3 quotation1"></div>            
          </div>
          <div class="row">
              <div class="col-sm-12">                
                  <h5>Price Scoresheet</h5>
              </div>
          </div>
          <div class="row item-element">
            <div class="col-sm-12">
              <p6> ITEM 1022011: Boysen Elastomeric Paint Red</p6>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2 scoresheet">
                  <p6>Supplier ID</p6>
              </div>
              <div class="col-sm-2 scoresheet">
                  <p6>Supplier Name</p6>
              </div>
              <div class="col-sm-2 scoresheet">
                  <p6>Quantity</p6>
              </div>
              <div class="col-sm-2 scoresheet">
                  <p6>Price per Unit</p6>
              </div>
              <div class="col-sm-2 scoresheet">
                  <p6>Terms</p6>
              </div>
              <div class="col-sm-2 scoresheet">
                <p6>Remarks</p6>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2 scoresheet1"></div>
            <div class="col-sm-2 scoresheet1"></div>
            <div class="col-sm-2 scoresheet1"></div>
            <div class="col-sm-2 scoresheet1"></div>
            <div class="col-sm-2 scoresheet1"></div>
            <div class="col-sm-2 scoresheet1"></div>            
          </div>
        </div>
      </div>
  </div>     
    
</div>
</template>

<style scoped>
input[type=text], select {
  width: 120px;

}

.head{
    border-style: solid;
    border-width: 1px;
    height: 30px;
    margin-bottom: 15px;
    border-color: #283593;
}
 .filters{
    border-style: solid;
    border-width: 1px;
    height: 175px;
    margin-bottom: 10px;
    border-color: #283593;
 }

 .request1{
    border-style: solid;
    border-width: 1px;
    height: 30px;
    text-align: center;
    border-color: #283593;
    background: #283593;
    -webkit-text-fill-color: white; 
 }   

.not-fulfilled{  
    height: 30px;       
}
 
.request3{
    border-style: solid;
    border-width: 1px;
    height: 30px;    
    border-color: #283593;
    background: #283593;
    -webkit-text-fill-color: white; 
    text-align: center;    
 }   

 p6{
    font-size: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    
 }

 .request{
     border-style: solid;
     border-width: 1px;
     border-color: #283593;
 }
 .request2{
    border-style: solid;
     border-width: 1px;
     height: 290px;
     border-color: #283593;
     margin-bottom: 10px;
 }
 .request4{
    border-style: solid;
    border-width: 1px;
    height: 180px;
    border-color: #283593;
    
 }

 /* <!---id-items-quotation----> */

h5{
    margin: none;
    padding-bottom: 0%;
}
.id{
    border-style: solid;
    border-width: 1px;
    height: 180px;    
    border-color: #283593; 
}
.stock-left{
    border-style: solid;
    border-width: 1px;
    border-bottom: none;
    height: 20px;
    background: #283593;
    -webkit-text-fill-color: white;
    text-align: right;
    padding-right: 60px;
}
.items{
    border-style: solid;
    border-width: 1px;
    height: 30px;    
    border-color: #283593;
    background: #283593;
    -webkit-text-fill-color: white; 
    text-align: center;
}
.items1{
    border-style: solid;
    border-width: 1px;
    height: 120px;
    border-color: #283593;
}

.quotation{
    border-style: solid;
    border-width: 1px;
    height: 30px;    
    border-color: #283593;
    background: #283593;
    -webkit-text-fill-color: white; 
    text-align: center; 
}
.quotation1{
    border-style: solid;
    border-width: 1px;
    height: 120px;
    border-color: #283593;
}
.item-element{
    border-style: solid;
    border-width: 1px;
    border-bottom: none;
    font-style:italic;
    height: 20px;
    background: #283593;
    -webkit-text-fill-color: white; 
    padding-right: 60px;
    text-align: left;
}
.scoresheet{
    border-style: solid;
    border-width: 1px;
    height: 30px;    
    border-color: #283593;
    background: #283593;
    -webkit-text-fill-color: white; 
    text-align: center; 
}
.scoresheet1{
    border-style: solid;
    border-width: 1px;
    height: 110px;
    border-color: #283593;
    text-align: center; 
}

/* }
.not-fulfilled{
    border-style: solid;
    border-width: 1px;
    height: 155px;
    margin-bottom: 15px;
    border-color: #283593;
}

th{
    font-size: 10px;
    text-align: center;
}
.table{
    max-height: none;
}
.thead{
    background: #283593;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-text-fill-color: white;
}  */
</style>

<script>
export default {
    name: "ItemRequestForm"
}
</script>

