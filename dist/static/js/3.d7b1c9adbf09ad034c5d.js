webpackJsonp([3],{AqFF:function(t,i){},VBjC:function(t,i){},f2Us:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("ksVy"),s=e("w97a"),n={data:function(){return{}},mounted:function(){window._bd_share_config={common:{bdSnsKey:{},bdText:"",bdMini:"2",bdMiniList:!1,bdPic:"",bdStyle:"0",bdSize:"24"},share:{}},document.body.appendChild(document.createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date/36e5)}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"share"},[i("div",[this._v("我要分享：")]),i("div",{staticClass:"bdsharebuttonbox"},[i("a",{staticClass:"bds_more",attrs:{"data-cmd":"more"}}),i("a",{staticClass:"bds_qzone",attrs:{"data-cmd":"qzone"}}),i("a",{staticClass:"bds_tsina",attrs:{"data-cmd":"tsina"}}),i("a",{staticClass:"bds_tqq",attrs:{"data-cmd":"tqq"}}),i("a",{staticClass:"bds_renren",attrs:{"data-cmd":"renren"}}),i("a",{staticClass:"bds_weixin",attrs:{"data-cmd":"weixin"}})])])}]};var l=e("VU/8")(n,r,!1,function(t){e("AqFF")},"data-v-2d60a7a8",null).exports,o={name:"detail",filters:{day:function(t){return t?t.split(" ")[0].split("-")[2]:""},noday:function(t){if(!t)return"";var i=t.split(" ")[0];return i.split("-")[0]+"-"+i.split("-")[1]}},data:function(){return{config:a.a,item:{marathonEvent:{image:[]}},module:this.$route.query.module||"",id:this.$route.query.id||"",detail:"",enrollArr:[],enrollTip:!1}},components:{rightPart:s.a,share:l},mounted:function(){this.id?this.getDetail():this.getIdFromMoudle();var t=this;window.onhashchange=function(i){location.href.split("module=")[1]?(t.module=location.href.split("module=")[1].split("&")[0],t.getIdFromMoudle()):location.href.split("id=")[1]&&(t.id=location.href.split("id=")[1].split("&")[0],t.getDetail())}},methods:{getIdFromMoudle:function(){var t=this;this.ajax("/articleList",{pageNo:1,pageSize:20,module:this.module}).then(function(i){var e=i.objectData.list||[];e&&e[0]&&(e[0].id?(t.id=e[0].id,t.getDetail()):console.log("该module未返回详情id信息"))})},getDetail:function(){var t=this;this.ajax("/article/get",{id:this.id}).then(function(i){var e=i.objectData;t.item=e,t.detail=e.marathonArticleData.content,e.marathonEvent&&e.marathonEvent.id&&t.getEnrollList(e.marathonEvent.id)})},getEnrollList:function(t){var i=this;this.enrollTip=!0,this.ajax("/getEventEntryList",{eventId:t}).then(function(t){i.enrollArr=t.eventList||[]})},goEnroll:function(t){this.$router.push({path:"/signUp",query:{entryId:t,detailId:this.id}})}}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"ctn1200"},[e("div",{staticClass:"fl",staticStyle:{width:"850px"}},[e("div",{staticStyle:{position:"relative","margin-bottom":"80px"}},[t.item.createDate?e("div",{staticClass:"time"},[e("div",{staticClass:"day"},[t._v(t._s(t._f("day")(t.item.createDate)))]),e("span",[t._v(t._s(t._f("noday")(t.item.createDate)))])]):t._e(),e("div",{staticClass:"main"},[t.item.image?e("div",{staticClass:"img"},[e("img",{attrs:{src:t.config.filePath+("|"==t.item.image[0]?t.item.image.slice(1):t.item.image)}})]):t._e(),t.item.title?e("div",{staticClass:"name",on:{click:function(i){t.goDetail(t.item.id)}}},[e("i",{staticClass:"fa fa-pencil"}),e("span",[t._v(t._s(t.item.title))])]):t._e()])]),t.enrollArr.length>0?e("div",{staticStyle:{"margin-bottom":"50px","margin-left":"75px"}},[t._m(0),t._l(t.enrollArr,function(i){return e("div",{staticClass:"box"},[e("div",{staticClass:"name"},[t._v("⭕️ 赛事组别： "+t._s(i.name))]),e("div",{staticClass:"fee"},[t._v("⭕️ 报名费用： "+t._s(i.fee/100)+"元")]),e("div",[t._v("⭕️ 报名时间： "+t._s(i.matchStartDate)+" - "+t._s(i.matchEndDate))]),e("span",{staticClass:"enroll",on:{click:function(e){t.goEnroll(i.entryId)}}},[t._v(">>>>>>点击报名<<<<<<")])])})],2):t._e(),0==this.enrollArr.length&&t.enrollTip?e("div",{staticStyle:{"line-height":"80px",color:"#999","font-size":"14px"}},[t._v("报名时间未到或者已经结束")]):t._e(),e("div",{staticClass:"detail",domProps:{innerHTML:t._s(t.detail)}})]),e("div",{staticClass:"fr"},[e("right-part")],1)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"sign-enter"},[i("h3",[this._v("报名信息")])])}]};var c=e("VU/8")(o,d,!1,function(t){e("VBjC")},"data-v-bee313ca",null);i.default=c.exports}});
//# sourceMappingURL=3.d7b1c9adbf09ad034c5d.js.map