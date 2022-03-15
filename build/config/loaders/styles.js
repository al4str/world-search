import { configGetLoaderPostcss } from './postcss.js';
import { configGetLoaderCSS } from './css.js';

/**
 * @param {BuildParams} params
 * */
export async function configGetLoaderStyles(params) {
  return {
    test: /\.css$/,
    use: [
      await configGetLoaderCSS(params),
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: !params.production,
        },
      },
      await configGetLoaderPostcss(params),
    ],
  };
}
