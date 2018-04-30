<template lang="pug" src="./tabs-about-team.pug"></template>

<script>
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  data () {
    return {
      showBio: false
    }
  },
  mixins: [elFadeUp],
  methods: {
    displayBio (i) {
      this.showBio = i
    }
  }
}
</script>
