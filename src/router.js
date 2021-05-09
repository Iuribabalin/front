import Vue from 'vue'
import VueRouter from 'vue-router'
import page_container from "@/components/temp_views/page_container";
import lk_container from "@/components/temp_views/lk_container";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'default-page',
            component: page_container,
            beforeEnter: (to, from, next) => {
                    next({name: 'main-page'});
            }
        },
        {
            path: '/main',
            name: 'main-page',
            component: page_container,
            beforeEnter: (to, from, next) => {
                next();
            }
        },
        {
            path: '/lk',
            name: 'lk-page',
            component: lk_container,
            beforeEnter: (to, from, next) => {
                next();
            }
        },
        {
            path: '/login',
            name: 'Login',
            meta: {layout: 'login'},
            component: () => import('@/components/Users_pajes/login.vue')
        },
        {
            path: '/reg',
            name: 'Reg',
            meta: {layout: 'reg'},
            component: () => import('@/components/Users_pajes/reg.vue')
        },
        {
            path: '/pass_recovery',
            name: 'PassRecovery',
            meta: {layout: 'pass_recovery'},
            component: () => import('@/components/Users_pajes/RecoveryPass.vue')
        },
        {
            path: '/mePosts',
            name: 'MePosts',
            meta: {layout: 'mePosts'},
            component: () => import('@/components/me_posts/mePosts.vue')
        },
        {
            path: '/addPosts',
            name: 'AddPosts',
            meta: {layout: 'addPosts'},
            component: () => import('@/components/Users_pajes/AddPost.vue')
        },
        {
            path: '/regCommand',
            name: 'RegCommand',
            meta: {layout: 'regCommand'},
            component: () => import('@/components/Users_pajes/CreateCommand.vue')
        },
    ]
});
