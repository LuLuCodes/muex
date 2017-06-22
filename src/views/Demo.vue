<template>
  <div>
    <!--demo menu-->
    <router-link to="/Mbutton">Mbutton</router-link>
    <router-link to="/MFlexBox">MFlexBox</router-link>
    <router-link to="/MHeader">MHeader</router-link>
    <router-link to="/MTimeLine">MTimeLine</router-link>
    <router-link to="/MStep">MStep</router-link>
    <router-link to="/MTabBar">MTabBar</router-link>
    <router-link to="/MSearch">MSearch</router-link>
    <router-link to="/MTab">MTab</router-link>
    <router-link to="/MCellBox">MCellBox</router-link>
    <router-link to="/MCell">MCell</router-link>
    <router-link to="/MDateTime">MDateTime</router-link>
    <router-link to="/MButtonTab">MButtonTab</router-link>
    <router-link to="/MPanel">MPanel</router-link>
    <router-link to="/MPopUpPicker">MPicker</router-link>
    <router-link to="/MPopUp">MPopUp</router-link>
    <router-link to="/MInput">MInput</router-link>
    <router-link to="/MRadio">MRadio</router-link>
    <router-link to="/MChecklist">MChecklist</router-link>
    <router-link to="/MChecker">MChecker</router-link>
    <router-link to="/MNumber">MNumber</router-link>
    <router-link to="/MRater">MRater</router-link>
    <router-link to="/MMsg">MMsg</router-link>
    <router-link to="/MTextarea">MTextarea</router-link>
    <router-link to="/MAddress">MAddress</router-link>
    <router-link to="/MAlert">MAlert</router-link>
    <router-link to="/MConfirm">MConfirm</router-link>
    <router-link to="/MToast">MToast</router-link>
    <router-link to="/MActionsheet">MActionsheet</router-link>
    <router-link to="/MLoad">MLoad</router-link>
    <router-link to="/MScroller">MScroller</router-link>
    <router-link to="/ViewBox">ViewBox</router-link>
    <router-link to="/CellFormPreview">CellFormPreview</router-link>
    <router-link to="/FormPreview">FormPreview</router-link>
    <router-link to="/Badge">Badge</router-link>

    <div style="clear: both;">
      <divider>Frequently Used Pages</divider>
    </div>

    <div class="router-view">
      <router-link to="/login">Login</router-link>
      <router-link to="/resetPassword">Reset PSW</router-link>
      <router-link to="/goodsListA">Goods List(A)</router-link>
      <router-link to="/goodsListB">Goods List(B)</router-link>
      <router-link to="/goodsListC">Goods List(C)</router-link>
      <router-link to="/cartA">Cart(A)</router-link>
      <router-link to="/cartB">Cart(B)</router-link>
      <router-link to="/bookList">Book List</router-link>
      <router-link to="/addressList">Address List</router-link>
    </div>
  </div>





</template>

<style>
  .router-view > a{ float: left; width: 25%; padding-bottom: .24rem;}
</style>

<script>
  import Divider from '../components/divider/index';

  export default {
    components: {
      Divider
    },
    data () {
      return {};
    }
  };
</script>
