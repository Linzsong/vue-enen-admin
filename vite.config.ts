import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path';

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
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
    dedupe: ['vue'],
  },
  plugins: [vue()],
})
