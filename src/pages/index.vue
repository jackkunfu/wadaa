<template lang="pug">

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
  name: 'index',
  props: ['indexModule'],
  data(){
    return {
      listInfo: {   // listNews组件需要信息
      },
      module: ''
    }
  },
  components: {
    listNews,
    rightPart
  },
  mounted(){},
  methods: {
    indexInit(str){   // 暂时不用回调方法传参来处理，用props接收组件传递数据来处理
      this.module = str;
    }
  },
  watch: {
    indexModule(v){
      this.module = v;
    }
  }
}
</script>

