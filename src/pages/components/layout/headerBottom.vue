<template lang="pug">

.ctn
  .ctn1200
    .fl(v-if="isStag")
      span(v-if="isTag == 1") Tag：{{crumb}}
      span(v-if="isTag == 0") 关键词：{{crumb}}

    .search
      .search-msg
        input(placeholder="输入关键词后回车..." v-model="str") 
        .search-icon(@click="search")
          i.iconfont &#xe63d;

      .crumbs
        span(style="cursor:pointer;" @click="goIndex") Home
        span(v-if="crumb" style="margin:0 10px;") >>
          span(style="margin:0 10px;") {{crumb}}
        span(v-if="crumb1") >>
          span {{crumb1}}

</template>

<script>
export default {
  name: 'topDown',
  data () {
    
    return {
      str: '',
      crumb: '',   // 面包屑
      crumb1: '' ,  // 面包屑1
      isTag: '',
      isStag: false
    }
  },
  methods: {
    search(){
      var trimStr = this.str.trim();
      if(!trimStr) return
      this.crumb = trimStr;
      this.$router.push({path: '/sTag', query: {str: trimStr}})
      setTimeout(() => {
        window.history.go(0);
      }, 20);
    },
    goIndex(){
      if(this.$route.path == '/') return
      this.$router.push({path:'/'})
      setTimeout(() => {
        window.history.go(0);
      }, 20);
    }
  },
  mounted(){
    window.onload = () =>{    //  组件中不放在 window.onload 中不能正确的获取this.$route.path
      if(this.$route.path == '/sTag'){
        this.isStag = true;
        var hashIsTag = location.href.split('isTag=');
        if(hashIsTag[1]){
          if(hashIsTag[1].split('&')[0] == 1) this.isTag = 1;
          else this.isTag = 0
        }

        var str = null
        str = location.href.split('str=')[1] ? decodeURI(location.href.split('str=')[1].split('&')[0]) : '';
        this.str = this.crumb = str || '';
        // if(this.isTag == 0){
        //   this.str = this.crumb = str || '';
        // }
      }else{
        this.str = this.crumb = '';
        this.isStag = false;
      }
    }
  }
}
</script>

<style scoped lang="sass">

.ctn
  background-image: url('../../../imgs/slider-bg-dark.jpg');
  height: 160px;
  line-height: 160px;
  font-size: 25px;
  margin-bottom: 50px;
  .ctn1200
    position: relative;
    .fl
      color: #fff;
      padding-top: 30px;
      line-height: 50px;
    .search
      font-size: 10px;
      position: absolute;
      right: 0;
      .search-msg
        position: relative;
        input
          height: 36px;
          line-height: 36px;
          padding: 0 10px;
          border-radius: 5px;
          border: none;
          outline: none;
          background: #797979;
          color: #fff;
          width: 250px;
          &:focus
            background: #c5c5c5;
        .search-icon
          position: absolute;
          right: 0;
          width: 40px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          background: #d7d7d7;
          top: 61px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          cursor: pointer;
          img
            width: 15px;


      .crumbs
        height: 35px;
        line-height: 35px;
        text-align: center;
        background: #009999;
        color: #fff;
        position: relative;
        top: -35px;


</style>
