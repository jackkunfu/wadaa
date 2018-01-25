<template lang="pug">
    .ctn1200
        .fl
            h2 个人中心
            .user-msg 
                h3 账号信息
                .msg-show ⭕ 登录手机：{{ mobile | mobile}}
            .sign-msg
                h3 报名订单列表信息
                .sign-list(v-for="(item,index) in orders") 
                    //- .sign-activity {{index+1}}、{{ item.marathonEvent.name}}
                    .sign-activity 活动名称：{{ item.marathonEvent.name}}
                    .msg-show ⭕ 报名时间：{{ item.createDate }}
                    .msg-show ⭕ 支付情况：{{item.pay==0?'未支付':'已支付'}}
                    .msg-show ⭕ 参赛情况：{{ item.state==0?'已圆满结束~':'正在火热进行中~'}}
                    .msg-show ⭕ 参赛费用：{{ item.total_fee/100}}元

                pager(:pageData="pageData" @pageChange="pageChange")
            
        .fr
            right-part

</template>
<script>
import rightPart from './components/layout/right'

import pager from './components/pager'


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
            orders: [],
            curPage: 1,
            pageData: {
                cur: 1,
                total: 0
            }
        }
    },
    components: {
        rightPart,
        pager
    },
    mounted(){
        this.getOrderList()
    },
    methods: {
        getOrderList(){
            if(!localStorage.rwUserId){
                alert('请先登陆~');
                return;
            }
            this.ajax('/order/matchList', {
                pageNo: this.curPage,
                pageSize: 10,
                accountId: localStorage.rwUserId
            }).then( res =>{
                this.orders = res.objectData.list || [];
                var cp = res.objectData.pageNo;
                this.curPage = cp
                this.pageData = {
                    total: res.objectData.count || 0,
                    cur: cp || 1
                }
            })
        },
        pageChange(v){  // 页码变化事件
            this.curPage = v;
            this.getOrderList();
        },
    }

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
