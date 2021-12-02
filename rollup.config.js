import nodePolyfills from 'rollup-plugin-polyfill-node';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'Imglab',
      file: 'dist/imglab.umd.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      nodePolyfills({ include: 'path' }),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', exports: 'default', sourcemap: true },
      { file: pkg.module, format: 'esm', exports: 'default', sourcemap: true }
    ],
    external: ['path', 'crypto']
  }
];
