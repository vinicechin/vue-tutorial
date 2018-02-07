import * as types from './types';

export default {
  [types.ACTION_UPDATE_VALUE]: ({commit}, payload) => {
    commit('updateValue', payload);
  }
}
