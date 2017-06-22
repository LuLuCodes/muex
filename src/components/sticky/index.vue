<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import sticky from './sticky';

export default {
  mounted () {
    this.$nextTick(() => {
      sticky(this.$el, {
        scrollBox: this.scrollBox,
        offset: this.offset,
        checkStickySupport: typeof this.checkStickySupport === 'undefined' ? true : this.checkStickySupport
      });
    });
  },
  props: ['scrollBox', 'offset', 'checkStickySupport']
};
</script>

<style>
.m-sticky {
  width: 100%;
  position: sticky;
  top: 0;
}
.m-fixed {
  width: 100%;
  position: fixed;
  top: 0;
}
</style>
