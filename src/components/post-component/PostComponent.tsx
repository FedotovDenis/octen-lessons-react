import type {FC} from "react";
import type {IPostsModel} from "../../models/IPostsModel.ts";

type PropType = {
    post: IPostsModel;
}
export const PostComponent:FC<PropType> = ({post: {id, title, body}}) => {
    return(
        <div>
            <h3>{id}</h3>
            <h1>{title}</h1>
            <big>{body}</big>
        </div>
    )
}