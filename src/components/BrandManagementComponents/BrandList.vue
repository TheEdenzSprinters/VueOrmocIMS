<template>
    <b-container fluid>
        <b-row class="form">
            <b-col sm="12">
                <label class="text" for="supplier-name">Brand name</label>
                <b-form-input 
                    v-model="brandSearchQuery"
                    required 
                    class="input-small" 
                    size="sm">

                </b-form-input> 
                <div class="btnContainer">
                    <b-button @click="brandSearch()">Search</b-button>
                    <b-button @click="resetSearch()">Show All</b-button>
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
                :items="brandList" 
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
            selectedItem: "",
            brandSearchQuery: "",
        }
    },
    methods: {
        rowSelected(brandSelected){
            this.selectedItem = brandSelected;
            this.$emit('selected-item', this.selectedItem);
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
            }
        }
    }
}

</script>

<style scoped>
    .resultsContainer {
        font-size: 12px;
    }

    .btnContainer {
        margin-left: 65px;
        margin-bottom: 5px;
        margin-top: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .btn {
        height: 35px;
        font-size: 15px;
        margin-left: 10px;
        width: 100px;
    }

    .text {
        padding-top: 20px;
    }
</style>
