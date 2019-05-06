<template>
    <b-container fluid class="borders whiteWrapper">
        <b-row>
            <b-col class="no-intent">
            <h2 class="headline">Sub-Categories</h2>
            <hr>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container fluid>
                    <b-row class="headline-2">
                        Hardware
                    </b-row>
                    <!-- <b-row v-for="cat of cats" v-bind:key="cat.catName" class="headline-2">
                        <span>{{ cat.catName }}</span>
                    </b-row> -->
                    <b-row>
                        <b-col cols="auto" v-for="subCat of subCats" v-bind:key="subCat.subCatName" class="list">
                            <span>{{ subCat.subCatName }}</span>
                            <font-awesome-icon class="icons appPrimaryTextColor delete-btn-margin" icon="times-circle" v-on:click="deleteSubCategory('Sub-Category meant to be deleted now')"/>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-row>
            <b-button class="button appPrimaryBackgroundColor" v-on:click="newSubCategory('Add new Sub-Category')">Add New Hardware Sub-Category</b-button>
        </b-row>
    </b-container>
</template>

<script>
import MainCategoryManagementVue from "./MainCategoryManagement.vue";

export default {
    components: {
        MainCategoryManagementVue
    },
    name: "SubCategoryManagement",
    data() {
        return {
            subCats: [
                { id: 1, subCatName: "Plywood", catId: 1},
                { id: 2, subCatName: "Lumber", catId: 1},
                { id: 3, subCatName: "Adhesives", catId: 1},
            ]
        }
    },
    methods: {
        newSubCategory (message) {
            alert(message);
        },
        deleteSubCategory (message) {
            alert(message);
        }
    }
}

</script>

<style scoped>
    .whiteWrapper {
        height: 100%;
        background-color: #ffffff;
    }

    .no-intent {
        padding: 0;
    }

    .headline {
        color:  #283593;
        padding: 10px 0px 0px 15px;
        font-weight: bold;
        font-size: 24px;
    }

    .headline-2 {
        color:  #283593;
        padding-left: 5px;
        font-weight: bold;
        font-size: 18px;
    }

    .borders {
        border-style: solid;
        border-color: #9b9b9b;
        border-width: 0.5px;
    }

    .button {
        margin: 15px 0px 15px 15px;
        font-size: 14px;  
    }
    
    .auto-height {
        height: auto;
    }
    
    hr {
        border: 0.5px solid #283593;
        margin: 5px 0px 5px;
    }

    .list {
        padding: 2px 5px 2px 7px;
        margin: 0px 20px 10px 0px;
        border-style: solid;
        border-color: #7c7c7c;
        border-width: 0.5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color:  #283593;
        background-color: #dee1f1;
    }

    .delete-btn-margin {
        margin-left: 15px;
    }
</style>