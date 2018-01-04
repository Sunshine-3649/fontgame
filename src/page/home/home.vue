<template>
  <div class="index">
    <!-- 首页 -->
    <div class="wrapper" v-show="isShowHome">
      <img class='bgimg' src="./home.jpg" alt="图片1">
      <img class='btn' @click="homeHide" src="./button.png" alt="按钮">
    </div>
    <!-- 主页 -->
    <div class="main" v-show="!isShowHome">
      <img class='beijing' src="./beijing.png" alt="背景图">
      <div class="header">
        <div class="tip">{{itemNum + 1}}/10</div>
        <img class='plate' :class='{rorate: hasrorate, pause: isrorate}' @click="pause" src="./plate.png" alt="碟子">
        <audio ref="audio" id="audio" v-show="false" preload loop controls>
          <source src="../../../static/radio/bg.mp3" type="audio/mp3">
          您的浏览器不支持 audio 标签。
        </audio>
        <img class='blackboard' src="./blackboard.png" alt="">
        <h3 class="ques">{{itemDetail[itemNum].topic_name}}</h3>
      </div>
      <div class="select">
        <section class='change' v-for="(item, i) in itemDetail[itemNum].topic_answer" :key="i" @touchstart="choose(i)">
          <img v-show="!item.is_standard_answer" class='ditikuang' src="./ditikuang.png" alt="">
          <img v-show="item.is_standard_answer"  @click="choose(i)" class='dtkxz' src="./dtkxz.png" alt="">
          <p class='title' :class='{active: item.is_standard_answer}'>{{item.answer_name}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import { mapState } from 'vuex';
export default {
  name: 'index',
  data() {
    return {
      isShowHome: true,
      isSelect: true,
      isPlay: true,
      isrorate: false,
      hasrorate: false
    };
  },
  mounted() {
    this.getData();
    if (this.$route.query.again === 1) {
      this.homeHide();
    }
  },
  computed: {
    ...mapState({
      itemNum: state => state.itemNum,
      itemDetail: state => state.itemDetail
    })
  },
  methods: {
    homeHide() {
      this.isShowHome = false;
      this.$store.dispatch('initData');
      this.isPlay = true;
      this.hasrorate = true;
      this.$refs.audio.play();
    },
    choose(i) {
      console.log(this.itemDetail.length);
      this.itemDetail[this.itemNum].topic_answer[i].is_standard_answer = true;
      if (this.itemNum < this.itemDetail.length - 1) {
        const toast = this.$createToast({
          time: 800,
          mask: true,
          txt: '下一题'
        });
        toast.show();
        setTimeout(() => {
          this.$store.dispatch('addNum');
        }, 1000);
      } else {
        const toast = this.$createToast({
          time: 1500,
          mask: true,
          txt: '正在计算，请稍等。。'
        });
        toast.show();
        setTimeout(() => {
          this.$router.push('/score');
        }, 1200);
      }
      const id = this.itemDetail[this.itemNum].topic_answer[i].topic_answer_id;
      this.$store.dispatch('addId', id);
    },
    pause() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.$refs.audio.play();
        this.isrorate = false;
      } else {
        this.$refs.audio.pause();
        this.isrorate = true;
      }
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
              imgUrl: 'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
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
              imgUrl: 'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
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
              imgUrl: 'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
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
              imgUrl: 'https://lbs-img.oss-cn-shanghai.aliyuncs.com/img/20171219/2784922e-4786-48db-9783-36b3d6e36dc1.jpg',
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
  },
  destroyed() {
    this.$refs.audio = null;
  }
};
</script>

<style lang="stylus" scoped>
img
  display: block
.index
  overflow: hidden
  .wrapper
    width: 100%
    height: 100%
    position: relative
    .bgimg
      width: 32rem
      height: 52rem
    .btn
      width: 9.45rem
      height: 9.46rem
      position: absolute
      bottom: 4.24rem
      left: 11.8rem
      z-index: 100
  .main
    width: 100%
    height: 100%
    position: relative
    .beijing
      width: 32rem
      height: 52rem
    .header
      width: 32rem
      height: 21.65rem
      position: absolute
      left: 0
      top: 0
      .tip
        width: 4.5rem
        height: 2rem
        line-height: 2rem
        text-align: center
        font-size: 1.5rem
        color: #ffffff
        background: rgb(194, 152, 80)
        position: absolute
        left: 6.1rem
        top: 8.7rem
        z-index: 20
      .plate
        width: 2.6rem
        height: 2.6rem
        position: absolute
        right: 1rem
        top: 1rem
        &.rorate
          animation: rotate 5s infinite linear
        &.pause
          animation-play-state: paused
      .blackboard
        width: 22.75rem
        height: 19.45rem
        position: absolute
        right: 4.15rem
        top: 2.2rem
      .ques
        width: 18rem
        font-size: 1.4rem
        color: #ffffff
        line-height: 2rem
        position: absolute
        left: 7.85rem
        top: 12.75rem
    .select
      width: 32rem
      height: 21.65rem
      position: absolute
      left: 5.35rem
      top: 24.65rem
      .change
        position: relative
        height: 2.7rem
        margin-bottom: 1.05rem
        .ditikuang, .dtkxz
          width: 21.25rem
          height: 2.7rem
          line-height: 2.7rem
          position: absolute
        .title
          padding-left: 2.3rem
          line-height: 2.7rem
          position: absolute
          z-index: 20
          &.active
            color: #ffffff
@keyframes rotate
  form
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
</style>
