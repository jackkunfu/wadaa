<template lang="pug">

div
  .ctn1200
    .detail(v-html="form")

    .fr
      right-part

</template>

<script>

import { config } from '../js/vueProto'

import rightPart from './components/layout/right'

import share from './components/share'

export default {
  name: 'pay',
  props: ['detail'],
  data(){
    return {
      form: this.detail
    }
  },
  components: {
    rightPart
  },
  mounted(){
    

  },
  methods: {
    
  }
}
</script>

<style lang="sass" scoped>
.detail
  margin-left: 75px;
</style>


