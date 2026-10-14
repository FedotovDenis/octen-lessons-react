import type { FC } from "react";
import type { IPost } from "../models/IPost";



type PostItemPropType = {
    post: IPost;
};

export const PostItem: FC<PostItemPropType> = ({ post }) => {
    return (
        <div className="post-card">
            <h4>Пости: {post.title}</h4>
            <p>Текст постів: {post.body}</p>
        </div>
    );
};
