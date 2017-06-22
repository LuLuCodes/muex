<template>
  <div>
    <img src="../assets/demo.png" style="width: 100%">
    <search @result-click="resultClick" label @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="0"></search>
    <divider>固定位置搜索</divider>
    <search @result-click="resultClick" label @on-change="getResult" :results="results1" v-model="value1" :autoFixed=false position="fixed" auto-scroll-to-top ></search>
    <divider>不同搜索样式</divider>
    <search @result-click="resultClick"  @on-change="getResult" :results="results2" v-model="value2" :autoFixed=false position="fixed" ></search>
  </div>
</template>
<script>
  import Divider from '../components/divider/index.vue';
  import Search from '../components/search/index.vue';

  export default {
    components: {
      Search,
      Divider
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item));
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : [];
      }
    },
    data () {
      return {
        results: [],
        value: 'test',
        results1: [],
        results2: [],
        value1: '',
        value2: ''
      };
    }
  };

  function getResult (val) {
    let rs = [];
    for (let i = 0; i < 8; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      });
    }
    return rs;
  }
</script>
