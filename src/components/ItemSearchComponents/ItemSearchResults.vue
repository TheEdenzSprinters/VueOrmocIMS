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
import moment from "moment";

export default {
    name: 'ItemSearchResults',
    props: ['itemSearchList'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'Item ID'}, 'ItemName', 'Brand', 'Status', {key:'CreateDttm', label:'Date Created'}],
            selected: [],
            itemList: [],
            currentPage: 1,
            perPage: 10,
            showPagination: false,
            recordCount: 0,
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item', this.selected);
        },
        getNextBatchSearchResult(page){
            if(this.itemList.length < this.recordCount){
                if(typeof(this.itemSearchList.ItemName) !== "undefined"){
                    const query = {
                        ItemName: this.itemSearchList.ItemName,
                        NextBatch: page
                    }

                    axios.post("http://localhost:49995/api/ItemManagement/ItemsBySimpleSearch", query)
                        .then( res => {
                            for(var i = 0; i < res.data.SearchResult.length; i++){
                                let singleResult = res.data.SearchResult[i];
                                singleResult.DateCreated = moment(singleResult.DateCreated).format("MMM DD, YYYY");
                                this.itemList = this.itemList.concat(singleResult);
                            }
                        }).catch( err => {console.log(err);});
                }
                else {
                    let form = this.itemSearchList.form;
                    form.NextBatch = page;

                    axios.post("http://localhost:49995/api/ItemManagement/ItemsByAdvancedSearch", form)
                        .then( res => {
                            for(var i = 0; i < res.data.SearchResult.length; i++){
                                let singleResult = res.data.SearchResult[i];
                                singleResult.DateCreated = moment(singleResult.DateCreated).format("MMM DD, YYYY");
                                this.itemList = this.itemList.concat(singleResult);
                            }
                        }).catch( err => {console.log(err);});
                }
            }
        }
    },
    watch: {
        itemSearchList: function() {
            if(this.itemSearchList.itemSearchResult.RecordCount > this.perPage){
                this.showPagination = true;
            }

            this.recordCount = this.itemSearchList.itemSearchResult.RecordCount;
            this.itemList = this.itemSearchList.itemSearchResult.SearchResult;
            this.currentPage = 1;
            
            for(var i = 0; i < this.itemList.length; i++){
                this.itemList.CreateDttm = moment(this.itemList.CreateDttm).format("MMM DD, YYYY");
            }
        }
    }
}
</script>

<style scoped>
    .resultsContainer {
        font-size: 12px;
    }
</style>

