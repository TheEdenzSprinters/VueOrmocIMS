<template>
<div class="resultsContainer" overflow: auto>
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="items" 
            show-empty
            @row-selected="rowSelected" 
            >
        </b-table> 

      
    </div>
</template>

<script>
export default {
    name: 'BrandList',
    data() {
        return {
            fields: [{key:'BrandName' ,label: 'BrandName', formatter: 'BrandID'}, 'BrandName', 'Status', 'DateCreated'],
            items: [
                {BrandID: 1, BrandName: 'GalvaSteel', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'Stanley', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'Portland Cement', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'Philips', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'Sony', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'Orion', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'Firefly', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'Northern Cement', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'UnionSteel', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'GalvaLube', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'GalvaSteel', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'GalvaSteel', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'GalvaSteel', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'GalvaSteel', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'GalvaSteel', Status: 'Active', DateCreated: '15 May 2019'},
                {BrandID: 1, BrandName: 'GalvaSteel', Status: 'Active', DateCreated: '15 May 2019'},

                
               
                              
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

</style>
