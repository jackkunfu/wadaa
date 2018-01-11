const config = {
  baseUrl: ''
}

export default function vueProto(){
  Vue.prototype.ajax = function(url, opts, type){
    return new Promise(function(r, j){
      $.ajax({
        type: type || 'get',
        url: config.baseUrl + url,
        data: opts
      }).done(function(d){
        r(d);
      }).fail(function(){
        j({
          success: false,
          error: e
        })
      })
    })
  }

  /*
   列表组件中请求列表数据的方法
   infoConfig -> 请求列表的url,参数等参数信息对象
   thisDataKey -> 组件中当前列表的字段字符串
   ctx -> 当前调用组件的vue对象，用来操作具体组件中的某个数据更新
   */
  Vue.prototype.listRequest = function(infoConfig, thisDataKey, ctx){
    this.ajax( infoConfig.url, infoConfig.opts)
      .then(
        (d)=>{
          if(d.success){
            ctx[thisDataKey] = d.data;
          }
        }
      )
  }
}