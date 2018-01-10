/* 尝试用class写法组合，暂无用，还是用mixins吧
尝试在vue组件script书写如下
import List from '../../js/listClass';
var list = {}
$.extend(list, new List({
    url: '',  // 请求地址
}))
export default list
*/
export default class List {
  constructor(config){
    if(!config || JSON.stringify(config) == '{}'){
      throw new Error('列表初始化配置出错');
      return
    }

    this.config = config;

    this.init();

    this.pager();

    /*
      下面是如果实例化类来使用的
      mounted,data,methods等要直接指定再this上才会起作用
      实例化后合并到vue组件中，直接constructor外的原型链上写vue组件不识别
    */
    // 这里定义到this.mounted上，实例化后合并到vue组件中才回起作用， 直接
    this.mounted = this.mounted 

  }

  init(){}

  pager(){}

  mounted(){
    alert(1)
  }

}