<template>
  <div>
    <alert v-model="show1"  :title="title" @on-show="onShow" @on-hide="onHide">
      <div>消息发送成功</div>
    </alert>
    <alert v-model="show2"  :title="title" :content="content" @on-show="onShow" @on-hide="onHide">
    </alert>
    <group>
      <cell title="显示" @click.native="show1=true" is-link></cell>
    </group>
    <group title="以prop:content方式调用">
      <cell title="显示" @click.native="show2=true" is-link></cell>
    </group>
    <group title="以插件方式调用">
      <cell title="3秒后自定关闭" @click.native="showPluginAuto" is-link></cell>
    </group>
  </div>
</template>

<script>
  import Alert from '../components/alert/index.vue';
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';

  export default {
    components: {
      Alert,
      Group,
      Cell
    },
    data () {
      return {
        show1: false,
        show2: false,
        title: '恭喜',
        content: '启用props content'
      };
    },
    methods: {
      onHide () {
        console.log('on hide');
      },
      onShow () {
        console.log('on show');
      },
      showPlugin () {
        this.$mue.alert.show({
          title: 'm is Cool',
          content: 'Do you agree?',
          buttonText: '确定！！！',
          onShow () {
            console.log('Plugin: I\'m showing');
          },
          onHide () {
            console.log('Plugin: I\'m hiding now');
          }
        });
      },
      showPluginAuto () {
        this.showPlugin();
        setTimeout(() => {
          this.$mue.alert.hide();
        }, 3000);
      }
    }
  };
</script>
