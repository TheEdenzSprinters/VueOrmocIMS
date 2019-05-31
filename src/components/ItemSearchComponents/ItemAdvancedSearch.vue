<template>
    <div>
        <b-form @submit="submitAdvancedSearch" class="advancedSearchFormContainer">
            <b-container fluid class="formInputGroup">
                <b-row>
                    <b-col lg="6" md="6" sm="12">
                        <label for="itemNumber">Item Number</label><b-input type="text" id="itemNumber" name="itemNumber" v-model="form.Id" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="itemName">Item Name</label><b-input type="text" id="itemName" name="itemName" v-model="form.ItemName" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="category">Category</label>
                        <b-form-select v-model="form.CategoryId" :options="categoryList" class="mb-2 mr-sm-2 mb-sm-0" v-on:change="updateSubCategoryList()"></b-form-select>
                        <label for="subCategory">Sub-Category</label>
                        <b-form-select v-model="form.SubCategoryId" :options="subCategoryList" id="subCategory" name="subCategory" class="mb-2 mr-sm-2 mb-sm-0"></b-form-select>
                        <label for="tags">Tag</label><b-input type="text" id="tags" name="tags" v-model="form.Tag" class="mb-2 mr-sm-2 mb-sm-0"/>
                    </b-col>
                    <b-col lg="6" md="6" sm="12">
                        <label for="sku">SKU</label><b-input type="text" id="sku" name="sku" v-model="form.Sku" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="brand">Brand</label><b-input type="text" id="brand" name="brand" v-model="form.Brand" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="status">Status</label>
                        <b-form-select v-model="form.StatusCd" :options="statusList" id="status" name="status" class="mb-2 mr-sm-2 mb-sm-0"></b-form-select>
                        <label for="location">Location</label>
                        <b-form-select v-model="form.Location" :options="locationList" id="location" name="location" class="mb-2 mr-sm-2 mb-sm-0"></b-form-select>
                    </b-col>
                </b-row>
            </b-container>
            <b-button type="submit" class="appPrimaryBackgroundColor advancedSearchBtn" size="sm">SEARCH</b-button>
        </b-form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ItemAdvancedSearch",
    data() {
        return {
            form: {
                Id: '',
                ItemName: '',
                Brand: '',
                Sku: '',
                CategoryId: null,
                SubCategoryId: null,
                StatusCd: null,
                Location: null,
                Tag: '',
                NextBatch: 1
            },
            itemList: [],
            categoryList: [{value: null, text: "Select a Category"}],
            subCategoryList: [{value: null, text: "Select a SubCategory"}],
            statusList: [{value: null, text: "Select a Status"}],
            locationList: [{value: null, text: "Select a Location"}],
        }
    },
    methods: {
        submitAdvancedSearch(evt){
            evt.preventDefault();
            axios.post("http://localhost:49995/api/ItemManagement/ItemsByAdvancedSearch", this.form)
            .then(res => {
                const itemResultList = {
                    form: this.form,
                    itemSearchResult: res.data
                }
                this.$emit('item-list', itemResultList);
            }).catch(err => {console.log(err);});
        },
        updateSubCategoryList() {
            if(this.form.CategoryId != null){
                const CategoryId = this.form.CategoryId;
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

        axios.get("http://localhost:49995/api/ItemManagement/GetAllItemStatus")
            .then(res => {
                for(var i = 0; i < res.data.Result.length; i++){
                    var statItem = {
                        value: res.data.Result[i].Id, text: res.data.Result[i].Status
                    }

                    this.statusList = this.statusList.concat(statItem);
                }
            })
            .catch(err => {console.log(err);});
    },
}
</script>

<style scoped>
    .advancedSearchFormContainer {
        text-align: left;
        font-size: 12px;
        padding: 10px 0px;
    }

    .advancedSearchFormContainer label {
        margin-right: 5px;
        margin-top: 10px;
    }

    .advancedSearchFormContainer input {
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .advancedSearchBtn {
        margin: 0px auto;
        display: block;
    }

    .formInputGroup{
        margin-bottom: 10px;
    }
</style>
