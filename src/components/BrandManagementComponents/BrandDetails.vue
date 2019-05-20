<template>
    <b-container fluid class="MainContainer">
        <b-row>
            <b-col sm="9">
                <h3>Brand Details</h3>              
            </b-col>
            <b-col sm="3" class="iconContainer">
                <font-awesome-icon class="icons appPrimaryTextColor" icon="plus" @onclick="addBrand()"/>                            
                <!-- remove print icon for now -->
                <!-- <font-awesome-icon class="icons appPrimaryTextColor" icon="print"/> -->
            </b-col>                                
        </b-row>
        <b-row class="detailWrapper">
            <b-col sm="7">
                <label>Notes:</label>
                <b-form-textarea id="textarea-no-resize" rows="5" no-resize></b-form-textarea>         
            </b-col>
            
            <b-col sm="5">
                <b-container>
                    <b-row>
                        <b-col sm="6">
                            Date Created
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            brandList: [],
        }
    },
    methods: {
        addBrand() {

        },
    }
}

</script>

<style scoped>
    .iconContainer {
        padding-left: 35px;   
    }

    .icons{
        margin-left: 20px;
    }

    .detailWrapper {
        height: 569px;
    }

    .col-sm-7 {
        padding-top: 40px;
    }

    .col-sm-5 {
        padding-top: 40px;
    }
</style>
