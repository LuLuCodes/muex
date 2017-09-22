<template>
  <div>
    <group title="Basic Usage">
      <m-switch title="default false"></m-switch>
      <m-switch title="default true" :inline-desc="value1 + ''" v-model="value1"></m-switch>
    </group>
    <group title="disabled">
      <m-switch title="default false" disabled></m-switch>
      <m-switch title="default true" :value="true" disabled></m-switch>
    </group>
    <group title="prevent default">
      <m-switch title="default false" prevent-default v-model="value2" @on-click="onClick"></m-switch>
    </group>
    <group title="html title">
      <m-switch disabled title="switch red"></m-switch>
    </group>
  </div>
</template>


<script>
import MSwitch from '../components/m-switch/index.vue';
import Group from '../components/group/index.vue';

export default {
  components: {
    MSwitch,
    Group
  },
  methods: {
    onClick (newVal, oldVal) {
      console.log(newVal, oldVal);
      this.$mue.loading.show({
        text: 'in processing'
      });
      setTimeout(() => {
        this.$mue.loading.hide();
        this.value2 = newVal;
      }, 1000);
    }
  },
  data () {
    return {
      value1: true,
      value2: false
    };
  }
};
</script>
