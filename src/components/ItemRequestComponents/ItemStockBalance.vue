<template>
    <div class="resultsContainer">    
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="itemList" 
            :fields="fields"
            @row-selected="rowSelected" 
            show-empty>         
        </b-table> 

        <b-button variant="danger" @click="deleteSelectedItem" v-if="isVisible" size="sm" class="deleteButton">Delete</b-button>
    </div>
</template>

<script>
export default {
    name: 'ItemStockBalance',
    props: ['itemList'],
    data() {
        return {
            fields: [{key:'Id' ,label: 'Item ID'}, 'ItemName', {key:'Notes', label:'Item Description'}, 'BrandName', 'StocksLeft'],
            selected: [],
            isVisible: false,
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-item', this.selected);
        },
        deleteSelectedItem(){
            if(this.selected.length > 0){
                this.$emit('delete-item', this.selected);
            }
        }
    },
    watch: {
        selected: function() {
            if(this.selected.length > 0){
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        }
    }
}

</script>

<style scoped>
    .resultsContainer {
        font-size: 12px;
    }

    .deleteButton {
        float: right;
    }
</style>
