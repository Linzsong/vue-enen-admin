import { createApp } from 'vue'
// import './styles/tailwind.css';
// import './styles/index.less';
import './style.css'
import { setupNaiveDiscreteApi, setupNaive, setupDirectives } from '@/plugins';
import App from './App.vue';
import router from './router';
import { pinia } from '@/store';
console.log(pinia);

(async() => {
  const app = createApp(App)

  setupNaive(app);

  app.use(pinia)
  app.use(router);
  
  app.mount('#app')
})()
