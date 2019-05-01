<template>
    <b-container fluid class="borders whiteWrapper">
        <b-row class="auto-height">
            <b-col class="no-intent">
            <h2 class="headline">Sub-Categories</h2>
            <hr>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container>
                    <b-row class="headline">
                        Hardware
                    </b-row>
                    <b-row>
                        <b-col cols="auto" class="list">
                            Plywood
                        </b-col>
                        <b-col cols="auto" class="list">
                            Lumber
                        </b-col>
                        <b-col cols="auto" class="list">
                            Adhesives
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-row>
            <b-button class="button appPrimaryBackgroundColor" v-on:click="">Add New $MainCategory Sub-Category</b-button>
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
        margin: 5px 0px 10px;
    }

    .list {
        padding: 2px 20px 2px 10px;
        margin: 0px 20px 10px 0px;
        border-style: solid;
        border-color: #7c7c7c;
        border-width: 0.5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color:  #283593;
        background-color: #ececec;
    }
</style>