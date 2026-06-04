import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/serhat-yapi-react/',
  plugins: [react(), tailwindcss()]
})
