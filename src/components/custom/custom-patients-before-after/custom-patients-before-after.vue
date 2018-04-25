<template lang="pug" src="./custom-patients-before-after.pug"></template>

<script>
import Icon from 'components/icon/icon'
import { elFadeUp } from 'components/mixins'

export default {
  props: ['props'],
  mixins: [elFadeUp],
  components: {
    Icon
  }
}
</script>
