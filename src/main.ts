import $ from 'jquery';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import AppVue from '@/components/vue/AppVue.vue';

// Vue.js
const app = createApp(AppVue);
app.use(createPinia()).mount('#vue_app');

// jQuery
$(function () {
  console.log('jQuery is ready.');
});
