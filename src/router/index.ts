import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from "../views/Login.vue"
import MainPage from '../views/MainPage.vue';
import PersonalMsg from '../views/PersonalMsg.vue';
import OrderDetail from '../views/OrderDetail.vue';
import MyOrder from '../components/personalMsg/InformationRightCom/MyOrder/index.vue';
import ContributingOrder from '../components/personalMsg/InformationRightCom/MyOrder/ContributingOrder/index.vue';
import SettledOrder from '../components/personalMsg/InformationRightCom/MyOrder/SettledOrder/index.vue';
import UndoneOrder from '../components/personalMsg/InformationRightCom/MyOrder/UndoneOrder/index.vue';
import OrderInvite from '../components/personalMsg/InformationRightCom/OrderInvite/index.vue';
import Rejected from '../components/personalMsg/InformationRightCom/OrderInvite/Rejected/index.vue';
import Untreated from '../components/personalMsg/InformationRightCom/OrderInvite/Untreated/index.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/mainPage',
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/personalMsg',
    name: 'PersonalMsg',
    component: PersonalMsg,
    redirect: '/myOrder',
    children: [
      {
        path: '/myOrder',
        name: 'myOrder',
        component: MyOrder,
        redirect: '/contributingOrder',
        children: [
          {
            path: '/contributingOrder',
            name: 'contributingOrder',
            component: ContributingOrder,
          },
          {
            path: '/settledOrder',
            name: 'settledOrder',
            component: SettledOrder,
          },
          {
            path: '/undoneOrder',
            name: 'undoneOrder',
            component: UndoneOrder,
          },
        ],
      },
      {
        path: '/orderInvite',
        name: 'orderInvite',
        component: OrderInvite,
        redirect: '/untreated',
        children: [
          {
            path: '/rejected',
            name: 'rejected',
            component: Rejected,
          },
          {
            path: '/untreated',
            name: 'untreated',
            component: Untreated,
          },
        ],
      },
    ],
  },
  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: OrderDetail,
  }

];

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
