<template>
  <div class="m-toast">
    <div class="weui-mask_transparent" v-show="isShowMask && show"></div>
    <transition :name="currentTransition">
      <div class="weui-toast" :style="{width: width}" :class="toastClass" v-show="show">
        <i class="weui-icon-success-no-circle weui-icon_toast" v-show="type !== 'text'"></i>
        <p class="weui-toast__content" v-if="text" :style="style" v-html="text"></p>
        <p class="weui-toast__content" v-else><slot></slot></p>
      </div>
    </transition>
  </div>
</template>

<script>
import SafariFixIssue from '../../mixins/safari-fix';

export default {
  mixins: [SafariFixIssue],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '3rem'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data () {
    return {
      show: false
    };
  },
  created () {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition () {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'm-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'm-slide-from-bottom';
      }
      return 'm-fade';
    },
    toastClass () {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_long': this.type === 'long',
        'weui-toast_text': this.type === 'text',
        'm-toast-top': this.position === 'top',
        'm-toast-bottom': this.position === 'bottom',
        'm-toast-middle': this.position === 'middle'
      };
    },
    style () {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '.08rem' };
      }
    }
  },
  watch: {
    show (val) {
      this.fixSafariOverflowScrolling('auto');

      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
      }
      if (val) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
          this.$emit('on-hide');
          this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value (val) {
      this.show = val;
    }
  }
};
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/icon/weui_icon_font';
@import '../../styles/weui/widget/weui_tips/weui_toast';

.weui-toast.m-toast-top {
  top: @toast-position-top-offset;
}
.weui-toast.m-toast-bottom {
  top: auto;
  bottom: @toast-position-bottom-offset;
  transform: translateX(-50%);
}
.weui-toast.m-toast-middle {
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.m-slide-from-top-enter, .m-slide-from-top-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%)!important;
}
.m-slide-from-bottom-enter, .m-slide-from-bottom-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(100%)!important;
}
.m-slide-from-top-enter-active,
.m-slide-from-top-leave-active,
.m-slide-from-bottom-enter-active,
.m-slide-from-bottom-leave-active {
  transition: all 400ms cubic-bezier(.36,.66,.04,1);
}
.weui-toast {
  transform: translateX(-50%);
  margin-left: 0!important;
}
.weui-toast.weui-toast_forbidden {
  color: #F76260;
}
.weui-toast.weui-toast_text{
  min-height: 0;
}
.weui-toast_text .weui-toast__content {
  margin: 0;
}
.weui-toast__content {
  font-size: @toast-content-font-size;
}
.weui-loading_toast .weui-toast__content {
  margin-top:-0.25rem;
}
.weui-toast_success .weui-icon_toast:before {
  content: "\EA08";
}
.weui-toast_cancel .weui-icon_toast:before {
  content: "\EA0D";
}
.weui-toast_forbidden .weui-icon_toast:before {
  content: "\EA0B";
}
</style>
