<template lang="pug">
    .ctn1200
        .fl
            h2 个人中心
            .user-msg 
                h3 账号信息
                .msg-show ⭕ 登录手机：{{ mobile | mobile}}
            .sign-msg
                h3 报名订单列表信息
                div(v-if="orders.length==0") 暂无
                .sign-list(v-for="(item,index) in orders") 
                    //- .sign-activity {{index+1}}、{{ item.marathonEvent.name}}
                    .sign-activity(@click="goDetail(item.id)") 活动名称：{{ item.marathonEvent.name}}
                    .msg-show ⭕ 报名时间：{{ item.createDate }}
                    .msg-show ⭕ 支付情况：{{item.pay && item.pay==1?'已支付':'未支付'}}
                    .msg-show ⭕ 活动状态：{{ item.status | status }}
                    .msg-show ⭕ 参赛费用：{{ item.total_fee/100}}元
                    .msg-show(@click="startPay(item)" v-if="item.marathonEvent.status==1 && item.pay==0") 支付


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
            
            console.log(typeof v)
            if(v==0) return '报名未开始'
            if(v==1) return '报名进行中'
            if(v==2) return '即将开赛'
            if(v==3) return '赛事进行中'
            if(v==4) return '赛事已结束'
            return '状态未知';
            
            // var str;
            // switch(v){
            //     case '0':
            //         str = '报名未开始';
            //         break;
            //     case '1':
            //         str = '报名进行中';
            //         break;
            //     case '2':
            //         str = '即将开赛';
            //         break;
            //     case '3':
            //         str = '赛事进行中';
            //         break;
            //     case '4':
            //         str = '赛事已结束';
            //         break;
            //     default: 
            //         str = '';
            // }
            // return str;
        }
    },
    data () {
        return {
            mobile: localStorage.rwMobile,
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
                total_fee: item.total_fee
            }).then( res =>{
                if(res.code==1){
                    var form = res.objectData;
                    $('body').append($(form));
                    // $(form).submit()
                }
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
            .sign-activity
                cursor: pointer;
</style>
