<template>
  <div>
    <md-table v-model="patients" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }" @click="selectedItem(item)">
        <md-table-cell md-label="Médico">{{ item.doctor }}</md-table-cell>
        <md-table-cell md-label="Paciente">{{ item.patient }}</md-table-cell>
        <md-table-cell md-label="Consultório">{{ item.chamber }}</md-table-cell>
      </md-table-row>
    </md-table>
    <Modal titulo="Prescrição do paciente" :modalName=modalName />
  </div>
</template>

<script>
import faker from 'faker'
import db from '@/firebase/init'
import Prescription from './Prescription'
import Modal from './Modal'


export default {
  name: 'List',
  components: {
    Prescription,
    Modal
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  created() {
    db.collection('patient').get()
    .then(snapshot => {
      snapshot.forEach(d => {
        let patient = d.data()
        patient.id = d.id
        this.patients.push({
          patientId: patient.id,
          doctor : faker.name.findName(),
          patient: patient.name,
          chamber: faker.random.number()
        })
      })
    })
  },
  data () {
    return {
      selected: [],
      list: [],
      isPrescription: false,
      patients: [],
      data: [],
      modalName:'prescription'
    }
  },
  methods: {
    selectedItem (item) {
      this.$modal.show(this.modalName, {...item})
    }
  }
}
</script>
<style>
.md-table-row {
  cursor:pointer
}
</style>
