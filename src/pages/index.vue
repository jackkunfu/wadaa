<template lang="pug">

div
  //- head-nav(showNavBottom="true")

  .ctn1200
    .fl
      list-news(:module="module")

    .fr
      right-part

  //- footer-part

  share

</template>

<script>

// import headNav from './components/header'
// import footerPart from './components/footer'
import listNews from './components/list-news'
import rightPart from './components/layout/right'

import Share from './components/share'

export default {
  name: 'index',
  data(){
    return {
      listInfo: {   // listNews组件需要信息
      },
      module: ''
    }
  },
  components: {
    // headNav,
    // footerPart,
    listNews,
    rightPart,
    Share
  },
  mounted(){
  },
  methods: {
    indexInit(str){
      this.module = str;
    }
  }
}
</script>

