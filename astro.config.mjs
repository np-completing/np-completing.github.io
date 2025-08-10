import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-username.github.io',
  integrations: [tailwind({ applyBaseStyles: true })],
  build: { format: 'directory' }
});