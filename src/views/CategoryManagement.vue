<template>
    <div>
        <Header currentPage="CategoryManagement"/>
        <MainCategoryManagementFrame class="main-content-body"/>
    </div>
</template>

<script>
import Header from "./Header";
import MainCategoryManagementFrame from "../components/CategoryManagementComponents/MainCategoryManagementFrame";

export default {
    name: "CategoryManagement",
    components: {
        Header,
        MainCategoryManagementFrame,
    },
    mounted() {
        if(!this.$parent.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
}
</script>