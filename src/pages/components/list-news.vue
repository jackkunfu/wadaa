<template lang="pug">

.ctn1200
  .box(v-for="item in dataArr")
    .fl
      .day 17
      span 2017-02
      
    .fr

</template>

<script>
  export default {
    name: 'component news list',
    props: ['listInfo'],
    data(){
      return {
        dataArr: [1],     // 列表数据
      }
    },
    mounted(){
      // 请求列表数据
      this.keyRequest(this.listInfo, 'dataArr', this);
    },
    methods: {
    }
  }
</script>

<style lang="sass" scoped>
.fl
  width: 6rem;
  margin-right: 1.5rem;
  text-align: center;
  font-size: 1rem;
  color: #4e4e4e;
  line-height: 3rem;
  .day
    font-size: 1.8rem;
    color: #333;
    font-weight: bold;
    line-height: 3rem;
    border-bottom: 1px solid #099;
</style>

