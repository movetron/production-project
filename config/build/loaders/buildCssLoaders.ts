import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const srcPath = path.resolve(process.cwd(), 'src');

export function buildCssLoader(isDev: boolean) {
  const moduleScss = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
            exportLocalsConvention: 'asIs', // отключение camelCase для классов стилей
          },
          esModule: false,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [srcPath],
          },
        },
      },
    ],
  };

  const globalScss = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [srcPath],
          },
        },
      },
    ],
  };

  return [moduleScss, globalScss];
}
