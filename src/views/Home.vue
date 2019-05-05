<template>
  <div>
    <Header currentPage="Home" />
    <MainDashboard class="main-content-body" />
  </div>
</template>

<script>
import Header from "./Header";
import MainDashboard from "../components/DashboardComponents/MainDashboard";

export default {
  name: "home",
  components: {
   Header,
   MainDashboard
  },
}
</script>
