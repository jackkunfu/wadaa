<template lang="pug">

.footer
    .line
    div
        .fl
            strong ©Copyright 2015 by Running Weekends。 All Rights Reserved. 
        .fr
            img(src="../../../imgs/RWKS_footer.jpg")

</template>

<script>
export default {
    name: "foot",
    data () {
        return {

        }
    }
}
</script>

<style lang="sass" scoped>
    .footer
        position: relative;
        bottom: 0;
        width: 100%;
        height: 180px;
        background: #444;
        margin-top: 50px;
        padding: 50px 20px;
        .line
            width: 100%;
            height: 1px;
            background: #009999;
        div
            overflow: hidden;
            line-height: 100px;
            strong
                color: #e7e7e7;
                font-size: 14px;
</style>

