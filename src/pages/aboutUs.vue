<template lang="pug">

.ctn1200
  .fl
    //- .lead-role(v-if="leadRole")
    .lead-role(v-if="type==1")
      img(src="../imgs/2017012612303789.png")
    //- .lead-advantage(v-if="leadAdvantage")
    .lead-advantage(v-if="type==2")
      img(src="../imgs/2017012612320064.png")
    //- .lead-activity(v-if="leadActivity")
    .lead-activity(v-if="type==3")
      img(src="../imgs/2017012612304465.png")

  .fr
    right-part

</template>

<script>

import listNews from './components/list-news'
import rightPart from './components/right'

export default {
  name: 'index',
  data(){
    return {
      leadRole: this.$route.query.type == 1 ? true : false,
      leadAdvantage: this.$route.query.type == 2 ? true : false,
      leadActivity: this.$route.query.type == 3 ? true : false,
      type: this.$route.query.type
    }
  },
  components: {
    listNews,
    rightPart
  },
  mounted(){
    var _this = this;
    // 检测链接type变化，不然在当前页面更改无效，需要head组件里用location.href跳转配合，不然也是无效
    window.onhashchange = function(e){
      // console.log(e)
      _this.type = location.href.split('type=')[1].split('&')[0];
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
  .fl
    width: 850px;
    img
      width: 100%;
      margin-top: 30px;

</style>


