

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
  mounted(){
    this.ajax('/articleNews', {
      title: this.module
    }).then(res =>{
      var list = res.objectData.list || [];
      if(list && list[0]){
        if(list[0].id){
          this.id = list[0].id;
          this.getDetail()
        }else{
          console.log('该module未返回详情id信息');
        }
      }
    })
  },
  methods: {}
}
</script>

