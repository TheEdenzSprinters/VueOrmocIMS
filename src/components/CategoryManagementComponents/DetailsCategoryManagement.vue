<template>
    <b-container fluid class="whiteWrapper">
        <b-row v-if="this.focusArray.length === 0" align-v="center" class="text-center details-default borders">
            <b-col>
                Select an item to see complete details.
            </b-col>
        </b-row>
        <b-row v-else class="borders">
            <b-col v-if="this.focusArray[0].CategoryID > 0">
                <b-container fluid class="details-default">
                    <b-row>
                        <h2 class="headline">{{ this.focusArray[0].SubCategoryName }}</h2>
                    </b-row>
                    <b-row class="details-item-child">
                        Parent Category: {{ this.categorySub }}
                        <br>
                        Created on: {{ this.focusArray[0].CreateDttm }}
                        <br>
                        Last updated: {{ this.focusArray[0].UpdateDttm }}
                    </b-row>
                    <b-row>
                        <h2 class="headline headline-2">Units of Measure</h2>
                    </b-row>
                    <b-row>
                        <b-container fluid>
                            <b-row v-for="measureFromList of this.measuresList" :key="measureFromList.measure" class="measure-row">
                                <b-col cols="3" class="details-item-child measure">
                                    {{ measureFromList.measure }}:
                                </b-col>
                                <b-col offset="1" cols="4" class="borders measure-type">
                                    <p class="measure-values">{{ measureFromList.unit }}</p>
                                </b-col>
                           </b-row>
                        </b-container>
                    </b-row>
                    <b-row class="details-item-child">
                        <b-button class="button appPrimaryBackgroundColor">Add new Unit of Measure</b-button>
                    </b-row>
                </b-container>
            </b-col>
            <b-col v-else>
                <b-container fluid class="details-default">
                    <b-row>
                        <h2 class="headline">{{ this.focusArray[0].CategoryName }}</h2>
                    </b-row>
                    <b-row class="details-item-child">
                        Created on: {{ this.focusArray[0].CreateDttm }}
                        <br>
                        Last updated: {{ this.focusArray[0].UpdateDttm }}
                    </b-row>
                    <b-row>
                        <h2 class="headline headline-2">Sub-Categories</h2>
                    </b-row>
                        <b-row v-for="subCat of subCatsByCat" :key="subCat.index" class="details-item-child list">
                            <span>{{ subCat }}</span>
                        </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    name: "DetailsCategoryManagement",
    props: ['catList','focusArray'],
    data() {
        return {
            catNameFiltered: [],
            categorySub: '',
            subCatsByCat: [],
            measuresList: [],
        }
    },
    methods: {
        getCatBySub() {
            this.catNameFiltered = this.catList.filter(cat => { return cat.Id === this.focusArray[0].CategoryID});
            this.categorySub = this.catNameFiltered[0].CategoryName;
        },
        getSubByCat(catId) {
            axios.post("http://localhost:49995/api/ItemManagement/GetAllSubCategoriesByCategory", {CategoryId: catId})
            .then(res => {
                for(var i = 0; res.data.length > i; i++ ){
                    this.subCatsByCat = this.subCatsByCat.concat(res.data[i].SubCategoryName);
                }
            })
            .catch (error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        getUnits(subCatId) {
            axios.post("http://localhost:49995/api/ItemManagement/GetItemDetailBySubCategoryId", {SubCategoryId: subCatId})
            .then(res => {
                if(res.data.Result.length > 0) {
                    for(var i = 0; res.data.Result.length > i; i++) {
                        this.measuresList = this.measuresList.concat({measure: res.data.Result[i].ItemDetailName, unit: res.data.Result[i].UnitOfMeasure})
                    }
                }
            })
            .catch (error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
    },
    watch: {
        focusArray: function() {
            // Get Sub-cat list of the selected Category
            if(this.focusArray[0].Category !== null) {
                // Empty the array before assing new data
                this.subCatsByCat = []; // reset array
                this.getSubByCat(this.focusArray[0].Id);
            }
            if(this.focusArray[0].CategoryID > 0) {
                // Get Category name of the selected Sub-cat
                this.getCatBySub();
                // Get Units of Measure
                this.measuresList = []; // reset array
                this.getUnits(this.focusArray[0].Id)
            }

            // Reformat data for items
            this.focusArray[0].CreateDttm = moment(this.focusArray[0].CreateDttm).format("DD-MMM-YYYY");
            this.focusArray[0].UpdateDttm = moment(this.focusArray[0].UpdateDttm).format("DD-MMM-YYYY");
        }
    }
}
</script>

<style scoped>
    .whiteWrapper {
        height: 100%;
        background-color: #ffffff;
    }

    .borders {
        border-style: solid;
        border-color: #9b9b9b;
        border-width: 0.5px;
        padding-bottom: 10px;
    }

    .details-default {
        min-height: 300px;
        font-style: italic;
        color:  #283593;
        font-size: 12px;
    }

    .details-item {
        color:  #283593;
        font-size: 12px;
        padding: 10px 0px 0px 10px;
    }

    .details-item-child {
        font-style: normal;
        padding: 0px 0px 10px 10px;
    }

    .list {
        padding-bottom: 0px;
    }

    .headline {
        color:  #283593;
        padding: 10px 0px 0px 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
    }

    .headline-2 {
        font-size: 18px;
    }
    
    .button {
        margin-top: 10px;
        padding: 0px 10px;
        font-size: 12px;  
    }

    .measure {
        padding: 0px 0px 0px 10px;
    }

    .measure-type {
        padding-bottom: 0px;
    }

    .measure-values {
        margin: 0px 10px 0px 10px;
        font-style: normal;
    }

    .measure-row {
        margin-bottom: 2px;
    }
</style>