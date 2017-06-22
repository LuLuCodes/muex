<template>
  <div>
    <group>
      <cell title="Total" value="￥1024"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>



<script>
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';
  import CellFormPreview from '../components/cell-form-preview/index.vue';

export default {
  components: {
    CellFormPreview,
    Group,
    Cell
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
    };
  }
};
</script>
