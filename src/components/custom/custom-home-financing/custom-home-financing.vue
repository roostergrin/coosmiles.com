<template lang="pug" src="./custom-home-financing.pug"></template>

<script>
import HomeForm from 'components/form/form-home/form-home'
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  data () {
    return {
      fadeCircles: false,
      intersectionCirclesOptions: {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        thresholds: [1]
      }
    }
  },
  components: {
    HomeForm
  },
  methods: {
    onWaypointCircles ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.fadeCircles = true
      }
    }
  },
  mixins: [elFadeUp]
}
</script>
