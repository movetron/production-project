import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  //   config.resolve?.modules?.push(paths.src);
  //   config.resolve?.extensions?.push('.ts', '.tsx');

  // resolve
  config.resolve = config.resolve ?? {};
  config.resolve.modules = [...(config.resolve.modules || []), paths.src];
  config.resolve.extensions = [...(config.resolve.extensions || []), '.ts', '.tsx'];

  // module
  config.module = config.module ?? {};
  config.module.rules = config.module.rules ?? [];

  //eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule) => {
    if (
      rule &&
      typeof rule === 'object' &&
      'test' in rule &&
      rule.test instanceof RegExp &&
      rule.test.test('.svg')
    ) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  const cssLoaders = buildCssLoader(true);
  config.module?.rules?.push(...cssLoaders);

  return config;
};
