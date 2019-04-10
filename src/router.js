import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CategoryManagement from './views/CategoryManagement'
import ItemSearch from './views/ItemSearch'
import ItemRequests from './views/ItemRequests'
import Qoutations from './views/Quotations'
import SupplierManagement from './views/SupplierManagement'
import POManagement from './views/POManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category-management',
      name: 'categorymanagement',
      component: CategoryManagement
    },
    {
      path: '/item-search',
      name: 'itemsearch',
      component: ItemSearch
    },
    {
      path: '/item-requests',
      name: 'itemrequests',
      component: ItemRequests
    },
    {
      path: '/quotations',
      name: 'quotations',
      component: Qoutations
    },
    {
      path: '/suppliers-management',
      name: 'suppliermanagement',
      component: SupplierManagement
    },
    {
      path: '/po-management',
      name: 'pomanagement',
      component: POManagement
    },
  ]
})
