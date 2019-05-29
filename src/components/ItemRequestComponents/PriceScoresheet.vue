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
>            
        </b-table> 

       
    </div>
</template>

<script>
export default {
    name: 'PriceScoresheet',
    data() {
        return {
            fields: [{key:'SupplierID' ,label: 'Supplier ID', formatter: 'itemID'}, 'SupplierName', 'Quantity', 'PricePerUnit','PaymentTerms','Remarks'],
            items: [
                {SupplierID: 1, SupplierName: 'Hardiflex 8x6 ft', Quantity: '300', PricePerUnit: 'Php700', PaymentTerms: 'n/a', Remarks: '' },
                {SupplierID: 2, SupplierName: 'Omni Resistor', Quantity: '1500', PricePerUnit: 'Php20', PaymentTerms: 'n/a'},
                {SupplierID: 3, SupplierName: 'Ace Small Pliers', Quantity: '16', PricePerUnit: 'Php70', PaymentTerms: 'n/a'},
                                              
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