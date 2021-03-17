import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default [{
  input: 'src/DNS.js',
  output: {
    file: 'dist/DNS.js',
    format: 'cjs'
  },
  plugins: [
    resolve({ preferBuiltins: false }),
    commonjs(),
    json(),
    nodePolyfills()
  ]
}];