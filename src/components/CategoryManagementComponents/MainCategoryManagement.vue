<template>
<b-container fluid class="whiteWrapper">
    <b-row>
        <b-col lg="12" sm="12">
            <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                <b-row>
                    <b-col lg="5" md="5" sm="12" class="whiteWrapper searchColumn">
                        <b-container fluid>
                            <b-row>
                                <b-col lg="12" md="12" sm="12">
                                    Main Category Management
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                    <b-col lg="7" md="7" sm="12">
                    </b-col>
                </b-row>
            </b-container>
        </b-col>
    </b-row>
</b-container>
  
</template>

<script>
export default {
  name: "MainCategoryManagement"
}
</script>

<style scoped>
    .whiteWrapper {
        height: 100%;
        background-color: #ffffff;
    }

    .mainItemContainer{
        padding: 10px 10px 0px 30px;
        height: 672px;
    }
    
    .searchColumn {
        padding: 20px 10px;
    }

    .advancedSearchContainer {
        margin-top: 15px;
        text-align: center;
    }
    
    .advancedSearchContainer span {
        font-size: 12px;
    }

    hr.advancedSearchDivider {
        border: 0.5px solid #283593;
        margin: 5px 0px;
    }
</style>