import Vue from 'vue';
import App from './App.vue';
import Header from './components/header/Header.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './asset/less/reset.less';

Vue.use(ElementUI);

new Vue({
    el: "#root",
    template: '<Header/>',
    components: { App, Header }
});