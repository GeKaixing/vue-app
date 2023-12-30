import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import ArticleViewVue from '../view/ArticleView/ArticleView.vue';
import ArticleContextViewVue from '../view/ArticleContextView/ArticleContextView.vue';
import VideoViewVue from '../view/VideoView/VideoView.vue';
import HomeViewVue from '../view/HomeView/HomeView.vue';
import NewsViewVue from '../view/NewsView/NewsView.vue';
import LoginViewVue from '../view/LoginView/LoginView.vue';
import VideoContextView from '../view/VideoContextView/VideoContextView.vue'
const routes = [{
    path: '/',
    component: HomeViewVue,
},
{
    path: '/user',
    name: 'user',
    component: NewsViewVue,
    /* beforeEnter: (to, from) => {
        if (!localStorage.getItem('name')) {
            to.name = 'video'
            return {
                name: 'video'
            }
        }
    } */
},
{
    path: '/video',
    name: 'video',
    component: VideoViewVue,
},
{
    path: '/article',
    component: ArticleViewVue,
}, {
    path: '/login',
    component: LoginViewVue,
}, {
    path: '/article/:id',
    component: ArticleContextViewVue,
},{
    path:'/video/:id',
    component:VideoContextView,
}];
const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;