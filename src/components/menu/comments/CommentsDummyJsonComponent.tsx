import { useEffect, useState } from "react";
import type { IDJComment } from "../../../model/dummyjson/IDJComment";
import { commentService } from "../../../services/api.service";
import { CommentDummyJsonComponent } from "./CommentDummyJsonComponent";

export const CommentsDummyJsonComponent = () => {
    const [comments, setComments] = useState<IDJComment[]>([]);

    useEffect(() => {
        commentService.getAllDummyJSON().then((all: IDJComment[]) => {
            setComments(all);
        });
    }, []);

    return (
        <div>
            {
                comments.map(comment => <CommentDummyJsonComponent item={comment} key={comment.id} />)
            }
        </div>
    );
};