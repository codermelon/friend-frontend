import {createApp} from 'vue'
import App from './App.vue'
import {Button, NavBar} from "vant";
import * as VueRouter from 'vue-router'
import {createRouter} from 'vue-router'
import routes from "./config/route.ts";

const app = createApp(App);
app.use(Button)
app.use(NavBar)




const router = createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

app.use(router)
app.mount('#app')
