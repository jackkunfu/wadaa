<template lang="pug">
div
  .box(v-for="item in listData")
    .fl
      .time {{item.time}}
    .fr

</template>

<script>
  export default {
    name: 'component list',
    props: ['listInfo'],
    data(){
      return {
        listData: []
      }
    },
    methods: {
      ajaxData(){
        var listInfo = this.listInfo;
        this.ajax(listInfo.type, listInfo.url, listInfo.opts).then((d)=>{
          if(d.success){
            this.listData = d.data;
          }
        })
      }
    }
  }
</script>
