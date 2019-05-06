<template>
    <div class="dateContainer">       
        <p id="vuejs_date_time"></p>       
    </div>   
    
</template>

<script>
window.onload = function() {
var cur_date_vue = new Date();
var month = ('0' + (cur_date_vue.getMonth() + 1)).slice(-2);
var date = ('0' + cur_date_vue.getDate()).slice(-2);
var year = cur_date_vue.getFullYear();
var date_formated_vue = date + '/' + month + '/' + year;
document.getElementById("vuejs_date_time").innerHTML = date_formated_vue;
}
</script>

<style scoped>
.dateContainer{
    margin-left: 20px;
}
</style>