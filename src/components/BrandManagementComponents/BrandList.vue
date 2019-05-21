<template>
    <b-container>
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
    props: [""],
    data() {
        return {
            brandList: [],
            selected: [],
            brandSearchQuery: '',
        }
    },
    methods: {
        rowSelected(brandList){
            this.selected = brandList;
            this.$emit('selected-item', this.selected);
        },
        getBrand() {
            axios.get("http://localhost:49995/api/ItemManagement/GetAllBrands")
            .then(res => {
                for(var i = 0; i < res.data.length; i++)
                this.brandList = this.brandList.concat({
                    BrandID: res.data[i].Id,
                    BrandName: res.data[i].BrandName,
                    Notes: res.data[i].Notes,
                    Status: this.setStatus(res.data[i].IsActive),
                    DateCreated: moment(res.data[i].CreateDttm).format("DD-MMM-YYYY"),
                });
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
            if (this.brandSearchQuery !== '') {
                this.brandList = this.brandList.filter(e => {return this.brandSearchQuery.match(e.BrandName)});
            } else {
                alert("Please enter brand name");
            }
        },
        resetSearch() {
            this.brandSearchQuery = '';
        },
    },
    mounted() {
        this.getBrand();
    },
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
