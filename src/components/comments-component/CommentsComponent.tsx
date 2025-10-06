import {loadComments} from "../../service/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import {useEffect, useState} from "react";
import type {ICommentsModel} from "../../model/ICommentsModel.ts";
import "./CommentsComponent.css";


export const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentsModel[]>([]);

    useEffect(() => {
        loadComments().then(value => setComments(value))
    }, [])
    return(
        <div id={"main"}>
            {
                comments.map(coment => (<CommentComponent comment={coment} key={coment.id}/>))
            }
        </div>
    )
}