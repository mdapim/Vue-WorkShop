import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/Events";
const app = createApp(App);

// this allows us to add properties to every component in the application
app.config.globalProperties.$bus = $bus;

app.mount("#app");

// can specify create app this way
// createApp(App).mount("#app");
