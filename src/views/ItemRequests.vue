<template>
    <div>
        <Header currentPage="ItemRequests" />
        <MainItemRequest class="main-content-body"/>        
    </div>
</template>

<script>
import Header from "./Header";
import MainItemRequest from "../components/ItemRequestComponents/MainItemRequest";

export default {
    name: "ItemRequests",
    components: {
        Header,
        MainItemRequest,
    },
    mounted() {
        if(!this.$parent.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
}
</script>

