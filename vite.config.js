import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Configure React JSX handling and Tailwind CSS processing through Vite plugins.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
