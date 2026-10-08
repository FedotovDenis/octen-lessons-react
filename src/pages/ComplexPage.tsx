import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/CommentSlice";
import {userActions} from "../redux/slices/UserSlice";
import {postActions} from "../redux/slices/PostSlice";
import { UserItem } from '../components/UserItem';
import { PostItem } from '../components/PostItem';
import { CommentItem } from '../components/CommentItem';
import type { IUser } from '../models/IUser';
import type { IPost } from '../models/IPost';
import type { IComment } from '../models/IComments';


export const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {commentStoreSlice: {comments}, userStoreSlice: {users}, postStoreSlice: {posts}, } = useAppSelector((state) => state);
    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers());
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments());
        }
    }, []);

    return (
    <>
        {users.map((user: IUser) => (
            <div key={user.id}>
                <UserItem user={user} />

                {posts.filter((post: IPost) => post.userId === user.id).map((post: IPost) => (
                    <div key={post.id}>
                        <PostItem post={post} />

                        {comments.filter((comment: IComment) => comment.postId === post.id).map((comment: IComment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </div>
                ))}
            </div>
        ))}
    </>
)}