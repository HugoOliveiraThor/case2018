<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Em atendimento</h4>
            <p class="category">Pacientes em atendimento no momento</p>
          </md-card-header>
          <md-card-content>
            <list table-header-color="blue"></list>
            <!-- <Prescription table-header-color="blue"></Prescription> -->
          </md-card-content>
        </md-card>
        <button @click="openModal">Abrir modal</button>
      </div>
    </div>
    <Modal titulo="Prescrição do paciente" :modalName=modalName />
  </div>
</template>

<script>
import List from "@/components/InAttendance/List";
import Prescription from "@/components/InAttendance/Prescription";
import Modal from './Modal'

export default {
  name: "ContainerList",
  components: {
    List,
    Prescription,
    Modal
  },
  created() {},
  data() {
    return {
      doctors: [],
      patients: [],
      show:false,
      modalName:'prescription'
    };
  },
  methods: {
    openModal() {
      this.$modal.show(this.modalName, {})
    }
  }
};
</script>
