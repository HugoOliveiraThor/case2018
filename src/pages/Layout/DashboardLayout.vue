<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/in-attendance">
        <md-icon>watch_later</md-icon>
        <p>Em atendimento</p>
      </sidebar-link>

      <sidebar-link to="/patient">
        <md-icon>person</md-icon>
        <p>Pacientes</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content>
      </dashboard-content>
    </div>
  </div>
</template>
<style>

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  }
}
</script>
