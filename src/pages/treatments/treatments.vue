<template lang="pug" src="./treatments.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import TabsTreatmentOptions from 'components/tabs/tabs-treatment-options/tabs-treatment-options'
import BlockFlyers from 'components/block/block-flyers/block-flyers'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    HeroPages,
    TabsTreatmentOptions,
    BlockFlyers
  }
}
</script>
