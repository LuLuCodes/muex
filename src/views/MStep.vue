<template>
  <div class="my-wrapper">
    <br>
    <div>
      <step v-model="step1" background-color='#efeff4'>
        <step-item title="step 1" description="start"></step-item>
        <step-item title="step 2" description="next"></step-item>
        <step-item title="step 3" description="done"></step-item>
      </step>
    </div>
    <hr>
    <div>
      <step v-model="step2" background-color='#efeff4' gutter="20px">
        <step-item title="done"></step-item>
        <step-item title="going"></step-item>
        <step-item title="end"></step-item>
      </step>
      <div class="btn_wrap">
        <m-button type="primary" @click.native="nextStep"> next step </m-button>
      </div>
    </div>
  </div>
</template>


<script>
  import Step from '../components/step/step.vue';
  import StepItem from '../components/step/step-item.vue';
  import MButton from '../components/m-button/index';

  export default {
    components: {
      Step,
      StepItem,
      MButton
    },
    data () {
      return {
        step1: 1,
        step2: 0
      };
    },
    methods: {
      nextStep () {
        this.step2 ++;
      }
    }
  };
</script>

<style lang="less">
  .btn_wrap {
    margin-top: .6rem;
  }
  .my-wrapper{ padding: .24rem;}
  .my-wrapper hr{ margin: .4rem 0; height: 1px; border: none; border-top:1px solid #ccc; }
</style>
