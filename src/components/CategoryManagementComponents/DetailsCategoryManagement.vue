<template>
    <b-container fluid class="whiteWrapper">
        <b-row align-v="center" class="text-center details borders">
            <b-col>
                Select an item to see complete details.
            </b-col>
        </b-row>
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

    .borders {
        border-style: solid;
        border-color: #9b9b9b;
        border-width: 0.5px;
    }

    .details {
        height: 300px;
        font-style: italic;
        color:  #283593;
        font-size: 12px;
    }
</style>