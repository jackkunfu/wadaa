

<template lang="pug">
//-  关键字 tag  搜索页面
div
  .ctn1200
    .fl
      list-stag(:data="dataArr" :page="page" @pageChange="pageChange")

    .fr
      right-part

</template>

<script>

import listStag from './components/list-stag'
import rightPart from './components/layout/right'

export default {
  name: 'sTag',
  data(){
    return {
      str: this.$route.query.str,
      isTag: this.$route.query.tag || false,
      dataArr: [],
      page: {
        curPage: 1,
        total: 0
      }
    }
  },
  components: {
    listStag,
    rightPart
  },
  mounted(){
    this.list();
  },
  methods: {
    list(){
      var url = this.isTag ? '/articleNews' : ''
      var opts = {
        pageNo: this.page.curPage,
        pageSize: 10,
      }
      opts[this.isTag ? 'title' : 'keyWords'] = this.str;    // tag 传keyWords    搜索 传title
      this.ajax('/articleNews', opts).then(res =>{
        var data = res.objectData || {};
        this.dataArr = data.list ? data.list : [];
        this.page = {
          curPage: data.pageNo || 1,
          total: data.count || 0
        }
      })
    },
    pageChange(v){
      this.page.curPage = v;
      this.list();
    }
  }
}
</script>

