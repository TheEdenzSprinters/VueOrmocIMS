<template>
    <div class="headerTitle">
        <h1 class="appPrimaryTextColor">
            ORMOC LANTERN HARDWARE AND SUPPLIES
        </h1>
        <hr class="headerBorder"/>

    <GlobalBreadcrumb v-bind:currentPage="currentPage" />

    </div>
</template>

<script>
import GlobalBreadcrumb from "../components/GlobalComponents/GlobalBreadcrumb";

export default {
    name: "Header",
    components: {GlobalBreadcrumb},
    props: ["currentPage"],
}
</script>

<style scoped>
    .headerTitle {
        padding-top: 20px;
    }

    .headerTitle h1 {
        padding-left: 20px;
    }

    hr.headerBorder {
        border: 1px solid #283593;
        margin: 5px 0px;
    }
</style>

