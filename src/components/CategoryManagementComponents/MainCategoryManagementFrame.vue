<template>

<b-container fluid class="whiteWrapper">
    <b-row>
        <b-col lg="12" sm="12">
            <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                <b-row>
                    <b-col cols="9">
                        <b-container fluid class="left-intent">
                            <b-row class="row-intents">
                                <MainCategoryManagement />
                            </b-row>
                            <b-row class="row-intents">
                                <SubCategoryManagement />
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

export default {
    name: "CategoryManagementFrame",
    components: {
        MainCategoryManagement,
        SubCategoryManagement,
        DetailsCategoryManagement,
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
        height: 672px;
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