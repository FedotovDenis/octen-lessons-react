import type {IPostsModel} from "./IPostsModel.ts";


export interface IPostResponseDymmeyjson {
    posts: IPostsModel[];
    total: number;
    skip: number;
    limit: number;
}
