import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

const config: UserConfig = {
  plugins: [compression({ algorithm: 'brotliCompress' }), vike({ prerender: true }), mdx(), react()],
};

export default config;
