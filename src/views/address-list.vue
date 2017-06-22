<template>
  <div class="m-h100 m-pad-b78">

    <ul class="m-address-list">
      <li class="m-address-default">
          <div class="m-check m-pull-left">
            <input class="magic-checkbox" checked type="radio" name="layout" id="1">
            <label for="1"></label>
          </div>
          <div class="m-address-list_info m-pull-left">
             <div class="m-address-list_info-head m-clearfix">
                <h3 class="m-normal-weight m-26-text"><span>小王</span>  <span>13355556666</span></h3>
               <p>内蒙古自治区呼和浩特市呼伦贝尔市 莫力达瓦达斡尔族自治旗  墨西哥街1046号</p>
             </div>
          </div>
          <a href="javascript:;" class="m-pull-right m-22-text m-gray-text"><span class="icon icon-edit"></span>编辑</a>

          <span class="m-address_tag-default">默认</span>
      </li>

      <li >
        <div class="m-check m-pull-left">
          <input class="magic-checkbox"  type="radio" name="layout" id="2">
          <label for="2"></label>
        </div>
        <div class="m-address-list_info m-pull-left">
          <div class="m-address-list_info-head m-clearfix">
            <h3 class="m-normal-weight m-26-text"><span>小王</span>  <span>13355556666</span></h3>
            <p>内蒙古自治区呼和浩特市呼伦贝尔市 莫力达瓦达斡尔族自治旗  墨西哥街1046号</p>
          </div>
        </div>
        <a href="javascript:;" class="m-pull-right m-22-text m-gray-text"><span class="icon icon-edit"></span>编辑</a>

        <span class="m-address_tag-default">默认</span>
      </li>

      <li >
        <div class="m-check m-pull-left">
          <input class="magic-checkbox"  type="radio" name="layout" id="3">
          <label for="3"></label>
        </div>
        <div class="m-address-list_info m-pull-left">
          <div class="m-address-list_info-head m-clearfix">
            <h3 class="m-normal-weight m-26-text"><span>小王</span>  <span>13355556666</span></h3>
            <p>内蒙古自治区呼和浩特市呼伦贝尔市 莫力达瓦达斡尔族自治旗  墨西哥街1046号</p>
          </div>
        </div>
        <a href="javascript:;" class="m-pull-right m-22-text m-gray-text"><span class="icon icon-edit"></span>编辑</a>

        <span class="m-address_tag-default">默认</span>
      </li>


    </ul>

    <nav class="m-bar m-bar_footer">
      <a class="m-btn m-28-text" href="javascript:;" > 新增地址</a>
    </nav>

  </div>
</template>


<script>
  import MNumber from '../components/m-number/index.vue';

  export default {
    components: {
      MNumber
    },
    data () {
      return {

      };
    },
    watch: {

    },
    methods: {

    }
  };
</script>

<style lang="less">
  @import '../assets/common.less';
  @import '../styles/1px.less';
</style>
