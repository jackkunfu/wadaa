const config = {
  baseUrl: ''
}

export default function vueProto(Vue){
  Vue.prototype.ajax = function(type, url, opts){
    return new Promise(function(r, j){
      $.ajax({
        type: type,
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
}