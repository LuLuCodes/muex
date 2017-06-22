<template>
  <div>
    <group title="textarea">
      <m-textarea :max="20" placeholder="请填写详细信息"></m-textarea>
    </group>
    <group title="和input一起使用">
      <m-input placeholder="标题"></m-input>
      <m-textarea :max="200" name="description" placeholder="描述"></m-textarea>
    </group>
    <group title="不显示计数器">
      <m-textarea :max="200" name="detail" placeholder="请填写详细信息" :show-counter="false"></m-textarea>
    </group>
    <group title="set height=200">
      <m-textarea :max="200" placeholder="请填写详细信息" :show-counter="false" :height="200" :rows="8" :cols="30"></m-textarea>
    </group>
    <group title="autosize">
      <m-textarea placeholder="Type something" :show-counter="false" :rows="1" ref="autosize"></m-textarea>
      <m-textarea title="title" placeholder="Type something" :show-counter="false" :rows="1" ref="autosize2"></m-textarea>
    </group>
    <group>
      <m-textarea title="带标题" placeholder="请填写详细信息" :show-counter="false" :rows="3"></m-textarea>
    </group>
    <group>
      <m-textarea title="带描述" placeholder="请填写详细信息" :show-counter="false" :rows="3" inline-desc="描述信息"></m-textarea>
    </group>
  </div>
</template>

<script>
  import MTextarea from '../components/m-textarea/index.vue';
  import Group from '../components/group/index.vue';
  import MInput from '../components/m-input/index.vue';
  import Autosize from 'autosize';

  export default {
    components: {
      MTextarea,
      Group,
      MInput
    },
    mounted () {
      Autosize(this.$refs.autosize.$refs.textarea);
      Autosize(this.$refs.autosize2.$refs.textarea);
    },
    beforeDestroy () {
      Autosize.destroy(this.$refs.autosize.$refs.textarea);
    }
  };
</script>
