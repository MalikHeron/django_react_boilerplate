import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases'

export default defineConfig({
    build: {
        outDir: 'build',
    },
   plugins: [
      react(),
      ViteAliases({
         createGlobalAlias: false,
         useConfig: true,
         deep: false,
         prefix: '@'
      }),
   ],
   css: {
      postcss: './postcss.config.js',
   },
});
