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