import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@root': path.resolve(__dirname, '../'),
        '@system': path.resolve(__dirname, '../system'),
        '@demos': path.resolve(__dirname, '../demos'),
        '@common': path.resolve(__dirname, '../common'),
        '@data': path.resolve(__dirname, '../data'),
        '@components': path.resolve(__dirname, '../components'),
        '@lib': path.resolve(__dirname, '../lib'),
        '@pages': path.resolve(__dirname, '../pages'),
        '@modules': path.resolve(__dirname, '../modules'),
      };
    }
    return config;
  },
};

export default config;
