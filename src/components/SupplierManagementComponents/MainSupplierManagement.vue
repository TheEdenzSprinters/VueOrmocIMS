<template>

<b-container fluid class="whiteWrapper">
    <b-row>
        <b-col sm="12">
            <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                <b-row>
                    <b-col class="left-col-intent" sm="5">
                        <b-container fluid class="supplier-list borders">                              
                            <b-row>
                                <b-col sm="12">
                                    <SupplierList :new-supplier-array="newSupplierArray" @selected-supplier="viewSupplier"/>
                                </b-col>
                            </b-row>                                
                        </b-container>
                    </b-col>

                    <b-col class="right-col-intent" sm="7">
                        <b-container fluid class="supplier-details borders">
                            <b-row>
                                <b-col sm="12">
                                    <SupplierDetails @new-supplier-array="passSupplier" :supplier-id="supplierId"/>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>

                </b-row>
            </b-container>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
    import SupplierList from "./SupplierList";
    import SupplierDetails from "./SupplierDetails"


export default {
    name: "MainSupplierManagement",
    components: {SupplierList,SupplierDetails},

    data() {
        return {
            newSupplierArray: [],
            supplierId:0,
        }
    },

    methods: {
        viewSupplier(result) {
            if(result.length >0){
                this.supplierId = result[0].Id;
            }

            else {
                this.supplierId = 0;
            }
                
        },
        passSupplier(supplier) {
            this.newSupplierArray = supplier;
            this.newSupplierArray = [];
        
        }
    }
} 
</script>

<style scoped>
    .supplier-list, .supplier-details {
        height: 651px;
        overflow: auto;
        background-color: #ffffff;
    }

    .supplier-list::-webkit-scrollbar
    {
        width: 2px;
        background-color: #F5F5F5;
    }

    .supplier-list::-webkit-scrollbar-thumb
    {
        background-color: #283593;
        border: 1px solid #283593;
    }
    .mainItemContainer{
        padding: 10px 10px 0px 10px;
        min-height: 672px;
        height: auto;
    }
    .whiteWrapper {
        background: none;        
    }

    .borders {
        border-style: solid;
        border-color: #9b9b9b;
        border-width: 0.5px;
    }

    .left-col-intent {
        padding: 0px 0px 0px 15px;
    }

    .right-col-intent {
        padding: 0px 15px 0px 10px;
    }
</style>
