import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { postActions } from "../redux/slices/PostSlice";
import type { IPost } from "../models/IPost";
import { PostItem } from "../components/PostItem";




export const PostsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <>
            {posts.map((post: IPost) => (
                <PostItem key={post.id} post={post} />
            ))}
        </>
    )
}