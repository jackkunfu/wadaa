<template lang="pug">

div
  .ctn1200
    .fl
      .detail(v-html="detail")

    .fr
      right-part

  share

</template>

<script>
import listNews from './components/list-news'
import rightPart from './components/layout/right'

import Share from './components/share'

export default {
  name: 'index',
  data(){
    return {
      id: this.$route.query.id,
      detail: ''
    }
  },
  components: {
    listNews,
    rightPart,
    Share
  },
  mounted(){
    this.keyRequest('detail', {
      url: '',
      opts: {
        id: this.id
      },
      dataKey: ''
    }, this)
  },
  methods: {}
}
</script>

