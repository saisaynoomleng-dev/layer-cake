import { PostCard } from "@/components/PostCard"
import Title from "@/components/Title"
import { sanityFetch } from "@/sanity/lib/live"
import { POSTS_QUERY } from "@/sanity/lib/queries"
import Link from "next/link"


const PostPage = async () => {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <Title>Post Index</Title>

            <div className="flex flex-col gap-24 py-12">
                {posts.map(post => (
                    <PostCard key={post._id} {...post} />
                ))}
            </div>
            <hr />
            <Link href='/'>&larr; Return home</Link>
        </main>
    )
}

export default PostPage