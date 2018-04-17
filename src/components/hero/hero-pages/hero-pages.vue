<template lang="pug" src="./hero-pages.pug"></template>

<script>
export default {
  props: ['props'],
  methods: {
    scrolled ({ going, direction }) {
      if (going === this.$waypointMap.GOING_OUT) { this.$store.dispatch('VIEW_NAV', true) }
      if (going === this.$waypointMap.GOING_IN) { this.$store.dispatch('VIEW_NAV', false) }
    }
  }
}
</script>
