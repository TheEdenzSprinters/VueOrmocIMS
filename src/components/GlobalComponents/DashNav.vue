<template>
  <b-nav vertical class="appPrimaryBackgroundColor navigation nav-buffer">
    <b-nav-item>
      <router-link class="appSecondaryTextColor" to="/">DASHBOARD</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link class="appSecondaryTextColor" to="/category-management">CATEGORY MANAGEMENT</router-link>
    </b-nav-item>
    <b-nav-item v-b-toggle.sub1 class="navigation-item">
      ITEM MANAGEMENT
    </b-nav-item>
      <b-collapse id="sub1">
        <b-nav vertical class="appPrimaryBackgroundColor">
          <b-nav-item>
            <router-link class="appSecondaryTextColor secondaryNav" to="/category-management">CATEGORY MANAGEMENT</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="appSecondaryTextColor secondaryNav" to="/category-management">CATEGORY MANAGEMENT</router-link>
          </b-nav-item>
        </b-nav>
      </b-collapse>
    <b-nav-item>
      <router-link class="appSecondaryTextColor" to="/po-management">P.O. MANAGEMENT</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link class="appSecondaryTextColor" to="/suppliers-management">SUPPLIERS MANAGEMENT</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link class="appSecondaryTextColor" to="/item-search">ITEM SEARCH</router-link>
    </b-nav-item>
  </b-nav>
</template>

@<script>
export default {
    name: "DashNav"
};
</script>

<style scoped>
.nav-buffer{
  padding-top: 100px;
}

/*Doing bootstrap css overrides to achieve desired look and feel*/
a.nav-link {
  padding: 0px;
}

a.nav-link a {
  display: block;
  line-height: 3em;
  padding-left: 10px;
}

a.nav-link a:hover {
  background-color: #ffffff;
  color: #283593;
  text-decoration: none;
}
/*END*/

.navigation-item a {
  padding-left: 10px;
  color: #ffffff;
  text-decoration: none;
  display: block;
  line-height: 3em;
}

.navigation-item a:hover{
  text-decoration: none;
  background-color: #ffffff;
  color: #283593;
}

.secondaryNav { 
  padding-left:30px !important;
}

</style>




