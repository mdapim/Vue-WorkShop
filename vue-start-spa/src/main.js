import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/Events";
import $pages from "./data";
import { router } from "./routes";

const app = createApp(App);

app.use(router);

// this allows us to add properties to every component in the application
// app.config.globalProperties.$bus = $bus;
// app.config.globalProperties.$pages = $pages;

// this provides pages to app component and all its children, provides a globally accessible object
// this isn't automatic need to go into components and inject it, see page viewer
app.provide("$pages", $pages);
app.provide("$bus", $bus);

app.mount("#app");

// can specify create app this way
// createApp(App).mount("#app");
