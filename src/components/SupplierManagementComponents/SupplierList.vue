<template>

<b-container fluid class="main-intent">
    <b-row>
        <b-col cols="4">
            <label class="text appPrimaryTextColor" for="supplier-name">Supplier Name</label>
        </b-col>
        <b-col cols="7">
            <b-form-input class="supplier-input" size="sm" v-model="supplierSearchQuery"></b-form-input>
        </b-col>
    </b-row>
    <b-row class="input-intent">
        <b-col cols="4">
            <label class="text appPrimaryTextColor" for="address">Address</label>
        </b-col>
        <b-col cols="7">
            <b-form-input class="supplier-input" size="sm" v-model="addressSearchQuery"></b-form-input>
        </b-col>
        <b-col align-h="center">
            <div class="btnContainer">
                <b-button @click="supplierSearch()" class="btn">SEARCH</b-button>
                <b-button @click="resetSearch()" class="btn">SHOW ALL</b-button>
            </div>
        </b-col>
    </b-row>
    <div class="resultsContainer" overflow: auto>
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="primary"
            :items="supplierList"
            thead-tr-class="appPrimaryBackgroundColor appSecondaryTextColor"
            show-empty
            borderless
            @row-selected="rowSelected" 
            >
        </b-table> 
    </div>
</b-container>

</template>

<script>
import axios from "axios";
import { host } from "../../variables.js";

export default {
    name: 'SupplierList',
    props: ["newSupplierArray"],
    data() {
        return {
            supplierList: [],            
            selectedSupplier: "",
            supplierListFull:[],
            supplierSearchQuery:"",
            addressSearchQuery:"",
        }
    },
    methods: {
        rowSelected(items){
            this.selected = items;
            this.$emit('selected-supplier', this.selected);
        },

        fetchList(res) {
            for(var i = 0; i < res.data.Result.length; i++) {
                this.supplierList = this.supplierList.concat({
                    Id: res.data.Result[i].Id,                   
                    SupplierName: res.data.Result[i].SupplierName,
                    SupplierAddress: res.data.Result[i].SupplierAddress,
                    TelephoneNumber: res.data.Result[i].TelephoneNumber,
                    IsActive: res.data.Result[i].IsActive,
                    Email: res.data.Result[i].Email,
                    
                });
            }
        },
        getSupplier() {
            axios.get(host + "api/ItemManagement/GetAllSuppliers")
            .then(res => {
                
                this.supplierListFull = res.data.Result;
                this.fetchList(res);
                
            })
            .catch (error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },

        supplierSearch() {
            if (this.supplierSearchQuery !== "" || this.addressSearchQuery !== "") {
               
                let query = {
                    SupplierName: this.supplierSearchQuery,
                    SupplierAddress: this.addressSearchQuery
                }                    

                axios.post(host + "api/ItemManagement/SuppliersSearch",query, {headers: {'Content-Type':'application/json'}})
                .then(res => {
                    this.supplierList = [];
                    this.fetchList(res);
                })
                .catch (error => {
                    // eslint-disable-next-line
                    console.log(error);
                }); 
            }  else {
                alert("Please enter supplier or address name");
            }
        },

        resetSearch() {
            this.supplierSearchQuery = '';
            this.supplierList = [];
            this.getSupplier();
        }
        
    },

    mounted() {
        this.getSupplier();
    },
    watch: {
        newSupplierArray: function(){ 
            this.supplierList = [];           
            if(this.newSupplierArray.Id > 0) {
                this.supplierList = this.supplierList.concat({
                    Id: this.newSupplierArray.Id,                    
                    SupplierName: this.newSupplierArray.SupplierName,
                    SupplierAddress: this.newSupplierArray.SupplierAddress,
                    TelephoneNumber: this.newSupplierArray.TelephoneNumber,
                    IsActive: this.newSupplierArray.IsActive,
                    Email: this.newSupplierArray.Email,
                });                                
            }
            this.getSupplier();
        }
    }
}
    


</script>

<style scoped>
    .no-intent {
        padding: 0;
    }

    .main-intent {
        padding: 15px 0px 0px 0px;
    }

    .resultsContainer {
        font-size: 10px;
    }

    .cell{
        line-height: 14px;
    }

    .text {
        margin-bottom: 0%;
    }

    .btnContainer {
        margin: 5px 0px 5px 65px;
    }

    .btn {
        background-color: #283593;
        font-size: 12px;
        padding: 4px 12px;
        margin: 7px 30px 15px 0px;
    }

    .btn:hover {
        background-color: #7c7c7c;
    }

    .table {
        border: solid;
        border-color: #283593;
        border-width: 0.5px;
    }

    .supplier-input {
        border-color: #283593;
        height: 23px;
    }

    .input-intent {
        margin-top: 5px;
    }    
</style>
