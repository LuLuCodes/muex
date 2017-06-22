<template>
	<li class="m-timeline-item">
		<div :class="['m-timeline-item-color', {'m-timeline-item-head': !isFirst,'m-timeline-item-head-first': isFirst }]" :style="headStyle">
			<icon v-show="isFirst && $parent.isShowIcon" type="success_no_circle" class="m-timeline-item-checked"></icon>
		</div>
		<div class="m-timeline-item-tail" :style="tailStyle"></div>
		<div class="m-timeline-item-content">
			<slot></slot>
		</div>
	</li>
</template>

<script>
import Icon from '../icon/index.vue';

export default {
  data () {
    return {
      isLast: true,
      isFirst: true,
      headStyle: { backgroundColor: this.$parent.color }
    };
  },
  mounted () {
    this.$parent.setChildProps();
  },
  beforeDestroy () {
    // this will be null
    const $parent = this.$parent;
    this.$nextTick(() => {
      $parent.setChildProps();
    });
  },
  components: {
    Icon
  },
  computed: {
    tailStyle () {
      return this.isLast ? { display: 'none', backgroundColor: this.$parent.color } : { display: 'block', backgroundColor: this.$parent.color };
    }
  }
};
</script>

