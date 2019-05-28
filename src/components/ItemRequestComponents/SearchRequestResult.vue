<template>
    <div class="resultsContainer">
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="itemRequestList"
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
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'ItemSearchResults',
    props: ['itemRequestSearchList'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'Item Request ID'}, 'Title', 'Status', {key:'DateCreated', label:'Date Created'}],
            selected: [],
            itemRequestList: [],
            currentPage: 1,
            recordCount: 0,
            showPagination: false,
            perPage: 10,
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item-search', this.selected);
        },
        getNextBatchSearchResult(page){
            if(this.itemRequestList.length < this.recordCount){
                let form = {
                    Id: this.itemRequestSearchList.form.Id,
                    Title:  this.itemRequestSearchList.form.Title,
                    StatusCd: this.itemRequestSearchList.form.StatusCd,
                    DateFrom: this.itemRequestSearchList.form.DateFrom,
                    DateTo: this.itemRequestSearchList.form.DateTo,
                    NextBatch: page
                }

                axios.post("http://localhost:50006/api/PurchaseOrderManagement/ItemRequestFormSearch", form)
                    .then( res => {
                        for(var i = 0; i < res.data.SearchResult.length; i++){
                            let singleResult = res.data.SearchResult[i];
                            singleResult.DateCreated = moment(singleResult.DateCreated).format("MMM DD, YYYY");
                            this.itemRequestList = this.itemRequestList.concat(singleResult);
                        }
                    }). catch( err => {console.log(err);});
            }
        }
    },
    watch: {
        itemRequestSearchList: function(){
            if(this.itemRequestSearchList.itemRequestList.RecordCount > this.perPage){
                this.showPagination = true;
            }

            this.recordCount = this.itemRequestSearchList.itemRequestList.RecordCount;
            this.itemRequestList = this.itemRequestSearchList.itemRequestList.SearchResult;
            this.currentPage = 1;

            for(var i = 0; i < this.itemRequestList.length; i++){
                this.itemRequestList[i].DateCreated = moment(this.itemRequestList[i].DateCreated).format("MMM DD, YYYY");
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
