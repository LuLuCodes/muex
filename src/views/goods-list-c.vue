<template>
  <div class="m-h100">
    <ul class="m-goods-list m-goods-list-type3">
      <li  :class="item.outStore? 'm-goods-list-outStore': ''"  v-for="item in list">
        <div class="m-goods-list_box">
          <div class="m-goods_img m-img-auto">
            <a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >
              <span class="m-goods_img-tag" v-if="item.outStore"></span>
              <img class="m-goods_img-big"  :src="item.src" alt="">
              <p class="m-goods_img-tips m-22-text" v-if="item.outStore">已售罄</p>
            </a>
          </div>
          <div class="m-goods_info">
            <div class="m-goods-h3">
              <h3 class="m-ellipsis-2l m-26-text"><a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >{{item.title}}</a></h3>
            </div>
            <div class="m-goods_info-price">
              <p class="m-pull-left ">
                <span class="m-orange-text m-26-text "> {{item.price}}</span>
                <span class="m-22-text m-gray-text m-line-cross">{{item.oldPrice}}</span>
              </p>
              <p class="m-pull-right">
                <a @click="show=true" class="icon icon-cart"></a>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>

<!--    <popup v-model="show">
      <div class="m-goods_pop">
         <div class="m-goods_pop_head m-1px-b">
           <p class="m-goods_pop_img">
             <img src="../assets/images/goods.png" alt="">
           </p>
           <div class="m-goods_pop_info">
             <h3 class="m-26-text m-ellipsis-2l m-normal-weight">金龙鱼花生浓香食用调和油5L/桶限购10件</h3>
             <p>
               <span class="m-28-text m-orange-text">￥130.00</span>
               <span class="m-22-text m-gray-text m-line-cross">￥160.00</span>
             </p>
           </div>
           <a href="javascript:;" class="icon icon-close m-color-normal" @click="show=false"></a>
         </div>

       <div class="m-goods_pop_spec">
         <div class="m-goods_pop_spec_item m-pad-tb24 m-1px-b">
           <h3 class="m-26-text m-normal-weight">规格</h3>
           <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
             <checker-item value="1">瓶</checker-item>
             <checker-item value="2">箱</checker-item>
             <checker-item value="3">袋</checker-item>
           </checker>
         </div>
         <div class="m-goods_pop_spec_item m-pad-tb24">
           <m-number name="Quantity" title="购买数量"></m-number>
         </div>
       </div>


      </div>
      <a class="m-btn m-28-text" href="javascript:;" @click="show=false"> 加入购物车</a>
    </popup>-->

    <popup v-model="show">
      <div class="m-goods_pop">
        <div class="m-goods_pop_head m-1px-b">
          <p class="m-goods_pop_img">
            <img src="../assets/images/goods.png" alt="">
          </p>
          <div class="m-goods_pop_info">
            <h3 class="m-26-text m-ellipsis-2l m-normal-weight">金龙鱼花生浓香食用调和油5L/桶限购10件</h3>
            <p>
              <span class="m-28-text m-orange-text">￥25.99~￥200.00</span>
            </p>
          </div>
          <a href="javascript:;" class="icon icon-close m-color-normal" @click="show=false"></a>
        </div>

        <div class="m-goods_pop_spec_box">

          <flexbox :gutter="0" class="m-1px-b m-pad-tb24">
            <flexbox-item :span="1/12" >
              <div class="m-goods_pop_spec_check">
                <input class="magic-checkbox magic-checkbox-square" checked type="checkbox" name="layout" id="1">
                <label for="1"></label>
              </div>
            </flexbox-item>
            <flexbox-item :span="4/12">
              <p class="m-26-text m-goods_pop_spec-txt">规格参数规格参数规格参数规格参数规格参数</p>
            </flexbox-item>
            <flexbox-item :span="3/12" >
              <p class="m-orange-text m-center-text">¥25.99</p>
            </flexbox-item>
            <flexbox-item :span="4/12" >
              <div>
                <m-number name="Quantity" align="right" title=""></m-number>
                <p class="m-right-text m-gray-text m-22-text m-pad-t10">剩余数量：6</p>
              </div>
            </flexbox-item>
          </flexbox>

          <flexbox :gutter="0" class="m-1px-b m-pad-tb24">
            <flexbox-item :span="1/12" >
              <div class="m-goods_pop_spec_check">
                <input class="magic-checkbox magic-checkbox-square" checked type="checkbox" name="layout" id="2">
                <label for="2"></label>
              </div>
            </flexbox-item>
            <flexbox-item :span="4/12">
              <p class="m-26-text m-goods_pop_spec-txt">规格参数规格参数数</p>
            </flexbox-item>
            <flexbox-item :span="3/12" >
              <p class="m-orange-text m-center-text">¥25.99</p>
            </flexbox-item>
            <flexbox-item :span="4/12" >
              <div>
                <m-number name="Quantity" align="right" title=""></m-number>
                <p class="m-right-text m-gray-text m-22-text m-pad-t10">剩余数量：6</p>
              </div>
            </flexbox-item>
          </flexbox>


          <flexbox :gutter="0" class="m-1px-b m-pad-tb24">
            <flexbox-item :span="1/12" >
              <div class="m-goods_pop_spec_check">
                <input class="magic-checkbox magic-checkbox-square" checked type="checkbox" name="layout" id="3">
                <label for="3"></label>
              </div>
            </flexbox-item>
            <flexbox-item :span="4/12">
              <p class="m-26-text m-goods_pop_spec-txt">规格参数规格参数</p>
            </flexbox-item>
            <flexbox-item :span="3/12" >
              <p class="m-orange-text m-center-text">¥25.99</p>
            </flexbox-item>
            <flexbox-item :span="4/12" >
              <div>
                <m-number name="Quantity" align="right" title=""></m-number>
                <p class="m-right-text m-gray-text m-22-text m-pad-t10">剩余数量：12345</p>
              </div>
            </flexbox-item>
          </flexbox>




        </div>


      </div>
      <a class="m-btn m-28-text" href="javascript:;" @click="show=false"> 加入购物车</a>
    </popup>

  </div>

