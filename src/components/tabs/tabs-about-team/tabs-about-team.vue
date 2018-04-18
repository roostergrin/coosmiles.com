<template lang="pug" src="./tabs-about-team.pug"></template>

<script>
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
  }
}
</script>
