<template lang="pug">
  .share
    div 我要分享：
    .bdsharebuttonbox
      a.bds_more(data-cmd='more')
      a.bds_qzone(data-cmd='qzone')
      a.bds_tsina(data-cmd='tsina')
      a.bds_tqq(data-cmd='tqq')
      a.bds_renren(data-cmd='renren')
      a.bds_weixin(data-cmd='weixin')
</template>

<script>
export default {
  data(){
    return {}
  },
  beforeCreate(){
    alert(2)
    $('head').append('<script src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="' + ~(-new Date()/36e5) + '>')
  },
  mounted(){
    alert(1)
    window._bd_share_config = {
      "common":{
        "bdSnsKey":{},
        "bdText":"",
        "bdMini":"2",
        "bdMiniList":false,
        "bdPic":"",
        "bdStyle":"0",
        "bdSize":"24"
      },
      "share":{},
      // "image":{
      //   "viewList":["qzone","tsina","tqq","renren","weixin"],
      //   "viewText":"分享到：",
      //   "viewSize":"16"
      // },
      // "selectShare":{
      //   "bdContainerClass":null,
      //   "bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]
      // }
    };
    // with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
  }

}
</script>

<style lang="sass" scoped>

</style>

