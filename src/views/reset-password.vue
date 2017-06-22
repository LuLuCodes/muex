<template>
  <div class="m-h100">
    <group title="" class="m-login-form">
      <m-input  placeholder="请输入手机号码">
        <span slot="label" class="icon icon-mobile"></span>
      </m-input>
      <m-input  placeholder="请输入验证码">
        <span slot="label" class="icon icon-idcode"></span>
        <span slot="right" class="m-color-text m-24-text m-1px-l">获取验证码</span>
      </m-input>
      <m-input  placeholder="请输入密码">
        <span slot="label" class="icon icon-lock"></span>
        <span slot="right" class="icon icon-eye"></span>
      </m-input>
    </group>

   <div class="m-pad-24">
     <m-button type="primary">设置新密码</m-button>
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
  @import '../styles/reset.less';
  @import '../styles/1px.less';
  @import '../assets/common.less';
</style>
