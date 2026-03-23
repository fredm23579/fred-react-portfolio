/**
 * Vitest global test setup.
 *
 * Extends Vitest's `expect` with jest-dom DOM matchers such as:
 *   toBeInTheDocument(), toHaveTextContent(), toBeVisible(), etc.
 *
 * This file is referenced by vite.config.js → test.setupFiles.
 */
import '@testing-library/jest-dom/vitest';
