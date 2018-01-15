<template lang="pug">

div
  head-nav(showNavBottom="true")

  .ctn1200
    .fl
      //- .lead-role(v-if="leadRole")
      .lead-role(v-if="type==1")
        img(src="../imgs/2017012612303789.png")
      //- .lead-advantage(v-if="leadAdvantage")
      .lead-advantage(v-if="type==2")
        img(src="../imgs/2017012612320064.png")
      //- .lead-activity(v-if="leadActivity")
      .lead-activity(v-if="type==3")
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
      leadRole: this.$route.query.type == 1 ? true : false,
      leadAdvantage: this.$route.query.type == 2 ? true : false,
      leadActivity: this.$route.query.type == 3 ? true : false,
      type: this.$route.query.type
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
    width: 850px;
    img
      width: 100%;
      margin-top: 30px;

</style>


