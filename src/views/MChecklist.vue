<template>
  <div>
    <checklist title="基础用法" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></checklist>
    <div style="padding:15px;">
      <m-button @click.native="labelPosition = labelPosition === 'left' ? '' : 'left'" type="primary">切换 label 位置</m-button>
      <m-button @click.native="selectFirst" type="primary">选择第1个值</m-button>
      <m-button @click.native="selectFirstTwo" type="primary">选择前两个值</m-button>
      <m-button @click.native="selectLeft" type="primary">选择剩下值</m-button>
    </div>
    <checklist title="错误处理" required :options="commonList" show-error v-model="checklist0011" @on-change="change" @on-error="onError" @on-clear-error="onNoError" name="demo1" :max="2">
      <p slot="footer" v-show="error" class="error">{{error}}</p>
    </checklist>

    <checklist title="默认选中 China and Japan" :options="commonList" v-model="checklist002" @on-change="change"></checklist>

    <checklist title="最多可选中2个" :options="commonList" v-model="checklist003" :max=2 @on-change="change"></checklist>

    <checklist title="打乱选项顺序" random-order :options="checklist005" v-model="checklist005Value" @on-change="change"></checklist>

    <checklist title="使用Object类型的选项列表，key必须为字符串" :options="objectList" v-model="objectListValue" @on-change="change"></checklist>

    <checklist title="异步列表" :max="3" :options="asyncList" v-model="asyncListValue" @on-change="change"></checklist>

    <divider>Reference</divider>
    <group title="See also">
      <cell title="Checker" value="with which you can custom any style" is-link link="/MChecker"></cell>
    </group>
  </div>
</template>

<script>
  import Group from '../components/group/index.vue';
  import Checklist from '../components/checklist/index.vue';
  import Cell from '../components/cell/index.vue';
  import Divider from '../components/divider/index.vue';
  import MButton from '../components/m-button/index.vue';
  import _ from 'lodash';

  export default {
    mounted () {
      setTimeout(() => {
        this.asyncList = ['A', 'B', 'C', 'D'];
      }, 3000);
    },
    components: {
      Group,
      Checklist,
      Cell,
      Divider,
      MButton
    },
    methods: {
      change (val) {
        console.log('change', val);
      },
      onError (errors) {
        console.log(errors);
        this.error = errors;
      },
      onNoError () {
        this.error = null;
      },
      selectFirst () {
        this.checklist001 = ['China'];
      },
      selectFirstTwo () {
        this.checklist001 = ['China', 'Japan'];
      },
      selectLeft () {
        const left = _.without.apply(_, [this.commonList].concat(this.checklist001));
        this.checklist001 = left;
      }
    },
    data () {
      return {
        error: '',
        commonList: [ 'China', 'Japan', 'America' ],
        checklist001: [],
        checklist0011: [],
        checklist002: [ 'China', 'Japan' ],
        checklist003: [ 'China', 'Japan' ],
        checklist005: [ '01', '02', '03' ],
        checklist005Value: [],
        objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
        objectListValue: ['1', '2'],
        asyncList: [],
        asyncListValue: [],
        labelPosition: ''
      };
    }
  };
</script>

<style scoped>
  .error {
    padding-left: 15px;
    line-height: 28px;
    color: #888;
    font-size: 12px;
  }
</style>
