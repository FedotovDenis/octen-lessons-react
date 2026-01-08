import type { FC } from "react";
import type { IDJComment } from "../../../model/dummyjson/IDJComment";
import { Link } from "react-router-dom";
import "../Items.css";

type CommentDummyJsonComponentProps = {
    item: IDJComment
}

export const CommentDummyJsonComponent: FC<CommentDummyJsonComponentProps> = ({ item }) => {
    return (
        <div className="item-card">
            <Link to={item.id.toString()} state={item} className="title">
                Comment #{item.id} (Post ID: {item.postId})
            </Link>
            <div className="info-row"><span className="info-label">Author:</span> {item.user.username}</div>
            <div className="info-row" style={{ marginTop: '10px', fontStyle: 'italic' }}>"{item.body}"</div>
        </div>
    );
};
