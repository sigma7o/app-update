import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Defines the Vite configuration
// https://vitejs.dev/config/
export default defineConfig({
  // Array of plugins for Vite
  plugins: [
    react(), // Vite plugin for React
    tailwindcss(), // Vite plugin for Tailwind CSS
  ],
});