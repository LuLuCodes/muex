<template>
  <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
    <p v-for="i in 100">{{i}}</p>
  </view-box>
</template>

<style></style>

<script>
  import ViewBox from '../components/view-box/index.vue';
  export default {
    data () {
      return {};
    },
    components: {
      ViewBox
    }
  };
</script>