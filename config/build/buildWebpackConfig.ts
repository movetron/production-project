//переносим всю конфигурацию которую делали в корне проекте

import path from 'path';
import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'bundle.js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      //конфигурируем лоудеры, для того чтобы обробатывать файлы, которые выходят за рамки js. например css, png и тд
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    //где в коде произошла ошибка, чтобы было удобней искать в сборке из кучи разных файлов
    devtool: isDev ? 'inline-source-map' : undefined, //source map нет в production а в dev есть
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
