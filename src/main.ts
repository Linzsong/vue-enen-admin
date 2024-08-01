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

  // 挂载状态管理
  app.use(pinia);

  setupNaive(app);
  // 挂载 naive-ui 脱离上下文的 Api
  setupNaiveDiscreteApi();

  // 注册全局自定义指令，如：v-permission权限指令
  setupDirectives(app);

  // 路由加载
  setupRouter(app);

  // 路由准备就绪后挂载 APP 实例
  // https://router.vuejs.org/api/interfaces/router.html#isready
  await router.isReady();

  app.mount('#app');
})();
