<template>
  <div style="padding: 15px 0;">
    <divider>radio:no default value</divider>
    <div class="box">
      <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item value="1">潘</checker-item>
        <checker-item value="2">闲</checker-item>
        <checker-item value="3">邓</checker-item>
        <checker-item value="4">小</checker-item>
        <checker-item value="5">驴</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo1}}</span>
      <br>
    </div>

    <divider>radio: object value</divider>
    <div class="box">
      <checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo11}}</span>
      <br>
      <br>
      <checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo12}}</span>
      <br>
    </div>

    <divider>checkbox: object value</divider>
    <div class="box">
      <checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo21}}</span>
      <br>
      <br>
      <checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo22}}</span>
      <br>
      <br>
      <checker v-model="demo23" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :max="2">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo23}}</span>
      <br>
    </div>


    <divider>checkbox</divider>
    <div class="box">
      <checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="1">白</checker-item>
        <checker-item :value="2">富</checker-item>
        <checker-item :value="3">美</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo1Checkbox}}</span>
      <br>
    </div>

    <divider>checkbox with max limit 2</divider>
    <div class="box">
      <checker v-model="demo1CheckboxMax" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item value="1">1</checker-item>
        <checker-item value="2">2</checker-item>
        <checker-item value="3">3</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo1CheckboxMax}}</span>
      <br>
    </div>

    <divider>default value 2</divider>
    <div class="box">
      <checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
        <checker-item value="1">1</checker-item>
        <checker-item value="2">2</checker-item>
        <checker-item value="3">3</checker-item>
      </checker>
      <br>
      <span>current value is: {{demo2}}</span>
      <br>
    </div>

    <divider>custom styles</divider>
    <div class="box">
      <checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
        <checker-item value="one">
          <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
        </checker-item>
        <checker-item value="two">
          <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
        </checker-item>
        <checker-item value="three">
          <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
        </checker-item>
      </checker>
      <br>
      <span>current value is: {{demo3}}</span>
      <br>
    </div>

    <divider>used in a popup</divider>
    <group>
      <cell title="select color" :value="demo4" is-link @click.native="showPopup=true"></cell>
    </group>
    <popup v-model="showPopup" class="checker-popup">
      <div style="padding:10px 10px 40px 10px;">
        <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
        <checker
          v-model="demo4"
          default-item-class="demo4-item"
          selected-item-class="demo4-item-selected"
          disabled-item-class="demo4-item-disabled">
          <checker-item value="花跟叶" @on-item-click="showPopup=false">花跟叶</checker-item>
          <checker-item value="鸟与树" @on-item-click="showPopup=false">鸟与树</checker-item>
          <checker-item value="我和你" @on-item-click="showPopup=false">我和你</checker-item>
          <checker-item value="全套礼品装" disabled>全套礼品装</checker-item>
        </checker>
      </div>
    </popup>

    <divider>A real world radio example {{demo5}}</divider>
    <checker
      v-model="demo5"
      default-item-class="demo5-item"
      selected-item-class="demo5-item-selected"
      style="padding: .24rem">
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">
        ￥{{i*300}}
      </checker-item>
    </checker>
    <br/>
    <divider>A real world checkbox example {{demo6}}</divider>
    <checker
      v-model="demo6"
      type="checkbox"
      default-item-class="demo6-item"
      selected-item-class="demo6-item-selected"
      style="padding: .24rem">
      <checker-item value="1">good<icon type="success"></icon></checker-item>
      <checker-item value="2">nice<icon type="success"></icon></checker-item>
      <checker-item value="3">awesome<icon type="success"></icon></checker-item>
    </checker>
  </div>
</template>

<script>
  import Checker from '../components/checker/checker.vue';
  import CheckerItem from '../components/checker/checker-item.vue';
  import Divider from '../components/divider/index.vue';
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';
  import Popup from '../components/popup/index.vue';
  import Icon from '../components/icon/index.vue';

  export default {
    components: {
      Checker,
      CheckerItem,
      Divider,
      Group,
      Cell,
      Popup,
      Icon
    },
    data () {
      return {
        items1: [{
          key: '1',
          value: 'A'
        }, {
          key: '2',
          value: 'B'
        }, {
          key: '3',
          value: 'C'
        }],
        demo1: '',
        demo11: null,
        demo12: {key: '2', value: 'B'},
        demo21: null,
        demo22: [{key: '2', value: 'B'}],
        demo23: null,
        demo1Checkbox: [2, 1],
        demo1CheckboxMax: ['2', '3'],
        demo2: '2',
        demo3: '',
        demo4: '花跟叶',
        showPopup: false,
        demo5: 1,
        demo6: ['2', '3']
      };
    }
  };
