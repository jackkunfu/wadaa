<template lang="pug">

div
  .box(v-for="item in dataArr")
    .fl
      .day 17
      span 2017-02
      
    .fr

  pager(:pageData="pageData")

</template>

<script>
  import pager from './pager'

  export default {
    name: 'component news list',
    props: ['listInfo'],
    data(){
      return {
        dataArr: [1],     // 列表数据
        pageData: {},
        curPage: 1
      }
    },
    components: {
      pager
    },
    mounted(){
      // 请求列表数据
      // this.keyRequest('dataArr', this.listInfo, this, true)
      //   .then((res)=>{
      //     this.dataArr = res.data || [];
      //     var cp = res.curPage
      //     this.curPage = cp
      //     this.pageData = {
      //       total: res.total,
      //       cur: cp
      //     }
      //     // this.$emit('pageChange', res.curPage);    // 好像暂时不用往上层传递当前选中的第几页
      //   });
    },
    methods: {
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

