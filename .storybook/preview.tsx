import type { Preview } from '@storybook/react';
import Providers from '../components/Providers';
import '../global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    layout: 'fullscreen',
    backgrounds: {
      disabled: true,
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'theme-black-amber',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'theme-light', title: 'Highlight' },
          { value: 'theme-dark', title: 'Midnight' },
          { value: 'theme-black-amber', title: 'Sulfur (Default)' },
          { value: 'theme-black-green', title: 'Phosphor' },
          { value: 'theme-black-red', title: 'Neon' },
          { value: 'theme-blue', title: 'BSOD' },
          { value: 'theme-green', title: 'Matrix' },
          { value: 'theme-lcars', title: 'LCARS' },
          { value: 'theme-hologram', title: 'Hologram' },
          { value: 'theme-blade', title: '2049' },
          { value: 'theme-nostromo', title: 'Nostromo' },
          { value: 'theme-nerv', title: 'NERV' },
          { value: 'theme-akira', title: 'Neo-Tokyo' },
          { value: 'theme-win95', title: 'Windows 95' },
          { value: 'theme-macos9', title: 'Mac OS 9' },
          { value: 'theme-outrun', title: 'Outrun' },
          { value: 'theme-westworld', title: 'Westworld' },
          { value: 'theme-aperture', title: 'Aperture' },
        ],
        dynamicTitle: true,
      },
    },
    font: {
      name: 'Font',
      description: 'Global font for components',
      defaultValue: 'font-use-geist-mono',
      toolbar: {
        icon: 'typography',
        items: [
          { value: 'font-use-geist-mono', title: 'Geist Mono (Default)' },
          { value: 'font-use-berkeley-mono', title: 'Berkeley Mono' },
          { value: 'font-use-monaspace-neon', title: 'Monaspace Neon' },
          { value: 'font-use-monaspace-argon', title: 'Monaspace Argon' },
          { value: 'font-use-monaspace-krypton', title: 'Monaspace Krypton' },
          { value: 'font-use-monaspace-radon', title: 'Monaspace Radon' },
          { value: 'font-use-monaspace-xenon', title: 'Monaspace Xenon' },
          { value: 'font-use-jet-brains-mono', title: 'JetBrains Mono' },
          { value: 'font-use-fira-code', title: 'Fira Code' },
          { value: 'font-use-iosevka-term', title: 'Iosevka Term' },
          { value: 'font-use-commit-mono', title: 'Commit Mono' },
          { value: 'font-use-departure-mono', title: 'Departure Mono' },
          { value: 'font-use-fragment-mono', title: 'Fragment Mono' },
          { value: 'font-use-server-mono', title: 'Server Mono' },
          { value: 'font-use-sfmono-square', title: 'SF Mono Square' },
          { value: 'font-use-anonymous-pro', title: 'Anonymous Pro' },
          { value: 'font-use-chivo-mono', title: 'Chivo Mono' },
          { value: 'font-use-doto', title: 'Doto' },
          { value: 'font-use-share-tech-mono', title: 'Share Tech Mono' },
          { value: 'font-use-space-mono', title: 'Space Mono' },
          { value: 'font-use-syne-mono', title: 'Syne Mono' },
          { value: 'font-use-vt323', title: 'VT323' },
          { value: 'font-use-victor-mono', title: 'Victor Mono' },
          { value: 'font-use-workbench', title: 'Workbench' },
          { value: 'font-use-xanh-mono', title: 'Xanh Mono' },
          { value: 'font-use-julia-mono', title: 'Julia Mono' },
          { value: 'font-use-tt2020', title: 'TT2020' },
          { value: 'font-use-latin-modern-mono', title: 'Latin Modern Mono' },
          { value: 'font-use-serious-shanns', title: 'Serious Shanns' },
          { value: 'font-use-atkinson-hyperlegible-mono', title: 'Atkinson Hyperlegible Mono' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'theme-black-amber';
      const font = context.globals.font || 'font-use-geist-mono';

      return (
        <div
          className={`${theme} ${font}`}
          style={{
            background: 'var(--theme-background)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--theme-text)',
            padding: '2rem',
          }}
        >
          <Providers>
            <Story />
          </Providers>
        </div>
      );
    },
  ],
};

export default preview;
