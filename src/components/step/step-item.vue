<template>
<div class="m-step-item" :class=" { 'm-step-item-with-tail' : !currentStepLast} ">
  <div :class="'m-step-item-tail ' + 'm-step-item-tail-' + currentStatus" v-show="!currentStepLast" :style="{right: $parent.gutter}"></div>
  <div :class="'m-step-item-head ' + 'm-step-item-head-' + currentStatus">
    <div class="m-step-item-head-inner">
      <span v-if="!icon && currentStatus!='finish'" class="m-step-item-icon">{{currentStepNumber}}</span>
      <span v-else :class="'m-step-item-icon ' + 'm-step-item-' + iconName">
        <icon type="success_no_circle" class="m-step-item-checked"></icon>
      </span>
    </div>
  </div>
  <div :class="'m-step-item-main ' + 'm-step-item-main-' + currentStatus" :style="{backgroundColor: $parent.backgroundColor, paddingRight: currentStepLast ? 0 : $parent.gutter}">
    <span class="m-step-item-title">{{title}}</span>
    <div class="m-step-item-description">{{description}}</div>
  </div>
</div>
</template>

<script>
import Icon from '../icon/index.vue';

export default {
  props: {
    title: String,
    description: String,
    stepNumber: Number,
    stepLast: Boolean,
    icon: String,
    status: String,
    tailWidth: Object
  },
  computed: {
    iconName () {
      return this.icon || 'check';
    }
  },
  created () {
    this.currentStatus = this.status;
    this.currentStepLast = this.stepLast;
    this.currentStepNumber = this.stepNumber;
  },
  data () {
    return {
      currentStatus: '',
      currentStepLast: false,
      currentStepNumber: 0
    };
  },
  components: {
    Icon
  }
};
</script>
