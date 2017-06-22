<template>
  <div>
    <group>
      <cell title="显示" @click.native="show=true" is-link></cell>
    </group>
    <loading v-model="show" :text="text"></loading>
    <div style="padding: 15px;">
      <m-button @click.native="showLoading" type="primary">显示loading(2s后关闭)</m-button>
    </div>
  </div>
</template>


<script>
  import Loading from '../components/loading/index.vue';
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';
  import MButton from '../components/m-button/index.vue';

  export default {
    components: {
      Loading,
      Group,
      Cell,
      MButton
    },
    data () {
      return {
        show: false,
        text: 'Processing'
      };
    },
    watch: {
      show (val) {
        if (val) {
          tick(0, (percent) => {
            if (percent === 100) {
              this.show = false;
              this.text = 'Start processing';
              return;
            }
            this.text = `${percent}%`;
          });
        }
      }
    },
    methods: {
      showLoading () {
        this.$mue.loading.show({
          text: 'Loading'
        });
        setTimeout(() => {
          this.$mue.loading.hide();
        }, 2000);
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
