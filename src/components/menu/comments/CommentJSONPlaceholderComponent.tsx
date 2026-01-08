import type { FC } from "react";
import type { IJPComment } from "../../../model/jsonplaceholder/IJPComment";
import { Link } from "react-router-dom";
import "../Items.css";

type CommentJSONPlaceholderComponentProps = {
    item: IJPComment
}

export const CommentJSONPlaceholderComponent: FC<CommentJSONPlaceholderComponentProps> = ({ item }) => {
    return (
        <div className="item-card">
            <Link to={item.id.toString()} state={item} className="title">
                Comment #{item.id} (Post ID: {item.postId})
            </Link>
            <div className="info-row"><span className="info-label">Name:</span> {item.name}</div>
            <div className="info-row"><span className="info-label">Email:</span> {item.email}</div>
            <div className="info-row" style={{ marginTop: '10px', fontStyle: 'italic' }}>"{item.body}"</div>
        </div>
    );
};