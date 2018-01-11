<template lang="pug">

div
  .box(v-for="item in dataArr")
    .fl
      .day 17
      span 2017-02
      
    .fr

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
.fl
  width: 0.6rem;
  margin-right: 0.15rem;
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
</style>

