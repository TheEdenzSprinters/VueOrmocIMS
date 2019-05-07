<template>
  <b-container fluid>
    <b-row>
      <b-col sm="3" class="iconContainer">
        <font-awesome-icon class="icons appPrimaryTextColor" icon="plus"/>
        <font-awesome-icon class="icons appPrimaryTextColor" icon="times"/>
        <font-awesome-icon class="icons appPrimaryTextColor" icon="edit"/>
        <font-awesome-icon class="icons appPrimaryTextColor" icon="print"/>
      </b-col>
    </b-row>

    <b-row class="form-1">
      <b-col sm="6">
        <label class="text-1" for="title">Title:</label>
        <b-form-input id="title" class="input-small" size="sm"></b-form-input>
      </b-col>    
      <b-col sm="6">
        <label class="text-1" for="date-created">Date Created:</label>
        <b-form-input id="date-created" class="input-small" size="sm"></b-form-input>
      </b-col>    
    </b-row>
    
   <b-row class="form-2">
    <b-col sm="4">
      <label class="text-1" for="status">Status:</label>
      <b-form-input id="status" class="input-small-1" size="sm"></b-form-input>
    </b-col>
    <b-col sm="1"></b-col>
      <b-col sm="7">
        <label class="text-1" for="notes">Notes:</label>
        <b-form-input id="notes" class="input-small-2" size="sm"></b-form-input>
      </b-col>           
    </b-row>  
  </b-container>
</template>

<script>

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
    width: 170px;
}
.input-small-2{
    margin-bottom: 10px;    
    padding: 0%;
    height: 70px;
    width: 246px;
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
.iconContainer{
  margin-left: 350px;
}
.icons {
  font-size: 24px;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 15px;
}
</style>
