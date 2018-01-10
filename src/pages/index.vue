<template lang="pug">
div
    head-nav(showNavBottom="true")

    list-news(:listInfo="listInfo")
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

          }
        }
      }
  },
  components: {
    headNav,
    listNews
  },
  mounted(){
  }
}
</script>

