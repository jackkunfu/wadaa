export default class List {
  constructor(config){
    if(!config || JSON.stringify(config) == '{}'){
      throw new Error('列表初始化配置出错');
      return
    }

    this.config = config;

    this.init();

    this.pager();

  }

  init(){}

  pager(){}

}