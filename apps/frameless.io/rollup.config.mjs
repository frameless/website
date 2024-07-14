import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import copy from "rollup-plugin-copy";
import gzipPlugin from "rollup-plugin-gzip";
import purgecss from "@fullhuman/postcss-purgecss";

export default [
  {
    input: "src/index.scss",
    output: {
      dir: "./dist",
      sourcemap: false,
      format: "esm",
      compact: true,
    },
    plugins: [
      postcss({
        extensions: [".css", ".scss"],
        minimize: true,
        plugins: [
          discardDuplicates(),
          purgecss({
            content: ["./src/index.html"],
          }),
        ],
        extract: true,
      }),
      copy({
        targets: [
          { src: "src/index.html", dest: "dist" },
          { src: "src/weverssingel.svg", dest: "dist" },
        ],
      }),
      gzipPlugin(),
    ],
  },
];
