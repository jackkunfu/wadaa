webpackJsonp([9],{"/3cv":function(t,n,a){t.exports=a.p+"static/img/RWKS_footer.34f8803.jpg"},0:function(t,n,a){a("j1ja"),t.exports=a("NHnr")},"4K+b":function(t,n){},"85pm":function(t,n){},"8E8w":function(t,n,a){"use strict";var e=a("ksVy"),i={name:"componentNewsList",props:["module","data"],filters:{day:function(t){return t?t.split(" ")[0].split("-")[2]:""},noday:function(t){if(!t)return"";var n=t.split(" ")[0];return n.split("-")[0]+"-"+n.split("-")[1]}},data:function(){return{dataArr:[],pageData:{cur:1,total:0},curPage:1,config:e.a,curShowImg:"",showImg:!1}},components:{pager:a("E1dh").a},mounted:function(){this.list()},methods:{pageChange:function(t){this.curPage=t,this.list()},imgBig:function(t){this.showImg=!0,this.curShowImg=e.a.filePath+("|"==t[0]?t.slice(1):t)},list:function(){var t=this;if(this.module){var n={url:"/articleList",opts:{pageNo:this.curPage,pageSize:10,module:this.module}};this.keyRequest("dataArr",n,this,!0).then(function(n){if(1==n.code){t.dataArr=n.objectData.list||[];var a=n.objectData.pageNo;t.curPage=a,t.pageData={total:n.objectData.count||0,cur:a||1}}else t.dataArr=[],t.pageData={total:1,cur:1}})}else console.log("no module")},sTag:function(t){this.$router.push({path:"/sTag",query:{str:t,isTag:1}}),setTimeout(function(){window.history.go(0)},20)},goDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}},watch:{module:function(t){t&&(console.log("module改变啦："+t),this.list())},data:function(t){t&&(this.dataArr=t)}}},s={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"list-ctn"},[0==t.dataArr.length?a("div",[t._v("暂无")]):t._e(),t._l(t.dataArr,function(n){return a("div",{staticClass:"box"},[n.createDate?a("div",{staticClass:"time"},[a("div",{staticClass:"day"},[t._v(t._s(t._f("day")(n.createDate)))]),a("span",[t._v(t._s(t._f("noday")(n.createDate)))])]):t._e(),a("div",{staticClass:"main"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.config.filePath+("|"==n.image[0]?n.image.slice(1):n.image)}}),a("div",{staticClass:"cover"}),a("div",{staticClass:"btn",on:{click:function(a){t.imgBig(n.image)}}},[t._v("+")])]),a("div",{staticClass:"name",on:{click:function(a){t.goDetail(n.id)}}},[a("i",{staticClass:"fa fa-pencil"}),a("span",[t._v(t._s(n.title||n.name))])]),a("div",{staticClass:"text",domProps:{innerHTML:t._s(n.description)}}),a("div",{staticClass:"read-all",on:{click:function(a){t.goDetail(n.id)}}},[t._v("阅读全文"),a("i",{staticClass:"fa fa-arrow-circle-right",staticStyle:{"margin-left":"5px"}})]),n.keywords&&n.keywords.split(" ").length>0?a("div",{staticClass:"key"},[a("i",{staticClass:"fa fa-tag",staticStyle:{color:"#ddd","margin-right":"5px"}}),t._l(n.keywords.split(" "),function(n){return a("span",{on:{click:function(a){t.sTag(n,"tag")}}},[t._v(t._s(n))])})],2):t._e()])])}),t.dataArr.length>0?a("pager",{attrs:{pageData:t.pageData},on:{pageChange:t.pageChange}}):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],staticClass:"img-show",on:{click:function(n){t.showImg=!1}}},[a("img",{class:t.showImg?"show":"",attrs:{src:t.curShowImg}})])],2)},staticRenderFns:[]};var o=a("VU/8")(i,s,!1,function(t){a("p1n6")},"data-v-128cf3cd",null);n.a=o.exports},E1dh:function(t,n,a){"use strict";var e={name:"pager",props:["pageData"],data:function(){return{cur:this.pageData.cur||1,totalPage:parseInt(this.pageData.total/10)+1}},mounted:function(){},methods:{},watch:{cur:function(t){this.$emit("pageChange",t),scrollTo(0,0)}}},i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"page-ctn"},[t.cur>3?a("div",{staticClass:"fl",on:{click:function(n){t.cur=1}}},[t._v("«第一页")]):t._e(),t.cur>2?a("div",{staticClass:"fl",on:{click:function(n){t.cur--}}},[t._v("‹上一页")]):t._e(),t._l([2,1,0,-1,-2],function(n,e){return a("span",[t.cur-n>0&&t.cur-n<=t.totalPage?a("div",{staticClass:"fl",class:t.cur==t.cur-n?"cur":"",on:{click:function(a){t.cur=t.cur-n}}},[t._v(t._s(t.cur-n))]):t._e()])}),t.totalPage>t.cur?a("div",{staticClass:"fl",on:{click:function(n){t.cur++}}},[t._v("下一页›")]):t._e(),t.totalPage>t.cur?a("div",{staticClass:"fl",on:{click:function(n){t.cur=t.totalPage}}},[t._v("最后一页»")]):t._e()],2)},staticRenderFns:[]};var s=a("VU/8")(e,i,!1,function(t){a("85pm")},"data-v-897bd654",null);n.a=s.exports},InVy:function(t,n){},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});a("j1ja");var e=a("lRwf"),i=a.n(e),s=a("mvHQ"),o=a.n(s),c={name:"topDown",data:function(){return{str:"",crumb:"",crumb1:"",isTag:"",isStag:!1}},methods:{search:function(){var t=this.str.trim();t&&(this.crumb=t,this.$router.push({path:"/sTag",query:{str:t}}),setTimeout(function(){window.history.go(0)},20))},goIndex:function(){"/"!=this.$route.path&&(this.$router.push({path:"/"}),setTimeout(function(){window.history.go(0)},20))}},mounted:function(){var t=this;window.onload=function(){if("/sTag"==t.$route.path){t.isStag=!0;var n=location.href.split("isTag=");n[1]&&(1==n[1].split("&")[0]?t.isTag=1:t.isTag=0);var a;a=location.href.split("str=")[1]?decodeURI(location.href.split("str=")[1].split("&")[0]):"",t.str=t.crumb=a||""}else t.str=t.crumb="",t.isStag=!1}}},r={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"ctn"},[a("div",{staticClass:"ctn1200"},[t.isStag?a("div",{staticClass:"fl"},[1==t.isTag?a("span",[t._v("Tag："+t._s(t.crumb))]):t._e(),0==t.isTag?a("span",[t._v("关键词："+t._s(t.crumb))]):t._e()]):t._e(),a("div",{staticClass:"search"},[a("div",{staticClass:"search-msg"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.str,expression:"str"}],attrs:{placeholder:"输入关键词后回车..."},domProps:{value:t.str},on:{input:function(n){n.target.composing||(t.str=n.target.value)}}}),a("div",{staticClass:"search-icon",on:{click:t.search}},[a("i",{staticClass:"iconfont"},[t._v("")])])]),a("div",{staticClass:"crumbs"},[a("span",{staticStyle:{cursor:"pointer"},on:{click:t.goIndex}},[t._v("Home")]),t.crumb?a("span",{staticStyle:{margin:"0 10px"}},[t._v(">>"),a("span",{staticStyle:{margin:"0 10px"}},[t._v(t._s(t.crumb))])]):t._e(),t.crumb1?a("span",[t._v(">>"),a("span",[t._v(t._s(t.crumb1))])]):t._e()])])])])},staticRenderFns:[]};var l={name:"top",props:["showNavBottom"],data:function(){return{tabs:[]}},components:{headerBottom:a("VU/8")(c,r,!1,function(t){a("pcqd")},"data-v-a8d37f3c",null).exports},mounted:function(){var t=this;this.keyRequest("tabs",{url:"/categoryList",opts:{}},this,!0).then(function(n){if(1==n.code&&(t.tabs=n.dataList,"/"==t.$route.path)){var a=n.dataList[0].childList[0].module;t.$parent.$children.forEach(function(t){t.indexInit&&t.indexInit(a)}),t.$emit("initModule",a)}}),$(function(){var t=$(".header-nav").offset().top;$(window).scroll(function(){$(this).scrollTop()>=t?$(".header-nav").css({position:"fixed",top:0}):$(".header-nav").css({position:"static"})})})},methods:{goUrl:function(t){if(t.url)if(t.isLocation){var n="";if(t.query){var a=o()(t.query);"{}"!=a&&(n+="?"+a.replace(/({|}|")/g,"").replace(/,/g,"&").replace(/:/g,"="))}location.href="http://"+location.host+"/#"+t.url+n}else this.$router.push({path:t.url,query:t.query});else t.appView&&1==t.appView?location.href="http://"+location.host+"/#/detail?module="+t.module:location.href="http://"+location.host+"/#/news?module="+t.module},goIndex:function(){"/"!=this.$route.path&&(this.$router.push({path:"/"}),setTimeout(function(){window.history.go(0)},20))}},watch:{type:function(t){return t}}},u={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[t._m(0),a("div",{staticStyle:{height:"100px"}},[a("div",{staticClass:"header-nav"},[a("div",{staticClass:"ctn1200"},[a("div",{staticClass:"logo",on:{click:t.goIndex}},[a("img",{attrs:{src:"http://www.runningweekends.net/wp-content/uploads/2016/12/2016122007560316.jpg"}}),a("div",[t._v("周末享跑")]),a("span",[t._v("Running Weekends")])]),a("div",{staticClass:"main"},[a("ul",t._l(t.tabs,function(n,e){return a("li",{staticClass:"fl",on:{click:function(a){t.goUrl(n)}}},[a("div",{staticClass:"box"},[t._v(t._s(n.name))]),n.childList&&n.childList.length>0?a("ul",{staticClass:"level2",class:e==t.tabs.length-1?"last":""},t._l(n.childList,function(n){return a("li",{on:{click:function(a){a.stopPropagation(),t.goUrl(n)}}},[t._v(t._s(n.name)),n.childList&&n.childList.length>0?a("ul",{staticClass:"level3",class:e==t.tabs.length-1?"last":""},t._l(n.childList,function(n){return a("li",{on:{click:function(a){a.stopPropagation(),t.goUrl(n)}}},[t._v(t._s(n.name))])})):t._e()])})):t._e()])}))])])])]),t.showNavBottom?a("header-bottom"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header-top"},[n("div",{staticClass:"ctn1200"},[n("div",{staticClass:"fl"},[n("span",{staticClass:"phone-icon"},[n("i",{staticClass:"fa fa-phone"})]),n("span",[this._v("028-85090253")])]),n("div",{staticClass:"fr"},[n("div",{staticClass:"icon-box"},[n("div",{staticClass:"icon-show"},[n("a",{staticClass:"icon-1",attrs:{href:"http://contact@runningweekends.net"}},[n("i",{staticClass:"fa fa-envelope"})]),n("a",{staticClass:"icon-2",attrs:{href:"http://contact@runningweekends.net"}},[n("i",{staticClass:"fa fa-envelope"})])])])]),n("div",{staticClass:"fr"},[n("div",{staticClass:"icon-box"},[n("div",{staticClass:"icon-show"},[n("a",{staticClass:"icon-1",attrs:{href:"http://weibo.com/RunningWeekends"}},[n("i",{staticClass:"fa fa-weibo"})]),n("a",{staticClass:"icon-2",attrs:{href:"http://weibo.com/RunningWeekends"}},[n("i",{staticClass:"fa fa-weibo"})])])])])])])}]};var d=a("VU/8")(l,u,!1,function(t){a("4K+b")},"data-v-53029ffb",null).exports,f=(a("8E8w"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"line"}),n("div",[n("div",{staticClass:"fl"},[n("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px",position:"relative",top:"5px","margin-right":"5px"},attrs:{href:"javascript:;"}},[n("img",{staticStyle:{width:"20px"},attrs:{src:"//gw.alicdn.com/tfs/TB1GxwdSXXXXXa.aXXXXXXXXXXX-65-70.gif"}})]),n("strong",[this._v("蜀ICP备18002700号-1")])]),n("div",{staticClass:"fr"},[n("img",{attrs:{src:a("/3cv")}})])])])}]});var p={name:"app",components:{headNav:d,footerPart:a("VU/8")({name:"foot",data:function(){return{}}},f,!1,function(t){a("InVy")},"data-v-3af77af0",null).exports},data:function(){return{indexModule:""}},methods:{initIndexModule:function(t){console.log("get emit: "+t),this.indexModule=t}}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("head-nav",{attrs:{showNavBottom:"true"},on:{initModule:this.initIndexModule}}),n("router-view",{attrs:{indexModule:this.indexModule}}),n("footer-part")],1)},staticRenderFns:[]};var m=a("VU/8")(p,h,!1,function(t){a("lQVc")},null,null).exports,g=a("pRNm"),v=a.n(g);i.a.use(v.a);var _=new v.a({routes:[{path:"/",name:"index",component:function(t){return Promise.all([a.e(0),a.e(7)]).then(function(){return t(a("2NXm"))}.bind(null,a)).catch(a.oe)}},{path:"/aboutUs",name:"aboutUs",component:function(t){return Promise.all([a.e(0),a.e(2)]).then(function(){return t(a("/U5D"))}.bind(null,a)).catch(a.oe)}},{path:"/sTag",name:"sTag",component:function(t){return Promise.all([a.e(0),a.e(4)]).then(function(){return t(a("Oayj"))}.bind(null,a)).catch(a.oe)}},{path:"/detail",name:"detail",component:function(t){return Promise.all([a.e(0),a.e(3)]).then(function(){return t(a("f2Us"))}.bind(null,a)).catch(a.oe)}},{path:"/news",name:"news",component:function(t){return Promise.all([a.e(0),a.e(6)]).then(function(){return t(a("ogbC"))}.bind(null,a)).catch(a.oe)}},{path:"/signUp",name:"signUp",component:function(t){return Promise.all([a.e(0),a.e(1)]).then(function(){return t(a("33M/"))}.bind(null,a)).catch(a.oe)}},{path:"/myMsg",name:"myMsg",component:function(t){return Promise.all([a.e(0),a.e(5)]).then(function(){return t(a("6Dws"))}.bind(null,a)).catch(a.oe)}}]}),w=(a("VRwV"),a("ksVy")),C=a("95YI"),b=a.n(C);i.a.config.productionTip=!1,i.a.component("v-distpicker",b.a),i.a.use(w.b),new i.a({el:"#app",router:_,template:"<App/>",components:{App:m}})},VRwV:function(t,n){},ksVy:function(t,n,a){"use strict";a.d(n,"a",function(){return s}),n.b=function(t){t.prototype.ajax=function(t,n,a,e){var t=e?s.filePath+e:s.baseUrl+t;return new i.a(function(e,i){$.ajax({type:a||"get",url:t,data:n}).done(function(t){return t}).fail(function(t){return t}).then(function(t){e(t)},function(a){console.log("请求出错，请检查传参："),console.log("url:"+t),console.log(n),i(a)})})},t.prototype.keyRequest=function(t,n,a,e){return this.ajax(n.url,n.opts||{},n.type||"get").then(function(i){if(e)return i;if(i.success){if(!n.dataKey)return void(a[t]=i.data);var s=n.dataKey,o=i.data;s.split(".").forEach(function(t){o=o[t]}),a[t]=o}else alert(i.msg)})}};var e=a("//Fk"),i=a.n(e),s={baseUrl:"http://web.cd100k.com/app/mls",filePath:"http://web.cd100k.com"}},lQVc:function(t,n){},lRwf:function(t,n){t.exports=window.Vue},p1n6:function(t,n){},pRNm:function(t,n){t.exports=window.VueRouter},pcqd:function(t,n){}},[0]);
//# sourceMappingURL=app.689ef4466ee168c896b0.js.map