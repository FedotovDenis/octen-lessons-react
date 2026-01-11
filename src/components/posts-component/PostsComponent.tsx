import { useState } from "react";
import type { IPost } from "../../models/IPost";
import { useEffect } from "react";
import { getPosts } from "../../services/posts.api.service";
import { PostComponent } from "./PostComponent";



export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts()
            .then(({ posts }) => { // Достаем список из ответа
                setPosts(posts);
            })
    }, [])

    return (
        <div>
            {
                posts.map((post: IPost) => <PostComponent key={post.id} post={post} />)
            }
        </div>
    )
}