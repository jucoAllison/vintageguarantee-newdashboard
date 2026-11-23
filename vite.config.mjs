import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: { expandProps: 'end' } })],
  // server: { port: 3000, strictPort: true },
  build: { outDir: 'dist' },
  // test: { environment: 'jsdom', globals: true, setupFiles: ['./src/setupTests.js'] },
});
