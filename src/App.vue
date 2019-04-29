<template>
  <b-container fluid id="app">
    <b-row>
      <b-col cols="2" class="navigation">
        <DashNav />
      </b-col>
      <b-col cols="10" class="content-body">
        <router-view />
      </b-col>
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
  color: #ffffff;
}

.appSecondaryTextColor {
  color: #ffffff;
}

.appBackgroundShadeColor {
  background-color: #e8eaf6;
}
</style>
