
export default {
  addNum({ commit, state }) {
    // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    // commit('REMBER_ANSWER', id);
    // console.debug('id:', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1);
    }
  },
  // 初始化信息
  initData({ commit, state }) {
    commit('INIT_ITEMNUM');
  },
  addId({ commit, state }, id) {
    // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    // commit('REMBER_ANSWER', id);
    // console.debug('id:', id);
    commit('ADD_ANSWER_ID', id);
  }
};
