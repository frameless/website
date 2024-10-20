import postcss from "rollup-plugin-postcss";
import { Comment } from "postcss";
import discardDuplicates from "postcss-discard-duplicates";

const isLicenseComment = (str) => /@license/.test(str);

const removeComments = ({ keepLicense = false }) => {
  return (css) => {
    css.walk((node) => {
      if (node.type === "comment") {
        if (keepLicense && isLicenseComment(node.text)) {
          return;
        }
        node.remove();
      }
    });
  };
};

const mergeLicenseComments = () => {
  return (css) => {
    // Add all licenses to a `Map`, to deduplicate the license declarations.
    const licenses = new Map();
    css.walkComments((node) => {
      if (isLicenseComment(node.text)) {
        node.remove();

        if (!licenses.has(node.text)) {
          licenses.set(
            node.text,
            new Comment({
              text: node.text,
              raws: {
                left: node.raws.left,
                right: node.raws.right,
              },
            }),
          );
        }
      }
    });
    licenses.forEach((license) => {
      css.prepend(license);
    });
  };
};

export default [
  {
    input: "index.scss",
    output: {
      dir: "./dist",
      sourcemap: false,
      format: "esm",
      compact: true,
    },
    plugins: [
      postcss({
        extensions: [".css", ".scss"],
        plugins: [
          discardDuplicates(),
          mergeLicenseComments(),
          removeComments({
            keepLicense: true,
          }),
        ],
        extract: true,
      }),
    ],
  },
];
