<template lang="pug">
    .ctn1200
        .fl
            .sign-title
                a(href="http://www.runningweekends.net/3392") >>>>>悦在五凤——喜悦（Joy）系列活动五凤站活动说明<<<<<
                p 
                    span （ 咨询电话&nbsp;
                    i 173 1312 9309，孙滨
                    span  ）
            .activity-des
                h2 活动说明
                b
                .activity-msg
                    p.msg-p(v-for='item in activityMsg') {{item}}
            .fill-box
                .fill-msg
                    .fill-label.fl 姓名
                        span *
                    .fill-input.fl
                        input.input1.name(v-model="fillMsg.name" value="小小")
                .fill-msg
                    .fill-label.fl 证件号码
                        span *
                    .fill-input.fl
                        input.input1.cardId(v-model="fillMsg.cardId")
                .fill-msg
                    .fill-label.fl 手机号码
                        span *
                    .fill-input.fl
                        input.input1.mobileNum(v-model="fillMsg.mobileNum")
                .fill-msg
                    .fill-label.fl 紧急联系人
                        span *
                    .fill-input.fl
                        input.input2.emergencyContact(v-model="fillMsg.emergencyContact")
                .fill-msg
                    .fill-label.fl 紧急联系人电话
                        span *
                    .fill-input.fl
                        input.input2.emergencyPhone(v-model="fillMsg.emergencyPhone")
                .fill-msg
                    .fill-label(style="margin-bottom: 8px;") 免责条款
                    p.msg-p  我自愿参加本次赛事及一切赛事相关活动，我确认本人具有参加比赛相应的民事行为能力和民事责任能力，并且已获得监护人的同意。我确认了解比赛可能发生的一切风险（包括但不限于因本次运动所可能产生的人身伤亡风险）的提示，我在此明确同意将自行承担参加比赛所可能存在的风险和责任。并确认自身身体和精神健康状况符合参加比赛的各项要求。我愿意承担自身的意外风险责任，并确认不会就活动中发生或引发的自身意外、死亡或任何形式的损失向组委会提出赔偿或追究责任。我承诺本人所提供的报名信息真实无误，并同意报名费用支付后不退回。
                .fill-msg(style="margin-bottom:0")
                    .fill-label.fl(style="width: 15px;")
                        span *
                    .fill-input.checkbox
                        input(type="checkbox" id="f1" name="f1")
                        label.msg-p(for="f1") 我已阅读并完全同意以上免责条款
            .fill-box
                .title 验证
                .fill-msg(style="margin-bottom:0")
                    .fill-label.mar-5 请输入任意两位数字
                            span *
                    .fill-input
                        input.input2(v-model="fillMsg.verification" value="11")
                        span.font-13 Example: 12
                    button(@click="signUp") Submit

        .fr
            right-part
</template>
<script>
import listNews from './components/list-news'
import rightPart from './components/layout/right'
export default {
    name: 'signUp',
    data () {
        return {
            activityMsg: [
                '1.   本次活动是出于自愿原则的AA活动，本组委会只是起到活动的联系作用。',
                '2.   参加活动者要求在18岁以上70岁以下',
                '3.   在活动中因个人身体及其他个人原因导致的人身损害和财产损失由参加活动者个人承担责任。',
                '4.   所有参加活动者必须进行自我评估，确认自己的身体及精神状况能够适应于活动才可报名以及参加活动。',
                '5.   参加活动者必须接受活动组委会为参加活动者办理的人身意外险和医疗险。',
                '6.   参加活动者若在比赛过程中发生任何伤亡事故以及各项医疗救护费用，均按投保额度向保险公司进行索赔。家属、遗嘱执行人或有关人员均不得状告活动组委会、赞助商以及活动组委会任命的官员、服务人员、代表、代理机构、参与组织以及赞助周末”享”跑（Running Weekends）喜悦（Joy）系列活动五凤站的有关机构、公司及员工，也不得向以上单位，个人提出其他索赔要求。'
            ],
            fillMsg: {
                name: '小小',
                cardId: '350428111111111111',
                mobileNum: '13616181111',
                emergencyContact: 'xiaoixao',
                emergencyPhone: '13616181111',
                verification: '11'
            },
        }
    },
    components: {
        listNews,
        rightPart
    },
    mounted(){
    },
    methods: {
        signUp(){
            if(this.fillMsg.name == '' || 
                this.fillMsg.cardId == '' || 
                this.fillMsg.mobileNum == '' || 
                this.fillMsg.emergencyContact == '' ||
                this.fillMsg.emergencyPhone == '' ||
                this.fillMsg.verification == ''){
                    alert('请将信息填写完整~')
            }else{
                var mobileNum = $('.mobileNum').val();
                var emergencyPhone = $('.emergencyPhone').val();
                if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobileNum)) || !(/^1[3|4|5|8][0-9]\d{4,8}$/.test(emergencyPhone))){
                    alert('请填入正确的手机号码~')
                }else{
                    if(!$("input[type='checkbox']").prop('checked')){
                        alert('请阅读免责条款，并勾选~');
                    }else{
                        var opts = this.fillMsg;
                        this.ajax('/order/save', {
                            opts
                        }).then( (res)=>{
                            var list = res.list
                            if(list && list[0]){
                                this.id = list[0].id;
                                list[0].id && this.getDetail()
                            }else{
                                alert('id请求出错');
                            }
                        })
                    }
                }
            }
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
                        width: 450px;
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
