<template>
  <div>
    <load-more tip="正在加载"></load-more>
    <load-more :show-loading="false" tip="暂无数据" background-color="#fbf9fe"></load-more>
    <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
    
    <group>
      <cell title="Toggle" @click.native="show1=true" @on-change="show1change" is-link></cell>
    </group>
    <loading v-model="show1" :text="text1"></loading>
    <div style="padding: 15px;">
      <m-button @click.native="showLoading" type="primary">显示loading(2s后关闭)</m-button>
    </div>
  
  </div>
</template>


<script>
  import LoadMore from '../components/load-more/index.vue';
  import Loading from '../components/loading/index.vue';
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';
  import MButton from '../components/m-button/index.vue';

  export default {
    components: {
      LoadMore,
      Loading,
      Group,
      Cell,
      MButton
    },
    data () {
      return {
        show1: false,
        text1: 'Processing'
      };
    },
    methods: {
      showLoading () {
        this.$m.loading.show({
          text: 'Loading'
        });
        setTimeout(() => {
          this.$m.loading.hide();
        }, 2000);
      },
      show1change (val) {
        if (val) {
          tick(0, (percent) => {
            if (percent === 100) {
              this.show1 = false;
              this.text1 = 'Start processing';
              return;
            }
            this.text1 = `${percent}%`;
          });
        }
      }
    }
  };

  function tick (i, cb) {
    setTimeout(function () {
      i++;
      cb(i);
      if (i < 100) {
        tick(i, cb);
      }
    }, 50);
  }
</script>
