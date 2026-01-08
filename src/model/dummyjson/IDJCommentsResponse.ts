import type { IDJComment } from "./IDJComment";

export interface IDJCommentsResponse {
    comments: IDJComment[];
    total: number;
    skip: number;
    limit: number;
}
