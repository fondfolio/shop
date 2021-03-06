import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import hydrogen from '@shopify/h2-internal/plugin';
import shopifyConfig from './shopify.config';

const config = defineConfig({
  plugins: [hydrogen(shopifyConfig), reactRefresh()],

  // TODO: Remove when Hydrogen is released publicly.
  resolve: {
    alias: {
      '@shopify/hydrogen': '@shopify/h2-internal',

      lib: '/src/lib',
      /**
       * For some reason, when building in a worker, Vite always
       * pulls the client version instead of the server version of this
       * dependency. We intentially force it to load the server version here,
       * without references to `window`.
       */
      'html-dom-parser': process.env.WORKER
        ? 'html-dom-parser/lib/server/html-to-dom'
        : 'html-dom-parser',
    },
  },

  build: {
    sourcemap: true,
  },

  // TODO: Move this to the @shopify/hydrogen plugin
  ssr: {
    external: ['isomorphic-dompurify'],
    target: process.env.WORKER ? 'webworker' : 'node',

    /**
     * These tell Vite to bundle these dependencies of @shopify/hydrogen in the file
     * rather than require() them. It seems odd that we have to do this.
     * TODO: Determine if this is a bug and file it.
     */
    noExternal: process.env.WORKER
      ? [
          'react',
          'react-router-dom',
          '@google-pay/button-react',
          'react-dom',
          'react-ssr-prepass',
          'focus-trap-react',
          'html-react-parser',
          'html-dom-parser',
          'react-helmet-async',
          'graphql-tag',
          '@cloudflare/kv-asset-handler',
          '@shopify/react-hooks',
          '@shopify/css-utilities',
          'react-svg',
        ]
      : [],
  },

  // TODO: Move this to the @shopify/hydrogen plugin
  optimizeDeps: {
    /**
     * Additionally, the following dependencies have trouble loading the
     * correct version of the dependency (server vs client). This tells Vite to take the
     * server versions and optimize them for ESM.
     */
    include: [
      'html-dom-parser',
      'html-react-parser',
      'focus-trap-react',
      'react-helmet-async',
    ],
  },
});

// https://vitejs.dev/config/
export default config;