</script>

<style scoped lang="less">
  .box {
    padding: 0 15px;
  }
  .demo1-item {
    padding: 0 .32rem;
    line-height: .58rem;
    background: #fff;
    border-radius: 6px;
    margin-right: .1rem;
  }
  .demo1-item-selected {
    background: #ffba00;
    color: #fff;
  }
  .demo2-item {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
  }
  .demo2-item-selected {
    border-color: green;
  }
  .demo3-item {
    padding: 5px 5px;
    font-size: 0;
  }
  .demo3-item-selected {
    outline: 1px solid #8B8AEE;
  }
  .demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: .24rem;
    padding:0 .32rem;
    margin-right: .1rem;
    line-height: .58rem;
    border-radius: 6px;
  }
  .demo4-item-selected {
    background-color: #FF3B3B;
    color: #fff;
  }
  .demo4-item-disabled {
    color: #999;
  }
  .demo5-item {
    height: .58rem;
    font-size: .22rem;
    color: #999;
    line-height: .58rem;
    text-align: center;
    border-radius: 6px;
    padding: 0 .32rem;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    margin-right: 6px;
    overflow: hidden;
    position: relative;
    & span{ background: #ff4a00; position: absolute; bottom: -.1rem;
        right: -.19rem;
        width: .5rem;
        height: .3rem; transform: rotate(-45deg);
        display: none;
      }
    & .weui-icon-success-no-circle{
        position: absolute;
        right: -2px;
        bottom: 2px;
        font-size: .12rem;
        color: #fff;
        display: none;
      }
  }
  .demo5-item-selected {
    border-color: #ff4a00;
    color: #ff4a00;
    font-weight: bold;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAvCAYAAACc5fiSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM4Q0IzRjk0Q0Q1MTFFN0E3OTU5OEM1ODRFN0I0REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM4Q0IzRkE0Q0Q1MTFFN0E3OTU5OEM1ODRFN0I0REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzhDQjNGNzRDRDUxMUU3QTc5NTk4QzU4NEU3QjRERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzhDQjNGODRDRDUxMUU3QTc5NTk4QzU4NEU3QjRERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr8tNasAAAHuSURBVHja1Ji7TsMwFIbTEtKFZwAWFgYKYzuxMUAHJC4LMMEDMLAjnoCFCUYYKFNtJBASEmICKh6iLwALYuNyjuRKkeVcnPgkPpZ+pY6l6MvRZztu42NhPmDYppoBz/bAEfwe0uEGLiAr+CNkBC0ha+NOkyM0F3ChQ3MAH0B6poHQ80r3kgZDLk5zUEVkQfsInqqHr+C5oX1yXObRw7eKW0P7AC6KQNcNPrBx2hfHRRnousBlUT3qVEW4gK4avLQedYA7ha7KcelKjyorLiigqcFd6PEFOYR8VwXuAvoXsgw5VddPanAT9MjyGX+QDuRd9YeQdUpwaYA+g8xBLiyh32L3IsgR1aqiT0QEOIEcq/4BpAXZzdCjC3nVoPEl2hTgJj0Q/Fm7t6euJvgfVelhFrQrVZImIj77EbJhgL9MqHQcehLyYoJ2AS5zrB43Bnis+FWs3zU4jbosUeycNpsLwm+p67jtqPX5TnO6pSq9mPbARsE/9ouu09uQfsp4S71Em2LnLLO5XEM2E8aiNKfLgsug/I7YNzgf5dGjKLjLr7z4hJ3ImohlwCm+8hB+H3JrU2mbVcX5ISDWzqk+aymhyU5AJCcX6oOE8Bk6CdxbPdLAWUDrjuOytBowaQg+C3mCzASMGqoyzQ0a278AAwBzUmFK1qApSgAAAABJRU5ErkJggg==") no-repeat right bottom #fff;
    background-size: .27rem .27rem;
    & span{ display: block}
    & .weui-icon-success-no-circle{ display: block;}
  }
  .demo6-item {
    height: .58rem;
    font-size: .22rem;
    color: #999;
    line-height: .58rem;
    text-align: center;
    border-radius: .29rem;
    padding: 0 .32rem;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    margin-right: 6px;
    position: relative;
    & .weui-icon-success{
      position: absolute;
        right: -4px;
        bottom: 0;
        font-size: .26rem;
      color: #ff4a00;
    display: none;
      }
  }
  .demo6-item-selected {
    border-color: #ff4a00;
    color: #ff4a00;
    font-weight: bold;
    & .weui-icon-success{ display: block}

  }
</style>
