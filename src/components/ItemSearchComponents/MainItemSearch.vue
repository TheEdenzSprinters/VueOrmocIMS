<template>
    <b-container fluid class="whiteWrapper">
        <b-row>
            <b-col lg="12" sm="12">
                <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                    <b-row>
                        <b-col lg="6" md="6" sm="12" class="whiteWrapper">
                            <b-container fluid class="searchColumn">
                                <b-row>
                                    <b-col lg="12" md="12" sm="12">
                                        <GeneralSearchInputComponent v-on:items-list="showResults"/>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="12" md="12" sm="12" class="advancedSearchContainer">
                                        <span v-b-toggle.advanceSearch class="advancedSearchToggle">Advanced Search</span>
                                        <hr class="advancedSearchDivider"/>
                                        <b-collapse id="advanceSearch">
                                            <ItemAdvancedSearch/>
                                        </b-collapse>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="12" md="12" sm="12">
                                        <ItemSearchResults v-bind:item-list="itemList" v-on:selected-item="viewItemDetails"/>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>
                        <b-col lg="6" md="6" sm="12" class="whiteWrapper">
                            <IndividualItemsComponent v-bind:item-number="itemId"/>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import GeneralSearchInputComponent from "./GeneralSearchInputComponent";
import ItemAdvancedSearch from "./ItemAdvancedSearch";
import ItemSearchResults from "./ItemSearchResults";
import IndividualItemsComponent from "./IndividualItemsComponent"

export default {
    name: "MainItemSearch",
    data() {
        return {
            itemList: [],
            itemId: 0,
        }
    },
    components: {GeneralSearchInputComponent, ItemAdvancedSearch, ItemSearchResults, IndividualItemsComponent},
    methods: {
        showResults(results) {
            if(results.length !== 0){
                this.itemList = results;
            }
        },
        viewItemDetails(item){
            if(item.length > 0){
                this.itemId = item[0].Id;
            } else {
                this.itemId = 0;
            }
        }
    },
}
</script>

<style scoped>
    .whiteWrapper {
        background-color: none;
        font-size: 12px;
    }

    .mainItemContainer{
        padding: 20px 15px;
        height: 672px;
    }
    
    .searchColumn {
        max-height: 630px;
        padding: 20px;
        overflow: auto;
        background-color: #ffffff;
    }

    .searchColumn::-webkit-scrollbar
    {
        width: 2px;
        background-color: #F5F5F5;
    }

    .searchColumn::-webkit-scrollbar-thumb
    {
        background-color: #283593;
        border: 1px solid #283593;
    }

    .advancedSearchContainer {
        margin:15px 0px;
        text-align: center;
    }
    
    .advancedSearchContainer span {
        font-size: 12px;
    }

    hr.advancedSearchDivider {
        border: 0.5px solid #283593;
        margin: 5px 0px;
    }

    .advancedSearchToggle {
        cursor: pointer;
    }
</style>
