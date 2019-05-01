<template>
    <div class="itemsContainer">
        <b-container fluid>
            <b-row>
                <b-col lg="12" md="12" sm="12">
                    <h1>
                        Item Number
                    </h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="12" md="12" sm="12">
                    <b-container fluid class="mainDetailsContainer">
                        <b-row>
                            <b-col lg="5" md="5" sm="12">
                                <div class="imageContainer">
                                    <div>image</div>
                                    </div>
                            </b-col>
                            <b-col lg="7" md="7" sm="12">
                                <b-container fluid>
                                    <b-row class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            Item Name
                                        </b-col>
                                        <b-col lg="8" md="8" sm="8" class="inputColumn">
                                            <b-input block id="itemName" name="itemName" v-model="itemName" size="sm"/>
                                        </b-col>
                                    </b-row>
                                    <b-row class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            Category
                                        </b-col>
                                        <b-col lg="8" md="8" sm="8" class="inputColumn">
                                            <b-input block id="category" name="category" v-model="category" size="sm"/>
                                        </b-col>
                                    </b-row>
                                    <b-row class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            SubCategory
                                        </b-col>
                                        <b-col lg="8" md="8" sm="8" class="inputColumn">
                                            <b-input block id="subCategory" name="subCategory" v-model="subCategory" size="sm"/>
                                        </b-col>
                                    </b-row>
                                    <b-row class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            Brand
                                        </b-col>
                                        <b-col lg="8" md="8" sm="8" class="inputColumn">
                                            <b-input block id="brand" name="brand" v-model="brand" size="sm"/>
                                        </b-col>
                                    </b-row>
                                    <b-row class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            Location
                                        </b-col>
                                        <b-col lg="8" md="8" sm="8" class="inputColumn">
                                            <b-input block id="location" name="location" v-model="location" size="sm"/>
                                        </b-col>
                                    </b-row>
                                    <b-row class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            Quantity
                                        </b-col>
                                        <b-col lg="8" md="8" sm="8" class="inputColumn">
                                            <b-input block id="quantity" name="quantity" v-model="quantity" size="sm"/>
                                        </b-col>
                                    </b-row>
                                    <b-row class="generalInfoContainer">
                                        <b-col lg="4" md="4" sm="4" class="labelColumn">
                                            Measured By
                                        </b-col>
                                        <b-col lg="8" md="8" sm="8" class="inputColumn">
                                            <b-input block id="measuredBy" name="measuredBy" v-model="measuredBy" size="sm"/>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="7" md="7" sm="12">
                    <label>Notes</label>
                    <b-textarea id="notes" name="notes" v-model="notes" rows="3" no-resize/>
                </b-col>
                <b-col lg="5" md="5" sm="12">
                    <b-container fluid class="miscItemDetails">
                        <b-row>
                            <b-col lg="6" md="6" sm="6">
                                Date Created
                            </b-col>
                            <b-col lg="6" md="6" sm="6">
                                {{CreateDttm}}
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col lg="6" md="6" sm="6">
                                Last Updated
                            </b-col>
                            <b-col lg="6" md="6" sm="6">
                                {{UpdateDttm}}
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col lg="6" md="6" sm="6">
                                Is Active?
                            </b-col>
                            <b-col lg="6" md="6" sm="6">
                                <b-checkbox id="isActive" name="isActive" v-model="isActive"/>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
            <b-row>
                <b-container fluid class="detailedInformationContainer">
                    <b-row>
                        <b-col lg="12" md="12" sm="12">
                            <h2>Detailed Information</h2>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="12" md="12" sm="12">
                            <b-container fluid>
                                <b-row v-for="detail in itemDetail" :key="detail.ItemDetailName">
                                    <b-col lg="4" md="4" sm="4">
                                        {{detail.ItemDetailName}}
                                    </b-col>
                                    <b-col lg="5" md="5" sm="5">
                                        <b-input v-model="detail.ItemDetailValue" size="sm"/>
                                    </b-col>
                                    <b-col lg="3" md="3" sm="3">
                                        <b-input size="sm" v-if="detail.ShowUnitsOfMeasure" v-model="detail.UnitsOfMeasure"/>
                                    </b-col>
                                </b-row>
                            
                            </b-container>
                        </b-col>
                    </b-row>
                </b-container>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "IndividualItemsComponent",
    data() {
        return {
            itemName: "",
            category: "",
            subCategory: "",
            brand: "",
            location: "",
            quantity: "",
            measuredBy: "",
            notes: "",
            CreateDttm: "12 Apr 2019",
            UpdateDttm: "12 Apr 2019",
            isActive: false,
            itemDetail: [
                {
                    ItemDetailName: "length",
                    ShowUnitsOfMeasure: true,
                    UnitsOfMeasure: "ft",
                    ItemDetailValue: "10"
                }
            ],
        };
    },
}
</script>

<style scoped>
    .itemsContainer {
        background-color: #ffffff;
        padding: 20px;
        height: 630px;
        overflow: auto;
    }

    .itemsContainer::-webkit-scrollbar
    {
        width: 2px;
        background-color: #F5F5F5;
    }

    .itemsContainer::-webkit-scrollbar-thumb
    {
        background-color: #283593;
        border: 1px solid #283593;
    }

    .mainDetailsContainer {
        padding: 0px;
    }

    .imageContainer {
        width: 100%;
        padding-top: 100%;
        border: 1px solid black;
        position: relative;
        margin-top: 30px;
    }

    .imageContainer img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .labelColumn {
        line-height: 3;
    }

    .inputColumn {
        padding: 0px;
    }

    .generalInfoContainer {
        margin-bottom: 5px;
    }
    
    .miscItemDetails {
        padding-top: 30px;
    }

    .detailedInformationContainer {
        padding-top: 20px;
    }
</style>
