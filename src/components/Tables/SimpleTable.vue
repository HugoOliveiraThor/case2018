<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Médico">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Paciente">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Consultório">{{ item.city }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [
        {
          doctor: 'Dakota Rice',
          patient: '$36,738',
          chamber: 'Niger'
        },

      ]
    }
  }
}
</script>
