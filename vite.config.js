import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //change port for product
  preview: {
    port: 5001
  },
  //change post for local
  server: {
    port: 5000,
  }
})
