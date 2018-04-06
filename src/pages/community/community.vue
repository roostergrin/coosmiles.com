<template lang="pug" src="./community.pug"></template>

<script>
import Loader from 'components/loader/loader'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import BlockIntro from 'components/block/block-intro/block-intro'
import TabsCommunityEvents from 'components/tabs/tabs-community-events/tabs-community-events'

export default {
  computed: {
    props () {
      return this.$store.state.pages.community
    }
  },
  components: {
    Loader,
    HeroPages,
    BlockIntro,
    TabsCommunityEvents
  }
}
</script>
