import type { RouteRecordRaw } from 'vue-router';
import { isNavigationFailure, Router } from 'vue-router';
import { useUser } from '@/store/modules/user';
import { useAsyncRoute } from '@/store/modules/asyncRoute';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import { storage } from '@/utils/Storage';
import { PageEnum } from '@/enums/pageEnum';
import { ErrorPageRoute } from '@/router/base';

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const whitePathList = [LOGIN_PATH]; // no redirect whitelist

export const createRouterGuards = (router: Router) => {
  const userStore = useUser();
  console.log(userStore);

  const asyncRouteStore = useAsyncRoute();
  console.log(asyncRouteStore);

  router.beforeEach(async (to, from, next) => {
    window['$loading'] && Loading.start(); // 进度条

    if (from.path === LOGIN_PATH && to.name === 'errorPage') {
      // 从白名单来，去 错误页面，跳转到首页
      next(PageEnum.BASE_HOME);
      return;
    }

    if (whitePathList.includes(to.path as PageEnum)) {
      next();
      return;
    }

    const token = storage.get(ACCESS_TOKEN);

    if (!token) {
      // You can access without permissions. You need to set the routing meta.ignoreAuth to true
      if (to.meta.ignoreAuth) {
        next();
        return;
      }
      // redirect login page
      const redirectData: {
        path: string;
        replace: boolean;
        query?: Recordable<string>;
      } = {
        path: LOGIN_PATH,
        replace: true
      };
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path
        };
      }
      next(redirectData);
      return;
    }

    if (asyncRouteStore.getIsDynamicRouteAdded) {
      next();
      return;
    }

    const userInfo = await userStore.getInfo();

    const routes = await asyncRouteStore.generateRoutes(userInfo);

    // 动态添加可访问路由表
    routes.forEach(item => {
      router.addRoute(item as unknown as RouteRecordRaw);
    }); //添加404
    const isErrorPage = router.getRoutes().findIndex(item => item.name === ErrorPageRoute.name);
    if (isErrorPage === -1) {
      router.addRoute(ErrorPageRoute as unknown as RouteRecordRaw);
    }

    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    asyncRouteStore.setDynamicRouteAdded(true);
    next(nextData);
    Loading && Loading.finish();
  });

  router.afterEach((to, _, failure) => {});

  router.onError(error => {
    console.log(error, '路由错误');
  });
};
