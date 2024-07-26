import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
console.log(resolve('./src/'));
console.log(resolve(process.cwd(), '.', 'src') + '/');


export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        // resolve(process.cwd(), '.', dir);
        replacement: resolve(process.cwd(), '.', 'src') + '/',
      },
    ],
    // alias: {
    //   '@': './src'
    // },
    dedupe: ['vue'],
  },
  plugins: [vue()],
})
