<template>
  <div class="weui-tabbar">
    <slot></slot>
  </div>
</template>

<script>

import { parentMixin } from '../../mixins/multi-items';

export default {
  mixins: [parentMixin],
  props: {
    iconClass: String
  }
};
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_tab/m-tabbar.less';
@import '../../styles/reddot.less';

.weui-tabbar__icon {
  position: relative;
}
.weui-tabbar__icon > sup {
  position: absolute;
  top: 10%;
  left: 90%;
  transform: translateX(-50%);
  z-index: 102;
}
.weui-tabbar__item.m-tabbar-simple {
  padding: 0;
  height: .82rem;
  line-height: .82rem;
}
.m-tabbar-simple .weui-tabbar__label {
  font-size: .24rem;
  line-height: .82rem;
}
</style>
