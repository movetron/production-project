import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }]],
      },
    },
  };

  const cssLoader = buildCssLoader(isDev);
  // 2. Глобальные SCSS-файлы (без CSS Modules)
  const scssGlobalRule = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i, // исключаем CSS Modules
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader', // ← без modules!
      'sass-loader',
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    //   include: path.resolve(__dirname, 'src'),
    exclude: /node_modules/,
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, ...cssLoader, scssGlobalRule];
}
