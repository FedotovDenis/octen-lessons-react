import type {FC} from "react";
import type {IPostsModel} from "../../models/IPostsModel.ts"
import './PostComponet.css'

type PropType = {
    post: IPostsModel;
}

export const PostComponet:FC<PropType> = ({post: {userId, id, title, body}}) => {
    return(
        <div id={'head'}>{userId} {id} {title} {body}</div>
    )
}

