// import { ErrorPage, RedirectName, Layout } from '@/router/constant';
import { RouteRecordRaw } from 'vue-router';

export const RedirectName = 'Redirect';

export const ErrorPage = () => import('@/frame/exception/404.vue');

export const Layout = () => import('@/frame/layout/index.vue');

export const ParentLayout = () => import('@/frame/layout/parentLayout.vue');

// 404 on a page
export const ErrorPageRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: Layout,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'ErrorPageSon',
      component: ErrorPage,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true
      }
    }
  ]
};

export const RedirectRoute: RouteRecordRaw = {
  path: '/redirect',
  name: RedirectName,
  component: Layout,
  meta: {
    title: RedirectName,
    hideBreadcrumb: true
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: RedirectName,
      component: () => import('@/frame/redirect/index.vue'),
      meta: {
        title: RedirectName,
        hideBreadcrumb: true
      }
    }
  ]
};
