<template>

<b-container fluid class="whiteWrapper">
    <b-row>
        <b-col lg="12" sm="12">
            <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                <b-row>
                    <b-col cols="9">
                        <b-container fluid class="left-intent">
                            <b-row class="row-intents">
                                <!-- <MainCategoryManagement v-bind:cat-list="catList" v-on:receive-cat-list="passCategories" /> -->
                                <MainCategoryManagement v-bind:cat-list="catList" />
                            </b-row>
                            <b-row class="row-intents">
                                <SubCategoryManagement v-bind:cat-list="catList" />
                            </b-row>
                        </b-container>
                    </b-col>
                    <b-col cols="3">
                        <b-container fluid class="right-intent">
                            <b-row>
                                <DetailsCategoryManagement />
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
import SubCategoryManagement from "./SubCategoryManagement";
import DetailsCategoryManagement from "./DetailsCategoryManagement";
import MainCategoryManagement from "./MainCategoryManagement";
import axios from "axios";

export default {
    name: "MainCategoryManagementFrame",
    components: {
        MainCategoryManagement,
        SubCategoryManagement,
        DetailsCategoryManagement,
    },
    data() {
        return {
            catList: [],
        }
    },
    methods: {
        // passCategories: function(results) {
        //     this.catList = this.catList.filter(function(e) { return e.Id !== results; });
        // },
        getCategory() {
            axios.get("http://localhost:49995/api/ItemManagement/GetAllCategories")
            .then((res) => {
                console.log("update cat");
                this.catList = res.data;
            })
            .catch ((error) => {
                console.log(error);
            })
        },
    },
    created() {
        document.title = "Category Management";
    },
    mounted() {
        this.getCategory();
    }
}
</script>

<style scoped>
    .whiteWrapper {
        height: 100%;
        background-color: #ffffff;
    }

    .mainItemContainer{
        padding: 10px 10px 0px 10px;
        min-height: 672px;
        height: auto;
    }

    .right-intent {
        padding: 0px 15px 0px 10px;
    }

    .left-intent {
        padding: 0px 0px 0px 15px;
    }

    .row-intents {
        padding: 0px 0px 15px 0px;
    }
</style>