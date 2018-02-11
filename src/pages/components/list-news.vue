<template lang="pug">

.list-ctn
  //- div(v-if="dataArr.length == 0") 暂无
  .box(v-for="item in otherData")
    .time(v-if="item.createDate")
      .day {{item.createDate | day}}
      span {{item.createDate | noday}}
      
    .main
      .img
        img(:src="config.filePath + (item.image[0] == '|' ? item.image.slice(1) : item.image )")
        .cover
        .btn(@click="imgBig(item.image)") +

      .name(@click="goDetail(item.id)")
        i.fa.fa-pencil(style="")
        span {{item.title || item.name}}
      //- .tip 2017中国哲学小镇山地半程马拉松获奖选手名单及处罚公告
        span By
        | 周末享跑

      .text(v-html="item.description")
      
      .read-all(@click="goDetail(item.id)") 阅读全文
        i.fa.fa-arrow-circle-right(style="margin-left:5px;")

      .key(v-if="item.keywords && item.keywords.split(' ').length>0")
        i.fa.fa-tag(style="color:#ddd;margin-right:5px;")
        span(v-for="it in item.keywords.split(' ')" @click="sTag(it, 'tag')") {{it}}


  .box(v-for="item in dataArr")
    .time(v-if="item.createDate")
      .day {{item.createDate | day}}
      span {{item.createDate | noday}}
      
    .main
      .img
        img(:src="config.filePath + (item.image[0] == '|' ? item.image.slice(1) : item.image )")
        .cover
        .btn(@click="imgBig(item.image)") +

      .name(@click="goDetail(item.id)")
        i.fa.fa-pencil(style="")
        span {{item.title || item.name}}
      //- .tip 2017中国哲学小镇山地半程马拉松获奖选手名单及处罚公告
        span By
        | 周末享跑

      .text(v-html="item.description")
      
      .read-all(@click="goDetail(item.id)") 阅读全文
        i.fa.fa-arrow-circle-right(style="margin-left:5px;")

      .key(v-if="item.keywords && item.keywords.split(' ').length>0")
        i.fa.fa-tag(style="color:#ddd;margin-right:5px;")
        span(v-for="it in item.keywords.split(' ')" @click="sTag(it, 'tag')") {{it}}
        //- span(v-for="it in item.keywords.split(' ')") {{it}}

  pager(:pageData="pageData" @pageChange="pageChange" v-if="dataArr.length>0")

  .img-show(v-show="showImg" @click="showImg=false")
    img(:src="curShowImg" :class=" showImg ? 'show' : '' ")

</template>

<script>
  import { config } from '../../js/vueProto'
  import pager from './pager'

  export default {
    name: 'componentNewsList',
    props: ['module', 'data'],
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
        otherData: [],
        pageData: {
          cur: 1,
          total: 0
        },
        curPage: 1,
        config: config,
        curShowImg: '',
        showImg: false
      }
    },
    components: {
      pager
    },
    mounted(){
      // 请求列表数据
      this.topList();
      this.list();
    },
    methods: {
      topList(){
        this.ajax('/top', {}).then(data =>{
          if(data.code==1){
            this.otherData = data.objectData || [];
          }
        })
      },
      pageChange(v){  // 页码变化事件
        this.curPage = v;
        this.list();
        this.otherData = []
        if(v==1) this.topList();
      },
      imgBig(img){
        this.showImg = true;
        this.curShowImg = config.filePath + ( img[0] == '|' ? img.slice(1) : img );
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
            pageSize: 10,
            module: this.module
          }
        }
        this.keyRequest('dataArr', listConfig, this, true)
          .then( res =>{
            if(res.code == 1){
              this.dataArr = res.objectData.list || [];
              // var list = res.objectData.list || [];
              // this.dataArr = list.map( v => {
              //   console.log(v.keywords)
              //   v.keywords = v.keywords.split(' ');
              //   return v
              // })
              var cp = res.objectData.pageNo
              this.curPage = cp
              this.pageData = {
                total: res.objectData.count || 0,
                cur: cp || 1
              }
            }else{
              this.dataArr =  [];
              this.pageData = {
                total: 1,
                cur: 1
              }
            }
          });
      },
      sTag(str){
        this.$router.push({
          path: '/sTag',
          query: {
            str: str,
            isTag: 1
          }
        })
        setTimeout(() => {
          window.history.go(0)
        }, 20);
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
      },
      data(v){
        if(v){
          this.dataArr = v;
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
.img-show
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  img
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 2s;
    width: 0;
    height: 0;
    &.show
      width: auto;
      height: auto;

.list-ctn
  width: 850px;
  .box
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 30px;
    margin-bottom: 30px;

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
      // width: 100%;
      max-width: 100%;
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
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
      cursor: pointer;

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
      cursor: pointer;
      &:hover
        color: #099;

</style>

