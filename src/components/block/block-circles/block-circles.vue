<template lang="pug" src="./block-circles.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.blog
    }
  },
  data () {
    return {
      showEvent: false,
      counter: 3,
      fadeLoad: false,
      intersectionLoadOptions: {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        thresholds: [1]
      }
    }
  },
  methods: {
    load () {
      this.counter += 4
    },
    onWaypointLoad ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.fadeLoad = true
      }
    },
    displayEvents (i) {
      this.showEvent = i
    }
  }
}
</script>
