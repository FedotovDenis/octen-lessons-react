import type {IPostResponseDymmeyjson} from "../models/IPostResponseDymmeyjson";
import type {IPostsModel} from "../models/IPostsModel";
import type {IPostResponseDymmeyjsonTodos} from "../models/IPostResponseDymmeyjsonTodos";
import type {ITodoModels} from "../models/ITodoModels";
import type {ICommentsModel} from "../models/ICommentsModel";



const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointComments = import.meta.env.VITE_API_ENDPOINT_COMMENTS + '/comments';


const loadPosts = async ():Promise<IPostsModel[]> => {
    const responsePosts: IPostResponseDymmeyjson = await fetch(endpointPosts)
        .then(value => value.json());
    return responsePosts.posts;
}

const loadTodos = async ():Promise<ITodoModels[]> => {
    const responseTodos: IPostResponseDymmeyjsonTodos = await fetch(endpointTodos)
        .then(value => value.json());
    return responseTodos.todos;
}

const loadComments = async ():Promise<ICommentsModel[]> => {
    const responseComments = await fetch(endpointComments)
        .then(value => value.json());
    return responseComments.comments;
}


export {loadComments, loadPosts, loadTodos};
