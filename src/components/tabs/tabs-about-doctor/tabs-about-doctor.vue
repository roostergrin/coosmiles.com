<template lang="pug" src="./tabs-about-doctor.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      showBio: 'childhood'
    }
  },
  props: ['props'],
  components: {
    Icon
  },
  methods: {
    selectBio (i) {
      this.showBio = i
    }
  }
}
</script>
