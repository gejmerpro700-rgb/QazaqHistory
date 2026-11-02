import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative asset URLs let the app run from a GitHub Pages project URL.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
