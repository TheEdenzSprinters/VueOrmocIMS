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
import axios from "axios";
import moment from "moment";

export default {
    name: 'ItemRequestNotFulfilled',
    props: ['itemRequestDelinquents'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'ID'}, 'Title', 'Status', {key:'DateCreated', label:'Date Created'}, {key: 'TicketStatus', label:'Overall Status'}],
            selected: [],
            itemRequestList: [],
            currentPage: 1,
            perPage: 10,
            showPagination: false,
            recordCount: 0
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item-delinquent', this.selected);
        },
        getNextBatchSearchResult(page){
            if(this.itemRequestList.length < this.recordCount){
                const currentPage = page;

                axios.post("http://localhost:50006/api/PurchaseOrderManagement/GetItemRequestFormDelinquents", {currentPage})
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
        itemRequestDelinquents: function(){
            if(this.itemRequestDelinquents.RecordCount > this.perPage){
                this.showPagination = true;
            }

            this.recordCount = this.itemRequestDelinquents.RecordCount;
            this.itemRequestList = this.itemRequestDelinquents.SearchResult;
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