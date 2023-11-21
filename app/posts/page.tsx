import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

export default async function Posts() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
    return (
        <div>
            <Header />
            <main className="w-1/2 px-10 pt-20 m-auto">
                <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
                    {posts.map((post, idx) => (
                        <PostCard key={idx} {...post} />
                    ))}
                </div>
            </main>
        </div>
    );
}
