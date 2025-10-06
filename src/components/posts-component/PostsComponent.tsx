import {useState} from "react";
import {useEffect} from "react";
import type {IPostsModel} from "../../models/IPostsModel.ts";
import {loadPosts} from "../../service/api.service.ts";
import {PostComponet} from "../post-component/PostComponet.tsx";
import './PostsComponent.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostsModel[]>([]);

    useEffect(() => {
        loadPosts().then(value => setPosts(value));
    }, [])

    return(
        <div id={'main'}>
            {
                posts.map(post => <PostComponet post={post} key={post.id}/> )
            }
        </div>
    )
}