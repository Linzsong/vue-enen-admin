import { createApp } from 'vue';
// import './styles/tailwind.css';
// import './styles/index.less';
import './style.css';
import { setupNaiveDiscreteApi, setupNaive, setupDirectives } from '@/plugins';
import App from './App.vue';
import router, { setupRouter } from './router';
import { pinia } from '@/store';
console.log(pinia);

(async () => {
  const app = createApp(App);

  setupNaive(app);

  app.use(pinia);

  // 路由加载
  setupRouter(app);

  // 路由准备就绪后挂载 APP 实例
  // https://router.vuejs.org/api/interfaces/router.html#isready
  await router.isReady();

  app.mount('#app');
})();
