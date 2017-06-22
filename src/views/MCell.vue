<template>
  <div>
    <group>
      <cell title="我的账号" value="保护中" @click.native="onClick"></cell>
      <cell title="现金" @click.native="onClick" :is-loading="true"></cell>
      <cell title="提现" disabled is-link></cell>
    </group>

    <group title="使用 is-link 显示右边箭头">
      <cell title="通知" is-link></cell>
      <cell title="隐私" is-link></cell>
      <cell title="通用" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
    </group>

    <group>
      <cell title="接受通知" value="已启用"></cell>
    </group>
  
    <group title="折叠">
      <cell
        title="标题一"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"></cell>
  
      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
        <cell-box class="sub-item" is-link>content 002</cell-box>
        <cell-box class="sub-item" is-link>content 003</cell-box>
      </template>
    </group>
    
    <group title="使用slot显示复杂内容">
      <cell title="slot content">
        <div slot="value">
          <span style="color: green">你好哇，感谢关注 Vux.</span>
        </div>
      </cell>
    </group>

    <group title="当有link属性时，is-link会自动设置为true">
      <cell title="Go to Radio Demo" link="/PullUpDown" inline-desc='link="/PullUpDown"'></cell>
      <cell title="Go to Demo" :link="{path:'/PullUpDown'}" inline-desc=':link={path:"/PullUpDown"}'></cell>
      <cell title="http link" link="http://www.baidu.com" inline-desc='link="http://www.baidu.com"'></cell>
    </group>
  </div>
</template>

<script>
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';
  import CellBox from '../components/cell-box/index.vue';

  export default {
    data () {
      return {
        showContent001: false
      };
    },
    components: {
      Group,
      Cell,
      CellBox
    },
    methods: {
      onClick () {
        console.log('on click');
      }
    }
  };
</script>
