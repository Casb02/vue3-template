import {createApp} from "vue";
import "@/assets/index.css";
import router from "@/router";
import App from "./App.vue";
import {createPinia} from "pinia";
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";

const pinia = createPinia();
const app = createApp(App);

//Setup the app
app.use(autoAnimatePlugin)
app.use(router)
app.use(pinia)
app.mount('#app')
