<template lang="pug">

div
  head-nav(showNavBottom="true")

  .ctn1200
    .fl
      list-news(:listInfo="listInfo")

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
      listInfo: {   // listNews组件需要信息
        url: '',
        opts: {
          page: this.curPage,  // page 在父组件这里传递貌似意义不大
          rows: 10
        }
      },
      curPage: 1
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

