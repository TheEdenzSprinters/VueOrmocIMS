<template>
    <div>
        PO Management
    </div>
</template>

<script>
export default {
    name: "POManagement",
    mounted() {
        if(!this.$parent.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
}
</script>

