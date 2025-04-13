import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/front_end_mentor_chall_5/', // 👈 this MUST match your GitHub repo name

  
})
