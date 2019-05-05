<template>
  <b-container fluid>
    <b-row>
      <b-col sm="8">
        <h4>IR1000001</h4>          
      </b-col>
      <b-col sm="4">
        <p><a href="#" class="btn btn-success btn-smgf">
        <span mdb-icon icon="print"></span></a></p>
      </b-col>
    </b-row>
        
        
    <b-row class="form-1">
      <b-col sm="6">
        <label id="text-1" for="input-small">Title:</label>
        <b-form-input id="input-small" size="sm"></b-form-input>
      </b-col>    
      <b-col sm="6">
        <label id="text-1" for="input-small">Date Created:</label>
        <b-form-input id="input-small" size="sm"></b-form-input>
      </b-col>    
    </b-row>
    
   <b-row class="form-2">
    <b-col sm="4">
      <label id="text-1" for="input-small">Status:</label>
      <b-form-input id="input-small-1" size="sm"></b-form-input>
    </b-col>
    <b-col sm="1"></b-col>
    <b-col sm="7">
      <label id="text-1" for="input-small">Notes:</label>
      <b-form-input id="input-small-2" size="sm"></b-form-input>
    </b-col>           
  </b-row>  
  </b-container>
</template>

<script>

</script>

<style scoped>
#text-1{
    font-size: 9px;
    margin: 0%;
    padding: 0%;   
}
#input-small{
    margin: 0%;
    padding: 0%;
    height: 25px;
    width: 233px;
}
#input-small-1{
    margin: 0%;
    padding: 0%;
    height: 25px;
    width: 150px;
}
#input-small-2{
    margin-bottom: 10px;
    padding: 0%;
    height: 70px;
    width: 276px;
}
#div-col-sm-12{
    align-content: center;
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
