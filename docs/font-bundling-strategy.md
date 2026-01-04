# Font bundling strategy

## Current state
- The global style entry (`src/global.ts`) eagerly registers every font binary under `src/assets/fonts`, forcing the build to emit all families even when only a subset is used.
- `global.css` contains `@font-face` blocks for many families (Monaspace variants, Commit Mono, Fira Code, Geist Mono, etc.), so the compiled CSS references the full set by default.
- The npm package currently ships the raw font assets (`src/assets/fonts`) because they are listed in the `files` field, adding hundreds of megabytes to the published tarball.
- The font directory is currently about 308 MB on disk.

## Goals and constraints
- Preserve the terminal-inspired aesthetic while letting consumers opt into only the families they need.
- Avoid breaking the existing `import 'srcl/global.css'` entry point for applications that rely on the current behavior.
- Keep the library build and Storybook working without extra configuration for contributors.
- Reduce published package size and install time by making font payloads optional.

## Proposed approach

### 1) Split base styles from font payloads
- Move font `@font-face` declarations into a dedicated stylesheet (e.g., `global-fonts.css`) and keep layout/reset styles in `global.css`.
- Add a new build entry (e.g., `src/global-fonts.ts`) that only emits the font stylesheet; document importing it as an opt-in for consumers who want bundled fonts.
- Update the default app shell (and Storybook) to import the new font sheet explicitly so local development stays unchanged.

### 2) Ship granular font packs
- Organize fonts into small packs by family (e.g., `fonts/monaspace.css`, `fonts/geist-mono.css`) and export them via `package.json` so bundlers can tree-shake unused packs.
- Restrict each pack to modern formats (`woff2` where available) and drop duplicate `ttf/otf` sources unless needed for specific browsers.
- Provide a short usage guide in the docs showing how to import a pack or rely on system monospace fallbacks to avoid pulling any fonts.

### 3) Adjust packaging to avoid shipping every binary by default
- Remove `src/assets/fonts` from the root `files` list and instead emit fonts only into the compiled `dist/assets` when a pack is built.
- Add a size check to CI (e.g., a script that fails if `dist/assets/fonts` exceeds a threshold) to prevent regressions.

### 4) Offer non-bundled font options
- Keep a "no fonts" path by documenting the class names/CSS variables that let consumers supply their own font stacks without importing our assets.
- For the app build, continue loading fonts via the existing local Google Fonts mirror where appropriate so demo deployments remain deterministic.

## Implementation status (this change)
- `global.css` now only carries tokens, resets, and layout styles; `global-fonts.css` holds all `@font-face` rules.
- New build entries (`src/global-fonts.ts` and `src/fonts/packs/*.ts`) emit a full bundle or individual family packs under `srcl/fonts/packs/*`.
- The app shell and Storybook load `global-fonts.css` explicitly to preserve the current look while keeping the base library font-optional.
- Raw font binaries are no longer listed in the published `files` array; a publish-time size check prevents regressing past a 150 MB font payload.

### Testing
- `npm run test:fonts` rebuilds the library and verifies that `global.css` stays font-free, all font packs emit bundled CSS (with inlined or emitted font URLs), and that font rules remain present across packs.
- `npm test` maps to the same check so CI or publishers can depend on it.

### Trade-offs
- Splitting fonts into packs adds a few more import choices for consumers but significantly shrinks the default package footprint.
- Dropping older formats may slightly reduce legacy browser support; we can gate that behind a separate "legacy" pack if needed.
- CI size checks are lightweight but may need periodic tuning as we add or remove families.
