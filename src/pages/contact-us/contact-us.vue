<template lang="pug" src="./contact-us.pug"></template>

<script>
import CustomContactColumns from 'components/custom/custom-contact-columns/custom-contact-columns'

export default {
  computed: {
    props () {
      return this.$state.store.pages['contact-us']
    }
  },
  components: {
    CustomContactColumns
  }
}
</script>
