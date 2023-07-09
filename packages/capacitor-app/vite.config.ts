import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ]
});
