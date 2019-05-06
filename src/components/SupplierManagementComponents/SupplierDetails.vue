<template>
    <b-container>
        <b-row>
            <b-col sm="12" class="iconContainer">
                <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" v-on:click="addNewItem" v-if="itemNumber == 0 && !showCancelButton"/>
                <font-awesome-icon class="icons appPrimaryTextColor" icon="times" v-on:click="onReset" v-if="showCancelButton"/>
                <font-awesome-icon class="icons appPrimaryTextColor" icon="edit" v-on:click="modifyItem" v-if="itemNumber != 0 && !showCancelButton"/>
                <font-awesome-icon class="icons appPrimaryTextColor" icon="print" v-on:click="printForm"/>
            </b-col>
        </b-row>
        <b-row class="form">
            <b-col sm="12">
                <label class="text" for="input-small">Material Name</label>
                <b-form-input class="input-small" size="sm"></b-form-input>
                <label class="text" for="input-small">Address</label>
                <b-form-input class="input-small" size="sm"></b-form-input>
                <label class="text" for="input-small">Telephone No.</label>
                <b-form-input class="input-small" size="sm"></b-form-input>
                <label class="text" for="input-small">Email</label>
                <b-form-input class="input-small" size="sm"></b-form-input>
                <label class="text" for="input-small">Notes</label>
                <b-form-input class="input-small1" size="sm"></b-form-input>
               
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "SupplierDetails",
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
.input-small{
    width: 370px;
}
.input-small1{
    height: 80px;
    width: 420px;
}
.iconContainer{
  margin-left: 430px;
}
.icons {
  font-size: 24px;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 15px;
}

</style>

