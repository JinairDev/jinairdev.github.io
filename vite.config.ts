import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { quasar } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    eslint(),
    quasar({ sassVariables: 'assets/styles/quasar.variables.sass' }),
  ],
});
