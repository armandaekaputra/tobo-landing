import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Ganti sesuai domain final sebelum deploy
  site: 'https://renovasi.tobointerior.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
