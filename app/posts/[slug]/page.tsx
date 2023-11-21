"use client";

import { allPosts } from "contentlayer/generated";

export default function Page({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    return <h1>{post.title}</h1>;
}
