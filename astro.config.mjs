import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tslbelajarislam.id',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});

