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
            :fields="fields">
        </b-table> 

       {{selected}}
    </div>
</template>

<script>
export default {
    name: 'SupplierList',
    data() {
        return {
            fields: [{key:'SupplierName' ,label: 'SupplierName', formatter: 'SupplierName'}, 'Address', 'TelephoneNo.', 'IsActive','Email'],
            items: [
                {SupplierName: 1, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:'@'},
                {SupplierName: 2, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 3, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 4, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 5, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 6, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 7, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 8, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 9, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 10, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 11, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
                {SupplierName: 12, Address: '', TelephoneNo: 'Active', IsActive: 'Active', Email:''},
               
                              
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
