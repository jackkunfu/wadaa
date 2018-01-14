<template lang="pug">
div
  head-nav(showNavBottom="true")

  .ctn1200
    .fl
      .lead-role(v-if="leadRole")
        img(src="../imgs/2017012612303789.png")
      .lead-advantage(v-if="leadAdvantage")
        img(src="../imgs/2017012612320064.png")
      .lead-activity(v-if="leadActivity")
        img(src="../imgs/2017012612304465.png")

    .fr
      right-part
  footer-part
</template>

<script>

import headNav from './components/header'
import listNews from './components/list-news'
import footerPart from './components/footer'
import rightPart from './components/right'

export default {
  name: 'index',
  data(){
    return {
      leadRole: false,
      leadAdvantage: false,
      leadActivity: true,
    }
  },
  components: {
    headNav,
    listNews,
    footerPart,
    rightPart,
  },
  mounted(){
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
  .fl
    width: 8.5rem;
    img
      width: 100%;
      margin-top: 30px;

</style>


