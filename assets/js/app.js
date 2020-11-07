import vue from 'vue';
import vuerouter from 'vue-router';
import vuex from 'vuex';

import app from './components/app';

vue.use(vuerouter);
vue.use(vuex);

const router = new vuerouter({
    routes: [{
        path: '/',
        component: app 
    }]
});

new vue({
    el: '#vue-app',
    router
});