import * as types from '../types';

const state = {
  counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
      return state.counter * 2;
    },

    [types.CLICK_COUNTER]: state => {
      return state.counter + ' Clicks';
    },
    
    [types.COUNTER]: state => {
      return state.counter;
    }
};

const mutations = {
    [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
      state.counter += payload;
    },

    [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
      state.counter -= payload;
    }
};

const actions = {
    [types.ACTION_INCREMENT_COUNTER]: (context, payload) => {
      context.commit(types.MUTATE_INCREMENT_COUNTER, payload);
    },

    [types.ACTION_DECREMENT_COUNTER]: ({ commit }, payload) => {
      commit(types.MUTATE_DECREMENT_COUNTER, payload);
    },

    [types.ACTION_INCREMENT_COUNTER_ASYNC]: ({commit}, payload) => {
      setTimeout(() => {
        commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
      }, payload.duration)
    },

    [types.ACTION_DECREMENT_COUNTER_ASYNC]: ({commit}, payload) => {
      setTimeout(() => {
        commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
      }, payload.duration)
    }
};

export default {
  state,
  getters,
  mutations,
  actions
}
