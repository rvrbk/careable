import vue from 'vue';
import vuerouter from 'vue-router';
import vuex from 'vuex';
import axios from 'axios';

window.axios = axios;

vue.use(vuerouter);
vue.use(vuex);

import app from './components/app';
import domains from './components/domains';
import patient from './components/patient';

const router = new vuerouter({
    routes: [{
        path: '/',
        name: 'root',
        component: app,
        children: [{
            path: '/domains',
            name: 'domains',
            component: domains
        }, {
            path: '/patient',
            name: 'patient',
            component: patient
        }] 
    }]
});

new vue({
    el: '#vue-app',
    router
});