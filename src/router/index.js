import Vue from 'vue';
import Router from 'vue-router';
import home from 'page/home/home';
import score from 'page/score/score';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // 游戏首页
      name: 'home',
      component: home
    },
    {
      path: '/score', // 游戏结果
      name: 'score',
      component: score
    }
  ]
});
