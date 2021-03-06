import Vue from "vue";
import App from "./App.vue";
import Splash from "@/plugin/splashPlugin";

Vue.use(Splash);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
