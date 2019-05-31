<template>
    <div>
        <Header currentPage="SupplierManagement" />
        <MainSupplierManagement class="main-content-body" />
    </div>
</template>

<script>
import Header from "./Header";
import MainSupplierManagement from "../components/SupplierManagementComponents/MainSupplierManagement";

export default { 
    name: "SupplierManagement",
    components: {
      Header, 
      MainSupplierManagement
    },
    mounted() {
        if(!this.$parent.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
}
</script>