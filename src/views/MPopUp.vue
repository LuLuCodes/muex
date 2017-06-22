<template>
  <div>
    <div style="padding:15px;">
      <m-button type="primary"  action-type="button"  @click.native="show=true" >默认PopUp</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show1=true" >全屏PopUp</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show2=true" >带滚动条PopUp</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show3=true" >多个PopUp</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show5=true" >点击遮罩不自动关闭</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show6=true" >透明背景</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show7=true" >左侧全屏Popup</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show8=true" >右侧Popup</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show9=true" >顶部Popup(无遮罩)</m-button>
      <m-button type="primary"  action-type="button"  @click.native="show10=true" >底部部Popup</m-button>
    </div>
    
    <popup v-model="show">
      <div class="popup0">
        <panel header="图文组合列表"  :list="list" :type="type"></panel>
        <div style="text-align: center; padding: .24rem"><a href="javascript:;" @click="show=false"><icon type="cancel" ></icon> 关闭</a> </div>
      </div>
    </popup>
  
    <popup v-model="show1" height="100%">
      <div class="popup1">
        <group>
          <cell>全屏PopUp</cell>
          <div style="text-align: center; padding: .24rem"><a href="javascript:;" @click="show1=false"><icon type="cancel" ></icon> 关闭</a> </div>
        </group>
      </div>
    </popup>
  
    <popup v-model="show2" height="200px" @on-first-show="resetScroller">
      <scroller height="100px" lock-x style="border:1px solid red;" ref="scroller">
        <div>
          <p v-for="i of 10">{{i}}</p>
        </div>
      </scroller>
    </popup>
  
    <popup v-model="show3">
      <div class="popup2">
        <cell title="显示" @click.native="show4=true;show3=false;" is-link>显示第二个popup</cell>
        this is the first popup
      </div>
    </popup>
  
    <popup v-model="show4">
      <div class="popup2">
        <cell title="显示" @click.native="show3=true;show4=false;" is-link>显示第一个popup</cell>
        this is the second popup
      </div>
    </popup>
  
    <popup v-model="show5" :hide-on-blur=false>
      <div class="popup2">
        <group>
          <cell>点击遮罩不自动关闭</cell>
          <div style="text-align: center; padding: .24rem"><a href="javascript:;" @click="show5=false"><icon type="cancel" ></icon> 关闭</a> </div>
        </group>
      </div>
    </popup>
  
    <popup v-model="show6" height="270px" is-transparent>
      <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
        <group>
          <cell title="Product" value="Donate"></cell>
          <cell title="Total" value="$10.24"></cell>
        </group>
      </div>
    </popup>
  
    <popup v-model="show7" position="left" width="100%">
      <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
        <group>
          <cell title="Product" value="Donate"></cell>
          <cell title="Total" value="$10.24"></cell>
        </group>
        <div style="text-align: center; padding: .24rem"><a href="javascript:;" @click="show7=false"><icon type="cancel" ></icon> 关闭</a> </div>
      </div>
    </popup>
  
    <popup v-model="show8" position="right" width="80%">
      <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
        <group>
          <cell title="Product" value="Donate"></cell>
          <cell title="Total" value="$10.24"></cell>
        </group>
        <div style="text-align: center; padding: .24rem"><a href="javascript:;" @click="show8=false"><icon type="cancel" ></icon> 关闭</a> </div>
      </div>
    </popup>
  
    <popup v-model="show9" position="top" :is-show-mask="false">
      <div class="position-vertical-demo">
        I'm on top. Hide in 1s.
      </div>
    </popup>
    <popup v-model="show10" position="bottom">
      <div class="position-vertical-demo">
        I'm on bottom.  Hide in 1s.
      </div>
    </popup>
  </div>
</template>

<script>
  import Icon from '../components/icon/index.vue';
  import MButton from '../components/m-button/index.vue';
  import Popup from '../components/popup/index.vue';
  import Panel from '../components/panel/index.vue';
  import Cell from '../components/cell/index.vue';
  import Group from '../components/group/index.vue';
  import Scroller from '../components/scroller/index.vue';

  export default {
    components: {
      MButton,
      Popup,
      Icon,
      Panel,
      Cell,
      Group,
      Scroller
    },
    data () {
      return {
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        show10: false,
        type: '2',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          }
        }]
      };
    },
    methods: {
      resetScroller () {
        this.$nextTick(() => {
          this.$refs.scroller.reset();
        });
      }
    },
    watch: {
      show9 (val) {
        if (val) {
          setTimeout(() => {
            this.show9 = false;
          }, 1000);
        }
      },
      show10 (val) {
        if (val) {
          setTimeout(() => {
            this.show10 = false;
          }, 1000);
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .popup0 {
    padding-bottom:15px;
    height:100%;
  }
  .popup1 {
    width:100%;
    height:100%;
  }
  .popup2 {
    padding-bottom:15px;
    height:400px;
  }
  .position-vertical-demo {
    background-color: #ffe26d;
    color: #000;
    text-align: center;
    padding: 15px;
  }
  .position-horizontal-demo {
    position: relative;
    height: 100%;
  }
</style>
