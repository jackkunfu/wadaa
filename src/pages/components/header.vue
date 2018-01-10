<template lang="pug">
div
  .ctn1200
    .logo
      img(src="http://www.runningweekends.net/wp-content/uploads/2016/12/2016122007560316.jpg")
      div 周末享跑
      span Running Weekends

    .main
      ul
        li(v-for="item in tabs" @click="item.url")
          .box {{item.name}}
          ul
            li(v-for="nav in item.list" @click="item.url") {{nav.name}}

  header-bottom(v-if="showNavBottom")

</template>

<script>
import headerBottom from './headerBottom.vue'
export default {
  name: 'header',
  props: ['showNavBottom'],
  data () {
    return {
      tabs: [
        {
          name: '中国哲学小镇山地马拉松',
          url: '',
          list: [
            { name: '2017赛事新闻', url: '' },
            { name: '2017赛事规程', url: '' },
            { name: '2017赛事报名', url: '' },
            { name: '2017赛事新闻', url: '' },
          ]
        }
      ]
    }
  },
  components: {
    headerBottom
  },
  methods: {
    goUrl(urlStr){
      // if(urlStr) this.$router.push(urlStr);
    }
  }
}
</script>

<style scoped lang="sass">
.ctn1200
  height: 10rem;
.logo
  float: left;
  margin-top: 3rem;
  color: #333;
  font-size: 2.4rem;
  line-height: 1;
  width: 17rem;
  img
    max-height: 4rem;
    float: left;
    margin-right: 1rem;
  span
    color: #999;
    font-size: 1.4rem;

.main
  float: right;
  >ul
    >li
      padding: 0 1rem;
      display: inline-block;
      
      text-align: center;
      position: relative;
      &:hover
        cursor: pointer;
        .box
          color: #099;
          background: #ccc;
        ul
          display: block;

      .box
        line-height: 10rem;
        
      ul
        display: none;
        width: 20rem;
        position: absolute;
        top: 10rem;
        left: 0;
        background: #fff;
        li
          line-height: 3rem;
          font-size: 1.4rem;
          line-height: 4rem;
          padding-left: 2rem;
          border-bottom: 1px solid #e5e5e5;
          &:hover
            color: #099;

</style>
