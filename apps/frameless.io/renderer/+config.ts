import type { Config } from 'vike/types';

// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: false,
  // https://vike.dev/meta
  meta: {
    // Define new setting 'title'
    title: {
      env: { server: true, client: false },
    },
    // Define new setting 'description'
    description: {
      env: { server: true },
    },
  },
  hydrationCanBeAborted: true,
} satisfies Config;
