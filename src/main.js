import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import { firebaseApp } from "./firebase";

const app = createApp(App);

app.use(router);

// Provide the Auth instance to the app
import { VueFire, VueFireAuth } from "vuefire";
app.use(VueFire, {
  firebaseApp,
  modules: [
    // ... other modules
    VueFireAuth(),
  ],
});

app.mount("#app");
