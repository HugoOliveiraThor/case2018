<template>
  <div class="content">
    <ul>
      <li v-for="doctor in doctors" :key="doctor.id">
        {{doctor.name}}
      </li>
    </ul>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="blue" title="Adicionar médico" :type=3>
        </edit-profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import EditProfileForm from '@/components/RegisterForm'
import db from '@/firebase/init'

export default{
  name:'AddDoctor',
  components: {
    EditProfileForm,
  },
  data() {
    return {
      doctors: []
    }
  },
  created () {
    db.collection('patient').get()
    .then(snapshot => {
      snapshot.forEach(d => {
        let patient = d.data()
        patient.id = d.id
        console.log('PACIENTE', patient)
        if(d.data().type === 3) {
          this.doctors.push(patient)
        }
      })
    })
  }
}
</script>
