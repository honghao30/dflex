import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Dflex from '@/views/Dflex.vue';
import MovieInfo from '@/views/MovieInfo.vue';
import MovieDetail from '@/views/MovieDetail/MovieShow1.vue';
import BoxOffice from '@/views/BoxOffice.vue';
import Youtube from '@/views/Youtube.vue';
import Books from '@/views/Books.vue';
import Login from '@/views/Login.vue';
import Contac from '@/views/Contac.vue';
// import NotFuond from '@/views/NotFuond.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: Dflex,
  },
  {
    path: '/movieInfo',
    name: 'MovieInfo',
    component: MovieInfo,
  },
  {
    path: '/detail/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true
  },
  {
    path: '/boxOffice',
    name: 'BoxOfficer',
    component: BoxOffice,
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/contac',
    name: 'contac',
    component: Contac,
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: NotFuond,
  // },
  // {
  //   path: '/nested',
  //   name: 'Playground',
  //   component: Playground,
  //   children: [
  //     {
  //       path: '',
  //       name: 'PlayHome',
  //       component: PlayHome,
  //     },
  //     {
  //       path: 'one',
  //       name: 'workOne',
  //       component: PlayLunch,
  //     },
  //     {
  //       path: 'two',
  //       name: 'workTwo',
  //       component: PlayTodo,
  //     },
  //   ],
  // },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
