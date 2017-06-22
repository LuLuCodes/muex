<template>
  <div>
    <tabbar >
      <tabbar-item selected >
        <i slot="icon"><icon type="waiting"></icon></i>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <i slot="icon"><icon type="waiting"></icon></i>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item link="/">
        <i slot="icon"><icon type="waiting"></icon></i>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <i slot="icon"><icon type="waiting"></icon></i>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from '../components/tabbar/tabbar.vue';
  import TabbarItem from '../components/tabbar/tabbar-item.vue';
  import Icon from '../components/icon/index.vue';

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Icon
    }
  };
</script>
<style>
  .weui-tabbar__icon .weui-icon{ font-size: inherit !important;}
</style>
