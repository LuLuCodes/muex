<template>
  <transition name="m-mask">
    <div class="weui-loading_toast" v-show="show">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast" :style="{ position: position }">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">{{ text || 'loading' }}<slot></slot></p>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  created () {
    this.show = this.value;
  },
  data () {
    return {
      show: false
    };
  },
  watch: {
    value (val) {
      this.show = val;
    },
    show (val) {
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_toast';
@import '../../styles/weui/widget/weui-loading/weui-loading.less';

.weui-icon_toast.weui-loading {
  margin: 15px 0 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline;
  display: inline-block;
}
.weui-loading_toast  .weui-toast{
  border-radius:.1rem;
  width: 2.2rem;
}
</style>
