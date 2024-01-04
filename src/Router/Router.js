import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import ArticleViewVue from '../view/ArticleView/ArticleView.vue';
import ArticleContextViewVue from '../view/ArticleContextView/ArticleContextView.vue';
import VideoViewVue from '../view/VideoView/VideoView.vue';
import HomeViewVue from '../view/HomeView/HomeView.vue';
import UserinfoView from '../view/UserinfoView/UserinfoView.vue';
import LoginViewVue from '../view/LoginView/LoginView.vue';
import VideoContextView from '../view/VideoContextView/VideoContextView.vue'
import SearchView from "../view/SearchView/SearchView.vue"
const routes = [{
    path: '/',
    component: HomeViewVue,
},
{
    path: '/userinfo',
    name: 'userinfo',
    component: UserinfoView,
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
    name:'login',
    component: LoginViewVue,
}, {
    path: '/article/:id',
    component: ArticleContextViewVue,
},{
    path:'/video/:id',
    component:VideoContextView,
},{
    path:'/search/:id',
    component:SearchView,
}];
const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;