<template>
  <div>
    <Header />
    <MainDashboard />
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
  }
};
</script>
