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
   请求组件中某个字段的异步请求数据方法
   keyStr -> 组件中当前请求数据的对应字段字符串
   keyConfig -> 请求字段数据的的url,参数等参数信息对象
    {
      url: '/xx/xx',   // 接口地址
      opts: {},    // 传参
      type: 'post'   //  get 时可不写
    }
   ctx -> 当前调用组件的vue对象，用来操作具体组件中的某个数据更新，具体使用时一般传this，
   cb -> // 如果接收数据不能直接使用，第四个参数传入回调函数自行处理~  一般不用传
   */
  Vue.prototype.keyRequest = function(keyStr, keyConfig, ctx, cb){
    this.ajax( keyConfig.url, keyConfig.opts, keyConfig.type || 'get')
      .then(
        (d)=>{
          if(cb && typeof cb == 'function'){  
            cb(d);
          }else{
            if(d.success){
              ctx[keyStr] = d.data;
            }else{
              alert(d.msg);
            }
          }
        }
      )
  }
}