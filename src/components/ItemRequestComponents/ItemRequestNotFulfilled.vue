<template>
<div class="resultsContainer">   
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="itemRequestDelinquents" 
            show-empty
            @row-selected="rowSelected"
            :fields="fields"
           >            
        </b-table> 

      
    </div>
</template>

<script>
export default {
    name: 'ItemRequestNotFulfilled',
    props: ['itemRequestDelinquents'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'ID'}, 'Title', 'Status', {key:'DateCreated', label:'Date Created'}, {key: 'TicketStatus', label:'Overall Status'}],
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
        font-size: 12px;
    }
    .cell{
        line-height: 14px;
    } 
</style>