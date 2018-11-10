<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">{{title}}</h4>
        <p class="category">Complete seu cadastro</p>
      </md-card-header>
      <form @submit.prevent="add">
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Nome</label>
                <md-input
                  v-model="person.name"
                  type="text">
                </md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Idade</label>
                <md-input
                  v-model.number="person.age"
                  type="number">
                </md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button
                type="submit"
                class="md-raised md-success">
                Adicionar
              </md-button>
            </div>
          </div>
        </md-card-content>
      </form>
    </md-card>
  </form>
</template>
<script>
import db from '@/firebase/init'

export default {
  name: 'add',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Adicionar paciente'
    },
    type: {
      type: Number,
      default:2
    }
  },
  data () {
    return {
      person: {
        name: null,
        age: null,
        type: this._props.type
      }
    }
  },
  methods: {
    add () {
      db.collection('patient').add(this.person)
      .then(() => {
        this.person = {
          name:null,
          age:null,
        }
        this.$toasted.global.success()
      }).catch(err => {
        this.$toasted.global.error()
      })
    }
  }
}

</script>
<style>

</style>
