<template lang="pug">

div
  .fl(v-if="pageData.cur > 1") 第一页
  .fl(v-if="pageData.cur > 1") 上一页

  .fl(v-if="pageData.total > pageData.cur") 下一页

</template>

<script>
  export default {
    name: 'pager',
    props: ['pageData'],
    data(){
      return {}
    },
    mounted(){
    },
    methods: {
    },
    watch: {
      pageData(v){
        return v
      }
    }
  }
</script>

<style lang="sass" scoped>
.fl
  border: 1px solid #e5e5e5;
  &.cur
    background-color: #444;
  &:hover
    background-color: #099;
</style>

