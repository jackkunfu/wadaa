<template lang="pug">
div
  .ctn1200
    .logo
      img(src="http://www.runningweekends.net/wp-content/uploads/2016/12/2016122007560316.jpg")
      div 周末享跑
      span Running Weekends

    .main.fr
      ul
        li.fl(v-for="item in tabs" @click="item.url")
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
  height: 1rem;
.logo
  float: left;
  margin-top: 0.3rem;
  color: #333;
  font-size: 0.24rem;
  line-height: 1;
  width: 1.7rem;
  img
    max-height: 0.4rem;
    float: left;
    margin-right: 0.1rem;
  span
    color: #999;
    font-size: 0.14rem;
    position: relative;
    top: -0.05rem;

.main
  >ul
    >li
      display: inline-block;
      text-align: center;
      position: relative;
      font-size: 0.15rem;
      &:hover
        cursor: pointer;
        .box
          color: #099;
          background: #ccc;
        ul
          display: block;

      .box
        line-height: 1rem;
        padding: 0 0.1rem;
        
      ul
        display: none;
        width: 2rem;
        position: absolute;
        top: 1rem;
        left: 0;
        background: #fff;
        li
          text-align: left;
          line-height: 0.3rem;
          font-size: 0.14rem;
          line-height: 0.4rem;
          padding-left: 0.2rem;
          border-bottom: 1px solid #e5e5e5;
          &:hover
            color: #099;

</style>
