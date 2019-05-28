<template>

<b-container fluid id="app">
    <b-row v-if="authenticated">
        <b-col cols="2" class="navigation">
            <router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link>
            <DashNav />
        </b-col>
        <b-col cols="10" class="content-body">
            <router-view />
        </b-col>
    </b-row>
    <b-row>
        <router-view v-if="!authenticated" @authenticated="setAuthenticated"/>
    </b-row>
</b-container>
    
</template>

<script>
import DashNav from "./components/GlobalComponents/DashNav";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
    name: "app",
    components: {
        DashNav,
    },
    data() {
        return {
            authenticated: false,
                mockAccount: {
                    username: "user",
                    password: "user"
                }
            }
        },
    mounted() {
        if(!this.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        },
        logout() {
            this.authenticated = false;
        }
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navigation, .content-body {
    height: 800px;
    padding: 0px;
}

.main-content-body {
  height: 650px;
}

.appPrimaryBackgroundColor {
  background-color: #283593;
}

.appPrimaryTextColor {
  color: #283593;
}

.appSecondaryBackgroundColor {
  background-color: #ffffff;
}

.appSecondaryTextColor {
  color: #ffffff;
}

.appBackgroundShadeColor {
  background-color: #e8eaf6;
}
</style>
