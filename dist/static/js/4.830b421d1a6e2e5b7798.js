webpackJsonp([4],{Oayj:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("ksVy"),e={name:"componentNewsList",props:["page","data","otherData"],filters:{day:function(t){return t?t.split(" ")[0].split("-")[2]:""},noday:function(t){if(!t)return"";var a=t.split(" ")[0];return a.split("-")[0]+"-"+a.split("-")[1]}},data:function(){return{dataArr:this.data,otherArr:this.otherData,pageData:this.page,curPage:1,config:s.a,curShowImg:"",showImg:!1}},components:{pager:i("E1dh").a},mounted:function(){},methods:{pageChange:function(t){this.curPage=t},imgBig:function(t){this.showImg=!0,this.curShowImg=s.a.filePath+("|"==t[0]?t.slice(1):t)},sTag:function(t){this.$router.push({path:"/sTag",query:{str:t,isTag:1}}),setTimeout(function(){window.history.go(0)},100)},goDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}},watch:{data:function(t){this.dataArr=t},otherData:function(t){this.otherArr=t},page:function(t){this.pageData=t}}},n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"list-ctn"},[t._l(t.otherArr,function(a){return i("div",{staticClass:"box"},[a.createDate?i("div",{staticClass:"time"},[i("div",{staticClass:"day"},[t._v(t._s(t._f("day")(a.createDate)))]),i("span",[t._v(t._s(t._f("noday")(a.createDate)))])]):t._e(),i("div",{staticClass:"main"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.config.filePath+("|"==a.image[0]?a.image.slice(1):a.image)}}),i("div",{staticClass:"cover"}),i("div",{staticClass:"btn",on:{click:function(i){t.imgBig(a.image)}}},[t._v("+")])]),i("div",{staticClass:"name",on:{click:function(i){t.goDetail(a.id)}}},[i("i",{staticClass:"fa fa-pencil"}),i("span",[t._v(t._s(a.title||a.name))])]),i("div",{staticClass:"text",domProps:{innerHTML:t._s(a.description)}}),i("div",{staticClass:"read-all",on:{click:function(i){t.goDetail(a.id)}}},[t._v("阅读全文"),i("i",{staticClass:"fa fa-arrow-circle-right",staticStyle:{"margin-left":"5px"}})]),a.keywords&&a.keywords.split(" ").length>0?i("div",{staticClass:"key"},[i("i",{staticClass:"fa fa-tag",staticStyle:{color:"#ddd","margin-right":"5px"}}),t._l(a.keywords.split(" "),function(a){return i("span",{on:{click:function(i){t.sTag(a)}}},[t._v(t._s(a))])})],2):t._e()])])}),t._l(t.dataArr,function(a){return i("div",{staticClass:"box"},[a.createDate?i("div",{staticClass:"time"},[i("div",{staticClass:"day"},[t._v(t._s(t._f("day")(a.createDate)))]),i("span",[t._v(t._s(t._f("noday")(a.createDate)))])]):t._e(),i("div",{staticClass:"main"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.config.filePath+("|"==a.image[0]?a.image.slice(1):a.image)}}),i("div",{staticClass:"cover"}),i("div",{staticClass:"btn",on:{click:function(i){t.imgBig(a.image)}}},[t._v("+")])]),i("div",{staticClass:"name",on:{click:function(i){t.goDetail(a.id)}}},[i("i",{staticClass:"fa fa-pencil"}),i("span",[t._v(t._s(a.title||a.name))])]),i("div",{staticClass:"text",domProps:{innerHTML:t._s(a.description)}}),i("div",{staticClass:"read-all",on:{click:function(i){t.goDetail(a.id)}}},[t._v("阅读全文"),i("i",{staticClass:"fa fa-arrow-circle-right",staticStyle:{"margin-left":"5px"}})]),a.keywords&&a.keywords.split(" ").length>0?i("div",{staticClass:"key"},[i("i",{staticClass:"fa fa-tag",staticStyle:{color:"#ddd","margin-right":"5px"}}),t._l(a.keywords.split(" "),function(a){return i("span",{on:{click:function(i){t.sTag(a)}}},[t._v(t._s(a))])})],2):t._e()])])}),t.dataArr.length>0?i("pager",{attrs:{pageData:t.pageData},on:{pageChange:t.pageChange}}):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],staticClass:"img-show",on:{click:function(a){t.showImg=!1}}},[i("img",{class:t.showImg?"show":"",attrs:{src:t.curShowImg}})])],2)},staticRenderFns:[]};var r={name:"sTag",data:function(){return{str:this.$route.query.str,isTag:this.$route.query.tag||!1,dataArr:[],otherData:[],page:{curPage:1,total:0}}},components:{listStag:i("VU/8")(e,n,!1,function(t){i("TbzL")},"data-v-62e9976e",null).exports,rightPart:i("w97a").a},mounted:function(){this.topList(),this.list()},methods:{topList:function(){var t=this;this.ajax("/top",{}).then(function(a){1==a.code&&(t.otherData=a.objectData||[])})},list:function(){var t=this,a={pageNo:this.page.curPage,pageSize:10};a.keyWords=this.str,this.ajax("/articleNews",a).then(function(a){var i=a.objectData||{};t.dataArr=i.list?i.list:[],t.page={curPage:i.pageNo||1,total:i.count||0}})},pageChange:function(t){this.page.curPage=t,this.list(),this.topList()}}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"ctn1200"},[a("div",{staticClass:"fl"},[a("list-stag",{attrs:{data:this.dataArr,otherData:this.otherData,page:this.page},on:{pageChange:this.pageChange}})],1),a("div",{staticClass:"fr"},[a("right-part")],1)])])},staticRenderFns:[]},o=i("VU/8")(r,c,!1,null,null,null);a.default=o.exports},TbzL:function(t,a){}});
//# sourceMappingURL=4.830b421d1a6e2e5b7798.js.map