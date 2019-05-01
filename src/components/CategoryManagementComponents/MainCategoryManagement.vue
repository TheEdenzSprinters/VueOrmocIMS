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
                <b-container>
                    <b-row>
                        <b-col cols="auto" class="list">
                            Hardware
                        </b-col>
                        <b-col cols="auto" class="list">
                            Electrical
                        </b-col>
                        <b-col cols="auto" class="list">
                            Industrial Tools
                        </b-col>
                        <b-col cols="auto" class="list">
                            Auto Parts
                        </b-col>
                        <b-col cols="auto" class="list">
                            $MainCategory
                        </b-col>
                        <b-col cols="auto" class="list">
                            $MainCategory
                        </b-col>
                        <b-col cols="auto" class="list">
                            $MainCategory
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-row>
            <b-button class="button appPrimaryBackgroundColor" v-on:click="">Add New Category</b-button>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: "MainCategoryManagement"
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
        padding: 0px 20px 0px 10px;
        margin: 0px 20px 10px 0px;
        border-style: solid;
        border-color: #7c7c7c;
        border-width: 0.5px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: bold;
        color:  #283593;
        background-color: #ececec;
    }
</style>