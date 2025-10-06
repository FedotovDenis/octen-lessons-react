import type {IPostsModel} from "../models/IPostsModel.ts";

const endpointPosts = import.meta.env.VITE_BASE_API_URL + '/posts';

const loadPosts = async ():Promise<IPostsModel[]> => {
    return await fetch(endpointPosts).
        then(res => res.json());
}

export {loadPosts};
