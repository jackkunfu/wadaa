<template lang="pug">

.ctn
  .ctn1200
    .fl(v-if="str")
      span 关键词：{{str}}
    .fr
      input()
      .crumbs
        span Home
        span(v-if="crumb")
          | >
          span {{crumb}}
        span(v-if="crumb1")
          | >
          span {{crumb1}}

</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      str: '',
      crumb: '',   // 面包屑
      crumb1: ''   // 面包屑1
    }
  },
  methods: {
    search(){
      var trimStr = str.trim();
      if(!trimStr) return
      // this.$router.push({path: '/s', query: {str: trimStr}})
    }
  }
}
</script>

<style scoped lang="sass">

.ctn
  background-image: url('../../imgs/slider-bg-dark.jpg');
  height: 1.6rem;
  font-size: 0.1rem;

</style>
