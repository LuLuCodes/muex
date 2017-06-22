<template>
  <div class="m-h100">
    <tab :line-width="1" custom-bar-width="60px" v-model="index">
      <tab-item selected>全部订单</tab-item>
      <tab-item>待付款</tab-item>
      <tab-item>待发货</tab-item>
      <tab-item>已发货</tab-item>
      <tab-item>已完成</tab-item>
    </tab>

    <ul class="m-book-list" v-show="this.index==0">
      <li>
        <div class="m-pad-24-b m-1px-b">
            <span class="">下单日期 : 2015-07-09</span>
            <span class="m-pull-right m-red-text">状态</span>
        </div>
        <flexbox :gutter="0">
          <flexbox-item :span="1/4">
            <img src="../assets/images/goods.png" alt="">
          </flexbox-item>
          <flexbox-item :span="1/4">
            <img src="../assets/images/goods.png" alt="">
          </flexbox-item>
          <flexbox-item :span="1/4"><img src="../assets/images/goods.png" alt=""></flexbox-item>
          <flexbox-item :span="1/8"><p class="m-center-text">...</p></flexbox-item>
          <flexbox-item><p class="m-right-text"><span class="icon icon-mright m-36-text m-gray-text"></span></p></flexbox-item>
        </flexbox>
        <div class="m-pad-24-b m-1px-t m-book-list_footer">
           <span class="m-22-text m-pull-left">共3件商品，合计 : ￥285.00</span>
          <div class="m-pull-right">
            <m-button mini>按钮</m-button>
            <m-button mini type="primary">按钮</m-button>
          </div>
        </div>
      </li>

      <li>
        <div class="m-pad-24-b m-1px-b">
          <span class="">下单日期 : 2015-07-09</span>
          <span class="m-pull-right m-red-text">状态</span>
        </div>
        <flexbox :gutter="0">
          <flexbox-item :span="1/4">
            <img src="../assets/images/goods.png" alt="">
          </flexbox-item>
          <flexbox-item :span="1/4">
            <img src="../assets/images/goods.png" alt="">
          </flexbox-item>
          <flexbox-item :span="1/4"></flexbox-item>
          <flexbox-item :span="1/8"></flexbox-item>
          <flexbox-item><p class="m-right-text"><span class="icon icon-mright m-36-text m-gray-text"></span></p></flexbox-item>
        </flexbox>
        <div class="m-pad-24-b m-1px-t m-book-list_footer">
          <span class="m-22-text m-pull-left">共3件商品，合计 : ￥285.00</span>
          <div class="m-pull-right">

          </div>
        </div>
      </li>

    </ul>
    <div v-show="this.index==1">222</div>
    <div v-show="this.index==2">333</div>
    <div v-show="this.index==3">444</div>
    <div v-show="this.index==4">555</div>

  </div>

</template>


<script>
  import Tab from '../components/tab/tab.vue';
  import TabItem from '../components/tab/tab-item.vue';
  import Flexbox from '../components/flexbox/flexbox';
  import FlexboxItem from '../components/flexbox/flexbox-item';
  import MButton from '../components/m-button/index.vue';

  export default {
    components: {
      Tab,
      TabItem,
      Flexbox,
      FlexboxItem,
      MButton
    },
    data () {
      return {
        index: 0
      };
    },
    watch: {

    },
    methods: {

    }
  };
</script>

<style lang="less">
  @import '../assets/common.less';
  @import '../styles/1px.less';
</style>
