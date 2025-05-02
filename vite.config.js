import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'voice-AI1' with your actual repo name
export default defineConfig({
  plugins: [react()],
  base: '/Health-Software/' // important for GitHub Pages
})
