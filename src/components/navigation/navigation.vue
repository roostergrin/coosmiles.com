<template lang='pug' src='./navigation.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    props () {
      return this.$router.options.routes
    }
  },
  data () {
    return {
      menu: false
    }
  },
  components: {
    Icon
  }
}

</script>
