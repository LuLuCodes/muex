<template>
  <span class="m-spinner" :class="className"></span>
</template>

<script>
import Spinner from './spinner';
const types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral'];

export default {
  mounted () {
    this.$nextTick(() => {
      Spinner(this.$el, this.type);
    });
  },
  props: {
    type: {
      type: String,
      default: 'ios'
    }
  },
  computed: {
    className () {
      let rs = {};
      for (let i = 0; i < types.length; i++) {
        rs[`m-spinner-${types[i]}`] = this.type === types[i];
      }
      return rs;
    }
  }
};
</script>

<style>
.m-spinner {
  stroke: #444;
  fill: #444;
  vertical-align: middle;
  display: inline-block;
  width: 28px;
  height: 28px;
}

.m-spinner svg {
  width: 28px;
  height: 28px;
}

.m-spinner.m-spinner-inverse {
  stroke: #fff;
  fill: #fff;
}

.m-spinner-android {
  stroke: #4b8bf4;
}

.m-spinner-ios, .m-spinner-ios-small {
  stroke: #69717d;
}

.m-spinner-spiral .stop1 {
  stop-color: #fff;
  stop-opacity: 0;
}

.m-spinner-spiral.m-spinner-inverse .stop1 {
  stop-color: #000;
}

.m-spinner-spiral.m-spinner-inverse .stop2 {
  stop-color: #fff;
}
</style>
