
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const INIT_ITEMNUM = 'INIT_ITEMNUM';
const ADD_ANSWER_ID = 'ADD_ANSWER_ID';

export default {
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  [INIT_ITEMNUM](state, num) {
    state.itemNum = 0;
    state.answerid = [];
    state.itemDetail.forEach(item => {
      item.topic_answer.forEach(itemsub => {
        itemsub.is_standard_answer = 0;
      });
    });
  },
  [ADD_ANSWER_ID](state, id) {
    state.answerid.push(id);
  }
};
