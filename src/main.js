import Vue from "vue";
import App from "./App.vue";
import router from "./router";


Vue.config.productionTip = false;

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
Vue.component('perfil', {
  props: {
    contact: {
      id: Number,
      name: String,
      number: Number,
      avatar: String,
      email: String,
    },
  },
  template: `
    <div class="perfil">
    <div class="profileIndentify">
      <img :src="contact.avatar" />
      <br />
      <strong>{{ contact.name }}</strong>
    </div>
    <p>Phone Number:{{ contact.number }}</p>
    <p>Email: {{ contact.email }}</p>
  </div>
    `

});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


