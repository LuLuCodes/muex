<template>
  <div>
    <div class="weui-cells__title" v-if="title" :style="{color:titleColor}" v-html="title"></div>
    <div class="weui-cells" :class="{'m-no-group-title':!title}" :style="{marginTop: gutter}">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: String
  }
};
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_access.less';
@import '../../styles/weui/widget/weui_cell/weui_cell_global.less';

@import '../../styles/blank.less';

.m-no-group-title {
  margin-top:.26rem;
}
</style>
