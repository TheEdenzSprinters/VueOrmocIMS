<template>
    <b-container fluid class="no-intent whiteWrapper">
        <b-col class="no-intent borders">
            <p class="details">Select an item to see complete details</p>
        </b-col>
    </b-container>
</template>

<script>
export default {
  name: "DetailsCategoryManagement"
}
</script>

<style scoped>
    .whiteWrapper {
        height: 100%;
        background-color: #ffffff;
    }

    .no-intent {
        padding: 0;
    }
    
    .borders {
        border-style: solid;
        border-color: #9c9b9b;
        border-width: 1px;
    }

    .details {
        margin-right: 15px;
        height: 300px;
        font-style: italic;
        font-size: auto;
        color:  #283593;
        font-size: 12px;
    }
</style>