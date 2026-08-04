import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Ganti sesuai domain final sebelum deploy
  site: 'https://landing.tobointerior.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
