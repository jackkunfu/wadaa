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
  height: 100px;
.logo
  float: left;
  margin-top: 30px;
  color: #333;
  font-size: 24px;
  line-height: 1;
  width: 170px;
  img
    max-height: 40px;
    float: left;
    margin-right: 10px;
  span
    color: #999;
    font-size: 14px;
    position: relative;
    top: -5px;

.main
  >ul
    >li
      display: inline-block;
      text-align: center;
      position: relative;
      font-size: 15px;
      &:hover
        cursor: pointer;
        .box
          color: #099;
          background: #ccc;
        ul
          display: block;

      .box
        line-height: 100px;
        padding: 0 10px;
        
      ul
        display: none;
        width: 200px;
        position: absolute;
        z-index: 10;
        top: 100px;
        left: 0;
        background: #fff;
        li
          text-align: left;
          line-height: 30px;
          font-size: 14px;
          line-height: 40px;
          padding-left: 20px;
          border-bottom: 1px solid #e5e5e5;
          &:hover
            color: #099;

</style>
