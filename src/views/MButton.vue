<template>
  <div class="my-wrapper">
    <divider>default</divider>

      <m-button>submit</m-button>
      <m-button type="primary">primary</m-button>
      <m-button type="warn">Delete</m-button>

      <divider>action type</divider>
      <m-button type="primary" action-type="button">submit</m-button>
      <m-button type="warn" action-type="reset">reset</m-button>

      <divider>loading</divider>
      <m-button type="default" show-loading>submit</m-button>
      <m-button type="primary" show-loading>submit</m-button>
      <m-button type="warn" show-loading>submit</m-button>

      <divider>mini</divider>
      <m-button mini>submit</m-button>
      <m-button mini type="primary">primary</m-button>
      <m-button mini type="warn">Delete</m-button>
      <br>
      <m-button mini plain>submit</m-button>
      <m-button mini plain type="primary">primary</m-button>
    <br>
    <m-button mini plain circle>submit</m-button>
    <m-button mini plain circle type="primary">primary</m-button>

      <divider>plain</divider>
      <m-button plain>submit</m-button>
      <m-button plain type="primary">primary</m-button>

      <divider>you can custom styles</divider>
      <m-button plain type="primary" style=" color: #333; border-radius: .4rem; border-color: #333;">primary</m-button>
      <m-button plain type="primary" style="border-color:#CE3C39;color:#CE3C39;">primary</m-button>

      <divider>Circle Type</divider>
      <m-button plain circle type="primary" >Circle</m-button>
      <m-button circle>Circle</m-button>

      <divider>disabled</divider>
      <m-button disabled>disable submit</m-button>
      <m-button type="primary" disabled>disable primary</m-button>
      <m-button type="warn" disabled>disable Delete</m-button>

      <divider>use :text and :disabled</divider>
      <m-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></m-button>

      <divider>combined with flexbox</divider>
      <flexbox>
        <flexbox-item>
          <m-button type="primary">primary</m-button>
        </flexbox-item>
        <flexbox-item>
          <m-button type="warn">Delete</m-button>
        </flexbox-item>
      </flexbox>
      <divider>combined with flexbox</divider>
      <flexbox>
        <flexbox-item>
          <m-button type="default">default</m-button>
        </flexbox-item>
        <flexbox-item>
          <m-button type="primary">primary</m-button>
        </flexbox-item>
        <flexbox-item>
          <m-button type="warn">Delete</m-button>
        </flexbox-item>
      </flexbox>


  </div>
</template>


<script>
  import MButton from '../components/m-button/index.vue';
  import Flexbox from '../components/flexbox/flexbox';
  import FlexboxItem from '../components/flexbox/flexbox-item';
  import Divider from '../components/divider/index';

  export default {
    components: {
      MButton,
      Flexbox,
      FlexboxItem,
      Divider
    },
    methods: {
      change (value) {
        console.log('change:', value);
      },
      processButton001 () {
        this.submit001 = 'processing';
        this.disable001 = true;
      }
    },
    data () {
      return {
        submit001: 'click me',
        disable001: false
      };
    }
  };
</script>


<style>
  .my-wrapper{ padding: .24rem; box-sizing: border-box;}
</style>
