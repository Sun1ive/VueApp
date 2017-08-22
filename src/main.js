import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

const routes = [
	{ path: "/about", component: About },
	{ path: "/contact", component: Contact },
	{ path: "/", component: Home }
];

const router = new VueRouter({
	routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


