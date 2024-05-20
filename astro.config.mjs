import { defineConfig } from 'astro/config';

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
  server: {
    port: 2000,
    open: true
  }
});
