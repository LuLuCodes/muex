<template>
  <a class="m-datetime weui-cell weui-cell_access" href="javascript:">
    <slot>
      <div>
        <p :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-html="title"></p>
        <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
      </div>
      <div class="weui-cell__ft m-cell-primary m-datetime-value" :style="{textAlign: valueTextAlign}">
        {{ _value }}
        <icon class="m-input-icon" type="warn" v-show="!valid" :title="firstError"></icon>
      </div>
    </slot>
  </a>
</template>

<script>
  import Icon from '../icon/index.vue';
  import Picker from './datetimepicker';
  import Group from '../group/index.vue';
  import InlineDesc from '../inline-desc/index.vue';
  import Base from '../../libs/base';
  import format from '../../tools/date/format';

  export default {
    mixins: [Base],
    components: {
      Group,
      InlineDesc,
      Icon
    },
    props: {
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },
      title: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: ''
      },
      inlineDesc: String,
      placeholder: String,
      minYear: Number,
      maxYear: Number,
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      clearText: String,
      yearRow: {
        type: String,
        default: '{value}'
      },
      monthRow: {
        type: String,
        default: '{value}'
      },
      dayRow: {
        type: String,
        default: '{value}'
      },
      hourRow: {
        type: String,
        default: '{value}'
      },
      minuteRow: {
        type: String,
        default: '{value}'
      },
      required: {
        type: Boolean,
        default: false
      },
      minHour: {
        type: Number,
        default: 0
      },
      maxHour: {
        type: Number,
        default: 23
      },
      startDate: String,
      endDate: String,
      valueTextAlign: String,
      displayFormat: Function
    },
    created () {
      this.currentValue = this.value;
      this.handleChangeEvent = true;
    },
    data () {
      return {
        currentValue: null,
        valid: true,
        errors: {}
      };
    },
    mounted () {
      const uuid = this.uuid;
      this.$nextTick(() => {
        this.$el.setAttribute('id', `m-datetime-${uuid}`);
        this.render();
      });
    },
    computed: {
      _value () {
        if (!this.currentValue) {
          return this.placeholder || '';
        } else {
          return this.displayFormat ? this.displayFormat(this.currentValue) : this.currentValue;
        }
      },
      pickerOptions () {
        const _this = this;
        const options = {
          trigger: '#m-datetime-' + this.uuid,
          format: this.format,
          value: this.currentValue,
          output: '.m-datetime-value',
          confirmText: this.confirmText,
          cancelText: _this.cancelText,
          clearText: _this.clearText,
          yearRow: this.yearRow,
          monthRow: this.monthRow,
          dayRow: this.dayRow,
          hourRow: this.hourRow,
          minuteRow: this.minuteRow,
          minHour: this.minHour,
          maxHour: this.maxHour,
          startDate: this.startDate,
          endDate: this.endDate,
          onConfirm (value) {
            _this.currentValue = value;
          },
          onClear (value) {
            _this.$emit('on-clear', value);
          },
          onHide () {
            _this.validate();
          }
        };
        if (this.minYear) {
          options.minYear = this.minYear;
        }
        if (this.maxYear) {
          options.maxYear = this.maxYear;
        }
        return options;
      },
      firstError () {
        let key = Object.keys(this.errors)[0];
        return this.errors[key];
      }
    },
    methods: {
      render () {
        this.$nextTick(() => {
          this.picker && this.picker.destroy();
          this.picker = new Picker(this.pickerOptions);
        });
      },
      validate () {
        if (!this.currentValue && this.required) {
          this.valid = false;
          this.errors.required = '必填';
          return;
        }
        this.valid = true;
        this.errors = {};
      }
    },
    watch: {
      currentValue (val) {
        this.$emit('on-change', val);
        this.$emit('input', val);
        this.validate();
      },
      startDate () {
        this.render();
      },
      endDate () {
        this.render();
      },
      format (val) {
        if (this.currentValue) {
          this.currentValue = format(this.currentValue, val);
        }
        this.render();
      },
      value (val) {
        if (this.currentValue !== val) {
          this.currentValue = val;
          this.render();
        }
      }
    },
    beforeDestroy () {
      this.picker.destroy();
    }
  };
</script>

<style lang="less">
  @import '../../styles/variable.less';

  .scroller-component {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .scroller-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .scroller-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    background-image:
      linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6)),
      linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
    background-position: top, bottom;
    background-size: 100% 102px;
    background-repeat: no-repeat;
  }

  .scroller-item {
    text-align: center;
    font-size: .24rem;
    color: #333;
  }

  .scroller-indicator {
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 3;
    background-image:
      linear-gradient(to bottom, #d0d0d0, #d0d0d0, transparent, transparent),
      linear-gradient(to top, #d0d0d0, #d0d0d0, transparent, transparent);
    background-position: top, bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
  }

  .dp-container {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 10000;
    background-color: #eee;
    display: none;
    transition: transform 0.3s ease;
    transform: translateY(100%);
  }

  .dp-mask {
    z-index: 998;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    opacity: 0;
    transition: opacity 0.1s ease;
    background-color: #000;
    z-index: 9999;
  }

  .dp-header {
    display: flex;
    width: 100%;
    box-align: center;
    align-items: center;
    background-image: linear-gradient(to bottom, #e7e7e7, #e7e7e7, transparent, transparent);
    background-position: bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
  }

  .dp-header .dp-item {
    color: @datetime-header-item-font-color;
    font-size: .26rem;
    height: .68rem;
    line-height: .68rem;
    cursor: pointer;
  }

  .dp-header .dp-item.dp-left {
    color: @datetime-header-item-cancel-font-color;
  }

  .dp-header .dp-item.dp-right {
    color: @datetime-header-item-confirm-font-color;
  }

  .dp-content {
    display: flex;
    width: 100%;
    box-align: center;
    align-items: center;
  }

  .dp-header .dp-item,
  .dp-content .dp-item {
    box-sizing: border-box;
    flex: 1;
    text-align: center;
  }

  .m-datetime .m-input-icon {
    float: right;
  }
  .m-cell-primary {
    flex: 1;
  }

  @media screen and (min-width:320px) {
    .scroller-component{ height: 175px;}
    .scroller-item {
      height: 25px;
      line-height: 25px;
    }
    .scroller-mask{ background-size: 100% 75px;}
    .scroller-indicator{ height: 25px; top: 75px;}
  }

  @media screen and (min-width:360px) {
    .scroller-component{ height: 182px;}
    .scroller-item {
      height: 26px;
      line-height: 26px;
    }
    .scroller-mask{ background-size: 100% 78px;}
    .scroller-indicator{ height: 26px; top: 78px;}
  }

  @media screen and (min-width:375px) {
    .scroller-component{ height: 203px;}
    .scroller-item {
      height: 29px;
      line-height: 29px;
    }
    .scroller-mask{ background-size: 100% 87px;}
    .scroller-indicator{ height: 29px; top: 87px;}
  }

  @media screen and (min-width:414px) {
    .scroller-component{ height: 238px;}
    .scroller-item {
      height: 34px;
      line-height: 34px;
    }
    .scroller-mask{ background-size: 100% 102px;}
    .scroller-indicator{ height: 34px; top: 102px;}
  }

  @media screen and (min-width:480px) {
    .scroller-component{ height: 273px;}
    .scroller-item {
      height: 39px;
      line-height: 39px;
    }
    .scroller-mask{ background-size: 100% 117px;}
    .scroller-indicator{ height: 39px; top: 117px;}
  }
</style>
