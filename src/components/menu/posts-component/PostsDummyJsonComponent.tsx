import { useEffect, useState } from "react";
import type { IDJPost } from "../../../model/dummyjson/IDJPost";
import { postService } from "../../../services/api.service";
import { PostDummyJsonComponent } from "./PostDummyJsonComponent";

export const PostsDummyJsonComponent = () => {
    const [posts, setPosts] = useState<IDJPost[]>([]);

    useEffect(() => {
        postService.getAllDummyJSON().then((all: IDJPost[]) => {
            setPosts(all);
        });
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostDummyJsonComponent item={post} key={post.id} />)
            }
        </div>
    );
};