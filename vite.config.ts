import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Si vas a subirlo a una carpeta llamada imagine-asesoramiento, deja la base. 
  // Si es para verlo en tu PC, puedes poner solo '/'
  base: '/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
});
