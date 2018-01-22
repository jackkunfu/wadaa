<template lang="pug">

div
  .ctn1200
    .fl(style="width:850px;")
      div(v-for="item in enrollArr")
        .enroll(@click="goEnroll(item.entryId)") &gt;&gt;&gt;&gt;&gt;&gt;点击报名&lt;&lt;&lt;&lt;&lt;&lt;
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
      enrollArr: []
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
    getIdFromMoudle(){
      this.ajax('/articleList', {
        pageNo: 1,
        pageSize: 20,
        module: this.module
      }).then( (res)=>{
        var list = res.list
        if(list && list[0]){
          this.id = list[0].id;
          list[0].id && this.getDetail()
        }else{
          alert('id请求出错');
        }
      } )
    },
    getDetail(){
      this.ajax('/article/get', {
        id: this.id
      }).then( (res)=>{
        this.detail = res.objectData.marathonArticleData.content;
        this.getEnrollList(res.objectData.marathonEvent.id);
      } )
    },
    getEnrollList(id){
      this.ajax('/getEventEntryList', {eventId: id}).then((res)=>{
        console.log('list res');
        console.log(res);
        this.enrollArr = res.eventList || [];
        
      })
    },
    goEnroll(entryId){
      this.$router.push({path: '/signUp', query: {entryId: entryId}})
    }
  }
}
</script>

<style lang="sass" scoped>
.enroll
  font-family: comic sans ms,cursive;
  font-size: 24px;
  color: #0f0;
  cursor: pointer;
  &:hover
    border-bottom: 1px solid #099;
</style>


