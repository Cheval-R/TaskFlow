import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), svgr()],
  server: {
    host: '0.0.0.0', // Bind to all available network interfaces
    port: 8080, // Default port, change if necessary
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      var: fileURLToPath(
        new URL('./src/shared/styles/_var.scss', import.meta.url),
      ),
    },
  },
})
