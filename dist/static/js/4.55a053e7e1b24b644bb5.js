webpackJsonp([4],{"6Dws":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("w97a"),r=e("E1dh"),n={name:"myMsg",filters:{mobile:function(t){return(t=""+t).substring(0,3)+"****"+t.substring(t.length-3,t.length)},status:function(t){return 0==t?"报名未开始":1==t?"报名进行中":2==t?"即将开赛":3==t?"赛事进行中":4==t?"赛事已结束":"状态未知"},clothSize:function(t){var a="";switch(t){case"0":a="S";break;case"1":a="M";break;case"2":a="L";break;case"3":a="XL";break;case"4":a="2XL";break;case"5":a="3XL"}return a},blood:function(t){var a="";switch(t){case"0":a="A";break;case"1":a="B";break;case"2":a="AB";break;case"3":a="0"}return a}},data:function(){return{mobile:!!localStorage.rwMobile&&localStorage.rwMobile,orders:[],curPage:1,pageData:{cur:1,total:0}}},components:{rightPart:s.a,pager:r.a},mounted:function(){this.getOrderList()},methods:{getOrderList:function(){var t=this;localStorage.rwUserId?this.ajax("/order/matchList",{pageNo:this.curPage,pageSize:10,accountId:localStorage.rwUserId}).then(function(a){t.orders=a.objectData.list||[];var e=a.objectData.pageNo;t.curPage=e,t.pageData={total:a.objectData.count||0,cur:e||1}}):alert("请先登陆~")},pageChange:function(t){this.curPage=t,this.getOrderList()},startPay:function(t){this.ajax("/order/pay",{outTradeNo:t.outTradeNo,title:t.marathonEvent.name,body:t.marathonEvent.name,totalFee:t.totalFee}).then(function(t){$("body").append($(t))})},goDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ctn1200"},[e("div",{staticClass:"fl"},[e("h2",[t._v("个人中心")]),e("div",{staticClass:"user-msg"},[e("h3",[t._v("账号信息")]),t.mobile?e("div",{staticClass:"msg-show"},[t._v("⭕ 登录手机："+t._s(t._f("mobile")(t.mobile)))]):e("div",{staticClass:"msg-show"},[t._v("还未登录！！！")])]),e("div",{staticClass:"sign-msg"},[e("h3",[t._v("报名订单列表信息")]),e("table",{attrs:{width:"800",cellspacing:"0"}},[t._m(0),t._l(t.orders,function(a){return e("tr",[e("td",[t._v(t._s(a.marathonEvent.name))]),e("td",[t._v(t._s(a.createDate))]),e("td",[t._v(t._s(t._f("status")(a.marathonEvent.status)))]),e("td",{staticStyle:{"text-align":"left",width:"270px"}},[e("div",[t._v("赛事名称："+t._s(a.entryName||"--"))]),e("div",[t._v("参赛号："+t._s(a.entryType||"--"))]),e("div",[t._v("姓名："+t._s(a.name||"--"))]),e("div",[t._v("证件号："+t._s(a.cardId||"--"))]),e("div",[t._v("手机号："+t._s(a.mobile||"--"))]),e("div",[t._v("血型："+t._s(t._f("blood")(a.blood)))]),e("div",[t._v("摆渡车："+t._s(1==a.baiduche?"是":"否"))])]),e("td",[a.pay&&1==a.pay?e("span",[t._v("已支付")]):e("span",[t._v("未支付")]),1==a.marathonEvent.status&&0==a.pay?e("button",{on:{click:function(e){t.startPay(a)}}},[t._v("支付")]):t._e()])])})],2),0==t.orders.length?e("div",[t._v("暂无")]):t._e(),t.orders.length>0?e("pager",{attrs:{pageData:t.pageData},on:{pageChange:t.pageChange}}):t._e()],1)]),e("div",{staticClass:"fr"},[e("right-part")],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("th",[this._v("活动名称")]),a("th",[this._v("报名时间")]),a("th",[this._v("活动状态")]),a("th",[this._v("报名信息")]),a("th",[this._v("支付状态")])])}]};var o=e("VU/8")(n,i,!1,function(t){e("jda2")},"data-v-ce83a768",null);a.default=o.exports},jda2:function(t,a){}});
//# sourceMappingURL=4.55a053e7e1b24b644bb5.js.map