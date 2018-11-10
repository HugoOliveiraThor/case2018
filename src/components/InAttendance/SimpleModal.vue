<template>
  <modal name="simplesModal"
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
            <h4 class="title">{{titulo}}</h4>
            <p class="category">{{subtitle}}</p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
              <h5 class="title">Paciente:{{obj.patient}} </h5>
              </div>
              <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                <h5 class="title">Médico responsável:{{obj.doctor}} </h5>
              </div>
              </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  name: 'SimpleModal',
  props: ['titulo', 'modalName', 'subtitle'],
  data() {
    return {
      obj: {
        patient: '',
        doctor: ''
      }
    }
  },
  methods: {
    beforeOpen (event) {
      this.obj = event.params
    },
    beforeClose (event) {
    }
  }
};
</script>
