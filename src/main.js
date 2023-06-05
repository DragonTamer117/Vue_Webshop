import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import {createPinia} from "pinia";
import router from './router.js';
import './index.css'
import eventBus from 'vue3-eventbus'
const pinia = createPinia()
const app = createApp(App);

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
// Install the store instance as a plugin
app.use(store);
app.use(router);
app.use(eventBus);
app.use(pinia);
app.use(createPinia);
app.mount('#app');