<template>
  <div class="m-h100">
      <ul class="m-goods-list m-goods-list-type1">
        <li class="m-1px-b" :class="item.outStore? 'm-goods-list-outStore': ''"  v-for="item in list">
          <a :href="getUrl(item.url)"  @click.prevent="onItemClick(item)" >
            <div class="m-goods_img m-img-auto m-pull-left">
              <span class="m-goods_img-tag" v-if="item.outStore"></span>
              <img class="m-goods_img-big"  :src="item.src" alt="">
              <p class="m-goods_img-tips m-22-text" v-if="item.outStore">已售罄</p>
            </div>
            <div class="m-goods_info m-pull-right">
              <h3 class="m-ellipsis-2l m-25-text">{{item.title}}</h3>
              <p class="m-ellipsis m-22-text m-gray-text">{{item.desc}}</p>
              <p class="m-26-text m-orange-text">{{item.price}}</p>
              <p class="m-22-text m-gray-text m-line-cross">{{item.oldPrice}}</p>
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
          desc: '产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述',
          price: '¥25.99～¥200',
          oldPrice: '￥160.00',
          url: '/component/cell',
          outStore: true
        }, {
          src: imgSrc,
          title: '产品标题产品标题产品标题产品标题产品标标题产',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          price: '¥25.99～¥200',
          oldPrice: '￥160.00',
          url: {
            path: '/component/radio',
            replace: false
          },
          outStore: false
        }, {
          src: imgSrc,
          title: '产品标题产品标题产',
          desc: '产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述',
          price: '¥25.99～¥200',
          oldPrice: '￥160.00',
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
