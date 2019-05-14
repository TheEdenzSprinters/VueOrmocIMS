<template>
    <b-container fluid class="whiteWrapper">
        <b-row v-if="this.focusArray.length === 0" align-v="center" class="text-center details borders">
            <b-col>
                Select an item to see complete details.
            </b-col>
        </b-row>
        <b-row v-else class="borders">
            <b-col v-if="this.focusArray[0].CategoryID > 0">
                <h2 class="headline">{{ this.focusArray[0].SubCategoryName }}</h2>
                <br>
                    Parent Category: {{ this.categorySub }}
                <br>
                    Created on: {{ this.focusArray[0].CreateDttm }}
                <br>
                    Last updated: {{ this.focusArray[0].UpdateDttm }}
                <br><br>
                <h2 class="headline">Units of Measure</h2>
                    {{ this.focusArray[0].ItemDetails }} units list here
                <br>
                <br>
            </b-col>
            <b-col v-else>
                <h2 class="headline">{{ this.focusArray[0].CategoryName }}</h2>
                <br>
                    Created on: {{ this.focusArray[0].CreateDttm }}
                <br>
                    Last updated: {{ this.focusArray[0].UpdateDttm }}
                <br><br>
                <h2 class="headline">Sub-Categories</h2>
                    {{ this.focusArray[0].SubCategories }} sub-cat list here
                <br>
                <br>
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

    .details {
        height: 300px;
        font-style: italic;
        color:  #283593;
        font-size: 12px;
    }

    .headline {
        color:  #283593;
        padding: 10px 0px 0px 15px;
        font-weight: bold;
        font-size: 24px;
    }
</style>