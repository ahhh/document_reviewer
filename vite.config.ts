import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Relative asset paths so the build works from any GitHub Pages sub-path.
  base: './',
  test: {
    include: ['tests/**/*.test.ts'],
    // The randomized corpus tests run hundreds of edit/export cycles; CI runners are slower.
    testTimeout: 60_000,
  },
});
