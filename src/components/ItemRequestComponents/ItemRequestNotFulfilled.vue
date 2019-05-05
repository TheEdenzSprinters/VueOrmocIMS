<template>
<div class="resultsContainer">
    <div class="header">
    <h6>Item Request Not Fulfilled</h6>
    </div>
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="items" 
            show-empty
            @row-selected="rowSelected" 
            :fields="fields">
        </b-table> 

       {{selected}}
    </div>
</template>

<script>
export default {
    name: 'ItemRequestNotFulfilled',
    data() {
        return {
            fields: [{key:'ItemRequestID' ,label: 'ItemRequestID', formatter: 'itemID'}, 'Status', 'DateCreated'],
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
    .header{
        margin-top: 10px;
        border-style: groove;
    }
</style>