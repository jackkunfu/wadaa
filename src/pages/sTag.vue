

<template lang="pug">
//-  关键字 tag  搜索页面

div
  .ctn1200
    .fl
      list-news(:module="module" :data="dataArr")

      //- div(v-if="dataArr.length == 0") 暂无
      //- .box(v-for="item in dataArr")
      //-   .time
      //-     .day {{item.createDate | day}}
      //-     span {{item.createDate | noday}}
          
      //-   .main
      //-     .img
      //-       img(:src="config.filePath + (item.image[0] == '|' ? item.image.slice(1) : item.image )")
      //-       .cover
      //-       .btn(@click="imgBig(item.image)") +

      //-     .name(@click="goDetail(item.id)")
      //-       i.fa.fa-pencil(style="")
      //-       span {{item.title}}
      //-     //- .tip 2017中国哲学小镇山地半程马拉松获奖选手名单及处罚公告
      //-       span By
      //-       | 周末享跑

      //-     .text(v-html="item.description")
          
      //-     .read-all(@click="goDetail(item.id)") 阅读全文
      //-       i.fa.fa-arrow-circle-right(style="margin-left:5px;")

      //-     .key(v-if="item.keywords && item.keywords.split(' ').length>0")
      //-       i.fa.fa-tag(style="color:#ddd;margin-right:5px;")
      //-       //- span(v-for="it in item.keywords.split(' ')" @click="sTag(it)") {{it}}
      //-       span(v-for="it in item.keywords.split(' ')") {{it}}

    .fr
      right-part

</template>

<script>

import listNews from './components/list-news'
import rightPart from './components/layout/right'

export default {
  name: 'sTag',
  data(){
    return {
      module: this.$route.query.str,
      isTag: this.$route.query.tag || false,
      dataArr: []
    }
  },
  components: {
    listNews,
    rightPart
  },
  mounted(){
    this.ajax('/articleNews', {
      title: this.module
    }).then(res =>{
      this.dataArr = res && res.dataList ? res.dataList : [];
    })
  },
  methods: {}
}
</script>

