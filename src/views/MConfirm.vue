<template>
  <div>
    <confirm v-model="show" :title="title"
             @on-cancel="onCancel"
             @on-confirm="onConfirm"
             @on-show="onShow"
             @on-hide="onHide"
    >
      <p style="text-align:center;">确定要删除该商品?</p>
    </confirm>
    <br>
    <div style="padding:15px;">
      <m-button @click.native="show=true" type="primary">显示</m-button>
    </div>
    <div style="padding:15px;">
      <m-button @click.native="showPlugin" type="primary">插件方式调用</m-button>
    </div>
    <div style="padding:15px;">
      <m-button @click.native="showPlugin1" type="primary">点击遮罩隐藏</m-button>
    </div>
  </div>
</template>

<script>
  import Confirm from '../components/confirm/index.vue';
  import Group from '../components/group/index.vue';
  import MButton from '../components/m-button/index.vue';

  export default {
    components: {
      Confirm,
      Group,
      MButton
    },
    data () {
      return {
        show: false,
        title: '删除商品'
      };
    },
    methods: {
      onCancel () {
        console.log('on cancel');
      },
      onConfirm () {
        console.log('on confirm');
      },
      onHide () {
        console.log('on hide');
      },
      onShow () {
        console.log('on show');
      },
      showPlugin () {
        this.$mue.confirm.show({
          title: 'Title',
          content: 'Content',
          cancelText: 'Cancel',
          confirmText: 'OK',
          onShow () {
            console.log('plugin show');
          },
          onHide () {
            console.log('plugin hide');
          },
          onCancel () {
            console.log('plugin cancel');
          },
          onConfirm () {
            console.log('plugin confirm');
          }
        });
      },
      showPlugin1 () {
        this.$mue.confirm.show({
          title: 'Title',
          content: 'Content',
          hideOnBlur: true
        });
      }
    }
  };
</script>
