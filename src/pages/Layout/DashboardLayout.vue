<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/in-attendance">
        <md-icon>watch_later</md-icon>
        <p>Em atendimento</p>
      </sidebar-link>

      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Usuários</p>
      </sidebar-link>

      <sidebar-link to="/patient">
        <md-icon>person</md-icon>
        <p>Pacientes</p>
      </sidebar-link>

      <sidebar-link to="/doctor">
        <md-icon>person</md-icon>
        <p>Médicos</p>
      </sidebar-link>

    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content>
      </dashboard-content>
      <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">

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
