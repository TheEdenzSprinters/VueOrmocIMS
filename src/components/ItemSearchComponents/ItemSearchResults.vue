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
            :fields="fields">
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'ItemSearchResults',
    props: ['itemList'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'ItemID', formatter: 'itemID'}, 'ItemName', 'Brand', 'Status', 'CreateDttm'],
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

