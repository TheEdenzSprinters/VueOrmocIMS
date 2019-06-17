<template>
    <div class="resultsContainer">
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="itemList" 
            show-empty
            @row-selected="rowSelected" 
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage">
        </b-table>

        <b-pagination v-model="currentPage"
            :total-rows="recordCount"
            @change="getNextBatchSearchResult"
            align="right"
            v-if="showPagination"
            size="md"
            first-text="FIRST"
            next-text="NEXT"
            prev-text="PREVIOUS"
            last-text="LAST"
            :per-page="perPage">
        </b-pagination>
    </div>
</template>

<script>
import axios from "axios";
import { host } from "../../variables.js";

export default {
    name: 'ItemSearchResultForItemRequest',
    props: ['itemSearchList'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'Item ID'}, 'ItemName', 'Brand', {key:'LocationName', label:'Location'}, 'StocksLeft'],
            selected: [],
            itemList: [],
            currentPage: 1,
            recordCount: 0,
            perPage: 10,
            showPagination: false
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item-search', this.selected);
        },
        getNextBatchSearchResult(page){
            if(this.itemList.length < this.recordCount){
                const query = {
                    ItemName: this.itemSearchList.ItemName,
                    NextBatch: page
                }

                axios.post(host + "api/ItemManagement/ItemsBySimpleSearch", query)
                    .then( res => {
                        this.itemList = this.itemList.concat(res.data.SearchResult);
                    }).catch( err => {console.log(err);});
            }
        }
    },
    watch: {
        itemSearchList: function(){
            if(this.itemSearchList.itemSearchResult.RecordCount > this.perPage){
                this.showPagination = true;
            }

            this.recordCount = this.itemSearchList.itemSearchResult.RecordCount;
            this.itemList = this.itemSearchList.itemSearchResult.SearchResult;
            this.currentPage = 1;
        }
    }
}
</script>

<style scoped>
    .resultsContainer {
        font-size: 12px;
    }
</style>

