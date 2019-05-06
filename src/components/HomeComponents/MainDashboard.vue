<template>
    <b-container fluid class="whiteWrapper">
        <b-row>
            <b-col sm="12">
                <b-container fluid class="appBackgroundShadeColor mainItemContainer">
                    <b-row>
                        <b-col sm="12" class="whiteWrapper">
        <b-row>
            <bcol sm="12">
                <b-container>
                    <b-row>
                        <b-col sm="12">
                            <DateComponent/>
                        </b-col>
                    </b-row>
                </b-container>
            </bcol>
        </b-row>

        <b-row>            
            <b-col sm="6">
                <b-container class="card-container">
                    <b-row class="card">
                        <b-col sm="12">
                            <RedAmberLevelComponent v-on:items-list="showResults"/>
                        </b-col>
                    </b-row>
                     <b-row class="card">
                        <b-col sm="12">
                            <ItemsWithLowStockLevel/>
                        </b-col>
                    </b-row>
                </b-container>
               <br>               
                <b-container class="card-container">
                    <b-row class="card">
                        <b-col sm="12">
                            <PurchasesComponent v-on:items-list="showResults"/>
                        </b-col>
                    </b-row>
                     <b-row class="card">
                        <b-col sm="12">
                            <PurchaseOrdersComponent/>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
                
            <b-col sm="6">
                <b-container class="card-container">
                    <b-row class="card">
                        <b-col sm="12">
                            <InventoryComponent v-on:items-list="showResults"/>
                        </b-col>
                    </b-row>
                     <b-row class="card">
                        <b-col sm="12">
                            <AgingStocksComponent/>
                        </b-col>
                    </b-row>
                </b-container>
               <br>               
                <b-container class="card-container">
                    <b-row class="card">
                        <b-col sm="12">
                            <TransitViewComponent v-on:items-list="showResults"/>
                        </b-col>
                    </b-row>
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
        </b-col>
        </b-row>        
    </b-container>
</template>

<script>
import DateComponent from "./DateComponent";
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
    components: {DateComponent,RedAmberLevelComponent,ItemsWithLowStockLevel,PurchasesComponent,PurchaseOrdersComponent,InventoryComponent,AgingStocksComponent,TransitViewComponent,ItemsInTransitComponent}
}
</script>

<style scoped>
.card{
    border: 1px;
    border-style: groove;
    border-color:  #283593;    
}
.col-sm-12{
    padding: 0%;
}
.whiteWrapper {
        background: none;
        font-size: 16px;
    }
    .mainItemContainer{
        padding: 10px;
    }


</style>
