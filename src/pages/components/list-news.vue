<template lang="pug">

.list-ctn
  .box(v-for="item in dataArr")
    .time
      .day 17
      span 2017-02
      
    .main
      .img
        img(src="")
        .cover
        .btn +

      .name 2017中国哲学小镇山地半程马拉松获奖选手名单及处罚公告
      .tip 2017中国哲学小镇山地半程马拉松获奖选手名单及处罚公告
        span By
        | 周末享跑

      .text
        | 由于在3月5日的比赛中有获奖者为替跑选手，所以名单公示不得不推迟;经过组委会和相关人员的沟通，对获奖选手进行了调整，于3月17日开始公示，近期组委会将联系获奖选手告知奖金放发事宜；同时对于替跑选手的处罚公告也一并开始公示。             &nb…
      
      .read-all 阅读全文
        i.fa.fa-arrow-circle-right(style="margin-left:5px;")

      .key
        //- i.icon.iconfont &#xf02b;
        i.fa.fa-tag(style="color:#ddd;margin-right:5px;")
        span(@click="sTag('111')") 无缝隙古镇

  pager(:pageData="pageData" @pageChange="pageChange")

</template>

<script>
  import pager from './pager'

  export default {
    name: 'component news list',
    props: ['listInfo'],
    data(){
      return {
        dataArr: [1],     // 列表数据
        pageData: {
          cur: 1,
          total: 10
        },
        curPage: this.listInfo.cur
      }
    },
    components: {
      pager
    },
    mounted(){
      // 请求列表数据
      this.list();
    },
    methods: {
      pageChange(v){  // 页码变化事件
        this.curPage = v;
        this.list();
      },
      list(){
        var opts = this.listInfo
        opts.page = this.curPage
        this.keyRequest('dataArr', opts, this, true)
          .then((res)=>{
            this.dataArr = res.data || [1];
            var cp = res.curPage
            this.curPage = cp
            this.pageData = {
              total: res.total || 10,
              cur: cp || 1
            }
          });
      },
      sTag(str){
        alert(1)
        this.$router.push({
          path: '/sTag',
          query: {
            str: str,
            isTag: 1
          }
        })
      }
    }
  }
</script>

<style lang="sass" scoped>

.list-ctn
  width: 850px;
  .box
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;

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
  .tip
    font-size: 10px;
    color: #333;
    line-height: 25px;
    margin-bottom: 10px;
    span
      margin: 0 5px;
    
    &:hover
      color: #099;
      span
        color: #333;

  .text
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

