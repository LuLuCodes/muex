<template>
  <div class="m-h100">
    <ul class="m-goods-list m-goods-list-type2">
      <li  :class="item.outStore? 'm-goods-list-outStore': ''"  v-for="item in list">
        <a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >
          <div class="m-goods_img m-img-auto">
            <span class="m-goods_img-tag" v-if="item.outStore"></span>
            <img class="m-goods_img-big"  :src="item.src" alt="">
            <p class="m-goods_img-tips m-22-text" v-if="item.outStore">已售罄</p>
          </div>
          <div class="m-goods_info">
            <div class="m-goods-h3">
              <h3 class="m-ellipsis-2l m-20-text">{{item.title}}</h3>
            </div>
            <div class="m-goods_info-price">
              <p class="m-22-text m-pull-left m-orange-text">{{item.price}}</p>
              <p class="m-18-text m-pull-right m-gray-text m-line-cross">{{item.oldPrice}}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>


<script>
  import imgSrc from '../assets/images/goods.png';
  import { go, getUrl } from '../libs/router';

  export default {
    components: {
      imgSrc
    },
    data () {
      return {
        list: [{
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标题产品标产品标题产品标题产品标题',
          price: '¥48.0',
          oldPrice: '￥139.0',
          url: '/component/cell',
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标标题产',
          price: '¥8.2',
          oldPrice: '￥160.0',
          url: {
            path: '/component/radio',
            replace: false
          },
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
          title: '产品标题产品标题产',
          price: '¥5.2',
          oldPrice: '￥10.9',
          url: '/component/cell',
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
</style>
