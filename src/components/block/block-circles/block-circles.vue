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
      counter: 3
    }
  },
  methods: {
    load () {
      this.counter += 4
    }
  }
}
</script>
