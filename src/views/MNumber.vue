<template>
  <div>
    <group title="Default">
      <m-number name="Quantity" title="Quantity"></m-number>
    </group>

    <group title="listen">
      <m-number title="Quantity" :value="0" :min="0" @on-change="change"></m-number>
    </group>

    <group title="set width=100px">
      <m-number title="Quantity" width="100px"></m-number>
    </group>

    <group title="round style">
      <m-number title="Quantity" v-model="roundValue" button-style="round" :min="0" :max="5"></m-number>
    </group>

    <group title="set step=0.5">
      <m-number title="Quantity" :step="0.5"></m-number>
    </group>

    <group title="set value=1, min=-5 and max=8">
      <m-number title="Quantity" :min="-5" :max="8" :value="1"></m-number>
    </group>

    <group title="fillable = true">
      <m-number :value="10" title="Quantity" fillable></m-number>
    </group>

    <group title="use with other group elements">
      <m-number title="Quantity" :min="-5" :max="8" :value="1" type="inline"></m-number>
      <m-number title="Quantity" :min="-5" :max="8" :value="1" type="inline"></m-number>
    </group>
  </div>
</template>


<script>
  import Group from '../components/group/index.vue';
  import MNumber from '../components/m-number/index.vue';
  export default {
    components: {
      MNumber,
      Group
    },
    data () {
      return {
        roundValue: 0
      };
    },
    methods: {
      change (val) {
        console.log('change', val);
      }
    }
  };
</script>
