const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const terser = require('@rollup/plugin-terser');

const config = {
  input: 'src/index.jsx',  // Punto de entrada de tu librería
  output: [
    {
      file: 'dist/index.cjs.js',  // Archivo CommonJS
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',  // Archivo ESModules
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(), 
    commonjs(),
    babel({
      exclude: 'node_modules/**', 
      presets: ['@babel/preset-react'],
    }),
    terser(),            // Minificar el código para producción
  ],
};

module.exports = config;