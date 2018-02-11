<template lang="pug">
    .ctn1200
        .fl
            .sign-title
                a(:href="'/#/detail?id='+detailId") >>>>>{{enrollMsg.name}}活动说明<<<<<
                //- p 
                    span （ 咨询电话&nbsp;
                    i 173 1312 9309，孙滨
                    span  ）
            //- .activity-des
                h2 活动说明
                b
                .activity-msg
                    p.msg-p(v-for='item in activityMsg') {{item}}
            .fill-box
                .fill-msg(v-for="item in fillInput")
                    div(v-if="item.type=='text'")
                        .fill-label.fl {{item.name}}
                            //- span(v-if="item.isRequired") *
                            span *
                        .fill-input.fl
                            input.input1(type="text" v-model="fillMsg[item.nameStr]" :class="item.classType")

                    div(v-if="item.type=='select'")
                        .fill-label.fl {{item.name}}
                            //- span(v-if="item.isRequired") *
                            span *
                        span(v-for="(cho, i) in item.choose" class="radio-input")
                            input(type="radio" :value="i" :name="item.nameStr" v-model="fillMsg[item.nameStr]")
                            span {{cho}}

                //- .fill-msg
                    .fill-label.fl 所在地址
                        span *
                    .fill-input.fl
                        v-distpicker.area-box( @province="province" @city="city")

                .fill-msg
                    .fill-label(style="margin-bottom: 8px;") 免责条款
                    p.msg-p  我自愿参加本次赛事及一切赛事相关活动，我确认本人具有参加比赛相应的民事行为能力和民事责任能力，并且已获得监护人的同意。我确认了解比赛可能发生的一切风险（包括但不限于因本次运动所可能产生的人身伤亡风险）的提示，我在此明确同意将自行承担参加比赛所可能存在的风险和责任。并确认自身身体和精神健康状况符合参加比赛的各项要求。我愿意承担自身的意外风险责任，并确认不会就活动中发生或引发的自身意外、死亡或任何形式的损失向组委会提出赔偿或追究责任。我承诺本人所提供的报名信息真实无误，并同意报名费用支付后不退回。
                .fill-msg(style="margin-bottom:0")
                    .fill-label.fl(style="width: 15px;")
                        span *
                    .fill-input.checkbox
                        input(type="checkbox" id="f1" name="f1" checked)
                        label.msg-p(for="f1") 我已阅读并完全同意以上免责条款
            .fill-box
                //- .title 验证
                .fill-msg(style="margin-bottom:0")
                    //- .fill-label.mar-5 请输入任意两位数字
                            span *
                    //- .fill-input
                        input.input2(v-model="fillMsg.verification" value="11")
                        span.font-13 Example: 12
                    button(@click="signUp") 确认并支付

        .fr
            right-part
