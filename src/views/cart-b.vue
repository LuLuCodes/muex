<template>
  <div class="m-h100 m-pad-b78">

    <ul class="m-cart m-cart-type1">
      <li class="m-1px-b">
        <div class="m-cart_check m-pull-left">
          <input class="magic-checkbox" checked type="checkbox" name="layout" id="1">
          <label for="1"></label>
        </div>
        <p class="m-cart_img m-pull-left">
          <img src="../assets/images/goods.png" alt="">
        </p>

        <div class="m-cart_info m-pull-right">
          <div class="m-cart_info_head">
            <h3 class="m-ellipsis-2l m-25-text m-pull-left">产品标题产品标题产品标题产品标产品标题产品标题产品标题产品标</h3>
          </div>
          <div class="m-cart_spec">
            <p class="m-ellipsis m-18-text m-gray-text">产品规格产品规格产品规格产品规格产品规格产品规格</p>
            <div class="m-clearfix">
              <strong class="m-pull-left m-red-text">￥18.00</strong>

              <div class="m-cart_info_bottom m-pull-right">
                 <m-number name="Quantity" title=""></m-number>
              </div>
            </div>
          </div>

          <div class="m-cart_spec">
            <p class="m-ellipsis m-18-text m-gray-text">产品规格</p>
            <div class="m-clearfix">
              <strong class="m-pull-left m-red-text">￥28.00</strong>

              <div class="m-cart_info_bottom m-pull-right">
                <m-number name="Quantity" title=""></m-number>
              </div>
            </div>
          </div>



        </div>

      </li>
      <li class="m-1px-b">
        <div class="m-cart_check m-pull-left">
          <input class="magic-checkbox"  type="checkbox" name="layout" id="2">
          <label for="2"></label>
        </div>
        <p class="m-cart_img m-pull-left">
          <img src="../assets/images/goods.png" alt="">
        </p>

        <div class="m-cart_info m-pull-right">
          <div class="m-cart_info_head">
            <h3 class="m-ellipsis-2l m-25-text m-pull-left">产品标题产品</h3>
          </div>

          <div class="m-cart_spec">
            <p class="m-ellipsis m-18-text m-gray-text">产品规格</p>
            <div class="m-clearfix">
              <strong class="m-pull-left m-red-text">￥28.00</strong>

              <div class="m-cart_info_bottom m-pull-right">
                <m-number name="Quantity" title=""></m-number>
              </div>
            </div>
          </div>

          <div class="m-cart_spec">
            <p class="m-ellipsis m-18-text m-gray-text">产品规格</p>
            <div class="m-clearfix">
              <strong class="m-pull-left m-red-text">￥28.00</strong>

              <div class="m-cart_info_bottom m-pull-right">
                <m-number name="Quantity" title=""></m-number>
              </div>
            </div>
          </div>

        </div>

      </li>
      <li class="m-1px-b m-cart-out-store">
        <div class="m-cart_check m-pull-left">
          <input class="magic-checkbox" disabled  type="checkbox" name="layout" id="3">
          <label for="3"></label>
        </div>
        <p class="m-cart_img m-pull-left">
          <img src="../assets/images/goods.png" alt="">
          <span class="m-cart_tips m-18-text">商品已下架</span>
        </p>

        <div class="m-cart_info m-pull-right">
          <div class="m-cart_info_head">
            <h3 class="m-ellipsis-2l m-25-text m-pull-left">产品标题产品产品标题产品产品标题产品产品标题产品产品标题产品</h3>
          </div>
          <div class="m-cart_spec">
            <p class="m-ellipsis m-18-text m-gray-text">产品规格</p>
            <div class="m-clearfix">
              <strong class="m-pull-left m-red-text">￥28.00</strong>

              <div class="m-cart_info_bottom m-pull-right">
                <p class="m-color-text m-18-text m-right-text">商品已下架</p>
              </div>
            </div>
          </div>
        </div>

      </li>



    </ul>

    <nav class="m-bar m-bar_footer m-1px-t">
      <div class="m-bar_check m-pull-left">
        <input class="magic-checkbox" checked type="checkbox" name="layout" id="8">
        <label for="8">全选</label>
      </div>
      <a href="" class="m-pull-left">删除</a>
      <div class="m-pull-right">
        <a href="#" class="m-26-text">去下单</a>
      </div>
      <div class="m-pull-right m-right-text">
        合计 :
        <span class="m-red-text">¥4000.00</span><br>
        <span class="m-gray-text">不含运费</span>
      </div>
    </nav>

  </div>
</template>


<script>
  import MNumber from '../components/m-number/index.vue';

  export default {
    components: {
      MNumber
    },
    data () {
      return {

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
