<template>
  <div>
    <group>
      <cell title="cell" value="hello" is-link></cell>
      <cell-box is-link>
        cell-box long long long long long long long
      </cell-box>
      <cell-box>
        cell-box hello world hello world hello world
      </cell-box>
      <cell title="cell" value="hello" is-link></cell>
    </group>
  </div>
</template>

<script>
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';
  import CellBox from '../components/cell-box/index.vue';

  export default {
    components: {
      Group,
      Cell,
      CellBox
    }
  };
</script>
