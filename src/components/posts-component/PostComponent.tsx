import type { IPost } from "../../models/IPost";



interface PostComponentProps {
    post: IPost
}


export const PostComponent = ({ post }: PostComponentProps) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.userId}</p>
        </div>
    )
}