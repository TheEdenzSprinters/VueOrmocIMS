<template>
<div class="resultsContainer">    
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="items" 
            show-empty
            > 
           
        </b-table> 

      
    </div>
</template>

<script>
export default {
    name: 'QuotationLists',
    data() {
        return {
            fields: [{key:'QuotationID' ,label: 'QuotationID', formatter: 'QuotationID'}, 'Quotation Title', 'Status','Sent To','Notes'],
            items: [
                {ItemRequestID: 1, Title: 'Hardiflex 8x6 ft', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemRequestID: 2, Title: 'Omni Resistor', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemRequestID: 3, Title: 'Ace Small Pliers', Status: 'Active', DateCreated: '27 Apr 2019'},
                                              
            ],
            selected: []
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item', this.selected);
        }
    }
}

</script>

<style scoped>
    .resultsContainer {
        font-size: 10px;
    }
    .cell{
        line-height: 14px;
    }
    .tableHeader{
        font-size: 16px;
    }
</style>