<template>
    <b-container fluid class="whiteWrapper">
        <b-row v-if="this.focusCat.length === 0 && this.focusSubCat.length === 0" align-v="center" class="text-center details borders">
            <b-col>
                Select an item to see complete details.
            </b-col>
        </b-row>
        <b-row v-else-if="this.focusCat.length > 0 && this.focusSubCat.length === 0" class="borders">
            <b-col>
                <h2 class="headline">{{ this.focusCat[0].CategoryName }}</h2>
                <br>
                    Created on: {{ this.focusCat[0].CreateDttm }}
                <br>
                    Last updated: {{ this.focusCat[0].UpdateDttm }}
                <br><br>
                <h2 class="headline">Sub-Categories</h2>
                    {{ this.focusCat[0].SubCategories }}
                <br>
                <br>
            </b-col>
        </b-row>
        <b-row v-else class="borders">
            <b-col>
                <h2 class="headline">{{ this.focusSubCat[0].SubCategoryName }}</h2>
                <br>
                    Created on: {{ this.focusSubCat[0].CreateDttm }}
                <br>
                    Last updated: {{ this.focusSubCat[0].UpdateDttm }}
                <br><br>
                <h2 class="headline">Units of Measure</h2>
                    {{ this.focusSubCat[0].ItemDetails }}
                <br>
                <br>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "DetailsCategoryManagement",
    props: ['focusCat', 'focusSubCat'],
    data() {
        return {
        }
    },
    methods: {
    },
    mount() {
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