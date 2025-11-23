import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // если режим разработки dev используем style-loader если продкашн prod то MiniCssExtractPlugin
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            //чтобы в dev сборе были нормальные названия классов стилей, а в продакшн автосгенерированные названия
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]', // 8 - это восемь символов
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    //   include: path.resolve(__dirname, 'src'),
    exclude: /node_modules/,
  };
  return [typescriptLoader, cssLoader];
}
