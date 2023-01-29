// src/index.ts
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
function src_default() {
  return {
    name: "iles-math",
    markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    }
  };
}
export {
  src_default as default
};
