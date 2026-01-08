import { FC } from "react";
import type { IDJPost } from "../../../model/dummyjson/IDJPost";
import { Link } from "react-router-dom";
import "../Items.css";

type PostDummyJsonComponentProps = {
    item: IDJPost
}

export const PostDummyJsonComponent: FC<PostDummyJsonComponentProps> = ({ item }) => {
    return (
        <div className="item-card">
            <Link to={item.id.toString()} state={item} className="title">
                {item.id}. {item.title}
            </Link>
            <div className="info-row">{item.body}</div>
            <div className="info-row">
                <span className="info-label">Tags:</span> {item.tags.join(', ')}
            </div>
            <div className="info-row">
                <span className="info-label">Reactions:</span> 👍 {item.reactions.likes} | 👎 {item.reactions.dislikes}
            </div>
            <div className="info-row"><span className="info-label">Views:</span> 👁 {item.views}</div>
        </div>
    );
};