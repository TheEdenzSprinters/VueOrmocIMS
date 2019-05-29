import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPrint, 
        faPlus, 
        faEdit, 
        faTimes,
        faAngleRight, 
        faAngleDown, 
        faTimesCircle,
        faUser,
        faKey
    } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPrint, faPlus, faEdit, faTimes, faAngleRight, faAngleDown, faTimesCircle, faUser, faKey);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");