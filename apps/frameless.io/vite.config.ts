import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [
    vike({ prerender: true }),
    {
      enforce: 'pre',
      ...mdx(),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
};

export default config;
