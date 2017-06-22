<template>
  <div class="m-flexbox" :class="{'m-flex-col': orient === 'vertical', 'm-flex-row': orient === 'horizontal'}" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles () {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      };
      return styles;
    }
  }
};
</script>

<style lang="less">
.m-flexbox{
  width: 100%;
  text-align: left;
  display: flex;
  display: -webkit-flex;
  box-align: center;
  align-items: center;
}
.m-flexbox .m-flexbox-item {
  flex: 1;
  -webkit-flex: 1;
  min-width: 20px;
  width: 0%;
}
.m-flexbox-item > .m-flexbox {
  width: 100%;
}

.m-flexbox .m-flexbox-item:first-child{
  margin-left: 0!important;
  margin-top: 0!important;
}
.m-flex-col {
  box-orient: vertical;
  flex-direction: column;
}
.m-flex-col > .m-flexbox-item {
  width: 100%;
}
.m-flex-row {
  box-direction: row;
  box-orient: horizontal;
  flex-direction: row;
}
</style>
