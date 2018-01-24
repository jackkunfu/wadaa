

<template lang="pug">
//-  关键字 tag  搜索页面

div
  .ctn1200
    .fl
      list-news(:module="module")

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
      module: this.$route.query.str,
      isTag: this.$route.query.tag || false
    }
  },
  components: {
    listNews,
    rightPart
  },
  mounted(){},
  methods: {}
}
</script>

