<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>

<script>
export default {
    name: "GlobalBreadcrumb",
    props: ["currentPage"],
    data() {
        switch(this.currentPage)
        {
            case "Home":
                return {items: [
                    {
                        text: "",
                        href: "",
                    }
                ]}
            case "CategoryManagement":
                return {items: [
                    {
                        text: "Home",
                        href: "/"
                    },
                    {
                        text: "Category Management",
                        active: true
                    }
                ]}
            case "ItemSearch":
                return {items: [
                    {
                        text: "Home",
                        href: "/"
                    },
                    {
                        text: "Item Search",
                        active: true
                    }
                ]}
            case "ItemRequest":
                return {items: [
                    {
                        text: "Home",
                        href: "/"
                    },
                    {
                        text: "Item Request",
                        active: true
                    }
                ]}                
        }
    }
}
</script>

<style scoped>
    .breadcrumb {
        background-color: white;
        margin-bottom: 0px;
        font-size: 14px;
    }
</style>
