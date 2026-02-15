import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react' // ou vue, selon votre framework

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Ajouter cette ligne
    },
  },
  server: {
    host: true, // ✅ Écoute sur toutes les interfaces
    port: 5173,
    allowedHosts: [
      'frontend-gmj9.onrender.com', // ✅ Votre domaine Render
      '.onrender.com', // ✅ Tous les sous-domaines Render
    ],
    // ✅ Optionnel : Configuration CORS si nécessaire
    cors: true,
  },
})