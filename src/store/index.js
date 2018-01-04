import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

const state = {
  itemNum: 0, // 第几题
  itemDetail: [
    {
      topic_name: '中二是一种？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.会呼吸的痛',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.病',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.学历学位称号',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name: '重要的事情说了三遍后会怎样？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.产生神奇的效果',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.记的更牢',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.突然失忆',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name:
        '李白的“飞流直下三千尺，疑是银河落九天”指的是哪个风景区？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.花果山',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.庐山',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.长白山',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name: '奥林匹克运动会的发源地是？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.古巴比伦',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.古罗马',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.古希腊',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name: '下列哪位明星获得过摄影大奖？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.周润发',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.成龙',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.陈冠希',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name:
        '下列中国哪一项技术被称为“亚洲四大妖术”之一？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.高数',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.PS',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.风水',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name: '获得今年奥斯卡最佳影片奖的是？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.《La La Land爱乐之城》',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.《Scarborough Fair斯卡布罗集市》',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.《Moonlight月光男孩》',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name: '以下哪句不是鲁迅说过的话？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.时间就像海绵里的水',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.其实地上本没有路',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.一个人爱上什么，就死在什么上。',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name:
        '爱上一匹野马，可我的家里没有草原这句歌词出自下列哪位歌手？',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.马頔',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.宋东野',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.赵雷',
          is_standard_answer: 0
        }
      ]
    },
    {
      topic_name: '川渝火锅中常用的食材“黄喉”，是指牛的哪个部位：',
      active_id: 1,
      topic_answer: [
        {
          topic_answer_id: 1,
          answer_name: 'A.气管',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          answer_name: 'B.血管',
          is_standard_answer: 0
        },
        {
          topic_answer_id: 3,
          answer_name: 'C.食道',
          is_standard_answer: 0
        }
      ]
    }
  ],
  answerid: [], // 答案id
  appraise: [
    '影视、音乐、人文历史',
    '美食、时尚娱乐、二次元',
    '摄影、旅行、音乐',
    '人文历史、美食、时尚娱乐',
    '二次元、旅行、影视',
    '旅行、摄影、时尚娱乐',
    '影视、音乐、人文历史、美食、时尚娱乐',
    '人文历史、美食、时尚娱乐、音乐、旅行、二次元'
  ]
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
