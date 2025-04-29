const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("rollup-plugin-babel");
const terser = require("@rollup/plugin-terser");
const postcss = require("rollup-plugin-postcss");

const config = {
    input: "src/index.js",
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            banner: `"use client";\n`,
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            banner: `"use client";\n`,
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
        }),
        postcss({
            extract: "index.css",
            minimize: true,
        }),
        terser({ compress: { directives: false } }),
    ],
    external: ["react", "react-dom"],
};

module.exports = config;
