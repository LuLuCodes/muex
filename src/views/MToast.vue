<template>
  <div>
    <div style="padding:15px;">
      <m-button @click.native="showPosition('top')" type="primary">Top</m-button>
      <m-button @click.native="showPosition('middle')" type="primary">Middle</m-button>
      <m-button @click.native="showPosition('bottom')" type="primary">Bottom</m-button>
      <m-button @click.native="showPosition('')" type="primary">Default</m-button>
    </div>

    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">Basic Usage</toast>
    <group>
      <cell title="Basic Usage" @click.native="show1=true" is-link></cell>
      <cell title="type:text" @click.native="show2=true" is-link></cell>
      <cell title="type:cancel" @click.native="show3=true" is-link></cell>
      <cell title="type:warn" @click.native="show4=true" is-link></cell>
      <cell title="time:10s" @click.native="show5=true" is-link></cell>
      <cell title="long text" @click.native="show6=true" is-link></cell>
    </group>

    <toast v-model="show1" @on-hide="onHide">Basic Usage</toast>
    <toast v-model="show2" type="text">success</toast>
    <toast v-model="show3" type="cancel">type:cancel</toast>
    <toast v-model="show4" type="warn">type:warn</toast>
    <toast v-model="show5" :time="10000">time:10s</toast>
    <toast v-model="show6" width="4.2rem" type="long">文字提示，折行文字提示折行文字提示</toast>

    <group title="prop:text">
      <cell title="type:success" @click.native="show7=true" is-link></cell>
      <cell title="type:text" @click.native="show8=true" is-link></cell>
    </group>

    <toast v-model="show7" text="Hello World"></toast>
    <toast v-model="show8" type="text" text="Hello World"></toast>

    <group title="As a plugin">
      <cell title="default" @click.native="onChange" is-link></cell>
    </group>
  </div>
</template>

<script>
  import Toast from '../components/toast/index.vue';
  import Group from '../components/group/index.vue';
  import MButton from '../components/m-button/index.vue';
  import Cell from '../components/cell/index.vue';

  export default {
    components: {
      Toast,
      Group,
      MButton,
      Cell
    },
    methods: {
      showPosition (position) {
        this.position = position;
        this.showPositionValue = true;
      },
      onHide () {
        console.log('on hide');
      },
      onChange (val) {
        const _this = this;
        if (val) {
          this.$mue.toast.show({
            text: 'Hello World',
            onShow () {
              console.log('Plugin: I\'m showing');
            },
            onHide () {
              console.log('Plugin: I\'m hiding');
              _this.show9 = false;
            }
          });
        } else {
          this.$mue.toast.hide();
        }
      }
    },
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        position: 'default',
        showPositionValue: false
      };
    }
  };
</script>
