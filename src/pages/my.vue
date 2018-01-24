<template lang="pug">
    .ctn1200
        .fl
            h2 个人中心
            .user-msg 
                h3 账号信息
                .msg-show ⭕ 登录手机：{{ myMsg.mobile | mobile}}
            .sign-msg 
                h3 报名信息
                .sign-list(v-for="(item,index) in signMsg") 
                    .sign-activity {{index+1}}、{{ item.name}}
                    .msg-show ⭕ 报名时间：{{ item.time }}
                    .msg-show ⭕ 支付情况：
                    .msg-show ⭕ 参赛情况：{{ item.state | state}}
            
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
        state(v){
            var state = v;
            var s = state == 0 ? '活动已经圆满结束~' : '活动正在火热进行中~';
            return s;
        }
    },
    data () {
        return {
            myMsg: {
                mobile: 13616181047,
                activityName: '哲学小镇山地马拉松',
                signTime: '2017-12-11 14:12',
                activityState: '活动还未开始'

            },
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
