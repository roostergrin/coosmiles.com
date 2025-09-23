<template lang='pug' src='./icon.pug'></template>

<script>
export default {
  props: ['name'],
  computed: {
    svg () {
      return require(`@/assets/icons/${this.name}.svg`)
    }
  }
}
</script>

<style scoped>
.logo-coo-class {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px; 
  padding: 4px;     
  margin: 0 auto;
}
.logo-coo-footer-class {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 4px;     
  margin: 0 auto;
  width: fit-content 
}
</style>
