<template lang="pug" src="./tabs-treatment-options.pug"></template>

<script>
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  data () {
    return {
      showTreatment: false
    }
  },
  mixins: [elFadeUp],
  methods: {
    displayTreatment (i) {
      this.showTreatment = i
    }
  }
}
</script>
