<template>
	<div class="m-timeline">
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
  props: {
    color: String,
    isShowIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    setChildProps () {
      if (!this.$children) return;
      const len = this.$children.length;
      this.$children.forEach((child, index) => {
        child.isLast = index === len - 1;
        child.isFirst = index === 0;
      });
    }
  }
};
</script>

<style lang="less">
@import '../../styles/variable.less';

.m-timeline {
  padding: .2rem;
}

.m-timeline > ul > li {
  list-style: none;
}

@m-timeline: ~"m-timeline";

.@{m-timeline} {
  &-item {
    position:relative;
  }

  &-item-content {
    padding:0 0 .5rem .7rem;
  }

  &-item-head, &-item-head-first {
    position:absolute;
    content:'';
    z-index:99;
    border-radius:100%;
  }

  &-item-head {
    width:.2rem;
    height:.2rem;
    left:.12rem;top:.1rem;
  }

  &-item-head-first {
    width:.4rem;
    height:.4rem;
  }

  &-item-tail {
    position:absolute;
    content:'';
    height:100%;
    width:2px;
    left:.2rem;
    top:.1rem;
    background-color: @timeline-item-bg-color;
  }

  &-item-checked {
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    top: 30%;
    transform: translateY(-50%);

    &.weui-icon-success-no-circle::before {
      font-size: .22rem;
      width: .2rem;
      color: #FFF;
    }
  }
}

.m-timeline-item-color {
	background-color: @timeline-item-bg-color;
}
</style>
