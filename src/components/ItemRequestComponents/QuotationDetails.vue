<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" class="iconContainer">
        <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" v-on:click="addNewItem" v-if="itemNumber == 0 && !showCancelButton"/>
        <font-awesome-icon class="icons appPrimaryTextColor" icon="times" v-on:click="onReset" v-if="showCancelButton"/>
        <font-awesome-icon class="icons appPrimaryTextColor" icon="edit" v-on:click="modifyItem" v-if="itemNumber != 0 && !showCancelButton"/>
        <font-awesome-icon class="icons appPrimaryTextColor" icon="print" v-on:click="printForm"/>
      </b-col>
    </b-row>

    <b-row class="form-1">
      <b-col sm="6">
        <label class="text-1" for="input-small">Title:</label>
        <b-form-input class="input-small" size="sm"></b-form-input>
      </b-col>    
      <b-col sm="6">
        <label class="text-1" for="input-small">Date Created:</label>
        <b-form-input class="input-small" size="sm"></b-form-input>
      </b-col>    
    </b-row>
    
   <b-row class="form-2">
    <b-col sm="4">
      <label class="text-1" for="input-small">Status:</label>
      <b-form-input class="input-small-1" size="sm"></b-form-input>
    </b-col>
    <b-col sm="1"></b-col>
      <b-col sm="7">
        <label class="text-1" for="input-small">Notes:</label>
        <b-form-input class="input-small-2" size="sm"></b-form-input>
      </b-col>           
    </b-row>  
  </b-container>
</template>

<script>
export default {
    name: "QoutationDetails",
    props: ['itemNumber'],
    data() {
        return {
            itemName: "",
            category: "",
            subCategory: "",
            brand: "",
            location: "",
            quantity: "",
            measuredBy: "",
            notes: "",
            CreateDttm: "12 Apr 2019",
            UpdateDttm: "12 Apr 2019",
            isActive: false,
            tags: "",
            itemDetail: [
                {
                    ItemDetailName: "length",
                    ShowUnitsOfMeasure: true,
                    UnitsOfMeasure: "ft",
                    ItemDetailValue: "10"
                }
            ],
            showCancelButton: false,

        };
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault();
            alert("submitted!");
            this.showCancelButton = false;
        },
        onReset(evt){
            evt.preventDefault();
            alert("reset!");
            this.showCancelButton = false;
        },
        addNewItem(){
            alert("add item triggered!");
            this.showCancelButton = true;
        },
        modifyItem(){
            alert("modify item triggered!");
            this.showCancelButton = true;
        },
        printForm(){
            alert("preparing to print...");
        }
    },
}
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
