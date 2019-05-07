<template>
<div class="resultsContainer">    
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="items" 
            show-empty>         

        
        </b-table> 

       
    </div>
</template>

<script>
export default {
    name: 'ItemStockBalance',
    data() {
        return {
            fields: [{key:'ItemStockID' ,label: 'ItemStockID', formatter: 'itemStockID'}, 'ItemName', 'Item Description', 'Brand', 'Store Room','Warehouse'],
            items: [
                {ItemStockID: 1, ItemName: 'Hardiflex', ItemDescription: '8x6 ft', Brand: '27 Apr 2019', StoreRoom: '20', Warehouse: '35'},
                {ItemStockID: 2, ItemName: 'Omni Resistor', ItemDescription: '9V', Brand: '27 Apr 2019', StoreRoom: '20', Warehouse: '35'},
                {ItemStockID: 3, ItemName: 'Ace Small Pliers', ItemDescription: '3x16', Brand: '27 Apr 2019', StoreRoom: '20', Warehouse: '35'},          
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
    .stockBalance{
        padding-left: 35px;
        width: 60px;        
    }
    .tableHeader{
        font-size: 16px;
    }
</style>
