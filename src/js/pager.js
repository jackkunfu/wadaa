class Pager {
    constructor(config){
        if(!config || JSON.stringify(config)=='{}'){
            throw new Error('翻页配置出错');
            return;
        }
        this.dom
        this.init();
    }

    init(){
        this.render();
        this.events();
    }

    render(){
        var str = ''
        $(this.dom).html(str);
    }

    events(){}
}