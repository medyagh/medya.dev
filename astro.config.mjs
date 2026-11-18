// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://medya.dev',
  redirects: {
    '/awards': {
      status: 301,
      destination: '/achievements',
    },
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});