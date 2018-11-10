<template>
<div class="md-autocomplete">
      <md-autocomplete
        class="search"
        v-model="selected"
        :md-options="list"
      >
        <label>Lista de {{nameOfList}} - {{selected}} ...</label>
      </md-autocomplete>
</div>
</template>

<script>
export default {
  name:'Search',
  props:['data', 'nameOfList'],
  data() {
    return {
      selected:null,
      list:this._props.data || []
    }
  }
}
</script>
