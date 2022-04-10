import Vue from "vue";
import App from "./App.vue";

import LypUI from "./packages";
Vue.use(LypUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
