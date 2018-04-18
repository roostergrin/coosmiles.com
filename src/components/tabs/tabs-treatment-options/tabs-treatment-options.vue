<template lang="pug" src="./tabs-treatment-options.pug"></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      fadeTreatment: false
    }
  },
  methods: {
    onWaypointTreatment ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.fadeTreatment = true
      }
    }
  }
}
</script>
