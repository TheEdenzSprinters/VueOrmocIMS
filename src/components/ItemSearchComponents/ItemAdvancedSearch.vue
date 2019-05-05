<template>
    <div>
        <b-form @submit="submitAdvancedSearch" class="advancedSearchFormContainer">
            <b-container fluid class="formInputGroup">
                <b-row>
                    <b-col lg="6" md="6" sm="12">
                        <label for="itemNumber">Item Number</label><b-input type="text" id="itemNumber" name="itemNumber" v-model="itemNumber" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="itemName">Item Name</label><b-input type="text" id="itemName" name="itemName" v-model="itemName" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="category">Category</label><b-input type="text" id="category" name="category" v-model="category" class="mb-2 mr-sm-2 mb-sm-0"/> 
                        <label for="subCategory">Sub-Category</label><b-input type="text" id="subCategory" name="subCategory" v-model="subCategory" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="tags">Tag</label><b-input type="text" id="tags" name="tags" v-model="tags" class="mb-2 mr-sm-2 mb-sm-0"/>
                    </b-col>
                    <b-col lg="6" md="6" sm="12">
                        <label for="sku">SKU</label><b-input type="text" id="sku" name="sku" v-model="sku" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="brand">Brand</label><b-input type="text" id="brand" name="brand" v-model="brand" class="mb-2 mr-sm-2 mb-sm-0"/>
                        <label for="status">Status</label><b-input type="text" id="status" name="status" v-model="status" class="mb-2 mr-sm-2 mb-sm-0" />
                        <label for="location">Location</label><b-input type="text" id="location" name="location" v-model="location" class="mb-2 mr-sm-2 mb-sm-0"/>
                    </b-col>
                </b-row>
            </b-container>
            <b-button type="submit" class="appPrimaryBackgroundColor advancedSearchBtn" size="sm">SEARCH</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "ItemAdvancedSearch",
    data() {
        return {
            itemName: '',
            brand: '',
            sku: '',
            category: '',
            subCategory: '',
            status: '',
            location: '',
            tags: ''
        }
    },
    methods: {
        submitAdvancedSearch(evt){
            evt.preventDefault();
            alert("test");
        }
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
