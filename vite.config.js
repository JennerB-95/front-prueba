import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['v-content'].includes(tag),
      }
    }
  })],
  resolve: {
    alias: {
        "@": path.resolve(__dirname, "./src"),
    },
  },
})
