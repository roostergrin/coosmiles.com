<template lang="pug" src="./hero-pages.pug"></template>

<script>
import ComplimentaryExamForm from 'components/modal/modal-complimentary-exam/modal-complimentary-exam'

export default {
  data () {
    return {
      showComplimentaryModal: false
    }
  },
  props: ['props'],
  methods: {
    scrolled ({ going, direction }) {
      if (going === this.$waypointMap.GOING_OUT) { this.$store.dispatch('VIEW_NAV', true) }
      if (going === this.$waypointMap.GOING_IN) { this.$store.dispatch('VIEW_NAV', false) }
    }
  },
  components: {
    ComplimentaryExamForm
  }
}
</script>
