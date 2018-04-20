<template lang="pug" src="./tabs-about-team.pug"></template>

<script>
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  data () {
    return {
      fadeImages: false
    }
  },
  methods: {
    onWaypointTeam ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.fadeImages = true
      }
    }
  },
  mixins: [elFadeUp]
}
</script>
