
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './components/routes'

import PMT from './config.js'
import storageKeyName from './components/storageKeyName.js'
import userInfo from './components/userInfo.js'
import utilsUrl from './components/utilsUrl.js'
import store from './store/index.js'

import customAjax from './components/customAjax.js'

import VuePreview from 'vue-preview'

Vue.use(VuePreview)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.customAjax = customAjax;
Vue.prototype.PMT = PMT;
Vue.prototype.storageKeyName = storageKeyName;
Vue.prototype.userInfo =  userInfo.getInfo(JSON.parse(sessionStorage.getItem(storageKeyName.userInfo)));
Vue.prototype.utilsUrl = utilsUrl;

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // NProgress.start();
    if (!sessionStorage.getItem('user')) {
        sessionStorage.setItem('user','yyang2');
        next({ path: '/Index' });
    } else {
        next()
    }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(App)
}).$mount('#app')