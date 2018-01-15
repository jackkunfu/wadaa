<template lang="pug">

#app

  head-nav(showNavBottom="true")

  router-view

  footer-part

</template>

<script>
import headNav from './pages/components/header'
import listNews from './pages/components/list-news'
import footerPart from './pages/components/footer'
export default {
  name: 'app',
  components: {
    headNav,
    footerPart
  }
}
</script>

<style lang="sass">
</style>
