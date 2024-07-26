import { createApp } from 'vue'
// import './styles/tailwind.css';
// import './styles/index.less';
import './style.css'
// import { setupNaiveDiscreteApi, setupNaive, setupDirectives } from '@/plugins';
import App from './App.vue';
// import router, { setupRouter } from './router';
import { pinia } from '@/store';
console.log(pinia);

(async() => {
  const app = createApp(App)

  app.use(pinia)
  
  app.mount('#app')
})()
