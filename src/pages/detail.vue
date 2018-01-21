<template lang="pug">

div
  .ctn1200
    .fl(style="width:850px;")
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
      detail: ''
    }
  },
  components: {
    rightPart,
    Share
  },
  mounted(){
    if(!this.id){
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
    }else{
      this.getDetail();
    }
    
    var _this = this;
    window.onhashchange = function(e){
      _this.module = location.href.split('module=')[1].split('&')[0];
      _this.ajax('/articleList', {
        pageNo: 1,
        pageSize: 20,
        module: _this.module
      }).then( (res)=>{
        var list = res.list
        if(list && list[0]){
          _this.id = list[0].id;
          list[0].id && _this.getDetail()
        }else{
          alert('id请求出错');
        }
      } )
    }

  },
  methods: {
    getDetail(){
      this.ajax('/article/get', {
        id: this.id
      }).then( (res)=>{
        this.detail = res.objectData.marathonArticleData.content;
      } )
    },
    
  }
}
</script>

<style lang="sass" scoped>
  .detail
    p
      img
        max-width: 100%!important;
</style>


