<template>
    <div>
        <Header currentPage="ItemSearch" />
        <MainItemSearch class="main-content-body" />
    </div>
</template>

<script>
import Header from "./Header";
import MainItemSearch from "../components/ItemSearchComponents/MainItemSearch";

export default { 
    name: "ItemSearch",
    components: {
      Header, 
      MainItemSearch
    },
}
</script>