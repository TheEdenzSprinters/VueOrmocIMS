<template>
    <b-container fluid class="">
        <b-col class="whiteWrapper borders">
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
    .details {
        margin-right: 15px;
        height: 300px;
        font-style: italic;
        font-size: auto;
        color:  #283593;
        font-size: 12px;
    }

    .details-gap {
        margin: 15px;
    }
</style>