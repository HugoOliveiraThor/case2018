<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100 md-small-size-100 md-xsmall-size-100">
        <edit-profile-form
          @addPerson="addPerson"
          data-background-color="blue"
          title="Adicionar paciente"
          :type=2>
        </edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-100 md-small-size-100 md-xsmall-size-100">
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Pesquisar pacientes</h4>
          <p class="category">Para visualizar o histórico do paciente clique em cima do mesmo...</p>
        </md-card-header>
        <md-card-content>
        <input
          type="text"
          class="form-control"
          placeholder="Pesquise pelo paciente..."
          v-model="search"
        >
        <ul>
        <li v-for="patient in filteredList" :key="patient.id" @click="detailsPatient(patient)">
          {{patient.name}}
        </li>
        </ul>
        </md-card-content>
      </md-card>
      </div>
    </div>
    <Modal titulo="Prescrição do paciente" :modalName=modalName />
  </div>
</template>

<script>
import EditProfileForm from '@/components/RegisterForm'
import Search from '@/components/Search'
import db from '@/firebase/init'
import Modal from './Modal'

export default{
  name:'AddPatient',
  components: {
    EditProfileForm,
    Search,
    Modal
  },
  data() {
    return {
      patients: [],
      listPatients: [],
      search: '',
      modalName:'teste',
      filter: [],
    }
  },
  computed: {
    filteredList() {
      return this.patients.filter(i => i.name.includes(this.search))
    }
  },
  created () {
    db.collection('patient').get()
    .then(snapshot => {
      snapshot.forEach(d => {
        let patient = d.data()
        patient.id = d.id
        if(d.data().type === 2) {
          this.patients.push(patient)
        }
      })
      this.listPatients = this.patients.map( d => d.name )
    })
  },
  methods:{
    detailsPatient (pat) {
      this.$modal.show('teste', {...pat})
    },
    addPerson (person) {
        this.patients.push(person)
    }
  }
}
</script>
