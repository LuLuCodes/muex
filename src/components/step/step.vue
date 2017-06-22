<template>
	<div class="m-step">
    <slot></slot>
	</div>
</template>

<script>
export default {
  props: {
    value: Number,
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    gutter: {
      type: String,
      default: '.1rem'
    }
  },
  created () {
    this.current = this.value;
  },
  mounted () {
    this._mapPropsToChildComponent();
  },
  watch: {
    value (val) {
      this.current = val;
    },
    current (val) {
      this._mapPropsToChildComponent();
      this.$emit('input', val);
    }
  },
  data () {
    return {
      current: 0
    };
  },
  methods: {
    _mapPropsToChildComponent () {
      const _this = this;
      const len = this.$children.length - 1;
      this.$children.forEach((child, index) => {
        child.currentStepNumber = (index + 1).toString();
        child.currentStepLast = index === len;

        if (index === _this.current) {
          child.currentStatus = 'process';
        } else if (index < _this.current) {
          child.currentStatus = 'finish';
        } else {
          child.currentStatus = 'wait';
        }
      });
    }
  }
};
</script>

<style lang="less">
.m-step {
  display: flex;
}
.m-step-item {
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.m-step-item-with-tail {
  flex: 1;
}

.m-step-item-tail {
  height: 1px;
  position: absolute;
  left: 0;
  top: 50%;
  padding: 0 0;
  transition: all 0.4s ease 0s;
}

.m-step-item-tail-finish {
  background: #ffba00 none repeat scroll 0 0;
}

.m-step-item-tail-process, .m-step-item-tail-wait {
  background: #CCC none repeat scroll 0 0;
}

.m-step-item-icon {
  width: .38rem;
  height:.38rem;
  display: inline-block;
  text-align: center;
}
.m-step-item-head-process .m-step-item-icon{ font-weight: bold;}

.m-step-item-checked::before {
  margin: 0!important;
}

.m-step-item-title {
  font-size: 0.24rem;
}

.m-step-item-head {
  position: relative;
  display: inline-block;
  margin-right: -4px;

  .m-step-item-head-inner {
    width: .38rem;
    height: .38rem;
    line-height: .38rem;
    border-radius: 100%;
    text-align: center;
    font-size: .26rem;
    transition: all 0.4s ease 0s;
    background: #fff none repeat scroll 0 0;
  }
}

@media only screen
and (min-device-width: 320px)
and (max-device-width: 330px) {
  .m-step-item-head {
    margin-right: -3px;
  }
}

.m-step-item-head-finish .m-step-item-head-inner{
  border: 1px solid #ffba00;
  color: #ffba00;
}

.m-step-item-head-process .m-step-item-head-inner{
  border: 1px solid #ffba00;
  color: #FFF;
  background: #ffba00 none repeat scroll 0 0;
}

.m-step-item-head-wait .m-step-item-head-inner {
  border: 1px solid #888;
  color: #888;
}

.m-step-item-main {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  color: #888;
  padding-left: .07rem;
  line-height: 1.2;
}

.m-step-item-checked.weui-icon-success-no-circle {
  font-size: .24rem;
  color: #ffba00;
}

.m-step-item-main-process {
  font-weight: bold;
  color: #666;
}
</style>
