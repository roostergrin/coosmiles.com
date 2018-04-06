<template lang="pug" src="./image.pug"></template>

<script>
export default {
  props: ['name'],
  computed: {
    image () {
      return require(`@/assets/images/${this.name}.jpg`)
    }
  },
  created () {
    console.log(this.image)
  }
}
</script>
