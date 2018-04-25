<template lang="pug" src="./tabs-community-events.pug"></template>

<script>
import { elFadeUp } from 'components/mixins'
import BlockCircles from 'components/block/block-circles/block-circles'

export default {
  props: ['props'],
  mixins: [elFadeUp],
  components: {
    BlockCircles
  }
}
</script>
