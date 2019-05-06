<template>
  <b-container fluid>    
    <b-row class="form-1">
      <b-col sm="6">
        <label class="text-1" for="input-small">Item Request ID:</label>
        <b-form-input class="input-small" size="sm"></b-form-input>
      </b-col>    
      <b-col sm="6">
        <label class="text-1" for="input-small">Title:</label>
        <b-form-input class="input-small" size="sm"></b-form-input>
      </b-col>    
    </b-row>

    <b-row class="form-2">
      <b-col sm="4">
        <label class="text-1" for="input-small">Date From:</label>
        <b-form-input class="input-small-1" size="sm"></b-form-input>
      </b-col>    
      <b-col sm="4">
        <label class="text-1" for="input-small">Date To:</label>
        <b-form-input class="input-small-1" size="sm"></b-form-input>
      </b-col>
      <b-col sm="4">
        <label class="text-1" for="input-small">Status:</label>
        <b-form-input class="input-small-1" size="sm"></b-form-input>
      </b-col>
      <b-col sm="12" class="searchButton">
        <b-button class="appPrimaryBackgroundColor simpleSearch" v-on:click="ItemNameSearch(itemName)" size="sm">SEARCH</b-button>
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
    width: 138px;
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
</style>
