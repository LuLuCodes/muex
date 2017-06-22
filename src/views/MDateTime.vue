<template>
  <div>
    <group title="default format: YYYY-MM-DD">
      <datetime v-model="value1" @on-change="change" confirmText="确定" title="Birthday"></datetime>
    </group>

    <p class="center" @click="value1 = '2017-11-11'"> click to change value to: 2017-11-11</p>

   <group title="Limit hours">
      <datetime v-model="limitHourValue" format="YYYY-MM-DD HH:mm" :min-hour=9 :max-hour=18 @on-change="change" title="Limit hours" inline-desc="09-18"></datetime>
    </group>

    <group title="set start-date and end-date + 2015-11-11 ~ 2017-10-11">
      <datetime v-model="limitHourValue" :start-date="startDate" :end-date="endDate" format="YYYY-MM-DD HH:mm" @on-change="change" title="start time"></datetime>
    </group>

     <div style="padding:15px;">
      <m-button @click.native="reRender" type="primary">2016-11-11 ~ 2018-10-11</m-button>
    </div>

    <group title="format: YYYY-MM-DD HH:mm">
      <datetime v-model="value2" format="YYYY-MM-DD HH:mm" @on-change="change" title="start time"></datetime>
    </group>

    <group title="Placeholder">
      <datetime v-model="value3" format="YYYY-MM-DD" placeholder="Please select'" @on-change="change" title="start time"></datetime>
    </group>

    <group title="set min-year and max-year">
      <datetime v-model="value4" placeholder="Please select" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" title="years after 2000"></datetime>
    </group>
    <group title="specified template text in Chinese">
      <datetime v-model="value5" placeholder="Please select" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" title="Chinese'" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
    </group>

    <group title="show center button and clear the value">
      <datetime v-model="value6" @on-change="change" title="Birthday" clear-text="clear" @on-clear="clearValue"></datetime>
    </group>

    <group title="show center button to set date to today">
      <datetime v-model="value7" @on-change="change" title="Birthday" clear-text="today" @on-clear="setToday"></datetime>
    </group>

    <group title="custom trigger slot">
      <datetime v-model="value7" @on-change="change" title="Birthday" clear-text="today" @on-clear="setToday">
        <m-button>Click me</m-button>
      </datetime>
    </group>
    <group title="required">
      <datetime v-model="value8" title="Required" clear-text="clear" @on-clear="clearValue8" :required="true"></datetime>
    </group>
  </div>
</template>

<script>
  import Group from '../components/group/index.vue';
  import Datetime from '../components/datetime/index.vue';
  import MButton from '../components/m-button/index.vue';

  export default {
    components: {
      Datetime,
      Group,
      MButton
    },
    data () {
      return {
        value1: '2000-01-01',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '2016-08-18',
        value7: '',
        value8: '',
        limitHourValue: '',
        startDate: '2015-11-11',
        endDate: '2017-10-11'
      };
    },
    methods: {
      reRender () {
        this.startDate = '2016-11-11';
        this.endDate = '2018-10-11';
      },
      change (value) {
        console.log('change', value);
      },
      clearValue (value) {
        this.$data.value6 = '';
      },
      clearValue8 (value) {
        this.$data.value8 = '';
      },
      setToday (value) {
        let now = new Date();
        let cmonth = now.getMonth() + 1;
        let day = now.getDate();
        if (cmonth < 10) cmonth = '0' + cmonth;
        if (day < 10) day = '0' + day;
        this.$data.value7 = now.getFullYear() + '-' + cmonth + '-' + day;
        console.log('set today ok');
      }
    }
  };
</script>

<style scoped lang="less">
  .center {
    padding-top: 10px;
    padding-left: 15px;
    color: green;
  }
</style>
