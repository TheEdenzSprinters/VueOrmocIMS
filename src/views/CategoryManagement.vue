<template>
    <div>
        <Header currentPage="CategoryManagement"/>
    
        <b-container fluid class="">
            <b-row class="appBackgroundShadeColor main-gaps">
                <b-col cols="9"  class="no-gaps">
                    <b-container fluid>
                        <b-row>
                            <MainCategoryManagement />
                        </b-row>
                        <b-row>
                            <SubCategoryManagement />
                        </b-row>
                    </b-container>
                </b-col>
                <b-col cols="3"  class="no-gaps">
                    <b-container fluid class="no-gaps">
                        <DetailsCategoryManagement />
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Header from "./Header";
import MainCategoryManagement from "../components/CategoryManagementComponents/MainCategoryManagement";
import SubCategoryManagement from "../components/CategoryManagementComponents/SubCategoryManagement";
import DetailsCategoryManagement from "../components/CategoryManagementComponents/DetailsCategoryManagement";

export default {
    name: "CategoryManagement",
    components: {
        Header,
        MainCategoryManagement,
        SubCategoryManagement,
        DetailsCategoryManagement,
    },
}
</script>

<style>
    .main-gaps {
        padding: 15px;
    }

    .no-gaps {
        padding: 0;
    }

    .whiteWrapper {
        background-color: #ffffff;
    }

    .headline {
        color:  #283593;
        padding: 15px 0px 0px 15px;
        font-weight: bold;
        font-size: 24px;
    }

    .borders {
        border-style: solid;
        border-color: #9c9b9b;
        border-width: 1px;
    }

    .btn {
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;  
        background: #283593;
        border-color: #283593;
        border-radius: 2px;
    }

    hr {
        border: 0.5px solid #283593;
    }

    .auto-height {
        height: auto;
    }
</style>
