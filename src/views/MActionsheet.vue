<template>
  <div>
    <group>
      <cell title="基础用法" @click.native="show1=true" is-link></cell>
      <cell title="显示取消菜单" @click.native="show2=true" is-link></cell>
      <cell title="显示提示文字" @click.native="show3=true" is-link></cell>
      <cell title="使用数组定义菜单" @click.native="show5=true" is-link></cell>
    </group>
    
    <group title="点击遮罩区域不自动关闭">
      <cell title="基础用法" @click.native="show4=true" is-link></cell>
    </group>
    
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel
                 @on-click-menu-cancel="onCancel"></actionsheet>
    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete"
                 show-cancel></actionsheet>
    <actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" show-cancel></actionsheet>
    
    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click"></actionsheet>
    
    <toast v-model="showSuccess">'Deleted~'</toast>
  </div>
</template>
<script>
  import Actionsheet from '../components/actionsheet/index.vue';
  import Group from '../components/group/index.vue';
  import Toast from '../components/toast/index.vue';
  import Cell from '../components/cell/index.vue';

  export default {
    components: {
      Actionsheet,
      Group,
      Toast,
      Cell
    },
    mounted () {
      document.title = 'actionsheet';
      setTimeout(() => {
        document.title = 'actionsheet again';
      }, 5000);
    },
    data () {
      return {
        show1: false,
        menus1: {
          menu1: '分享给朋友',
          menu2: '分享到朋友圈'
        },
        show2: false,
        menus2: {
          menu1: '拍照',
          menu2: '从相册选取'
        },
        show3: false,
        show4: false,
        show5: false,
        menus5: [
          {
            label: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
            type: 'info'
          }, {
            label: 'Primary',
            type: 'primary',
            value: 'primary'
          }, {
            label: 'Warn',
            type: 'warn'
          }, {
            label: 'Disabled',
            type: 'disabled'
          }, {
            label: 'Default'
          }
        ],
        showSuccess: false,
        menus3: {
          'title.noop': 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
          delete: '<span style="color:red">Delete</span>'
        }
      };
    },
    methods: {
      click (key) {
        console.log(key);
      },
      onDelete () {
        this.showSuccess = true;
      },
      onCancel () {
        console.log('on cancel');
      }
    }
  };
</script>


<style>
  .popup0 {
    padding-bottom: 15px;
    height: 200px;
  }
  
  .popup1 {
    width: 100%;
    height: 100%;
  }
</style>
