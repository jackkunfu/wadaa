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

      .key
        span 无缝隙古镇

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
      }
    }
  }
</script>

<style lang="sass" scoped>

.list-ctn
  width: 8.5rem;
  .box
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 0.1rem;

.time
  position: absolute;
  top: 0;
  left: 0;
  width: 0.6rem;
  text-align: center;
  font-size: 0.1rem;
  color: #4e4e4e;
  line-height: 0.3rem;
  .day
    font-size: 0.18rem;
    color: #333;
    font-weight: bold;
    line-height: 0.3rem;
    border-bottom: 1px solid #099;

.main
  padding-left: 0.75rem;
  .img
    display: block;
    width: 100%;
    height: 2rem;
    overflow: hidden;
    position: relative;
    background-color: #eee;
    &:hover
      .cover
        display: block;
      .btn
        top: 50%;
        margin-top: -0.3rem;

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
      top: -0.6rem;
      left: 50%;
      width: 0.6rem;
      height: 0.6rem;
      margin-left: -0.3rem;
      background-color: #444;
      color: #fff;
      z-index: 2;
      border-radius: 50%;
      transition: all 0.5s;
      transition-duration: .2s;
      font-size: 0.24rem;
      text-align: center;
      line-height: 0.6rem;
      font-weight: bolder;
  .name
    font-size: 0.24rem;
    color: #333;
    margin-top: 0.2rem;
    cursor: pointer;
    &:hover
      color: #099;
  .tip
    font-size: 0.1rem;
    color: #333;
    line-height: 0.25rem;
    margin-bottom: 0.1rem;
    span
      margin: 0 0.05rem;
    
    &:hover
      color: #099;
      span
        color: #333;

  .text
    color: #333;
    font-size: 0.14rem;
    line-height: 0.2rem;
    max-height: 0.6rem;
    overflow: hidden;
    text-indent: 0.28rem;

  .read-all
    display: inline-block;
    padding: 0 0.1rem;
    font-size: 0.12rem;
    height: 0.3rem;
    line-height: 0.28rem;
    color: #333;
    border: 1px solid #333;
    border-radius: 3px;
    cursor: pointer;
    &:hover
      background: #c00;
      border: 1px solid #c00;
      color: #fff;

  .key
    font-size: 0.12rem;
    color: #333;
    line-height: 0.12rem;
    span
      margin-right: .1rem;


      
    
</style>

