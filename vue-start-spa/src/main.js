import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/Events";
import $pages from "./data";
import { router } from "./routes";

const app = createApp(App);

app.use(router);

// this allows us to add properties to every component in the application
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;

app.mount("#app");

// can specify create app this way
// createApp(App).mount("#app");