</template>


<script>
  import imgSrc from '../assets/images/goods.png';
  import { go, getUrl } from '../libs/router';
  import Popup from '../components/popup/index.vue';
  import Icon from '../components/icon/index.vue';
  import Checker from '../components/checker/checker.vue';
  import CheckerItem from '../components/checker/checker-item.vue';
  import MNumber from '../components/m-number/index.vue';
  import Flexbox from '../components/flexbox/flexbox';
  import FlexboxItem from '../components/flexbox/flexbox-item';

  export default {
    components: {
      imgSrc,
      Popup,
      Icon,
      Checker,
      CheckerItem,
      MNumber,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        show: false,
        demo1: '1',
        list: [{
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标产品标题产品标题产品标题',
          price: '¥48.0',
          oldPrice: '￥139.0',
          url: '',
          urlCart: '',
          outStore: true
        }, {
          src: imgSrc,
          title: '产品标题产品标',
          price: '¥15.2',
          oldPrice: '￥20.9',
          url: '/component/cell',
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标产品标题产品标题产品标题',
          price: '¥20.0',
          oldPrice: '￥19.0',
          url: '/component/cell',
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标标题产',
          price: '¥30.4',
          oldPrice: '￥10.0',
          url: {
            path: '/component/radio',
            replace: false
          },
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标标题产',
          price: '¥30.4',
          oldPrice: '￥10.0',
          url: {
            path: '/component/radio',
            replace: false
          },
          outStore: false
        }]
      };
    },
    watch: {

    },
    methods: {
      getUrl (url) {
        return getUrl(url, this.$router);
      },
      onItemClick (item) {
        this.$emit('on-click-item', item);
        go(item.url, this.$router);
      },
      onItemClickCart (item) {
        this.$emit('on-click-item', item);
        go(item.urlCart, this.$router);
      }
    }
  };
</script>

<style lang="less">
  @import '../assets/common.less';
  @import '../styles/1px.less';
  .demo1-item {
    padding: 0 .32rem;
    line-height: .58rem;
    border-radius: 6px;
    margin-right: .1rem;
    background: #f5f5f5;
  }
  .demo1-item-selected {
    background: #ffba00;
    color: #fff;
  }
</style>
