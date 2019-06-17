<template>
 <b-container>
        <b-row class="form">
            <b-col sm="12">
                <label class="text" for="supplier-name">Supplier Name</label>
                <b-form-input class="input-small" size="sm" v-model="supplierSearchQuery"></b-form-input>
                <label class="text" for="address">Address</label>
                <b-form-input class="input-small" size="sm" v-model="addressSearchQuery"></b-form-input>
                <div class="btnContainer">
                    <b-button @click="supplierSearch()" class="btn">Search</b-button>
                    <b-button @click="resetSearch()" class="btn">Show All</b-button>
                </div>
            </b-col>
        </b-row>
        <div class="resultsContainer" overflow: auto>
        <b-table 
            striped 
            hover 
            selectable
            select-mode="single"
            selectedVariant="success"
            :items="supplierList" 
            show-empty
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
    .resultsContainer {
        font-size: 10px;
    }
    .cell{
        line-height: 14px;
    }

    .text {
        margin-bottom: 0%;
        padding-top: 10px;     
    }
    .btnContainer{
        margin-left: 65px;
        margin-bottom: 5px;
        margin-top: 5px;
    }

    .btn {
        background-color: #283593;
        height: 35px;
        font-size: 15px;
        margin-left: 10px;
        width: 100px;
    }

     .btn:hover {
        background-color: #7c7c7c;
    }

</style>
