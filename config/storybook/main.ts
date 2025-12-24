import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: '@storybook/react-webpack5',

  webpackFinal: async (config) => {
    // 🔹 alias из tsconfig (shared/..., entities/...)
    config.resolve!.plugins = [...(config.resolve!.plugins || []), new TsconfigPathsPlugin()];

    // config.module!.rules!.push({
    //   test: /\.module\.scss$/,
    //   use: [
    //     'style-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         modules: {
    //           auto: true,
    //           localIdentName: '[local]__[hash:base64:5]',
    //         },
    //       },
    //     },
    //     'sass-loader',
    //   ],
    // });

    // // обычный scss (если нужен)
    // config.module!.rules!.push({
    //   test: /\.scss$/,
    //   exclude: /\.module\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    // });

    return config;
  },
};

export default config;
