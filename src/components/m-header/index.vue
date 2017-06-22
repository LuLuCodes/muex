<template>
  <div class="mue-header">
    <div class="mue-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <a class="mue-header-back" v-show="_leftOptions.showBack"
             @click.prevent.stop="onClickBack">{{_leftOptions.backText}}</a>
        </transition>
        <transition :name="transition">
          <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="mue-header-title" @click="$emit('on-click-title')">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="mue-header-right">
      <a class="mue-header-more" @click.prevent.stop="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import objectAssign from 'object-assign';
  
  export default {
    props: {
      leftOptions: Object,
      title: String,
      transition: String,
      rightOptions: {
        type: Object,
        default () {
          return {
            showMore: false
          };
        }
      }
    },
    computed: {
      _leftOptions () {
        return objectAssign({
          showBack: true,
          preventGoBack: false,
          backText: '返回'
        }, this.leftOptions || {});
      }
    },
    methods: {
      onClickBack () {
        if (this._leftOptions.preventGoBack) {
          this.$emit('on-click-back');
        } else {
          this.$router ? this.$router.back() : window.history.back();
        }
      }
    }
  };
</script>

<style lang="less">
  @import '../../styles/variable.less';

  .mue-header {
    position: relative;
    box-sizing: border-box;
    background-color: @header-background-color;
  }

  .mue-header .mue-header-title, .mue-header h1 {
    margin: 0 1.5rem;
    line-height: .8rem;
    text-align: center;
    height: .8rem;
    font-size: .28rem;
    font-weight: 400;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: @header-title-color;
  }

  .mue-header .mue-header-title > span {
    display: inline-block;
  }

  .mue-header .mue-header-left, .mue-header .mue-header-right {
    position: absolute;
    top: .22rem;
    display: block;
    font-size: .24rem;
    line-height: .38rem;
    color: @header-text-color;
  }

  .mue-header .mue-header-left a, .mue-header .mue-header-left button, .mue-header .mue-header-right a, .mue-header .mue-header-right button {
    float: left;
    margin-right: 8px;
    color: @header-text-color;
  }

  .mue-header .mue-header-left a:active, .mue-header .mue-header-left button:active, .mue-header .mue-header-right a:active, .mue-header .mue-header-right button:active {
    opacity: .5
  }

  .mue-header .mue-header-left {
    left: .32rem
  }

  .mue-header .mue-header-left .mue-header-back {
    padding-left: .38rem
  }

  .mue-header .mue-header-left .left-arrow {
    position: absolute;
    width: .38rem;
    height: .38rem;


    &
    :before {
      content: "";
      position: absolute;
      width: .22rem;
      height: .22rem;
      border: 1px solid @header-arrow-color;
      border-width: 1px 0 0 1px;
      transform: rotate(315deg);
      top: .06rem;
      left: .06rem;
    }
  }

  .mue-header .mue-header-left .left-arrow:before {
    content: "";
    position: absolute;
    width: .22rem;
    height: .22rem;
    border: 1px solid @header-arrow-color;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: .06rem;
    left: .06rem;
  }
  .mue-header .mue-header-right {
    right: .32rem
  }

  .mue-header .mue-header-right a, .mue-header .mue-header-right button {
    margin-left: .2rem;
    margin-right: 0
  }

  .mue-header .mue-header-right .mue-header-more:after {
    content: "\2022\0020\2022\0020\2022\0020";
    font-size: .25rem;
  }

  .mue-header-fade-in-right-enter {
    animation: fadeinR .5s;
  }

  .mue-header-fade-in-left-enter {
    animation: fadeinL .5s;
  }

  @keyframes fadeinR {
    0% {
      opacity: 0;
      transform: translateX(.8rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeinL {
    0% {
      opacity: 0;
      transform: translateX(-.8rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
