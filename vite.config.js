import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/hesafredrik/' : '/',
  plugins: [vue(), vueDevTools()]
});
