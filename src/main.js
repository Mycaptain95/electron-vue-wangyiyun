import Vue from 'vue';
import App from './App.vue';
import Header from './components/header/Header.vue';

new Vue({
    el: "#root",
    template: '<Header/>',
    components: { App, Header }
});