import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

const PostCard = (post: Post) => {
    return (
        <div className="p-4 transition-all duration-300 ease-out border rounded-lg border-neutral-900/5 dark:border-neutral-300/5 hover:shadow-md hover:shadow-neutral-600/20">
            <Link href={`/posts/${post.slug}`}>
                <p className="text-sm">
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </p>
                <h3 className="pt-2 my-1 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-primary to-secondary">
                    {post.title}
                </h3>
                <p>{post.description}</p>
            </Link>
        </div>
    );
};

export default PostCard;
