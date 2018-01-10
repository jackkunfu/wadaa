export default {
  data(){
    return {

    }
  },
  mounted(){
    this.list();
  },
  methods: {
    list(listInfo, listData){
      this.ajax(this[listInfo]['type'], this[listInfo]['url'], this[listInfo]['opts']).then((d)=>{
        if(d.success){
          this[listData] = d.data;
        }
      })
    }
  }
}