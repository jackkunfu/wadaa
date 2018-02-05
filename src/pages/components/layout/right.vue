<template lang="pug">
    .right
        //- .run-msg
            h3 沐野青城
            .msg-box
                .nav
                    span(@click="show(0)").active
                        i.icon.iconfont &#xe617;
                        div.arrow  
                    span(@click="show(1)")
                        i.icon.iconfont &#xe608;
                        div.arrow
                    span(@click="show(2)")
                        i.icon.iconfont &#xe62b;
                        div.arrow
                .msg-show
                    .personal-part(v-if="type==0")
                        .msg-list
                            .fl
                                img(src="../../../imgs/logo.png")
                            .fr
                                a 2017青城山国际越野挑战赛竞赛规程
                                i 2017年1月26日 
                        .msg-list
                            .fl
                                img(src="../../../imgs/logo.png")
                            .fr
                                a 2017青城山国际越野挑战赛竞赛规程
                                i 2017年1月26日 

        .public-code
            h3 关注周末享跑公众号
            img(src="../../../imgs/2016122008485864.jpg")

        .mail-login(v-if="!isLogin")
            h3 手机登陆
            .mail-msg
                label 手机号：
                input(type="text" v-model="phone")
                //- p @runningweekends.net
            //- .mail-msg.code
                label 验证码：
                input(type="text" v-model="code")
                input(type="text" v-model="mobileLogin.mobile")
                //- p @runningweekends.net
            .mail-msg.code
                label 验证码：
                input(type="text" v-model="code")
                button.getCode(@click="getCode") 获取验证码
            .mail-btn
                button(@click="login") 登录

        .mail-login(v-if="isLogin")
            h3 手机登陆
            .mail-btn
                button(@click="goSelf") 个人中心
                button(@click="logout") 退出
                //- a(href="https://exmail.qq.com/cgi-bin/readtemplate?check=false&t=bizmail_orz") 忘记密码？

        //- .friendly-link
            h3 友情链接
            .link-box
                a(v-for="item in linkList") {{item.name}}
            
</template>
<script>
export default {
    name: "right",
    data () {
        return {
            type: 0,
            emailLogin: {
                email: '',
                password: ''
            },
            mobileLogin: {
                mobile: '',
                password: ''
            },
            linkList: [
                {name:'成都文旅', url:'http://www.cdctg.com/'},
                {name:'再上路，在路上', url:'http://blog.sina.com.cn/alloeat'},
                {name:'未央-杨小华', url:'http://www.yangxiaohua.net/'},
                {name:'爱燃烧', url:'http://iranshao.com/'},
            ],
            phone: localStorage.rwMobile || '',
            code: '',
            rwUserId: localStorage.rwUserId,
            isLogin: localStorage.rwMobile || '',
            setTime: ''
        }
    },
    mounted () {},
    methods: {
        show(num){
            $('.nav span').removeClass('active');
            $('.nav span').eq(num).addClass('active');
            this.type = num;
        },
        logout(){
            this.isLogin = this.phone = localStorage.rwMobile = localStorage.rwUserId = '';
            clearInterval(this.setTime);
            alert('退出成功~');
            this.$router.push('/');
            setTimeout(() => {
                window.history.go(0);
            }, 20);
        },
        getCode(){
            if(this.phone && /^1[3|4|5|8][0-9]\d{8}$/.test(this.phone.trim())){
                this.ajax('', {
                    mobile: this.phone.trim()
                }, 'get', '/basic/user/identify').then( (res) => {
                    // console.log(res);
                    if(res.code == 1){
                        alert('验证码短信已发送，请注意查收~')
                        $('.getCode').attr('disabled', true)
                        var t = 59;
                        this.setTime = setInterval( () =>{
                            $('.getCode').html(t +' s');
                            t--;
                            if(t==-1){
                                clearInterval(this.setTime);
                                $('.getCode').removeAttr('disabled');
                                $('.getCode').html('获取验证码')
                            }
                        }, 1000)
                    }
                })
            }else{
                alert('手机号格式不正确');
            }
        },
        login(){
            var trimPhone = this.phone.trim();
            if(!this.phone || !(/^1[3|4|5|8][0-9]\d{8}$/.test(trimPhone)) ){
                alert('手机号格式不正确');
                return
            }

            var trimCode = this.code.trim();
            if(!this.code || trimCode.length != 6){
                alert('验证码不正确');
                return
            }

            this.ajax('', {
                mobile: trimPhone,
                identify_code: trimCode
            }, 'get', '/basic/user/reg').then( res => {
                if(res.code == 1){
                    alert('登陆成功');
                    this.rwUserId = localStorage.rwUserId = res.objectData.id || '';
                    this.isLogin = this.phone = localStorage.rwMobile = trimPhone;
                    this.code = '';
                    clearInterval(this.setTime);
                }else{
                    alert(res.msg);
                }
            } )
        },
        goSelf(){
            if(localStorage.rwUserId){
                this.$router.push({path:'/myMsg'});
            }else{
                alert('请先登录~');
            }
        }
    }
}
</script>
<style lang="sass" scoped>
    .getCode
        width: 80px;
        padding: 2px 0;
        font-size: 13px;
    .right
        width: 280px;
        h3
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 15px;
        a
            font-size: 13px;
            margin-left: 30px;
            cursor: pointer;
            &:hover
                color: #009999;
                text-decoration: underline;
        .run-msg,.public-code,.mail-login
            margin-bottom: 50px;
        .msg-box
            width: 100%;
            .nav
                width: 100%;
                height: 35px;
                line-height: 35px;
                background: #e5e5e5;
                span
                    display: inline-block;
                    height: 35px;
                    line-height: 33px;
                    padding: 0 30px;
                    border: 2px solid transparent;
                    border-bottom: none;
                    border-left: none;
                    border-right: none;
                    position: relative;
                    cursor: pointer;
                    i
                        font-size: 14px;
                    .arrow
                        display: none;
                        position: absolute;
                        left: 50%;
                        margin-left: -5px;
                        bottom: -4px;
                        width: 9px;
                        height: 9px;
                        transform: rotate(45deg);
                        z-index: 1;
                        background: #444;
                .active
                    background: #444;
                    border: 2px solid #009999;
                    border-bottom: none;
                    border-left: none;
                    border-right: none;
                    position: relative;
                    i
                        color: #fff;
                    .arrow
                        display: block;
            .personal-part
                border: 1px solid #ddd;
                border-top: none;
                padding: 25px;
                padding-bottom: 0;
                .msg-list
                    overflow: hidden;
                    padding-bottom: 30px;
                    .fl
                        width: 40px;
                        height: 40px;
                        img
                            width: 40px;
                    .fr
                        width: 160px;
                    a
                        font-size: 14px;
                        display: block;
                    i
                        font-size: 12px;
        .mail-msg
            height: 35px;
            padding-left: 10px;
            &.code
                input
                    width: 90px;
                button
                    margin-left: 10px;
            label,p
                font-size: 13px;
            input
                line-height: 25px;
                border-radius: 5px;
                border: 1px solid #ccc;
                padding: 0 5px;
        .mail-btn
            position: relative;
            right: -39px;
            button
                padding: 4px 15px;
                margin: 0 5px;
        .link-box
            a
                display: block;
                margin-bottom: 8px;
        
                
</style>

