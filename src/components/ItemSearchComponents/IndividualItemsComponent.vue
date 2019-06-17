<template>
    <div class="itemsContainer">
        <b-form @submit="onSubmit" @reset="onReset">
            <b-container fluid>
                <b-row>
                    <b-col lg="9" md="9" sm="9">
                        <h1 v-if="itemId == 0">
                            Item Number
                        </h1>
                        <h1 v-if="itemId != 0">
                            {{itemId}}
                        </h1>
                    </b-col>
                    <b-col lg="3" md="3" sm="3">
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="print" v-on:click="printForm"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" v-on:click="addNewItem" v-if="itemId == 0 && !showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="times" v-on:click="onReset" v-if="showCancelButton"/>
                        <font-awesome-icon class="icons appPrimaryTextColor" icon="edit" v-on:click="modifyItem" v-if="itemId != 0 && !showCancelButton"/>
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
                                                <b-form-select id="category" name="category" v-model="form.categoryId" :options="categoryList" :disabled="readOnly" :required="true" size="sm" v-on:change="updateSubCategoryList()"></b-form-select>
                                                <span class="customModalTrigger" @click="triggerAddNewCategory">Add New Category</span>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                SubCategory
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-form-select id="subCategory" name="subCategory" v-model="form.subCategoryId" :options="subCategoryList" :disabled="readOnly" :required="true" size="sm" v-on:change="getItemDetailList()"></b-form-select>
                                                <span class="customModalTrigger" @click="triggerAddNewSubCategory">Add New Sub-Category</span>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Brand
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-input block id="brand" name="brand" v-model="brandName" placeholder="Type a Brand Name" :readonly="readOnly" 
                                                     :required="true" size="sm"/>
                                                     <span class="customModalTrigger" v-if="!brandIsFocused" v-on:click="triggerBrandFocus(true)">Search for Brands</span>
                                                     <div v-if="brandIsFocused" class="simpleSearchContainer">
                                                        
                                                        <vue-bootstrap-typeahead
                                                            :data="brandNameList"
                                                            v-model="brandName"
                                                            size="sm"
                                                            v-if="!readOnly"
                                                            placeholder="Search for a Brand Name"
                                                            @hit="brandIsFocused = false"
                                                        />
                                                        <b-button @click="triggerBrandFocus(false)" variant="danger" size="sm">Cancel</b-button>
                                                     </div>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="4" md="4" sm="4" class="labelColumn">
                                                Location
                                            </b-col>
                                            <b-col lg="8" md="8" sm="8" class="inputColumn">
                                                <b-form-select id="location" name="location" v-model="form.locationId" :options="locationList" :disabled="readOnly" :required="true" size="sm"></b-form-select>
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
                                            <b-col lg="7" md="7" sm="7" class="labelColumn">
                                                Threshold Quantity
                                            </b-col>
                                            <b-col lg="5" md="5" sm="5" class="inputColumn">
                                                <b-input block id="thresholdQty" name="thresholdQty" v-model="form.thresholdQty" :readonly="readOnly" :required="true" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="7" md="7" sm="7" class="labelColumn">
                                            Warning Threshold Quantity
                                            </b-col>
                                            <b-col lg="5" md="5" sm="5" class="inputColumn">
                                                <b-input block id="warningThresholdQty" name="warningThresholdQty" v-model="form.warningThresholdQty" :readonly="readOnly" :required="true" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="7" md="7" sm="7" class="labelColumn">
                                            Unit Price
                                            </b-col>
                                            <b-col lg="5" md="5" sm="5" class="inputColumn">
                                                <b-input block id="unitPrice" name="unitPrice" v-model="form.unitPrice" :readonly="readOnly" :required="true" size="sm"/>
                                            </b-col>
                                        </b-row>
                                        <b-row class="generalInfoContainer">
                                            <b-col lg="7" md="7" sm="7" class="labelColumn">
                                            Retail Price
                                            </b-col>
                                            <b-col lg="5" md="5" sm="5" class="inputColumn">
                                                <b-input block id="retailPrice" name="retailPrice" v-model="form.retailPrice" :readonly="readOnly" :required="true" size="sm"/>
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
                                    <b-checkbox id="isActive" name="isActive" v-model="form.isActive" value="active" 
                                        unchecked-value="inactive" :disabled="!toModify" v-on:change="triggerItemStatusChange" />
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
         <b-modal id="brand-name-verify" size="md" @ok="handleAddBrandName" title="Brand Name does not exist." v-model="showWarningBrandModal">
            <p class="modalContent">Brand <span class="emphasizeText">{{this.brandName}}</span> does not exist. Do you want to add new brand?</p>
        </b-modal>
        <b-modal id="add-new-category" size="md" @ok="handleAddCategory" title="Add new Category." v-model="showAddNewCategory">
            <label for="newCategoryName">Enter New Category</label>
            <b-input id="newCategoryName" name="newCategoryName" v-model="newCategoryName"></b-input>
        </b-modal>
        <b-modal id="add-new-subcategory" size="md" @ok="handleAddSubCategory" title="Add new Sub-Category." v-model="showAddNewSubCategory">
            <label for="categoryForNewSubCategoryChoice">Choose Category for New Subcategory</label>
            <b-form-select id="categoryForNewSubCategoryChoice" name="categoryForNewSubCategoryChoice"
                v-model="categoryForNewSubCategory" :options="categoryList" :disabled="readOnly" 
                :required="true" size="sm"></b-form-select>
            <label for="newSubCategoryName">Enter New Sub-Category</label>
            <b-input id="newSubCategoryName" name="newSubCategoryName" v-model="newSubCategoryName"></b-input>
        </b-modal>
    </div>
