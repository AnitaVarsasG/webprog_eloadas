// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        javascript: resolve(__dirname, "javascript.html"),
        react: resolve(__dirname, "react.html"),
        spa: resolve(__dirname, "spa.html"),
        fetchapi: resolve(__dirname, "fetchapi.html"),
        axios: resolve(__dirname, "axios.html")
      },
    },
  },
});