import {useEffect, useState} from "react";
import type {ICommentsModel} from "../../models/ICommentsModel";
import {loadComments} from "../../service/api.service";
import {CommentComponent} from "../comment-component/CommentComponent";

export const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentsModel[]>([])

    useEffect(() => {
        loadComments().then(value => setComments(value))
    }, [])

    return (
        <div>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    )
}