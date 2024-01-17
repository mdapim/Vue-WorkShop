import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";
import { createVuetify } from "vuetify";

const app = createApp(App);
const vuetify = createVuetify();

app.use(router);

app.mount("#app");
