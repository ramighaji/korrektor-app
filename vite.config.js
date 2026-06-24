import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite konfiqurasiyası yalnız JavaScript olmalıdır
export default defineConfig({
  plugins: [react()],
})
