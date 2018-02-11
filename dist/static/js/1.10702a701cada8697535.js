webpackJsonp([1],{"33M/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("fZjL"),l=i.n(s),a=i("mvHQ"),n=i.n(a),r={name:"signUp",data:function(){return{detailId:this.$route.query.detailId,activityMsg:["1.   本次活动是出于自愿原则的AA活动，本组委会只是起到活动的联系作用。","2.   参加活动者要求在18岁以上70岁以下","3.   在活动中因个人身体及其他个人原因导致的人身损害和财产损失由参加活动者个人承担责任。","4.   所有参加活动者必须进行自我评估，确认自己的身体及精神状况能够适应于活动才可报名以及参加活动。","5.   参加活动者必须接受活动组委会为参加活动者办理的人身意外险和医疗险。","6.   参加活动者若在比赛过程中发生任何伤亡事故以及各项医疗救护费用，均按投保额度向保险公司进行索赔。家属、遗嘱执行人或有关人员均不得状告活动组委会、赞助商以及活动组委会任命的官员、服务人员、代表、代理机构、参与组织以及赞助周末”享”跑（Running Weekends）喜悦（Joy）系列活动五凤站的有关机构、公司及员工，也不得向以上单位，个人提出其他索赔要求。"],isRequired:[],fillAll:[{nameStr:"name",name:"姓名",type:"text",classType:"input1",vModel:"fillMsg.name",isRequired:!1},{nameStr:"sex",name:"性别",type:"select",classType:"input1",vModel:"fillMsg.sex",isRequired:!1,choose:["男","女"]},{nameStr:"phone",name:"电话",type:"text",classType:"input1",vModel:"fillMsg.phone",isRequired:!0},{nameStr:"mobileNum",name:"手机号码",type:"text",classType:"input1",vModel:"fillMsg.mobileNum",isRequired:!0},{nameStr:"email",name:"邮箱",type:"text",classType:"input1",vModel:"fillMsg.email",isRequired:!1},{nameStr:"emergencyContact",name:"紧急联系人",type:"text",classType:"input2",vModel:"fillMsg.emergencyContact",isRequired:!0},{nameStr:"emergencyPhone",name:"紧急联系人电话",type:"text",classType:"input2",vModel:"fillMsg.emergencyPhone",isRequired:!0},{nameStr:"clothSize",name:"服装尺寸",type:"select",classType:"input1",vModel:"fillMsg.clothSize",isRequired:!0,choose:["S","M","L","XL","2XL","3XL"]},{nameStr:"baiduche",name:"是否摆渡车",type:"select",classType:"input2",vModel:"fillMsg.clothSize",isRequired:!0,choose:["否","是"]},{nameStr:"cardType",name:"证件类型",type:"select",classType:"input1",vModel:"fillMsg.cardType",isRequired:!0,choose:["身份证","护照","港澳通行证","台胞证"]},{nameStr:"cardId",name:"证件号码",type:"text",classType:"input1",vModel:"fillMsg.cardId",isRequired:!0},{nameStr:"blood",name:"血型",type:"select",classType:"input1",vModel:"fillMsg.blood",isRequired:!0,choose:["AB","A","B","O"]}],fillInput:[],fillMsg:{},entryId:this.$route.query.entryId,enrollMsg:{}}},components:{rightPart:i("w97a").a},mounted:function(){var e=this;this.ajax("/getEntry",{entryId:this.entryId}).then(function(t){e.enrollMsg=t.objectData,e.isRequired=t.objectData.additionals.split(","),e.fillInput=e.fillAll.filter(function(t){return e.isRequired.indexOf(t.nameStr)>-1}),e.isRequired.forEach(function(t){e.$set(e.fillMsg,t,"")})})},methods:{checkSubmit:function(){var e=this;if(!localStorage.rwUserId)return alert("暂未登陆,请右侧先登陆~"),!1;if(this.fillInput.forEach(function(t,i){if("text"==e.fillInput[i].type&&!e.fillMsg[t.nameStr].trim())return alert(e.fillInput[i].name+"没填~"),!1}),this.isRequired.indexOf("phone")>-1&&!/^1[3|4|5|8]\d{9}$/.test(this.fillMsg.phone.trim()))return alert("手机号格式不正确"),!1;if(this.isRequired.indexOf("mobileNum")>-1){if(!/^1[3|4|5|8]\d{9}$/.test(this.fillMsg.mobileNum.trim()))return alert("手机号格式不正确"),!1;this.fillMsg.mobile=this.fillMsg.mobileNum}if(this.isRequired.indexOf("emergencyPhone")>-1&&!/^1[3|4|5|8]\d{5,9}$/.test(this.fillMsg.emergencyPhone.trim()))return alert("紧急联系人电话格式不正确"),!1;if(this.isRequired.indexOf("email")>-1&&!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.fillMsg.email.trim()))return alert("邮箱格式不正确"),!1;if(this.isRequired.indexOf("sex")>-1&&void 0==$('input[name="sex"]:checked').val())return alert("性别没选"),!1;if(this.isRequired.indexOf("cardType")>-1&&!$('input[name="cardType"]:checked').val())return alert("证件类型没选"),!1;if(this.isRequired.indexOf("cardId")>-1){var t=(this.fillMsg.cardId+"").trim();if(0==this.fillMsg.cardType&&!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t))return alert("身份证格式输入有误"),!1;if(1==this.fillMsg.cardType&&!/^[a-zA-Z0-9]{3,21}$/.test(t)&&!/^(P\d{7})|(G\d{8})$/.test(t))return alert("护照格式输入有误"),!1;if(2==this.fillMsg.cardType&&!/^[a-zA-Z0-9]{5,21}$/.test(t))return alert("港澳通行证格式输入有误"),!1;if(3==this.fillMsg.cardType&&!/^[a-zA-Z0-9]{5,21}$/.test(t))return alert("台胞证格式输入有误"),!1;if(!t)return alert("证件号没填"),!1}return!0},signUp:function(){var e=this;if(this.checkSubmit())if($("#f1").prop("checked")){var t=JSON.parse(n()(this.fillMsg));l()(t).forEach(function(e){t[e]=(t[e]+"").trim()}),t.entryId=this.entryId,t.accountId=localStorage.rwUserId,t.sex=t.sex-0+1,this.ajax("/order/save",t,"post").then(function(i){if(1==i.code){var s=i.objectData,l=s.totalFee-0;1==t.baiduche&&(l+=5e3),e.ajax("/order/pay",{outTradeNo:s.outTradeNo,title:e.enrollMsg.name,body:e.enrollMsg.name,totalFee:l}).then(function(e){$("body").append($(e)),1==e.code&&$("body").append($(e))})}else alert(i.msg)})}else alert("请阅读免责条款，并勾选~")}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ctn1200"},[i("div",{staticClass:"fl"},[i("div",{staticClass:"sign-title"},[i("a",{attrs:{href:"/#/detail?id="+e.detailId}},[e._v(">>>>>"+e._s(e.enrollMsg.name)+"活动说明<<<<<")])]),i("div",{staticClass:"fill-box"},[e._l(e.fillInput,function(t){return i("div",{staticClass:"fill-msg"},["text"==t.type?i("div",[i("div",{staticClass:"fill-label fl"},[e._v(e._s(t.name)),i("span",[e._v("*")])]),i("div",{staticClass:"fill-input fl"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fillMsg[t.nameStr],expression:"fillMsg[item.nameStr]"}],staticClass:"input1",class:t.classType,attrs:{type:"text"},domProps:{value:e.fillMsg[t.nameStr]},on:{input:function(i){i.target.composing||e.$set(e.fillMsg,t.nameStr,i.target.value)}}})])]):e._e(),"select"==t.type?i("div",[i("div",{staticClass:"fill-label fl"},[e._v(e._s(t.name)),i("span",[e._v("*")])]),e._l(t.choose,function(s,l){return i("span",{staticClass:"radio-input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fillMsg[t.nameStr],expression:"fillMsg[item.nameStr]"}],attrs:{type:"radio",name:t.nameStr},domProps:{value:l,checked:e._q(e.fillMsg[t.nameStr],l)},on:{change:function(i){e.$set(e.fillMsg,t.nameStr,l)}}}),i("span",[e._v(e._s(s))])])})],2):e._e()])}),e._m(0),e._m(1)],2),i("div",{staticClass:"fill-box"},[i("div",{staticClass:"fill-msg",staticStyle:{"margin-bottom":"0"}},[i("button",{on:{click:e.signUp}},[e._v("确认并支付")])])])]),i("div",{staticClass:"fr"},[i("right-part")],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fill-msg"},[t("div",{staticClass:"fill-label",staticStyle:{"margin-bottom":"8px"}},[this._v("免责条款")]),t("p",{staticClass:"msg-p"},[this._v(" 我自愿参加本次赛事及一切赛事相关活动，我确认本人具有参加比赛相应的民事行为能力和民事责任能力，并且已获得监护人的同意。我确认了解比赛可能发生的一切风险（包括但不限于因本次运动所可能产生的人身伤亡风险）的提示，我在此明确同意将自行承担参加比赛所可能存在的风险和责任。并确认自身身体和精神健康状况符合参加比赛的各项要求。我愿意承担自身的意外风险责任，并确认不会就活动中发生或引发的自身意外、死亡或任何形式的损失向组委会提出赔偿或追究责任。我承诺本人所提供的报名信息真实无误，并同意报名费用支付后不退回。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fill-msg",staticStyle:{"margin-bottom":"0"}},[t("div",{staticClass:"fill-label fl",staticStyle:{width:"15px"}},[t("span",[this._v("*")])]),t("div",{staticClass:"fill-input checkbox"},[t("input",{attrs:{type:"checkbox",id:"f1",name:"f1",checked:"checked"}}),t("label",{staticClass:"msg-p",attrs:{for:"f1"}},[this._v("我已阅读并完全同意以上免责条款")])])])}]};var o=i("VU/8")(r,c,!1,function(e){i("LGoI")},"data-v-bc82ff9e",null);t.default=o.exports},Cdx3:function(e,t,i){var s=i("sB3e"),l=i("lktj");i("uqUo")("keys",function(){return function(e){return l(s(e))}})},LGoI:function(e,t){},fZjL:function(e,t,i){e.exports={default:i("jFbC"),__esModule:!0}},jFbC:function(e,t,i){i("Cdx3"),e.exports=i("FeBl").Object.keys},uqUo:function(e,t,i){var s=i("kM2E"),l=i("FeBl"),a=i("S82l");e.exports=function(e,t){var i=(l.Object||{})[e]||Object[e],n={};n[e]=t(i),s(s.S+s.F*a(function(){i(1)}),"Object",n)}}});
//# sourceMappingURL=1.10702a701cada8697535.js.map