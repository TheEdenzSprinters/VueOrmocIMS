<template>
    <div>
        <Header currentPage="BrandManagement"/>
        <MainBrandManagement class="main-content-body"/>
    </div>
</template>

<script>
import Header from "./Header";
import MainBrandManagement from "../components/BrandManagementComponents/MainBrandManagement";

export default {
    name: "BrandManagement",
    components: {
        Header,
        MainBrandManagement,
    },
    mounted() {
        if(!this.$parent.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
}
</script>