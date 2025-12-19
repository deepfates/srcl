/**
 * Build entry for optional bundled fonts.
 *
 * Importing this file emits `dist/src/global-fonts.css` plus the font binaries that
 * sheet references. Consumers can opt in with:
 *   import 'srcl/global-fonts.css'
 */
/// <reference types="vite/client" />

import '../global-fonts.css';

const fontAssets = import.meta.glob('./assets/fonts/**/*.{woff,woff2,ttf,otf,eot}', {
  import: 'default',
  eager: true,
});

void fontAssets;

export {};
