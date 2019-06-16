<template>
    <b-container fluid class="whiteContainer">
        <b-row>
            <b-col sm="12" class="date-container">
               {{dateToday}} 
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
                              <!-- <br> -->
                             <!-- <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <PurchasesComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>                            -->
                        </b-col>

                        <b-col sm="6">
                            <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <InventoryComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>                            
                                <!-- <br> -->
                             <!-- <b-container class="cardContainer">
                                <b-row class="card">
                                    <b-col sm="12">
                                        <TransitViewComponent/>
                                    </b-col>
                                </b-row>
                            </b-container>                             -->
                        </b-col>
                    </b-row>           
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import RedAmberLevelComponent from "./RedAmberLevelComponent";
import PurchasesComponent from "./PurchasesComponent";
import InventoryComponent from "./InventoryComponent";
import TransitViewComponent from "./TransitViewComponent";
import moment from 'moment';



export default {
    name: "MainDashboard",
    components: {RedAmberLevelComponent,PurchasesComponent,InventoryComponent,TransitViewComponent},
    
    data() {
        return {
            dateToday: "",
                    }
    },
    mounted() {
        this.dateToday=moment().format("MMMM DD, YYYY");  
    }
    
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

.date-container {
    padding-left: 20px;
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: 550;
}

</style>


