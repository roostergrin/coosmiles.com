<template lang="pug" src="./Footer.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    props () {
      return {
        props: this.$store.state.app['footer']
      }
    }
  },
  components: {
    Icon
  }
}
</script>
