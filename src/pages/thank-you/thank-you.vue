<template lang="pug" src="./thank-you.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import TabsTreatmentOptions from 'components/tabs/tabs-treatment-options/tabs-treatment-options'

export default {
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    }
  },
  components: {
    HeroPages,
    TabsTreatmentOptions
  }
}
</script>
