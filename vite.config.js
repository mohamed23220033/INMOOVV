import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ROBOT/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
})
