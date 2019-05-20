<template>
    <div class="resultsContainer">
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="itemRequestSearchList"
            show-empty
            @row-selected="rowSelected"
            :fields="fields">         
        </b-table>      
    </div>
</template>

<script>
export default {
    name: 'ItemSearchResults',
    props: ['itemRequestSearchList'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'Item Request ID'}, 'Title', 'Status', {key:'DateCreated', label:'Date Created'}],
            selected: []
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item-search', this.selected);
        }
    }
}

</script>

<style scoped>
       .resultsContainer {
        font-size: 12px;
    }
</style>
