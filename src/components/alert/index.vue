<template>
  <div class="m-alert">
    <m-dialog
    v-model="showValue"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')"
    >
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;"
        class="weui-dialog__btn weui-dialog__btn_primary"
        @click="_onHide">{{buttonText}}</a>
      </div>
    </m-dialog>
  </div>
</template>


<script>
import MDialog from '../m-dialog/index.vue';

export default {
  components: {
    MDialog
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value;
    }
  },
  props: {
    value: Boolean,
    content: String,
    title: String,
    buttonText: {
      type: String,
      default: '确定'
    },
    maskTransition: {
      type: String,
      default: 'm-mask'
    },
    dialogTransition: {
      type: String,
      default: 'm-dialog'
    }
  },
  data () {
    return {
      showValue: false
    };
  },
  methods: {
    _onHide () {
      this.showValue = false;
    }
  },
  watch: {
    value (val) {
      this.showValue = val;
    },
    showValue (val) {
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_dialog';
</style>
