<template>
  <div class="score" v-show="isShow">
    <img class='end' src="./end.jpg" alt="分数图片">
    <img class='btn1' @click="btn1" src="./btn_1.png" alt="按钮1">
    <img class='btn2' @click="btn2" src="./btn_2.png" alt="按钮2">
    <img class='btn3' @click="btn3" src="./btn_3.png" alt="按钮3">
    <img class='btn4' @click="btn4" src="./btn_4.png" alt="按钮4">
    <div class="desc">哇，你大脑的知识含量居然横跨了<span class='answerdesc'>{{answerDesc}}</span>！我们斥巨资寻找的达人就是你！向大佬献上膝盖！赶紧加入我们吧~！</div>
    <img class='share' v-show="isShare" @click="hideShare" src="./share.jpg" alt="">
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import { mapState } from 'vuex';
export default {
  name: 'score',
  data() {
    return {
      answer: [
        { id: 2, desc: '搞笑' },
        { id: 1, desc: '娱乐、二次元' },
        { id: 2, desc: '旅游' },
        { id: 3, desc: '体育' },
        { id: 1, desc: '八卦' },
        { id: 2, desc: '时尚、娱乐' },
        { id: 3, desc: '影视' },
        { id: 3, desc: '人文历史' },
        { id: 2, desc: '音乐' },
        { id: 1, desc: '美食' }
      ],
      answerDesc: '',
      isShare: false,
      arr2: ['搞笑', '旅游', '体育'],
      isShow: false
    };
  },
  computed: {
    ...mapState({
      appraise: state => state.appraise,
      answerid: state => state.answerid
    })
  },
  created() {
    this.show();
    this.getResult();
    this.getData();
    // const index = Math.floor(Math.random() * 8);
    // console.log(this.answerid);
    // this.desc = this.appraise[index];
  },
  methods: {
    show() {
      const toast = this.$createToast({
        time: 1000,
        mask: true,
        txt: '正在计算，请稍等。。'
      });
      toast.show();
      this.isShow = true;
    },
    btn1() {
      window.location.href =
        'http://android.myapp.com/myapp/detail.htm?apkName=com.palcomm.hangwt&ADTAG=mobile';
    },
    btn2() {
      this.$router.push({
        path: '/',
        query: {
          again: 1
        }
      });
    },
    btn3() {
      this.isShare = true;
    },
    btn4() {
      window.location.href =
        'http://a.app.qq.com/o/simple.jsp?pkgname=com.rd.hangwentou';
    },
    hideShare() {
      this.isShare = false;
    },
    getResult() {
      let arr = [];
      this.answerid.forEach((item, i) => {
        if (item === this.answer[i].id) {
          arr.push(this.answer[i].desc);
        }
      });
      console.log(arr);
      if (arr.length < 2) {
        arr = this.arr2;
      }
      this.answerDesc = arr.join('，');
    },
    getData() {
      axios({
        method: 'post',
        url: '/mine/weixin/getSign',
        data: qs.stringify({
          url: window.location.href.split('#')[0]
        })
      }).then(res => {
        if (res.status === 200) {
          let appId = res.data.data.appId;
          let noncestr = res.data.data.noncestr;
          let signature = res.data.data.signature;
          let timestamp = res.data.data.timestamp;
          console.log(signature);
          wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: noncestr,
            signature: signature,
            jsApiList: [
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo'
            ]
          });
          wx.ready(function() {
            wx.onMenuShareAppMessage({
              title: '测一测你拥有哪种未知的天赋？',
              desc: '有一个神秘组织正在散布赏令，你可能就是他们在找的人...',
              link: window.location.href.split('#')[0],
              imgUrl:
                'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
              success: function() {
                alert('分享成功');
              },
              cancel: function() {
                alert('已取消');
              }
            });
            wx.onMenuShareTimeline({
              title: '测一测你拥有哪种未知的天赋？',
              desc: '有一个神秘组织正在散布赏令，你可能就是他们在找的人...',
              link: window.location.href.split('#')[0],
              imgUrl:
                'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
              success: function() {
                alert('分享成功');
              },
              cancel: function() {
                alert('已取消');
              }
            });
            wx.onMenuShareQQ({
              title: '测一测你拥有哪种未知的天赋？',
              desc: '有一个神秘组织正在散布赏令，你可能就是他们在找的人...',
              link: window.location.href.split('#')[0],
              imgUrl:
                'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
              success: function() {
                alert('分享成功');
              },
              cancel: function() {
                alert('已取消');
              }
            });
            wx.onMenuShareWeibo({
              title: '测一测你拥有哪种未知的天赋？',
              desc: '有一个神秘组织正在散布赏令，你可能就是他们在找的人...',
              link: window.location.href.split('#')[0],
              imgUrl:
                'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
              success: function() {
                alert('分享成功');
              },
              cancel: function() {
                alert('已取消');
              }
            });
          });
        } else {
          alert(res.msg);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
img
  display: block
.score
  width: 100%
  height: 100%
  .end
    width: 32rem
    height: 52rem
    z-index: -10
  .btn1, .btn2, .btn3, .btn4
    width: 12.5rem
    height: 4.1rem
    position: absolute
  .btn1
    left: 1.9rem
    top: 36.55rem
  .btn2
    right: 1.75rem
    top: 36.55rem
  .btn3
    left: 1.9rem
    top: 43.1rem
  .btn4
    right: 1.75rem
    top: 43.1rem
  .desc
    width: 18.3rem
    overflow: scroll
    line-height: 2.5rem
    font-size: 1.2rem
    position: absolute
    left: 6.5rem
    top: 8.6rem
    color: rgba(255, 255, 255, 1)
    z-index: 20
    .answerdesc
      line-height: 1.6rem
      font-size: 2rem
      color: rgb(255, 172, 140)
  .share
    width: 32rem
    height: 52rem
    z-index: 100
    position: absolute
    left: 0
    top: 0
</style>
