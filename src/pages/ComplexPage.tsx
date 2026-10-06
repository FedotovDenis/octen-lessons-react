import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/CommentSlice";
import {userActions} from "../redux/slices/UserSlice";
import {postActions} from "../redux/slices/PostSlice";



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
            {/* Тут тоже ментор сказал что знаете как сделать и сами и допишите дописать */}
        </>
    )
}
