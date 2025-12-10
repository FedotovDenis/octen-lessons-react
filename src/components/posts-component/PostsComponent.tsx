import {useEffect, useState} from "react";
import type {IPostsModel} from "../../models/IPostsModel.ts";
import {loadPosts} from "../../service/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";


export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostsModel[]>([])

    useEffect(() => {
        loadPosts().then(value => setPosts(value))
    }, [])
    return(
        <div>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    )
}