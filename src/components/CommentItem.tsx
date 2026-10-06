import type { FC } from "react";
import type { IComment } from "../models/IComments";



type CommentItemPropType = {
    comment: IComment;
};

export const CommentItem: FC<CommentItemPropType> = ({ comment }) => {
    return (
        <div>
            <h4>Коментарі: {comment.name}</h4>
            <p>Текст коментарів: {comment.body}</p>
        </div>
    );
};
