<template>
  <div>
    <div style="padding: .24rem;">
      <button-tab>
        <button-tab-item>Today</button-tab-item>
        <button-tab-item selected>This Week</button-tab-item>
        <button-tab-item>This Month</button-tab-item>
      </button-tab>
      <br>
      <button-tab>
        <button-tab-item selected>Articles</button-tab-item>
        <button-tab-item>Products</button-tab-item>
      </button-tab>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item @on-item-click="consoleIndex()">Articles</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">Products</button-tab-item>
      </button-tab>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item>Articles sync</button-tab-item>
        <button-tab-item>Products sync</button-tab-item>
      </button-tab>
      <br>
      <divider>Red Dot</divider>
      <button-tab>
        <button-tab-item selected>All Messages</button-tab-item>
        <button-tab-item><span class="m-reddot-s">New Messages</span></button-tab-item>
      </button-tab>
    </div>
  </div>
</template>


<script>
  import Divider from '../components/divider/index';
  import ButtonTab from '../components/button-tab/button-tab.vue';
  import ButtonTabItem from '../components/button-tab/button-tab-item.vue';

  export default {
    components: {
      ButtonTab,
      ButtonTabItem,
      Divider
    },
    methods: {
      consoleIndex () {
        console.log('click demo01', this.demo01);
      }
    },
    data () {
      return {
        demo01: 0
      };
    }
  };
</script>
