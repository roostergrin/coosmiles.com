<template lang="pug" src="./tabs-about-doctor.pug"></template>

<script>
import Icon from 'components/icon/icon'
import { elFadeUp } from 'components/mixins'

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
  },
  mixins: [elFadeUp]
}
</script>
