<template>
    <b-container fluid class="whiteContainer">
        <b-row>
            <b-col sm="12">
                <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                    <b-row class="containerWrapper">
                        <b-col class="whiteWrapper" sm="6">
                            <b-container fluid class="searchColumn">
                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>Filters</h4>
                                                <GeneralItemRequestComponent v-on:items-list="showResults"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col sm="12">
                                                <SearchRequestResult v-on:items-list="showResults"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col sm="12"> <h4>Item Request Not Fulfilled</h4>
                                            <ItemRequestNotFulfilled v-on:items-list="showResults"/>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>            
                        <b-col sm="6" class="whiteWrapper">
                            <b-container fluid class="searchColumn">
                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>IR10000001</h4>
                                                <QuotationDetails v-on:items-list="showResults"/>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>Items</h4>
                                                <ItemStockBalance v-on:items-list="showResults"/>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>Quotations</h4>
                                                <QuotationLists v-on:items-list="showResults"/>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col sm="12">
                                        <b-row>
                                            <b-col sm="12"> <h4>Price Scoresheet</h4>
                                                <PriceScoresheet v-on:items-list="showResults"/>
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


export default {
    name: "MainItemRequest",
    components: {GeneralItemRequestComponent, SearchRequestResult,ItemRequestNotFulfilled,QuotationDetails,ItemStockBalance,QuotationLists,PriceScoresheet}
}
</script>

<style scoped>
 .searchColumn {
        max-height: 651px;
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
    .mainItemContainer{
        padding: 10px;
    }
    .whiteWrapper{
        background: none;

    }

    

</style>
