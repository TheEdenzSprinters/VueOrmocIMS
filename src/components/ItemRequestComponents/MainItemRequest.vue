<template>
    <b-container fluid class="whiteContainer">
        <b-row>
            <b-col sm="12">
                <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                    <b-row class="containerWrapper">
                        <b-col class="whiteWrapper customContainerPadding" sm="6">
                            <b-container fluid>
                                <b-row>
                                    <b-col sm="12" class="splitFirstColumnContainer appSecondaryBackgroundColor" style="margin-bottom: 12px;">
                                        <b-container fluid>
                                            <b-row>
                                                <b-col sm="12"> <h4 class="customHeaderMargin">Filters</h4>
                                                    <GeneralItemRequestComponent v-on:item-request-list="getItemRequestSearchResult"/>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col sm="12">
                                                    <SearchRequestResult v-bind:item-request-search-list="itemRequestSearchList" v-on:selected-item-search="viewItemRequestDetails" />
                                                </b-col>
                                            </b-row>
                                        </b-container>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col sm="12" class="splitFirstColumnContainer appSecondaryBackgroundColor">
                                        <b-container fluid>
                                            <b-row>
                                                <b-col sm="12"> <h4>Item Request Not Fulfilled</h4>
                                                <ItemRequestNotFulfilled v-bind:item-request-delinquents="itemRequestDelinquents" v-on:selected-item-delinquent="viewItemRequestDetails"/>
                                                </b-col>
                                            </b-row>
                                        </b-container>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>            
                        <b-col sm="6" class="whiteWrapper">
                            <b-container fluid class="searchColumn appSecondaryBackgroundColor">
                                <b-row>
                                    <b-col sm="12">
                                        <ItemRequestDetails v-bind:item-request-number="itemRequestId"/>
                                    </b-col>
                                </b-row>
                             </b-container>
                        </b-col>            
                    </b-row>        
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import GeneralItemRequestComponent from "./GeneralItemRequestComponent";
import SearchRequestResult from "./SearchRequestResult";
import ItemRequestNotFulfilled from "./ItemRequestNotFulfilled";
import ItemRequestDetails from "./ItemRequestDetails";

import axios from "axios";
import { host2 } from "../../variables.js";

export default {
    name: "MainItemRequest",
    data() {
        return{
            itemRequestSearchList: [],
            itemRequestDelinquents: [],
            itemRequestId: 0,
        }
    },
    components: {GeneralItemRequestComponent, 
                    SearchRequestResult,
                    ItemRequestNotFulfilled,
                    ItemRequestDetails,
                },
    methods: {
        getItemRequestSearchResult(result){
            this.itemRequestSearchList = result;
        },
        viewItemRequestDetails(selected){
            if(selected.length > 0){
                this.itemRequestId = selected[0].Id;
            }
            else {
                this.itemRequestId = 0;
            }
        }
    },
    beforeMount: function(){
        const currentPage = 1;
        axios.post(host2 + "api/PurchaseOrderManagement/GetItemRequestFormDelinquents", {currentPage})
            .then( res => {
                this.itemRequestDelinquents = res.data;
            })
            .catch(err => { console.log(err); });
    }
}
</script>

<style scoped>
    .customContainerPadding {
        padding-right: 0px;
    }

    .splitFirstColumnContainer {
        height: 320px;
        overflow: auto;
        padding-top: 15px;
    }

    .splitFirstColumnContainer::-webkit-scrollbar
    {
        width: 2px;
        background-color: #F5F5F5;
    }

    .splitFirstColumnContainer::-webkit-scrollbar-thumb{
        background-color: #283593;
        border: 1px solid #283593;
    }

    .searchColumn {
        max-height: 651px;
        padding: 20px;
        overflow: auto;
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

    .mainItemContainer{
        padding: 10px;
    }

    .whiteWrapper{
        background: none;
    }

    .customHeaderMargin{
        margin-bottom: 5px;
    }
</style>
