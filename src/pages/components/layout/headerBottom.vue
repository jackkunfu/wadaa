<template lang="pug">

.ctn
  //- .ctn1200
  //-   .fl(v-if="str")
  //-     span 关键词：{{str}}
  //-   .fr
  //-     input()
  //-     .crumbs
  //-       span Home
  //-       span(v-if="crumb")
  //-         | >
  //-         span {{crumb}}
  //-       span(v-if="crumb1")
  //-         | >
  //-         span {{crumb1}}
  .ctn1200
    .search
      .search-msg
        input(placeholder="输入关键词后回车...") 
        .search-icon(@click="")
          i.iconfont &#xe63d;
      .crumbs
        span Home
        span(v-if="crumb") >>
          span {{crumb}}
        span(v-if="crumb1") >>
          span {{crumb1}}

</template>

<script>
export default {
  name: 'topDown',
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
  background-image: url('../../../imgs/slider-bg-dark.jpg');
  height: 160px;
  line-height: 160px;
  font-size: 10px;
  margin-bottom: 50px;
  .ctn1200
    position: relative;
    .search
      position: absolute;
      right: 0;
      .search-msg
        position: relative;
        input
          height: 36px;
          line-height: 36px;
          padding: 0 10px;
          border-radius: 5px;
          border: none;
          outline: none;
          background: #797979;
          color: #fff;
          width: 250px;
          &:focus
            background: #c5c5c5;
        .search-icon
          position: absolute;
          right: 0;
          width: 40px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          background: #d7d7d7;
          top: 63px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          cursor: pointer;
          img
            width: 15px;


      .crumbs
        height: 35px;
        line-height: 35px;
        text-align: center;
        background: #009999;
        color: #fff;
        position: relative;
        top: -35px;


</style>
