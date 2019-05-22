<template>
    <b-container fluid class="whiteWrapper">
        <b-row>
            <b-col sm="12">
                <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                    <b-row class="containerWrapper">
                        <b-col class="whiteWrapper" sm="5">
                            <b-container fluid class="searchColumn">
                                <b-row>                                   
                                    <b-col sm="12">
                                        <BrandList :new-brand-array="newBrandArray" />
                                    </b-col>                         
                                </b-row>         
                            </b-container>
                        </b-col>

                         <b-col class="whiteWrapper" sm="7">
                            <b-container fluid class="searchColumn">
                                <b-row>
                                    <b-col sm="12">
                                        <BrandDetails @new-brand-array="passBrand" />
                                    </b-col>
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
import BrandList from "./BrandList";
import BrandDetails from "./BrandDetails"

export default {
    name: "MainBrandManagement",
    components: {
        BrandList,
        BrandDetails,
    },
    data() {
        return {
            newBrandArray: [],
        }
    },
    methods: {
        passBrand(brand){
            this.newBrandArray = brand;
        },
    },
    created() {
        document.title = "Brand Management";
    },
}
</script>

<style scoped>
    .searchColumn {
        max-height: 651px;
        padding: 20px;
        overflow: auto;
        background-color: #ffffff;
    }

    .searchColumn::-webkit-scrollbar {
        width: 2px;
        background-color: #F5F5F5;
    }

    .searchColumn::-webkit-scrollbar-thumb {
        background-color: #283593;
        border: 1px solid #283593;
    }

    .mainItemContainer {
        padding: 10px;
    }

    .whiteWrapper {
        background: none;        
    }
</style>
