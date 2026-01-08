import { useEffect, useState } from "react";
import type { IJPPost } from "../../../model/jsonplaceholder/IJPPost";
import { postService } from "../../../services/api.service";
import { PostJSONPlaceholderComponent } from "./PostJSONPlaceholderComponent";

export const PostsJSONPlaceholderComponent = () => {
    const [posts, setPosts] = useState<IJPPost[]>([]);

    useEffect(() => {
        postService.getAllJSONPlaceholder().then((all: IJPPost[]) => {
            setPosts(all);
        });
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostJSONPlaceholderComponent item={post} key={post.id} />)
            }
        </div>
    );
};