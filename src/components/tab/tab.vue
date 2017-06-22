<template>
  <div class="m-tab" :class="{'m-tab-no-animate': !animate}">
    <slot></slot>
    <div v-if="animate" class="m-tab-ink-bar" :class="barClass" :style="barStyle">
      <span class="m-tab-bar-inner" :style="innerBarStyle" v-if="customBarWidth"></span>
    </div>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-items';

export default {
  mixins: [parentMixin],
  mounted () {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String]
  },
  computed: {
    barLeft () {
      return `${this.currentIndex * (100 / this.number)}%`;
    },
    barRight () {
      return `${(this.number - this.currentIndex - 1) * (100 / this.number)}%`;
    },
    barStyle () {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.backgroundColor = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass () {
      return {
        'm-tab-ink-bar-transition-forward': this.direction === 'forward',
        'm-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    innerBarStyle () {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      };
    }
  },
  watch: {
    currentIndex (newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
    }
  },
  data () {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  }
};
</script>


<style lang="less">
@import '../../styles/variable.less';

@prefixClass: m-tab;
@easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
@effect-duration: .3s;

.@{prefixClass} {

  &-ink-bar {
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: @tab-bar-active-color;

    &-transition-forward {
      transition: right @effect-duration @easing-in-out,
      left @effect-duration @easing-in-out @effect-duration * 0.3;
    }
    &-transition-backward {
      transition: right @effect-duration @easing-in-out @effect-duration * 0.3,
      left @effect-duration @easing-in-out;
    }
  }

}

.m-tab {
  display: flex;
  background-color: #fff;
  height: .74rem;
  position: relative;
}
.m-tab button {
  padding: 0;
  border: 0;
  outline: 0;
  background: 0 0;
  appearance: none;
}
.m-tab .m-tab-item {
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
  background-size: 100% 1px;
  font-size: .24rem;
  text-align: center;
  line-height: .74rem;
  color: @tab-text-default-color;
}

.m-tab .m-tab-item.m-tab-selected {
  color: @tab-text-active-color;
  border-bottom: 3px solid @tab-text-active-color;
}

.m-tab .m-tab-item.m-tab-disabled {
  color: @tab-text-disabled-color;
}

.m-tab.m-tab-no-animate .m-tab-item.m-tab-selected {
  background: 0 0;
}

/** when=prop:custom-bar-width **/
.m-tab-bar-inner {
  display: block;
  background-color: @tab-text-active-color;
  margin: auto;
  height: 100%;
  transition: width 0.3s @easing-in-out;
}

</style>
