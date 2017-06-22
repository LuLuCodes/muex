<template>
  <div class="m-group-tip" :style="{'text-align':align}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
};
</script>

<style>
.m-group-tip, .m-group-tip p {
  font-size:14px;
  color:#888;
  text-align:center;
  padding-top:0.3em;
  padding-left:10px;
  padding-right:5px;
}
.m-group-tip .weui-icon {
  padding-right: 3px;
}
</style>
