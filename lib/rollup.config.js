// rollup.config.js
import babel from "rollup-plugin-babel";

export default {
  external: ["node-fetch"],
  input: "src/main.js",
  output: {
    file: "dist/main.js",
    format: "es",
    name: "halSDK",
  },
  plugins: [
    babel({
      exclude: "node_modules/**", // only transpile our source code
    }),
  ],
};
