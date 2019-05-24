<template>
    <b-container fluid>
        <b-row>
            <b-col cols="auto">
                <label class="appPrimaryTextColor brand-name">Brand Name</label>
            </b-col>
            <b-col cols="8">
                <b-form-input 
                    v-model="brandSearchQuery"
                    required 
                    class="brand-input"
                    size="sm">

                </b-form-input> 
            </b-col>
        </b-row>

        <b-row align-h="center">
            <b-col cols="auto">
                <b-button @click="brandSearch()" class="btn">SEARCH</b-button>
            </b-col>
            <b-col cols="auto">
                <b-button @click="resetSearch()" class="btn">SHOW ALL</b-button>
            </b-col>
        </b-row>

        <div class="brands-table" overflow: auto>
            <b-table
                hover
                selectable
                select-mode="single"
                selectedVariant="success"
                :items="brandList"
                thead-class="appPrimaryTextColor"
                tbody-class=""
                show-empty
                @row-selected="rowSelected"
                >
            </b-table> 
        </div>
    </b-container>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    name: "BrandList",
    props: ["newBrandArray"],
    data() {
        return {
            brandList: [],
            brandListFull: [],
            selectedBrand: "",
            brandSearchQuery: "",
        }
    },
    methods: {
        rowSelected(brandSelected){
            // Filter all brand by selected brand Id
            if(brandSelected.length > 0){
                this.selectedBrand = this.brandListFull.filter(x => x.Id === brandSelected[0].BrandID);
                this.$emit('selected-brand', this.selectedBrand);
            }
        },
        fetchList(res) {
            for(var i = 0; i < res.data.Result.length; i++) {
                this.brandList = this.brandList.concat({
                    BrandID: res.data.Result[i].Id,
                    BrandName: res.data.Result[i].BrandName,
                    Status: this.setStatus(res.data.Result[i].IsActive),
                    DateCreated: moment(res.data.Result[i].CreateDttm).format("DD-MMM-YYYY"),
                });
            }
        },
        getBrand() {
            axios.get("http://localhost:49995/api/ItemManagement/GetAllBrands")
            .then(res => {
                // Full brand list for filter usage
                this.brandListFull = res.data.Result;
                this.fetchList(res);
            })
            .catch (error => {
                // eslint-disable-next-line
                console.log(error);
            })
        },
        setStatus(status) {
            if(status === true) {
                return "Active";
            } else {
                return "Inactive";
            }
        },
        brandSearch() {
            if (this.brandSearchQuery !== "") {
                let param = {brandName: this.brandSearchQuery};
                // let param = `"${this.brandSearchQuery}"`; // approach to send variable in quotes

                axios.post("http://localhost:49995/api/ItemManagement/SearchBrands", param, {headers: {'Content-Type':'application/json'}})
                .then(res => {
                    this.brandList = [];
                    this.fetchList(res);
                })
                .catch (error => {
                    // eslint-disable-next-line
                    console.log(error);
                });
            } else {
                alert("Please enter brand name");
            }
        },
        resetSearch() {
            this.brandSearchQuery = '';
            this.brandList = [];
            this.getBrand();
        },
    },
    mounted() {
        this.getBrand();
    },
    watch: {
        newBrandArray: function(){
            if(this.newBrandArray.Id > 0){
                this.brandList = this.brandList.concat({
                    BrandID: this.newBrandArray.Id,
                    BrandName: this.newBrandArray.BrandName,
                    Status: this.setStatus(this.newBrandArray.IsActive),
                    DateCreated: moment(this.newBrandArray.CreateDttm).format("DD-MMM-YYYY"),
                });
                this.getBrand();
            }
        }
    }
}

</script>

<style scoped>
    .brands-table {
        font-size: 12px;
    }

    .btn {
        background-color: #283593;
        font-size: 12px;
        padding: 4px 12px;
        margin: 5px 0px 10px 0px;
    }

    .text {
        padding-top: 20px;
    }

    .brand-input {
        border-color: #283593;
        height: 23px;
    }

    .brand-name {
        font-size: 14px;
    }

    .table-head {
        color: #283593;
    }

    .table-body {
        color: red;
        
    }
</style>
