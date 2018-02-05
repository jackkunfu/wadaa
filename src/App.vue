<template lang="pug">

#app

  head-nav(showNavBottom="true" @initModule="initIndexModule")

  router-view(:indexModule="indexModule")

  footer-part

</template>

<script>
import headNav from './pages/components/layout/header'
import listNews from './pages/components/list-news'
import footerPart from './pages/components/layout/footer'
export default {
  name: 'app',
  components: {
    headNav,
    footerPart
  },
  data(){
    return {
      indexModule: ''
    }
  },
  methods: {
    initIndexModule(v){    // 传递首页所需module请求首页列表
      console.log('get emit: '+v)
      this.indexModule = v;
    }
  }
}
</script>

<style lang="sass">
</style>
