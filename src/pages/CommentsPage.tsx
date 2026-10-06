import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { commentActions } from "../redux/slices/CommentSlice";
import type { IComment } from "../models/IComments";
import { CommentItem } from "../components/CommentItem";




export const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);

    return (
        <>
            {comments.map((comment: IComment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </>
    )
}