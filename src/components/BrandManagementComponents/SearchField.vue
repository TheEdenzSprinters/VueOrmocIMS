<template>
    <b-container>
        <b-row class="form">
            <b-col sm="12">
                <label class="text" for="supplier-name">Supplier Name</label>
                <b-form-input class="input-small" size="sm"></b-form-input>                
                <div class="btnContainer">
                    <b-button href="#">Search</b-button>
                    <b-button href="#">Show All</b-button>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

 <script>

 </script>

 <style scoped>
    .btnContainer {
        margin-left: 65px;
        margin-bottom: 5px;
        margin-top: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .btn {
        height: 35px;
        font-size: 15px;
        margin-left: 10px;
        width: 100px;
    }

    .text {
        padding-top: 20px;
    }
 </style>
 