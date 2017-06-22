<template>
  <div class="weui-cell">
    <div>
      <p v-html="title" :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}"></p>
    </div>
    <div class="weui-cell__ft m-cell-primary" :class="{'m-number-round': buttonStyle === 'round'}" v-show="!readonly" style="font-size:0">
      <div :style="{float:align}">
        <a @click="sub" class="m-number-selector m-number-selector-sub":class="{'m-number-disabled':disabledMin}">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=".24rem" height=".24rem"><defs></defs><path d="M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"></path></svg>
        </a>
        <input v-model.number="currentValue" :name="name" class="m-number-input" :style="{width: width}" :readonly="!fillable" pattern="[0-9]*" type="number"/>
        <a @click="add" class="m-number-selector m-number-selector-plus" :class="{'m-number-disabled':disabledMax}">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=".26rem" height=".26rem"><defs></defs><path d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"></path></svg>
        </a>
      </div>
    </div>
    <div class="weui-cell__ft" v-show="readonly">
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    min: Number,
    max: Number,
    readonly: Boolean,
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '.62rem'
    },
    buttonStyle: {
      type: String,
      default: 'square'
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  created () {
    this.currentValue = this.value;
  },
  data () {
    return {
      currentValue: 0
    };
  },
  computed: {
    disabledMin () {
      return typeof this.min === 'undefined' ? false : this.currentValue <= this.min;
    },
    disabledMax () {
      return typeof this.max === 'undefined' ? false : this.currentValue >= this.max;
    }
  },
  watch: {
    currentValue (newValue, old) {
      if (this.min && this.currentValue < this.min) {
        this.currentValue = this.min;
      }
      if (this.max && this.currentValue > this.max) {
        this.currentValue = this.max;
      }
      this.$nextTick(() => {
        this.$emit('on-change', this.currentValue);
        this.$emit('input', this.currentValue);
      });
    },
    value (newValue) {
      this.currentValue = newValue;
    }
  },
  methods: {
    add () {
      if (!this.disabledMax) {
        this.currentValue += this.step;
      }
    },
    sub () {
      if (!this.disabledMin) {
        this.currentValue -= this.step;
      }
    }
  }
};
</script>


<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_cell_global';

.m-cell-primary {
  flex: 1;
}
.m-number-input {
  float:left;
  height:.48rem;
  box-sizing: border-box;
  font-size:.22rem;
  color: @number-input-font-color;
  appearance: none;
  border:1px solid #ececec;
  line-height:.48rem;
  text-align:center;
}
.m-number-round .m-number-input {
  border: none;
}
.m-number-selector {
  float:left;
  height:.48rem;
  box-sizing: border-box;
  font-size:.24rem;
  line-height:.48rem;
  color:@number-button-font-color;
  border:1px solid @number-square-button-enabled-border-color;
}
.m-number-round .m-number-selector {
  border-radius: 100%;
}
.m-number-selector svg {
  fill: @number-button-font-color;
}
.m-number-selector.m-number-disabled svg {
  fill: #ccc;
}
.m-number-round .m-number-selector.m-number-disabled {
  border-color: @number-round-button-disabled-border-color;
}
.m-number-round .m-number-selector.m-number-disabled svg {
  fill: #ccc;
}
.m-number-selector-sub {
  border-right:none;
  padding:.03rem .12rem;
  border-radius:2px 0 0 2px;
}
.m-number-selector-plus {
  border-left:none;
  padding:.03rem .12rem;
  border-radius:0 2px 2px 0;
}
.m-number-round .m-number-selector-sub svg {
  position: relative;
  top: 1px;
}
.m-number-round .m-number-selector-sub, .m-number-round .m-number-selector-plus {
  border: 1px solid @number-round-button-enabled-border-color;
  text-align: center;
}
</style>
