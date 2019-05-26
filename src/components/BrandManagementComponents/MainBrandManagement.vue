<template>

<b-container fluid class="whiteWrapper">
    <b-row>
        <b-col sm="12">
            <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                <b-row>
                    <b-col sm="5" class="left-col-intent">
                        <b-container fluid class="brand-list borders">
                            <b-row class="row-intents">                                   
                                <b-col>
                                    <BrandList :new-brand-array="newBrandArray" @selected-brand="passSelectedBrand"/>
                                </b-col>                         
                            </b-row>         
                        </b-container>
                    </b-col>

                    <b-col sm="7" class="right-col-intent">
                        <b-container fluid class="brand-details borders">
                            <b-row >
                                <b-col>
                                    <BrandDetails @new-brand-array="passBrand" :selected-brand="selectedBrand"/>
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
            selectedBrand: [],
        }
    },
    methods: {
        passBrand(brand){
            this.newBrandArray = brand;
        },
        passSelectedBrand(selectedBrand){
            this.selectedBrand = selectedBrand;
        }
    },
    created() {
        document.title = "Brand Management";
    },
}
</script>

<style scoped>
    .no-intent {
        padding: 0;
    }

    .whiteWrapper {
        height: 100%;
        background-color: #ffffff;
    }

    .mainItemContainer {
        padding: 10px 10px 0px 10px;
        min-height: 672px;
        height: auto;
    }

    .brand-list, .brand-details {
        height: 651px;
        overflow: auto;
        background-color: #ffffff;
    }

    .brand-list::-webkit-scrollbar {
        width: 3px;
    }

    .brand-list::-webkit-scrollbar-thumb {
        background-color: #283593;
        border: 1px solid #283593;
    }

    .borders {
        border-style: solid;
        border-color: #9b9b9b;
        border-width: 0.5px;
    }

    .left-col-intent {
        padding: 0px 0px 0px 15px;
    }

    .right-col-intent {
        padding: 0px 15px 0px 10px;
    }
</style>
