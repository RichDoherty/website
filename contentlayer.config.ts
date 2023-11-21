import { defineDocumentType, makeSource } from "contentlayer/source-files";

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

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post],
});