<template lang="pug">
div
  .header-top
    .ctn1200
      .fl
        span.phone-icon
          i.fa.fa-phone
        span 028-85090253
      .fr
        .icon-box
          .icon-show
            a.icon-1(href="http://contact@runningweekends.net")
              i.fa.fa-envelope
            a.icon-2(href="http://contact@runningweekends.net")
              i.fa.fa-envelope
      .fr
        .icon-box
          .icon-show
            a.icon-1(href="http://weibo.com/RunningWeekends")
              i.fa.fa-weibo
            a.icon-2(href="http://weibo.com/RunningWeekends")
              i.fa.fa-weibo
  .header-nav   
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
              li(v-for="nav in item.childList" @click.stop="goUrl(nav)") {{nav.name}}
                ul.level3(:class=" i == tabs.length -1 ? 'last' : '' " v-if="nav.childList && nav.childList.length>0")
                  li(v-for="nav in nav.childList" @click.stop="goUrl(nav)") {{nav.name}}


  header-bottom(v-if="showNavBottom")

</template>

<script>
import headerBottom from './headerBottom.vue'
export default {
  name: 'top',
  props: ['showNavBottom'],
  data () {
    return {
      tabs: [
        // {
        //   name: '中国哲学小镇山地马拉松',
        //   url: '',
        //   list: [
        //     { 
        //       name: '2017赛事新闻',
        //       url: '',
        //       list: []
        //     },
        //     { name: '2017赛事规程', url: '' },
        //     { name: '2017赛事报名', url: '' },
        //     { name: '2017赛事新闻', url: '' }
        //   ]
        // },
        // {
        //   name: '关于我们',
        //   url: '',
        //   list: [
        //     { name: '团队领军人', url: '/aboutUs', query: {type: 1}, isLocation: true },
        //     { name: '团队特点及优势', url: '/aboutUs', query: {type: 2}, isLocation: true },
        //     { name: '合作伙伴和机构', url: '/aboutUs', query: {type: 3}, isLocation: true },
        //     { name: '赛事和系列活动', url: '' }
        //   ]
        // }
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
          var module = res.dataList[0].childList[0].module;

          // this.$parent.$children.forEach( el => {    // 暂找不到直接的定位到index.vue的方法，就先循环APP.vue组件中的子组件找到index.vue中的indexInit并执行请求首页列表的数据
          //   if(el.indexInit) el.indexInit(module)
          // })
          
          // 上面的循环匹配不太好  改成$emit往父组件传递数据，在出发子组件的module更新吧
          this.$emit('initModule', module);
        }

      }
    });
    $(function(){
      // 获取.header-nav 距离浏览器顶部的距离
      var navH = $('.header-nav').offset().top;
      $(window).scroll(function(){
        // 获取滚动条的滚动距离
        var scroH = $(this).scrollTop();
        if(scroH>=navH){
          $('.header-nav').css({'position':'fixed','top':0})
        }else{
          $(".header-nav").css({"position":"static"});
        }
      })
    })

  },
  methods: {
    goUrl(item){
      if(item.url){
        // isLocation 增加个字段  防止 同一个页面更改hash值页面无变化时走location.href跳转
        if(item.isLocation){
          var search = ''
          if(item.query){
            var queryStr = JSON.stringify(item.query);
            if(queryStr != '{}'){
              search += '?'+ queryStr.replace(/({|}|")/g, '').replace(/,/g, '&').replace(/:/g, '=');
            }
          }
          location.href = 'http://' + location.host + '/#' + item.url + search;
        }else{
          this.$router.push({path: item.url, query: item.query});
        }
      }else{
        // this.$router.push({path: '/news', query: {module: item.module}});
        if(item.appView && item.appView == 1){
          location.href = 'http://' + location.host + '/#/detail?module=' + item.module;
        }else{
          location.href = 'http://' + location.host + '/#/news?module=' + item.module;
        }
        
      }

      // location.reload();
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
.header-nav
  width: 100%;
  border-bottom: 1px solid #eee;
  z-index: 100;
  background: #fff;
.header-top
  height: 40px;
  line-height: 40px;
  background: #3F3F3F;
  color: #fff;
  .phone-icon
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    background: #009999;
    i 
      position: relative;
      left: -5px;
      // color: #009999;
  .icon-box
    height: 40px;
    overflow: hidden;
    margin-right: 1px;
    .icon-show
      width: 40px;
      height: 80px;
      overflow: hidden;
      &:hover
        .icon-1
          -webkit-transform: translate(0,-40px);
          -moz-transform: translate(0,-40px);
          transform: translate(0,-40px);
        .icon-2
          -webkit-transform: translate(0,-40px);
          -moz-transform: translate(0,-40px);
          transform: translate(0,-40px);
      a 
        display: inline-block;
        width: 40px;
        height: 40px;
        text-align: center;
        background: #333;
        position: relative;
        transition: 0.4s transform;
        -webkit-transition: 0.4s -webkit-transform;
        i 
          color: #fff;
      .icon-2
        background: #009999;
      

  span
    padding-left: 10px;
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
            li
              color: #000;
              &:hover
                color: #099;

</style>
