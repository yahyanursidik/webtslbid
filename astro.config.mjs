import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tslbelajarislam.id',
  output: 'static',
  build: {
    format: 'directory'
  }
});