</template>
<script>
import rightPart from './components/layout/right'
export default {
    name: 'signUp',
    data () {
        return {
            detailId: this.$route.query.detailId,
            activityMsg: [
                '1.   本次活动是出于自愿原则的AA活动，本组委会只是起到活动的联系作用。',
                '2.   参加活动者要求在18岁以上70岁以下',
                '3.   在活动中因个人身体及其他个人原因导致的人身损害和财产损失由参加活动者个人承担责任。',
                '4.   所有参加活动者必须进行自我评估，确认自己的身体及精神状况能够适应于活动才可报名以及参加活动。',
                '5.   参加活动者必须接受活动组委会为参加活动者办理的人身意外险和医疗险。',
                '6.   参加活动者若在比赛过程中发生任何伤亡事故以及各项医疗救护费用，均按投保额度向保险公司进行索赔。家属、遗嘱执行人或有关人员均不得状告活动组委会、赞助商以及活动组委会任命的官员、服务人员、代表、代理机构、参与组织以及赞助周末”享”跑（Running Weekends）喜悦（Joy）系列活动五凤站的有关机构、公司及员工，也不得向以上单位，个人提出其他索赔要求。'
            ],
            isRequired: [],
            fillAll: [
                {nameStr:'name',name:'姓名',type:'text',classType:'input1',vModel:'fillMsg.name',isRequired:false},
                {nameStr:'sex',name:'性别',type:'select',classType:'input1',vModel:'fillMsg.sex',isRequired:false,choose:['男', '女']},
                {nameStr:'phone',name:'电话',type:'text',classType:'input1',vModel:'fillMsg.phone',isRequired:true},
                {nameStr:'mobileNum',name:'手机号码',type:'text',classType:'input1',vModel:'fillMsg.mobileNum',isRequired:true},
                {nameStr:'email',name:'邮箱',type:'text',classType:'input1',vModel:'fillMsg.email',isRequired:false},
                {nameStr:'emergencyContact',name:'紧急联系人',type:'text',classType:'input2',vModel:'fillMsg.emergencyContact',isRequired:true},
                {nameStr:'emergencyPhone',name:'紧急联系人电话',type:'text',classType:'input2',vModel:'fillMsg.emergencyPhone',isRequired:true},
                {nameStr:'clothSize',name:'服装尺寸',type:'select',classType:'input1',vModel:'fillMsg.clothSize',isRequired:true,choose:['S', 'M', 'L', 'XL', '2XL', '3XL']},
                {nameStr:'baiduche',name:'是否摆渡车',type:'select',classType:'input2',vModel:'fillMsg.clothSize',isRequired:true,choose:['否', '是']},
                {nameStr:'cardType',name:'证件类型',type:'select',classType:'input1',vModel:'fillMsg.cardType',isRequired:true,choose:['身份证', '护照','港澳通行证','台胞证']},
                {nameStr:'cardId',name:'证件号码',type:'text',classType:'input1',vModel:'fillMsg.cardId',isRequired:true},
                {nameStr:'blood',name:'血型',type:'select',classType:'input1',vModel:'fillMsg.blood',isRequired:true,choose:['AB', 'A','B','O']},
            ],
            fillInput: [],
            fillMsg: {},   //  报名所须参数对象
            entryId: this.$route.query.entryId,
            enrollMsg: {}    // 存储活动信息
        }
    },
    components: {
        rightPart
    },
    mounted(){
        // 获取报名信息
        this.ajax('/getEntry', {entryId: this.entryId}).then( res => {
            this.enrollMsg = res.objectData;
            this.isRequired = res.objectData.additionals.split(',');
            // 循环遍历出需要展示的input
            this.fillInput = this.fillAll.filter( v => this.isRequired.indexOf(v.nameStr) > -1 );
            // 使各个字段响应
            this.isRequired.forEach( element => {
                this.$set(this.fillMsg, element, '')
            });
        });
    },
    methods: {
        checkSubmit(){
            if(!localStorage.rwUserId) {
                alert('暂未登陆,请右侧先登陆~');
                return false;
            }

            // 直接输入的判断
            this.fillInput.forEach( (v,i) => {
                if( this.fillInput[i].type=='text' && !(this.fillMsg[v.nameStr].trim()) ){
                    alert(this.fillInput[i].name + '没填~')
                    return false;
                }
            });
            // 电话格式判断
            if(this.isRequired.indexOf('phone') > -1){
                if( !(/^1[3|4|5|8]\d{9}$/.test(this.fillMsg['phone'].trim())) ){
                    alert('手机号格式不正确');
                    return false
                }
            }
            // 手机格式判断
            if(this.isRequired.indexOf('mobileNum') > -1){
                if( !(/^1[3|4|5|8]\d{9}$/.test(this.fillMsg['mobileNum'].trim())) ){
                    alert('手机号格式不正确');
                    return false
                }
                this.fillMsg.mobile = this.fillMsg.mobileNum;
            }
            if(this.isRequired.indexOf('emergencyPhone') > -1){
                if( !(/^1[3|4|5|8]\d{5,9}$/.test(this.fillMsg['emergencyPhone'].trim())) ){
                    alert('紧急联系人电话格式不正确');
                    return false
                }
            }
            // 邮箱格式判断
            if(this.isRequired.indexOf('email') > -1){
                if( !(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ .test(this.fillMsg['email'].trim())) ){
                    alert('邮箱格式不正确');
                    return false
                }
            }
            // 选择的判断
            if(this.isRequired.indexOf('sex') > -1){
                if($('input[name="sex"]:checked').val() == undefined){
                    alert('性别没选');
                    return false
                }
            }
            if(this.isRequired.indexOf('cardType') > -1){
                if(!$('input[name="cardType"]:checked').val()){
                    alert('证件类型没选')
                    return false
                }
            }
            if(this.isRequired.indexOf('cardId') > -1){
                var trimCardId = (this.fillMsg.cardId+'').trim();
                if( this.fillMsg.cardType == 0 && !(/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(trimCardId)) ){
                    alert('身份证格式输入有误');
                    return false
                }else if( this.fillMsg.cardType == 1 && !( /^[a-zA-Z0-9]{3,21}$/.test(trimCardId) || /^(P\d{7})|(G\d{8})$/.test(trimCardId) ) ){
                    alert('护照格式输入有误');
                    return false
                }else if( this.fillMsg.cardType == 2 && !(/^[a-zA-Z0-9]{5,21}$/.test(trimCardId)) ){
                    alert('港澳通行证格式输入有误');
                    return false
                }else if( this.fillMsg.cardType == 3 && !(/^[a-zA-Z0-9]{5,21}$/.test(trimCardId)) ){
                    alert('台胞证格式输入有误');
                    return false
                }else{
                    if(!trimCardId){
                        alert('证件号没填');
                        return false;
                    }
                }
            }

            return true;
        },
        signUp(){

            if(!this.checkSubmit()) return;

            if(!$("#f1").prop('checked')){
                alert('请阅读免责条款，并勾选~');
                return
            }

            // 复制份参数，trim去掉参数两端的空格
            var opts = JSON.parse(JSON.stringify(this.fillMsg));   // json方法深拷贝~
            Object.keys(opts).forEach( v => { opts[v] = ( opts[v] + '').trim() } );

            opts.entryId = this.entryId
            opts.accountId = localStorage.rwUserId
            opts.sex = opts.sex - 0 + 1;   // sex 循环中是从0 开始的 不过sex是传1 和 2 这里加上1

            this.ajax('/order/save', opts, 'post').then( res => {
                if(res.code != 1){
                    alert(res.msg);
                    return
                }

                // 支付
                var item = res.objectData;
                var money = item.totalFee - 0;
                if(opts.baiduche == 1) money = money + 5000   // 如果选择摆渡车  另加50元  5000分
                this.ajax('/order/pay', {
                    outTradeNo: item.outTradeNo,
                    title: this.enrollMsg.name,
                    body: this.enrollMsg.name,
                    totalFee: money
                }).then( res =>{

                    // var newwindow = window.open("","aaaaaa");
                    // newwindow.document.write(res);
                    
                    $('body').append($(res));
                    if(res.code==1){
                        $('body').append($(res));
                    }else{
                        // alert(res.msg);
                    }
                })

            })
        }
    }
}
</script>
<style lang="sass" scoped>
    .fl
        width: 850px;
        .msg-p 
            font-size: 14px;
            color: #4e4e4e;
            line-height: 20px;
        .font-13
            font-size: 13px;
            margin-left: 10px;
        .mar-5
            margin-bottom: 5px;
        .mar-0
            margin-bottom: 0;
        .sign-title
            width: 100%;
            text-align: center;
            a
                font-size: 22px;
                color: #00FF00;
                text-decoration: none;
                &:hover
                    text-decoration: underline;
            p
                color: #FF0000;
                font-size: 14px;
                margin: 40px 0 50px 0;
                i
                    font-weight: bold; 
        .activity-des
            b
                display: block;
                width: 100%;
                height: 1px;
                background: #eee;
                margin: 40px 0;
            .activity-msg
                p 
                    margin-bottom: 15px;
  
        .fill-box
            width: 100%;
            padding: 30px 20px;
            background: #eee;
            border: 1px solid #e3e3e3;
            border-radius: 3px;
            margin-top: 40px;
            input
                border: 1px solid #ddd;
                height: 25px;
                border-radius: 3px;
                padding-left: 5px;
            .title
                font-size: 16px;
                padding-bottom: 8px;
                margin-bottom: 10px;
                font-weight: bold;
                border-bottom: 1px solid #ddd;
            .fill-msg
                overflow: hidden;
                margin-bottom: 20px;
                .fill-label
                    width: 150px;
                    font-size: 14px;
                    font-weight: bold;
                    span
                        color: #bc1212;
                        padding-left: 5px;
                .fill-input
                    width: 600px;
                    .input1
                        width: 250px;
                    .input2
                        width: 250px;
                .radio-input
                    margin-right: 20px;
                    span
                        position: relative;
                        top: -7px;
                        left: 5px;
                    
                .checkbox
                    position: relative;
                    top: -4px;
                    label
                        position: relative;
                        top: -7px;
                        left: 15px;
                button
                    padding: 8px 15px;
                    margin-top: 20px;
                    
                    
</style>
