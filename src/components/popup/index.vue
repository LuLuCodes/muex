<template>
  <transition :name="`m-popup-animate-${position}`">
    <div v-show="show" :style="styles" class="m-popup-dialog" :class="[`m-popup-${position}`, show ? 'm-popup-show' : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from './popup';

export default {
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    isShowMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  mounted () {
    this.$nextTick(() => {
      const _this = this;
      this.popup = new Popup({
        isShowMask: _this.isShowMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen () {
          _this.fixSafariOverflowScrolling('auto');
          _this.show = true;
        },
        onClose () {
          _this.show = false;
          if (Object.keys(window.__$vuxPopups).length > 1) return;
          if (document.querySelector('.m-popup-dialog.m-popup-mask-disabled')) return;
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch');
          }, 300);
        }
      });
      this.$overflowScrollingList = document.querySelectorAll('.m-fix-safari-overflow-scrolling');
    });
  },
  methods: {
    /**
     * https://github.com/airyland/m/issues/311
     * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
     */
    fixSafariOverflowScrolling (type) {
      if (!this.$overflowScrollingList.length) return;
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    }
  },
  data () {
    return {
      hasFirstShow: false,
      show: this.value
    };
  },
  computed: {
    styles () {
      const styles = {};
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height;
      } else {
        styles.width = this.width;
      }

      this.isTransparent && (styles['background'] = 'transparent');
      return styles;
    }
  },
  watch: {
    show (val) {
      this.$emit('input', val);
      if (val) {
        this.popup.show();
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');
        if (!this.hasFirstShow) {
          this.$emit('on-first-show');
          this.hasFirstShow = true;
        }
      } else {
        this.$emit('on-hide');
        if (!document.querySelector('.m-popup-dialog.m-popup-show')) {
          this.fixSafariOverflowScrolling('touch');
        }
        this.show = false;
        this.popup.hide(false);
      }
    },
    value (val) {
      this.show = val;
    }
  },
  beforeDestroy () {
    this.popup.destroy();
    this.fixSafariOverflowScrolling('touch');
  }
};
</script>

<style lang="less">
  @import '../../styles/variable.less';
  
  .m-popup-dialog {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: @popup-background-color;
    z-index: 501;
    transition-property: transform;
    transition-duration: 300ms;
  }
  .m-popup-dialog.m-popup-left {
    width: auto;
    height: 100%;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
  }
  .m-popup-dialog.m-popup-right {
    width: auto;
    height: 100%;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
  }
  .m-popup-dialog.m-popup-top {
    width: 100%;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
  }
  .m-popup-mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    tap-highlight-color: rgba(0,0,0,0);
    z-index: -1;
    transition: opacity 400ms;
  }
  .m-popup-mask.m-popup-show {
    opacity: 1;
  }
  
  .m-popup-animate-bottom-enter, .m-popup-animate-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
  }
  
  .m-popup-animate-left-enter, .m-popup-animate-left-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
  
  .m-popup-animate-right-enter, .m-popup-animate-right-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  
  .m-popup-animate-top-enter, .m-popup-animate-top-leave-active {
    transform: translate3d(0, -100%, 0);
  }
</style>
