<template>
    <div>
        Quotations
    </div>
</template>

<script>
export default {
    name: "Quotations",
    mounted() {
        if(!this.$parent.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
}
</script>

