<template>
  <div>
    <md-divider></md-divider>
    <md-field>
      <label>Digite aqui todas as informações de prescrição para o paciente</label>
      <md-textarea v-model="autogrow" md-autogrow></md-textarea>
    </md-field>
    <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
      <label>Por favor selecione uma palavra para iniciar a pesquisa...</label>
    </div>
    <md-badge v-for="(letter, idx) in letters" :key=idx  md-content="1">
        <md-button class="md-icon-button" @click="selectedLetter(letter)">
          <span>{{letter}}</span>
        </md-button>
    </md-badge>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-size-50 md-small-size-50 md-xsmall-size-50">
        <input
          type="text"
          class="form-control"
          placeholder="Pesquise pelo medicamento..."
          v-model="search"
        >
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-30 md-size-30 md-small-size-30 md-xsmall-size-100">
      <div class="list-medications">
        <ul>
          <li v-for="i in filteredList" :key="i.id" @click="selectMedication(i)">
            {{i.nome}}
          </li>
        </ul>
        </div>
      </div>
      <div v-if="showDosage" class="md-layout-item md-medium-size-30 md-size-30 md-small-size-30 md-xsmall-size-100">
          <label>Posologia</label>
          <div v-for="(time,idx) in times" :key="idx">
        <label class="container">{{time.value}}
          <input type="radio" :name="time.value" :value="time.value" v-model="selectedRadio">
          <span class="checkmark"></span>
        </label>
          </div>
      </div>
      <div v-if="array.length" class="md-layout-item md-medium-size-30 md-size-30 md-small-size-30 md-xsmall-size-100">
      <label>Medicamentos selecionados...</label>
      <div class="list-medications">
        <ul>
          <li v-for="(medication, idx) in array" :key="idx" @click="selectMedication(i)">
            {{medication.nome}}
          </li>
        </ul>
        </div>
      </div>
    </div>
    <div class="footer">
    <md-button
      @click="save"
      type="submit"
      class="md-success">
        Salvar
    </md-button>
    </div>
  </div>
</template>

<script>
import { Search, NavTabsCard } from '@/components'
import db from '@/firebase/init'
import {letters, times} from './data'
import json from '@/initial_charge/medicamentos.json'
import interacaoMedicamentosa from '@/initial_charge/interacao_medicamentosa.json'
import Modal from './SimpleModal'

export default {
  name: 'Prescription',
  props: ['patientData', 'nameModal'],
  components: {
    Search,
    NavTabsCard,
    Modal
  },
  data: () => ({
    data: [],
    showDosage: false,
    radio: false,
    selectedRadio: '',
    times: times,
    array: [],
    pagination: 20,
    dados: [],
    filter: [],
    autogrow: '',
    search: '',
    letters: letters
  }),
  computed: {
    filteredList () {
      return this.filter.filter(i => i.nome.includes(this.search.toUpperCase()))
    }
  },
  watch: {
    selectedRadio (val) {
      if (val !== '') this.array[this.array.length - 1].dosage = val
    }
  },
  methods: {
    selectedLetter (letter) {
      this.search = ''
      this.filter = json
        .filter(d => d.Nome.startsWith(letter))
        .slice(1, this.pagination)
        .map(d => {
          return {
            id: d.IdMedicamento,
            nome: d.Nome,
            viaAdministracao: d.ViaAdministracao
          }
        })
    },
    selectMedication (med) {
      this.selectedRadio = ''
      const isExistInArray = this.array.filter(i => i.id === med.id)
      if (isExistInArray.length === 0) {
        this.showDosage = true
        this.array.push(med)
        if (this.selectedRadio !== '') {
          this.array.push(med)
          this.showDosage = false
          this.selectedRadio = ''
        }
      }
    },
    save () {
      db.collection('patient')
        .add({
          patientId: this.patientData.patientId,
          name: this.patientData.patient,
          doctor: this.patientData.doctor,
          prescriptions: this.autogrow,
          medications: this.array,
          datePrescription: new Date(),
          type: 4
        })
        .then(() => {
          this.$toasted.global.success()
          this.$modal.hide(this.nameModal)
        }).catch(() => {
          this.$toasted.global.error()
        })
    }
  }
}
</script>

<style scoped>
.search {
  max-width: 500px;
}
.list-medications {
  max-height: 150px !important;
  overflow: auto;
}
.container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top:6px;
  left:6px;
  width:8px;
  height:8px;
  border-radius:50%;
  background:white;
}
.footer {
  position:fixed;
  bottom:30px;
}
</style>
