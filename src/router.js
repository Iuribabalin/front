import Vue from 'vue'
import VueRouter from 'vue-router'
import registration_container from "@/components/temp_views/registration_container";
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
            path: '/auth',
            name: 'auth-page',
            component: registration_container,
            props: {
                typeOfPage: "auth",
            },
            beforeEnter: (to, from, next) => {
                // if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
                //     next({name: 'main-page'})
                // } else {
                    next()
                //}
            }

        },
        {
            path: '/registration',
            name: 'registration-page',
            component: registration_container,
            props: {
                typeOfPage: "reg",
            },
            beforeEnter: (to, from, next) => {
                // TODO: RETURN THIS PART
                // if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
                //     next({name: 'main-page'})
                // } else {
                //     next()
                // }
                next();
            }

        },

        {
            path: '/confirm',
            name: 'confirm-page',
            component: registration_container,
            props: {
                typeOfPage: "confirm",
            },
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
                    next({name: 'main-page'})
                } else if (from.name === 'registration-page') {
                    next()
                } else next({name: 'auth-page'});
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
        }
    ]
});
