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
            fields: [{key:'ItemRequestID' ,label: 'ItemRequestID', formatter: 'itemID'}, 'Title', 'DueDate'],
            items: [
                {ItemRequestID: 1, Title: 'Hardiflex 8x6 ft', Status: 'Active', DueDate: '27 Apr 2019'},
                {ItemRequestID: 2, Title: 'Omni Resistor', Status: 'Active', DueDate: '27 Apr 2019'},
                {ItemRequestID: 3, Title: 'Ace Small Pliers', Status: 'Active', DueDate: '27 Apr 2019'},
                                              
            ],
            selected: []
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item-delinquent', this.selected);
        }
    }
}

</script>

<style scoped>
    .resultsContainer {
        font-size: 12px;
    }
</style>