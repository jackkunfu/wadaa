<template lang="pug">
    .right
        .run-msg
            h3 沐野青城
            .msg-box
                .nav
                
                    

        .public-code
            h3 关注周末享跑公众号
            img(src="../../imgs/2016122008485864.jpg")
        .mail-login
            h3 邮箱登陆
            .mail-msg
                label 账号：
                input(type="text")
                p @runningweekends.net
            .mail-msg
                label 密码：
                input(type="password")

</template>
<script>
export default {
    name: "right",
    data () {
        return {
            

        }
    }
}
</script>
<style lang="sass" scoped>
    .right
        width: 2.8rem;
        h3
            font-size: 0.24rem;
            font-weight: 500;
            margin-bottom: 15px;
        .run-msg,.public-code
            margin-bottom: 30px;
        .mail-msg
            height: 70px;
            position: relative;
            top: -75px;
            padding-left: 10px;
            label,p
                font-size: 0.13rem;
            input
                line-height: 25px;
                border-radius: 5px;
                border: 1px solid #ccc;
                padding: 0 5px;
            p
                position: relative;
                top: -12px;
                
</style>

