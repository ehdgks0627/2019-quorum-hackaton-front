import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Join from '@/views/Join';
import List from '@/views/List';
import Stock from '@/views/Stock';
import Write from '@/views/Write';
import MyPage from '@/views/MyPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/join',
      name: 'Join',
      component: Join
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/stock',
      name: 'Stock',
      component: Stock
    }, {
      path: '/write',
      name: 'Write',
      component: Write
    }, {
      path: '/myPage',
      name: 'MyPage',
      component: MyPage
    }
  ]
});