</template>

<script>
import axios from "axios";
import moment, { parseZone } from "moment";
import _ from "underscore";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
import { host } from "../../variables.js";

export default {
    name: "IndividualItemsComponent",
    props: ['itemNumber'],
    components: {VueBootstrapTypeahead},
    data() {
        return {
            form: {
                itemName: "",
                categoryId: null,
                subCategoryId: null,
                locationId: null,
                sku: "",
                quantity: "",
                measuredBy: "",
                thresholdQty: "",
                warningThresholdQty: "",
                notes: "",
                CreateDttm: "",
                UpdateDttm: "",
                isActive: true,
                tags: "",
                unitPrice: "",
                retailPrice: "",
                itemDetail: [],
            },
            showCancelButton: false,
            readOnly: true,
            toModify: false,
            categoryList: [{value: null, text: "Select a Category"}],
            subCategoryList: [{value: null, text: "Select a SubCategory"}],
            statusList: [{value: null, text: "Select a Status"}],
            locationList: [{value: null, text: "Select a Location"}],
            itemId: 0,
            brandNameList: [],
            brandName: "",
            showWarningBrandModal: false,
            brandIsFocused: false,
            popoverShow: false,
            showAddNewCategory: false,
            showAddNewSubCategory: false,
            newCategoryName: "",
            newSubCategoryName: "",
            categoryForNewSubCategory: null,
        };
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault();
            const item = this.form;
            item.brandName = this.brandName;
            const brandName = this.brandName;

            axios.post(host + "api/ItemManagement/ValidateBrandNameExist", {BrandName: item.brandName})
                .then(res => {
                    if (parseInt(res.data.Result) > 0){
                        if(!this.toModify){
                            axios.post(host + "api/ItemManagement/InsertNewItem", item)
                                .then(res => {
                                    this.itemId = res.data.Result.Id;
                                    this.showCancelButton = false;
                                })
                                .catch(err => {
                                    console.log(err);
                                    this.showCancelButton = false;
                                })
                        } else {
                            item.Id = this.itemNumber;
                            axios.post(host + "api/ItemManagement/UpdateExistingItem", item)
                                .then(res => {
                                    this.showCancelButton = false;
                                    this.readOnly = true;
                                    this.toModify = false;
                                })
                                .catch(err => {
                                    console.log(err);
                                    this.showCancelButton = false;
                                    this.readOnly = true;
                                    this.toModify = false;
                                })
                        }
                    }
                    else {
                        this.showWarningBrandModal = true;
                    }
                })
        },
        handleAddBrandName(){
            axios.post(host + "api/ItemManagement/InsertNewBrand", {BrandName: this.brandName})
                .then(res => {
                    if(typeof(res.data) !== "undefined" && res.data.Result.Id > 0){
                        if(!this.toModify){
                            const item = this.form;
                            item.brandName = this.brandName;

                            axios.post(host + "api/ItemManagement/InsertNewItem", item)
                                .then(res => {
                                    this.itemId = res.data.Result.Id;
                                    this.showCancelButton = false;
                                })
                                .catch(err => {
                                    console.log(err);
                                    this.showCancelButton = false;
                                })
                        } else {
                            item.Id = this.itemNumber;
                            axios.post(host + "api/ItemManagement/UpdateExistingItem", item)
                                .then(res => {
                                    this.showCancelButton = false;
                                    this.readOnly = true;
                                    this.toModify = false;
                                })
                                .catch(err => {
                                    console.log(err);
                                    this.showCancelButton = false;
                                    this.readOnly = true;
                                    this.toModify = false;
                                })
                        } 
                    }
                })
        },
        onReset(evt){
            evt.preventDefault();
            this.showCancelButton = false;
            this.readOnly = true;
            this.toModify = false;
        },
        addNewItem(){
            this.showCancelButton = true;
            this.readOnly = false;
        },
        modifyItem(){
            this.showCancelButton = true;
            this.toModify = true;
            this.readOnly = false;
        },
        printForm(){
            alert("preparing to print...");
        },
        updateSubCategoryList() {
            if(this.form.categoryId != null){
                const CategoryId = this.form.categoryId;
                axios.post(host + "api/ItemManagement/GetAllSubCategoriesByCategory", {CategoryId})
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
            if(this.form.subCategoryId != null){
                const SubCategoryId = this.form.subCategoryId;
                axios.post(host + "api/ItemManagement/GetItemDetailBySubCategoryId", {SubCategoryId})
                    .then(res => {
                        if(res.data.Result.length != 0){
                            this.form.itemDetail = res.data.Result;
                        } else {
                            this.form.itemDetail = [];
                        }
                    })
                    .catch(err => {});
            }
        },
        triggerItemStatusChange() {
            const status = {Id: this.itemId, StatusCd: this.form.isActive};

            axios.post(host + "api/ItemManagement/UpdateItemStatusById", status)
                .then(res => {
                    alert(res.data.Result);
                    this.toModify = true;
                    this.readOnly = false;
                })
                .catch(err => {});
        },
        getBrandNameList(name) {
            const brandModel = {BrandName: this.brandName};

            axios.post(host + "api/ItemManagement/BrandsAutoComplete", brandModel)
                .then(res => {
                    this.brandNameList = res.data;
                })
                .catch(err => { });
        },
        triggerBrandFocus(trigger){
            if(!this.readOnly){
                this.brandIsFocused = trigger;
            }
        },
        selectedBrand(event){
            this.brandIsFocused = false;
        },
        handleAddCategory(){
            const categoryName = this.newCategoryName;
            axios.post(host + "api/ItemManagement/InsertNewCategory", {categoryName})
                .then( res => {
                    const newCategory = {value: res.data.Result.Id, text: res.data.Result.CategoryName};
                    this.categoryList = this.categoryList.concat(newCategory);
                })
        },
        handleAddSubCategory(){
            const subCategory = {
                CategoryId: this.categoryForNewSubCategory,
                SubCategoryName: this.newSubCategoryName
            }
            axios.post(host + "api/ItemManagement/InsertNewSubCategory", subCategory)
                .then( res => {
                    const newSubCategory = {value: res.data.Result.Id, text: res.data.Result.SubCategoryName};
                    if(this.form.categoryId == res.data.Result.CategoryID){
                        this.subCategoryList = this.subCategoryList.concat(newSubCategory);
                    }
                });
        },
        triggerAddNewCategory(){
            if(!this.readOnly){
                this.showAddNewCategory = true;
            }
        },
        triggerAddNewSubCategory(){
            if(!this.readOnly){
                this.showAddNewSubCategory = true;
            }
        }
    },
    beforeMount: function() {
        axios.get(host + "api/ItemManagement/GetAllCategories")
            .then(res => {
                for(var i = 0; i < res.data.length; i++){
                    var catItem = {
                        value: res.data[i].Id, text: res.data[i].CategoryName
                    }

                    this.categoryList = this.categoryList.concat(catItem);
                }
            })
            .catch(err => {console.log(err)});

        axios.get(host + "api/ItemManagement/GetAllLocations")
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
            this.readOnly = true;
            this.toModify = false;
            this.showCancelButton = false;
            const Id = this.itemNumber;
            if(Id != ""){
            axios.post(host + "api/ItemManagement/GetItemById", {Id})
                .then(res => {
                    if(res.data.Result != ""){
                        const CategoryId = res.data.Result.CategoryId;
                        axios.post(host + "api/ItemManagement/GetAllSubCategoriesByCategory", {CategoryId})
                            .then(res2 => {
                                this.subCategoryList = [{value: null, text: "Select a SubCategory"}];
                                for(var i = 0; i < res2.data.length; i++){
                                    var subCatItem = {
                                        value: res2.data[i].Id, text: res2.data[i].SubCategoryName
                                    }

                                    this.subCategoryList = this.subCategoryList.concat(subCatItem);
                                }
                                this.itemId = this.itemNumber;
                                this.subCategoryList = this.subCategoryList.concat(subCatItem);
                                this.form.itemName = res.data.Result.ItemName;
                                this.form.categoryId = res.data.Result.CategoryId;
                                this.form.subCategoryId = res.data.Result.SubCategoryId;
                                this.brandName = res.data.Result.BrandName;
                                this.form.locationId = res.data.Result.LocationId;
                                this.form.quantity = res.data.Result.Quantity;
                                this.form.measuredBy = res.data.Result.MeasuredBy;
                                this.form.sku = res.data.Result.Sku;
                                this.form.notes = res.data.Result.Notes;
                                this.form.isActive = res.data.Result.StatusCd.toLowerCase();
                                this.form.CreateDttm = moment(res.data.Result.CreateDttm).format("DD-MMM-YYYY");
                                this.form.UpdateDttm = moment(res.data.Result.UpdateDttm).format("DD-MMM-YYYY");
                                this.form.itemDetail = res.data.Result.ItemDetail;
                                this.form.thresholdQty = res.data.Result.ThresholdQty;
                                this.form.warningThresholdQty = res.data.Result.WarningThresholdQty;
                                this.form.unitPrice = res.data.Result.UnitPrice;
                                this.form.retailPrice = res.data.Result.RetailPrice;
                            })
                            .catch(err => {console.log(err);});
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
                    unitPrice: 0,
                    retailPrice: 0,
                    itemDetail: [],
                }
                this.itemId = 0;
            }
        },
        brandName: 
            _.debounce(function(name) {this.getBrandNameList(name)}, 500),
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
        line-height: 2;
    }

    .inputColumn {
        padding: 0px;
    }

    .generalInfoContainer {
        margin-bottom: 10px;
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

    .emphasizeText {
        font-weight: bold;
    }

    .modalContent {
        font-size: 14px;
    }

    .customModalTrigger {
        cursor: pointer;
    }

    .customModalTrigger:hover {
        text-decoration: underline;
    }

    .simpleSearchContainer {
        margin-top: 5px;
        padding-top: 5px;
        border-top: 1px solid #efefef
    }
</style>
