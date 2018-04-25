<template lang="pug" src="./custom-patients-steps.pug"></template>

<script>
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  data () {
    return {
      fadeStep: -1,
      intersectionStepOptions: {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        thresholds: [1]
      }
    }
  },
  mixins: [elFadeUp],
  methods: {
    onWaypointStep ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.fadeStep += 1
        console.log(this.fadeStep)
      }
    }
  }
}
</script>
