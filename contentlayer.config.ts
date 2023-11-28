import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        date: {
            type: "date",
            description: "The date of the post",
            required: true,
        },
        author: {
            type: "string",
            description: "The author of the post",
            required: true,
        },
        description: {
            type: "string",
            description: "The description of the post",
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
    },
}));

const prettyCodeOptions = {
    // Use one of Shiki's packaged themes
    theme: {
        dark: "vitesse-dark",
        light: "vitesse-light",
    },
    onVisitLine(node: { children: string | any[] }) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
        }
    },
    // Feel free to add classNames that suit your docs
    onVisitHighlightedLine(node: { properties: { className: string[] } }) {
        node.properties.className.push("line--highlighted");
    },
    onVisitHighlightedWord(node: { properties: { className: string[] } }) {
        node.properties.className = ["word"];
    },
};

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm, remarkFrontmatter],
        rehypePlugins: [
            [rehypePrettyCode, prettyCodeOptions],
            rehypeSlug,
            rehypeAutolinkHeadings,
        ],
    },
});
