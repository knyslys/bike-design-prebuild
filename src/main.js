import { createApp } from "vue";
import App from "./App.vue";
import { plugin as Slicksort } from "vue-slicksort";
import { createPinia } from "pinia";
const app = createApp(App);
app.use(Slicksort);
app.use(createPinia());
app.mount("#app");
