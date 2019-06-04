<template>

<div>
    <b-container fluid>
        <b-row>
            <b-col class="mr-auto">
                <h1 class="headerTitle appPrimaryTextColor">ORMOC LANTERN HARDWARE AND SUPPLIES</h1>
            </b-col>
            <b-col cols="auto">
                <router-link to="/login" @click.native="logout()" replace class="logout-btn">Logout</router-link>
            </b-col>
        </b-row>
    </b-container>

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
    methods: {
        logout() {
            localStorage.setItem("authenticated", "false");
            localStorage.removeItem("userName");
            // reload page after logout
            window.location.reload();

        },
    }
}
</script>

<style scoped>
    .headerTitle {
        padding-top: 20px;
        margin-bottom: 0px;
    }

    hr.headerBorder {
        border: 1px solid #283593;
        margin: 5px 0px;
    }

    .logout-btn {
        background-color: #283593;
        color: #ffffff;
        font-size: 16px;
        padding: 4px 12px;
        border-radius: 0px 0px 5px 5px;
        margin-right: 10px;
    }

    .logout-btn:hover {
        background-color: #7c7c7c;
        text-decoration: none;
    }

    .logout-btn:active {
        background-color: #5f5f5f;
    }
</style>

