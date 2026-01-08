import type { IDJPost } from "./IDJPost";

export interface IDJPostsResponse {
    posts: IDJPost[];
    total: number;
    skip: number;
    limit: number;
}
