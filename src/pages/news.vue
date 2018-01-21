<template lang="pug">

div
  .ctn1200
    .fl(style="width:850px;")
      list-news(:module="module")

    .fr
      right-part

  share

</template>

<script>

import listNews from './components/list-news'
import rightPart from './components/layout/right'

import Share from './components/share'

export default {
  name: 'news',
  data(){
    return {
      module: this.$route.query.module || ''
    }
  },
  components: {
    listNews,
    rightPart,
    Share
  },
  mounted(){
    var _this = this;
    window.onhashchange = function(e){
      _this.module = location.href.split('module=')[1].split('&')[0];
    }
  },
  methods: {}
}
</script>

