<template lang="pug" src="./block-intro.pug"></template>

<script>
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  mixins: [elFadeUp]
}
</script>
