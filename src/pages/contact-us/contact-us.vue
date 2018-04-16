<template lang="pug" src="./contact-us.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import CustomContactColumns from 'components/custom/custom-contact-columns/custom-contact-columns'

export default {
  computed: {
    props () {
      return this.$store.state.pages['contact']
    }
  },
  components: {
    HeroPages,
    CustomContactColumns
  }
}
</script>
