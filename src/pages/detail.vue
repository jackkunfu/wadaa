<template lang="pug">

div
  .ctn1200
    .fl(style="width:850px;")

      .sign-enter(v-if="this.enrollArr.length>0")
        h3 报名信息
      .box(v-for="item in enrollArr")
        .name ⭕️ 享跑路程： {{item.name}}
        .fee ⭕️ 报名费用： {{item.fee}}
        .time ⭕️ 报名时间： {{item.matchStartDate}} - {{item.matchEndDate}}
        span.enroll(@click="goEnroll(item.entryId)") &gt;&gt;&gt;&gt;&gt;&gt;点击报名&lt;&lt;&lt;&lt;&lt;&lt;
      .detail(v-html="detail")

    .fr
      right-part

  share

</template>

<script>
import rightPart from './components/layout/right'

import Share from './components/share'

export default {
  name: 'detail',
  data(){
    return {
      module: this.$route.query.module || '',
      id: this.$route.query.id || '',
      detail: '',
      enrollArr: []    // 可能有多种形式的报名以及报名入口
    }
  },
  components: {
    rightPart,
    Share
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
      // _this.ajax('/articleList', {
      //   pageNo: 1,
      //   pageSize: 20,
      //   module: _this.module
      // }).then( (res)=>{
      //   var list = res.list
      //   if(list && list[0]){
      //     _this.id = list[0].id;
      //     list[0].id && _this.getDetail()
      //   }else{
      //     alert('id请求出错');
      //   }
      // } )
    }

  },
  methods: {
    getIdFromMoudle(){    // 如果query中没有id ，根据query中的module获取该id
      this.ajax('/articleList', {
        pageNo: 1,
        pageSize: 20,
        module: this.module
      }).then(res =>{
        var list = res.list
        if(list && list[0]){
          this.id = list[0].id;
          list[0].id && this.getDetail()
        }else{
          alert('id请求出错');
        }
      })
    },
    getDetail(){    //  根据id获取当前活动详情内容
      this.ajax('/article/get', {
        id: this.id
      }).then( res =>{
        this.detail = res.objectData.marathonArticleData.content;
        this.getEnrollList(res.objectData.marathonEvent.id);
      })
    },
    getEnrollList(id){
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
</style>


