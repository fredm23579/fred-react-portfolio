import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite 5 configuration for fred-react-portfolio.
 *
 * Notable choices:
 * - plugin-react `include` pattern: allows JSX in .js files so components
 *   don't need to be renamed .jsx (avoids a large refactor).
 * - build.sourcemap: enables source maps in production for easier debugging.
 * - manualChunks: splits vendor and animation libs into separate cache-busted
 *   chunks for better long-term browser caching.
 * - test block: Vitest 2 shares this Vite pipeline (no separate config needed).
 */
export default defineConfig({
  plugins: [
    react({
      // Allow JSX syntax inside .js files without renaming them .jsx
      include: /\.(jsx|js)$/,
    }),
  ],

  server: {
    port: 3000,
    open: true,
  },

  // Required so Rollup/esbuild (used by vite build) treat .js files as JSX.
  // The plugin `include` option covers only the Vite dev transform pipeline;
  // this esbuild config covers the production build path.
  esbuild: {
    // Apply JSX loader to all JS/TS variants so .js component files compile
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      // Ensure the pre-bundling step also understands JSX in .js files
      loader: { '.js': 'jsx' },
    },
  },

  build: {
    outDir: 'dist',
    // Emit source maps so production stack traces map to real source lines
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libs — change rarely, benefit from a stable cache entry
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion is large (~110 KB gz); isolating it prevents busting
          // the vendor chunk on every animation change
          animations: ['framer-motion'],
        },
      },
    },
  },

  // ── Vitest 2 ─────────────────────────────────────────────────────────────
  test: {
    // happy-dom is a fast, lightweight DOM (faster than jsdom for unit tests)
    environment: 'happy-dom',
    // Runs before every test file — extends expect() with jest-dom matchers
    setupFiles: './src/setupTests.js',
    // Expose describe / it / expect globally so tests don't need to import them
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      exclude: [
        'node_modules/',
        'src/main.jsx',
        'src/reportWebVitals.js',
        '**/*.test.{js,jsx}',
      ],
    },
  },
});
