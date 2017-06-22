<template>
  <div>
    <m-header>This is the page title.</m-header>
    <br>
    <m-header :left-options="{showBack: false}">do not show Back</m-header>
    <br>
    <m-header :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">do not show Back Text</m-header>
    <br>
    <m-header :left-options="{showBack: true,backText:'上一页'}">show Back Text</m-header>
    <br>
    <m-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</m-header>
    <br>
    <m-header>with right link<a slot="right" href="http://www.baidu.com">BaiDu</a></m-header>
    <br>
    <m-header>long long long long long long long text<a slot="right" href="http://www.baidu.com">BaiDu</a></m-header>
    <br>
    <m-header>with left slot<a slot="left">Close</a> </m-header>
    <br>
    <m-header @on-click-title="clickTitle">click title.</m-header>
    <br>
    <m-header style="background-color: #333;" :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">custom background color</m-header>
    <br>
    <m-header class="my-header" :left-options="{showBack: true,backText:''}" :right-options="{showMore: true}">custom CSS</m-header>
    <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    <toast v-model="showTitle" type="text" text="This is Title"></toast>
  </div>
</template>

<script>
  import MHeader from '../components/m-header/index.vue';
  import Actionsheet from '../components/actionsheet/index.vue';
  import Toast from '../components/toast/index.vue';

  export default {
    components: {
      MHeader,
      Actionsheet,
      Toast
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false,
        showTitle: false
      };
    },
    methods: {
      clickTitle () {
        this.showTitle = true;
      }
    }
  };
</script>

<style>
  .my-header.mue-header{ background-color: #fff;}
  .my-header.mue-header .mue-header-title, .my-header.mue-header h1,
  .my-header.mue-header .mue-header-left a,
  .my-header.mue-header .mue-header-left button,
  .my-header.mue-header .mue-header-right a,
  .my-header.mue-header .mue-header-right button{ color: #333;}
  .my-header.mue-header .mue-header-right a{ color: #f43530;}
  .my-header.mue-header .mue-header-left .left-arrow:before{ border-color: #f43530;}
</style>
