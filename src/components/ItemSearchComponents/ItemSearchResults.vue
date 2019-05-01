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
            @row-selected="rowSelected" 
            :fields="fields">
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'ItemSearchResults',
    data() {
        return {
            fields: [{key:'ItemID' ,label: 'ItemID', formatter: 'itemID'}, 'ItemName', 'Brand', 'Status', 'DateCreated'],
            items: [
                {ItemID: 1, ItemName: 'Hardiflex 8x6 ft', Brand: 'Hardiflex', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemID: 2, ItemName: 'Omni Resistor', Brand: 'Omni', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemID: 3, ItemName: 'Ace Small Pliers', Brand: 'Ace', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemID: 4, ItemName: 'United Coco Lumber 3x2x6 ft', Brand: 'United', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemID: 4, ItemName: 'United Coco Lumber 3x2x6 ft', Brand: 'United', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemID: 4, ItemName: 'United Coco Lumber 3x2x6 ft', Brand: 'United', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemID: 4, ItemName: 'United Coco Lumber 3x2x6 ft', Brand: 'United', Status: 'Active', DateCreated: '27 Apr 2019'},
                {ItemID: 4, ItemName: 'United Coco Lumber 3x2x6 ft', Brand: 'United', Status: 'Active', DateCreated: '27 Apr 2019'}
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
</style>

