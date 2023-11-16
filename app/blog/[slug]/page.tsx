"use client";

import dynamic from "next/dynamic";

export default function Page({ params }: { params: { slug: string } }) {
    const Post = dynamic(
        () => import("/content/posts/" + params.slug + ".mdx")
    );
    return <Post />;
}
