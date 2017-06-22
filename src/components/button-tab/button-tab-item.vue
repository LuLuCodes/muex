<template>
  <a class="m-button-tab-item" :class="classes" href="javascript:" :style="style" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from '../../mixins/multi-items';

export default {
  mixins: [childMixin],
  computed: {
    classes () {
      return {
        'm-button-group-current': this.currentIndex === this.$parent.currentIndex,
        'no-border-right': this.shouldRemoveBorder
      };
    },
    style () {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        };
      }
    }
  },
  data () {
    return {
      shouldRemoveBorder: false
    };
  }
};
</script>
