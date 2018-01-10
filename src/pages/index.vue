<template lang="pug">
div
    head-nav(showNavBottom="true")

    list(:listInfo="listInfo")
</template>

<script>

import HeadNav from './components/header'
import List from './components/List'

export default {
  name: 'index',
  data(){
      return {
        listInfo: {   // 需要展示的列表信息
          url: '',
          opts: {

          }
        }
      }
  },
  components: {
    HeadNav,
    List
  },
  mounted(){
    alert(2)
  }
}
</script>

