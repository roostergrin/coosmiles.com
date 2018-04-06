<template lang="pug" src="./new-patients.pug"></template>

<script>
import CustomPatientsSteps from 'components/custom/custom-patients-steps/custom-patients-steps'
import CustomBeforeAfter from 'components/custom/custom-patients-before-after/custom-patients-before-after'

export default {
  computed: {
    props () {
      return this.$state.store.pages['new-patients']
    }
  },
  components: {
    CustomPatientsSteps,
    CustomBeforeAfter
  }
}
</script>
