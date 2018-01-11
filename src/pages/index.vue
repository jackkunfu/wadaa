<template lang="pug">
div
  head-nav(showNavBottom="true")

  .ctn1200
    .fl
      list-news(:listInfo="listInfo" @pageChange="pageChange")

    .fr
</template>

<script>

import headNav from './components/header'
import listNews from './components/list-news'

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
    listNews
  },
  mounted(){
  },
  methods: {
    pageChange(v){    //  应该用不到
      this.curPage = v;
    }
  }
}
</script>

