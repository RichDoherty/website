import nextMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { withContentlayer } from "next-contentlayer";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    devIndicators: {
        buildActivity: false,
    },
};

const options = {
    // Use one of Shiki's packaged themes
    theme: "material-darker",
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
        }
    },
    // Feel free to add classNames that suit your docs
    onVisitHighlightedLine(node) {
        node.properties.className.push("line--highlighted");
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
    },
};

const withMDX = nextMDX({
    // By default only the .mdx extension is supported.
    extension: /\.mdx?$/,
    options: {
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
            [rehypePrettyCode, options],
            rehypeSlug,
            rehypeAutolinkHeadings,
        ],
    },
});

export default withContentlayer(withMDX(nextConfig));
