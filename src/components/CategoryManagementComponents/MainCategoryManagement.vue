<template>
    <b-container fluid class="borders whiteWrapper">
        <b-row class="auto-height">
            <b-col class="no-intent">
                <h2 class="headline">Main Categories</h2>
                <hr>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container fluid>
                    <b-row>
                        <b-col cols="auto" v-for="cat of cats" v-bind:key="cat.catName" class="list">
                            <span>{{ cat.catName }}</span>
                            <font-awesome-icon class="icons appPrimaryTextColor delete-btn-margin" icon="times-circle" v-on:click="deleteCategory('Category meant to be deleted now')"/>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-row>
            <b-button class="button appPrimaryBackgroundColor" v-on:click="newCategory('Add new Category')">Add New Category</b-button>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "MainCategoryManagement",
    data() {
        return {
            cats: [
                { id: 1, catName: "Hardware" },
                { id: 2, catName: "Electrical" },
                { id: 3, catName: "Industrial Tools" },
                { id: 4, catName: "Auto Parts" },
            ]
        }
    },
    methods: {
        newCategory: function (message) {
            alert(message)
        },
        deleteCategory: function (message) {
            alert(message)
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
        padding: 0px 5px 0px 7px;
        margin: 5px 20px 10px 0px;
        border-style: solid;
        border-color: #7c7c7c;
        border-width: 0.5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: bold;
        color:  #283593;
        background-color: #dee1f1;
    }

    .delete-btn-margin {
        margin: 5px 0px 0px 15px;
    }
</style>