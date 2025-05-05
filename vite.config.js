
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'voice-AI1' with your actual repo name
export default ({
  plugins: [react(), tailwindcss()],
  base: '/Health-Software/' // important for GitHub Pages
})
