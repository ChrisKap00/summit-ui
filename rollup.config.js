import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
// import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/index.js",
    output: [
      { file: "dist/index.js", format: "cjs" },
      { file: "dist/index.es.js", format: "es", exports: "named" },
      // { file: "dist/index.d.ts", format: "es" },
    ],
    plugins: [
      resolve(),
      // commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      external(),
      terser(),
      // dts(),
    ],
  },
];
