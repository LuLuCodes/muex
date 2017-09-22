<template>
<div>
  <inline-calendar
  ref="calendar"
  @on-change="onChange"
  @on-view-change="onViewChange"
  class="inline-calendar-demo"
  :show.sync="show"
  v-model="value"
  start-date="2016-04-01"
  end-date="2018-05-30"
  :range="range"
  :show-last-month="showLastMonth"
  :show-next-month="showNextMonth"
  :highlight-weekend="highlightWeekend"
  :return-six-rows="return6Rows"
  :hide-header="hideHeader"
  :hide-week-list="hideWeekList"
  :replace-text-list="replaceTextList"
  :weeks-list="weeksList"
  :render-function="buildSlotFn"
  :disable-past="disablePast"
  :disable-future="disableFuture">
  </inline-calendar>

  <group>
    <cell title="current value" :value="value"></cell>
    <cell title="start date" value="2016-04-01"></cell>
    <cell title="end date" value="2018-05-30"></cell>
  </group>

  <div style="margin: 15px;">
    <m-button type="primary" @click.native="$refs.calendar.switchViewToToday()">switchViewToToday</m-button>
    <m-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2017, 12)">switchViewToMonth(2017, 12)</m-button>
    <m-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2018, 10)">switchViewToMonth(2018, 10)</m-button>
    <m-button type="primary" @click.native="$refs.calendar.switchViewToCurrentValue()">switchViewToCurrentValue</m-button>
  </div>

  <group title="control days" style="margin-top: 30px;">
    <m-switch v-model="disablePast" title="Disable Past"></m-switch>
    <m-switch v-model="disableFuture" title="Disable Future"></m-switch>
    <m-switch v-model="showLastMonth" title="Show Last Month"></m-switch>
    <m-switch v-model="showNextMonth" title="Show Next Month"></m-switch>
    <m-switch v-model="return6Rows" inline-desc="if not, the calendar's height would change" title="Always show 6 rows"></m-switch>
    <m-switch v-model="highlightWeekend" title="highlight weekend"></m-switch>
    <cell title="current value" :value="value"></cell>
  </group>
  <group title="control navs">
    <m-switch v-model="hideHeader" title="Hide header"></m-switch>
    <m-switch v-model="hideWeekList" title="Hide week list"></m-switch>
    <m-switch v-model="changeWeeksList" title="Change weeks list"></m-switch>
  </group>
  <group title="replace text">
    <m-switch v-model="replace" title="Replace date text"></m-switch>
  </group>
  <br>
  <div style="margin: 15px;">
    <m-button type="primary" @click.native="value='2020-11-11'">Set time to 2020-11-11</m-button>
    <m-button type="primary" @click.native="value='2020-11-22'">Set time to 2020-11-22</m-button>
    <m-button type="primary" @click.native="value='2016-08-09'">Set time to 2016-08-09</m-button>
    <m-button type="primary" @click.native="value='TODAY'">Set time to today</m-button>
    <m-button type="primary" @click.native="value='2016-06-05'">Set time to 2016-06-05</m-button>
  </div>
  <br>
  <group title="custom every day cell">
    <m-switch v-model="useCustomFn" inline-desc="Add red dot for dates with 8" title="add custom contents in day cell"></m-switch>
  </group>

  <br>

  <divider>We can render a list of calendars order by month</divider>
  <group>
    <cell title="current value" :value="listValue"></cell>
  </group>
  <br>
  <div v-for="i in 5" v-if="i >= 1">
    <divider>2016 / {{i}}</divider>
    <inline-calendar
    :render-month="[2016, i]"
    hide-header
    :return-six-rows="false"
    v-model="listValue"
    :show-last-month="false"
    :show-next-month="false"
    :render-on-value-change="false"></inline-calendar>
  </div>
</div>
</template>

<script>
  import InlineCalendar from '../components/inline-calendar/index.vue';
  import Group from '../components/group/index.vue';
  import MSwitch from '../components/m-switch/index.vue';
  import Radio from '../components/radio/index.vue';
  import MButton from '../components/m-button/index.vue';
  import Cell from '../components/cell/index.vue';
  import Divider from '../components/divider/index.vue';

export default {
  methods: {
    onChange (val) {
      console.log('on-change', val);
    },
    onViewChange (val, count) {
      console.log('on view change', val, count);
    }
  },
  data () {
    return {
      show: true,
      value: '',
      listValue: '',
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: () => '',
      disablePast: false,
      disableFuture: false
    };
  },
  watch: {
    replace (val) {
      this.replaceTextList = val ? {
        'TODAY': '今'
      } : {};
    },
    useCustomFn (val) {
      this.buildSlotFn = val ? (line, index, data) => {
        return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;"></div>';
      } : () => '';
    },
    changeWeeksList (val) {
      this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
  },
  components: {
    InlineCalendar,
    Group,
    MSwitch,
    Radio,
    MButton,
    Cell,
    Divider
  }
};
</script>

<style lang="less" scoped>
.inline-calendar-demo {
  background: rgba(255,255,255,0.9);
}
</style>
