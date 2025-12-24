import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
          },
          esModule: false,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [path.resolve(__dirname, '..', '..', '..', 'src')],
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
            includePaths: [path.resolve(__dirname, '..', '..', '..', 'src')],
          },
        },
      },
    ],
  };

  return [moduleScss, globalScss];
}
