<template>
    <b-container fluid class="borders whiteWrapper">
        <b-row class="auto-height">
            <b-col class="no-intent">
            <h2 class="headline">Sub-Categories</h2>
            <hr>
            </b-col>
        </b-row>
        <b-row>
            Existing Sub-Categories here
        </b-row>
        <b-row>
            <b-button class="button appPrimaryBackgroundColor" v-on:click="ItemNameSearch(itemName)">Add New Category</b-button>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: "SubCategoryManagement"
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
        padding: 15px 0px 0px 15px;
        font-weight: bold;
        font-size: 24px;
    }

    .borders {
        border-style: solid;
        border-color: #9c9b9b;
        border-width: 1px;
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
        margin: 5px 0px;
    }
</style>