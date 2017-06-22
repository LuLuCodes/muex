<template>
  <div class="m-h100">
    <group title="" class="m-login-form">
      <m-input  placeholder="请输入手机号码">
        <span slot="label" class="icon icon-mobile"></span>
      </m-input>
      <m-input  placeholder="请输入密码">
        <span slot="label" class="icon icon-lock"></span>
        <span slot="right" class="icon icon-eye"></span>
      </m-input>
    </group>

   <div class="m-pad-24">
     <m-button type="primary">登录</m-button>
     <p class="m-clearfix m-pad-t24">
       <span class="m-pull-left">忘记密码？</span>
       <span class="m-pull-right m-color-text">立即注册</span>
     </p>
   </div>

  </div>
</template>


<script>
  import MInput from '../components/m-input/index.vue';
  import Group from '../components/group/index.vue';
  import MButton from '../components/m-button/index.vue';
  import Cell from '../components/cell/index.vue';

  export default {
    components: {
      MInput,
      Group,
      Cell,
      MButton
    },
    data () {
      return {

      };
    },
    watch: {

    },
    methods: {

    }
  };
</script>

<style lang="less">
  @import '../assets/common.less';
</style>
