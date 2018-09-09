import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home},
    { path: '/contact', name: 'Contact Us', component: Contact},
    { path: '/about', name: 'About Us', component: About},
  ],
});


