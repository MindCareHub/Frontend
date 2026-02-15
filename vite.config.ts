import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ Écoute sur toutes les interfaces
    port: 5173,
allowedHosts: [
      'frontend-gmj9.onrender.com', // ✅ Votre domaine Render
      '.onrender.com', // ✅ Tous les sous-domaines Render
    ],
    // ✅ Optionnel : Configuration CORS si nécessaire
    cors: true,  },
})