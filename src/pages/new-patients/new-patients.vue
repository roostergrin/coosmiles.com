<template lang="pug" src="./new-patients.pug"></template>

<script>
import Loader from 'components/loader/loader'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import CustomPatientsSteps from 'components/custom/custom-patients-steps/custom-patients-steps'
import CustomBeforeAfter from 'components/custom/custom-patients-before-after/custom-patients-before-after'

export default {
  computed: {
    props () {
      return this.$store.state.pages['new-patients']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    HeroPages,
    CustomPatientsSteps,
    CustomBeforeAfter
  },
  created () {
    console.log(this.props)
  }
}
</script>
