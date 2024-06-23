import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.MODE === 'production' ? 'https://example.com' : 'http://localhost:2000',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  compressHTML: false,
  build: {
    format: 'preserve',
    inlineStylesheets: 'never'
  },
  server: { open: true },
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
      include: ['**/react/*']
    }),
    vue({})
  ]
});
