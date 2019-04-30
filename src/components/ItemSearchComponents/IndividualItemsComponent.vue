<template>
    <div class="itemsContainer">
        Item Number
    </div>
</template>

<script>
export default {
    name: "IndividualItemsComponent"
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
</style>
