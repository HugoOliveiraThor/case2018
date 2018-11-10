<template>
  <modal name="teste"
         width="90%"
         height="90%"
         :scrollable="true"
         :adaptive="true"
         @before-open="beforeOpen"
         @before-close="beforeClose">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Dados do paciente</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
              <h5 class="title">Paciente: {{obj.name}} </h5>
              </div>
              <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
              <h5 class="title">Idade :{{obj.age}} </h5>
              </div>
            </div>
            <md-divider></md-divider>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">

              </div>
              <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
              <ul>
                <li v-for="(item, idx) in array" :key=idx>
                  <strong>Data do atendimento:</strong> ({{item.datePrescription}})
                  <strong>Médico responsável:</strong> {{item.doctor}}
                  <ul>
                    <li v-for="(item, idx) in item.medications" :key=idx class="">
                        {{item.nome}}
                    </li>
                    <md-divider></md-divider>
                  </ul>
                </li>
              </ul>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </modal>
</template>
<script>
import db from '@/firebase/init'
import { formatSecondsToDateDDMMYYYYHHMM } from '@/utils/helpers'
export default {
  name: "SimpleModal",
  props: ['modalName'],
  data() {
    return {
      obj: {},
      array: []
    }
  },
  methods: {
    beforeOpen (event) {
      this.obj = event.params;
      db.collection('patient')
      .where('patientId','==',this.obj.id)
      .get()
      .then(snapshot => {
      snapshot.forEach(d => {
        let patient = d.data()
        patient.id = d.id
        delete patient['name']
        patient.datePrescription = formatSecondsToDateDDMMYYYYHHMM(d.data().datePrescription.seconds)
        this.array.push(patient)
      })
    })
    },
    beforeClose (event) {
    }
  }
}
</script>
