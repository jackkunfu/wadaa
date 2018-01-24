<template lang="pug">

.page-ctn
  .fl(v-if="cur > 3" @click="cur=1;") «第一页
  .fl(v-if="cur > 2" @click="cur--;") ‹上一页

  span(v-for="(item, i) in [2,1,0,-1,-2]")
    .fl(v-if="cur-item > 0 && cur-item <= pageData.total"
      @click="cur=cur-item"
      :class="cur == cur-item ? 'cur' : ''") {{cur-item}}

  .fl(v-if="pageData.total > cur" @click="cur++;") 下一页›
  .fl(v-if="pageData.total > cur" @click="cur=pageData.total;") 最后一页»

</template>

<script>
  export default {
    name: 'pager',
    props: ['pageData'],
    data(){
      return {
        cur: this.pageData.cur || 1
      }
    },
    mounted(){
    },
    methods: {
    },
    watch: {
      cur(v){
        this.$emit('pageChange', v);
      }
    }
  }
</script>

<style lang="sass" scoped>
.fl
  border: 1px solid #e5e5e5;
  padding: 0 10px;
  min-width: 30px;
  font-size: 14px;
  line-height: 30px;
  cursor: pointer;
  &.cur
    background-color: #444;
    color: #fff;
  &:hover
    background-color: #099;
    color: #fff;
</style>

