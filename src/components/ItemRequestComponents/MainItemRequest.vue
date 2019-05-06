<template>
    <b-container fluid class="mainItemContainer">
        <b-row>
            <b-col sm="6">
                <b-container fluid class="whiteWrapper">
                    <b-row>
                        <b-col sm="12">
                            <b-row>
                                <b-col sm="12">
                                    <GeneralItemRequestComponent v-on:items-list="showResults"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col sm="12">
                                    <SearchRequestResult v-on:items-list="showResults"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col sm="12">
                                    <ItemRequestNotFulfilled v-on:items-list="showResults"/>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>            
                <b-col sm="6">
                    <b-container fluid class="whiteWrapper">
                        <b-row>
                            <b-col sm="12">
                                <b-row>
                                    <b-col sm="12">
                                        <QuotationDetails v-on:items-list="showResults"/>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col sm="12">
                                <b-row>
                                    <b-col sm="12">
                                        <ItemStockBalance v-on:items-list="showResults"/>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col sm="12">
                                <b-row>
                                    <b-col sm="12">
                                        <QuotationLists v-on:items-list="showResults"/>
                                    </b-col>
                                </b-row>
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


export default {
    name: "MainItemRequest",
    components: {GeneralItemRequestComponent, SearchRequestResult,ItemRequestNotFulfilled,QuotationDetails,ItemStockBalance,QuotationLists }
}
</script>
