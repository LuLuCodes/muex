<template>
  <div class="m-actionsheet">
    <transition name="m-actionsheet-mask">
      <div class="weui-mask weui-mask_transparent" @click="onClickingMask" v-show="show"></div>
    </transition>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}">
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-for="(menu, key) in menus" @click="onMenuClick(menu, key)"
             v-html="menu.label || menu"
             :class="`m-actionsheet-menu-${menu.type || 'default'}`">
        </div>
      </div>
      <div class="weui-actionsheet__action" @click="emitEvent('on-click-menu', 'cancel')" v-if="showCancel">
        <div class="weui-actionsheet__cell">{{cancelText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$nextTick(() => {
        this.$tabbar = document.querySelector('.weui-tabbar');
      });
    },
    props: {
      value: Boolean,
      showCancel: Boolean,
      cancelText: {
        type: String,
        default: '取消'
      },
      menus: {
        type: [Object, Array],
        default: () => ({})
      },
      closeOnClickingMask: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        show: false
      };
    },
    methods: {
      onMenuClick (menu, key) {
        if (typeof menu === 'string') {
          this.emitEvent('on-click-menu', key);
        } else {
          if (menu.type !== 'disabled' && menu.type !== 'info') {
            if (menu.value) {
              this.emitEvent('on-click-menu', menu.value);
            } else {
              this.show = false;
            }
          }
        }
      },
      onClickingMask () {
        this.closeOnClickingMask && (this.show = false);
      },
      emitEvent (event, menu, shouldClose = true) {
        if (event === 'on-click-menu' && !/.noop/.test(menu)) {
          this.$emit(event, menu);
          this.$emit(`${event}-${menu}`);
          shouldClose && (this.show = false);
        }
      },
      fixIos (zIndex) {
        if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
          return;
        }
        if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
          this.$tabbar.style.zIndex = zIndex;
        }
      }
    },
    watch: {
      show (val) {
        this.$emit('input', val);
        if (val) {
          this.fixIos(-1);
        } else {
          setTimeout(() => {
            this.fixIos(100);
          }, 200);
        }
      },
      value (val) {
        this.show = val;
      }
    },
    beforeDestroy () {
      this.fixIos(100);
    }
  };
</script>

<style lang="less">
  @import '../../styles/weui/widget/weui_tips/weui_mask';
  @import '../../styles/weui/widget/weui_tips/weui_actionsheet';
  
  .m-actionsheet-menu-primary {
    color: @actionsheet-label-primary-color;
  }
  
  .m-actionsheet-menu-warn {
    color: @actionsheet-label-warn-color;
  }
  
  .m-actionsheet-menu-default {
    color: @actionsheet-label-default-color;
  }
  
  .m-actionsheet-menu-disabled {
    color: @actionsheet-label-disabled-color;
  }

  .m-actionsheet-mask-enter, .m-actionsheet-mask-leave-active {
    opacity: 0;
  }
  .m-actionsheet-mask-leave-active, .m-actionsheet-mask-enter-active {
    transition: opacity 300ms;
  }
</style>
