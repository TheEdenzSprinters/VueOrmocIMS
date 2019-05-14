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
                    <b-row class="details-item-child">
                        {{ this.focusArray[0].ItemDetails }} units list here
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
                    <b-row class="details-item-child">
                        {{ this.focusArray[0].SubCategories }} sub-cat list here
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "DetailsCategoryManagement",
    props: ['catList','focusArray'],
    data() {
        return {
            catNameFiltered: [],
            categorySub: '',
        }
    },
    methods: {
        getCatBySub() {
            this.catNameFiltered = this.catList.filter(e => { return e.Id === this.focusArray[0].CategoryID});
            this.categorySub = this.catNameFiltered[0].CategoryName;
        }
    },
    updated() {
        if(this.focusArray[0].CategoryID > 0) {
            this.getCatBySub();
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
        padding: 0px 5px 0px 5px;
        font-size: 14px;  
    }
</style>