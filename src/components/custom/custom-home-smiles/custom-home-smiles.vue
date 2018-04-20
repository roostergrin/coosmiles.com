<template lang="pug" src="./custom-home-smiles.pug"></template>

<script>
import SliderHomeSmiles from 'components/slider/slider-home-smiles/slider-home-smiles'
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  components: {
    SliderHomeSmiles
  },
  mixins: [elFadeUp]
}
</script>
