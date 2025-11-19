# SRCL

- Global styles: import 'srcl/global.css' once in your app (recommended).
- Fonts are self-hosted and bundled via the CSS pipeline; no extra configuration is needed.

## Using SRCL via subpath exports

SRCL can be consumed as a library using subpath exports so you can import individual components directly without app-level aliases.

Examples:
- import Grid from 'srcl/components/Grid'
- import Row from 'srcl/components/Row'
- import Card from 'srcl/components/Card'
- import Button from 'srcl/components/Button'
- import Text from 'srcl/components/Text'
- import Badge from 'srcl/components/Badge'

Global styles:
- Import once in your app entry: `import 'srcl/global.css'` (build output with fonts baked in)

Notes:
- Tree-shaking: Subpath imports ensure you only bundle what you use.
- Types: TypeScript declaration files are provided for components and common utilities; editors should auto-complete props.
- Peer dependencies: React and React DOM are expected to be provided by the consuming app.
- Styles: Components use CSS modules with native CSS nesting. Most modern Vite-based projects work out of the box.
- Fonts: The library build copies fonts into `dist/assets/fonts` and includes them in the compiled global.css automatically.

Troubleshooting:
- If your bundler cannot resolve imports like 'srcl/components/Button', ensure that your installed SRCL version exposes subpath exports and your bundler supports them (Node resolution with "exports" field).
- If you see CSS nesting errors in older browsers, add `postcss-nesting` to your build pipeline.


**[Live Demo](https://sacred.computer)**

SRCL is an open-source React component and style repository that helps you build web applications, desktop applications, and static websites with terminal aesthetics. Its modular, easy-to-use components emphasize precise monospace character spacing and line heights, enabling you to quickly copy and paste implementations while maintaining a clean, efficient codebase.

```sh
npm install
npm run dev
```

Go to `http://localhost:10000` in your browser of choice.

We use [Vercel](https://vercel.com/home) for hosting.

## Storybook

SRCL uses [Storybook](https://storybook.js.org/) for component documentation and interactive development. All components have stories that demonstrate their usage, variants, and real-world examples.

### Running Storybook

```sh
npm run storybook
```

This will start Storybook at `http://localhost:6006`.

### What's in Storybook

- **Interactive Examples**: Every component has working examples you can interact with
- **Real Data**: Stories use actual data from the app (animals, principles, dialogues) for realistic demonstrations
- **Theme & Font Switching**: Use the toolbar to preview components in all 18 themes and 30 monospace fonts
- **Working Hotkeys**: Keyboard shortcuts are fully functional in stories - press the keys to test them
- **Props Documentation**: Auto-generated documentation for all component props and TypeScript types
- **Organized by Category**: Components grouped into Forms, Interactive, Data Display, Layout, Games, and Utility

### Key Story Examples

- **Modal System** (`Components/Interactive/Modals`) - Comprehensive showcase of all modal types (alerts, forms, games)
- **ActionButton** (`Components/Interactive/ActionButton`) - Working hotkey examples (⌘+S, ⌘+N, ⌘+O)
- **Global Navigation** (`Components/Utility/Providers`) - Demo of arrow key navigation and Enter/Space activation
- **DataTable** (`Components/Data Display/DataTable`) - Live stock ticker with animal-themed companies
- **TextArea** (`Components/Forms/TextArea`) - Auto-playing typewriter effect with literary quotes

### Building Storybook

```sh
npm run build:storybook
```

This creates a static build in `dist/storybook` that can be deployed anywhere.

### Scripts (Optional)

If you need to run node script without running the server, use this example to get started

```sh
npm run script example
```

### Contact

If you have questions ping me on Twitter, [@wwwjim](https://www.twitter.com/wwwjim). Or you can ping [@internetxstudio](https://x.com/internetxstudio).
