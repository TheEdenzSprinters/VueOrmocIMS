<template>
    <div class="itemsContainer">
        <b-form @submit="onSubmit" @reset="onReset">
            <b-container fluid>
                <b-row>
                    <b-col lg="9" md="9" sm="9">
                        <h1 v-if="itemNumber == 0">
                            Item Number
                        </h1>
                        <h1 v-if="itemNumber != 0">
                            {{itemNumber}}
                        </h1>
                    </b-col>
                    <b-col lg="3" md="3" sm="3">
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="print" v-on:click="printForm"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" v-on:click="addNewItem" v-if="itemNumber == 0 && !showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="times" v-on:click="onReset" v-if="showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="edit" v-on:click="modifyItem" v-if="itemNumber != 0 && !showCancelButton"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12" md="12" sm="12">
                        <b-container fluid class="mainDetailsContainer">
                            <b-row>
                                <b-col lg="5" md="5" sm="12">
                                    <div class="imageContainer">
                                        <div>image</div>
                                        </div>
                                </b-col>
                                <b-col lg="7" md="7" sm="12">
                                    <b-container fluid>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Item Name
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-input block id="itemName" name="itemName" v-model="form.itemName" :readonly="readOnly" :required="true" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Category
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-form-select id="category" name="category" v-model="form.category" :options="categoryList" :disabled="readOnly" :required="true" size="sm" v-on:change="updateSubCategoryList()"></b-form-select>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                SubCategory
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-form-select id="subCategory" name="subCategory" v-model="form.subCategory" :options="subCategoryList" :disabled="readOnly" :required="true" size="sm" v-on:change="getItemDetailList()"></b-form-select>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Brand
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-input block id="brand" name="brand" v-model="form.brand" :readonly="readOnly" :required="true" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Location
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-form-select id="location" name="location" v-model="form.location" :options="locationList" :disabled="readOnly" :required="true" size="sm"></b-form-select>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                SKU
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-input block id="sku" name="sku" v-model="form.sku" :readonly="readOnly" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Quantity
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-input block id="quantity" name="quantity" v-model="form.quantity" :readonly="readOnly" :required="true" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Measured By
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-input block id="measuredBy" name="measuredBy" v-model="form.measuredBy" :readonly="readOnly" :required="true" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            Tags
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <span>{{form.tags}}</span>
                                            </b-col>
                                        </b-row>
                                    </b-container>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col lg="7" md="7" sm="12">
                        <label>Notes</label>
                        <b-textarea id="notes" name="notes" v-model="form.notes" :readonly="readOnly" rows="3" no-resize/>
                    </b-col>
                    <b-col lg="5" md="5" sm="12">
                        <b-container fluid class="miscItemDetails">
                            <b-row>
                                <b-col lg="6" md="6" sm="6">
                                    Date Created
                                </b-col>
                                <b-col lg="6" md="6" sm="6">
                                    {{form.CreateDttm}}
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col lg="6" md="6" sm="6">
                                    Last Updated
                                </b-col>
                                <b-col lg="6" md="6" sm="6">
                                    {{form.UpdateDttm}}
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col lg="6" md="6" sm="6">
                                    Is Active?
                                </b-col>
                                <b-col lg="6" md="6" sm="6">
                                    <b-checkbox id="isActive" name="isActive" v-model="form.isActive" :disabled="readOnly"/>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                </b-row>
                <b-row>
                    <b-container fluid class="detailedInformationContainer">
                        <b-row>
                            <b-col lg="12" md="12" sm="12">
                                <h2>Detailed Information</h2>
                            </b-col>
                        </b-row>
                        <b-row v-if="this.form.itemDetail.length == 0">
                            <b-col lg="12" md="12" sm="12">
                                No details available.
                            </b-col>
                        </b-row>
                        <b-row v-if="this.form.itemDetail.length > 0">
                            <b-col lg="12" md="12" sm="12" >
                                <b-container fluid>
                                    <b-row v-for="detail in form.itemDetail" :key="detail.ItemDetailName" class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4">
                                            {{detail.ItemDetailName}}
                                        </b-col>
                                        <b-col lg="5" md="5" sm="5">
                                            <b-input v-model="detail.ItemDetailValue" :readonly="readOnly" size="sm"/>
                                        </b-col>
                                        <b-col lg="3" md="3" sm="3">
                                            <b-input size="sm" v-if="detail.ShowUnitsOfMeasure" v-model="detail.UnitOfMeasure" :readonly="readOnly"/>
                                        </b-col>
                                    </b-row>
                                
                                </b-container>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-row>
            </b-container>
            <div class="buttonContainer" v-if="showCancelButton">
                <b-button type="submit" variant="success" class="formButton" size="sm">Submit</b-button>
                <b-button type="reset" class="formButton" size="sm">Cancel</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    name: "IndividualItemsComponent",
    props: ['itemNumber'],
    data() {
        return {
            form: {
                itemName: "",
                category: null,
                subCategory: null,
                brand: "",
                location: null,
                sku: "",
                quantity: "",
                measuredBy: "",
                notes: "",
                CreateDttm: "",
                UpdateDttm: "",
                isActive: true,
                tags: "",
                itemDetail: [],
            },
            showCancelButton: false,
            readOnly: true,
            categoryList: [{value: null, text: "Select a Category"}],
            subCategoryList: [{value: null, text: "Select a SubCategory"}],
            statusList: [{value: null, text: "Select a Status"}],
            locationList: [{value: null, text: "Select a Location"}],
        };
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault();
            if(this.form.valid){
                alert("valid");
            }
            this.showCancelButton = false;
        },
        onReset(evt){
            evt.preventDefault();
            alert("reset!");
            this.showCancelButton = false;
            this.readOnly = true;
        },
        addNewItem(){
            this.showCancelButton = true;
            this.readOnly = false;
        },
        modifyItem(){
            alert("modify item triggered!");
            this.showCancelButton = true;
            this.readOnly = false;
        },
        printForm(){
            alert("preparing to print...");
        },
        updateSubCategoryList() {
            if(this.form.category != null){
                const CategoryId = this.form.category;
                axios.post("http://localhost:49995/api/ItemManagement/GetAllSubCategoriesByCategory", {CategoryId})
                    .then(res => {
                        this.subCategoryList = [{value: null, text: "Select a SubCategory"}];
                        for(var i = 0; i < res.data.length; i++){
                            var subCatItem = {
                                value: res.data[i].Id, text: res.data[i].SubCategoryName
                            }

                            this.subCategoryList = this.subCategoryList.concat(subCatItem);
                        }
                    })
                    .catch(err => {console.log(err);});
            }
        },
        getItemDetailList() {
            if(this.form.subCategory != null){
                const SubCategoryId = this.form.subCategory;
                axios.post("http://localhost:49995/api/ItemManagement/GetItemDetailBySubCategoryId", {SubCategoryId})
                    .then(res => {
                        if(res.data.Result.length != 0){
                            this.form.itemDetail = res.data.Result;
                        } else {
                            this.form.itemDetail = [];
                        }
                    })
                    .catch()
            }

        },
    },
    beforeMount: function() {
        axios.get("http://localhost:49995/api/ItemManagement/GetAllCategories")
            .then(res => {
                for(var i = 0; i < res.data.length; i++){
                    var catItem = {
                        value: res.data[i].Id, text: res.data[i].CategoryName
                    }

                    this.categoryList = this.categoryList.concat(catItem);
                }
            })
            .catch(err => {console.log(err)});

        axios.get("http://localhost:49995/api/ItemManagement/GetAllLocations")
            .then(res => {
                for(var i = 0; i < res.data.Result.length; i++){
                    var locItem = {
                        value: res.data.Result[i].Id, text: res.data.Result[i].LocationName
                    }

                    this.locationList = this.locationList.concat(locItem);
                }
            })
            .catch(err => {console.log(err);});
    },
    watch: {
        itemNumber: function(){
            const Id = this.itemNumber;
            if(Id != ""){
            axios.post("http://localhost:49995/api/ItemManagement/GetItemById", {Id})
                .then(res => {
                    if(res.data.Result != ""){
                        this.form.itemName = res.data.Result.ItemName;
                        this.form.category = res.data.Result.CategoryId;
                        this.form.subCategory = res.data.Result.SubCategoryId;
                        this.form.brand = res.data.Result.BrandName;
                        this.form.location = res.data.Result.LocationId;
                        this.form.quantity = res.data.Result.Quantity;
                        this.form.measuredBy = res.data.Result.MeasuredBy;
                        this.form.sku = res.data.Result.Sku;
                        this.form.notes = res.data.Result.Notes;
                        this.form.isActive = res.data.Result.StatusCd == "1" ? true : false;
                        this.form.CreateDttm = moment(res.data.Result.CreateDttm).format("DD-MMM-YYYY");
                        this.form.UpdateDttm = moment(res.data.Result.UpdateDttm).format("DD-MMM-YYYY");
                        this.form.itemDetail = res.data.Result.ItemDetail;
                    }
                }).catch(err => {console.log(err)});
            }
            else {
                this.form = {
                itemName: "",
                category: "",
                subCategory: "",
                brand: "",
                location: "",
                quantity: "",
                measuredBy: "",
                notes: "",
                CreateDttm: "",
                UpdateDttm: "",
                isActive: false,
                tags: "",
                itemDetail: [],
            }
            }
        }
    }
}
</script>

<style scoped>
    .itemsContainer {
        background-color: #ffffff;
        padding: 20px;
        height: 630px;
        overflow: auto;
    }

    .itemsContainer::-webkit-scrollbar
    {
        width: 2px;
        background-color: #F5F5F5;
    }

    .itemsContainer::-webkit-scrollbar-thumb
    {
        background-color: #283593;
        border: 1px solid #283593;
    }

    .mainDetailsContainer {
        padding: 0px;
    }

    .imageContainer {
        width: 100%;
        padding-top: 100%;
        border: 1px solid black;
        position: relative;
        margin-top: 20px;
    }

    .imageContainer img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .labelColumn {
        line-height: 3;
    }

    .inputColumn {
        padding: 0px;
    }

    .generalInfoContainer {
        margin-bottom: 5px;
    }
    
    .miscItemDetails {
        padding-top: 30px;
    }

    .detailedInformationContainer {
        padding-top: 20px;  
    }

    .icons {
        font-size: 24px;
        cursor: pointer;
        margin-top: 15px;
        margin-right: 15px;
        float: right;
    }

    .formButton {
        margin-top: 10px;
        margin-right: 15px;
    }

    .buttonContainer {
        float: right;
    }
</style>
