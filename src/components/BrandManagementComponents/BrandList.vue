<template>
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
</template>

<script>
import axios from "axios";

export default {
    name: "BrandList",
    data() {
        return {
            brandList: [],
            selected: []
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
                    DateCreated: res.data[i].CreateDttm,
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
        }
    },
    mounted() {
        this.getBrand();
    },
}

</script>

<style scoped>
    .resultsContainer {
        font-size: 10px;
    }

    .cell {
        line-height: 14px;
    }

</style>
