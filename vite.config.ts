import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
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
