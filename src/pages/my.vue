<template lang="pug">
    .ctn1200
        .fl
            h2 个人中心
            .user-msg 
                h3 账号信息
                .msg-show(v-if="!mobile") 还未登录！！！
                .msg-show(v-else) ⭕ 登录手机：{{ mobile | mobile}}
            .sign-msg
                h3 报名订单列表信息
                
                //- .sign-list(v-for="(item,index) in orders") 
                    //- .sign-activity {{index+1}}、{{ item.marathonEvent.name}}
                    //- .sign-activity(@click="goDetail(item.id)") 活动名称：{{ item.marathonEvent.name}}
                    .sign-activity 活动名称：{{ item.marathonEvent.name}}
                    .msg-show ⭕ 报名时间：{{ item.createDate }}
                    .msg-show ⭕ 支付情况：{{item.pay && item.pay==1?'已支付':'未支付'}}
                    .msg-show ⭕ 活动状态：{{ item.marathonEvent.status | status }}
                    .msg-show ⭕ 参赛费用：{{ item.totalFee/100}}元
                    button(@click="startPay(item)" v-if="item.marathonEvent.status==1 && item.pay==0") 支付

                table(width="800" cellspacing="0")
                    tr
                        th 活动名称
                        th 报名时间
                        th 活动状态
                        th 参赛费用
                        th 支付状态
                    tr(v-for="item in orders")
                        td {{item.marathonEvent.name}}
                        td {{item.createDate}}
                        td {{item.marathonEvent.status | status}}
                        td {{item.totalFee/100}}
                        td 
                            span(v-if="item.pay && item.pay==1") 已支付
                            span(v-else="") 未支付
                            button(@click="startPay(item)" v-if="item.marathonEvent.status==1 && item.pay==0") 支付
                            
                div(v-if="orders.length==0") 暂无

                pager(:pageData="pageData" @pageChange="pageChange" v-if="orders.length>0")
            
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
        status(v){
            if(v==0) return '报名未开始'
            if(v==1) return '报名进行中'
            if(v==2) return '即将开赛'
            if(v==3) return '赛事进行中'
            if(v==4) return '赛事已结束'
            return '状态未知';
        }
    },
    data () {
        return {
            mobile: localStorage.rwMobile ? localStorage.rwMobile : false,
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
        startPay(item){
            this.ajax('/order/pay', {
                outTradeNo: item.outTradeNo,
                title: item.marathonEvent.name,
                body: item.marathonEvent.name,
                totalFee: item.totalFee
            }).then( res =>{
                $('body').append($(res));
            })
        },
        goDetail(id){
            this.$router.push({
                path: '/detail',
                query: {
                    id: id
                }
            })
        }
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
            padding: 20px;
            border: 1px solid #ccc;
            width: 800px;
            .sign-activity
                cursor: pointer;

    table
        margin: 0;
        padding: 0;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;

        td,th
            padding: 15px;
            text-align: center;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
</style>
