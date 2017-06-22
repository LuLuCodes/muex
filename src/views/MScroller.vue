<template>
  <div>
    <group>
      <cell is-link title="pullup" link="/Pullup">Pullup</cell>
      <cell is-link title="pulldown" link="/Pulldown">Pulldown</cell>
      <cell is-link title="pulldownpullup" link="/PullUpDown">PulldownPullup</cell>
    </group>
    
    <divider>{{ '不带滚动条水平Scroller' }}</divider>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>
    
    <divider>{{ '显示滚动条水平Scroller' }}</divider>
    <scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>
    
    <divider>{{ '没有边缘回滚的水平Scroller' }}</divider>
    <scroller lock-y scrollbar-x :bounce=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>
    
    <divider>{{ '竖向Scroller' }} scrollTop: {{scrollTop}}</divider>
    <scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
      <div class="box2">
        <p v-for="i in 80">placeholder {{i}}</p>
      </div>
    </scroller>
    
    <m-button type="primary" @click.native="$refs.scrollerEvent.reset({top:0})">reset</m-button>
    
    <divider>{{ '检测是否滚动到底部' }} </divider>
    <scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
        <p v-for="i in bottomCount">placeholder {{i}}</p>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>
    
    <divider>{{ '显示滚动条的竖向Scroller' }}</divider>
    <scroller lock-x scrollbar-y height="200px" ref="scroller">
      <div class="box2">
        <p v-for="i in 20" v-if="showList1">placeholder {{ i + '' + i }}</p>
        <p v-for="i in 10" v-if="!showList1">placeholder {{ i }}</p>
        <m-button style="margin:10px 0;" type="primary" @click.native="onClickButton">{{ 'Button' }}</m-button>
        <group>
          <cell @click.native="onCellClick" title="Title" value="Value"></cell>
        </group>
      </div>
    </scroller>
    <m-button @click.native="changeList" type="primary">{{ '显示其他内容' }}</m-button>
  </div>
</template>

<script>
  import Scroller from '../components/scroller/index.vue';
  import Divider from '../components/divider/index.vue';
  import MButton from '../components/m-button/index.vue';
  import Group from '../components/group/index.vue';
  import Cell from '../components/cell/index.vue';
  import LoadMore from '../components/load-more/index.vue';

  export default {
    components: {
      Scroller,
      Divider,
      MButton,
      Group,
      Cell,
      LoadMore
    },
    data () {
      return {
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20
      };
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scrollerEvent.reset({top: 0});
      });
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0});
      });
    },
    methods: {
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true;
          setTimeout(() => {
            this.bottomCount += 10;
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset();
            });
            this.onFetching = false;
          }, 2000);
        }
      },
      onScroll (pos) {
        this.scrollTop = pos.top;
      },
      onCellClick () {
        window.alert('cell click');
      },
      onClickButton () {
        window.alert('click');
      },
      changeList () {
        this.showList1 = false;
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          });
        });
      }
    }
  };
</script>

<style scoped>
  .box1 {
    height: 100px;
    position: relative;
    width: 1490px;
  }
  .box1-item {
    width: 200px;
    height: 100px;
    background-color: #ccc;
    display:inline-block;
    margin-left: 15px;
    float: left;
    text-align: center;
    line-height: 100px;
  }
  .box1-item:first-child {
    margin-left: 0;
  }
  .box2-wrap {
    height: 300px;
    overflow: hidden;
  }
</style>
