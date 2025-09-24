# SRCL

Terminal-first React component library designed for modern bundlers. SRCL now ships as a tree-shakeable package that works out of the box with Vite, Bun, and any other ESM-aware toolchain.

## Installation

Install with the package manager of your choice:

```sh
npm install srcl
```

```sh
bun add srcl
```

## Usage

Import components and the generated stylesheet wherever you compose your UI.

```tsx
import 'srcl/style.css';
import { Button, Providers, SidebarLayout } from 'srcl';

export default function Example() {
  return (
    <Providers>
      <SidebarLayout>
        <Button variant="primary">Launch</Button>
      </SidebarLayout>
    </Providers>
  );
}
```

All components are exported as named exports. Utility helpers (such as `cn`, `useThemeTwoColor`, and halftone helpers) are available from the same entry point. Global styles are bundled into `style.css`; importing it once at the root of your application will apply the terminal theming variables expected by the components.

### Hotkey helpers

Keyboard shortcuts are available via the bundled hotkeys utilities. Wrap your app in the provider and register handlers with the included hooks:

```tsx
import { HotkeysProvider, useHotkeys } from 'srcl';

export default function Demo() {
  useHotkeys('meta+k', () => console.log('Launch command palette'));

  return <HotkeysProvider>{/* your app */}</HotkeysProvider>;
}
```

## Local development

```sh
npm install
npm run dev
```

The development server exposes the original demo application on [http://localhost:10000](http://localhost:10000).

### Build

Create the distributable library output:

```sh
npm run build
```

This command produces ESM and CJS bundles in `dist/` together with type declarations under `dist/types/`.

### Lint & type-check

```sh
npm run lint
npm run typecheck
```

## Contact

Ping [@wwwjim](https://www.twitter.com/wwwjim) or [@internetxstudio](https://x.com/internetxstudio) with questions.
