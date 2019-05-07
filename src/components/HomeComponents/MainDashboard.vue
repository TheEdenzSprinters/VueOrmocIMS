<template>
    <b-container fluid class="whiteContainer">
        <b-row>
            <b-col sm="12">
                <p>7 May 2019</p>
            </b-col>
        </b-row>
        <b-container fluid class="appBackgroundShadeColor mainItemContainer">
            <b-row class="containerWrapper">
                <b-col class="whiteWrapper">
                    <b-row>
                        <b-col sm="6">
                            <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <RedAmberLevelComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>

                            <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <ItemsWithLowStockLevel/>
                                    </b-col>
                                </b-row>
                            </b-container>
                                <br>
                             <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <PurchasesComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>

                            <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <PurchaseOrdersComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>

                        <b-col sm="6">
                            <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <InventoryComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>

                            <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <AgingStocksComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>
                                <br>
                             <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <TransitViewComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>

                            <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <ItemsInTransitComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-col>
                    </b-row>           
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import RedAmberLevelComponent from "./RedAmberLevelComponent";
import ItemsWithLowStockLevel from "./ItemsWithLowStockLevel";
import PurchasesComponent from "./PurchasesComponent";
import PurchaseOrdersComponent from "./PurchaseOrdersComponent";
import InventoryComponent from "./InventoryComponent";
import AgingStocksComponent from "./AgingStocksComponent";
import TransitViewComponent from "./TransitViewComponent";
import ItemsInTransitComponent from "./ItemsInTransitComponent"

export default {
    name: "MainDashboard",
    components: {RedAmberLevelComponent,ItemsWithLowStockLevel,PurchasesComponent,PurchaseOrdersComponent,InventoryComponent,AgingStocksComponent,TransitViewComponent,ItemsInTransitComponent}
}
</script>

<style scoped>
.card{
    border: 1px;   
    }
.col-sm-12{
    padding: 0%;
}
.whiteWrapper {
        background: none;
        font-size: 15px;
    }
    .mainItemContainer{
        padding: 10px;
    }


</style>

<style scoped>

</style>
