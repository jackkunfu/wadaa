<template lang="pug">

div
  .ctn1200
    .fl(style="width:850px;")
      div(style="position:relative;margin-bottom:80px;")
        .time(v-if="item.createDate")
          .day {{item.createDate | day}}
          span {{item.createDate | noday}}

        .main
          .img(v-if="item.image")
            img(:src="config.filePath + (item.image[0] == '|' ? item.image.slice(1) : item.image )")
            //- .cover
            //- .btn +

          .name(@click="goDetail(item.id)" v-if="item.title")
            i.fa.fa-pencil(style="")
            span {{item.title}}
          //- .tip 2017中国哲学小镇山地半程马拉松获奖选手名单及处罚公告
            span By
            | 周末享跑

      div(v-if="enrollArr.length>0" style="text-align:center;margin-bottom:50px;")
        .sign-enter
          h3 报名信息
        .box(v-for="item in enrollArr")
          .name ⭕️ 享跑路程： {{item.name}}
          .fee ⭕️ 报名费用： {{item.fee/100}}元
          div ⭕️ 报名时间： {{item.matchStartDate}} - {{item.matchEndDate}}
          span.enroll(@click="goEnroll(item.entryId)") &gt;&gt;&gt;&gt;&gt;&gt;点击报名&lt;&lt;&lt;&lt;&lt;&lt;

      div(v-if="this.enrollArr.length==0 && enrollTip" style="line-height: 80px;color: #999;font-size: 14px;") 报名时间未到或者已经结束

      .detail(v-html="detail")

      div(style="margin-top:30px;")
        share

    .fr
      right-part

</template>

<script>

import { config } from '../js/vueProto'

import rightPart from './components/layout/right'

import share from './components/share'

export default {
  name: 'detail',
  filters: {
    day(v){
      if(!v) return ''
      var v0 = v.split(' ')[0]
      return v0.split('-')[2];
    },
    noday(v){
      if(!v) return ''
      var v0 = v.split(' ')[0];
      return v0.split('-')[0] + '-' + v0.split('-')[1];
    }
  },
  data(){
    return {
      config: config,
      item: {
        marathonEvent: {
          image: []
        }
      },
      module: this.$route.query.module || '',
      id: this.$route.query.id || '',
      detail: '',
      enrollArr: [],    // 可能有多种形式的报名以及报名入口
      enrollTip: false
    }
  },
  components: {
    rightPart,
    share
  },
  mounted(){
    if(!this.id){
      this.getIdFromMoudle();
    }else{
      this.getDetail();
    }
    
    var _this = this;
    window.onhashchange = function(e){
      _this.module = location.href.split('module=')[1].split('&')[0];
      _this.getIdFromMoudle();
    }

  },
  methods: {
    getIdFromMoudle(){    // 如果query中没有id ，根据query中的module获取该id
      this.ajax('/articleList', {
        pageNo: 1,
        pageSize: 20,
        module: this.module
      }).then(res =>{
        var list = res.objectData.list || [];
        if(list && list[0]){
          if(list[0].id){
            this.id = list[0].id;
            this.getDetail()
          }else{
            console.log('该module未返回详情id信息');
          }
        }
      })
    },
    getDetail(){    //  根据id获取当前活动详情内容
      this.ajax('/article/get', {
        id: this.id
      }).then( res => {
        var data = res.objectData
        this.item = data;
        this.detail = data.marathonArticleData.content;

        // 如果存在赛事id 去请求报名列表
        if(data.marathonEvent && data.marathonEvent.id) this.getEnrollList(data.marathonEvent.id);
      })
    },
    getEnrollList(id){
      this.enrollTip = true;
      this.ajax('/getEventEntryList', {eventId: id}).then((res)=>{
        this.enrollArr = res.eventList || [];
      })
    },
    goEnroll(entryId){
      this.$router.push({path: '/signUp', query: {entryId: entryId, detailId: this.id}})
    }
  }
}
</script>

<style lang="sass" scoped>
.sign-enter 
  margin-bottom: 10px;
.box
  // text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 30px;
  color: #4e4e4e;
.enroll
  font-family: comic sans ms,cursive;
  font-size: 24px;
  color: #0f0;
  cursor: pointer;
  &:hover
    border-bottom: 2px solid #099;

.time
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  text-align: center;
  font-size: 10px;
  color: #4e4e4e;
  line-height: 30px;
  .day
    font-size: 18px;
    color: #333;
    font-weight: bold;
    line-height: 30px;
    border-bottom: 1px solid #099;

.main
  padding-left: 75px;
  .img
    display: block;
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    background-color: #eee;
    &:hover
      .cover
        display: block;
      .btn
        top: 50%;
        margin-top: -30px;

    img
      width: 100%;
    .cover
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,153,153,0.8);
      z-index: 1;
    .btn
      position: absolute;
      top: -60px;
      left: 50%;
      width: 60px;
      height: 60px;
      margin-left: -30px;
      background-color: #444;
      color: #fff;
      z-index: 2;
      border-radius: 50%;
      transition: all 0.5s;
      transition-duration: .2s;
      font-size: 24px;
      text-align: center;
      line-height: 60px;
      font-weight: bolder;
  .name
    font-size: 24px;
    color: #333;
    margin-top: 20px;
    cursor: pointer;
    &:hover
      color: #099;

    i
      background: #099;
      color: #fff;
      font-size: 15px;
      width: 25px;
      height: 27px;
      line-height: 32px;
      margin-right: 5px;
      text-align: center;


  .tip
    font-size: 10px;
    color: #333;
    line-height: 25px;
    span
      margin: 0 5px;
    
    &:hover
      color: #099;
      span
        color: #333;

  .text
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    line-height: 20px;
    max-height: 60px;
    overflow: hidden;
    text-indent: 28px;

  .read-all
    display: inline-block;
    padding: 0 10px;
    font-size: 12px;
    height: 30px;
    line-height: 28px;
    color: #333;
    border: 1px solid #333;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    &:hover
      background: #c00;
      border: 1px solid #c00;
      color: #fff;

  .key
    font-size: 12px;
    color: #333;
    line-height: 12px;
    margin-top: 30px;
    span
      margin-right: 10px;
</style>


