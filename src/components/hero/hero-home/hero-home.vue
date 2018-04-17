<template lang="pug" src="./hero-home.pug"></template>

<script>
export default {
  methods: {
    scrolled ({ going, direction }) {
      if (going === this.$waypointMap.GOING_OUT) { this.$store.dispatch('VIEW_NAV', true) }
      if (going === this.$waypointMap.GOING_IN) { this.$store.dispatch('VIEW_NAV', false) }
    }
  }
}
</script>
