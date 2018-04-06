<template lang="pug" src="./treatments.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import TabsTreatmentOptions from 'components/tabs/tabs-treatment-options/tabs-treatment-options'

export default {
  computed: {
    props () {
      return this.$state.store.pages.treatments
    }
  },
  components: {
    HeroPages,
    TabsTreatmentOptions
  }
}
</script>
