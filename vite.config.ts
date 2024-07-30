import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    port: 1688
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(process.cwd(), '.', 'src') + '/'
      }
    ],
    // alias: {
    //   '@': './src'
    // },
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
    dedupe: ['vue']
  },
  plugins: [
    vue(),
    eslintPlugin({
      // 是否在浏览器控制台显示ESLint错误
      include: ['src/**/*.{js,ts,jsx,tsx,vue}'], // 指定要检查的文件模式
      exclude: ['node_modules', 'dist'], // 排除不需要检查的文件夹
      cache: false // 禁用缓存
    })
  ]
});
