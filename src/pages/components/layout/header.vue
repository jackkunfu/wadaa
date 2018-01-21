<template lang="pug">
div
  .ctn1200
    .logo
      img(src="http://www.runningweekends.net/wp-content/uploads/2016/12/2016122007560316.jpg")
      div 周末享跑
      span Running Weekends

    .main.fr
      ul
        li.fl(v-for="(item, i) in tabs" @click="goUrl(item)")
          .box {{item.name}}
          ul.level2(:class=" i == tabs.length -1 ? 'last' : '' " v-if="item.childList && item.childList.length>0")
            li(v-for="nav in item.childList" @click="goUrl(nav)") {{nav.name}}
              ul.level3(:class=" i == tabs.length -1 ? 'last' : '' " v-if="nav.childList && nav.childList.length>0")
                li(v-for="nav in nav.childList" @click="goUrl(nav)") {{nav.name}}


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
            { 
              name: '2017赛事新闻',
              url: '',
              list: []
            },
            { name: '2017赛事规程', url: '' },
            { name: '2017赛事报名', url: '' },
            { name: '2017赛事新闻', url: '' }
          ]
        },
        {
          name: '关于我们',
          url: '',
          list: [
            { name: '团队领军人', url: '/aboutUs', query: {type: 1}, isLocation: true },
            { name: '团队特点及优势', url: '/aboutUs', query: {type: 2}, isLocation: true },
            { name: '合作伙伴和机构', url: '/aboutUs', query: {type: 3}, isLocation: true },
            { name: '赛事和系列活动', url: '' }
          ]
        }
      ]
    }
  },
  components: {
    headerBottom
  },
  mounted(){
    this.keyRequest('tabs', {
      url: '/categoryList',
      opts: {}
    }, this, true).then((res) => {
      if(res.code == 1){

        this.tabs = res.dataList;

        if(this.$route.path == '/'){   // 首页默认请求第一个module数据
          this.$parent.$children.forEach( el => {    //  循环APP.vue组件中的子组件找到index.vue中的indexInit并执行请求首页列表的数据
            var module = res.dataList[1].childList[1].module;
            if(el.indexInit) el.indexInit(module)
          })
        }

      }
      
    })
  },
  methods: {
    goUrl(item){
      if(item.url){
        // isLocation 增加个字段  防止 同一个页面更改hash值页面无变化时走location.href跳转
        if(item.isLocation){
          var search = ''
          if(item.query){
            if(JSON.stringify(item.query) != '{}'){
              search += '?'+JSON.stringify(item.query).replace(/({|}|")/g, '').replace(/,/g, '&').replace(/:/g, '=');
            }
          }
          location.href = 'http://' + location.host + '/#' + item.url + search;
        }else{
          this.$router.push({path: item.url, query: item.query});
        }
      }
    }
  },
  watch: {
    type(v){
      return v;
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
        ul.level2
          display: block;

      .box
        line-height: 100px;
        padding: 0 10px;
        min-width: 100px;
        
      ul.level2
        display: none;
        width: 200px;
        position: absolute;
        z-index: 10;
        top: 100px;
        left: 0;
        background: #fff;
        &.last
          left: auto;
          right: 0;
        li
          text-align: left;
          line-height: 30px;
          font-size: 14px;
          line-height: 40px;
          padding-left: 20px;
          border-bottom: 1px solid #e5e5e5;
          position: relative;
          &:hover
            color: #099;
            .level3
              display: block;
          ul.level3
            position: absolute;
            left: 200px;
            top: 0;
            display: none;
            width: 200px;
            z-index: 10;
            background: #fff;

</style>
