<template>
  <div class="m-search-box" :class="{'m-search-fixed':isFixed}" :style="{top: isFixed ? top : '', position: fixPosition }">
    <div class="weui-search-bar" :class="{'weui-search-bar_focusing': !isCancel || currentValue || !label}">
      <form class="weui-search-bar__form" @submit.prevent="$emit('on-submit', value)">
        <div class="m-search-mask" @click="touch" v-show="!isFixed && autoFixed"></div>
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search" class="weui-search-bar__input" :id="`search_input_${uuid}`" :placeholder="placeholder" autocomplete="off" :required="required" v-model="currentValue" ref="input"
          @focus="onFocus"
          @blur="onBlur"/>
          <a href="javascript:" class="weui-icon-clear" @click="clear" v-show="currentValue"></a>
        </div>
        <label :for="`search_input_${uuid}`" class="weui-search-bar__label" v-show="!isFocus && !value" v-if="label">
          <i class="weui-icon-search"></i>
          <span>Search</span>
        </label>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancel" v-if="label">cancel</a>
      <a href="javascript:" class="weui-search-bar__cancel-btn" @click="submit" v-else>Search</a>
    </div>
    <div class="weui-cells m-search_show" v-show="isFixed">
      <slot></slot>
      <div class="weui-cell weui-cell_access" v-for="item in results" @click="handleResultClick(item)" v-on:touchmove.prevent>
        <div class="weui-cell__bd weui-cell_primary">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import uuidMixin from '../../mixins/uuid';

export default {
  mixins: [uuidMixin],
  props: {
    required: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    cancelText: String,
    value: {
      type: String,
      default: ''
    },
    results: {
      type: Array,
      default () {
        return [];
      }
    },
    autoFixed: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: '0px'
    },
    position: {
      type: String,
      default: 'fixed'
    },
    autoScrollToTop: Boolean,
    label: Boolean
  },
  created () {
    if (this.value) {
      this.currentValue = this.value;
    }
  },
  computed: {
    fixPosition () {
      if (this.isFixed) {
        return this.position === 'absolute' ? 'absolute' : 'fixed';
      }
      return 'static';
    }
  },
  methods: {
    clear () {
      this.currentValue = '';
      this.isFocus = true;
      this.setFocus();
      if (this.autoFixed && !this.isFixed) {
        this.isFixed = true;
      }
    },
    cancel () {
      this.currentValue = '';
      this.isCancel = true;
      this.isFixed = false;
      this.$emit('on-cancel');
    },
    handleResultClick (item) {
      this.$emit('result-click', item); // just for compatibility
      this.$emit('on-result-click', item);
      this.isCancel = true;
      this.isFixed = false;
    },
    touch () {
      this.isCancel = false;
      if (this.autoFixed) {
        this.isFixed = true;
      }
      this.$emit('on-touch');
    },
    setFocus () {
      this.$refs.input.focus();
    },
    onFocus () {
      this.isFocus = true;
      this.touch();
    },
    onBlur () {
      this.isFocus = false;
    },
    submit (item) {
      this.$emit('on-result-click', item);
    }
  },
  data () {
    return {
      currentValue: '',
      isCancel: true,
      isFocus: false,
      isFixed: false
    };
  },
  watch: {
    isFixed (val) {
      if (val === true) {
        this.setFocus();
        this.isFocus = true;

        if (this.autoScrollToTop) {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 150);
        }
      } else {}
    },
    value (val) {
      this.currentValue = val;
    },
    currentValue (val) {
      this.$emit('on-change', val);
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="less">
@import '../../styles/weui/icon/weui_icon_font.less';
@import '../../styles/weui/widget/weui_searchbar/weui_searchbar.less';
@import '../../styles/weui/widget/weui_cell/weui_cell_global.less';
@import '../../styles/weui/widget/weui_cell/weui_access.less';

.m-search-fixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(5px);
}
.m-search-box {
  width: 100%;
}
.weui-cells.m-search_show {
  margin-top: 0!important;
  overflow-y: auto;
}
.m-search-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
  height: 100%;
  z-index: 5;
}
</style>
