import { useEffect, useState } from "react";
import type { IJPComment } from "../../../model/jsonplaceholder/IJPComment";
import { commentService } from "../../../services/api.service";
import { CommentJSONPlaceholderComponent } from "./CommentJSONPlaceholderComponent";

export const CommentsJSONPlaceholderComponent = () => {
    const [comments, setComments] = useState<IJPComment[]>([]);

    useEffect(() => {
        commentService.getAllJSONPlaceholder().then((all: IJPComment[]) => {
            setComments(all);
        });
    }, []);

    return (
        <div>
            {
                comments.map(comment => <CommentJSONPlaceholderComponent item={comment} key={comment.id} />)
            }
        </div>
    );
};