import type {FC} from "react";
import type {ICommentsModel} from "../../models/ICommentsModel";


type PropType = {
    comment: ICommentsModel;
}
export const CommentComponent:FC<PropType> = ({comment: {postId, id, name, email, body}}) => {
    return(
        <div className={"head"}>
            <h1>Posts: {postId}</h1>
            <h2>ID: {id}</h2>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <p>Text: {body}</p>
        </div>
    )
}