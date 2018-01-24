<template lang="pug">
    .ctn1200
        .fl
            h2 个人中心
            .user-msg 
                h3 账号信息
                .msg-show ⭕ 登录手机：{{ mobile | mobile}}
            .sign-msg 
                h3 报名信息
                .sign-list(v-for="(item,index) in signMsg") 
                    .sign-activity {{index+1}}、{{ item.name}}
                    .msg-show ⭕ 报名时间：{{ item.time }}
                    .msg-show ⭕ 支付情况：{{item.pay==0?'未支付':'已支付'}}
                    .msg-show ⭕ 参赛情况：{{ item.state==0?'已圆满结束~':'正在火热进行中~'}}
            
        .fr
            right-part

</template>
<script>
import rightPart from './components/layout/right'

export default {
    name: 'myMsg',
    filters: {
        mobile(v){
            var v = '' + v;
            return v.substring(0,3) + '****' + v.substring(v.length-3, v.length)
        },
    },
    data () {
        return {
            mobile: 13616181047,
            signMsg: [
                {name: '哲学小镇山地马拉松',time:'2017-12-11 14:12',pay:0,state:0},
                {name: '青城山国际越级挑战赛',time:'2017-12-11 14:12',pay:0,state:1},
                {name: '哲学小镇山地马拉松',time:'2017-12-11 14:12',pay:1,state:1},
            ]
        }
    },
    components: {
        rightPart
    },
    

}
</script>
<style lang="sass" scoped>
    
    h3
        font-weight: 500;
        margin: 15px 0;
    .msg-show
        font-size: 14px;
    .sign-msg
        margin-top: 20px;
        div
            margin-bottom: 10px;
        .sign-list
            margin: 25px 0;
</style>
