

<template lang="pug">
//-  关键字 tag  搜索页面

div
  .ctn1200
    .fl
      list-news(:listInfo="listInfo")

    .fr
      right-part

</template>

<script>

import listNews from './components/list-news'
import rightPart from './components/layout/right'

export default {
  name: 'sTag',
  data(){
    return {
      listInfo: {   // listNews组件需要信息
        url: '',
        opts: {
          page: this.curPage,  // page 在父组件这里传递貌似意义不大
          rows: 10
        }
      },
      curPage: 1,
      keyStr: this.$route.query.str,
      isTag: this.$route.query.tag || false
    }
  },
  components: {
    listNews,
    rightPart,
    // Share
  },
  mounted(){},
  methods: {}
}
</script>

