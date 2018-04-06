<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroHome from 'components/hero/hero-home/hero-home'
import BlockIntroHome from 'components/block/block-intro-home/block-intro-home'
import CustomHomeSection from 'components/custom/custom-home-section/custom-home-section'
import CustomHomeReviews from 'components/custom/custom-home-reviews/custom-home-reviews'
import CustomHomeSmiles from 'components/custom/custom-home-smiles/custom-home-smiles'
import CustomHomeFinancing from 'components/custom/custom-home-financing/custom-home-financing'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    HeroHome,
    BlockIntroHome,
    CustomHomeSection,
    CustomHomeReviews,
    CustomHomeSmiles,
    CustomHomeFinancing
  }
}
</script>
