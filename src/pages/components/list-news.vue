<template lang="pug">

.list-ctn
  div(v-if="dataArr.length == 0") 暂无
  .box(v-for="item in dataArr")
    .time
      .day {{item.createDate | day}}
      span {{item.createDate | noday}}
      
    .main
      .img
        img(:src="config.filePath + (item.image[0] == '|' ? item.image.slice(1) : item.image )")
        .cover
        .btn +

      .name(@click="goDetail(item.id)") {{item.title}}
      //- .tip 2017中国哲学小镇山地半程马拉松获奖选手名单及处罚公告
        span By
        | 周末享跑

      .text(v-html="item.marathonArticleData.content")
      
      .read-all(@click="goDetail(item.id)") 阅读全文
        i.fa.fa-arrow-circle-right(style="margin-left:5px;")

      //- .key
        i.fa.fa-tag(style="color:#ddd;margin-right:5px;")
        span(@click="sTag('111')") 无缝隙古镇

  pager(:pageData="pageData" @pageChange="pageChange")

</template>

<script>
  import { config } from '../../js/vueProto'
  import pager from './pager'

  export default {
    name: 'componentNewsList',
    props: ['module'],
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
        dataArr: [],     // 列表数据
        pageData: {
          cur: 1,
          total: 10
        },
        curPage: 1,
        config: config
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
        // alert('list-news module:'+this.module)
        if(!this.module){
          console.log('no module');
          return
        }
        var listConfig = {
          url: '/articleList',
          opts: {
            pageNo: this.curPage,
            pageSize: 20,
            module: this.module
          }
        }
        this.keyRequest('dataArr', listConfig, this, true)
          .then((res)=>{
            if(res.code == 1){
              console.log(res.list)
              this.dataArr = res.list || [];
              var cp = res.curPage
              this.curPage = cp
              this.pageData = {
                total: res.total || 10,
                cur: cp || 1
              }
            }
            
          });
      },
      sTag(str){
        // alert(1)
        this.$router.push({
          path: '/sTag',
          query: {
            str: str,
            isTag: 1
          }
        })
      },
      goDetail(id){
        this.$router.push({
          path: '/detail',
          query: {
            id: id
          }
        })
      }
    },
    watch: {
      module(v){
        if(v){
          console.log('module改变啦：'+v)
          this.list();
        }
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
    margin-bottom: 10px;

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

