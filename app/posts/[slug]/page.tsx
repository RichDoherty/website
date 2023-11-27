import Header from "components/Header";
import Footer from "components/Footer";
import ProgressBar from "components/ProgressBar";
import TableOfContents from "components/TableOfContents";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { components } from "components/MdxComponents";

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function Page({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <>
            <Header />
            <ProgressBar />
            <h1 className="w-4/5 pt-24 pb-10 m-auto text-5xl text-transparent lg:w-1/2 md:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-bl from-primary to-secondary">
                {post.title}
            </h1>
            <article className="w-4/5 mx-auto lg:w-1/2">
                <p className="py-3 m-auto text-base">
                    {post.author} |{" "}
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </p>
                {/* <TableOfContents /> */}
                <MDXContent components={{ ...components }} />
            </article>
            <Footer />
        </>
    );
}
