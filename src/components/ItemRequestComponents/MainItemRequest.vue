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
                                                <ItemRequestNotFulfilled v-bind:item-request-delinquents="itemRequestDelinquents"/>
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
                                        <b-row>
                                            <b-col sm="12"> <h4>IR10000001</h4>
                                                <QuotationDetails/>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>Items</h4>
                                                <ItemStockBalance/>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>Quotations</h4>
                                                <QuotationLists/>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>Price Scoresheet</h4>
                                                <PriceScoresheet/>
                                            </b-col>
                                        </b-row>
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
import QuotationDetails from "./QuotationDetails";
import ItemStockBalance from "./ItemStockBalance";
import QuotationLists from "./QuotationLists";
import PriceScoresheet from "./PriceScoresheet";
import axios from "axios";


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
                    QuotationDetails,
                    ItemStockBalance,
                    QuotationLists,
                    PriceScoresheet},
    methods: {
        getItemRequestSearchResult(result){
            this.itemRequestSearchList = result;
        },
        viewItemRequestDetails(selected){
            if(item.length > 0){
                this.itemRequestId = item[0].Id;
            }
            else {
                this.itemRequestId = 0;
            }
        }
    },
    beforeMount: function(){
        axios.get("http://localhost:50006/api/PurchaseOrderManagement/GetItemRequestFormDelinquents")
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
