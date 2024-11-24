// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://lexingtonthemes.com',
  compressHTML: true,
  integrations: [sitemap(), tailwind(), react()]
});