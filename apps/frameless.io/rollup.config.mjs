import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import purgecss from "@fullhuman/postcss-purgecss";
import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "src/index.scss",
    output: {
      dir: "./dist",
      compact: true,
    },
    plugins: [
      // Transform SCSS to one CSS file with only used CSS
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
      // Copy html file to enable replacing of the scss import to the minified css file created by the previous step
      // This enables us to have the html plugin automatically build a hash for the minified css file in the next step
      copy({
        targets: [
          {
            src: "./src/index.html",
            dest: "./tmp",
            transform: (contents) =>
              contents.toString().replace("./index.scss", "../dist/index.css"),
          },
        ],
      }),
    ],
  },
  // Use the html file with a reference to the minified css
  // And create a hashed CSS reference to ensure new versions will reach all users regardless of cache settings
  {
    input: "./tmp/index.html",
    output: { dir: "./dist" },
    plugins: [html()],
  },
];
