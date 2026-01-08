import { FC } from "react";
import type { IJPPost } from "../../../model/jsonplaceholder/IJPPost";
import { Link } from "react-router-dom";
import "../Items.css";

type PostJSONPlaceholderComponentProps = {
    item: IJPPost
}

export const PostJSONPlaceholderComponent: FC<PostJSONPlaceholderComponentProps> = ({ item }) => {
    return (
        <div className="item-card">
            <Link to={item.id.toString()} state={item} className="title">
                {item.id}. {item.title}
            </Link>
            <div className="info-row">{item.body}</div>
            <div className="info-row"><span className="info-label">User ID:</span> {item.userId}</div>
        </div>
    );
};