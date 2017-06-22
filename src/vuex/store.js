/**
 * Created by qianqing on 2017/3/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as type from './type';

Vue.use(Vuex);

const state = {
  demoScrollTop: 0,
  isLoading: false,
  direction: 'forward'
};
export default new Vuex.Store({
  state,
  mutations: {
    [type.UPDATEDEMOPOSITION] (state, payload) {
      state.demoScrollTop = payload.top;
    },
    [type.UPDATELOADINGSTATUS] (state, payload) {
      state.isLoading = payload.isLoading;
    },
    [type.UPDATEDIRECTION] (state, payload) {
      state.direction = payload.direction;
    }
  }
});