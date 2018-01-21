

export const config = {
  baseUrl: 'http://39.106.218.200/app/mls',
  filePath: 'http://39.106.218.200'
} 

export default function vueProto(){
  Vue.prototype.ajax = function(url, opts, type, otherUrl){
    return new Promise(function(r, j){
      $.ajax({
        type: type || 'get',
        url: otherUrl ? otherUrl : (config.baseUrl + url),
        data: opts
      }).done(function(d){
        r(d);
      }).fail(function(e){
        j({
          success: false,
          error: e
        })
      })
    })
  }

  /*
   请求组件中某个字段的异步请求数据方法
   keyStr -> 组件中当前请求数据的对应字段字符串
   keyConfig -> 请求字段数据的的url,参数等参数信息对象
    {
      url: '/xx/xx',   // 接口地址
      opts: {},    // 传参
      type: 'post'   //  get 时可不写
    }
   ctx -> 当前调用组件的vue对象，用来操作具体组件中的某个数据更新，具体使用时一般传this，
   isSelfHandle -> // 如果接收数据不能直接使用，第四个参数传入true~具体调用时，继续.then接收数据来处理
   */
  Vue.prototype.keyRequest = function(keyStr, keyConfig, ctx, isSelfHandle){
    return this.ajax( keyConfig.url, keyConfig.opts || {}, keyConfig.type || 'get')
      .then((d)=>{
        if(isSelfHandle) return d;
        if(d.success){
          if(!keyConfig.dataKey){
            ctx[keyStr] = d.data;
            return
          }

          // 如果所需数据对象不是d.data对象， keyConfig中配置dataKey制定值字段，多层次字段用点连接
          var dataKey = keyConfig.dataKey;
          var data = d.data;
          dataKey.split('.').forEach( (v) => {
            data = data[v];
          })
          ctx[keyStr] = data;
          
        }else{
          alert(d.msg);
        }
      })
  }
}